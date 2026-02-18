"use client";

import { motion } from "framer-motion";
import { contentTheme } from "@/config/content-theme";
import { services } from "./home.data";
import { Code2, Smartphone, Palette, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

const ICONS = { code: Code2, mobile: Smartphone, design: Palette, growth: TrendingUp };

export function HomeServices() {
  const t = contentTheme;
  const trans = useTranslations('HomePage.services');

  return (
    <section className={`${t.section.padding} bg-white px-4 md:px-0`}>
      <div className={t.section.container}>
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">{trans('title')}</h2>
          <p className="text-slate-600 text-lg">{trans('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{trans(`items.${s.icon}.title`)}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{trans(`items.${s.icon}.description`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}