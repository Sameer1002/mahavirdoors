import { useState } from 'react'
import type { Page, SetPage } from '@/types'
import { IconMenu, IconPhone, IconX } from '@/components/Icons'
import NavLink from '@/components/NavLink'

export default function Header({ page, setPage }: { page: Page; setPage: SetPage }) {
  const [open, setOpen] = useState(false)
  const links: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' }, { label: 'About', page: 'about' },
    { label: 'Products', page: 'products' }, { label: 'Manufacturing', page: 'manufacturing' },
    { label: 'Services', page: 'services' }, { label: 'Gallery', page: 'gallery' },
    { label: 'Why Us', page: 'why' }, { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' },
  ]
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 lg:px-6 h-16 flex items-center justify-between" aria-label="Primary">
        <NavLink page="home" setPage={setPage} className="flex items-center gap-3 shrink-0">
          <img src="/assets/logo-sm.jpeg" alt="Mahavir Doors logo" className="w-10 h-10 rounded-lg object-cover" width={40} height={40} />
          <div className="text-left">
            <div className="text-sm font-bold leading-none text-wood font-heading">Mahaveer Doors</div>
            <div className="text-xs font-medium text-golden">Premium Manufacturer</div>
          </div>
        </NavLink>

        <div className="hidden xl:flex items-center gap-0.5">
          {links.map(l => (
            <NavLink
              key={l.page}
              page={l.page}
              setPage={setPage}
              ariaCurrent={page === l.page ? 'page' : undefined}
              className={`px-2.5 py-2 text-xs font-medium rounded transition-colors font-body ${page === l.page ? 'text-wood font-semibold' : 'text-charcoal hover:text-wood'}`}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <a href="tel:+918669860987" className="text-xs text-charcoal flex items-center gap-1.5 hover:text-wood transition-colors">
            <span className="text-golden"><IconPhone /></span> 8669860987
          </a>
          <NavLink
            page="contact"
            setPage={setPage}
            className="px-4 py-2 rounded text-xs font-bold text-white transition-opacity hover:opacity-90 bg-golden font-heading"
            ariaCurrent={page === 'contact' ? 'page' : undefined}
          >
            Get Free Quote
          </NavLink>
        </div>

        <button className="xl:hidden p-1" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <IconX /> : <IconMenu />}
        </button>
      </nav>
      {open && (
        <div id="mobile-nav" className="xl:hidden bg-white border-t border-gray-100 px-4 py-3 grid grid-cols-3 gap-1">
          {links.map(l => (
            <NavLink
              key={l.page}
              page={l.page}
              setPage={setPage}
              onNavigate={() => setOpen(false)}
              ariaCurrent={page === l.page ? 'page' : undefined}
              className={`text-left px-2 py-2 text-xs rounded ${page === l.page ? 'bg-wood/10 text-wood font-semibold' : 'text-charcoal hover:text-wood'}`}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            page="contact"
            setPage={setPage}
            onNavigate={() => setOpen(false)}
            className="col-span-3 mt-2 py-2.5 rounded text-sm font-bold text-white text-center bg-golden"
            ariaCurrent={page === 'contact' ? 'page' : undefined}
          >
            Get Free Quote
          </NavLink>
        </div>
      )}
    </header>
  )
}
