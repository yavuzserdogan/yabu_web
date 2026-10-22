// Eski hizmet sayfaları (v1). Yeni tasarıma taşınana kadar dokunulmadı.
import { getTranslations } from "next-intl/server";
import { ServicesHero } from "@/components/legacy/services/ServicesHero";
import { ServiceOverview } from "@/components/legacy/services/ServiceOverview";
import { ServiceFeatures } from "@/components/legacy/services/ServiceFeatures";
import { ServiceProcess } from "@/components/legacy/services/ServiceProcess";
import { ServiceFAQ } from "@/components/legacy/services/ServiceFAQ";
import { ServiceCTA } from "@/components/legacy/services/ServiceCTA";
import { ServiceWhyUs } from "@/components/legacy/services/ServiceWhyUs";
import { HomeFeaturedProjects } from "@/components/legacy/HomeFeaturedProjects";

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

export const legacyServiceSlugs = Object.keys(audienceKeys);

export async function legacyServiceMetadata(locale: string, slug: string) {
  const t = await getTranslations({ locale, namespace: `ServicesPage.${slug}.meta` });
  return { title: { absolute: `${t("title")} | Sybor Digital` } };
}

/** Eski (v1) hizmet detay sayfası — 17 slug için olduğu gibi duruyor. */
export function LegacyServicePage({ slug }: { slug: string }) {

  return (
    <div>
      <ServicesHero slug={slug} />
      <ServiceOverview slug={slug} />
      <ServiceFeatures slug={slug} />
      <ServiceWhyUs slug={slug} />
      <ServiceProcess slug={slug} />
      <ServiceFAQ slug={slug} />
      {/* This coming from home */}
      <HomeFeaturedProjects />
      <ServiceCTA slug={slug} />
    </div>
  );
}