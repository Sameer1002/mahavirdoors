import { IMGS } from '@/data'
import { IconCheck } from '@/components/Icons'
import PageBanner from '@/components/PageBanner'

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" subtitle="Our story, mission, and the values that drive us" img={IMGS.aboutDoor} />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase mb-3 text-golden">Our Story</div>
            <h2 className="text-3xl font-bold text-charcoal mb-6 gold-underline font-heading">Mahavir Doors — A Legacy of Craftsmanship</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Mahavir Doors is a leading manufacturer of premium wooden doors located in Ambad MIDC, Nashik. Founded with a passion for quality craftsmanship, we have grown from a small workshop into one of the most trusted door manufacturing brands in Maharashtra.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We are committed to delivering exceptional craftsmanship, superior materials, and innovative designs to residential, commercial, and industrial customers across the region.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              With years of manufacturing expertise, we have earned a reputation for quality, reliability, and genuine customer satisfaction. Every door that leaves our factory is a reflection of our unwavering commitment to excellence.
            </p>
            <div className="rounded-2xl p-6 border-l-4 story-card">
              <div className="flex gap-4">
                <div className="text-center shrink-0">
                  <div className="text-3xl font-black text-wood font-heading">15+</div>
                  <div className="text-xs text-gray-500 mt-1">Years</div>
                </div>
                <div className="w-px bg-gray-200" />
                <div className="text-gray-600 text-sm leading-relaxed">
                  Located at Krushna Nagar, Datir Mala, Ambad MIDC, Nashik — the heart of Maharashtra&apos;s manufacturing belt.
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {[
              { title: 'Our Mission', icon: '🎯', text: 'To manufacture premium-quality doors that combine elegance, durability, and affordability — making beautiful spaces accessible to every home and business.' },
              { title: 'Our Vision', icon: '🔭', text: "To become Maharashtra's most trusted and recognized wooden door manufacturing brand, known for innovation, quality, and customer-first service." },
              { title: 'Our Values', icon: '💎', items: ['Quality — Uncompromising standards in every product', 'Innovation — Embracing modern design and technology', 'Trust — Building relationships that last', 'Integrity — Honest pricing, on-time delivery', 'Customer Satisfaction — Your happiness is our measure'] },
            ].map(s => (
              <div key={s.title} className="rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{s.icon}</span>
                  <h3 className="font-bold text-charcoal font-heading">{s.title}</h3>
                </div>
                {s.text && <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>}
                {s.items && (
                  <ul className="space-y-2">
                    {s.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-0.5 text-golden shrink-0"><IconCheck /></span>{item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
