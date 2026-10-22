import type { SetPage } from '@/types'
import { PRODUCTS } from '@/data'

export default function ProductsPreview({ setPage }: { setPage: SetPage }) {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs font-bold tracking-widest uppercase mb-3 text-golden">Our Products</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal font-heading">Premium Door Collections</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">From classic laminated finishes to ultra-modern WPC and high-security safety doors — discover our complete range.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map(p => (
            <div key={p.id} className="group rounded-2xl overflow-hidden bg-white shadow-md card-hover cursor-pointer"
              onClick={() => setPage('products')}>
              <div className="relative h-64 img-overlay bg-gray-200">
                <img src={p.img} alt={p.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end scrim-wood">
                  <div className="p-5 w-full">
                    <div className="text-xs font-medium text-golden mb-1">{p.tagline}</div>
                    <button className="text-xs font-bold text-white border border-white/50 px-3 py-1.5 rounded-full hover:bg-white/20">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-charcoal text-base mb-1 font-heading">{p.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button onClick={() => setPage('products')}
            className="px-8 py-3.5 rounded font-bold text-sm text-white transition-opacity hover:opacity-90 bg-wood font-heading">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
