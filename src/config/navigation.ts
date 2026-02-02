export const mainNavigation = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Hizmetler", path: "/services" },
  { name: "Projelerimiz", path: "/projects" },
  { name: "Hakkımda", path: "/about" },
  { name: "İletişim", path: "/contact" },
] as const;

export type NavItem = (typeof mainNavigation)[number];
