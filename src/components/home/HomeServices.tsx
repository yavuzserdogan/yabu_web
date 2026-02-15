"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { contentTheme } from "@/config/content-theme";
import { services } from "./home.data";
import { Code2, Smartphone, Palette, TrendingUp } from "lucide-react";

const ICONS = { code: Code2, mobile: Smartphone, design: Palette, growth: TrendingUp };

export function HomeServices() {
  const t = contentTheme;
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
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Web & Mobil Çözümler</h2>
          <p className="text-slate-600 text-lg">Modern teknolojiler ve yaratıcı tasarımlarla dijital varlığınızı
            güçlendiriyoruz</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={i}

                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                

                animate={isMobile ? { opacity: 1, y: 0 } : undefined}
                
                whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                
                transition={{ duration: isMobile ? 0 : 0.5 }}

                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}