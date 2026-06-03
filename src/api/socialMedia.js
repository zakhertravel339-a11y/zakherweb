import apiClient from './client.js'
import { getSocialMediaFallback, mergeSocialMedia } from '@/data/socialMediaFallback.js'

export async function fetchSocialMedia() {
  try {
    const { data } = await apiClient.get('/v1/ui/portal/social-media/')
    return mergeSocialMedia(data)
  } catch {
    return getSocialMediaFallback()
  }
}
