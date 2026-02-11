"use client";

import { motion } from "framer-motion";
import { contentTheme } from "@/config/content-theme";
import { services } from "./home.data";
import {
  Code2,
  Smartphone,
  Palette,
  TrendingUp,
} from "lucide-react";

const ICONS = {
  code: Code2,
  mobile: Smartphone,
  design: Palette,
  growth: TrendingUp,
};

export function HomeServices() {
  const t = contentTheme;

  return (
    <section className={`${t.section.padding} ${t.section.bg.white}`}>
      <div className={t.section.container}>
        <div className={`text-center ${t.section.header.margin}`}>
          <h2
            className={`${t.typography.sectionTitle} ${t.colors.text.primary} mb-4`}
          >
            Web & Mobil Çözümler
          </h2>
          <p className={t.typography.sectionSubtitle}>
            Modern teknolojiler ve yaratıcı tasarımlarla dijital varlığınızı
            güçlendiriyoruz
          </p>
        </div>

        <div className={t.grid.services}>
          {services.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group ${t.card.padding.lg} ${t.card.bg.gradient} ${t.card.base} ${t.card.hover}`}
              >
                <div
                  className={`${t.iconBox.lg} ${t.iconBox.gradient} mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={26} className="text-white" />
                </div>

                <h3
                  className={`${t.typography.cardTitle} ${t.colors.text.primary} mb-2`}
                >
                  {s.title}
                </h3>

                <p className={t.typography.body}>{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
