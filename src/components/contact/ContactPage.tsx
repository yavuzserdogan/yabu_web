"use client";

import { motion } from "framer-motion";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { ContactFaq } from "./ContactFaq";
import { HeroBackground } from "../ui/HeroBackground";

export function ContactPage() {
  return (
    <main className="relative w-full overflow-hidden">
      {/* 1. HERO & FORM SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden w-full">
        {/* Arka plan sürekliliği */}
        <HeroBackground />

        {/* Başlık Grubu */}
        <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-extrabold text-slate-900 tracking-tighter"
          >
            Hadi <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Konuşalım</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mt-6 font-light"
          >
            Bir fikriniz mi var? Projenizi dijital dünyada büyütmek için profesyonel bir desteğe mi ihtiyacınız var? Sizi dinlemeye hazırız.
          </motion.p>
        </div>

        {/* Form ve Bilgi Kartları Grid */}
        <div className="relative z-10 grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto w-full">
          {/* Sol: İletişim Bilgileri */}
          <div className="lg:col-span-2 space-y-8">
            <div className="sticky top-32"> 
              <h2 className="text-2xl font-bold mb-6 text-slate-800">İletişim Bilgileri</h2>
              <ContactInfo />
            </div>
          </div>

          {/* Sağ: Gelişmiş Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>

        {/* Alt Geçiş Gradyanı */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-slate-50 to-transparent pointer-events-none" />
      </section>

      {/* 2. FAQ SECTION */}
      <section className="relative py-24 bg-slate-50 w-full border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Merak Edilenler</h2>
            <p className="text-slate-500 mt-4 text-lg">Proreçlerimiz hakkında sıkça sorulan sorular.</p>
          </div>
          <ContactFaq />
        </div>
      </section>
    </main>
  );
}