import apiClient from './client.js'
import { cachedGet } from './cache.js'
import { getBrochuresFallback } from '@/data/brochuresFallback.js'

export async function fetchBrochures() {
  return cachedGet('brochures', async () => {
    try {
      const { data } = await apiClient.get('/v1/ui/portal/brochure/')
      if (Array.isArray(data) && data.length) return data
    } catch {
      /* fallback */
    }
    return getBrochuresFallback()
  })
}
