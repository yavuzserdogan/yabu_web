import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { caseStudySlugs } from "@/content/projects";
import { serviceSlugs } from "@/content/services";
import { legacyServiceSlugs } from "@/components/legacy/LegacyServicePage";
import { absoluteUrl } from "@/lib/seo";

type Href = Parameters<typeof absoluteUrl>[1];

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (hrefFor: (l: (typeof routing.locales)[number]) => Href, priority: number) =>
    routing.locales.map((locale) => ({
      url: absoluteUrl(locale, hrefFor(locale)),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(routing.locales.map((l) => [l, absoluteUrl(l, hrefFor(l))])),
      },
    }));

  return [
    ...entry(() => "/", 1),
    ...entry(() => "/isler", 0.9),
    ...entry(() => "/iletisim", 0.8),
    ...caseStudySlugs.flatMap((slug) => entry(() => ({ pathname: "/isler/[slug]", params: { slug } }), 0.7)),
    ...serviceSlugs.flatMap((s) => entry((l) => ({ pathname: "/hizmetler/[slug]", params: { slug: s[l] } }), 0.9)),
    ...legacyServiceSlugs.flatMap((slug) => entry(() => ({ pathname: "/hizmetler/[slug]", params: { slug } }), 0.6)),
  ];
}
