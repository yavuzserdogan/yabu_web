import { Mail, Phone } from "lucide-react";
import type { ContactInfoItem, FaqItem } from "@/types/contact";

export const contactInfo: ContactInfoItem[] = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@digitalstudio.com",
    link: "mailto:hello@digitalstudio.com",
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "+90 555 123 45 67",
    link: "tel:+905551234567",
  }
];

export const faqs: FaqItem[] = [
  {
    q: "Proje süresi ne kadar?",
    a: "Projenin kapsamına bağlı olarak 2-8 hafta arası değişir.",
  },
  {
    q: "Ödeme nasıl yapılır?",
    a: "%50 başlangıç, %50 teslimat şeklinde ilerliyoruz.",
  },
  {
    q: "Revizyon hakkım var mı?",
    a: "Evet, paketlere göre değişen revizyon hakkı sunuyoruz.",
  },
  {
    q: "Proje sonrası destek var mı?",
    a: "30 gün ücretsiz teknik destek sağlıyoruz.",
  },
];
