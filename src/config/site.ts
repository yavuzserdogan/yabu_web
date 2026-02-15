export type SocialType = "linkedin" | "twitter" | "instagram";

export const siteConfig = {
  name: "Sybor Digital",
  email: "sybordigital@gmail.com",
  phone: "+90 507 180 88 10",
  phone2: "+90 537 621 28 17",

  navigation: [
    { label: "Ana Sayfa", path: "/" },
    { label: "Hizmetler", path: "/services" },
    { label: "Projelerimiz", path: "/projects" },
    { label: "Hakkımızda", path: "/about" },
    { label: "İletişim", path: "/contact" },
  ],

  socials: [
    { type: "instagram", href: "https://www.instagram.com/sybordigital/" },
  ] as {
    type: SocialType;
    href: string;
  }[],
};
