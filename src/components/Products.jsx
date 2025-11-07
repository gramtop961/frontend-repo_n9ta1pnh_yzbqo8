import { motion } from 'framer-motion'

const products = [
  {
    name: 'BWP Marine Plywood',
    specs: 'ISI 710 | 100% hardwood core | Phenolic resin',
    tone: 'from-emerald-500 to-teal-500'
  },
  {
    name: 'MR Grade Plywood',
    specs: 'ISI 303 | Moisture resistant | Interior grade',
    tone: 'from-lime-500 to-emerald-500'
  },
  {
    name: 'Calibrated Ply',
    specs: 'Uniform thickness | CNC sanded | Premium face veneer',
    tone: 'from-teal-500 to-emerald-600'
  }
]

export default function Products() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-emerald-50/60">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Flagship range</h2>
          <p className="mt-3 text-gray-600">High-performance plywood engineered for interiors, exteriors and marine applications.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm"
            >
              <div className={`h-40 rounded-xl bg-gradient-to-tr ${p.tone} mb-5 shadow-inner`} />
              <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
              <p className="mt-1 text-gray-600 text-sm">{p.specs}</p>
              <div className="mt-4 flex gap-2">
                {['12mm', '16mm', '19mm'].map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-emerald-100 text-emerald-800 font-medium">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
