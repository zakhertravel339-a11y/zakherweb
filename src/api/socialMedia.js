import apiClient from './client.js'
import { cachedGet } from './cache.js'
import { getSocialMediaFallback, mergeSocialMedia } from '@/data/socialMediaFallback.js'

export async function fetchSocialMedia() {
  return cachedGet('social-media', async () => {
    try {
      const { data } = await apiClient.get('/v1/ui/portal/social-media/')
      return mergeSocialMedia(data)
    } catch {
      return getSocialMediaFallback()
    }
  })
}
