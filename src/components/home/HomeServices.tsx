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
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className={`${t.section.padding} bg-white px-4 md:px-0`}>
      <div className={t.section.container}>
        <div className="text-center mb-16 md:mb-24">
          <h2 className={`${t.typography.sectionTitle} text-slate-900 mb-4`}>
            {trans('title')}
          </h2>
          <p className={t.typography.sectionSubtitle}>
            {trans('subtitle')}
          </p>
        </div>
        <div className="flex flex-col gap-16 md:gap-24">
          {serviceCategories.map((category, catIndex) => (
            <div key={category.id} className="flex flex-col">
              <motion.div
                initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8 border-b border-slate-100 pb-4"
              >
                <h3 className={`${t.typography.cardTitleXLarge} text-slate-900`}>
                  {trans(`categories.${category.id}.title`)}
                </h3>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, itemIndex) => {
                  const Icon = ICONS[item.icon as keyof typeof ICONS];

                  return (
                    <motion.div
                      key={item.id}
                      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      animate={isMobile ? { opacity: 1, y: 0 } : undefined}
                      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: isMobile ? 0 : 0.4, delay: isMobile ? 0 : itemIndex * 0.1 }}
                      className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform shrink-0">
                        <Icon size={26} className="text-white" />
                      </div>
                      <h4 className={`${t.typography.cardTitleLarge} text-slate-900 mb-3`}>
                        {trans(`categories.${category.id}.items.${item.id}.title`)}
                      </h4>
                      <p className={`${t.typography.body} flex-grow`}>
                        {trans(`categories.${category.id}.items.${item.id}.description`)}
                      </p>
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