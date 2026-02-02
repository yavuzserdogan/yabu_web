"use client";

import { motion } from "framer-motion";
import { services } from "./home.data";

export function HomeServices() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl border"
          >
            <s.icon className="mb-4" />
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-slate-600">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
