import { motion } from 'framer-motion'
import { Shield, Droplets, Gauge, Leaf } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Borer & Termite Shield',
    desc: 'Factory-treated plywood resists pests and ensures long-lasting performance in tropical climates.'
  },
  {
    icon: Droplets,
    title: 'Boiling Water Proof',
    desc: 'BWP-grade bonding and calibrated cores keep sheets dimensionally stable in moisture-prone areas.'
  },
  {
    icon: Gauge,
    title: 'Calibrated Thickness',
    desc: 'CNC-sanded uniformity for seamless lamination and precision furniture builds.'
  },
  {
    icon: Leaf,
    title: 'Eco-Certified Sourcing',
    desc: 'Responsibly sourced timber with E0 low VOC compliance for healthier interiors.'
  }
]

export default function Features() {
  return (
    <section id="products" className="relative py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why builders choose us</h2>
          <p className="mt-3 text-gray-600">Engineered to exceed industry standards with advanced treatments and strict quality control.</p>
        </div>

        <div className="mt-12 grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-emerald-100/60 bg-gradient-to-b from-white to-emerald-50/20 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-700">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
