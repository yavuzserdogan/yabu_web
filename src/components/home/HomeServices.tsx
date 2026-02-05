"use client";

import { motion } from "framer-motion";
import { services } from "./home.data";

export function HomeServices() {
  return (
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              Web & Mobil Çözümler
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Modern teknolojiler ve yaratıcı tasarımlarla dijital varlığınızı güçlendiriyoruz
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-linear-to-br from-white to-slate-50 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <s.icon size={26} className="text-white" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2 text-lg">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}
