"use client";

import { useState, type ElementType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceCategories } from "./home.data";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Monitor, ShoppingCart, LayoutTemplate, Newspaper,
  Smartphone, Cloud, Rocket, Webhook,
  Users, Database, Briefcase, CalendarClock,
  Palette, BrainCircuit, Search, Megaphone,
  Wrench, Ticket, GraduationCap, QrCode,
  ArrowUpRight, CheckCircle2
} from "lucide-react";

const ICONS: Record<string, ElementType> = {
  monitor: Monitor, shoppingCart: ShoppingCart, layout: LayoutTemplate,
  newspaper: Newspaper, smartphone: Smartphone, cloud: Cloud,
  rocket: Rocket, webhook: Webhook, users: Users, database: Database,
  briefcase: Briefcase, calendar: CalendarClock, palette: Palette,
  brain: BrainCircuit, search: Search, megaphone: Megaphone,
  wrench: Wrench, ticket: Ticket, graduationCap: GraduationCap, qrCode: QrCode,
};

const ACCENTS: Record<string, { grad: string; light: string; text: string; pill: string; ring: string }> = {
  web: { grad: "from-blue-600 to-indigo-700", light: "bg-blue-50", text: "text-blue-600", pill: "bg-blue-600", ring: "ring-blue-200" },
  mobile: { grad: "from-violet-600 to-purple-700", light: "bg-violet-50", text: "text-violet-600", pill: "bg-violet-600", ring: "ring-violet-200" },
  management: { grad: "from-indigo-600 to-sky-700", light: "bg-indigo-50", text: "text-indigo-600", pill: "bg-indigo-600", ring: "ring-indigo-200" },
  growth: { grad: "from-orange-500 to-amber-500", light: "bg-orange-50", text: "text-orange-600", pill: "bg-orange-500", ring: "ring-orange-200" },
  support: { grad: "from-emerald-500 to-teal-600", light: "bg-emerald-50", text: "text-emerald-600", pill: "bg-emerald-600", ring: "ring-emerald-200" },
};
const DA = ACCENTS.web;

const ITEM_IMAGES: Record<string, string> = {
  // --- Web & E-Ticaret ---
  corporate: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85", 
  ecommerce: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=85",   
  boutique: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=85",  
  portfolio: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=85", // YENİ: Temiz çalışma masası / Tasarımcı
  landing: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",   
  blog: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=85",      

  // --- Mobil Uygulamalar ---
  app: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1200&q=85",       
  qr: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=85",        
  booking: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=1200&q=85",   

  // --- Sosyal Medya & Tasarım (growth) ---
  social_media: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=1200&q=85", // YENİ: Etkileşim ve Sosyal Medya Konsepti
  uiux: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=85",         
  branding: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=85",  
  ads: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=1200&q=85",       

  // --- Altyapı & Destek (management) ---
  seo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85",         // YENİ: Veri Analizi ve SEO Dashboard
  maintenance: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=85", 
  security: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=85",      
  corporate_mail: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&q=85",
};
const FALLBACK_IMG = "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=85"; // Genel yedek görsel

/* ================================================================== */

