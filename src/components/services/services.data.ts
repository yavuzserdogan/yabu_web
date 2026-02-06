import { Code2, Smartphone, Palette, TrendingUp } from "lucide-react";
import type { ServiceDetail } from "@/types/service";

export const services: ServiceDetail[] = [
  {
    slug: "web",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072",
    title: "Web Geliştirme",
    description:
      "Modern web teknolojileriyle hızlı, güvenli ve ölçeklenebilir web uygulamaları.",
    features: [
      "SEO uyumlu yapı",
      "Yüksek performans",
      "Responsive tasarım",
      "React & Next.js",
    ],
    suitable: [
      "Kurumsal Siteler",
      "E-Ticaret",
      "SaaS Platformları",
      "Yönetim Panelleri",
    ],
    accent: "blue",
  },
  {
    slug: "mobile",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070",
    title: "Mobil Uygulama",
    description:
      "iOS ve Android için kullanıcı dostu, performanslı mobil uygulamalar.",
    features: [
      "React Native / Flutter",
      "Offline destek",
      "Push Notification",
      "App Store yayını",
    ],
    suitable: [
      "Startup MVP",
      "E-Ticaret App",
      "Servis Uygulamaları",
    ],
    accent: "indigo",
  },
  {
    slug: "uiux",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426",
    title: "UI/UX & Portfolyo",
    description:
      "Markanızı yansıtan modern, etkileyici ve dönüşüm odaklı arayüzler.",
    features: [
      "Minimal tasarım",
      "Animasyonlu UI",
      "CMS entegrasyonu",
    ],
    suitable: [
      "Kişisel Portföy",
      "Ajans Siteleri",
      "Mimar & Tasarımcılar",
    ],
    accent: "purple",
  },
  {
    slug: "marketing",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426",
    title: "Sosyal Medya & Reklam",
    description:
      "Stratejik dijital pazarlama ile markanızı büyütüyoruz.",
    features: [
      "Meta & Google Ads",
      "İçerik planlama",
      "Performans raporları",
    ],
    suitable: [
      "KOBİ",
      "E-Ticaret",
      "Kişisel Markalar",
    ],
    accent: "emerald",
  },
];
