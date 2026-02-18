"use client";

import { useState, useEffect } from "react"; 
import { motion } from "framer-motion";
import { contentTheme } from "@/config/content-theme";
import { steps } from "./home.data";
import { useTranslations } from "next-intl";

export function HomeSteps() {
  const t = contentTheme;
  const trans = useTranslations('HomePage.steps');
  
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
    <section className={`${t.section.padding} ${t.section.bg.gradient} px-4 md:px-0`}>
      <div className={t.section.container}>
        <div className={`text-center ${t.section.header.margin}`}>
          <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mb-4`}>
            {trans('title')}
          </h2>
          <p className={t.typography.sectionSubtitle}>
            {trans('subtitle')}
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10`}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={isMobile ? { opacity: 1, y: 0 } : undefined}
              whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: isMobile ? 0 : index * 0.1,
                duration: isMobile ? 0 : 0.5 
              }}
              className={`relative ${t.card.padding.md} ${t.card.bg.white} ${t.card.base} hover:shadow-lg transition-all`}
            >
              <div className={`absolute -top-3 -left-3 ${t.iconBox.md} ${t.iconBox.gradient} shadow-md flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>
              <h4 className={`${t.typography.cardTitle} ${t.colors.text.primary} mt-4 mb-2`}>
                {trans(`items.step${index + 1}.title`)}
              </h4>
              <p className={t.typography.body}>{trans(`items.step${index + 1}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}