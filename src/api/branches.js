import apiClient from './client.js'
import { cachedGet } from './cache.js'

import flagAze from '../assets/images/flag-aze.jpg'
import flagTur from '../assets/images/turkiye-flag.png'
import flagKz from '../assets/images/Kazakhstan-Flag.jpg'
import flagKg from '../assets/images/kyrgyzstan-flag.jpg'
import flagUz from '../assets/images/uzbekistan.jpeg'
import flagGe from '../assets/images/georgia-flag.jpg'
import flagPl from '../assets/images/poland-flag.jpg'
import flagCz from '../assets/images/czech-flag.jpg'
import flagRu from '../assets/images/russia-flag.jpg'
import flagAe from '../assets/images/UAE-Flag.png'
import flagUa from '../assets/images/ukraine-flag.jpg'

export const FALLBACK_BRANCHES = [
  { id: 'f1', sort_order: 0, name: 'Azerbaijan', name_key: 'country.azerbaijan', flag_image_url: flagAze, link_url: '/azerbaijan' },
  { id: 'f2', sort_order: 1, name: 'Turkiye', name_key: 'country.turkiye', flag_image_url: flagTur, link_url: '/turkiye' },
  { id: 'f3', sort_order: 2, name: 'Kazakhstan', name_key: 'country.kazakhstan', flag_image_url: flagKz, link_url: '/kazakhstan' },
  { id: 'f4', sort_order: 3, name: 'Kyrgyzstan', name_key: 'country.kyrgyzstan', flag_image_url: flagKg, link_url: '/kyrgyzstan' },
  { id: 'f5', sort_order: 4, name: 'Uzbekistan', name_key: 'country.uzbekistan', flag_image_url: flagUz, link_url: '/uzbekistan' },
  { id: 'f6', sort_order: 5, name: 'Georgia', name_key: 'country.georgia', flag_image_url: flagGe, link_url: '/georgia' },
  { id: 'f7', sort_order: 6, name: 'Poland', name_key: 'country.poland', flag_image_url: flagPl, link_url: '/poland' },
  { id: 'f8', sort_order: 7, name: 'Czech Republic', name_key: 'country.czech', flag_image_url: flagCz, link_url: '/czech-republic' },
  { id: 'f9', sort_order: 8, name: 'Russia', name_key: 'country.russia', flag_image_url: flagRu, link_url: '/russia' },
  { id: 'f10', sort_order: 9, name: 'UAE', name_key: 'country.uae', flag_image_url: flagAe, link_url: '/united-arab-emirates' },
  { id: 'f11', sort_order: 10, name: 'Ukraine', name_key: 'country.ukraine', flag_image_url: flagUa, link_url: '/ukraine' },
]

export async function fetchBranches() {
  return cachedGet('branches', async () => {
    try {
      const { data } = await apiClient.get('/v1/ui/portal/branch/')
      if (Array.isArray(data) && data.length) return data
    } catch (_) {
      /* fallback */
    }
    return FALLBACK_BRANCHES
  })
}
