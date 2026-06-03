import imgDefault from '@/assets/images/cropped-Webp.net-resizeimage.png'
import imgKyrgyz from '@/assets/images/kyrgyzstan insta.jpg'
import imgKazakh from '@/assets/images/kazakhstan insta.jpg'
import imgEurope from '@/assets/images/europe insta.jpg'
import imgRussia from '@/assets/images/russia insta.jpg'
import imgTurkiye from '@/assets/images/turkiye insta.jpg'
import imgUzbek from '@/assets/images/uzbekistan insta.jpg'
import imgGeorgia from '@/assets/images/georgis insta.jpg'

const LINKS = [
  { id: 'fb', platform: 'facebook', url: 'https://www.facebook.com/p/Zakher-Travel-Azerbaijan-61552554323306/?locale=ru_RU', link_title: 'Join us on Facebook', sort_order: 0 },
  { id: 'tw', platform: 'twitter', url: 'https://x.com/ZakherTravel', link_title: 'Join us on X', sort_order: 1 },
  { id: 'wc', platform: 'wechat', url: 'https://www.wechat.com/', link_title: 'Join us on WeChat', sort_order: 2 },
  { id: 'tg', platform: 'telegram', url: 'https://t.me/', link_title: 'Join us on Telegram', sort_order: 3 },
  { id: 'yt', platform: 'youtube', url: 'https://www.youtube.com/@zakher.travel/videos', link_title: 'Join us on Youtube', sort_order: 4 },
  { id: 'tt', platform: 'tiktok', url: 'https://www.tiktok.com/@zakher.travel', link_title: 'Join us on Tiktok', sort_order: 5 },
  { id: 'ig', platform: 'instagram', url: 'https://www.instagram.com/zakhertravel.az?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D', link_title: 'Join us on Instagram', sort_order: 6 },
  { id: 'in', platform: 'linkedin', url: 'https://www.linkedin.com/company/zakher-travel/?originalSubdomain=az', link_title: 'Join us on LinkedIn', sort_order: 7 },
  { id: 'sc', platform: 'snapchat', url: 'https://www.snapchat.com/', link_title: 'Join us on Snapchat', sort_order: 8 },
  { id: 'ta', platform: 'tripadvisor', url: 'https://www.tripadvisor.com/Attraction_Review-g293934-d34177573-Reviews-Zakher_Travel-Baku_Absheron_Region.html', link_title: 'Join us on Tripadvisor', sort_order: 9 },
]

const INSTAGRAM_CARDS = [
  { id: 'ig-1', username: 'Zakher_Travel_UAE', instagram_url: 'https://www.instagram.com/zakher_travel_uae?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', profile_image_url: imgDefault, post_image_url: imgDefault, sort_order: 0 },
  { id: 'ig-2', username: 'Zakher_Travel_Kyrgyzstan', instagram_url: 'https://www.instagram.com/zakher.travel.kyrgyzstan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', profile_image_url: imgKyrgyz, post_image_url: imgKyrgyz, sort_order: 1 },
  { id: 'ig-3', username: 'Zakher_Travel_Kazakhstan', instagram_url: 'https://www.instagram.com/zakher.travel.kazakhstan/?utm_source=ig_web_button_share_sheet', profile_image_url: imgKazakh, post_image_url: imgKazakh, sort_order: 2 },
  { id: 'ig-4', username: 'Zakher_Travel_Europe', instagram_url: 'https://www.instagram.com/zakher.travel.europe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', profile_image_url: imgEurope, post_image_url: imgEurope, sort_order: 3 },
  { id: 'ig-5', username: 'Zakher_Travel_Az', instagram_url: 'https://www.instagram.com/zakhertravel.az?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', profile_image_url: imgDefault, post_image_url: imgDefault, sort_order: 4 },
  { id: 'ig-6', username: 'Zakher_Travel_Russia', instagram_url: 'https://www.instagram.com/zakher.travel.russia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', profile_image_url: imgRussia, post_image_url: imgRussia, sort_order: 5 },
  { id: 'ig-7', username: 'Zakher_Travel_Turkiye', instagram_url: 'https://www.instagram.com/zakher.travel.turkiye?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', profile_image_url: imgTurkiye, post_image_url: imgTurkiye, sort_order: 6 },
  { id: 'ig-8', username: 'Zakher_Travel_Uzbekistan', instagram_url: 'https://www.instagram.com/zakher.travel.uzbekistan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', profile_image_url: imgUzbek, post_image_url: imgUzbek, sort_order: 7 },
  { id: 'ig-9', username: 'Zakher.Travel', instagram_url: 'https://www.instagram.com/zakher.travel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', profile_image_url: imgDefault, post_image_url: imgDefault, sort_order: 8 },
  { id: 'ig-10', username: 'Zakher.Travel_Azerbaijan', instagram_url: 'https://www.instagram.com/zakher_travel_azerbaijan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', profile_image_url: imgDefault, post_image_url: imgDefault, sort_order: 9 },
  { id: 'ig-11', username: 'Zakher.Travel_Georgia', instagram_url: 'https://www.instagram.com/zakher.travel.georgia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', profile_image_url: imgGeorgia, post_image_url: imgGeorgia, sort_order: 10 },
]

const DEFAULT_CONFIG = {
  follow_title: 'Follow Us',
  instagram_title: 'Zakher Travel on Instagram',
  youtube_title: 'Watch Us on Youtube',
  youtube_embed_url: 'https://www.youtube.com/embed/-9BRrj8_3u0?si=qBlpCTdO2L4FOcCk',
}

export function getSocialMediaFallback() {
  return {
    config: { ...DEFAULT_CONFIG },
    links: LINKS,
    instagram_cards: INSTAGRAM_CARDS,
  }
}

export function mergeSocialMedia(apiData) {
  const fallback = getSocialMediaFallback()
  if (!apiData) return fallback
  return {
    config: { ...fallback.config, ...(apiData.config || {}) },
    links: apiData.links?.length ? apiData.links : fallback.links,
    instagram_cards: apiData.instagram_cards?.length
      ? apiData.instagram_cards
      : fallback.instagram_cards,
  }
}

export const PLATFORM_CSS = {
  facebook: 'fb',
  twitter: 'tw',
  wechat: 'wchat',
  telegram: 'telegram',
  youtube: 'youtube',
  tiktok: 'tiktok',
  instagram: 'insta',
  linkedin: 'in',
  snapchat: 'snapchat',
  tripadvisor: 'tripadvisor',
}

export const PLATFORM_ICON = {
  facebook: 'fa-facebook',
  twitter: 'fa-x',
  wechat: 'fa-wechat',
  telegram: 'fa-telegram',
  youtube: 'fa-youtube',
  tiktok: 'fa-tiktok',
  instagram: 'fa-instagram',
  linkedin: 'fa-linkedin',
  snapchat: 'fa-snapchat',
  tripadvisor: 'fa-tripadvisor',
}
