"use client";

import { motion } from "motion/react";
import { contentTheme } from "@/config/content-theme";
import { useTranslations } from "next-intl";

const t = contentTheme;

const highlights = [
  { icon: "🛡️", key: "support" },
  { icon: "📱", key: "mobile" },
  { icon: "⚡", key: "seo" },
  { icon: "💳", key: "payment" },
];

type Props = {
  slug: string;
};

export function ServiceOverview({ slug }: Props) {
  const trans = useTranslations(`ServicesPage.${slug}.overview`);

  return (
    <section className={`${t.section.paddingLarge} ${t.section.bg.white}`}>
      <div className={t.section.container}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Sol: Metin */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={t.sectionLabel}>{trans("label")}</span>
            <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mt-3 mb-6`}>
              {trans("title")}
            </h2>
            <p className={`${t.typography.bodyLarge} mb-4`}>
              {trans("paragraph1")}
            </p>
            <p className={`${t.typography.bodyLarge} mb-4`}>
              {trans("paragraph2")}
            </p>
            <p className={`${t.typography.bodyLarge}`}>
              {trans("paragraph3")}
            </p>
          </motion.div>

          {/* Sağ: Kart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`${t.card.base} ${t.card.bg.gradient} ${t.card.padding.lg}`}
          >
            <h3 className={`${t.typography.cardTitleLarge} ${t.colors.text.primary} mb-8`}>
              {trans("cardTitle")}
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className={`${t.iconBox.xl} ${t.iconBox.gradient} ${t.iconBox.shadow}`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <span className={`${t.typography.cardTitle} ${t.colors.text.primary}`}>
                    {trans(`highlights.${item.key}`)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}