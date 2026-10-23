import type { SetPage } from '@/types'
import { IMGS, WHY_US } from '@/data'
import WhyIcon, { IconCheck } from '@/components/Icons'
import PageBanner from '@/components/PageBanner'

export default function WhyPage({ setPage }: { setPage: SetPage }) {
  const certs = ['ISI Certified Materials', 'ISO Quality Standards', 'BIS Approved Processes', 'Eco-Friendly Manufacturing']
  return (
    <>
      <PageBanner title="Why Choose Us" subtitle="The reasons thousands of customers trust Mahavir Doors" img={IMGS.brownDoor} />
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-widest uppercase mb-3 text-golden">Our Commitment</div>
            <h2 className="text-3xl font-bold text-charcoal font-heading">Why 5,000+ Customers Choose Us</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">We bring together quality materials, skilled craftsmanship, and genuine customer care to deliver doors that exceed expectations.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {WHY_US.map(w => (
              <div key={w.title} className="flex gap-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 icon-well">
                  <WhyIcon type={w.icon} />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal text-base mb-1.5 font-heading">{w.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden grid md:grid-cols-2 shadow-xl">
            <div className="p-8 md:p-10 bg-wood">
              <div className="text-xs font-bold tracking-widest uppercase mb-4 text-golden">Certifications</div>
              <h3 className="text-2xl font-bold text-white mb-6 font-heading">Quality You Can Trust</h3>
              {certs.map(c => (
                <div key={c} className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-wood bg-golden"><IconCheck /></span>
                  <span className="text-white text-sm">{c}</span>
                </div>
              ))}
            </div>
            <div className="relative bg-gray-200 min-h-48">
              <img src={IMGS.cnc} alt="Manufacturing facility" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 overlay-dim" />
            </div>
          </div>
          <div className="mt-10 text-center">
            <button onClick={() => setPage('contact')}
              className="px-8 py-3.5 rounded font-bold text-sm text-white transition-opacity hover:opacity-90 bg-golden font-heading">
              Request a Quote Today
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
