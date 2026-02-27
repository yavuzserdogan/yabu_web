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
      { id: "landing", icon: "layout" },
      { id: "blog", icon: "newspaper" }
    ]
  },
  {
    id: "mobile",
    items: [
      { id: "app", icon: "smartphone" },
      { id: "saas", icon: "cloud" },
      { id: "mvp", icon: "rocket" },
      { id: "api", icon: "webhook" }
    ]
  },
  {
    id: "management",
    items: [
      { id: "crm", icon: "users" },
      { id: "erp", icon: "database" },
      { id: "hr", icon: "briefcase" },
      { id: "booking", icon: "calendar" }
    ]
  },
  {
    id: "growth",
    items: [
      { id: "uiux", icon: "palette" },
      { id: "ai", icon: "brain" },
      { id: "seo", icon: "search" },
      { id: "ads", icon: "megaphone" }
    ]
  },
  {
    id: "support",
    items: [
      { id: "maintenance", icon: "wrench" },
      { id: "ticket", icon: "ticket" },
      { id: "lms", icon: "graduationCap" },
      { id: "qr", icon: "qrCode" }
    ]
  }
];

export const steps: Step[] = [
  { number: "01", title: "", description: "" },
  { number: "02", title: "", description: "" },
  { number: "03", title: "", description: "" },
  { number: "04", title: "", description: "" },
];

export const projects: Project[] = [
  {
    id: 1, // Hata düzeltildi: string yerine number kullanıldı
    title: "", 
    category: "",
    image: "/images/onlinedktterapi.png",
  },
  {
    id: 2,
    title: "",
    category: "",
    image: "https://images.unsplash.com/photo-1759884247173-3db27f7fafef",
  },
  {
    id: 3,
    title: "",
    category: "",
    image: "https://images.unsplash.com/photo-1707836916010-3c4ad261936c",
  },
];