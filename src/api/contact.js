import apiClient from './client.js'
import { getContactFallback, mergeContact } from '@/data/contactFallback.js'

export async function fetchContact() {
  try {
    const { data } = await apiClient.get('/v1/ui/portal/contact/')
    return mergeContact(data)
  } catch {
    return getContactFallback()
  }
}
