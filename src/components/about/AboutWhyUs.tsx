"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Birebir İletişim",
    desc: "Doğrudan mühendislerle çalışırsınız. Aracı katmanlar olmadan hızlı ve net kararlar alınır."
  },
  {
    title: "Çevik ve Hızlı Teslimat",
    desc: "Sprint bazlı ilerler, iş hedeflerinize en kısa sürede çalışan çözümler üretiriz."
  },
  {
    title: "Maliyet Odaklı Yaklaşım",
    desc: "Butik modelimiz sayesinde gereksiz ajans maliyetleri yerine gerçek üretime yatırım yaparsınız."
  },
  {
    title: "Özel Mimari ve Çözümler",
    desc: "Hazır kalıplar yerine ölçeklenebilir, güvenli ve size özel sistemler tasarlarız."
  },
  {
    title: "Sürekli Destek",
    desc: "Yayına aldıktan sonra da yanınızdayız; bakım, izleme ve geliştirme süreçlerini birlikte yürütürüz."
  },
  {
    title: "Ölçeklenebilirlik Odaklı",
    desc: "Bugünün ihtiyaçlarını karşılarken yarının büyümesine hazır altyapılar kurarız."
  }
];


export function AboutWhyUs() {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900">
            Neden Teknoloji Ortağınız Olmalıyız?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Sadece yazılım geliştirmiyoruz; işinizi büyütecek dijital altyapıyı birlikte kuruyoruz.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 border border-slate-100"
            >
              <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={22} />
              <div>
                <h3 className="font-semibold text-lg mb-1 text-slate-900">
                  {r.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
