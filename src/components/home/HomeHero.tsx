"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black" id="hero-section">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-indigo-600 to-cyan-500 opacity-80 animate-gradient" />
        <div className="absolute inset-0 bg-linear-to-tl from-cyan-500 via-blue-700 to-indigo-800 opacity-70 animate-gradient-slow" />
      </div>

      {/* Rotating Diagonal Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -right-1/4 top-[-20%] w-[120%] h-[120%] bg-linear-to-br from-blue-500/40 via-indigo-600/40 to-cyan-500/40"
          style={{
            clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)",
          }}
          animate={{ rotate: [0, 8, 0], x: [0, -60, 0], y: [0, 40, 0] }}
          transition={{ duration: 30, ease: "easeInOut", repeat: Infinity }}
        />

        <motion.div
          className="absolute -left-1/4 bottom-[-30%] w-[120%] h-[120%] bg-linear-to-tr from-cyan-500/30 via-blue-600/30 to-indigo-700/30"
          style={{
            clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 20% 100%)",
          }}
          animate={{ rotate: [0, -6, 0], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 35, ease: "easeInOut", repeat: Infinity }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 mb-8"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-white/90 font-medium">
              Yeni nesil yazılım çözümleri
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none"
          >
            Geleceği Birlikte
            <br />
            <span className="bg-linear-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              İnşa Edelim
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/80 max-w-2xl mb-12"
          >
            Kurumsal düzeyde yazılım mühendisliği ile ölçeklenebilir çözümler
            sunuyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="group px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold shadow-2xl hover:scale-105 transition">
              <span className="flex items-center gap-2">
                Projenizi Başlatın
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
              </span>
            </button>

            <button className="px-8 py-4 rounded-xl bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition">
              Çalışmalarımız
            </button>
          </motion.div>
        </div>
      </div>
    </section>

  );
}
