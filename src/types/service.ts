export type ServiceIconKey =
  | "code"
  | "mobile"
  | "design"
  | "growth";

/** Home page / listelerde kullanılan */
export interface ServiceSummary {
  icon: ServiceIconKey;
  title: string;
  description: string;
}

/** Detay sayfası & ServiceCard için */
export interface ServiceDetail extends ServiceSummary {
  slug: string;
  features: string[];
  suitable: string[];
  accent?: "blue" | "indigo" | "purple" | "emerald";
  image?: string;
}
