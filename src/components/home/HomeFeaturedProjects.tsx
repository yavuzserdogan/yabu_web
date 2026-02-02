"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "./home.data";

export function HomeFeaturedProjects() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl overflow-hidden border"
          >
            <div className="relative h-56">
              <Image src={p.image} alt={p.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <span className="text-xs text-blue-600">{p.category}</span>
              <h3 className="font-semibold">{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
