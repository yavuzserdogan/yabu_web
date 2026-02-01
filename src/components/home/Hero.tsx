"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowRight,
} from "lucide-react";
import { projects, services, steps } from "./home.data";

export function Hero() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              Butik Dijital Ajans
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dijital Dünyada <br />
              <span className="text-blue-600">
                Markanızı Büyütün
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-8">
              Yazılım, tasarım ve dijital pazarlama çözümleri tek
              çatı altında.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/contact")}
                className="px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-blue-600 transition flex items-center gap-2"
              >
                Ücretsiz Teklif Al
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => router.push("/portfolio")}
                className="px-8 py-4 border-2 border-slate-200 rounded-lg hover:border-slate-900 transition"
              >
                Projelerimizi Gör
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-2xl border hover:shadow-lg transition"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                <s.icon size={26} />
              </div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-slate-600 text-sm">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-6 bg-white rounded-xl border"
            >
              <span className="text-blue-600 font-bold text-lg">
                {step.number}
              </span>
              <h4 className="font-semibold mt-2 mb-1">
                {step.title}
              </h4>
              <p className="text-sm text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border hover:shadow-lg transition"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-4">
                <span className="text-xs text-blue-600">
                  {p.category}
                </span>
                <h3 className="font-semibold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Projenizi Birlikte Başlatalım
        </h2>
        <button
          onClick={() => router.push("/contact")}
          className="px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          İletişime Geç
        </button>
      </section>
    </div>
  );
}