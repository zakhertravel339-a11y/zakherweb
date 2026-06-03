import apiClient from './client.js'

export async function fetchTourPackages(language) {
  const { data } = await apiClient.get('/v1/ui/portal/tour-package/', {
    headers: language ? { 'X-Language': language } : {},
  })
  return data
}

export async function fetchPackageByPath(path, language) {
  const { data } = await apiClient.get('/v1/ui/portal/tour-package/by-path/', {
    params: { path },
    headers: language ? { 'X-Language': language } : {},
  })
  return data
}

export async function fetchTourByPath(path, language) {
  const { data } = await apiClient.get('/v1/ui/portal/tour-package/tour/by-path/', {
    params: { path },
    headers: language ? { 'X-Language': language } : {},
  })
  return data
}
