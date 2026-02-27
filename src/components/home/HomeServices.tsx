"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { contentTheme } from "@/config/content-theme";
import { serviceCategories } from "./home.data";
import { useTranslations } from "next-intl";
import {
  Monitor, ShoppingCart, LayoutTemplate, Newspaper,
  Smartphone, Cloud, Rocket, Webhook,
  Users, Database, Briefcase, CalendarClock,
  Palette, BrainCircuit, Search, Megaphone,
  Wrench, Ticket, GraduationCap, QrCode
} from "lucide-react";

const ICONS = {
  monitor: Monitor, shoppingCart: ShoppingCart, layout: LayoutTemplate, newspaper: Newspaper,
  smartphone: Smartphone, cloud: Cloud, rocket: Rocket, webhook: Webhook,
  users: Users, database: Database, briefcase: Briefcase, calendar: CalendarClock,
  palette: Palette, brain: BrainCircuit, search: Search, megaphone: Megaphone,
  wrench: Wrench, ticket: Ticket, graduationCap: GraduationCap, qrCode: QrCode
};

export function HomeServices() {
  const t = contentTheme;
  const trans = useTranslations('HomePage.services');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => { setIsMobile(window.innerWidth < 768); };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className={`${t.section.padding} ${t.section.bg.white} px-4 md:px-0`}>
      <div className={t.section.container}>
        <div className={`text-center ${t.section.header.margin}`}>
          <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mb-4`}>
            {trans('title')}
          </h2>
          <p className={t.typography.sectionSubtitle}>
            {trans('subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {serviceCategories.map((category) => (
            <div key={category.id} className="flex flex-col">

              {/* KATEGORİ BAŞLIĞI: Gradyan kaldırıldı, kurumsal Slate-900 eklendi */}
              <div className="mb-8 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1.5 h-6 bg-blue-600 rounded-full" /> {/* Sol yan dekoratif çubuk */}
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight uppercase">
                    {trans(`categories.${category.id}.title`)}
                  </h3>
                </div>
                {/* Alt Çizgi: Daha belirgin ve profesyonel */}
                <div className="h-0.5 w-full bg-slate-100 relative overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-blue-400/40 to-transparent w-full" />
                </div>
              </div>

              {/* Grid: 4 Kolonlu Yapı */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, itemIndex) => {
                  const Icon = ICONS[item.icon as keyof typeof ICONS];

                  return (
                    <motion.div
                      key={item.id}
                      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                      // KART TASARIMI: Arka plan slate-50, hover anında beyaz ve belirgin mavi border
                      className="group relative p-6 rounded-2xl bg-slate-50 border border-slate-200/60 transition-all duration-300 flex flex-col h-full hover:bg-white hover:border-blue-500 hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.15)]"
                    >
                      {/* İkon Kutusu */}
                      <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-5 shadow-lg shadow-blue-100 group-hover:scale-105 transition-transform shrink-0">
                        <Icon size={22} className="text-white" />
                      </div>

                      {/* Kart İçeriği */}
                      <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {trans(`categories.${category.id}.items.${item.id}.title`)}
                      </h4>
                      <p className="text-slate-500 leading-snug text-[13px] grow font-medium">
                        {trans(`categories.${category.id}.items.${item.id}.description`)}
                      </p>

                      {/* Alt Dinamik Çizgi */}
                      <div className="mt-4 pt-4 border-t border-slate-200/40">
                        <div className="h-1 w-8 bg-slate-200 group-hover:bg-blue-600 group-hover:w-full transition-all duration-500 rounded-full" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}