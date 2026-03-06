"use client";

import { motion } from "motion/react";
import { contentTheme } from "@/config/content-theme";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const t = contentTheme;

const faqKeys = ["delivery", "pricing", "revisions", "maintenance", "migration", "mobile"];

type Props = {
  slug: string;
};

export function ServiceFAQ({ slug }: Props) {
  const trans = useTranslations(`ServicesPage.${slug}.faq`);

  return (
    <section className={`${t.section.paddingLarge} ${t.section.bg.white}`}>
      <div className={`${t.section.container} max-w-3xl`}>

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

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqKeys.map((key) => (
              <AccordionItem key={key} value={key} className={t.accordion.item}>
                <AccordionTrigger className={t.accordion.trigger}>
                  <span className={t.accordion.title}>
                    {trans(`items.${key}.question`)}
                  </span>
                </AccordionTrigger>
                <AccordionContent className={t.accordion.content}>
                  {trans(`items.${key}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

      </div>
    </section>
  );
}