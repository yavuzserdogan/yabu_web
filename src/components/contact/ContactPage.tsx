"use client";

import { ContactHero } from "./ContactHero";
import { ContactForm } from "./ContactForm";
import { ContactFaq } from "./ContactFaq";

export function ContactPage() {
  return (
    <main className="relative w-full bg-white">
      {/* Premium Hero Bölümü */}
      <ContactHero />

      {/* Sert Geçişle Başlayan Form Alanı */}
      <section className="relative py-24 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* FAQ Bölümü */}
      <section className="relative py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <ContactFaq />
        </div>
      </section>
    </main>
  );
}