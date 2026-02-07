import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./contact.data";

export function ContactFaq() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
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
            <AccordionItem 
              value={`item-${i}`} 
              className="border-none bg-white rounded-2xl px-6 shadow-sm hover:shadow-md transition-all duration-300 [&[data-state=open]]:shadow-lg [&[data-state=open]]:ring-1 [&[data-state=open]]:ring-blue-100"
            >
              <AccordionTrigger className="hover:no-underline py-6 group">
                <span className="text-left font-semibold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">
                  {faq.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
}