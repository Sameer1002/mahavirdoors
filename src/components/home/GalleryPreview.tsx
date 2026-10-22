import type { SetPage } from '@/types'
import { GALLERY_ITEMS } from '@/data'

export default function GalleryPreview({ setPage }: { setPage: SetPage }) {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end mb-12 gap-4">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase mb-2 text-golden">Gallery</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal font-heading">Our Work & Factory</h2>
          </div>
          <button onClick={() => setPage('gallery')} className="text-sm font-bold text-wood hover:text-golden transition-colors">View Full Gallery →</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {GALLERY_ITEMS.slice(0, 6).map((g, i) => (
            <div key={g.label} className={`relative rounded-xl overflow-hidden img-overlay cursor-pointer group bg-gray-200 ${i === 0 ? 'row-span-2 aspect-[3/4]' : 'aspect-[4/3]'}`}
              onClick={() => setPage('gallery')}>
              <img src={g.img} alt={g.label} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 scrim-card-soft">
                <div>
                  <div className="text-xs font-semibold mb-0.5 text-golden">{g.cat}</div>
                  <div className="text-white text-sm font-medium">{g.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
