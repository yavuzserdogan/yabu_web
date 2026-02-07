"use client";

import { motion } from "motion/react";
import ShinyText from "../ui/ShinyText";

export function AboutStory() {
  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ShinyText
            text="Hikayemiz"
            className="text-4xl md:text-5xl font-bold mb-8 block"
            color="#0f172a"
            shineColor="#3b82f6"
            speed={3}
          />
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
            <p className="border-l-4 border-blue-500 pl-6 italic text-slate-800">
              &quot;Büyük ajansların karmaşık süreçlerine alternatif, şeffaf bir teknoloji partneri olmak için yola çıktık.&quot;
            </p>
            <p>
              Bilgisayar mühendisliği disipliniyle, işletmelerin karmaşık dijital sorunlarına
              stratejik ve ölçeklenebilir çözümler üretiyoruz.
            </p>
            <p>
              Her projeyi kendi girişimimiz gibi sahipleniyor, sadece bir tedarikçi değil,
              teknoloji ortağınız olarak konumlanıyoruz.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group max-w-sm md:max-w-md lg:max-w-lg mx-auto"

        >
          {/* Arka plan dekoratif element */}
          <div className="absolute -inset-4 bg-linear-to-tr from-blue-100 to-purple-100 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />

          <div className="relative aspect-square rounded-3xl bg-linear-to-br from-blue-600 to-purple-700 p-0.5 shadow-2xl">
            <div className="w-full h-full bg-white rounded-[22px] flex flex-col items-center justify-center p-12 text-center">
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                className="text-8xl font-black bg-linear-to-b from-blue-600 to-purple-700 bg-clip-text text-transparent mb-4"
              >
                5+
              </motion.div>
              <div className="text-xl font-medium text-slate-900 mb-2">Yıllık Sektörel Deneyim</div>
              <div className="text-slate-500 text-sm tracking-widest uppercase font-semibold">Engineering Excellence</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}