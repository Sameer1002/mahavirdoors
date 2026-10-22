import { useEffect, useState } from 'react'
import type { Page } from '@/types'
import { pageFromPath, pathFor } from '@/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ProductsPage from '@/pages/ProductsPage'
import ManufacturingPage from '@/pages/ManufacturingPage'
import ServicesPage from '@/pages/ServicesPage'
import GalleryPage from '@/pages/GalleryPage'
import WhyPage from '@/pages/WhyPage'
import FAQPage from '@/pages/FAQPage'
import ContactPage from '@/pages/ContactPage'

export default function App() {
  const [page, setPage] = useState<Page>(() =>
    typeof window === 'undefined' ? 'home' : pageFromPath(window.location.pathname),
  )

  useEffect(() => {
    const onPop = () => setPage(pageFromPath(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = (p: Page) => {
    const next = pathFor(p)
    if (window.location.pathname !== next) {
      window.history.pushState({ page: p }, '', next)
    }
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-cream">
      <Seo page={page} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:rounded focus:text-white focus:bg-wood"
      >
        Skip to main content
      </a>
      <Header page={page} setPage={navigate} />
      <main id="main-content" className="pt-16">
        {page === 'home' && <HomePage setPage={navigate} />}
        {page === 'about' && <AboutPage />}
        {page === 'products' && <ProductsPage setPage={navigate} />}
        {page === 'manufacturing' && <ManufacturingPage />}
        {page === 'services' && <ServicesPage setPage={navigate} />}
        {page === 'gallery' && <GalleryPage />}
        {page === 'why' && <WhyPage setPage={navigate} />}
        {page === 'faq' && <FAQPage setPage={navigate} />}
        {page === 'contact' && <ContactPage />}
      </main>
      <Footer setPage={navigate} />
    </div>
  )
}
