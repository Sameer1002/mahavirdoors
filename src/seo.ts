import type { Page } from '@/types'
import { CONTACT_EMAIL, FAQS, PRODUCTS } from '@/data'

export const SITE_NAME = 'Mahavir Doors'
export const SITE_TAGLINE = 'Premium Wooden Door Manufacturer in Nashik'

export const ROUTES: Record<Page, string> = {
  home: '/',
  about: '/about',
  products: '/products',
  manufacturing: '/manufacturing',
  services: '/services',
  gallery: '/gallery',
  why: '/why-us',
  faq: '/faq',
  contact: '/contact',
}

export const PAGE_SEO: Record<Page, { title: string; description: string; keywords: string }> = {
  home: {
    title: 'Mahavir Doors | Wooden Door Manufacturer in Nashik',
    description: 'Mahavir Doors manufactures premium laminated, WPC, safety, and plywood doors in Ambad MIDC, Nashik. Custom sizes, factory-direct quality, and delivery across Maharashtra.',
    keywords: 'wooden door manufacturer Nashik, laminated doors Nashik, WPC doors, safety doors, Mahavir Doors, door factory Ambad MIDC',
  },
  about: {
    title: 'About Mahavir Doors | Door Manufacturer in Nashik',
    description: 'Learn about Mahavir Doors, a trusted wooden door manufacturer in Ambad MIDC, Nashik since 2009. Premium materials, skilled craftsmanship, and custom door solutions.',
    keywords: 'about Mahavir Doors, door manufacturer Nashik, Ambad MIDC doors factory, wooden door company Maharashtra',
  },
  products: {
    title: 'Laminated, WPC & Safety Doors | Mahavir Doors Nashik',
    description: 'Explore laminated doors, waterproof WPC doors, safety doors, plywood doors, decorative laminates, and custom wooden work from Mahavir Doors, Nashik.',
    keywords: 'laminated doors Nashik, WPC doors Nashik, safety doors, plywood doors, decorative laminates, custom wooden doors',
  },
  manufacturing: {
    title: 'Door Manufacturing Process | Mahavir Doors Factory Nashik',
    description: 'See how Mahavir Doors manufactures wooden doors in Nashik — from raw material and CNC cutting to hot-press laminating, quality testing, and dispatch.',
    keywords: 'door manufacturing Nashik, CNC door factory, laminated door process, wooden door production Maharashtra',
  },
  services: {
    title: 'Door Manufacturing & Bulk Supply | Mahavir Doors Nashik',
    description: 'Door manufacturing, custom design, bulk builder supply, dealer wholesale, installation guidance, and Maharashtra-wide delivery from Mahavir Doors.',
    keywords: 'bulk door supply Nashik, door dealers Maharashtra, custom door design, builder door supplier, door installation guidance',
  },
  gallery: {
    title: 'Door Gallery | Mahavir Doors Products & Factory Photos',
    description: 'Browse Mahavir Doors gallery — laminated and WPC doors, factory manufacturing, showroom displays, and installation projects across Maharashtra.',
    keywords: 'door gallery Nashik, wooden door photos, Mahavir Doors factory, laminated door designs',
  },
  why: {
    title: 'Why Choose Mahavir Doors | Quality Door Manufacturer Nashik',
    description: 'Why 5,000+ customers choose Mahavir Doors: premium materials, CNC machinery, custom designs, factory-direct pricing, and on-time delivery from Nashik.',
    keywords: 'best door manufacturer Nashik, why Mahavir Doors, ISI doors Nashik, quality wooden doors Maharashtra',
  },
  faq: {
    title: 'Door Manufacturing FAQ | Mahavir Doors Nashik',
    description: 'Answers on custom doors, WPC waterproofing, bulk builder orders, warranty, delivery outside Nashik, factory visits, and payment options at Mahavir Doors.',
    keywords: 'WPC door FAQ, custom door manufacturing time, door warranty Nashik, bulk door orders Maharashtra',
  },
  contact: {
    title: 'Contact Mahavir Doors | Free Quote for Wooden Doors Nashik',
    description: 'Request a free quote from Mahavir Doors, Ambad MIDC, Nashik. Call +91 86698 60987 or email doorsofmahavir@gmail.com for laminated, WPC, and custom doors.',
    keywords: 'contact Mahavir Doors, door quote Nashik, Ambad MIDC door factory, doorsofmahavir@gmail.com',
  },
}

