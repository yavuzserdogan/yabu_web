"use client";

import { motion } from "framer-motion";
import { steps } from "./home.data";

export function HomeSteps() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-white rounded-xl border"
          >
            <span className="font-bold text-blue-600">{step.number}</span>
            <h4 className="font-semibold mt-2">{step.title}</h4>
            <p className="text-sm text-slate-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
