import type { Locale } from "@/i18n/routing";
import type { Localized, Project, Stat, Testimonial } from "./types";

// TODO(icerik): problem/çözüm metinleri, sayılar ve teknoloji listeleri Design'ın örnek verileridir.
// Gerçek, ölçülmüş değerler gelince doldurup `placeholder: false` yapın — not otomatik kalkar.

type LocalizedStat = Omit<Stat, "label" | "unit"> & { label: Localized<string>; unit?: Localized<string> };

type ProjectSource = Omit<
  Project,
  "short" | "desc" | "tags" | "problem" | "solution" | "story" | "stats" | "specs" | "quote"
> & {
  short: Localized<string>;
  desc: Localized<string>;
  tags: Localized<string[]>;
  problem?: Localized<string>;
  solution?: Localized<string>;
  story?: Localized<string[]>;
  stats?: LocalizedStat[];
  specs?: Localized<{ client: string; services: string; platform: string }>;
  quote?: Localized<Testimonial>;
};

const u = (tr: string, en: string): Localized<string> => ({ tr, en });

const PROJECTS: ProjectSource[] = [
  {
    slug: "online-dkt-terapi",
    name: "Online DKT Terapi",
    mono: "DKT",
    tone: "sage",
    kind: "web",
    categories: ["web", "design"],
    year: "2025",
    status: "live",
    featured: true,
    caseStudy: true,
    placeholder: true,
    image: "/images/onlinedktterapi.png",
    url: "https://onlinedktterapi.vercel.app",
    short: u("Dil ve konuşma terapisti için online terapi platformu", "Online therapy platform for a speech & language therapist"),
    desc: u(
      "Dil ve konuşma terapisti Feyza Şahan için randevu ve ödemeyi tek akışta toplayan online terapi platformu.",
      "An online therapy platform for speech & language therapist Feyza Şahan, with booking and payment in one flow."
    ),
    tags: { tr: ["Web", "Online terapi", "Randevu & ödeme"], en: ["Web", "Online therapy", "Booking & payment"] },
    problem: u(
      "Danışanlar randevu ve ödeme için telefon ve mesajla uğraşıyordu.",
      "Clients had to sort out bookings and payments over calls and messages."
    ),
    solution: u(
      "Hizmetleri net anlatan bir site ve randevu + ödemeyi tek ekranda toplayan bir akış kurduk.",
      "We built a site that explains the services clearly and a flow that puts booking and payment on one screen."
    ),
    stats: [
      { value: 6, unit: u("hf", "wk"), label: u("Keşiften yayına", "Discovery to launch") },
      { value: 98, label: u("Lighthouse performans", "Lighthouse performance") },
      { value: 1.2, decimals: 1, unit: u("sn", "s"), label: u("İlk içerik boyama (LCP)", "Largest contentful paint") },
      { value: 3, unit: u("adım", "steps"), label: u("Randevuya kadar", "To a booking") },
    ],
    tech: ["Next.js", "Tailwind", "Vercel"],
    specs: {
      tr: { client: "Feyza Şahan · Dil ve Konuşma Terapisti", services: "Web sitesi, UI/UX", platform: "Web" },
      en: { client: "Feyza Şahan · Speech & Language Therapist", services: "Website, UI/UX", platform: "Web" },
    },
  },
  {
    slug: "ortho-origin",
    name: "Ortho Origin",
    mono: "OO",
    tone: "sand",
    kind: "web",
    categories: ["web"],
    year: "2025",
    status: "live",
    featured: true,
    caseStudy: true,
    placeholder: true,
    image: "/images/otrhoorigin.png",
    url: "https://www.orthoorigin.com/tr",
    short: u("Şeffaf plak markası için çok dilli satış platformu", "Multilingual sales platform for a clear-aligner brand"),
    desc: u(
      "Şeffaf plak (aligner) üreticisi için çok dilli, çoklu para birimli tanıtım ve satış platformu.",
      "A multilingual, multi-currency marketing and sales platform for a clear-aligner manufacturer."
    ),
    tags: { tr: ["E-ticaret", "Çok dilli"], en: ["E-commerce", "Multilingual"] },
    problem: u(
      "Farklı ülkelerdeki hastalar tedaviyi ve fiyatları kendi dil ve para birimlerinde göremiyordu.",
      "Patients in different countries couldn't see the treatment and prices in their own language and currency."
    ),
    solution: u(
      "Çok dilli, çoklu para birimli bir mağaza ve tek panelden ürün–stok yönetimi kurduk.",
      "We built a multilingual, multi-currency store with product and stock managed from one panel."
    ),
    stats: [
      { value: 3, unit: u("dil", "lang"), label: u("Tek içerik panelinden", "From one content panel") },
      { value: 8, unit: u("hf", "wk"), label: u("Teslim süresi", "Delivery time") },
      { value: 100, label: u("Lighthouse SEO", "Lighthouse SEO") },
      { value: 1, unit: u("panel", "panel"), label: u("Ürün ve stok yönetimi", "Product & stock management") },
    ],
    tech: ["Next.js", "next-intl", "Vercel"],
    specs: {
      tr: { client: "Ortho Origin", services: "E-ticaret, UI/UX", platform: "Web · çok dilli" },
      en: { client: "Ortho Origin", services: "E-commerce, UI/UX", platform: "Web · multilingual" },
    },
  },
  {
    slug: "food-roulette",
    name: "Food Roulette",
    mono: "FR",
    tone: "tomato",
    kind: "mobile",
    categories: ["mobile", "design"],
    year: "2024",
    status: "past",
    featured: true,
    caseStudy: true,
    placeholder: true,
    image: "/images/foodRoulette.png",
    url: "https://github.com/Buraktalhaa/food-roulette",
    short: u("Filtrelere göre rastgele restoran öneren uygulama", "An app that suggests a random restaurant from your filters"),
    desc: u(
      "“Bugün ne yesek?” sorusunu filtrelenmiş seçeneklerden rastgele bir restoranla yanıtlayan mobil uygulama.",
      "A mobile app that answers “what should we eat today?” with a random restaurant from filtered options."
    ),
    tags: { tr: ["Mobil", "Google Maps"], en: ["Mobile", "Google Maps"] },
    problem: u(
      "Karar yorgunluğu: kullanıcılar uzun restoran listelerinde kayboluyordu.",
      "Decision fatigue: users got lost in long restaurant lists."
    ),
    solution: u(
      "Mesafe ve mutfak filtrelerinden Google Maps verisiyle tek dokunuşta öneri çıkaran bir çark arayüzü tasarladık.",
      "We designed a wheel that turns distance and cuisine filters into a single suggestion, powered by Google Maps data."
    ),
    stats: [
      { value: 10, unit: u("hf", "wk"), label: u("Fikirden ilk sürüme", "Idea to first release") },
      { value: 2, unit: u("platform", "platforms"), label: u("Tek kod tabanı", "One codebase") },
      { value: 1, unit: u("dokunuş", "tap"), label: u("Öneriye kadar", "To a suggestion") },
    ],
    tech: ["Google Maps API"],
    specs: {
      tr: { client: "Food Roulette", services: "Mobil uygulama, UI/UX", platform: "Mobil" },
      en: { client: "Food Roulette", services: "Mobile app, UI/UX", platform: "Mobile" },
    },
  },
];

function localize(p: ProjectSource, locale: Locale): Project {
  return {
    ...p,
    short: p.short[locale],
    desc: p.desc[locale],
    tags: p.tags[locale],
    problem: p.problem?.[locale],
    solution: p.solution?.[locale],
    story: p.story?.[locale],
    stats: p.stats?.map((s) => ({ ...s, label: s.label[locale], unit: s.unit?.[locale] })),
    specs: p.specs?.[locale],
    quote: p.quote?.[locale],
  };
}

export function getProjects(locale: Locale): Project[] {
  return PROJECTS.map((p) => localize(p, locale));
}

export function getProject(locale: Locale, slug: string): Project | undefined {
  const p = PROJECTS.find((x) => x.slug === slug && x.caseStudy);
  return p && localize(p, locale);
}

export const caseStudySlugs = PROJECTS.filter((p) => p.caseStudy).map((p) => p.slug);

/** Onaylı gerçek müşteri yorumları. Boşken "Müşteri yorumları" bloğu gizlenir — uydurmayın. */
export function getTestimonials(locale: Locale): Testimonial[] {
  return getProjects(locale).flatMap((p) => (p.quote ? [p.quote] : []));
}
