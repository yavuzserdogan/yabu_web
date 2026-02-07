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
      "Tüm Cihazlarda Mükemmel Görünüm",
      "Google'da Üst Sıralarda Yer Alın",
      "Saniyeler İçinde Yüklenen Sayfalar",
      "Kolay İçerik Yönetimi & Güncelleme",
    ],

    suitable: [
      "Kurumsal Web Siteleri",
      "E-Ticaret Platformları",
      "Özel Web Uygulamaları",
      "Yönetim Panelleri & Dashboardlar",
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
      "iOS ve Android için Tek Çözüm",
      "Çevrimdışı Çalışma Özelliği",
      "Anlık Bildirimler & Kullanıcı Etkileşimi",
      "App Store & Play Store Yayınlama Desteği",
    ],

    suitable: [
      "Startup & MVP Projeleri",
      "Mobil E-Ticaret Uygulamaları",
      "Rezervasyon & Servis Platformları",
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
      "Göz Alıcı Modern Tasarımlar",
      "Kullanıcı Deneyimi Odaklı Arayüz",
      "Akıcı Animasyonlar & Geçişler",
      "Kolay Güncellenebilir İçerik Yönetimi",
    ],
    suitable: [
      "Kişisel Portfolyolar",
      "Ajans & Stüdyo Siteleri",
      "Mimar, Tasarımcı & Sanatçılar",
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
      "Meta & Google Reklam Kampanyaları",
      "Hedef Kitle Analizi & Strateji",
      "Profesyonel İçerik Stratejisi",
      "Detaylı Analiz & Performans Raporları",
    ],
    suitable: [
      "KOBİ & Yerel İşletmeler",
      "E-Ticaret Markaları",
      "İçerik Üreticileri & Influencerlar",
    ],
    accent: "emerald",
  },
];