'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { fadeIn } from "@/utils/motion";

interface Blog {
  id: string;
  title: string;
  desc: string;
  date: string;
  image: string;
  slug: string;
  category: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filtered, setFiltered] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [active, setActive] = useState("Tümü");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const list = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Blog, "id">),
      }));
      setBlogs(list);
      setFiltered(list);
      const cats = ["Tümü", ...new Set(list.map((b) => b.category))];
      setCategories(cats);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  const filterByCategory = (category: string) => {
    setActive(category);
    if (category === "Tümü") setFiltered(blogs);
    else setFiltered(blogs.filter((b) => b.category === category));
  };

  if (loading) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 relative overflow-hidden">
      {/* Blur background */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/30"></div>

      {/* Logo ve metin */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
      >
        <img
          src="/logo.png"
          alt="PDRNet Logo"
          width={160}
          height={160}
          className="drop-shadow-2xl mb-6"
        />
        <p className="text-emerald-700 font-medium text-lg tracking-wide">
          Yükleniyor...
        </p>
        <div className="mt-6 h-10 w-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
      </motion.div>
    </div>
  );
}


  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-white text-slate-700">
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Üst Başlık ve Ana Sayfaya Dön */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <motion.h1
            {...fadeIn}
            className="text-4xl font-semibold text-emerald-700 text-center md:text-left"
          >
            Zihinsel Sağlık Üzerine Yazılar
          </motion.h1>

          <Link
            href="/"
            className="px-6 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-md hover:shadow-lg text-sm"
          >
            Ana Sayfaya Dön
          </Link>
        </div>

        {/* Kategoriler */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat, i) => (
            <button
              key={`${cat}-${i}`}
              onClick={() => filterByCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                active === cat
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-md"
                  : "border-slate-300 text-slate-600 hover:bg-emerald-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Kartları */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.map((b, i) => (
            <motion.article
              key={`${b.id}-${i}`}
              {...fadeIn}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition flex flex-col"
            >
              <img
                src={b.image}
                alt={b.title}
                className="h-44 w-full object-cover rounded-xl mb-4"
              />
              <h2 className="text-lg font-semibold text-slate-800 line-clamp-2">
                {b.title}
              </h2>
              <p className="text-sm text-slate-500 mt-1">{b.date}</p>
              <p className="mt-3 text-slate-600 line-clamp-3">{b.desc}</p>

              <div className="mt-auto pt-4">
                <Link
                  href={`/blog/${b.slug}`}
                  className="block text-center w-full px-4 py-2 rounded-lg border border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white transition text-sm font-medium"
                >
                  Devamını Oku →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Alt Buton */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/"
            className="px-8 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-md hover:shadow-lg text-sm font-medium"
          >
            ← Ana Sayfaya Geri Dön
          </Link>
        </div>
      </section>
    </main>
  );
}
