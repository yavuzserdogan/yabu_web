import {
  Code2,
  Smartphone,
  Palette,
  TrendingUp,
} from "lucide-react";

import type { ServiceSummary } from "@/types/service";
import type { Step } from "@/types/step";
import type { Project } from "@/types/project";

export const services: ServiceSummary[] = [
  {
    icon: Code2,
    title: "Web Geliştirme",
    description:
      "Modern teknolojilerle performanslı, ölçeklenebilir web uygulamaları.",
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama",
    description:
      "iOS ve Android için native ve cross-platform mobil çözümler.",
  },
  {
    icon: Palette,
    title: "UI/UX & Portfolyo",
    description:
      "Kullanıcı odaklı arayüzler ve etkileyici portfolyo siteleri.",
  },
  {
    icon: TrendingUp,
    title: "Sosyal Medya & Reklam",
    description:
      "Dijital pazarlama stratejileri ve sosyal medya yönetimi.",
  },
];

export const steps: Step[] = [
  {
    number: "01",
    title: "Keşif & Planlama",
    description:
      "İhtiyaçlarınızı analiz ediyor, net bir yol haritası çıkarıyoruz.",
  },
  {
    number: "02",
    title: "Tasarım & Geliştirme",
    description:
      "Modern tasarım ve temiz kod ile projeyi geliştiriyoruz.",
  },
  {
    number: "03",
    title: "Test & Optimizasyon",
    description:
      "Performans, güvenlik ve kullanıcı testlerini yapıyoruz.",
  },
  {
    number: "04",
    title: "Yayın & Destek",
    description:
      "Projeyi yayına alıyor ve sürekli destek sağlıyoruz.",
  },
];

export const projects: Project[] = [
  {
    title: "E-Ticaret Platformu",
    category: "Web Geliştirme",
    image: "https://images.unsplash.com/photo-1759884247173-3db27f7fafef",
  },
  {
    title: "Fitness Mobil App",
    category: "Mobil Uygulama",
    image: "https://images.unsplash.com/photo-1707836916010-3c4ad261936c",
  },
  {
    title: "Mimar Portfolyo Sitesi",
    category: "UI / UX",
    image: "https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc",
  },
];
