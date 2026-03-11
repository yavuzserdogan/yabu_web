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
    <section className={`${t.section.paddingLarge} ${t.section.bg.slate}`}>
      <div className="w-full max-w-3xl mx-auto px-2 md:px-0">

        {/* Başlık */}
        <div className={`text-center ${t.section.header.margin}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mt-3 mb-4`}>
              {trans("title")}
            </h2>
            <p className={t.typography.sectionSubtitle}>
              {trans("subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <AccordionItem value={key} className={t.accordion.item}>
                <AccordionTrigger className={`hover:no-underline cursor-pointer ${t.accordion.trigger} text-left`}>
                  <span className={`${t.accordion.title} text-sm md:text-base ${t.colors.text.primary}`}>
                    {trans(`items.${key}.question`)}
                  </span>
                </AccordionTrigger>
                <AccordionContent className={`${t.accordion.content} text-xs md:text-sm`}>
                  {trans(`items.${key}.answer`)}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

      </div>
    </section>
  );
}