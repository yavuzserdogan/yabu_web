"use client";

import { motion } from "framer-motion"; // motion/react kullanıyorsan import kalsın
import { contentTheme } from "@/config/content-theme";
import { useTranslations } from "next-intl";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const t = contentTheme;

type Props = {
  slug: string;
};

export function ServiceCTA({ slug }: Props) {
  const trans = useTranslations(`ServicesPage.${slug}.cta`);

  return (
    <section className="py-24 px-4 bg-slate-900">
      <div className={t.section.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 p-12 md:p-20 text-center"
        >
          {/* Dekoratif Arka Plan Işıkları */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest mb-6">
              {trans("label")}
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-5">
              {trans("title")}
            </h2>

            <p className="text-blue-100 text-lg max-w-xl mx-auto leading-relaxed mb-10">
              {trans("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 group"
              >
                {trans("primaryButton")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Hatalı kısım burasıydı: <a etiketi eksikti, tamamlandı */}
              <a
                href="https://wa.me/905376212817?text=Merhaba%2C%20Sybor%20Digital%20hizmetleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 border border-white/20 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                {trans("secondaryButton")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}