function withBase(path: string) {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  if (path === '/') return base ? `${base}/` : '/'
  return `${base}${path}`
}

export function pathFor(page: Page) {
  return withBase(ROUTES[page])
}

export function pageFromPath(pathname: string): Page {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  let path = pathname
  if (base && path.startsWith(base)) path = path.slice(base.length) || '/'
  if (!path.startsWith('/')) path = `/${path}`
  path = path.replace(/\/+$/, '') || '/'
  const match = (Object.entries(ROUTES) as [Page, string][]).find(([, route]) => route === path)
  return match?.[0] ?? 'home'
}

export function siteOrigin() {
  if (typeof window === 'undefined') return ''
  return window.location.origin
}

export function pageUrl(page: Page) {
  const path = pathFor(page)
  return `${siteOrigin()}${path}`
}

export function logoUrl() {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  return `${siteOrigin()}${base}/assets/logo-sm.jpeg`
}

const BREADCRUMB_LABELS: Record<Page, string> = {
  home: 'Home',
  about: 'About Us',
  products: 'Products',
  manufacturing: 'Manufacturing',
  services: 'Services',
  gallery: 'Gallery',
  why: 'Why Choose Us',
  faq: 'FAQ',
  contact: 'Contact',
}

function localBusiness() {
  return {
    '@type': ['Organization', 'LocalBusiness', 'HomeAndConstructionBusiness'],
    name: SITE_NAME,
    alternateName: 'Mahaveer Doors',
    url: siteOrigin() + pathFor('home'),
    logo: logoUrl(),
    image: logoUrl(),
    email: CONTACT_EMAIL,
    telephone: ['+91-86698-60987', '+91-96045-03054'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Krushna Nagar, Datir Mala, Ambad MIDC',
      addressLocality: 'Nashik',
      addressRegion: 'Maharashtra',
      postalCode: '422010',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.9688153,
      longitude: 73.7387391,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    areaServed: ['Nashik', 'Maharashtra', 'India'],
    priceRange: '₹₹',
    foundingDate: '2009',
  }
}

export function buildJsonLd(page: Page) {
  const url = pageUrl(page)
  const home = pageUrl('home')
  const seo = PAGE_SEO[page]
  const businessId = `${home}#business`

  const graph: Record<string, unknown>[] = [
    { ...localBusiness(), '@id': businessId },
    {
      '@type': 'WebSite',
      '@id': `${home}#website`,
      name: SITE_NAME,
      url: home,
      publisher: { '@id': businessId },
      inLanguage: 'en-IN',
    },
    {
      '@type': page === 'contact' ? 'ContactPage' : page === 'faq' ? 'FAQPage' : page === 'products' ? 'CollectionPage' : 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: seo.title,
      description: seo.description,
      isPartOf: { '@id': `${home}#website` },
      about: { '@id': businessId },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: home,
        },
        ...(page === 'home'
          ? []
          : [
              {
                '@type': 'ListItem',
                position: 2,
                name: BREADCRUMB_LABELS[page],
                item: url,
              },
            ]),
      ],
    },
  ]

  if (page === 'faq') {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: FAQS.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    })
  }

  if (page === 'products') {
    graph.push({
      '@type': 'ItemList',
      name: 'Mahavir Doors Product Range',
      itemListElement: PRODUCTS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: p.name,
          description: p.desc,
          image: p.img.startsWith('http') ? p.img : `${siteOrigin()}${p.img}`,
          brand: { '@type': 'Brand', name: SITE_NAME },
        },
      })),
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
