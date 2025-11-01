'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { fadeIn, fadeInDelay } from "@/utils/motion"

export default function Home() {
  return (
    <main className="min-h-screen text-slate-700 bg-gradient-to-b from-emerald-50 via-teal-50 to-white">

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="PDRNet Logo"
              width={80}
              height={80}
              className="rounded-full drop-shadow-sm"
            />
            <span className="font-semibold tracking-tight text-emerald-700 text-lg">PDRNet</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:text-slate-900">Nasıl Çalışır</a>
            <a href="#about" className="hover:text-slate-900">Hakkımızda</a>
            <a href="#blog" className="hover:text-slate-900">Blog</a>
            <a href="#faq" className="hover:text-slate-900">SSS</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm px-4 py-2 rounded-xl border border-emerald-600/30 text-emerald-700 hover:bg-emerald-50 transition"
            >
              Giriş Yap
            </Link>
            <Link
              href="/login"
              className="text-sm px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white hover:opacity-90 transition shadow-md"
            >
              Danışma Al
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <motion.section {...fadeIn} className="bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-slate-800">
              Gerçek değişim,{" "}
              <span className="text-emerald-600">kendini anlamakla</span> başlar.
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-md">
              PDRNet ile Türkiye’nin her yerinden lisanslı psikolojik danışmanlarla
              online veya yüz yüze, güvenli görüşmeler yapabilirsin.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/login"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white hover:opacity-90 transition shadow-md"
              >
                Hemen Başla
              </Link>
              <Link
                href="/login"
                className="px-6 py-3 rounded-2xl border border-slate-300 hover:bg-white transition"
              >
                Danışman Ol
              </Link>
            </div>

            <div className="mt-6 text-sm text-slate-500">
              %100 Gizlilik • Esnek Randevular • Uzman Danışmanlar
            </div>
          </div>

          <div className="relative">
            <Image
              src="/therapy.png"
              alt="Terapi illüstrasyonu"
              width={500}
              height={500}
              className="w-full max-w-lg mx-auto drop-shadow-2xl"
              priority
            />
            <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-3xl bg-emerald-200/60 blur-xl -z-10" />
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-3xl bg-sky-200/60 blur-xl -z-10" />
          </div>
        </div>
      </motion.section>

      {/* HOW IT WORKS */}
      <motion.section {...fadeInDelay(0.1)} id="how" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-20">
          <h2 className="text-3xl font-semibold text-slate-800 text-center mb-12">
            3 Adımda Destek Al
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'İhtiyacını Belirle', desc: 'Kaygı, motivasyon, ilişki gibi konularda alanını seç.' },
              { title: 'Danışmanını Seç', desc: 'Uzmanlık, şehir ve fiyat filtresiyle en uygun danışmanı bul.' },
              { title: 'Görüşmeye Başla', desc: 'Online ya da yüz yüze, esnek zaman aralıklarıyla başla.' },
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fadeInDelay(i * 0.2)}
                className="bg-emerald-50 rounded-2xl p-8 shadow-sm border border-emerald-100 hover:shadow-md transition"
              >
                <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center font-semibold">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-semibold text-slate-800 text-lg">{s.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section {...fadeInDelay(0.1)} id="about" className="bg-gradient-to-r from-emerald-50 via-white to-sky-50 border-t border-slate-200/70">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-slate-800 mb-6">Hakkımızda</h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            PDRNet, psikolojik danışmanlık hizmetlerini herkes için erişilebilir hale getirmeyi amaçlayan
            yenilikçi bir platformdur. Amacımız, güvenli ve etik çerçevede, bireylerin
            duygusal refahına katkı sağlamaktır.
          </p>
          <div className="mt-8">
            <Link
              href="/login"
              className="inline-block bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-6 py-3 rounded-2xl font-medium shadow-md hover:opacity-90 transition"
            >
              Giriş Yap ve Keşfet
            </Link>
          </div>
        </div>
      </motion.section>

      {/* BLOG */}
      <motion.section {...fadeInDelay(0.2)} id="blog" className="bg-gradient-to-br from-white to-emerald-50">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-20">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl font-semibold text-slate-800">Blog Yazıları</h2>
            <Link href="/blog" className="text-emerald-700 hover:underline text-sm">
              Tümünü Gör
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Kaygıyı Yönetmek', img: '/blog1.jpg', desc: 'Basit tekniklerle zihinsel dengeyi koruma yolları.' },
              { title: 'Online Terapi Etkili mi?', img: '/blog2.jpg', desc: 'Araştırmalara göre online terapinin başarısı.' },
              { title: 'Kendini Tanıma', img: '/blog3.jpg', desc: 'İç sesini duymanın ve farkındalığın önemi.' },
            ].map((b, i) => (
              <motion.article
                key={i}
                {...fadeInDelay(i * 0.2)}
                className="group rounded-2xl overflow-hidden border border-slate-200/70 hover:shadow-lg transition bg-white"
              >
                <img
                  src={b.img}
                  alt={b.title}
                  className="h-48 w-full object-cover group-hover:scale-[1.02] transition"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-slate-800">{b.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
                  <button className="mt-3 text-emerald-700 text-sm hover:underline">
                    Devamını oku →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section {...fadeInDelay(0.3)} id="faq" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-20">
          <h2 className="text-3xl font-semibold text-slate-800 text-center mb-10">
            Sıkça Sorulan Sorular
          </h2>
          <div className="divide-y divide-slate-200 rounded-2xl bg-emerald-50 border border-emerald-100">
            {[
              { q: 'Görüşmeler gizli mi?', a: 'Evet, tüm görüşmeler KVKK ve etik ilkeler çerçevesinde korunur.' },
              { q: 'Online mı, yüz yüze mi?', a: 'Her iki seçenek de mevcut; danışmanınıza göre planlayabilirsiniz.' },
              { q: 'Ücretlendirme nasıl?', a: 'Danışmanın deneyimi ve seans süresine göre değişir; profil sayfasında belirtilir.' },
            ].map((f, i) => (
              <details key={i} className="group p-6 cursor-pointer">
                <summary className="list-none font-medium text-slate-800 flex items-center justify-between">
                  {f.q}
                  <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
                </summary>
                <p className="mt-2 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-emerald-100 via-teal-100 to-sky-100 border-t border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} <span className="font-semibold text-emerald-700">PDRNet</span> • Profesyonel Psikolojik Danışma</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-emerald-700" href="#">Gizlilik</a>
            <a className="hover:text-emerald-700" href="#">KVKK</a>
            <a className="hover:text-emerald-700" href="#">İletişim</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
