import { storeToRefs } from 'pinia'
import { useI18nStore } from '@/store/i18nStore.js'

export function useTranslate() {
    const store = useI18nStore()
    const { revision, messages } = storeToRefs(store)

    function t(key, fallback) {
        revision.value
        messages.value
        return store.t(key, fallback)
    }

    return { t, store, revision, messages }
}
