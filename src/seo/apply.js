import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  DEFAULT_LOCALE,
  ORGANIZATION,
} from './site.js'
import { SEO_BY_PATH } from './pages.js'

const JSON_LD_ID = 'zakher-seo-jsonld'

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href, extra = {}) {
  if (!href) return
  let selector = `link[rel="${rel}"]`
  if (extra.hreflang) selector += `[hreflang="${extra.hreflang}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
  if (extra.hreflang) el.setAttribute('hreflang', extra.hreflang)
}

function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: ORGANIZATION.name,
    alternateName: ORGANIZATION.alternateName,
    url: ORGANIZATION.url,
    logo: ORGANIZATION.logo,
    image: DEFAULT_OG_IMAGE,
    description:
      'Licensed Azerbaijan tour operator offering incoming tours, MICE, visa support and DMC services across the Caucasus and beyond.',
    foundingDate: ORGANIZATION.foundingDate,
    address: {
      '@type': 'PostalAddress',
      ...ORGANIZATION.address,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: ORGANIZATION.telephone,
      email: ORGANIZATION.email,
      contactType: 'customer service',
      availableLanguage: ['English', 'Azerbaijani', 'Russian', 'Arabic'],
      areaServed: ['AZ', 'TR', 'GE', 'KZ', 'KG', 'UZ', 'PL', 'CZ', 'RU', 'UA', 'AE'],
    },
    sameAs: ORGANIZATION.sameAs,
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 40.4093,
        longitude: 49.8671,
      },
      geoRadius: '5000000',
    },
  }
}

function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: ['en', 'az', 'ru', 'ar'],
    publisher: {
      '@type': 'TravelAgency',
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
  }
}

function breadcrumbSchema(path, title) {
  const items = [{ name: 'Home', path: '/' }]
  if (path !== '/') {
    items.push({ name: title.replace(` | ${SITE_NAME}`, ''), path })
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === '/' ? '/' : item.path}`,
    })),
  }
}

function touristTripSchema(page, canonical) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: page.tripName || page.title,
    description: page.description,
    url: canonical,
    touristType: 'International and domestic travelers',
    provider: {
      '@type': 'TravelAgency',
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      telephone: ORGANIZATION.telephone,
    },
  }
}

function buildJsonLd(page, path) {
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`
  const graphs = [organizationSchema(), websiteSchema(), breadcrumbSchema(path, page.title)]
  if (page.schema === 'touristTrip') {
    graphs.push(touristTripSchema(page, canonical))
  }
  return graphs
}

function upsertJsonLd(data) {
  let el = document.getElementById(JSON_LD_ID)
  if (!el) {
    el = document.createElement('script')
    el.id = JSON_LD_ID
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export function applySeo(path) {
  const normalized = path.split('?')[0].split('#')[0] || '/'
  const page = SEO_BY_PATH[normalized] || SEO_BY_PATH['/']
  const canonical = `${SITE_URL}${normalized === '/' ? '/' : normalized}`
  const robots = page.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

  document.title = page.title

  upsertMeta('name', 'description', page.description)
  upsertMeta('name', 'keywords', page.keywords)
  upsertMeta('name', 'robots', robots)
  upsertMeta('name', 'author', SITE_NAME)
  upsertMeta('name', 'googlebot', robots)

  upsertLink('canonical', canonical)

  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:site_name', SITE_NAME)
  upsertMeta('property', 'og:locale', DEFAULT_LOCALE)
  upsertMeta('property', 'og:url', canonical)
  upsertMeta('property', 'og:title', page.title)
  upsertMeta('property', 'og:description', page.description)
  upsertMeta('property', 'og:image', DEFAULT_OG_IMAGE)
  upsertMeta('property', 'og:image:alt', `${SITE_NAME} logo`)

  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:url', canonical)
  upsertMeta('name', 'twitter:title', page.title)
  upsertMeta('name', 'twitter:description', page.description)
  upsertMeta('name', 'twitter:image', DEFAULT_OG_IMAGE)

  upsertJsonLd(buildJsonLd(page, normalized))
}

export function getSeoForPath(path) {
  const normalized = path.split('?')[0].split('#')[0] || '/'
  return SEO_BY_PATH[normalized] || SEO_BY_PATH['/']
}
