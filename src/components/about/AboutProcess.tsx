"use client";

import { motion } from "motion/react";
import { process } from "./about.data";

export function AboutProcess() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Sürecimiz Nasıl İşler?
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto">
            Fikirden yayına kadar her adımı planlı, ölçülebilir ve şeffaf bir yaklaşımla yönetiyoruz.
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {process.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold mb-6 shadow-lg shadow-blue-200">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}