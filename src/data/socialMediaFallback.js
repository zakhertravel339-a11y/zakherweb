const LINKS = [
  { id: 'fb', platform: 'facebook', url: 'https://www.facebook.com/p/Zakher-Travel-Azerbaijan-61552554323306/?locale=ru_RU', link_title: 'Join us on Facebook', sort_order: 0 },
  { id: 'tw', platform: 'twitter', url: 'https://x.com/ZakherTravel', link_title: 'Join us on X', sort_order: 1 },
  { id: 'wc', platform: 'wechat', url: 'https://www.wechat.com/', link_title: 'Join us on WeChat', sort_order: 2 },
  { id: 'tg', platform: 'telegram', url: 'https://t.me/', link_title: 'Join us on Telegram', sort_order: 3 },
  { id: 'yt', platform: 'youtube', url: 'https://www.youtube.com/@zakher.travel/videos', link_title: 'Join us on Youtube', sort_order: 4 },
  { id: 'tt', platform: 'tiktok', url: 'https://www.tiktok.com/@zakher.travel', link_title: 'Join us on Tiktok', sort_order: 5 },
  { id: 'ig', platform: 'instagram', url: 'https://www.instagram.com/zakhertravel.az', link_title: 'Join us on Instagram', sort_order: 6 },
  { id: 'in', platform: 'linkedin', url: 'https://www.linkedin.com/company/zakher-travel/', link_title: 'Join us on LinkedIn', sort_order: 7 },
  { id: 'sc', platform: 'snapchat', url: 'https://www.snapchat.com/', link_title: 'Join us on Snapchat', sort_order: 8 },
  { id: 'ta', platform: 'tripadvisor', url: 'https://www.tripadvisor.com/Attraction_Review-g293934-d34177573-Reviews-Zakher_Travel-Baku_Absheron_Region.html', link_title: 'Join us on Tripadvisor', sort_order: 9 },
]

export function getSocialMediaFallback() {
  return {
    config: {
      follow_title: 'Follow Us',
      instagram_title: 'Zakher Travel on Instagram',
      youtube_title: 'Watch Us on Youtube',
      youtube_embed_url: 'https://www.youtube.com/embed/-9BRrj8_3u0?si=qBlpCTdO2L4FOcCk',
    },
    links: LINKS,
    instagram_cards: [],
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
