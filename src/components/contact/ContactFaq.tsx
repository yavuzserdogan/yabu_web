import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./contact.data";

export function ContactFaq() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Sıkça Sorulan Sorular</h2>
      </div>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-6 bg-white shadow-sm hover:shadow-md transition">
            <AccordionTrigger className="hover:no-underline font-medium text-slate-900">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}