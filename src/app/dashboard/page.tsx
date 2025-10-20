'use client'
import { motion } from 'framer-motion'

export default function Home() {
  return ( 
    <main className="min-h-screen bg-gradient-to-br from-[#e6f2ef] to-[#c8d9d1] text-[#334155]">
      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold leading-tight mb-6 text-[#334155]">
            <span className="text-[#5b7c69]">Zihinsel Dengeniz</span> İçin Güvenli Bir Alan.
          </h1>
          <p className="text-lg text-[#475569] mb-8">
            Türkiye’nin dört bir yanından psikolojik danışmanlarla online veya yüz yüze görüşün.
            Profesyonel, gizli ve güvenilir destek her zaman yanınızda.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#5b7c69] text-white px-6 py-3 rounded-xl hover:bg-[#4e6a59] transition">
              Danışma Hizmeti Al
            </button>
            <button className="border border-[#5b7c69] text-[#5b7c69] px-6 py-3 rounded-xl hover:bg-[#5b7c69]/10 transition">
              Danışman Ol
            </button>
          </div>
        </motion.div>

        <motion.img
          src="/therapy-illustration.svg"
          alt="therapy illustration"
          className="w-[80%] md:w-[40%] mt-12 md:mt-0 drop-shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* BLOG */}
      <section className="bg-white py-16 px-10 rounded-t-[3rem] shadow-inner">
        <h2 className="text-3xl font-bold text-center text-[#334155] mb-10">
          Blog Yazıları
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Kaygı Bozukluğu Nedir?',
              desc: 'Kaygının normal ve patolojik biçimleri arasındaki farkı keşfedin.',
              img: '/blog1.jpg',
            },
            {
              title: 'Duygusal Dayanıklılık',
              desc: 'Zor zamanlarda güçlü kalmanın psikolojik yolları.',
              img: '/blog2.jpg',
            },
            {
              title: 'Online Danışmanlık',
              desc: 'Dijital ortamda psikolojik destek almanın avantajları.',
              img: '/blog3.jpg',
            },
          ].map((post, i) => (
            <motion.div
              key={i}
              className="bg-[#f8fafc] rounded-xl shadow-md hover:shadow-xl overflow-hidden transition"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={post.img}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#334155]">
                  {post.title}
                </h3>
                <p className="text-[#64748b] text-sm">{post.desc}</p>
                <button className="mt-4 text-[#5b7c69] hover:underline">
                  Devamını Oku →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-[#475569] text-sm bg-[#f1f5f4] mt-10 rounded-t-3xl shadow-inner">
        © 2025 PDRNet — Profesyonel Psikolojik Danışma Platformu
      </footer>
    </main>
)
}



