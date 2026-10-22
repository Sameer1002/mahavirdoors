import type { SetPage } from '@/types'
import { IMGS } from '@/data'

export default function Hero({ setPage }: { setPage: SetPage }) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-charcoal">
      <img src={IMGS.hero} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 scrim-hero" />

      <div className="relative max-w-7xl mx-auto px-6 w-full pt-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border hero-badge">
            Premium Door Manufacturer — Nashik, Maharashtra
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white mb-6 font-heading hero-title">
            Premium Wooden Door{' '}
            <span className="text-golden">Manufacturing</span>{' '}
            Company in Nashik
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            We manufacture high-quality Laminated Doors, WPC Doors, Safety Doors, Plywood Doors, Laminates, and complete wooden solutions with precision, durability, and elegant designs.
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setPage('products')}
              className="px-7 py-3.5 rounded font-bold text-sm transition-transform hover:scale-105 active:scale-95 bg-golden text-white font-heading">
              View Products
            </button>
            <button onClick={() => setPage('contact')}
              className="px-7 py-3.5 rounded font-bold text-sm border-2 text-white transition-all hover:bg-white hover:text-charcoal font-heading btn-outline-white-60">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden md:flex flex-col gap-2 items-end">
        <div className="text-xs font-semibold text-white/50 tracking-widest">EST. 2009</div>
        <div className="w-12 h-0.5 bg-golden" />
      </div>
    </section>
  )
}
