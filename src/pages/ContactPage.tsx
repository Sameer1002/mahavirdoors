import { useState, type FormEvent } from 'react'
import { CONTACT_EMAIL, IMGS } from '@/data'
import { IconClock, IconMail, IconMap, IconPhone } from '@/components/Icons'
import PageBanner from '@/components/PageBanner'

const emptyForm = { name: '', phone: '', email: '', product: '', qty: '', message: '' }

export default function ContactPage() {
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const products = ['Laminated Doors', 'WPC Doors', 'Safety Doors', 'Plywood Doors', 'Decorative Laminates', 'Custom Wooden Work', 'Other']

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          product: form.product,
          quantity: form.qty,
          message: form.message,
          _subject: `New quote request from ${form.name}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: form.email || CONTACT_EMAIL,
        }),
      })

      if (!res.ok) {
        throw new Error('Failed to send enquiry')
      }

      setForm(emptyForm)
      setSent(true)
    } catch {
      setError(`Could not send your enquiry. Please email us at ${CONTACT_EMAIL} or try again.`)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <PageBanner title="Contact Us" subtitle="Get in touch for enquiries, quotes, and consultations" img={IMGS.woodDoorRoom} />
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase mb-3 text-golden">Get In Touch</div>
            <h2 className="text-3xl font-bold text-charcoal mb-6 gold-underline font-heading">We Are Here to Help</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Whether you need a single custom door or a bulk supply for your building project, we are ready to assist. Contact us for a free consultation and quotation.
            </p>
            <div className="space-y-5 mb-10">
              {[
                { icon: 'map', label: 'Our Address', value: 'Krushna Nagar, Datir Mala, Ambad MIDC, Nashik, Maharashtra – 422010' },
                { icon: 'phone', label: 'Phone Numbers', value: '+91 86698 60987  |  +91 96045 03054' },
                { icon: 'clock', label: 'Business Hours', value: 'Monday – Saturday: 9:00 AM – 7:00 PM\nSunday: By Appointment' },
                { icon: 'mail', label: 'Email', value: CONTACT_EMAIL },
              ].map(c => (
                <div key={c.label} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 icon-well">
                    {c.icon === 'map' && <IconMap />}
                    {c.icon === 'phone' && <IconPhone />}
                    {c.icon === 'clock' && <IconClock />}
                    {c.icon === 'mail' && <IconMail />}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wide mb-1 text-wood">{c.label}</div>
                    {c.icon === 'mail' ? (
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-600 text-sm hover:text-wood transition-colors">{c.value}</a>
                    ) : (
                      <div className="text-gray-600 text-sm whitespace-pre-line">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden h-48 bg-gray-200 relative shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d29995.192969492193!2d73.7778098!3d19.991756799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bddedaa7f750835%3A0x95f44c9da9af66ee!2sMahavir%20Doors%2C%20Datir%20Mala%2C%20Krishna%20Nagar%2C%20MIDC%20Ambad%2C%20Nashik%2C%20Maharashtra%20422010!3m2!1d19.9688153!2d73.7387391!5e0!3m2!1sen!2sin!4v1792654291393!5m2!1sen!2sin"
                title="Mahavir Doors, Ambad MIDC, Nashik"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="pointer-events-auto text-center rounded-xl px-5 py-3 shadow-md map-chip">
                  <IconMap />
                  <div className="text-sm font-medium text-charcoal mt-2 font-heading">Ambad MIDC, Nashik</div>
                  <a href="https://www.google.com/maps/search/?api=1&query=Mahavir+Doors+Datir+Mala+Krishna+Nagar+MIDC+Ambad+Nashik"
                    target="_blank" rel="noreferrer"
                    className="text-xs font-bold mt-1 block transition-colors hover:text-golden text-wood">
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white text-2xl bg-wood">✓</div>
                <h3 className="text-xl font-bold text-charcoal mb-3 font-heading">Enquiry Sent!</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  Thank you for contacting Mahaveer Doors. Our team will reach out to you within 24 hours.
                </p>
                <button onClick={() => setSent(false)} className="mt-6 px-5 py-2.5 rounded text-sm font-bold text-white bg-wood">
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <div className="text-xs font-bold tracking-widest uppercase mb-2 text-golden">Quick Enquiry</div>
                <h3 className="text-xl font-bold text-charcoal mb-6 font-heading">Request a Free Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5">Full Name *</label>
                      <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-wood bg-gray-50" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5">Mobile Number *</label>
                      <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="10-digit number" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-wood bg-gray-50" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5">Email Address</label>
                    <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-wood bg-gray-50" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5">Product Required *</label>
                      <select required value={form.product} onChange={e => setForm({ ...form, product: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-wood bg-gray-50">
                        <option value="">Select product</option>
                        {products.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1.5">Quantity</label>
                      <input value={form.qty} onChange={e => setForm({ ...form, qty: e.target.value })}
                        placeholder="e.g. 10 doors" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-wood bg-gray-50" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1.5">Message / Requirements</label>
                    <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your requirements, size preferences, budget..." rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-wood bg-gray-50 resize-none" />
                  </div>
                  {error && (
                    <p className="text-xs text-center text-warning">
                      {error}{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">Open email</a>
                    </p>
                  )}
                  <button type="submit" disabled={sending}
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90 disabled:opacity-60 bg-wood font-heading">
                    {sending ? 'Sending...' : 'Request a Quote →'}
                  </button>
                  <p className="text-xs text-gray-400 text-center">We respond within 24 hours on business days.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
