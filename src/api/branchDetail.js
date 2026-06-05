import apiClient from './client.js'
import { cachedGet } from './cache.js'

export async function fetchBranchDetail(path, language) {
  return cachedGet(`branch-detail:${language || 'en'}:${path}`, async () => {
    const { data } = await apiClient.get('/v1/ui/portal/branch/detail/', {
      params: { path },
      headers: language ? { 'X-Language': language } : {},
    })
    return data
  })
}
