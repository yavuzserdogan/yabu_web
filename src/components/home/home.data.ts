import type { ServiceSummary } from "@/types/service";
import type { Step } from "@/types/step";
import type { Project } from "@/types/project";

export const services: ServiceSummary[] = [
  { icon: "code", title: "", description: "" },
  { icon: "mobile", title: "", description: "" },
  { icon: "design", title: "", description: "" },
  { icon: "growth", title: "", description: "" },
];

export const serviceCategories = [
  {
    id: "web",
    items: [
      { id: "corporate", icon: "monitor" },
      { id: "ecommerce", icon: "shoppingCart" },
      { id: "boutique", icon: "store" },
      { id: "portfolio", icon: "folder" },
      { id: "landing", icon: "page" },
    ]
  },
  {
    id: "mobile",
    items: [
      { id: "app", icon: "smartphone" },
      { id: "qr", icon: "qrCode" },
      { id: "booking", icon: "calendar" },
    ]
  },
  {
    id: "growth",
    items: [
      { id: "social_media", icon: "socialMedia" },
      { id: "uiux", icon: "palette" },
      { id: "branding", icon: "brand" },
      { id: "ads", icon: "megaphone" }
    ]
  },
  {
    id: "management",
    items: [
      { id: "seo", icon: "search" },
      { id: "maintenance", icon: "wrench" },
      { id: "security", icon: "shield" },
      { id: "corporate_mail", icon: "mail" }
    ]
  },

];

export const steps: Step[] = [
  { number: "01", title: "", description: "" },
  { number: "02", title: "", description: "" },
  { number: "03", title: "", description: "" },
  { number: "04", title: "", description: "" },
];

export const projects: Project[] = [
  {
    id: 1, 
    title: "",
    category: "",
    image: "/images/onlinedktterapi.png",
  },
  {
    id: 2,
    title: "",
    category: "",
    image: "/images/otrhoorigin.png",
  },
  {
    id: 3,
    title: "",
    category: "",
    image: "https://images.unsplash.com/photo-1707836916010-3c4ad261936c",
  },
];