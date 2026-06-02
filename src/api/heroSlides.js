import apiClient from './client.js'

export async function fetchHeroSlides() {
  const { data } = await apiClient.get('/v1/ui/portal/hero-slide/')
  return Array.isArray(data) ? data : []
}
