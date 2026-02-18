"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing"; // Kendi routing linkimizi kullanıyoruz
import { contentTheme } from "@/config/content-theme";
import { projects } from "./home.data";
import { useTranslations } from "next-intl";

export function HomeFeaturedProjects() {
  const t = contentTheme;
  const trans = useTranslations('HomePage.projects');
  
  return (
    <section className={`${t.section.padding} bg-white px-4 md:px-0`}>
      <div className={t.section.container}>
        <div className={`text-center ${t.section.header.margin}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {trans('title')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {trans('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <Link href="/projects#projects-section" className="block h-full">
                <div className="relative h-56 md:h-64 w-full overflow-hidden">
                  <Image
                    src={p.image}
                    // Alt etiketi için de JSON'dan veri çekiyoruz
                    alt={trans(`items.project${i + 1}.title`)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-3 inline-block">
                    {trans(`items.project${i + 1}.category`)}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {trans(`items.project${i + 1}.title`)}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}