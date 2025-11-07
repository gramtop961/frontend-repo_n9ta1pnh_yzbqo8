import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <Contact />
      </main>
      <footer className="border-t border-emerald-100 bg-white/60">
        <div className="container mx-auto px-6 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} PlyPro Distributors. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#products" className="hover:text-emerald-700">Products</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
