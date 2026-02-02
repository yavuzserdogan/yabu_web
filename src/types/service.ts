import type { LucideIcon } from "lucide-react";

/** Home page / listelerde kullanılan */
export interface ServiceSummary {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Detay sayfası & ServiceCard için */
export interface ServiceDetail extends ServiceSummary {
  slug: string;
  features: string[];
  suitable: string[];
  accent?: "blue" | "indigo" | "purple" | "emerald";
}
