import apiClient from './client.js'
import { cachedGet } from './cache.js'
import { getAboutFallback, mergeAbout } from '@/data/aboutFallback.js'

export async function fetchAboutContent(language) {
  return cachedGet(`about-content:${language || 'en'}`, async () => {
    try {
      const { data } = await apiClient.get('/v1/ui/portal/about/', {
        headers: language ? { 'X-Language': language } : {},
      })
      return mergeAbout({ sections: data.sections, events: getAboutFallback().events })
    } catch {
      return getAboutFallback()
    }
  })
}

export async function fetchAboutEvents(language) {
  return cachedGet(`about-events:${language || 'en'}`, async () => {
    const { data } = await apiClient.get('/v1/ui/portal/about/events/', {
      headers: language ? { 'X-Language': language } : {},
      timeout: 90000,
    })
    if (!data || !Array.isArray(data.events)) {
      throw new Error('Invalid about events response')
    }
    return data
  })
}
