import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Request a quote</h2>
          <p className="mt-3 text-gray-600">Tell us your requirements and our team will get back within 24 hours.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-emerald-100 p-6 bg-white shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input className="mt-1 w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input className="mt-1 w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" placeholder="+91 98765 43210" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Requirement</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" placeholder="Sheet size, thickness, grade, location..." />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-xl bg-emerald-600 text-white px-6 py-3 font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 transition">
              Send Request
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-emerald-100 p-6 bg-gradient-to-b from-emerald-50 to-white"
          >
            <h3 className="text-lg font-semibold text-gray-900">Assured logistics</h3>
            <p className="mt-2 text-gray-600">Pan-India delivery with moisture-proof packing. Bulk pricing for dealers, carpenters and contractors.</p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Same-day dispatch for in-stock SKUs</li>
              <li>• Custom sizes on request</li>
              <li>• Certifications shared on purchase</li>
            </ul>
            <div className="mt-6 rounded-xl border border-emerald-200 p-4 bg-white">
              <p className="text-sm text-gray-600">Call sales: +91 98XXXXXX10</p>
              <p className="text-sm text-gray-600">Email: sales@plypro.in</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
