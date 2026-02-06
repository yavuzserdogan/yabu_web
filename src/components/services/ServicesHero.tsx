"use client";

import { motion } from "framer-motion";
import { HeroBackground } from "../ui/HeroBackground";

export function ServicesHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden w-full">
      {/* Arka Plan */}
      <HeroBackground />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-8xl font-bold text-slate-900 mb-8 tracking-tight">
            Dijital <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Çözümler</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg md:text-2xl text-slate-600 leading-relaxed font-light"
          >
            İşinizi büyütmek, markanızı dijital dünyada zirveye taşımak için
            modern teknolojileri yaratıcı tasarımlarla harmanlıyoruz.
          </motion.p>
        </motion.div>
      </div>

      {/* Aşağı Kaydır İkonu (Opsiyonel ama şıktır) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-slate-400 rounded-full"
          />
        </div>
      </motion.div>

      {/* Alt geçiş gradyanı */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent" />
    </section>
  );
}