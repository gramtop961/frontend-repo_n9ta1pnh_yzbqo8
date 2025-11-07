import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-lime-50 to-white" />

      <div aria-hidden className="absolute -top-24 -right-24 w-[42rem] h-[42rem] rounded-full blur-3xl bg-gradient-to-br from-emerald-300/30 via-green-400/20 to-lime-300/30" />
      <div aria-hidden className="absolute -bottom-32 -left-24 w-[36rem] h-[36rem] rounded-full blur-3xl bg-gradient-to-tr from-amber-300/20 via-emerald-300/20 to-green-400/20" />

      <div className="relative container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
            Premium Plywood Distributor
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Sustainable strength for every build
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            Engineered plywood sheets with zero compromise: calibrated thickness, borer & termite resistance, and eco-certified sourcing.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#products"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 text-white px-6 py-3 font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 transition"
            >
              Explore Products
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-600 text-emerald-700 px-6 py-3 font-semibold bg-white/70 backdrop-blur hover:bg-white transition"
            >
              Get a Quote
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 md:mt-20"
        >
          <div className="relative mx-auto max-w-6xl rounded-3xl border border-emerald-100 bg-white shadow-2xl shadow-emerald-100/60">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-3xl">
              <div className="relative h-full w-full bg-[radial-gradient(circle_at_20%_20%,#e8f5e9_0,transparent_40%),radial-gradient(circle_at_80%_30%,#f0fdf4_0,transparent_35%),linear-gradient(180deg,#ffffff_0,#f8fafc_100%)] p-6 md:p-10 grid place-items-center">
                <motion.div
                  initial={{ rotate: -6, y: 10, opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.35 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                >
                  {['Calibrated', 'Borer Safe', 'Termite Shield', 'Water Resistant', 'ISI Grade', 'E0 Low VOC', 'Carb Compliant', 'Boiling Water Proof'].map((label, idx) => (
                    <motion.div
                      key={label}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.45 + idx * 0.05 }}
                      className="rounded-2xl bg-white/90 backdrop-blur border border-emerald-100 px-3 py-4 text-center shadow-sm"
                    >
                      <p className="text-sm font-semibold text-emerald-700">{label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
