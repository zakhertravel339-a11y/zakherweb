import apiClient from './client.js'

export async function fetchSocialMedia() {
  try {
    const { data } = await apiClient.get('/v1/ui/portal/social-media/')
    if (data && (data.links?.length || data.instagram_cards?.length)) return data
  } catch {
  }
  return null
}
