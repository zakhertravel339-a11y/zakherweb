import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/router.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import i18nPlugin from './plugins/i18n.js'
import domTranslator, { translateNow } from './plugins/domTranslator.js'
import { useI18nStore } from './store/i18nStore.js'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(i18nPlugin, { pinia })
app.use(domTranslator, { router, pinia })

const i18n = useI18nStore(pinia)
i18n.fetchTranslations(i18n.language).finally(() => {
    app.mount('#app')
    translateNow(i18n)
})
