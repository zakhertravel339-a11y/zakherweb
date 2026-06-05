import apiClient from './client.js'
import { cachedGet } from './cache.js'
import { getPopularToursFallback } from '@/data/popularToursFallback.js'

const memoryCache = new Map()

function normalizePayload(data) {
  if (!data?.tours?.length) return data
  return {
    ...data,
    tours: data.tours.map((tour, index) => ({
      ...tour,
      image_target: tour.image_target || `img${index + 1}`,
    })),
  }
}

function remember(language, data) {
  memoryCache.set(language, normalizePayload(data))
}

export function getPopularToursInstant(language) {
  return memoryCache.get(language) || getPopularToursFallback()
}

async function fetchFromApi(language) {
  // Dedup concurrent callers (home page prefetch + component mount) so they
  // share a single in-flight request instead of hitting the API twice.
  return cachedGet(`popular-tours:${language || 'en'}`, async () => {
    const { data } = await apiClient.get('/v1/ui/portal/popular-tour/', {
      headers: language ? { 'X-Language': language } : {},
      timeout: 30000,
    })
    if (data?.tours?.length) {
      remember(language, data)
      return normalizePayload(data)
    }
    return null
  })
}

export function prefetchPopularTours(language) {
  fetchPopularTours(language).catch(() => {})
}

export async function fetchPopularTours(language) {
  try {
    const fresh = await fetchFromApi(language)
    if (fresh) return fresh
  } catch {
    /* API unavailable */
  }

  const cached = memoryCache.get(language)
  if (cached?.tours?.length) return cached

  return getPopularToursFallback()
}
