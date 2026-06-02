import apiClient from './client.js'

export async function fetchBranchDetail(path, language) {
  const { data } = await apiClient.get('/v1/ui/portal/branch/detail/', {
    params: { path },
    headers: language ? { 'X-Language': language } : {},
  })
  return data
}
