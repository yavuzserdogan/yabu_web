"use client";

import { motion } from "motion/react";
import { contentTheme } from "@/config/content-theme";
import { stats } from "./about.data";
import { useTranslations } from "next-intl";

export function AboutStats() {
  const t = contentTheme;
  const trans = useTranslations('AboutPage.stats');

  return (
    <section className={`${t.section.padding} ${t.section.bg.slate} px-4`}>
      <div className={t.section.container}>
        <div className={`text-center ${t.section.header.margin}`}>
          <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mb-4`}>
            {trans('title')}
          </h2>
          <p className={t.typography.sectionSubtitle}>
            {trans('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group p-6 md:p-10 rounded-3xl ${t.card.bg.white} border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 text-center`}
            >
              <div className="text-3xl md:text-5xl font-bold mb-3 bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className={t.typography.label}>
                {trans(`items.${stat.label}`)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}