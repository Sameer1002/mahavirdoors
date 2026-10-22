import type { SetPage } from '@/types'
import { IMGS, PRODUCTS } from '@/data'
import { IconCheck } from '@/components/Icons'
import PageBanner from '@/components/PageBanner'

export default function ProductsPage({ setPage }: { setPage: SetPage }) {
  return (
    <>
      <PageBanner title="Our Products" subtitle="Premium doors crafted for every home and business" img={IMGS.modernDoor} />
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Every product in our collection is manufactured using premium materials and precision machinery to deliver superior quality, durability, and design.
            </p>
          </div>
          <div className="space-y-10">
            {PRODUCTS.map((p, i) => (
              <div key={p.id} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative rounded-2xl overflow-hidden bg-gray-200 shadow-xl img-overlay aspect-[4/3] ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                  <img src={p.img} alt={p.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-golden">
                    {p.tagline.split(' • ')[0]}
                  </div>
                </div>
                <div className={i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="text-xs font-bold tracking-widest uppercase mb-2 text-golden">Product Category</div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-3 font-heading">{p.name}</h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tagline.split(' • ').map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-full text-xs font-medium border border-wood text-wood">{t}</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{p.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-xs font-bold uppercase mb-2 text-charcoal">Key Features</div>
                      {p.features.map(f => (
                        <div key={f} className="flex items-center gap-2 text-sm text-gray-600 mb-1.5">
                          <span className="text-golden shrink-0"><IconCheck /></span>{f}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase mb-2 text-charcoal">Applications</div>
                      {p.applications.map(a => (
                        <div key={a} className="flex items-center gap-2 text-sm text-gray-600 mb-1.5">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-golden" />{a}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl p-4 mb-5 text-xs text-gray-600 bg-cream">
                    <div className="font-bold text-charcoal mb-1.5">Specifications</div>
                    {p.specs.map(s => <div key={s} className="mb-0.5">• {s}</div>)}
                  </div>
                  <button onClick={() => setPage('contact')}
                    className="px-6 py-3 rounded font-bold text-sm text-white transition-opacity hover:opacity-90 bg-wood font-heading">
                    Enquire About This Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
