"use client";

import { useState, useEffect } from "react"; 
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { contentTheme } from "@/config/content-theme";
import { projects } from "./home.data";

export function HomeFeaturedProjects() {
  const t = contentTheme;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile); 
    return () => window.removeEventListener("resize", checkMobile); 
  }, []);
  
  return (
    <section className={`${t.section.padding} bg-white px-4 md:px-0`}>
      <div className={t.section.container}>
        <div className={`text-center ${t.section.header.margin}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Öne Çıkan Projeler</h2>
          <p className="text-slate-600 max-w-2xl mx-auto"> Başarılı projelere göz atın</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
           
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              
              animate={isMobile ? { opacity: 1, y: 0 } : undefined}
              
              whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
              
              viewport={{ once: true }}
              
              transition={{ duration: isMobile ? 0 : 0.5 }}

              className="group rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <Link href="/projects#projects-section" className="block h-full">
                <div className="relative h-56 md:h-56 w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-3 inline-block">
                    {p.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {p.title}
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