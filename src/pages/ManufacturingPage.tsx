import { IMGS } from '@/data'
import PageBanner from '@/components/PageBanner'

export default function ManufacturingPage() {
  const steps = [
    { n: '01', title: 'Raw Material', desc: 'We source premium hardwoods, BWP-grade plywood, and high-quality laminates from certified suppliers across India. All materials undergo incoming quality inspection.', detail: 'Teak, sal, pine, and engineered wood cores are selected based on door type and application requirements.' },
    { n: '02', title: 'Cutting & Sizing', desc: 'Computer-controlled cutting machines precisely cut raw materials to exact dimensions with minimal waste. Panel saws and CNC routers ensure accuracy to 0.5mm tolerance.', detail: 'Automated optimization software maximizes material utilization, reducing costs and environmental impact.' },
    { n: '03', title: 'Core Assembly', desc: 'Door core structures are assembled and glued using cold press and warm press techniques to ensure structural integrity and dimensional stability.', detail: 'Frames are constructed from seasoned timber to prevent warping, twisting, or bowing over time.' },
    { n: '04', title: 'Hot Press Laminating', desc: 'High-pressure hot press machines bond premium laminates, veneers, or plywoods to door surfaces at precise temperature and pressure for perfect adhesion.', detail: 'Press temperature and duration are carefully controlled to ensure uniform bonding without bubbling or delamination.' },
    { n: '05', title: 'Edge Finishing', desc: 'Automated edge-banding machines apply PVC, ABS, or wood edge bands to all exposed edges, sealed and flushed for a seamless, premium finish.', detail: 'Edge profiles can be straight, rounded, or beveled based on design requirements and customer preference.' },
    { n: '06', title: 'Quality Testing', desc: 'Every door undergoes comprehensive quality checks including squareness testing, surface inspection, edge adhesion testing, and dimensional verification.', detail: 'Doors are tested for flatness, moisture resistance, impact resistance, and finish quality before approval.' },
    { n: '07', title: 'Final Finishing', desc: 'Approved doors receive final surface treatments, polishing, and any hardware pre-boring as specified. Detailed visual inspection is performed before packaging.', detail: 'Surface is cleaned, buffed, and inspected under controlled lighting to identify any defects.' },
    { n: '08', title: 'Packaging & Dispatch', desc: 'Finished doors are individually wrapped in protective foam and cardboard, labeled, and loaded carefully for safe transportation to customer sites.', detail: 'GPS-tracked logistics ensure timely, damage-free delivery to locations across Maharashtra and beyond.' },
  ]
  return (
    <>
      <PageBanner title="Manufacturing Process" subtitle="Precision engineering from raw material to finished door" img={IMGS.cnc} />
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-widest uppercase mb-3 text-golden">How We Manufacture</div>
            <h2 className="text-3xl font-bold text-charcoal mb-4 font-heading">8-Step Precision Manufacturing</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">Our manufacturing process combines traditional craftsmanship with modern technology to produce doors of uncompromising quality.</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 timeline-line" />
            <div className="space-y-8">
              {steps.map(s => (
                <div key={s.n} className="relative pl-16">
                  <div className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm border-2 bg-white shadow-md border-golden text-wood font-heading">
                    {s.n}
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-charcoal text-base mb-2 font-heading">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.desc}</p>
                    <p className="text-xs text-gray-500 italic leading-relaxed border-t border-gray-100 pt-3">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 rounded-2xl overflow-hidden shadow-xl bg-gray-200 aspect-video img-overlay">
            <img src={IMGS.cnc} alt="CNC manufacturing machinery" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-end p-8 scrim-card">
              <div>
                <div className="text-golden text-xs font-bold uppercase tracking-widest mb-2">State-of-the-Art Facility</div>
                <div className="text-white text-xl font-bold font-heading">Our CNC Manufacturing Floor, Ambad MIDC, Nashik</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
