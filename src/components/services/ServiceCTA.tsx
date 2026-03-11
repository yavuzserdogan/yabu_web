"use client";

import { motion } from "motion/react";
import { contentTheme } from "@/config/content-theme";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const t = contentTheme;

type Props = {
  slug: string;
};

export function ServiceCTA({ slug }: Props) {
  const trans = useTranslations(`ServicesPage.${slug}.cta`);

  return (
    <section className={`${t.section.paddingSmall} ${t.section.bg.slate}`}>
      <div className={t.section.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`${t.card.base} ${t.card.bg.gradient} ${t.card.padding.lg} text-center shadow-xl`}
        >

          <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mt-3 mb-4`}>
            {trans("title")}
          </h2>

          <p className={`${t.typography.sectionSubtitle} mb-10`}>
            {trans("description")}
          </p>

          <Link
            href="/contact#contact-section"
            className={`${t.ctaButton} mx-auto w-fit group`}
          >
            {trans("primaryButton")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}