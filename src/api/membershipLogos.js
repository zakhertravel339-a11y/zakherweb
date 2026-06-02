import apiClient from './client.js'
import imgGta from '@/assets/images/GTA  logo 2_page-0001 (1).jpg'
import imgTursab from '@/assets/images/tursab.png'
import imgKato from '@/assets/images/kato.png'
import imgIata from '@/assets/images/iata-Photoroom.png'
import imgAsos from '@/assets/images/asosiyasiya.jpg'
import imgIso from '@/assets/images/iso.jpg'

export const FALLBACK_MEMBERSHIP_LOGOS = [
  { id: 'f1', sort_order: 0, image_url: imgGta, alt_text: 'GTA' },
  { id: 'f2', sort_order: 1, image_url: imgTursab, alt_text: 'TURSAB' },
  { id: 'f3', sort_order: 2, image_url: imgKato, alt_text: 'KATO' },
  { id: 'f4', sort_order: 3, image_url: imgIata, alt_text: 'IATA' },
  { id: 'f5', sort_order: 4, image_url: imgAsos, alt_text: 'Association' },
  { id: 'f6', sort_order: 5, image_url: imgIso, alt_text: 'ISO' },
]

export async function fetchMembershipLogos() {
  try {
    const { data } = await apiClient.get('/v1/ui/portal/membership-logo/')
    if (Array.isArray(data) && data.length) return data
  } catch {
    /* fallback */
  }
  return FALLBACK_MEMBERSHIP_LOGOS
}
