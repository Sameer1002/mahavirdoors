export default function StatsBar() {
  const stats = [
    { n: '15+', label: 'Years Experience' },
    { n: '5000+', label: 'Satisfied Customers' },
    { n: '200+', label: 'Door Designs' },
    { n: '100%', label: 'Quality Assured' },
  ]
  return (
    <div className="bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(s => (
          <div key={s.label} className="text-center">
            <div className="text-3xl lg:text-4xl font-black text-golden font-heading">{s.n}</div>
            <div className="text-gray-400 text-xs mt-1 tracking-wide uppercase">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
