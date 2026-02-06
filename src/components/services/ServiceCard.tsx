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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-12 lg:gap-24 items-center`}
    >
      {/* 1. Metin İçeriği */}
      <div className="flex-1 w-full">
        <div className="w-14 h-14 mb-8 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-200">
          <Icon className="text-white" size={28} />
        </div>

        <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
          {service.title}
        </h3>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          {service.description}
        </p>

        {/* Özellikler ve Uygunluk Listesi */}
        <div className="space-y-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((f: string, i: number) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                  <Check className="text-blue-600" size={14} strokeWidth={3} />
                </div>
                {f}
              </li>
            ))}
          </ul>

          {/* Kimler İçin Uygun (Artık Liste Formatında) */}
          <div className="pt-6 border-t border-slate-100">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Target size={16} /> Kimler İçin Uygun?
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.suitable.map((s: string, i: number) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-xl bg-slate-50 text-slate-600 text-sm font-semibold border border-slate-100 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Görsel Alanı (Sağ Taraf) */}
      <div className="flex-1 w-full relative group">
        <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
          <Image
            src={service.image || `https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426`}
            alt={service.title}
            fill
            className="object-cover"
          />
          {/* Üzerine hafif bir overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent" />
        </div>
        
        {/* Dekoratif Arka Plan Elemanı */}
        <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-slate-100 rounded-3xl" />
      </div>
    </motion.div>
  );
}