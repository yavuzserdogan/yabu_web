"use client";


import { ServiceDetail } from "@/types/service";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
      } gap-12 items-center`}
    >
      {/* Text */}
      <div className="flex-1">
        <div className="w-14 h-14 mb-6 rounded-xl bg-linear-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
          <Icon className="text-white" size={26} />
        </div>

        <h3 className="text-3xl font-bold text-slate-800 mb-4">
          {service.title}
        </h3>
        <p className="text-slate-600 mb-6 leading-relaxed">
          {service.description}
        </p>

        <ul className="space-y-3">
          {service.features.map((f: string, i: number) => (
            <li key={i} className="flex items-center gap-3 text-slate-700">
              <Check className="text-blue-600" size={18} />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Box */}
      <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        <h4 className="font-semibold text-slate-800 mb-4">
          Kimler İçin Uygun?
        </h4>

        <div className="grid sm:grid-cols-2 gap-4">
          {service.suitable.map((s: string, i: number) => (
            <div
              key={i}
              className="p-3 rounded-lg bg-slate-50 text-sm text-slate-700"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
