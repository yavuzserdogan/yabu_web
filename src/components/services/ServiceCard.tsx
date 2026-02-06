"use client";

import { ServiceDetail } from "@/types/service";
import { motion } from "framer-motion";
import { Check, Target } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  service: ServiceDetail;
  reverse?: boolean;
}

export function ServiceCard({ service, reverse = false }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-12 lg:gap-24 items-center relative`}
    >
      {/* 1. Metin İçeriği */}
      <div className="flex-1 w-full z-10">
        <div className="flex items-center gap-5 mb-8">
          <motion.div
            whileHover={{ scale: 1.08, rotate: 2 }}
            className="w-13 h-13 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-xl shadow-blue-200 shrink-0"
          >
            <Icon className="text-white" size={28} />
          </motion.div>

          <h3 className="text-[2.6rem] leading-tight font-bold text-slate-900 tracking-tight">

            {service.title}
          </h3>
        </div>

        <p className="text-lg text-slate-500 max-w-xl mb-8 leading-relaxed">

          {service.description}
        </p>

        <div className="space-y-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
            {service.features.map((f: string, i: number) => (
              <motion.li
                key={i}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-slate-700 font-medium group"
              >
                <div className="shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Check className="text-blue-600 group-hover:text-white transition-colors duration-300" size={14} strokeWidth={3} />
                </div>
                {f}
              </motion.li>
            ))}
          </ul>

          <div className="pt-8 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <Target size={14} className="text-blue-500" /> Kimler İçin Uygun?
            </h4>
            <div className="flex flex-wrap gap-3">
              {service.suitable.map((s: string, i: number) => (
                <span
                  key={i}
                  className="px-5 py-2.5 rounded-xl bg-white text-slate-600 text-sm font-semibold border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 hover:text-blue-600 transition-all duration-300 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Görsel Alanı (ReactBits Style Effects) */}
      <motion.div
        className="flex-1 w-full relative"
        // Floating Effect: Hafif yukarı aşağı hareket
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Dekoratif Dot Grid Arka Plan */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[16px_16px] -z-10 opacity-60" />

        <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 group">
          {/* Spotlight Glow Overlay */}
          <div className="absolute inset-0 z-10 bg-linear-to-tr from-blue-600/10 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <Image
            src={service.image || `https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426`}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            priority
          />

          {/* Görsel içi soft gölge (Inner Vignette) */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent opacity-60" />
        </div>

        {/* Blurry Background Blob */}
        <div className="absolute -inset-10 bg-linear-to-tr from-blue-400/10 to-purple-400/10 blur-[80px] -z-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      </motion.div>
    </motion.div>
  );
}