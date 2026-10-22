import type { SetPage } from '@/types'
import { IMGS, SERVICES } from '@/data'
import WhyIcon from '@/components/Icons'
import PageBanner from '@/components/PageBanner'

export default function ServicesPage({ setPage }: { setPage: SetPage }) {
  return (
    <>
      <PageBanner title="Our Services" subtitle="Comprehensive wooden door solutions for every need" img={IMGS.interior} />
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-widest uppercase mb-3 text-golden">What We Offer</div>
            <h2 className="text-3xl font-bold text-charcoal font-heading">End-to-End Door Solutions</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">From manufacturing to delivery and support — we are your complete wooden door partner.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(s => (
              <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-wood transition-colors icon-well">
                  <span className="group-hover:text-white transition-colors"><WhyIcon type={s.icon} /></span>
                </div>
                <h3 className="font-bold text-charcoal text-sm mb-2 font-heading">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 rounded-2xl p-8 md:p-12 text-center bg-charcoal">
            <div className="text-xs font-bold tracking-widest uppercase mb-3 text-golden">Get Started</div>
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">Need a Custom Quote?</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Share your requirements and our team will prepare a detailed proposal within 24 hours.</p>
            <button onClick={() => setPage('contact')}
              className="px-8 py-3.5 rounded font-bold text-sm transition-opacity hover:opacity-90 bg-golden text-white font-heading">
              Request a Quote
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
