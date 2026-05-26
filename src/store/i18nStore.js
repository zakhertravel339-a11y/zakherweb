import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import apiClient from '@/api/client.js'
import autoTranslations from '@/assets/auto_translations.json'

const STORAGE_KEY = 'zakher.language'
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

export const useI18nStore = defineStore('i18n', () => {
    const initialLang = readStoredLanguage()
    const language = ref(initialLang)
    const messages = ref(buildMessagesDict(autoTranslations, initialLang))
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

    async function fetchTranslations(lang = language.value) {
        loading.value = true
        applyMessages(lang)
        try {
            const { data } = await apiClient.get('/v1/ui/portal/translation/', {
                headers: { 'X-Language': lang },
            })
            if (data && typeof data === 'object' && Object.keys(data).length > 0) {
                applyMessages(lang, data)
            }
        } catch (_) {
            applyMessages(lang)
        } finally {
            loading.value = false
        }
    }

    async function setLanguage(lang) {
        if (!SUPPORTED_LANGUAGES.find(l => l.code === lang)) return
        language.value = lang
        try { localStorage.setItem(STORAGE_KEY, lang) } catch (_) {}
        applyHtmlAttrs(lang)
        applyMessages(lang)
        await fetchTranslations(lang)
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
