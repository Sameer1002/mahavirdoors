import type { SetPage } from '@/types'
import { WHY_US } from '@/data'
import WhyIcon from '@/components/Icons'

export default function WhyUsPreview({ setPage }: { setPage: SetPage }) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs font-bold tracking-widest uppercase mb-3 text-golden">Why Choose Us</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal font-heading">The Mahavir Doors Difference</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">We stand behind every door we manufacture with quality, expertise, and genuine customer care.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_US.slice(0, 8).map(w => (
            <div key={w.title} className="p-5 rounded-2xl border border-gray-100 hover:border-golden transition-all card-hover bg-white group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-wood icon-well">
                <span className="group-hover:text-white transition-colors"><WhyIcon type={w.icon} /></span>
              </div>
              <h3 className="font-bold text-charcoal text-sm mb-1.5 font-heading">{w.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button onClick={() => setPage('why')} className="px-7 py-3 rounded font-bold text-sm border-2 text-charcoal transition-all hover:bg-wood hover:text-white hover:border-wood border-charcoal font-heading">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
