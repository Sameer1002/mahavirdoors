import type { SetPage } from '@/types'
import { IMGS } from '@/data'
import { IconPhone } from '@/components/Icons'

export default function CTA({ setPage }: { setPage: SetPage }) {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-wood">
      <img src={IMGS.woodGrain1} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 scrim-cta" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="text-xs font-bold tracking-widest uppercase mb-4 text-golden">Ready to Order?</div>
        <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 font-heading">
          Need Premium Wooden Doors?
        </h2>
        <p className="text-xl font-light mb-8 text-golden font-heading">
          Let&apos;s Build Your Dream Entrance Together.
        </p>
        <p className="text-gray-300 text-sm mb-10 max-w-lg mx-auto">
          Contact our expert team today for a free consultation and customized quotation. We serve residential, commercial, and builder clients across Maharashtra.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+918669860987"
            className="flex items-center gap-2 px-8 py-4 rounded font-bold text-sm text-charcoal transition-opacity hover:opacity-90 bg-golden font-heading">
            <IconPhone /> Call Now: 8669860987
          </a>
          <button onClick={() => setPage('contact')}
            className="flex items-center gap-2 px-8 py-4 rounded font-bold text-sm text-white border-2 transition-all hover:bg-white hover:text-charcoal font-heading btn-outline-white">
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  )
}
