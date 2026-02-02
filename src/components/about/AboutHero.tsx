"use client";

import { motion } from "motion/react";

export function AboutHero() {
  return (
    <section className="py-20 px-4 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-block mb-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm">
            Hakkımızda
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Butik Dijital Stüdyo
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Büyük ajans kalitesi, küçük ekip esnekliği.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
