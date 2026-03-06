"use client";

import { motion } from "motion/react";
import { contentTheme } from "@/config/content-theme";
import { useTranslations } from "next-intl";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const t = contentTheme;

const projects = [
  {
    key: "project1",
    image: "/images/project1.png",
    tags: ["e-ticaret", "next.js"],
  },
  {
    key: "project2",
    image: "/images/project2.png",
    tags: ["shopify", "mobil"],
  },
  {
    key: "project3",
    image: "/images/project3.png",
    tags: ["woocommerce", "seo"],
  },
];

type Props = {
  slug: string;
};

export function ServiceProjects({ slug }: Props) {
  const trans = useTranslations(`ServicesPage.${slug}.projects`);

  return (
    <section className={`${t.section.paddingLarge} ${t.section.bg.slate}`}>
      <div className={t.section.container}>

        {/* Başlık */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 ${t.section.header.margin}`}>
          <div>
            <span className={t.sectionLabel}>{trans("label")}</span>
            <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mt-3`}>
              {trans("title")}
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
          >
            {trans("viewAll")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Proje Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${t.card.base} ${t.card.bg.white} ${t.card.hover} group overflow-hidden`}
            >
              {/* Görsel */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={trans(`items.${project.key}.title`)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <ExternalLink className="text-white w-5 h-5 ml-auto" />
                </div>
              </div>

              {/* İçerik */}
              <div className={t.card.padding.lg}>
                {/* Taglar */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className={t.badge.primary + " " + t.badge.base}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className={`${t.typography.cardTitleLarge} ${t.colors.text.primary} mb-2`}>
                  {trans(`items.${project.key}.title`)}
                </h4>
                <p className={`${t.typography.bodyLarge} mb-4`}>
                  {trans(`items.${project.key}.description`)}
                </p>

                {/* Metrikler */}
                <div className="flex gap-4 pt-4 border-t border-slate-100">
                  <div>
                    <p className={`${t.typography.label} mb-0.5`}>{trans("metric1Label")}</p>
                    <p className={`font-bold text-sm ${t.colors.accent.primary}`}>
                      {trans(`items.${project.key}.metric1`)}
                    </p>
                  </div>
                  <div>
                    <p className={`${t.typography.label} mb-0.5`}>{trans("metric2Label")}</p>
                    <p className={`font-bold text-sm ${t.colors.accent.primary}`}>
                      {trans(`items.${project.key}.metric2`)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}