export function HomeServices() {
  const t = useTranslations("HomePage.services");

  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
  const [activeItem, setActiveItem] = useState(serviceCategories[0].items[0].id);

  const catData = serviceCategories.find(c => c.id === activeCategory)!;
  const itemData = catData.items.find(i => i.id === activeItem) ?? catData.items[0];
  const accent = ACCENTS[activeCategory] ?? DA;
  const Icon = ICONS[itemData.icon] ?? Monitor;
  const bgImage = ITEM_IMAGES[activeItem] ?? FALLBACK_IMG;

  const handleCategoryChange = (catId: string) => {
    const cat = serviceCategories.find(c => c.id === catId)!;
    setActiveCategory(catId);
    setActiveItem(cat.items[0].id);
  };

  const benefits =
    (t.raw(`categories.${activeCategory}.items.${activeItem}.benefits`) as string[] | undefined) ??
    [];

  return (
    <section className="py-24 bg-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* BAŞLIK */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* KATEGORİ PİLL'LERİ */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {serviceCategories.map(cat => {
            const isActive = activeCategory === cat.id;
            const a = ACCENTS[cat.id] ?? DA;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap
                  ${isActive
                    ? `${a.pill} text-white shadow-md scale-105`
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700"
                  }`}
              >
                {t(`categories.${cat.id}.title`)}
              </button>
            );
          })}
        </div>

        {/* ANA PANEL */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col lg:flex-row rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/60"
            style={{ minHeight: 540 }}
          >

            {/* ──────────── SOL: Alt başlık menüsü ──────────── */}
            <div className="lg:w-72 shrink-0 flex flex-col bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200">
              {/* Kategori bandı */}
              <div className={`px-6 py-5 bg-gradient-to-r ${accent.grad} border-b border-white/10`}>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {t("sidebarTitle")}
                </h3>
              </div>

              {/* Madde listesi */}
              <div className="flex flex-col py-2 flex-1">
                {catData.items.map(item => {
                  const isActive = activeItem === item.id;
                  const ItemIcon = ICONS[item.icon] ?? Monitor;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveItem(item.id)}
                      className={`group relative flex items-center gap-3 px-5 py-3.5 text-left transition-all duration-150
                        ${isActive
                          ? `${accent.light} ${accent.text} font-semibold`
                          : "text-slate-500 hover:bg-white hover:text-slate-800"
                        }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="sidebar-bar"
                          className={`absolute left-0 top-2 bottom-2 w-[3px] rounded-r-full bg-gradient-to-b ${accent.grad}`}
                        />
                      )}
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-150
                        ${isActive ? `${accent.light} ring-1 ${accent.ring}` : "bg-slate-100 group-hover:bg-white"}`}>
                        <ItemIcon size={14} className={isActive ? accent.text : "text-slate-400"} />
                      </span>
                      <span className="text-[13.5px] leading-snug">
                        {t(`categories.${activeCategory}.items.${item.id}.title`)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ──────────── SAĞ: İki sütun — İçerik + Görsel ──────────── */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">

              {/* İçerik alanı — koyu zemin, yazı net okunur */}
              <div className="md:w-[55%] shrink-0 bg-slate-700 flex flex-col justify-between p-8 md:p-10 relative overflow-hidden">

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem + "-content"}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="relative z-10 flex flex-col gap-6 h-full justify-between"
                  >
                    <div>
                      {/* Highlight */}
                      <p className="text-xl font-bold text-white mb-3 leading-snug">
                        {t(`categories.${activeCategory}.items.${activeItem}.highlight`)}
                      </p>

                      {/* Açıklama */}
                      <p className="text-base leading-relaxed text-white">
                        {t(`categories.${activeCategory}.items.${activeItem}.description`)}
                      </p>

                      {/* Faydalar */}
                      {benefits.length > 0 && (
                        <ul className="mt-6 space-y-2.5">
                          {benefits.map((b: string, i: number) => (
                            <li key={i} className="flex items-start gap-2.5 text-base leading-relaxed text-white">
                              <CheckCircle2 size={20} className={`${accent.text} shrink-0 mt-0.5`} />
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-4 pt-2">
                      <Link href="/contact#contact-section" >
                        <button className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm bg-gradient-to-r ${accent.grad} hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg`}>
                          {t(`categories.${activeCategory}.items.${activeItem}.cta`)}
                          <ArrowUpRight size={15} />
                        </button>
                      </Link>
                      <button className="text-sm font-medium text-white hover:text-slate-200 transition-colors">
                        {t("secondaryCta")} →
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Görsel alanı — tam ve net */}
              <div className="flex-1 relative overflow-hidden" style={{ minHeight: 260 }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={bgImage}
                    src={bgImage}
                    alt=""
                    aria-hidden="true"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                {/* Soldan içerik tarafına degrade geçiş */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
            {/* ───────────────────────────────────────────────── */}

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}