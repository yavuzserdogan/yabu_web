"use client";

import { motion } from "motion/react";
import { contentTheme } from "@/config/content-theme";
import { useTranslations } from "next-intl";
import { Star, Quote } from "lucide-react";

const t = contentTheme;

const testimonials = [
  { key: "testimonial1", rating: 5, avatar: "AK" },
  { key: "testimonial2", rating: 5, avatar: "MY" },
  { key: "testimonial3", rating: 5, avatar: "SB" },
];

type Props = {
  slug: string;
};

export function ServiceTestimonials({ slug }: Props) {
  const trans = useTranslations(`ServicesPage.${slug}.testimonials`);

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

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`${t.card.base} ${t.card.bg.white} ${t.card.padding.lg} ${t.card.hover} flex flex-col gap-5`}
            >
              {/* Quote icon */}
              <Quote className={`w-8 h-8 ${t.colors.icon.primary} opacity-20`} />

              {/* Yorum */}
              <p className={`${t.typography.bodyLarge} flex-1 italic`}>
                &quot;{trans(`items.${item.key}.comment`)}&quot;
              </p>

              {/* Yıldızlar */}
              <div className="flex gap-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Kişi */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-11 h-11 rounded-full ${t.iconBox.gradient} flex items-center justify-center shrink-0`}>
                  <span className="text-white font-bold text-sm">{item.avatar}</span>
                </div>
                <div>
                  <p className={`font-semibold text-sm ${t.colors.text.primary}`}>
                    {trans(`items.${item.key}.name`)}
                  </p>
                  <p className={t.typography.label}>
                    {trans(`items.${item.key}.role`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}