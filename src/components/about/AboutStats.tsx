"use client";

import { motion } from "motion/react";
import { stats } from "./about.data";

export function AboutStats() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center bg-slate-50 p-8 rounded-2xl"
          >
            <div className="text-4xl md:text-5xl font-bold mb-2">
              {stat.number}
            </div>
            <div className="text-slate-600 text-sm">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
