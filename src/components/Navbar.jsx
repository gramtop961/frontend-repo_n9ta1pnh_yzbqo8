import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="mt-5 flex items-center justify-between rounded-2xl border border-emerald-100/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 px-4 py-3 shadow-sm">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-600 to-lime-500" />
            <span className="font-bold text-gray-900">PlyPro</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#products" className="hover:text-emerald-700">Products</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </div>
          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 text-white px-4 py-2 font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-700"
          >
            Get a Quote
          </motion.a>
        </nav>
      </div>
    </header>
  )
}
