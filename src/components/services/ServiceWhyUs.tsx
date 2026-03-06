"use client";

import { motion } from "motion/react";
import { contentTheme } from "@/config/content-theme";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";

const t = contentTheme;

const whyUs = [
  { key: "reason1" },
  { key: "reason2" },
  { key: "reason3" },
  { key: "reason4" },
  { key: "reason5" },
  { key: "reason6" },
];

type Props = {
  slug: string;
};

export function ServiceWhyUs({ slug }: Props) {
  const trans = useTranslations(`ServicesPage.${slug}.whyUs`);

  return (
    <section className={`pt-12 pb-20 px-4 ${t.section.bg.gradient}`}>
      <div className={t.section.container}>

        <div className={`text-center ${t.section.header.margin}`}>
          <span className={t.sectionLabel}>{trans("label")}</span>
          <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mt-3 mb-4`}>
            {trans("title")}
          </h2>
          <p className={t.typography.sectionSubtitle}>
            {trans("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${t.card.base} ${t.card.bg.white} ${t.card.padding.lg} ${t.card.hover}`}
            >
              <div className={`${t.iconBox.md} ${t.colors.icon.bgLight} mb-4 rounded-xl flex items-center justify-center`}>
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className={`${t.typography.cardTitleLarge} ${t.colors.text.primary} mb-2`}>
                {trans(`reasons.${item.key}.title`)}
              </h4>
              <p className={t.typography.bodyLarge}>
                {trans(`reasons.${item.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}