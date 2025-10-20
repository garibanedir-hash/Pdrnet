'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push('/login')
      } else {
        setUser(currentUser)
      }
    })
    return () => unsubscribe()
  }, [router])

  const handleLogout = async () => {
    await signOut(auth)
    router.push('/login')
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-700">
        <p>Yükleniyor...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6 text-white flex flex-col items-center">
      <header className="w-full max-w-4xl flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold drop-shadow-lg">PDRNet Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-white/30 hover:bg-white/50 text-white rounded-xl shadow-md transition"
        >
          Çıkış Yap
        </button>
      </header>

      <main className="w-full max-w-4xl bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Hoş geldin 🎉</h2>
        <p className="text-lg mb-2">Oturum açan kullanıcı:</p>
        <p className="font-mono text-xl bg-white/30 py-2 px-4 rounded-xl inline-block">
          {user.email}
        </p>
        <p className="mt-6 text-white/80">
          Burası senin kişisel alanın — buradan danışanlarını, randevularını veya
          mesajlarını yönetebileceksin. 💬
        </p>
      </main>
    </div>
  )
}
