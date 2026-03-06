"use client";

import { motion } from "motion/react";
import { contentTheme } from "@/config/content-theme";
import { useTranslations } from "next-intl";
import { Search, Paintbrush, Code2, Rocket } from "lucide-react";

const t = contentTheme;

const steps = [
  { key: "discovery", icon: Search, step: 1, color: "from-blue-500 to-blue-600" },
  { key: "design", icon: Paintbrush, step: 2, color: "from-indigo-500 to-indigo-600" },
  { key: "development", icon: Code2, step: 3, color: "from-violet-500 to-violet-600" },
  { key: "launch", icon: Rocket, step: 4, color: "from-purple-500 to-purple-600" },
];

type Props = {
  slug: string;
};

export function ServiceProcess({ slug }: Props) {
  const trans = useTranslations(`ServicesPage.${slug}.process`);

  return (
    <section className={`${t.section.paddingLarge} ${t.section.bg.gradient}`}>
      <div className={t.section.container}>

        {/* Başlık */}
        <div className={`text-center ${t.section.header.margin}`}>
          <span className={t.sectionLabel}>{trans("label")}</span>
          <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mt-3 mb-4`}>
            {trans("title")}
          </h2>
          <p className={t.typography.sectionSubtitle}>
            {trans("subtitle")}
          </p>
        </div>

        {/* Steps — dikey zincir layout */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            const isEven = index % 2 === 0;

            return (
              <div key={step.key} className="relative">

                {/* Dikey bağlantı çizgisi */}
                {!isLast && (
                  <div className="absolute left-8 top-20 w-0.5 h-12 bg-linear-to-b from-slate-200 to-slate-100 z-0" />
                )}

                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className={`relative flex gap-6 mb-12 group ${isEven ? "" : "flex-row-reverse text-right"}`}
                >
                  {/* Sol/Sağ: İkon + Numara */}
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <div className={`relative w-16 h-16 rounded-2xl bg-linear-to-br ${step.color} shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white w-7 h-7" />
                      {/* Numara badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white font-black text-xs">{step.step}</span>
                      </div>
                    </div>
                  </div>

                  {/* İçerik kartı */}
                  <div className={`flex-1 ${t.card.base} ${t.card.bg.white} ${t.card.padding.lg} ${t.card.hover} overflow-hidden relative`}>
                    {/* Accent köşe şeridi */}
                    <div className={`absolute top-0 ${isEven ? "left-0" : "right-0"} w-1 h-full bg-linear-to-b ${step.color} rounded-full`} />

                    <div className={isEven ? "pl-2" : "pr-2"}>
                      {/* Adım etiketi */}
                      <span className={`${t.typography.label} ${t.colors.accent.primary} mb-2 block`}>
                        {trans("stepLabel")} {step.step}
                      </span>

                      <h4 className={`${t.typography.cardTitleLarge} ${t.colors.text.primary} mb-3`}>
                        {trans(`steps.${step.key}.title`)}
                      </h4>
                      <p className={t.typography.bodyLarge}>
                        {trans(`steps.${step.key}.description`)}
                      </p>

                      {/* Alt detay satırı */}
                      <div className={`mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 ${isEven ? "" : "justify-end"}`}>
                        <div className={`w-2 h-2 rounded-full bg-linear-to-br ${step.color}`} />
                        <span className={t.typography.label}>
                          {trans(`steps.${step.key}.tag`)}
                        </span>
                      </div>
                    </div>
                  </div>

                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}