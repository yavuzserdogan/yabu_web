import type { Locale } from "@/i18n/routing";
import type { IconName } from "@/components/sy/icons";

export type Localized<T> = Record<Locale, T>;

/** Placeholder imagery tone (media-* tokens). Never used as UI colour. */
export type Tone = "sage" | "sand" | "tomato" | "ink";
export type ProjectStatus = "live" | "soon" | "past";
export type ProjectCategory = "web" | "mobile" | "design";

export type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  unit?: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  /** 2–3 letter monogram for list icons */
  mono: string;
  tone: Tone;
  kind: "web" | "mobile";
  categories: ProjectCategory[];
  year: string;
  status: ProjectStatus;
  /** shown in "01 — İşlerimiz" */
  featured: boolean;
  /** has a /isler/[slug] page */
  caseStudy: boolean;
  /** true while texts/stats are design placeholders — renders a visible note */
  placeholder: boolean;
  image?: string;
  url?: string;
  short: string;
  desc: string;
  tags: string[];
  problem?: string;
  solution?: string;
  story?: string[];
  stats?: Stat[];
  tech?: string[];
  specs?: { client: string; services: string; platform: string };
  quote?: Testimonial;
};

export type Testimonial = { quote: string; name: string; company: string; initials: string };

export type ServiceItem = { icon: IconName; title: string; text: string };
export type FaqItem = { q: string; a: string };

export type Service = {
  /** localized URL slug */
  slug: string;
  /** slugs in every locale — used to redirect a wrong-language slug */
  slugs: Localized<string>;
  num: string;
  title: string;
  /** title split for the masked h1 */
  titleLines: string[];
  desc: string;
  bullets: string[];
  tone: Tone;
  kind: "web" | "mobile";
  category: ProjectCategory;
  duration: string;
  items: ServiceItem[];
  faq: FaqItem[];
};

export type Principle = { icon: IconName; title: string; text: string };
export type Step = { title: string; text: string; time: string };
export type TeamMember = { name: string; role: string; photo?: string; linkedin?: string };
