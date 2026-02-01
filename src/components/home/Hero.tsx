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
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 px-4 overflow-hidden">
        {/* Aydınlık Gradient Arka Plan */}
        <div className="absolute inset-0 -z-10">
          {/* Ana Gradient - Açık Tonlar */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />

          {/* Yumuşak Gradient Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.06),transparent_50%),radial-gradient(circle_at_40%_80%,rgba(14,165,233,0.05),transparent_40%)]" />

          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Soft Glow Effects */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-purple-200/25 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >


            {/* Ana Başlık */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
              <span className="block text-slate-800 mb-2">
                Fikirleri
                Dijital Gerçeğe

              </span>
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Dönüştürüyoruz
                </span>
              </span>
            </h1>

            {/* Alt Açıklama */}
            <p className="max-w-xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mb-12">
              <span className="font-semibold text-blue-600">Yapay zeka destekli</span> yazılım çözümleri,
              <span className="font-semibold text-indigo-600"> modern UI/UX tasarımı</span> ve
              <span className="font-semibold text-purple-600"> stratejik dijital pazarlama</span> ile
              markanızı geleceğe taşıyoruz.
            </p>

            {/* CTA Butonlar */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/contact")}
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Projenizi Başlatalım
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/portfolio")}
                className="group px-10 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all shadow-sm"
              >
                <span className="flex items-center gap-2">
                  Referanslarımız
                  <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </motion.button>
            </div>

            {/* Sosyal Kanıt / Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12"
            >
              {[
                { number: "000+", label: "Başarılı Proje" },
                { number: "0+", label: "Mutlu Müşteri" },
                { number: "1.5+", label: "Yıllık Deneyim" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>


      </section>

      {/* SERVICES SECTION */}
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
                className="group p-8 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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

      {/* HOW IT WORKS SECTION */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
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
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-md">
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

      {/* PROJECTS SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              Öne Çıkan Projeler
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Müşterilerimiz için gerçekleştirdiğimiz başarılı projelere göz atın
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-5">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-2">
                    {p.category}
                  </span>
                  <h3 className="font-semibold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}