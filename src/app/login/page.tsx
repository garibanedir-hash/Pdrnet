'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { auth, db } from '@/lib/firebase'
import { doc, setDoc, getDoc } from 'firebase/firestore'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [role, setRole] = useState('Danışan')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (isLogin) {
        // 🔹 GİRİŞ
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        const userDoc = await getDoc(doc(db, 'users', user.uid))
        const userData = userDoc.data()
        // 🔹 Rol kontrolü ve yönlendirme
        if (userData?.role === 'Danışman') {
          window.location.href = '/dashboard/consultant'
        } else {
          window.location.href = '/dashboard/client'
        }
      } else {
        // 🔹 KAYIT
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        await updateProfile(user, { displayName: fullName })
        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          fullName,
          role,
          email,
          createdAt: new Date(),
        })
        // 🔹 Kayıttan sonra yönlendirme
        if (role === 'Danışman') {
          window.location.href = '/dashboard/consultant'
        } else {
          window.location.href = '/dashboard/client'
        }
      }
    } catch (err: any) {
      console.error(err)
      setError(err.message)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
        {/* SOL TARAF */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-800 leading-tight">
            Zihnini dinle,  
            <span className="text-emerald-600"> kendine alan aç.</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            PDRNet ile Türkiye’nin her yerinden profesyonel psikolojik danışmanlarla
            online veya yüz yüze görüşmeler yapabilirsin.
          </p>
          <div className="mt-6">
            <Link href="/" className="text-emerald-700 hover:underline font-medium">
              Ana Sayfaya Dön →
            </Link>
          </div>
        </motion.div>

        {/* SAĞ TARAF - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 bg-white/60 backdrop-blur-xl shadow-2xl rounded-2xl p-8 md:p-10 border border-white/30"
        >
          <h2 className="text-2xl font-semibold text-emerald-700 mb-6 text-center">
            {isLogin ? 'Giriş Yap' : 'Hesap Oluştur'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Kayıt modunda ek alanlar */}
            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Rol
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-emerald-400"
                  >
                    <option>Danışan</option>
                    <option>Danışman</option>
                  </select>
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">E-posta</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Parola</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-emerald-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-emerald-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-2 font-medium transition"
            >
              {loading ? 'Yükleniyor...' : isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
            </button>
          </form>

          <p className="mt-6 text-center text-slate-600 text-sm">
            {isLogin ? (
              <>
                Henüz hesabın yok mu?{' '}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-emerald-700 font-medium hover:underline"
                >
                  Kayıt Ol
                </button>
              </>
            ) : (
              <>
                Zaten hesabın var mı?{' '}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-emerald-700 font-medium hover:underline"
                >
                  Giriş Yap
                </button>
              </>
            )}
          </p>
        </motion.div>
      </div>
    </div>
  )
}
