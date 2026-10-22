import { useState } from 'react'
import type { SetPage } from '@/types'
import { FAQS, IMGS } from '@/data'
import { IconChevronDown, IconMail, IconPhone } from '@/components/Icons'
import NavLink from '@/components/NavLink'
import PageBanner from '@/components/PageBanner'

export default function FAQPage({ setPage }: { setPage: SetPage }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <>
      <PageBanner title="FAQ" subtitle="Answers to your most common questions" img={IMGS.woodGrain1} />
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-widest uppercase mb-3 text-golden">Common Questions</div>
            <h2 className="text-3xl font-bold text-charcoal font-heading">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4" aria-expanded={open === i}>
                  <h3 className="font-semibold text-charcoal text-sm font-heading">{f.q}</h3>
                  <span className="shrink-0 text-golden"><IconChevronDown open={open === i} /></span>
                </button>
                <div className={`px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4 ${open === i ? '' : 'hidden'}`}>
                  {f.a}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl p-8 text-center bg-charcoal">
            <div className="text-white font-bold text-lg mb-2 font-heading">Still have questions?</div>
            <p className="text-gray-400 text-sm mb-5">Our team is available Monday–Saturday, 9 AM – 7 PM to assist you.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:+918669860987" className="flex items-center gap-2 px-5 py-2.5 rounded font-bold text-sm text-charcoal bg-golden">
                <IconPhone /> 8669860987
              </a>
              <NavLink page="contact" setPage={setPage} className="flex items-center gap-2 px-5 py-2.5 rounded font-bold text-sm text-white border border-white-30">
                <IconMail /> Send Message
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
