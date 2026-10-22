import type { Metadata } from "next";
import { getPathname, routing, type Locale } from "@/i18n/routing";
import { siteConfig } from "@/config/site";

type Href = Parameters<typeof getPathname>[0]["href"];

export const absoluteUrl = (locale: Locale, href: Href) =>
  `${siteConfig.url}${getPathname({ locale, href })}`;

/**
 * Canonical + hreflang for a route. `hrefFor` lets localized slugs differ per locale
 * (e.g. /hizmetler/mobil ↔ /en/services/mobile).
 */
export function alternates(locale: Locale, href: Href, hrefFor?: (l: Locale) => Href): Metadata["alternates"] {
  const pick = (l: Locale) => (hrefFor ? hrefFor(l) : href);
  return {
    canonical: absoluteUrl(locale, href),
    languages: {
      ...Object.fromEntries(routing.locales.map((l) => [l, absoluteUrl(l, pick(l))])),
      "x-default": absoluteUrl(routing.defaultLocale, pick(routing.defaultLocale)),
    },
  };
}
