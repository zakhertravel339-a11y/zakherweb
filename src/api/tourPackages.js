import apiClient from './client.js'
import { cachedGet } from './cache.js'

export async function fetchTourPackages(language) {
  return cachedGet(`tour-packages:${language || 'en'}`, async () => {
    const { data } = await apiClient.get('/v1/ui/portal/tour-package/', {
      headers: language ? { 'X-Language': language } : {},
    })
    return data
  })
}

export async function fetchPackageByPath(path, language) {
  return cachedGet(`tour-package-by-path:${language || 'en'}:${path}`, async () => {
    const { data } = await apiClient.get('/v1/ui/portal/tour-package/by-path/', {
      params: { path },
      headers: language ? { 'X-Language': language } : {},
    })
    return data
  })
}

export async function fetchTourByPath(path, language) {
  return cachedGet(`tour-by-path:${language || 'en'}:${path}`, async () => {
    const { data } = await apiClient.get('/v1/ui/portal/tour-package/tour/by-path/', {
      params: { path },
      headers: language ? { 'X-Language': language } : {},
    })
    return data
  })
}
