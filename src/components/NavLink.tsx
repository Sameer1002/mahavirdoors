import type { MouseEvent, ReactNode } from 'react'
import type { Page, SetPage } from '@/types'
import { pathFor } from '@/seo'

export default function NavLink({
  page,
  setPage,
  className,
  children,
  ariaCurrent,
  onNavigate,
}: {
  page: Page
  setPage: SetPage
  className?: string
  children: ReactNode
  ariaCurrent?: 'page' | undefined
  onNavigate?: () => void
}) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    setPage(page)
    onNavigate?.()
  }

  return (
    <a href={pathFor(page)} className={className} onClick={handleClick} aria-current={ariaCurrent}>
      {children}
    </a>
  )
}
