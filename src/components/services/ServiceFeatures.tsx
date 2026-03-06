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
          <span className={t.sectionLabel}>{trans("label")}</span>
          <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mt-3 mb-4`}>
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
                className={`relative ${t.card.base} ${t.card.bg.white} ${t.card.padding.lg} ${t.card.hover} group overflow-hidden`}
              >
                {/* Arka plan accent — hover'da belirir */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/60 group-hover:to-indigo-50/40 transition-all duration-500 rounded-2xl" />

                {/* Üst accent çizgisi */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />

                <div className="relative z-10">
                  {/* Numara + Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`${t.iconBox.xl} ${t.iconBox.gradient} ${t.iconBox.shadow} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white w-6 h-6" />
                    </div>
                    <span className="text-4xl font-black text-slate-100 group-hover:text-blue-100 transition-colors duration-300 select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className={`${t.typography.cardTitleLarge} ${t.colors.text.primary} mb-3 group-hover:text-blue-700 transition-colors duration-300`}>
                    {trans(`items.${feature.key}.title`)}
                  </h4>
                  <p className={t.typography.bodyLarge}>
                    {trans(`items.${feature.key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}