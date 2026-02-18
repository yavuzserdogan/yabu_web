"use client";

import { motion } from "motion/react";
import { contentTheme } from "@/config/content-theme";
import { process } from "./about.data";
import { useTranslations } from "next-intl";

export function AboutProcess() {
  const t = contentTheme;
  const trans = useTranslations('AboutPage.process');

  return (
    <section className={`${t.section.paddingLarge} px-4`}>
      <div className={t.section.container}>
        <div className={`text-center ${t.section.header.marginLarge}`}>
          <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mb-4`}>
            {trans('title')}
          </h2>
          <p className={t.typography.sectionSubtitle}>
            {trans('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 md:${t.card.padding.md} ${t.card.bg.white} ${t.card.base} hover:shadow-lg transition-all`}
            >
              <div
                className={`absolute -top-3 -left-3 w-10 h-10 md:${t.iconBox.md} ${t.iconBox.gradient} shadow-md flex items-center justify-center rounded-xl`}
              >
                <span className="text-white font-bold text-lg">{step.step}</span>
              </div>
              <h4 className={`${t.typography.cardTitle} ${t.colors.text.primary} mt-4 mb-2`}>
                {trans(`items.${step.title}.title`)}
              </h4>
              <p className={t.typography.body}>
                {trans(`items.${step.title}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}