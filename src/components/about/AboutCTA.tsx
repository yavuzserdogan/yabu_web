"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutCTA() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] bg-linear-to-br from-blue-600 to-purple-700 px-8 py-16 md:px-16 text-center shadow-2xl shadow-blue-200"
        >
          {/* Dekoratif Işık Efektleri */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Birlikte Çalışmaya Başlayalım
            </h2>
            <p className="text-blue-100 text-lg mb-10 font-light">
              Projenizi konuşmak ve hedeflerinize uygun bir yol haritası çizmek için ücretsiz bir ön görüşme ayarlayalım.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-transform hover:scale-105 shadow-xl"
            >
              Hemen İletişime Geç
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}