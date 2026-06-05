import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import apiClient from '@/api/client.js'
import autoTranslations from '@/assets/auto_translations.json'

const STORAGE_KEY = 'zakher.language'
const CACHE_PREFIX = 'zakher.i18n.cache.'
const CACHE_VERSION = 1
const CACHE_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000
const DEFAULT_LANGUAGE = 'en'

export const SUPPORTED_LANGUAGES = [
    { code: 'en', label: 'EN', title: 'English' },
    { code: 'az', label: 'AZ', title: 'Az\u0259rbaycan' },
    { code: 'ru', label: '\u0420\u0423', title: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439' },
    { code: 'ar', label: '\u0639\u0631', title: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629' },
]

function readStoredLanguage() {
    try {
        const v = localStorage.getItem(STORAGE_KEY)
        if (!v) return DEFAULT_LANGUAGE
        return SUPPORTED_LANGUAGES.find(l => l.code === v) ? v : DEFAULT_LANGUAGE
    } catch (_) {
        return DEFAULT_LANGUAGE
    }
}

function applyHtmlAttrs(lang) {
    try {
        document.documentElement.setAttribute('lang', lang)
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
    } catch (_) {}
}

function buildMessagesDict(source, lang) {
    const out = Object.create(null)
    if (!source) return out
    for (const enText in source) {
        const bag = source[enText] || {}
        const value = lang === 'en' ? enText : bag[lang]
        if (value) out[enText] = value
    }
    return out
}

function readLangCache(lang) {
    try {
        const raw = localStorage.getItem(`${CACHE_PREFIX}${lang}`)
        if (!raw) return null
        const parsed = JSON.parse(raw)
        if (parsed?.v !== CACHE_VERSION || !parsed.data) return null
        if (Date.now() - (parsed.ts || 0) > CACHE_MAX_AGE_MS) return null
        return parsed.data
    } catch (_) {
        return null
    }
}

function writeLangCache(lang, apiData) {
    try {
        localStorage.setItem(
            `${CACHE_PREFIX}${lang}`,
            JSON.stringify({ v: CACHE_VERSION, data: apiData, ts: Date.now() }),
        )
    } catch (_) {
        /* quota */
    }
}

// Dedup concurrent network refreshes for the same language.
const inflightTranslations = new Map()

export const useI18nStore = defineStore('i18n', () => {
    const initialLang = readStoredLanguage()
    const cachedApi = readLangCache(initialLang)
    const language = ref(initialLang)
    const messages = ref({
        ...buildMessagesDict(autoTranslations, initialLang),
        ...(cachedApi || {}),
    })
    const ready = ref(true)
    const loading = ref(false)
    const revision = ref(0)

    applyHtmlAttrs(initialLang)

    const isRtl = computed(() => language.value === 'ar')
    const currentLanguage = computed(
        () => SUPPORTED_LANGUAGES.find(l => l.code === language.value) || SUPPORTED_LANGUAGES[0]
    )

    function applyMessages(lang, apiData = {}) {
        const fallbackDict = buildMessagesDict(autoTranslations, lang)
        messages.value = { ...fallbackDict, ...apiData }
        revision.value += 1
        ready.value = true
    }

    async function fetchTranslations(lang = language.value, { background = false } = {}) {
        const cached = readLangCache(lang)
        if (cached) {
            applyMessages(lang, cached)
            if (!background) loading.value = false
        } else if (!background) {
            loading.value = true
            applyMessages(lang)
        }

        try {
            let request = inflightTranslations.get(lang)
            if (!request) {
                request = apiClient
                    .get('/v1/ui/portal/translation/', { headers: { 'X-Language': lang } })
                    .finally(() => inflightTranslations.delete(lang))
                inflightTranslations.set(lang, request)
            }
            const { data } = await request
            if (data && typeof data === 'object' && Object.keys(data).length > 0) {
                applyMessages(lang, data)
                writeLangCache(lang, data)
            }
        } catch (_) {
            if (!cached) applyMessages(lang)
        } finally {
            if (!background) loading.value = false
        }
    }

    async function setLanguage(lang) {
        if (!SUPPORTED_LANGUAGES.find(l => l.code === lang)) return
        if (lang === language.value) return

        language.value = lang
        try { localStorage.setItem(STORAGE_KEY, lang) } catch (_) {}
        applyHtmlAttrs(lang)

        const cached = readLangCache(lang)
        if (cached) {
            applyMessages(lang, cached)
            void fetchTranslations(lang, { background: true })
            return
        }

        applyMessages(lang)
        await fetchTranslations(lang, { background: false })
    }

    function t(key, fallback) {
        if (!key) return fallback ?? ''
        const value = messages.value[key]
        if (value !== undefined && value !== null && value !== '') {
            return value
        }
        if (fallback !== undefined && fallback !== '') {
            const byEnglish = messages.value[fallback]
            if (byEnglish !== undefined && byEnglish !== null && byEnglish !== '') {
                return byEnglish
            }
            return fallback
        }
        return key
    }

    return {
        language,
        messages,
        ready,
        loading,
        revision,
        isRtl,
        currentLanguage,
        fetchTranslations,
        setLanguage,
        t,
    }
})
