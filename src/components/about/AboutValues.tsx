"use client";

import { motion } from "motion/react";
import { values } from "./about.data";

export function AboutValues() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 px-4">
        {values.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl border text-center"
          >
            <v.icon className="mx-auto mb-4 text-blue-600" size={28} />
            <h3 className="font-semibold mb-2">{v.title}</h3>
            <p className="text-sm text-slate-600">{v.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
