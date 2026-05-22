import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SITE_URL } from '../src/seo/site.js'
import { SITEMAP_PAGES } from '../src/seo/pages.js'

const root = dirname(fileURLToPath(import.meta.url))
const outDir = join(root, '..', 'public')
const outFile = join(outDir, 'sitemap.xml')
const lastmod = new Date().toISOString().slice(0, 10)

const urls = SITEMAP_PAGES.map((page) => {
  const loc = `${SITE_URL}${page.path === '/' ? '/' : page.path}`
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq || 'monthly'}</changefreq>
    <priority>${page.priority || '0.5'}</priority>
  </url>`
}).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`

mkdirSync(outDir, { recursive: true })
writeFileSync(outFile, xml, 'utf8')
console.log(`sitemap.xml generated with ${SITEMAP_PAGES.length} URLs`)
