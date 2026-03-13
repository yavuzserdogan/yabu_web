import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ServiceWhyUs } from "@/components/services/ServiceWhyUs";
import { HomeFeaturedProjects } from "@/components/home/HomeFeaturedProjects";

const audienceKeys: Record<string, string[]> = {
  "e-commerce":     ["physical", "startup", "growing", "global"],
  "corporate-web":  ["established", "startup", "rebranding", "b2b"],
  "boutique":       ["handmade", "fashion", "food", "lifestyle"],
  "portfolio":      ["freelancer", "creative", "consultant", "jobseeker"],
  "landing":        ["ads", "launch", "event", "lead"],
  "mobile-app":     ["startup", "business", "ecommerce", "service"],
  "qr-menu":        ["restaurant", "chain", "hotel", "foodcourt"],
  "booking":        ["health", "beauty", "consultant", "sports"],
  "social-media":   ["newbrand", "inactive", "growing", "notime"],
  "ui-ux":          ["startup", "redesign", "enterprise", "mobile"],
  "branding":       ["new", "refresh", "scale", "digital"],
  "ads":            ["ecommerce", "service", "brand", "campaign"],
  "seo":            ["newsite", "lowtraffic", "ecommerce", "local"],
  "maintenance":    ["business", "agency", "ecommerce", "notime"],
  "security":       ["ecommerce", "data", "hacked", "compliance"],
  "corporate-mail": ["newbusiness", "growing", "migration", "enterprise"],
};

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

  if (!audienceKeys[slug]) notFound();

  return (
    <main>
      <ServicesHero slug={slug} />
      <ServiceOverview slug={slug} />
      <ServiceFeatures slug={slug} />
      <ServiceWhyUs slug={slug} />
      <ServiceProcess slug={slug} />
      <ServiceFAQ slug={slug} />
      {/* This coming from home */}
      <HomeFeaturedProjects />
      <ServiceCTA slug={slug} />
    </main>
  );
}