"use client";

import { ServicesList } from "@/components/services/ServiceList";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceTechStack } from "@/components/services/ServiceTechStack";




export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServiceTechStack />
      <ServicesList />
    </main>
  );
}
