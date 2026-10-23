import type { Page, SetPage } from '@/types'
import { CONTACT_EMAIL } from '@/data'
import { IconFacebook, IconInstagram, IconMail, IconMap, IconPhone, IconWhatsApp } from '@/components/Icons'
import NavLink from '@/components/NavLink'

export default function Footer({ setPage }: { setPage: SetPage }) {
  const quickLinks: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' }, { label: 'About Us', page: 'about' },
    { label: 'Products', page: 'products' }, { label: 'Services', page: 'services' },
    { label: 'Gallery', page: 'gallery' }, { label: 'Manufacturing', page: 'manufacturing' },
    { label: 'Contact', page: 'contact' },
  ]
  const productLinks = ['Laminated Doors', 'WPC Doors', 'Safety Doors', 'Plywood Doors', 'Decorative Laminates', 'Custom Wooden Work']
  return (
    <footer className="bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <NavLink page="home" setPage={setPage} className="flex items-center gap-3 mb-4">
              <img src="/assets/logo-sm-png.png" alt="Mahavir Doors logo" className="w-11 h-11 rounded-lg object-cover" width={44} height={44} />
              <div>
                <div className="font-bold text-white text-sm font-heading">Mahavir Doors</div>
                <div className="text-xs text-golden">Premium Manufacturer</div>
              </div>
            </NavLink>
            <p className="text-gray-400 text-xs leading-relaxed mb-5">
              Crafting premium wooden doors for every home and business from our factory in Nashik, Maharashtra since 2009.
            </p>
            <div className="flex items-center gap-2 mb-5" aria-label="Social media">
              {[
                { href: 'https://www.instagram.com/mahavirdoorsnsk/', label: 'Instagram', icon: <IconInstagram /> },
                { href: 'https://www.facebook.com/mahavirdoorsnsk', label: 'Facebook', icon: <IconFacebook /> },
                { href: 'https://wa.me/918669860987', label: 'WhatsApp', icon: <IconWhatsApp /> },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-golden border border-white/10 hover:bg-wood hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <address className="not-italic text-xs text-gray-500 space-y-2">
              <div className="flex items-start gap-2"><span className="text-golden mt-0.5"><IconMap /></span><span>Krushna Nagar, Datir Mala, Ambad MIDC, Nashik – 422010</span></div>
              <div className="flex items-center gap-2"><span className="text-golden"><IconPhone /></span><a href="tel:+918669860987" className="hover:text-white transition-colors">8669860987</a></div>
              <div className="flex items-center gap-2"><span className="text-golden"><IconPhone /></span><a href="tel:+919604503054" className="hover:text-white transition-colors">9604503054</a></div>
              <div className="flex items-center gap-2"><span className="text-golden"><IconMail /></span><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">{CONTACT_EMAIL}</a></div>
            </address>
          </div>
          <nav aria-label="Footer">
            <div className="text-xs font-bold tracking-widest uppercase mb-5 text-golden">Quick Links</div>
            <div className="space-y-2.5">
              {quickLinks.map(l => (
                <NavLink key={l.page} page={l.page} setPage={setPage} className="block text-gray-400 hover:text-white text-xs transition-colors text-left">
                  → {l.label}
                </NavLink>
              ))}
            </div>
          </nav>
          <nav aria-label="Products">
            <div className="text-xs font-bold tracking-widest uppercase mb-5 text-golden">Products</div>
            <div className="space-y-2.5">
              {productLinks.map(p => (
                <NavLink key={p} page="products" setPage={setPage} className="block text-gray-400 hover:text-white text-xs transition-colors text-left">
                  → {p}
                </NavLink>
              ))}
            </div>
          </nav>
          <div>
            <div className="text-xs font-bold tracking-widest uppercase mb-5 text-golden">Business Hours</div>
            <div className="space-y-2 text-xs text-gray-400 mb-6">
              <div className="flex justify-between"><span>Monday – Saturday</span><span className="text-white">9AM – 7PM</span></div>
              <div className="flex justify-between"><span>Sunday</span><span className="text-white">By Appointment</span></div>
            </div>
            <div className="text-xs font-bold tracking-widest uppercase mb-4 text-golden">Quick Contact</div>
            <a href="tel:+918669860987"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold text-white mb-2 transition-opacity hover:opacity-90 bg-wood">
              <IconPhone /> Call: 8669860987
            </a>
            <NavLink
              page="contact"
              setPage={setPage}
              className="w-full py-3 rounded-xl text-xs font-bold border text-gray-300 hover:text-white transition-colors text-center block btn-outline-gold"
            >
              Get Free Quote
            </NavLink>
          </div>
        </div>
        <div className="border-t pt-6 flex flex-wrap justify-between items-center gap-4 footer-rule">
          <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} Mahavir Doors. All rights reserved. | Ambad MIDC, Nashik, Maharashtra
          </div>
          <nav className="flex gap-4 text-xs text-gray-500" aria-label="Legal and help">
            <NavLink page="products" setPage={setPage} className="hover:text-golden transition-colors">Products</NavLink>
            <NavLink page="why" setPage={setPage} className="hover:text-golden transition-colors">Why Us</NavLink>
            <NavLink page="faq" setPage={setPage} className="hover:text-golden transition-colors">FAQ</NavLink>
            <NavLink page="contact" setPage={setPage} className="hover:text-golden transition-colors">Contact</NavLink>
          </nav>
        </div>
      </div>
    </footer>
  )
}
