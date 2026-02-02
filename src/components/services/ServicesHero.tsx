"use client";

import { motion } from "framer-motion";
import { HeroBackground } from "../ui/HeroBackground";

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background color için */}
      <HeroBackground />

      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-slate-800 mb-6"
        >
          Hizmetlerimiz
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-slate-600"
        >
          Fikirlerinizi dijital çözümlere dönüştüren uçtan uca hizmetler
        </motion.p>
      </div>
    </section>
  );
}
