export type Page =
  | 'home'
  | 'about'
  | 'products'
  | 'manufacturing'
  | 'services'
  | 'gallery'
  | 'why'
  | 'faq'
  | 'contact'

export type SetPage = (page: Page) => void
