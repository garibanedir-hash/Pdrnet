'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = { initial: {opacity:0, y:20}, animate:{opacity:1, y:0} }

export default function Home() {
  return (
    <main className="min-h-screen text-slate-700">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-emerald-500/90" />
            <span className="font-semibold tracking-tight">PDRNet</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:text-slate-900">Nasıl Çalışır</a>
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
              className="text-sm px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition"
            >
              Danışma Al
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp} transition={{duration:.7}}>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-slate-800">
              Daha iyi hissetmeye <span className="text-emerald-600">bugün</span> başlayın.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Türkiye’nin dört bir yanından lisanslı psikolojik danışmanlarla
              online veya yüz yüze, güvenli ve gizli görüşmeler.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/login"
                className="px-6 py-3 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700 transition"
              >
                Ücretsiz Başla
              </Link>
              <Link
                href="/login"
                className="px-6 py-3 rounded-2xl border border-slate-300 hover:bg-white transition"
              >
                Danışman Ol
              </Link>
            </div>
            <div className="mt-6 text-sm text-slate-500">
              %100 gizlilik • Esnek zamanlar • Uzman eşleştirme
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{opacity:0, x:30}}
            animate={{opacity:1, x:0}}
            transition={{duration:.7}}
          >
            <img
              src="/therapy-illustration.svg"
              alt="Terapi illüstrasyonu"
              className="w-full max-w-lg mx-auto drop-shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-3xl bg-emerald-200/60 blur-xl -z-10" />
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-3xl bg-sky-200/60 blur-xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* TRUST / BADGES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-10">
          <p className="text-center text-sm text-slate-500 mb-6">Güvenle tercih edilen platform</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-80">
            <div className="h-12 bg-slate-100 rounded-xl" />
            <div className="h-12 bg-slate-100 rounded-xl" />
            <div className="h-12 bg-slate-100 rounded-xl" />
            <div className="h-12 bg-slate-100 rounded-xl" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-gradient-to-tr from-white to-emerald-50/60">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 text-center">
            3 adımda destek alın
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {title:'İhtiyacını seç', desc:'Kaygı, ilişki, motivasyon, erteleme vb.'},
              {title:'Danışmanını bul', desc:'Uzmanlık, şehir, puan ve fiyat filtreleri.'},
              {title:'Görüşmeyi başlat', desc:'Online ya da yüz yüze, esnek zamanlar.'},
            ].map((s,i)=>(
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60">
                <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center font-semibold">
                  {i+1}
                </div>
                <h3 className="mt-4 font-semibold text-slate-800">{s.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section id="blog" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">Blog Yazıları</h2>
            <Link href="/blog" className="text-emerald-700 hover:underline text-sm">Tümünü gör</Link>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {title:'Kaygıyla baş etmenin yolları', img:'/blog1.jpg', desc:'Günlük rutinde küçük değişikliklerle daha dengeli bir yaşam.'},
              {title:'Online danışmanlık etkili mi?', img:'/blog2.jpg', desc:'Araştırmalar ve pratik önerilerle kısa bir rehber.'},
              {title:'İlişkilerde sağlıklı sınırlar', img:'/blog3.jpg', desc:'Empati ve sınır dengesi için uygulanabilir ipuçları.'},
            ].map((b,i)=>(
              <article key={i} className="group rounded-2xl overflow-hidden border border-slate-200/70 hover:shadow-md transition">
                <img src={b.img} alt={b.title} className="h-44 w-full object-cover group-hover:scale-[1.02] transition" />
                <div className="p-5">
                  <h3 className="font-semibold text-slate-800">{b.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{b.desc}</p>
                  <button className="mt-3 text-emerald-700 text-sm hover:underline">Devamını oku →</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gradient-to-br from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 text-center">Sıkça Sorulan Sorular</h2>
          <div className="mt-8 divide-y divide-slate-200 rounded-2xl bg-white border border-slate-200/70">
            {[
              {q:'Gizlilik nasıl sağlanır?', a:'Tüm görüşmeler uçtan uca güvende; kişisel verileriniz KVKK kapsamında korunur.'},
              {q:'Yüz yüze randevu mümkün mü?', a:'Evet, danışmanınıza göre şehir/ilçe bazında yüz yüze randevu alabilirsiniz.'},
              {q:'Ücretlendirme nasıl?', a:'Danışmanın deneyimi ve seans süresine göre değişir; profil sayfasında yer alır.'},
            ].map((f,i)=>(
              <details key={i} className="group p-5">
                <summary className="cursor-pointer list-none font-medium text-slate-800 flex items-center justify-between">
                  {f.q}
                  <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
                </summary>
                <p className="mt-2 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200/70">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-10 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} PDRNet • Profesyonel Psikolojik Danışma</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-slate-700" href="#">Gizlilik</a>
            <a className="hover:text-slate-700" href="#">KVKK</a>
            <a className="hover:text-slate-700" href="#">İletişim</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
