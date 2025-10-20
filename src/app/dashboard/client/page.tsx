'use client'

import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ClientDashboard() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {/* Başlık */}
        <motion.h1
          className="text-3xl font-semibold text-emerald-700 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Danışan Paneli 🌿
        </motion.h1>

        {/* Kartlar */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Randevularım */}
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-lg font-medium text-slate-800">Randevularım</h3>
            <p className="text-sm text-slate-600 mt-2">
              Yaklaşan ve geçmiş seanslarınızı görüntüleyin.
            </p>
          </div>

          {/* Danışmanlarım */}
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-lg font-medium text-slate-800">Danışmanlarım</h3>
            <p className="text-sm text-slate-600 mt-2">
              Daha önce görüştüğünüz danışmanları listeleyin.
            </p>
          </div>

          {/* Profilim */}
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-lg font-medium text-slate-800">Profilim</h3>
            <p className="text-sm text-slate-600 mt-2">
              Kişisel bilgilerinizi güncelleyin, yolculuğunuzu yönetin.
            </p>
          </div>

          {/* Randevu Oluştur */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-2xl transition"
          >
            <Link href="/dashboard/client/appointment" className="flex flex-col items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m-9 4h9m-9 4h4m4 0h4M4 11V5a2 2 0 012-2h12a2 2 0 012 2v6M4 11v10a2 2 0 002 2h12a2 2 0 002-2V11" />
              </svg>
              <h3 className="text-lg font-medium text-slate-800">Randevu Oluştur</h3>
              <p className="text-sm text-slate-600 mt-2">
                Takvimden uygun zamanı seçin ve danışmanınızla görüşme planlayın.
              </p>
            </Link>
          </motion.div>
        </motion.div>

        {/* Motivasyon Mesajı */}
        <motion.p
          className="text-center text-emerald-700 mt-12 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          “Kendine zaman ayırmak, iyileşmenin ilk adımıdır.”
        </motion.p>
      </div>
    </Layout>
  )
}
