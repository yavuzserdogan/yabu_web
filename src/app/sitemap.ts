import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.sybordigital.com";

  const locales = ["tr", "en"];

  const staticPages = [
    "",
    "/projects",
    "/about",
    "/contact",
  ];

  const services = [
    "e-commerce",
    "corporate-web",
    "boutique",
    "portfolio",
    "landing",
    "mobile-app",
    "qr-menu",
    "booking",
    "social-media",
    "ui-ux",
    "branding",
    "ads",
    "seo",
    "maintenance",
    "security",
    "corporate-mail",
  ];

  const staticUrls = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.8,
    }))
  );

  const serviceUrls = locales.flatMap((locale) =>
    services.map((slug) => ({
      url: `${baseUrl}/${locale}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  return [...staticUrls, ...serviceUrls];
}