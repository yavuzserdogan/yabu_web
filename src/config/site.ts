import type { LogoVariant } from "@/components/sy/logos";

export const siteConfig = {
  name: "Sybor Digital",
  url: "https://www.sybordigital.com",
  email: "sybordigital@gmail.com",
  phone: "+90 507 180 88 10",
  phone2: "+90 537 621 28 17",
  whatsapp: "https://wa.me/905071808810" as const,
  // TODO(icerik): stüdyonun şehri — hero meta ve stüdyo bölümünde görünür.
  city: "Türkiye",

  // Logo henüz seçilmedi: "nokta" (Design önerisi) | "kapsul" | "blok"
  logo: "nokta" as LogoVariant,

  socials: [
    { label: "Instagram", href: "https://www.instagram.com/sybordigital/" },
  ] as { label: string; href: `https://${string}` }[],
};

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}` as const;
