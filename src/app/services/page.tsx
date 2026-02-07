"use client";

import { ServicesList } from "@/components/services/ServiceList";
import { ServicesHero } from "@/components/services/ServicesHero";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
    </main>
  );
}
