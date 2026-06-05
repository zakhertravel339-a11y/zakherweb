import apiClient from './client.js'
import { cachedGet } from './cache.js'

export async function fetchHeroSlides() {
  return cachedGet('hero-slides', async () => {
    const { data } = await apiClient.get('/v1/ui/portal/hero-slide/')
    return Array.isArray(data) ? data : []
  })
}
