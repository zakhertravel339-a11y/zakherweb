import { nextTick } from 'vue'
import { useI18nStore } from '@/store/i18nStore.js'

const SKIP_TAGS = new Set([
    'SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE', 'PRE', 'TEXTAREA',
    'OPTION', 'SELECT',
])

const SKIP_ATTRS = new Set(['placeholder', 'alt', 'title', 'aria-label'])

const ORIGINAL_TEXT = '__zakherOriginal'
const ORIGINAL_ATTR_PREFIX = '__zakherOriginalAttr__'

function shouldSkipNode(node) {
    let parent = node.parentElement
    while (parent) {
        if (SKIP_TAGS.has(parent.tagName)) return true
        if (parent.hasAttribute('data-no-translate')) return true
        parent = parent.parentElement
    }
    return false
}

function getTextNodes(root) {
    const nodes = []
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            const value = node.nodeValue
            if (!value) return NodeFilter.FILTER_REJECT
            const trimmed = value.trim()
            if (!trimmed) return NodeFilter.FILTER_REJECT
            if (shouldSkipNode(node)) return NodeFilter.FILTER_REJECT
            return NodeFilter.FILTER_ACCEPT
        },
    })
    let n
    while ((n = walker.nextNode())) nodes.push(n)
    return nodes
}

function getTranslatableElements(root) {
    return root.querySelectorAll('[placeholder], [alt], [title], [aria-label]')
}

let normalizedDict = null
let normalizedDictRef = null

function buildNormalizedDict(dict) {
    if (normalizedDictRef === dict && normalizedDict) return normalizedDict
    const out = Object.create(null)
    for (const key in dict) {
        const collapsed = key.replace(/\s+/g, ' ').trim()
        if (collapsed && out[collapsed] === undefined) {
            out[collapsed] = dict[key]
        }
    }
    normalizedDict = out
    normalizedDictRef = dict
    return out
}

function lookupTranslation(dict, raw) {
    if (!raw || !dict) return undefined
    const trimmed = raw.trim()
    if (!trimmed) return undefined
    let v = dict[trimmed]
    if (v !== undefined) return v
    const collapsed = trimmed.replace(/\s+/g, ' ')
    v = dict[collapsed]
    if (v !== undefined) return v
    const norm = buildNormalizedDict(dict)
    return norm[collapsed]
}

function restoreOriginals(root) {
    if (!root) return
    for (const node of getTextNodes(root)) {
        if (node[ORIGINAL_TEXT] !== undefined) {
            node.nodeValue = node[ORIGINAL_TEXT]
        }
    }
    for (const el of getTranslatableElements(root)) {
        for (const attr of SKIP_ATTRS) {
            const cacheKey = ORIGINAL_ATTR_PREFIX + attr
            if (el[cacheKey] !== undefined) {
                el.setAttribute(attr, el[cacheKey])
            }
        }
    }
}

function translateNodes(root, dict) {
    if (!root || !dict || !Object.keys(dict).length) return

    const textNodes = getTextNodes(root)
    for (const node of textNodes) {
        if (node[ORIGINAL_TEXT] === undefined) {
            node[ORIGINAL_TEXT] = node.nodeValue
        }
        const original = node[ORIGINAL_TEXT]
        const leading = original.match(/^\s*/)[0]
        const trailing = original.match(/\s*$/)[0]
        const translation = lookupTranslation(dict, original)
        if (translation !== undefined && translation !== null && translation !== '') {
            const next = leading + translation + trailing
            if (node.nodeValue !== next) node.nodeValue = next
        }
    }

    for (const el of getTranslatableElements(root)) {
        for (const attr of SKIP_ATTRS) {
            if (!el.hasAttribute(attr)) continue
            const cacheKey = ORIGINAL_ATTR_PREFIX + attr
            if (el[cacheKey] === undefined) {
                el[cacheKey] = el.getAttribute(attr)
            }
            const original = el[cacheKey]
            if (!original) continue
            const translation = lookupTranslation(dict, original)
            if (translation !== undefined && translation !== null && translation !== '') {
                if (el.getAttribute(attr) !== translation) {
                    el.setAttribute(attr, translation)
                }
            }
        }
    }
}

let observer = null
let pending = null
let lastDict = null
const root = () => document.getElementById('app') || document.body

function scheduleTranslate(dict, restore = false) {
    lastDict = dict
    if (pending) cancelAnimationFrame(pending)
    pending = requestAnimationFrame(() => {
        pending = null
        const r = root()
        if (!r || !lastDict) return
        if (restore) restoreOriginals(r)
        translateNodes(r, lastDict)
    })
}

function startObserver() {
    if (observer) observer.disconnect()
    observer = new MutationObserver(() => {
        if (lastDict) scheduleTranslate(lastDict)
    })
    const r = root()
    if (r) observer.observe(r, { childList: true, subtree: true, characterData: true })
}

function runTranslate(store, restore = false) {
    scheduleTranslate(store.messages, restore)
}

export function translateNow(store) {
    startObserver()
    runTranslate(store, true)
}

export default {
    install(_app, options = {}) {
        const router = options.router
        const pinia = options.pinia
        const store = pinia ? useI18nStore(pinia) : useI18nStore()

        store.$subscribe((_mutation, state) => {
            nextTick(() => runTranslate({ messages: state.messages }, true))
        })

        if (router) {
            router.afterEach(() => {
                nextTick(() => {
                    startObserver()
                    runTranslate(store)
                    setTimeout(() => runTranslate(store), 200)
                })
            })
        }

        if (typeof window !== 'undefined') {
            const boot = () => {
                startObserver()
                runTranslate(store)
            }
            window.addEventListener('load', () => {
                boot()
                setTimeout(() => runTranslate(store), 300)
                setTimeout(() => runTranslate(store), 1000)
            }, { once: true })
        }
    },
}
