"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contentTheme } from "@/config/content-theme";
import { useTranslations } from "next-intl";

export function ContactFaq() {
  const theme = contentTheme;
  const t = useTranslations('ContactPage.faq');
  
  // JSON'daki 8 soruyu döngüye sokmak için bir dizi oluşturuyoruz
  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'];

  return (
    <div className="w-full max-w-3xl mx-auto px-2 md:px-0">
      <div className={`text-center ${theme.section.header.margin}`}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${theme.typography.sectionTitle} text-2xl md:text-4xl ${theme.colors.text.primary} mb-4`}
        >
          {t('title')}
        </motion.h2>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqKeys.map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <AccordionItem value={key} className={theme.accordion.item}>
              <AccordionTrigger className={`hover:no-underline cursor-pointer ${theme.accordion.trigger} text-left`}>
                <span className={`${theme.accordion.title} text-sm md:text-base ${theme.colors.text.primary}`}>
                  {t(`questions.${key}.q`)}
                </span>
              </AccordionTrigger>
              <AccordionContent className={`${theme.accordion.content} text-xs md:text-sm`}>
                {t(`questions.${key}.a`)}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
}