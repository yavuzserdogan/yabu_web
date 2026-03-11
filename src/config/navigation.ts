export type ServiceSlug =
  | "corporate-web" | "e-commerce" | "boutique" | "portfolio"
  | "landing" | "blog" | "mobile-app" | "qr-menu" | "booking"
  | "social-media" | "ui-ux" | "branding" | "ads" | "seo"
  | "maintenance" | "security" | "corporate-mail";

export const mainNavigation = [
  { id: "home", path: "/" },
  { id: "services", path: "/services", hasMegaMenu: true },
  { id: "projects", path: "/projects" },
  { id: "about", path: "/about" },
  { id: "contact", path: "/contact" },
];

export const servicesNavigation = [
  {
    id: "web",
    items: [
      { id: "corporate", slug: "corporate-web" },
      { id: "ecommerce", slug: "e-commerce" },
      { id: "boutique", slug: "boutique" },
      { id: "portfolio", slug: "portfolio" },
      { id: "landing", slug: "landing" },
    ],
  },
  {
    id: "mobile",
    items: [
      { id: "app", slug: "mobile-app" },
      { id: "qr", slug: "qr-menu" },
      { id: "booking", slug: "booking" },
    ],
  },
  {
    id: "growth",
    items: [
      { id: "social_media", slug: "social-media" },
      { id: "uiux", slug: "ui-ux" },
      { id: "branding", slug: "branding" },
      { id: "ads", slug: "ads" },
    ],
  },
  {
    id: "management",
    items: [
      { id: "seo", slug: "seo" },
      { id: "maintenance", slug: "maintenance" },
      { id: "security", slug: "security" },
      { id: "corporate_mail", slug: "corporate-mail" },
    ],
  },
];

export type NavItem = (typeof mainNavigation)[number];