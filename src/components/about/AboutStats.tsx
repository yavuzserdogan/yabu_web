"use client";

import { motion } from "motion/react";
import { contentTheme } from "@/config/content-theme";
import { stats } from "./about.data";

export function AboutStats() {
  const t = contentTheme;
  return (
    <section className={`${t.section.padding} ${t.section.bg.slate}`}>
      <div className={t.section.container}>
        <div className={`text-center ${t.section.header.margin}`}>
          <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mb-4`}>
            Sayılara Yansıyan Deneyim
          </h2>
          <p className={t.typography.sectionSubtitle}>
            Projelerden elde edilen sonuçlarla markalara nasıl değer kattığımızı gösteriyoruz.
          </p>
        </div>

        <div className={t.grid.stats}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group ${t.card.padding.lg} rounded-3xl ${t.card.bg.white} border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 text-center`}
            >
              <div className="text-4xl md:text-5xl font-bold mb-3 bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className={t.typography.label}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
