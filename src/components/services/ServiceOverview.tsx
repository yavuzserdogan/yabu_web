"use client";

import { motion } from "motion/react";
import { contentTheme } from "@/config/content-theme";
import { useTranslations } from "next-intl";
import { Store, Sparkles, TrendingUp, Globe, CheckCircle2 } from "lucide-react";

const t = contentTheme;

const targetAudiences = [
  { icon: Store, key: "physical" },
  { icon: Sparkles, key: "startup" },
  { icon: TrendingUp, key: "growing" },
  { icon: Globe, key: "global" },
];

type Props = {
  slug: string;
};

export function ServiceOverview({ slug }: Props) {
  const trans = useTranslations(`ServicesPage.${slug}.overview`);

  return (
    <>
      {/* ── BÖLÜM 1: Bu Sayfa Sizin İçin Mi? ── */}
      <section className={`pt-20 pb-12 px-4 ${t.section.bg.white}`}>
        <div className={t.section.container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Sol: Metin */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className={t.sectionLabel}>{trans("whatIs.label")}</span>
              <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mt-3 mb-6`}>
                {trans("whatIs.title")}
              </h2>
              <p className={`${t.typography.bodyLarge} mb-4`}>
                {trans("whatIs.paragraph1")}
              </p>
              <p className={`${t.typography.bodyLarge} mb-4`}>
                {trans("whatIs.paragraph2")}
              </p>
              <p className={t.typography.bodyLarge}>
                {trans("whatIs.paragraph3")}
              </p>
            </motion.div>

            {/* Sağ: Hedef kitle kartları */}
            <div className="grid grid-cols-2 gap-4">
              {targetAudiences.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`${t.card.base} ${t.card.bg.gradient} ${t.card.padding.md} ${t.card.hover} group`}
                  >
                    <div className={`${t.iconBox.md} ${t.iconBox.gradient} ${t.iconBox.shadow} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white w-5 h-5" />
                    </div>
                    <h4 className={`${t.typography.cardTitle} ${t.colors.text.primary} mb-1`}>
                      {trans(`whatIs.audiences.${item.key}.title`)}
                    </h4>
                    <p className={t.typography.body}>
                      {trans(`whatIs.audiences.${item.key}.description`)}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── BÖLÜM 2: Neler Yapıyoruz? ── */}
      <section className={`py-12 px-4 ${t.section.bg.slate}`}>
        <div className={t.section.container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Sol: Kart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`${t.card.base} ${t.card.bg.white} ${t.card.padding.lg} shadow-xl`}
            >
              <span className={`${t.badge.base} ${t.badge.primary} mb-4 inline-block`}>
                {trans("whatWeDo.badge")}
              </span>
              <h3 className={`${t.typography.cardTitleXLarge} ${t.colors.text.primary} mb-4`}>
                {trans("whatWeDo.cardTitle")}
              </h3>
              <p className={`${t.typography.bodyLarge} mb-6`}>
                {trans("whatWeDo.cardDescription")}
              </p>
              <div className="space-y-3">
                {["item1", "item2", "item3", "item4"].map((key) => (
                  <div key={key} className={t.checklist.item}>
                    <div className={t.checklist.icon}>
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      {trans(`whatWeDo.checklist.${key}`)}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sağ: Metin */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className={t.sectionLabel}>{trans("whatWeDo.label")}</span>
              <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mt-3 mb-6`}>
                {trans("whatWeDo.title")}
              </h2>
              <p className={`${t.typography.bodyLarge} mb-4`}>
                {trans("whatWeDo.paragraph1")}
              </p>
              <p className={`${t.typography.bodyLarge} mb-4`}>
                {trans("whatWeDo.paragraph2")}
              </p>
              <p className={t.typography.bodyLarge}>
                {trans("whatWeDo.paragraph3")}
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}