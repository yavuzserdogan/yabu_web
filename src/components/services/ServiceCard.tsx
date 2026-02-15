"use client";

import { ServiceDetail } from "@/types/service";
import { motion } from "framer-motion";
import {
  Check,
  Target,
  Code2,
  Smartphone,
  Palette,
  TrendingUp,
} from "lucide-react";

import Image from "next/image";
import { contentTheme } from "@/config/content-theme";

interface ServiceCardProps {
  service: ServiceDetail;
  reverse?: boolean;
  index: number;
}

const ICONS = {
  code: Code2,
  mobile: Smartphone,
  design: Palette,
  growth: TrendingUp,
};

export function ServiceCard({ service, reverse = false, index }: ServiceCardProps) {
  const t = contentTheme;
  const Icon = ICONS[service.icon as keyof typeof ICONS];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-10 lg:gap-24 items-center relative`}
    >
      <div className="flex-1 w-full z-10 text-left">
        <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">
          <motion.div
            className={`shrink-0 ${t.iconBox.md} md:${t.iconBox.lg} ${t.iconBox.gradient}`}
          >
            <Icon className="text-white" size={24} />
          </motion.div>
          <h3 className={`${t.typography.sectionTitle} text-2xl md:text-4xl leading-tight ${t.colors.text.primary}`}>
            {service.title}
          </h3>
        </div>

        <p className={`${t.typography.bodyLarge} text-base md:text-lg max-w-xl mb-8 text-slate-600`}>
          {service.description}
        </p>

        <div className="space-y-8">
          {/* Mobilde tekli, sm sonrası ikili liste */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-6">
            {service.features.map((f: string, i: number) => (
              <motion.li
                key={i}
                whileHover={{ x: 5 }}
                className={`${t.checklist.item} group text-sm md:text-base`}
              >
                <div className={`shrink-0 ${t.checklist.icon}`}>
                  <Check className={`${t.checklist.iconSvg}`} size={12} strokeWidth={3} />
                </div>
                {f}
              </motion.li>
            ))}
          </ul>

          <div className="pt-6 md:pt-8 border-t border-slate-100">
            <h4 className={`${t.typography.label} mb-4 flex items-center gap-2 text-xs md:text-sm`}>
              <Target size={14} className={t.colors.icon.primary} /> Kimler İçin Uygun?
            </h4>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {service.suitable.map((s: string, i: number) => (
                <span key={i} className={`${t.badge.tag} text-[10px] md:text-xs px-3 py-1`}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Görsel Alanı */}
      <motion.div
        className="flex-1 w-full relative mt-8 lg:mt-0"
        // Mobilde animasyonu biraz daha hafiflettik (y: -8)
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Dekoratif Dot Grid - Mobilde küçültüldü */}
        <div className="absolute -top-5 -right-5 md:-top-10 md:-right-10 w-24 h-24 md:w-32 md:h-32 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[16px_16px] -z-10 opacity-60" />

        <div className="relative aspect-4/3 sm:aspect-video w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 group">
          <Image
            src={service.image || `https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426`}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent opacity-60" />
        </div>
        
        <div className="absolute -inset-5 md:-inset-10 bg-linear-to-tr from-blue-400/10 to-purple-400/10 blur-[60px] md:blur-[80px] -z-20 rounded-full opacity-50 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      </motion.div>
    </motion.div>
  );
}