export default function PageBanner({ title, subtitle, img }: { title: string; subtitle: string; img?: string }) {
  return (
    <div className="relative h-64 md:h-80 flex items-end pb-12 overflow-hidden bg-charcoal">
      {img && <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover" />}
      <div className="absolute inset-0 scrim-banner" />
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="text-xs font-semibold tracking-widest uppercase mb-2 text-golden">Mahavir Doors</div>
        <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">{title}</h1>
        <p className="mt-2 text-gray-300 text-sm">{subtitle}</p>
      </div>
    </div>
  )
}
