"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  { title: "Birebir İletişim", desc: "Doğrudan mühendislerle çalışırsınız. Aracı yok, vakit kaybı yok." },
  { title: "Esnek ve Hızlı", desc: "Çevik metodolojilerle projelerinizi piyasaya en hızlı şekilde süreriz." },
  { title: "Maliyet Etkin", desc: "Butik çalışma modelimizle gereksiz ajans giderlerini faturanıza yansıtmayız." },
  { title: "Kişiye Özel Çözümler", desc: "Hazır şablonlar yerine işinize özel, optimize edilmiş sistemler geliştiririz." },
  { title: "Kesintisiz Destek", desc: "Kodları teslim edip kaybolmayız, bakım ve geliştirme süreçlerinde yanınızdayız." },
];

export function AboutWhyUs() {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8 text-slate-900 tracking-tight">
            Neden teknoloji ortağınız olmalıyız?
          </h2>
          <p className="text-slate-600 mb-12 text-lg font-light leading-relaxed">
            Sadece kod yazmıyoruz; işinizi büyütecek dijital altyapıyı beraber kuruyoruz.
          </p>
          {/* Görsel bir dokunuş: Hafif bir gradyan blob */}
          <div className="hidden lg:block w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
        </div>

        <div className="space-y-4">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 border border-slate-100"
            >
              <CheckCircle2 className="text-blue-600 shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-1 text-slate-900">{r.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}