import type { InternalHref } from "@/components/sy/SmartLink";

type Anchors = { work: string; studio: string; services: string; faq: string; all: string };

/** Main navigation. Services and Studio are home sections (no index page). */
export function mainNav(anchors: Anchors) {
  return [
    { key: "work", href: "/isler" },
    { key: "services", href: { pathname: "/", hash: anchors.services } },
    { key: "studio", href: { pathname: "/", hash: anchors.studio } },
    { key: "contact", href: "/iletisim" },
  ] as const satisfies readonly { key: string; href: InternalHref }[];
}
