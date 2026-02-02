"use client";

import { ServiceCard } from "./ServiceCard";
import { services } from "./services.data";

export function ServicesList() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-24">
        {services.map((service, i) => (
          <ServiceCard
            key={service.slug}
            service={service}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
