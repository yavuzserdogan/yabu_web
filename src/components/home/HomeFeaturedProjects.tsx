"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { contentTheme } from "@/config/content-theme";
import { projects } from "./home.data";

export function HomeFeaturedProjects() {
  const t = contentTheme;
  return (
    <section className={`${t.section.padding} ${t.section.bg.white}`}>
      <div className={t.section.container}>
        <div className={`text-center ${t.section.header.margin}`}>
          <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mb-4`}>
            Öne Çıkan Projeler
          </h2>
          <p className={t.typography.sectionSubtitle}>
            Müşterilerimiz için gerçekleştirdiğimiz başarılı projelere göz atın
          </p>
        </div>

        <div className={t.grid.projects}>
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group rounded-xl overflow-hidden ${t.card.base} ${t.card.hover} ${t.card.bg.white}`}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className={t.card.padding.sm}>
                <span className={`${t.badge.base} ${t.badge.primary} mb-2`}>
                  {p.category}
                </span>
                <h3 className={`${t.typography.cardTitle} ${t.colors.text.primary} group-hover:text-blue-600 transition-colors`}>
                  {p.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
