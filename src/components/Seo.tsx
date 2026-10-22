import { useEffect } from 'react'
import type { Page } from '@/types'
import { PAGE_SEO, SITE_NAME, SITE_TAGLINE, buildJsonLd, logoUrl, pageUrl, siteOrigin } from '@/seo'

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([key, value]) => el!.setAttribute(key, value))
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo({ page }: { page: Page }) {
  useEffect(() => {
    const seo = PAGE_SEO[page]
    const url = pageUrl(page)
    const image = logoUrl()

    document.title = seo.title
    document.documentElement.lang = 'en'

    upsertMeta('meta[name="description"]', { name: 'description', content: seo.description })
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' })
    upsertMeta('meta[name="author"]', { name: 'author', content: SITE_NAME })
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: seo.keywords })
    upsertMeta('meta[name="geo.region"]', { name: 'geo.region', content: 'IN-MH' })
    upsertMeta('meta[name="geo.placename"]', { name: 'geo.placename', content: 'Nashik' })
    upsertMeta('meta[name="geo.position"]', { name: 'geo.position', content: '19.9688153;73.7387391' })
    upsertMeta('meta[name="ICBM"]', { name: 'ICBM', content: '19.9688153, 73.7387391' })
    upsertMeta('meta[name="theme-color"]', { name: 'theme-color', content: '#6B3F1D' })

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_IN' })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: `${SITE_NAME} — ${SITE_TAGLINE}` })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image })
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: `${SITE_NAME} logo` })

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image })

    upsertLink('canonical', url)
    upsertLink('sitemap', `${siteOrigin()}/sitemap.xml`)

    let script = document.getElementById('mahavir-jsonld') as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = 'mahavir-jsonld'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(buildJsonLd(page))
  }, [page])

  return null
}
