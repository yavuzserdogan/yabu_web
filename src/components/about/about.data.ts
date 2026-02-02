import { AboutProcess, AboutStat, AboutValue } from "@/types/about";
import { Users, Target, Award, Heart } from "lucide-react";

export const values: AboutValue[] = [
  {
    icon: Target,
    title: "Odaklanma",
    description: "Her projede kaliteyi ve müşteri memnuniyetini ön planda tutuyoruz.",
  },
  {
    icon: Heart,
    title: "Tutku",
    description: "Yaptığımız işi seviyoruz ve bu tutkuyu her projede hissettiriyoruz.",
  },
  {
    icon: Users,
    title: "İşbirliği",
    description: "Müşterilerimizle birebir çalışarak en iyi sonuçları birlikte üretiyoruz.",
  },
  {
    icon: Award,
    title: "Kalite",
    description: "Kod kalitesinden tasarıma, her detayda mükemmelliği hedefliyoruz.",
  },
];

export const stats: AboutStat[] = [
  { number: "50+", label: "Tamamlanan Proje" },
  { number: "30+", label: "Mutlu Müşteri" },
  { number: "5+", label: "Yıllık Deneyim" },
  { number: "%100", label: "Müşteri Memnuniyeti" },
];

export const process: AboutProcess[] = [
  {
    step: "01",
    title: "İlk Görüşme",
    description: "Projenizi ve hedeflerinizi dinliyoruz. Ücretsiz danışmanlık.",
  },
  {
    step: "02",
    title: "Planlama & Teklif",
    description: "Detaylı plan ve şeffaf fiyatlandırma.",
  },
  {
    step: "03",
    title: "Tasarım & Geliştirme",
    description: "Süreç boyunca sizinle iteratif ilerliyoruz.",
  },
  {
    step: "04",
    title: "Test & Yayın",
    description: "Kapsamlı testler ve yayın sonrası destek.",
  },
];
