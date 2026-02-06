"use client";

import { motion } from "motion/react";
import { values } from "./about.data";

export function AboutValues() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl border border-slate-100 hover:border-blue-500/30 transition-all duration-500 bg-linear-to-b from-white to-slate-50/50 group"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-xl shadow-blue-200">
                <v.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{v.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}