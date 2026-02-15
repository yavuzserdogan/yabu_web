"use client";

import { motion } from "motion/react";
import { contentTheme } from "@/config/content-theme";
import { values } from "./about.data";

export function AboutValues() {
  const t = contentTheme;
  return (
    <section className={`${t.section.paddingLarge} ${t.section.bg.white} px-4`}>
      <div className={`${t.section.container}`}>
        <div className={`text-center ${t.section.header.marginLarge}`}>
          <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mb-4`}>
            Değerlerimiz
          </h2>
          <p className={t.typography.sectionSubtitle}>
            Çalışma kültürümüzü ve projelere yaklaşım biçimimizi bu ilkeler belirler.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-6 md:p-10 rounded-3xl border border-slate-100 hover:border-blue-500/30 transition-all duration-500 bg-linear-to-b from-white to-slate-50/50 group`}
            >
              <div className={`${t.iconBox.md} md:${t.iconBox.xl} ${t.iconBox.solid} mb-6 md:mb-8 ${t.iconBox.shadow}`}>
                <v.icon className="text-white" size={24} />
              </div>
              <h3 className={`${t.typography.cardTitleLarge} mb-4 ${t.colors.text.primary}`}>
                {v.title}
              </h3>
              <p className={t.typography.body}>{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}