"use client";

import { motion } from "motion/react";

const reasons = [
  {
    title: "Birebir İletişim",
    desc: "Doğrudan benimle çalışırsınız. Net, hızlı ve şeffaf iletişim.",
  },
  {
    title: "Esnek ve Hızlı",
    desc: "Küçük ekip avantajıyla çevik ilerleme.",
  },
  {
    title: "Maliyet Etkin",
    desc: "Ajans maliyetleri olmadan premium kalite.",
  },
  {
    title: "Kişiye Özel Çözümler",
    desc: "Hazır şablonlar değil, size özel sistemler.",
  },
  {
    title: "Uzun Vadeli Destek",
    desc: "Teslim sonrası da yanınızdayız.",
  },
];

export function AboutWhyUs() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Neden Bizi Seçmelisiniz?
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-2xl p-10 space-y-6"
        >
          {reasons.map((r, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold mb-1">{r.title}</h3>
                <p className="text-sm text-slate-600">{r.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
