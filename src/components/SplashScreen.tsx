'use client'

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Logo 4.5 saniye sonra kaybolur (ClientLayout zaten 5 sn sonra sayfayı açıyor)
    const timer = setTimeout(() => setVisible(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 backdrop-blur-3xl z-[9999]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center"
          >
            {/* Logo */}
            <Image
              src="/logo.png"
              alt="PDRNet Logo"
              width={180}
              height={180}
              className="drop-shadow-2xl"
            />

            {/* “Yükleniyor...” yazısı */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-6 text-emerald-700 font-medium text-lg tracking-wide"
            >
              Yükleniyor...
            </motion.p>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1.2 }}
              className="mt-4 text-slate-600 text-base italic font-light"
            >
              “Zihnini dinle, kendine alan aç.”
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
