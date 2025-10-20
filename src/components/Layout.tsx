'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100">
      {/* Üst Menü */}
      <header className="bg-white/70 backdrop-blur-xl border-b border-emerald-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="text-emerald-700 font-semibold text-lg">🌿 PDRNet</Link>
          <nav className="flex items-center gap-6 text-slate-700">
            <Link href="/dashboard/client" className="hover:text-emerald-700">Panel</Link>
            <Link href="/dashboard/client/appointment" className="hover:text-emerald-700">Randevu</Link>
            <Link href="/login" className="text-red-500 hover:text-red-600">Çıkış</Link>
          </nav>
        </div>
      </header>

      {/* Sayfa İçeriği */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-6"
      >
        {children}
      </motion.main>
    </div>
  )
}
