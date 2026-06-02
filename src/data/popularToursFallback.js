/**
 * Static fallback when API has no data yet (same content as the original homepage slider).
 */
import imgAzRuTr from '@/assets/images/az-ru-tr-paket.png'
import imgPopular8 from '@/assets/images/popular-tour-8.png'
import imgTurkiye from '@/assets/images/turkiye.jpg'
import imgUzbekistan from '@/assets/images/uzbekistantour.jpeg'
import imgKazakhstan from '@/assets/images/kazakhstan-tour.jpg'
import imgKyrgyzstan from '@/assets/images/kyrgyzstan-tour-popular.jpg'
import imgGeorgia from '@/assets/images/georgia-tour.jpeg'
import imgPoland from '@/assets/images/poland-tour.jpg'
import imgCzech from '@/assets/images/czech republic.jpg'
import imgRussia from '@/assets/images/russia tour.jpg'
import imgUae from '@/assets/images/uae tour.jpg'
import imgUkraine from '@/assets/images/popular-tour-4.jpg'
import imgKzKg from '@/assets/images/kyrgyzstan tor.png'

const ROWS = [
  ['1 Trip - 3 Countries', 'Azerbaijan\nTurkiye\nGeorgia', '/tour-packages', imgAzRuTr],
  ['Turkiye tours', '', '/turkiye', imgPopular8],
  ['Turkiye tours', '', '/turkiye', imgTurkiye],
  ['Uzbekistan tours', '', '/uzbekistan', imgUzbekistan],
  ['Kazakhstan tours', '', '/kazakhstan', imgKazakhstan],
  ['Kyrgyzstan tours', '', '/kyrgyzstan', imgKyrgyzstan],
  ['Georgia tours', '', '/georgia', imgGeorgia],
  ['Poland tours', '', '/poland', imgPoland],
  ['Czech Republic tours', '', '/czech-republic', imgCzech],
  ['Russia tours', '', '/russia', imgRussia],
  ['United Arab Emirates tours', '', '/united-arab-emirates', imgUae],
  ['Ukraine tours', '', '/ukraine', imgUkraine],
  ['1 Trip - 2 Countries', 'Kazakhstan\nKyrgyzstan', '/tour-packages', imgKzKg],
]

export function getPopularToursFallback() {
  return {
    section_title: 'MOST POPULAR TOURS',
    banner_badges: [
      'Leisure tourism',
      'Golf tourism',
      'Medical tourism',
      'Hunting tourism',
    ],
    tours: ROWS.map(([title, subtitle, link_url, image_url], index) => ({
      id: `fallback-${index + 1}`,
      sort_order: index,
      slug: `fallback-${index + 1}`,
      title,
      subtitle,
      button_label: 'Read more',
      link_url,
      image_url,
      image_target: `img${index + 1}`,
    })),
  }
}
