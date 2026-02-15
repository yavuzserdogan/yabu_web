"use client";

import { ServiceCard } from "./ServiceCard";
import { contentTheme } from "@/config/content-theme";
import { services } from "./services.data";

export function ServicesList() {
  const t = contentTheme;
  return (
    <section className={`${t.section.padding} px-4 md:px-6 lg:px-8`}>
      <div className={`${t.section.container} space-y-16 md:space-y-32`}>
        {services.map((service, i) => (
          <ServiceCard
            key={service.slug}
            service={service}
            reverse={i % 2 === 1}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}