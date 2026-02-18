import { Metadata } from "next";
import { ServicesList } from "@/components/services/ServiceList";
import { ServicesHero } from "@/components/services/ServicesHero";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ServicesPage' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
    </main>
  );
}