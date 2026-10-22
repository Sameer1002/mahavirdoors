import type { SetPage } from '@/types'
import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import AboutPreview from '@/components/home/AboutPreview'
import ProductsPreview from '@/components/home/ProductsPreview'
import ProcessPreview from '@/components/home/ProcessPreview'
import WhyUsPreview from '@/components/home/WhyUsPreview'
import GalleryPreview from '@/components/home/GalleryPreview'
import Testimonials from '@/components/home/Testimonials'
import CTA from '@/components/home/CTA'

export default function HomePage({ setPage }: { setPage: SetPage }) {
  return (
    <>
      <Hero setPage={setPage} />
      <StatsBar />
      <AboutPreview setPage={setPage} />
      <ProductsPreview setPage={setPage} />
      <ProcessPreview setPage={setPage} />
      <WhyUsPreview setPage={setPage} />
      <GalleryPreview setPage={setPage} />
      <Testimonials />
      <CTA setPage={setPage} />
    </>
  )
}
