"use client";

import { motion } from "framer-motion";
import { contentTheme } from "@/config/content-theme";
import { steps } from "./home.data";
import { useTranslations } from "next-intl";

export function HomeSteps() {
  const t = contentTheme;
  const trans = useTranslations('HomePage.steps');

  return (
    <section className={`${t.section.padding} ${t.section.bg.gradient} px-4 md:px-0`}>
      <div className={t.section.container}>
        <div className={`text-center ${t.section.header.margin}`}>
          <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mb-4`}>
            {trans('title')}
          </h2>
          <p className={t.typography.sectionSubtitle}>
            {trans('subtitle')}
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10`}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${t.card.padding.md} ${t.card.bg.white} ${t.card.base} hover:shadow-lg transition-all`}
            >
              <div className={`absolute -top-3 -left-3 ${t.iconBox.md} ${t.iconBox.gradient} shadow-md flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>
              <h4 className={`${t.typography.cardTitle} ${t.colors.text.primary} mt-4 mb-2`}>
                {trans(`items.step${index + 1}.title`)}
              </h4>
              <p className={t.typography.body}>{trans(`items.step${index + 1}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}