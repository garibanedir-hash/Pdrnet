'use client'

import { motion } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 backdrop-blur-3xl z-[9999]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col items-center"
      >
        <Image
          src="/logo.png"
          alt="PDRNet Logo"
          width={180}
          height={180}
          className="drop-shadow-2xl"
        />
        <p className="mt-6 text-slate-700 font-medium text-lg tracking-wide">
          Yükleniyor...
        </p>
      </motion.div>
    </div>
  );
}
