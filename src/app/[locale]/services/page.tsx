import { Metadata } from "next";
import { ServicesList } from "@/components/services/ServiceList";
import { ServicesHero } from "@/components/services/ServicesHero";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description: "Web yazılım, mobil uygulama ve dijital dönüşüm çözümlerimizle tanışın. Modern teknolojileri işinize entegre ediyoruz.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
    </main>
  );
}