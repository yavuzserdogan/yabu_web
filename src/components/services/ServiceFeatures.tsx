"use client";

import { motion } from "motion/react";
import { contentTheme } from "@/config/content-theme";
import { useTranslations } from "next-intl";
import { Code2, CreditCard, Smartphone, Package, Gauge, BarChart3 } from "lucide-react";

const t = contentTheme;

const features = [
  { key: "custom", icon: Code2 },
  { key: "payment", icon: CreditCard },
  { key: "mobile", icon: Smartphone },
  { key: "stock", icon: Package },
  { key: "seo", icon: Gauge },
  { key: "admin", icon: BarChart3 },
];

type Props = {
  slug: string;
};

export function ServiceFeatures({ slug }: Props) {
  const trans = useTranslations(`ServicesPage.${slug}.features`);

  return (
    <section className={`${t.section.paddingLarge} ${t.section.bg.slate}`}>
      <div className={t.section.container}>

        {/* Başlık */}
        <div className={`text-center ${t.section.header.marginLarge}`}>
          <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mb-4`}>
            {trans("title")}
          </h2>
          <p className={t.typography.sectionSubtitle}>
            {trans("subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${t.card.base} ${t.card.bg.white} ${t.card.padding.lg} ${t.card.hover} group`}
              >
                {/* Icon kutusu */}
                <div className={`${t.iconBox.xl} ${t.iconBox.gradient} ${t.iconBox.shadow} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white w-6 h-6" />
                </div>

                <h4 className={`${t.typography.cardTitleLarge} ${t.colors.text.primary} mb-3`}>
                  {trans(`items.${feature.key}.title`)}
                </h4>
                <p className={t.typography.bodyLarge}>
                  {trans(`items.${feature.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}