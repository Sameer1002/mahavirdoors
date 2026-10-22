import { useState } from 'react'
import { GALLERY_ITEMS, IMGS } from '@/data'
import PageBanner from '@/components/PageBanner'

export default function GalleryPage() {
  const cats = ['All', 'Products', 'Factory', 'Projects', 'Materials', 'Showroom']
  const [cat, setCat] = useState('All')
  const filtered = cat === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.cat === cat)
  return (
    <>
      <PageBanner title="Gallery" subtitle="A visual tour of our products, factory, and installations" img={IMGS.hero} />
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {cats.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${cat === c ? 'bg-wood text-white' : 'bg-white text-charcoal border border-gray-200'}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((g, i) => (
              <div key={`${g.label}-${i}`} className="rounded-2xl overflow-hidden img-overlay group bg-gray-200 cursor-pointer aspect-[4/3]">
                <img src={g.img} alt={g.label} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5 scrim-card">
                  <div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full mr-2 bg-golden text-white">{g.cat}</span>
                    <div className="text-white text-sm font-semibold mt-2 font-heading">{g.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center text-gray-400 py-16">No images in this category yet.</div>
          )}
        </div>
      </section>
    </>
  )
}
