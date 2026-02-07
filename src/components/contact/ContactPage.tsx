"use client";

import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { ContactFaq } from "./ContactFaq";
import { HeroBackground } from "../ui/HeroBackground";

export function ContactPage() {
  return (
    <main className="relative w-full overflow-hidden">

      {/* ================= HERO ONLY ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden w-full">
        <HeroBackground />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-extrabold text-slate-900 tracking-tighter"
          >
            Hadi{" "}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Konuşalım
            </span>
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

        {/* alt fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-slate-50 to-transparent pointer-events-none" />
      </section>


      {/* ================= FAQ ================= */}
      <section className="relative py-24 bg-slate-50 w-full">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <ContactFaq />
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="relative py-24 bg-slate-50 w-full border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </section>

    </main >
  );
}
