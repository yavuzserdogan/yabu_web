
"use client";

import { motion } from "framer-motion";
import { contentTheme } from "@/config/content-theme";
import { steps } from "./home.data";

export function HomeSteps() {
  const t = contentTheme;
  return (
    <section className={`${t.section.padding} ${t.section.bg.gradient}`}>
      <div className={t.section.container}>
        <div className={`text-center ${t.section.header.margin}`}>
          <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mb-4`}>
            Nasıl Çalışıyoruz?
          </h2>
          <p className={t.typography.sectionSubtitle}>
            Baştan sona şeffaf ve etkili bir süreçle projelerinizi hayata geçiriyoruz
          </p>
        </div>

        <div className={t.grid.steps}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${t.card.padding.md} ${t.card.bg.white} ${t.card.base} hover:shadow-lg transition-all`}
            >
              <div
                className={`absolute -top-3 -left-3 ${t.iconBox.md} ${t.iconBox.gradient} shadow-md`}
              >
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>
              <h4 className={`${t.typography.cardTitle} ${t.colors.text.primary} mt-4 mb-2`}>
                {step.title}
              </h4>
              <p className={t.typography.body}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
