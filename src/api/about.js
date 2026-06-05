import apiClient from './client.js'
import { getAboutFallback, mergeAbout } from '@/data/aboutFallback.js'

export async function fetchAboutContent(language) {
  try {
    const { data } = await apiClient.get('/v1/ui/portal/about/', {
      headers: language ? { 'X-Language': language } : {},
    })
    return mergeAbout({ sections: data.sections, events: getAboutFallback().events })
  } catch {
    return getAboutFallback()
  }
}

export async function fetchAboutEvents(language) {
  const { data } = await apiClient.get('/v1/ui/portal/about/events/', {
    headers: language ? { 'X-Language': language } : {},
    timeout: 90000,
  })
  if (!data || !Array.isArray(data.events)) {
    throw new Error('Invalid about events response')
  }
  return data
}
