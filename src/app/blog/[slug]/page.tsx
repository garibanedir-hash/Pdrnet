'use client'

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { fadeIn } from "@/utils/motion";
import Link from "next/link";
import Image from "next/image";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [related, setRelated] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  // 🔹 Splash ekranı 2 sn göster
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // 🔹 Blog verisini al
  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;
      const q = query(collection(db, "blogs"), where("slug", "==", slug));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const data = querySnapshot.docs[0].data();
        setBlog(data);

        // 🔹 Benzer yazılar (aynı kategoriden veya farklı)
        const r = query(collection(db, "blogs"), limit(3));
        const relSnap = await getDocs(r);
        const filtered = relSnap.docs
          .map((doc) => doc.data())
          .filter((b) => b.slug !== slug);
        setRelated(filtered);
      }
      setLoading(false);
    };
    fetchBlog();
  }, [slug]);

  // 🔹 Splash ekranı
  if (showSplash) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 relative overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-3xl bg-white/30"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center"
        >
          <Image
            src="/logo.png"
            alt="PDRNet Logo"
            width={140}
            height={140}
            className="drop-shadow-xl"
          />
          <p className="mt-6 text-slate-600 font-medium">Yükleniyor...</p>
        </motion.div>
      </div>
    );
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center text-slate-600">
        Yükleniyor...
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-slate-600">
        <p>Yazı bulunamadı.</p>
        <Link
          href="/blog"
          className="mt-4 text-emerald-600 hover:underline font-medium"
        >
          ← Blog sayfasına dön
        </Link>
      </main>
    );
  }

  // 🔹 Ana içerik
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-white text-slate-700">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <Link
          href="/blog"
          className="text-emerald-700 hover:underline font-medium mb-6 inline-block"
        >
          ← Geri dön
        </Link>

        <motion.img
          {...fadeIn}
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-2xl shadow-md mb-10"
        />
        <motion.h1
          {...fadeIn}
          className="text-4xl font-semibold text-emerald-700 mb-4"
        >
          {blog.title}
        </motion.h1>
        <p className="text-sm text-slate-500 mb-8">{blog.date}</p>

        <motion.p
          {...fadeIn}
          className="text-slate-700 leading-relaxed whitespace-pre-line mb-16"
        >
          {blog.content}
        </motion.p>

        {/* 🔹 Benzer Yazılar */}
        {related.length > 0 && (
          <motion.div {...fadeIn}>
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              Benzer Yazılar
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r, i) => (
                <Link
                  key={`${r.slug}-${i}`}
                  href={`/blog/${r.slug}`}
                  className="block bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  <img
                    src={r.image}
                    alt={r.title}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-slate-800">{r.title}</h3>
                    <p className="text-sm text-slate-600 mt-1 line-clamp-2">
                      {r.desc}
                    </p>
                    <span className="text-emerald-700 text-sm hover:underline mt-3 inline-block">
                      Devamını oku →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}
