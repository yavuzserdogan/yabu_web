"use client";

import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { ContactFaq } from "./ContactFaq";

export function ContactPage() {
  return (
    <div className="pt-32 space-y-24">
      <section className="text-center">
        <h1 className="text-5xl font-bold">İletişime Geçin</h1>
        <p className="text-slate-600 mt-4">
          Projeniz için en uygun çözümü birlikte bulalım.
        </p>
      </section>

      <section className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto px-4">
        <div className="lg:col-span-2">
          <ContactInfo />
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4">
        <ContactFaq />
      </section>
    </div>
  );
}
