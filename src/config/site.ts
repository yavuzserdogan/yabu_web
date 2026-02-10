export type SocialType = "linkedin" | "twitter" | "instagram";

export const siteConfig = {
  name: "YaBu Digital",
  email: "hello@digitalstudio.com",
  phone: "+90 555 123 45 67",

  navigation: [
    { label: "Ana Sayfa", path: "/" },
    { label: "Hizmetler", path: "/services" },
    { label: "Projelerimiz", path: "/projects" },
    { label: "Hakkımızda", path: "/about" },
    { label: "İletişim", path: "/contact" },
  ],

  socials: [
    { type: "linkedin", href: "https://linkedin.com" },
    { type: "twitter", href: "https://twitter.com" },
    { type: "instagram", href: "https://www.instagram.com/yabu.dijital/" },
  ] as {
    type: SocialType;
    href: string;
  }[],
};
