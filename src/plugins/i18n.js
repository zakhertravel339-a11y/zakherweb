import { useI18nStore } from '@/store/i18nStore.js'

export default {
    install(app, { pinia } = {}) {
        const store = useI18nStore(pinia)

        app.config.globalProperties.$t = (key, fallback) => {
            store.revision
            return store.t(key, fallback)
        }
        app.config.globalProperties.$i18n = store

        app.provide('i18n', store)
    },
}
