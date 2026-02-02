"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { HeroBackground } from "../ui/HeroBackground";

export function HomeHero() {
  const router = useRouter();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 px-4 overflow-hidden">
      {/* Background color için */}
      <HeroBackground />

      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="block text-slate-800">Fikirleri Dijital Gerçeğe</span>
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dönüştürüyoruz
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-slate-600 mb-12">
            Yapay zeka destekli yazılım çözümleri ve modern UI/UX
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => router.push("/contact")}
              className="px-10 py-4 bg-blue-600 text-white rounded-xl"
            >
              Projenizi Başlatalım <ArrowRight className="inline ml-2" />
            </button>

            <button
              onClick={() => router.push("/portfolio")}
              className="px-10 py-4 border rounded-xl"
            >
              Referanslarımız →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
