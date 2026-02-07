
"use client";

import { motion } from "framer-motion";
import { steps } from "./home.data";

export function HomeSteps() {
  return (
      <section className="py-20 px-4 bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              Nasıl Çalışıyoruz?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Baştan sona şeffaf ve etkili bir süreçle projelerinizi hayata geçiriyoruz
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-linear-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <h4 className="font-semibold text-slate-800 mt-4 mb-2 text-lg">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}
