"use client";

import { motion } from "framer-motion";
import { HeroBackground } from "../ui/HeroBackground";

export function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden w-full">

      {/* Arka Plan */}
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow Label */}
          <motion.span
            className="inline-block mb-6 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100"
          >
            Hikayemiz
          </motion.span>

          <h1 className="text-6xl md:text-9xl font-extrabold text-slate-900 mb-8 tracking-tighter leading-tight">
            Butik <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Dijital Stüdyo</span>
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-12">
              Büyük ajansların kalitesini, küçük bir ekibin esnekliği ve samimiyetiyle birleştiriyoruz.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-slate-200/60">
              <div className="space-y-2">
                <h4 className="text-4xl font-bold text-slate-900">10+</h4>
                <p className="text-sm text-slate-500 uppercase tracking-wide">Biten Proje</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-4xl font-bold text-slate-900">%100</h4>
                <p className="text-sm text-slate-500 uppercase tracking-wide">Müşteri Memnuniyeti</p>
              </div>
              <div className="hidden md:block space-y-2">
                <h4 className="text-4xl font-bold text-slate-900">4</h4>
                <p className="text-sm text-slate-500 uppercase tracking-wide">Takım Üyesi</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Geçiş Gradyanı */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent z-20" />
    </section>
  );
}