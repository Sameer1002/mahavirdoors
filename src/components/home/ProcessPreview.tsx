import type { SetPage } from '@/types'
import { IMGS } from '@/data'

export default function ProcessPreview({ setPage }: { setPage: SetPage }) {
  const steps = ['Design Consultation', 'Material Selection', 'Precision Manufacturing', 'Quality Inspection', 'Finishing', 'Delivery']
  return (
    <section className="fixed-bg-section py-20 lg:py-24 relative overflow-hidden bg-charcoal">
      <img src={IMGS.cnc} alt="" className="fixed-bg-img opacity-5" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs font-bold tracking-widest uppercase mb-3 text-golden">How We Work</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-heading">Our Manufacturing Process</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">Every door goes through our rigorous 6-step process to ensure premium quality and precise finish.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-0">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2 sm:gap-0">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm border-2 border-golden text-golden font-heading">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="text-white text-xs font-medium mt-2 text-center max-w-20 font-heading">{s}</div>
              </div>
              {i < steps.length - 1 && (
                <div className="w-6 sm:w-10 md:w-16 h-0.5 mx-1 sm:mx-2 hidden sm:block step-connector" />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button onClick={() => setPage('manufacturing')}
            className="px-7 py-3 rounded font-bold text-sm border-2 text-white transition-all hover:bg-golden border-golden font-heading">
            See Full Process
          </button>
        </div>
      </div>
    </section>
  )
}
