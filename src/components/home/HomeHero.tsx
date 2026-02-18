"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomeHero() {
  const t = useTranslations('HomePage.hero');
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex items-center" id="hero-section">
      {/* Background Katmanları Aynı Kalıyor */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-indigo-600 to-cyan-500 opacity-80 animate-gradient" />
        <div className="absolute inset-0 bg-linear-to-tl from-cyan-500 via-blue-700 to-indigo-800 opacity-70 animate-gradient-slow" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -right-1/4 top-[-20%] w-[120%] h-[120%] bg-linear-to-br from-blue-500/40 via-indigo-600/40 to-cyan-500/40"
          style={{ clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
          animate={{ rotate: [0, 8, 0], x: [0, -60, 0], y: [0, 40, 0] }}
          transition={{ duration: 30, ease: "easeInOut", repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 md:px-4 md:py-2 mb-6 md:mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs md:text-sm text-white/90 font-medium">Yeni nesil yazılım çözümleri</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] md:leading-none tracking-tighter"
          >
            {t('titleMain')}
            <br />
            <span className="bg-linear-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              {t('titleAccent')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mb-10 md:mb-12 px-4"
          >
            {t('description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0"
          >
            <Link href="/contact#contact-section" className="w-full sm:w-auto">
              <button className="w-full group px-8 py-4 rounded-xl bg-white text-gray-900 font-bold shadow-2xl hover:scale-105 transition cursor-pointer flex items-center justify-center gap-2">
                {t('ctaStart')}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
              </button>
            </Link>

            <Link href="/projects#projects-section" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 rounded-xl bg-white/10 border border-white/30 text-white font-bold hover:bg-white/20 transition cursor-pointer">
                {t('ctaProjects')}
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}