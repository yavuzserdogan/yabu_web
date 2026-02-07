"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { HeroBackground } from "../ui/HeroBackground";

export function HomeHero() {
  const router = useRouter();

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
          <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight">
            <span className="block text-slate-900">Fikirleri Dijital Gerçeğe</span>
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Dönüştürüyoruz
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-slate-600 mb-12">
            Yapay zeka destekli yazılım çözümleri ve modern UI/UX
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => router.push("/contact")}
              className="px-10 py-4 bg-blue-600 text-white rounded-xl cursor-pointer hover:zoom-in-out hover:scale-105 transition-transform duration-200"
            >
              Projenizi Başlatalım <ArrowRight className="inline ml-2" />
            </button>

            <button
              onClick={() => router.push("/projects")}
              className="px-10 py-4 border rounded-xl cursor-pointer hover:zoom-in-out hover:scale-105 transition-transform duration-200"
            >
              Projelerimiz →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}