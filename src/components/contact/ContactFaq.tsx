import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contentTheme } from "@/config/content-theme";
import { faqs } from "./contact.data";

export function ContactFaq() {
  const t = contentTheme;
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className={`text-center ${t.section.header.margin}`}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${t.typography.sectionTitle} md:text-4xl ${t.colors.text.primary} mb-4`}
        >
          Aklınızda Soru İşareti Kalmasın
        </motion.h2>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <AccordionItem value={`item-${i}`} className={t.accordion.item}>
              <AccordionTrigger className={`hover:no-underline ${t.accordion.trigger}`}>
                <span className={`${t.accordion.title} ${t.colors.text.primary}`}>
                  {faq.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className={t.accordion.content}>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
}