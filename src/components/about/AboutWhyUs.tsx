"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { contentTheme } from "@/config/content-theme";

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
  const t = contentTheme;
  return (
    <section className={`${t.section.paddingLarge} ${t.section.bg.white} overflow-hidden px-4`}>
      <div className="max-w-6xl mx-auto">
        <div className={`text-center ${t.section.header.marginLarge}`}>
          <h2 className={`${t.typography.sectionTitle} text-3xl md:text-5xl mb-4 ${t.colors.text.primary}`}>
            Neden Teknoloji Ortağınız Olmalıyız?
          </h2>
          <p className={`${t.typography.sectionSubtitle} text-lg`}>
            Sadece yazılım geliştirmiyoruz; işinizi büyütecek dijital altyapıyı birlikte kuruyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"> {/* 1-2-3 sütun düzeni */}
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex gap-4 md:gap-5 p-5 md:p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 border border-slate-100`}
            >
              <CheckCircle2 className={`${t.colors.icon.primary} shrink-0 mt-1`} size={22} />
              <div>
                <h3 className={`${t.typography.cardTitle} mb-1 ${t.colors.text.primary}`}>
                  {r.title}
                </h3>
                <p className={t.typography.body}>{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}





