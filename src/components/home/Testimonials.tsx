import { useState } from 'react'
import { TESTIMONIALS } from '@/data'
import { IconMap, IconStar } from '@/components/Icons'

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const t = TESTIMONIALS[idx]
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs font-bold tracking-widest uppercase mb-3 text-golden">Testimonials</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal font-heading">What Our Customers Say</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden bg-charcoal">
            <div className="absolute top-6 right-8 text-8xl font-serif opacity-10 text-golden leading-none">&ldquo;</div>
            <div className="flex gap-0.5 mb-6 relative">
              {[1, 2, 3, 4, 5].map(i => <IconStar key={i} filled={i <= t.stars} />)}
            </div>
            <p className="text-gray-200 text-base leading-relaxed mb-8 relative text-lg italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center justify-between relative">
              <div>
                <div className="text-white font-bold font-heading">{t.name}</div>
                <div className="text-gray-400 text-xs flex items-center gap-1"><IconMap /> {t.location}</div>
              </div>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${i === idx ? 'bg-golden' : 'bg-golden/30'}`} />
                ))}
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            {TESTIMONIALS.filter((_, i) => i !== idx).slice(0, 3).map(t2 => (
              <div key={t2.name} className="rounded-xl p-4 bg-gray-50 border border-gray-100">
                <div className="flex gap-0.5 mb-2">{[1, 2, 3, 4, 5].map(i => <IconStar key={i} filled={i <= t2.stars} />)}</div>
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">&ldquo;{t2.text}&rdquo;</p>
                <div className="text-charcoal font-semibold text-xs mt-2">{t2.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
