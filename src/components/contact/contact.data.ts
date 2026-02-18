import { Mail, Phone } from "lucide-react";
import type { ContactInfoItem } from "@/types/contact";

export const contactInfo: ContactInfoItem[] = [
  {
    icon: Mail,
    title: "Email",
    value: "sybordigital@gmail.com",
    link: "mailto:sybordigital@gmail.com",
  },
  {
    icon: Phone,
    title: "Telefon", 
    value: "+90 555 123 45 67",
    link: "tel:+905551234567",
  }
];