import apiClient from './client.js'
import { getCertificatesFallback } from '@/data/certificatesFallback.js'

export async function fetchCertificates() {
  try {
    const { data } = await apiClient.get('/v1/ui/portal/certificate/')
    if (Array.isArray(data) && data.length) return data
  } catch {
    /* fallback */
  }
  return getCertificatesFallback()
}
