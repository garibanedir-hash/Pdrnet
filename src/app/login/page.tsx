'use client'

import Image from "next/image";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('Danışan');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        const userData = userDoc.data();

        if (userData?.role === 'Danışman') {
          window.location.href = '/dashboard/consultant';
        } else {
          window.location.href = '/dashboard/client';
        }
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, { displayName: fullName });
        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          fullName,
          role,
          email,
          createdAt: new Date(),
        });

        if (role === 'Danışman') {
          window.location.href = '/dashboard/consultant';
        } else {
          window.location.href = '/dashboard/client';
        }
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-100">
      {/* Sol taraf - Form */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex flex-col justify-center items-center px-8 md:px-20 py-12 bg-white shadow-2xl rounded-r-3xl"
      >
        {/* Logo + Başlık */}
        <div className="flex flex-col items-center mb-10">
          <Image
            src="/logo.png"
            alt="PDRNet Logo"
            width={250}
            height={250}
            className="object-contain drop-shadow-md"
          />
          <h1 className="text-3xl font-semibold text-emerald-700 mt-3">PDRNet</h1>
          <p className="text-slate-500 text-sm">Online Psikolojik Destek Platformu</p>
        </div>

        {/* Başlık */}
        <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
          {isLogin ? 'Giriş Yap' : 'Hesap Oluştur'}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
          {!isLogin && (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Ad Soyad</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Rol</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
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
              className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
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
                className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-emerald-600 transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <motion.button
            type="submit"
            disabled={loading}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-2 font-medium transition-all shadow-md hover:shadow-lg"
          >
            {loading ? 'Yükleniyor...' : isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
          </motion.button>
        </form>

        {/* Kayıt Ol / Giriş Yap */}
        <div className="mt-6 flex flex-col items-center gap-3">
          {isLogin ? (
            <button
              onClick={() => setIsLogin(false)}
              className="bg-white border border-emerald-600 text-emerald-700 px-6 py-2 rounded-xl font-medium hover:bg-emerald-50 transition"
            >
              Kayıt Ol
            </button>
          ) : (
            <button
              onClick={() => setIsLogin(true)}
              className="bg-white border border-emerald-600 text-emerald-700 px-6 py-2 rounded-xl font-medium hover:bg-emerald-50 transition"
            >
              Giriş Yap
            </button>
          )}

          {/* Ana sayfa butonu */}
          <Link
            href="/"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl font-medium transition shadow-md hover:shadow-lg"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </motion.div>

      {/* Sağ taraf - Görsel */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden md:flex md:w-1/2 items-center justify-center bg-gradient-to-br from-emerald-100 via-teal-100 to-sky-100"
      >
        <Image
          src="/therapy.png"
          alt="PDRNet Görsel"
          width={750}
          height={750}
          className="object-contain drop-shadow-2xl"
          priority
        />
      </motion.div>
    </div>
  );
}
