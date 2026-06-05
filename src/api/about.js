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
  try {
    const { data } = await apiClient.get('/v1/ui/portal/about/events/', {
      headers: language ? { 'X-Language': language } : {},
    })
    return data
  } catch {
    return getAboutFallback().events
  }
}
