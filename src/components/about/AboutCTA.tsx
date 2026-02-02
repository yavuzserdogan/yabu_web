"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutCTA() {
  return (
    <section className="py-24 px-4 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Birlikte Çalışmaya Başlayalım
          </h2>
          <p className="text-slate-300 mb-8">
            Projenizi konuşmak için ücretsiz bir görüşme ayarlayalım.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            İletişime Geç
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
