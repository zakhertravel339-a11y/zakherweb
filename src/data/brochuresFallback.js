import cover1 from '@/assets/images/maiden tower.jpeg'
import cover2 from '@/assets/images/shusha_1.jpg'
import cover3 from '@/assets/images/flame tower.jpg'
import cover4 from '@/assets/images/iceriweher.jpg'
import cover5 from '@/assets/images/nature.jpg'
import cover6 from '@/assets/images/ski.jpg'
import cover7 from '@/assets/images/sheki.jpeg'
import cover8 from '@/assets/images/nature2.jpg'
import cover9 from '@/assets/images/images nature.jpeg'
import cover10 from '@/assets/images/ukraine.jpeg'
import cover11 from '@/assets/images/ukraine2.jpg'
import cover12 from '@/assets/images/ukraine3.jpg'
import cover13 from '@/assets/images/russia.jpg'
import cover14 from '@/assets/images/russia4.jpg'
import cover15 from '@/assets/images/russia3.jpg'
import cover16 from '@/assets/images/russia2.jpg'
import cover17 from '@/assets/images/poland.jpeg'
import cover18 from '@/assets/images/kyrgyzstan.jpg'
import cover19 from '@/assets/images/kyrgyzstan2.jpeg'
import cover20 from '@/assets/images/krygyzstan3.jpg'
import cover21 from '@/assets/images/kyrgyzstan4.jpg'
import cover22 from '@/assets/images/turkiye.jpg'
import cover23 from '@/assets/images/kazakhstan1.jpeg'
import cover24 from '@/assets/images/kazakhstan2.jpeg'
import cover25 from '@/assets/images/uzvekistan.jpeg'
import cover26 from '@/assets/images/georgia1.jpg'
import cover27 from '@/assets/images/georgia7.jpeg'

const ITEMS = [
  { cover_image_url: cover1, file_url: '/pdf/inside_press_eng.pdf', title: 'Azerbaijan catalog (EN)' },
  { cover_image_url: cover2, file_url: '/pdf/inside_press_eng%20(1).pdf', title: 'Azerbaijan catalog (EN)' },
  { cover_image_url: cover3, file_url: '/pdf/inside_press_rus.pdf', title: 'Azerbaijan catalog (RU)' },
  { cover_image_url: cover4, file_url: '/pdf/inside_press_ereb.pdf', title: 'Azerbaijan catalog (AR)' },
  { cover_image_url: cover5, file_url: '/pdf/inside_press_china.pdf', title: 'Azerbaijan catalog (Chinese)' },
  { cover_image_url: cover6, file_url: '/pdf/Zakher-booklet_arab_2022-3.pdf', title: 'Azerbaijan tours (AR)' },
  { cover_image_url: cover7, file_url: '/pdf/Zakher-booklet_eng_2022-1.pdf', title: 'Azerbaijan tours (EN)' },
  { cover_image_url: cover8, file_url: '/pdf/Zakher_booklet_yeni-2_rus.pdf', title: 'Azerbaijan tours (RU)' },
  { cover_image_url: cover9, file_url: '/pdf/az-restorants-03-scaled.jpg', title: 'Azerbaijani Restaurants (EN)' },
  { cover_image_url: cover10, file_url: '/pdf/Zakher_Ukraina_broshura.pdf', title: 'Ukraine catalog (AR)' },
  { cover_image_url: cover11, file_url: '/pdf/Zakher_booklet_Ukraine_c.pdf', title: 'Ukraine tours (EN/AR)' },
  { cover_image_url: cover12, file_url: '/pdf/Zakher_booklet_Ukraine_c%20(1).pdf', title: 'Ukraine tours (EN/AR)' },
  { cover_image_url: cover13, file_url: '/pdf/Zakher_booklet_Sochi_A4_lazer_print.pdf', title: 'Russia Sochi tours (EN/AR)' },
  { cover_image_url: cover14, file_url: '/pdf/russia-brashour.pdf-arabic.pdf', title: 'Russia tours (AR)' },
  { cover_image_url: cover15, file_url: '/pdf/russia-brashour.pdf', title: 'Russia tours (EN)' },
  { cover_image_url: cover16, file_url: '/pdf/russia-brashour.ai-ru.pdf', title: 'Russia tours (RU)' },
  { cover_image_url: cover17, file_url: '/pdf/Zakher_booklet_Poland_c.pdf', title: 'Poland tours (EN/AR)' },
  { cover_image_url: cover18, file_url: '/pdf/kyrg.pdf-EN.pdf', title: 'Kyrgyzstan tours (EN)' },
  { cover_image_url: cover19, file_url: '/pdf/kyrg.pdf-AR.pdf', title: 'Kyrgyzstan tours (AR)' },
  { cover_image_url: cover20, file_url: '/pdf/kyrg.pdf-RU.pdf', title: 'Kyrgyzstan tours (RU)' },
  { cover_image_url: cover21, file_url: '/pdf/Best-Hotels-and-Resturant-Kyrgizisatan.pdf', title: 'Kyrgyzstan Hotels and Restaurants (EN)' },
  { cover_image_url: cover22, file_url: '/pdf/turkiya.BOOKLET.pdf', title: 'Turkiye tours (EN/AR)' },
  { cover_image_url: cover23, file_url: '/pdf/kazakhstan-tour.pdf', title: 'Kazakhstan tours (EN/AR)' },
  { cover_image_url: cover24, file_url: '/pdf/Kazakhstan-flayer-.jpeg', title: 'Kazakhstan Hotels and Restaurants (EN)' },
  { cover_image_url: cover25, file_url: '/pdf/UZBEKISTAN-tours-booklet.pdf', title: 'Uzbekistan tours (EN/AR)' },
  { cover_image_url: cover26, file_url: '/pdf/georgia-arabic.pdf', title: 'Georgia tours (AR)' },
  { cover_image_url: cover27, file_url: '/pdf/georgia-english.pdf', title: 'Georgia tours (EN)' },
  { cover_image_url: cover26, file_url: '/pdf/georgia-german.pdf', title: 'Georgia tours (DE)' },
]

export function getBrochuresFallback() {
  return ITEMS.map((item, index) => ({
    id: `fallback-${index + 1}`,
    sort_order: index,
    ...item,
  }))
}
