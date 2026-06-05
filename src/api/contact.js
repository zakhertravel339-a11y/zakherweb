import apiClient from './client.js'
import { cachedGet } from './cache.js'
import { getContactFallback, mergeContact } from '@/data/contactFallback.js'

export async function fetchContact() {
  return cachedGet('contact', async () => {
    try {
      const { data } = await apiClient.get('/v1/ui/portal/contact/')
      return mergeContact(data)
    } catch {
      return getContactFallback()
    }
  })
}
