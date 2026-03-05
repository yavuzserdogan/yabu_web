import { getTranslations } from "next-intl/server";
import { ServicesHero } from "@/components/services/ServicesHero";
import { notFound } from "next/navigation";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";

const validSlugs = ["web", "mobile", "e-commerce", "social-media", "infrastructure"];

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale, namespace: `ServicesPage.${slug}.meta` });
  return { title: `${t("title")} | Sybor Digital` };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;

  if (!validSlugs.includes(slug)) notFound();

  return (
    <main>
      <ServicesHero slug={slug} />
      <ServiceOverview slug={slug} />
      <ServiceFeatures slug={slug} />
    </main>
  );
}