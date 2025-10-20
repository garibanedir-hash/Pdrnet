'use client'

import { useState, useEffect } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { motion } from 'framer-motion'
import { db, auth } from '@/lib/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { format } from 'date-fns'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function AppointmentPage() {
  const [selected, setSelected] = useState<Date | undefined>()
  const [consultantId, setConsultantId] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const [quote, setQuote] = useState('')

  const quotes = [
    'Kendine iyi davran, çünkü seninle ömür boyu yaşayacaksın.',
    'İyileşmek bir yolculuktur, yarış değil.',
    'Bir nefes al, bazen sadece o yeter.',
    'Bugün küçük bir adım, yarın büyük bir huzur getirir.',
    'Zor zamanlar bile seni sen yapar, sabırla yürü.',
    'Her yeni gün, kendini yeniden tanıma fırsatıdır.',
  ]

  useEffect(() => {
    // Rastgele bir söz seç
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomQuote)
  }, [])

  const handleSubmit = async () => {
    if (!selected || !consultantId) return alert('Lütfen danışman ve tarih seçin.')
    const user = auth.currentUser
    if (!user) return alert('Giriş yapmalısınız.')

    await addDoc(collection(db, 'appointments'), {
      clientId: user.uid,
      consultantId,
      date: format(selected, 'yyyy-MM-dd'),
      status: 'pending',
      createdAt: new Date(),
    })
    setStatus('Randevu isteğiniz gönderildi 🎉')
  }

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-5xl bg-white/60 backdrop-blur-2xl shadow-2xl rounded-3xl p-8 border border-white/40 flex flex-col md:flex-row items-center gap-10">
        {/* SOL TARAF */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Link href="/dashboard/client" className="flex items-center text-emerald-700 hover:text-emerald-900 transition">
              <ArrowLeft className="w-5 h-5 mr-1" /> Geri Dön
            </Link>
          </div>

          <h1 className="text-3xl font-semibold text-emerald-700">Randevu Oluştur</h1>
          <motion.p
            key={quote}
            className="text-slate-600 italic bg-emerald-50/70 border border-emerald-100 p-3 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            “{quote}”
          </motion.p>

          <div>
            <label className="block mb-2 text-slate-700 font-medium">Danışman ID</label>
            <input
              type="text"
              placeholder="örn. danisman_123"
              className="w-full border border-emerald-200 rounded-xl px-4 py-2 mb-6 outline-none focus:ring-2 focus:ring-emerald-400 bg-white/80"
              value={consultantId}
              onChange={(e) => setConsultantId(e.target.value)}
            />

            <div className="bg-white/80 rounded-2xl p-4 shadow-inner mb-6 border border-emerald-100">
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                className="text-slate-700 [&_.rdp-day_selected]:bg-emerald-500 [&_.rdp-day_selected]:text-white [&_.rdp-day_selected:hover]:bg-emerald-600"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
              className="w-full py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition font-medium shadow-md"
            >
              Randevu Talebi Gönder
            </motion.button>

            {status && (
              <motion.p
                className="text-emerald-700 text-center mt-4 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {status}
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* SAĞ TARAF (GÖRSEL) */}
        <motion.div
          className="hidden md:flex flex-1 justify-center items-center"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://cdn.pixabay.com/photo/2021/03/20/20/19/woman-6110843_1280.png"
            alt="relax illustration"
            className="w-96 h-auto drop-shadow-xl"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
