import type { LucideIcon } from "lucide-react";

export interface ContactInfoItem {
  icon: LucideIcon;
  title: string;
  value: string;
  link?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
