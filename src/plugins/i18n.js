import { useI18nStore } from '@/store/i18nStore.js'

export default {
    install(app) {
        const store = useI18nStore()

        app.config.globalProperties.$t = (key, fallback) => store.t(key, fallback)
        app.config.globalProperties.$i18n = store

        app.provide('i18n', store)
    },
}
