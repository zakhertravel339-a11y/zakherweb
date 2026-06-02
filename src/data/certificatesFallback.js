import img1 from '@/assets/images/1.jpg'
import img2 from '@/assets/images/2.jpg'
import img3 from '@/assets/images/3.jpg'
import img4 from '@/assets/images/4.jpg'
import img5 from '@/assets/images/5.jpg'
import img6 from '@/assets/images/6.jpg'
import img7 from '@/assets/images/7.jpg'
import img8 from '@/assets/images/8.jpg'
import img9 from '@/assets/images/9.jpg'
import img10 from '@/assets/images/10.jpg'
import img11 from '@/assets/images/11.jpg'
import img12 from '@/assets/images/12.jpg'
import img13 from '@/assets/images/13.jpg'
import img14 from '@/assets/images/14.jpg'
import img15 from '@/assets/images/15.jpg'
import img16 from '@/assets/images/16.jpg'
import img17 from '@/assets/images/17.jpg'
import img18 from '@/assets/images/18.jpg'
import img19 from '@/assets/images/19.jpg'
import img20 from '@/assets/images/20.jpg'
import imgCert7 from '@/assets/images/certif7.jpg'
import imgCert8 from '@/assets/images/certif8.jpg'
import imgCert10 from '@/assets/images/certif10.jpg'

const IMAGES = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  imgCert7, imgCert8, imgCert10,
]

export function getCertificatesFallback() {
  return IMAGES.map((image_url, index) => ({
    id: `fallback-${index + 1}`,
    sort_order: index,
    image_url,
    alt_text: `Certificate ${index + 1}`,
  }))
}
