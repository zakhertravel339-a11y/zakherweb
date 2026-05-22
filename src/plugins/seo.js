import { applySeo } from '@/seo/apply.js'

export default {
  install(_app, { router } = {}) {
    if (!router) return

    router.isReady().then(() => {
      applySeo(router.currentRoute.value.path)
    })

    router.afterEach((to) => {
      applySeo(to.path)
    })
  },
}
