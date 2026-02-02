"use client";

import { motion } from "motion/react";

export function AboutStory() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hikayemiz
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Büyük ajansların karmaşık süreçlerine ve yüksek maliyetlerine
              alternatif olmak için yola çıktık.
            </p>
            <p>
              Bilgisayar mühendisliği geçmişimizle, işletmelerin gerçek
              ihtiyaçlarını anlayan çözümler üretiyoruz.
            </p>
            <p>
              Her projeye birebir ilgi gösteriyor, uzun vadeli iş ortaklıkları
              kurmayı hedefliyoruz.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-bold mb-2">5+</div>
                <div className="text-slate-600">Yıllık Deneyim</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
