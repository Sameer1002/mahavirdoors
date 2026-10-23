import type { SetPage } from '@/types'
import { IconCheck } from '@/components/Icons'

export default function AboutPreview({ setPage }: { setPage: SetPage }) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="text-xs font-bold tracking-widest uppercase mb-3 text-golden">About Us</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6 gold-underline font-heading">
            Welcome to Mahavir Doors
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Mahavir Doors is one of Nashik&apos;s most trusted manufacturers and suppliers of premium wooden doors and interior solutions. Located at Ambad MIDC, we specialize in crafting elegant, durable, and high-performance doors using advanced manufacturing technology and premium raw materials.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            From modern homes to large commercial projects, we provide customized door solutions that combine aesthetics, security, and long-lasting performance. Every door we craft is a testament to our commitment to quality and craftsmanship.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {['ISI Certified Materials', 'ISO Quality Process', 'Pan-Maharashtra Delivery', 'Custom Design Support'].map(f => (
              <div key={f} className="flex items-center gap-2 text-sm text-charcoal font-medium">
                <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white bg-wood"><IconCheck /></span>
                {f}
              </div>
            ))}
          </div>
          <button onClick={() => setPage('about')}
            className="px-6 py-3 rounded font-bold text-sm text-white transition-opacity hover:opacity-90 bg-wood font-heading">
            Read More About Us
          </button>
        </div>
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-golden" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-200 aspect-[4/5]">
            <img src="/assets/homepage/thumb-laminated.png" alt="Premium laminated wooden door by Mahavir Doors Nashik" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl p-4 glass-dark">
              <div className="text-xs text-gray-400 mb-0.5">Our Promise</div>
              <div className="text-white font-semibold text-sm font-heading">Crafting Premium Doors for Every Home & Business</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
