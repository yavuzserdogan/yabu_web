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

export const ITEM_IMAGES: Record<string, string> = {
  // --- Web & E-Ticaret ---
  corporate: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85", 
  ecommerce: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=85",   
  boutique: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=85",  
  portfolio: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&q=85",
  landing: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",   
  blog: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=85",      

  // --- Mobil Uygulamalar ---
  app: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1200&q=85",       
  qr: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=85",        
  booking: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=1200&q=85",   

  // --- Sosyal Medya & Tasarım (growth) ---
  social_media: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=1200&q=85", 
  uiux: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=85",         
  branding: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=85",  
  ads: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=1200&q=85",       

  // --- Altyapı & Destek (management) ---
  seo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85",        
  maintenance: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=85", 
  security: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=85",      
  corporate_mail: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&q=85",
};
export const FALLBACK_IMG = "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=85"; 