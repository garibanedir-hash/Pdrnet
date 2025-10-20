'use client'

import Layout from '@/components/Layout'
import { motion } from 'framer-motion'

export default function ConsultantDashboard() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <motion.h1
          className="text-3xl font-semibold text-emerald-700 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Danışman Paneli 🌿
        </motion.h1>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-2xl transition">
            <h3 className="text-lg font-medium text-slate-800">Takvimim</h3>
            <p className="text-sm text-slate-600 mt-2">
              Randevularınızı görüntüleyin ve yönetin.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-2xl transition">
            <h3 className="text-lg font-medium text-slate-800">Danışan Talepleri</h3>
            <p className="text-sm text-slate-600 mt-2">
              Yeni randevu taleplerini onaylayın veya reddedin.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-2xl transition">
            <h3 className="text-lg font-medium text-slate-800">Profilim</h3>
            <p className="text-sm text-slate-600 mt-2">
              Uzmanlık alanlarınızı düzenleyin, profilinizi güncelleyin.
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}
