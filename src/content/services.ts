import type { Locale } from "@/i18n/routing";
import type { FaqItem, Localized, Service, ServiceItem } from "./types";

type ServiceSource = Omit<Service, "slug" | "title" | "titleLines" | "desc" | "bullets" | "duration" | "items" | "faq"> & {
  title: Localized<string>;
  titleLines: Localized<string[]>;
  desc: Localized<string>;
  bullets: Localized<string[]>;
  duration: Localized<string>;
  items: Localized<ServiceItem[]>;
  faq: Localized<FaqItem[]>;
};

const SERVICES: ServiceSource[] = [
  {
    slugs: { tr: "web", en: "web" },
    num: "01",
    tone: "sand",
    kind: "web",
    category: "web",
    title: { tr: "Web sitesi & web uygulaması", en: "Websites & web apps" },
    titleLines: { tr: ["Web sitesi &", "web uygulaması"], en: ["Websites &", "web apps"] },
    desc: {
      tr: "Hızlı, bulunabilir ve kolay yönetilen siteler kuruyoruz. Kurumsal siteden e-ticarete, landing page’ten panel uygulamalarına kadar.",
      en: "We build fast, findable websites that are easy to manage — from corporate sites and e-commerce to landing pages and admin panels.",
    },
    bullets: {
      tr: ["Kurumsal site ve e-ticaret", "Landing page ve kampanya sayfaları", "Web uygulaması ve yönetim paneli"],
      en: ["Corporate sites and e-commerce", "Landing and campaign pages", "Web apps and admin panels"],
    },
    duration: { tr: "Ortalama 6–9 hafta", en: "6–9 weeks on average" },
    items: {
      tr: [
        { icon: "globe", title: "Kurumsal site", text: "Şirketinizi net anlatan, hızlı ve SEO uyumlu site." },
        { icon: "tag", title: "E-ticaret", text: "Ödeme, kargo ve stok entegrasyonlu mağaza." },
        { icon: "doc", title: "Landing page", text: "Kampanya ve ürün lansmanı için tek sayfa." },
        { icon: "code", title: "Web uygulaması", text: "Panel, portal, rezervasyon ve iç araçlar." },
        { icon: "pen", title: "İçerik yönetimi", text: "Ekibinizin kod bilmeden güncelleyeceği panel." },
        { icon: "support", title: "Bakım", text: "Güncelleme, yedekleme, hız ve güvenlik takibi." },
      ],
      en: [
        { icon: "globe", title: "Corporate website", text: "A fast, SEO-ready site that explains your company clearly." },
        { icon: "tag", title: "E-commerce", text: "A store with payments, shipping and stock integrations." },
        { icon: "doc", title: "Landing page", text: "A single page for campaigns and product launches." },
        { icon: "code", title: "Web app", text: "Panels, portals, booking systems and internal tools." },
        { icon: "pen", title: "Content management", text: "A panel your team can update without touching code." },
        { icon: "support", title: "Maintenance", text: "Updates, backups, speed and security monitoring." },
      ],
    },
    faq: {
      tr: [
        { q: "Bir web sitesi ne kadar sürer?", a: "Kurumsal bir site genellikle 4–8 hafta, e-ticaret ve web uygulamaları 8–12 hafta sürer. Kesin takvimi keşif görüşmesinden sonra yazılı paylaşırız." },
        { q: "Siteyi kendimiz güncelleyebilir miyiz?", a: "Evet. İçerikleri ekibinizin kod bilmeden düzenleyebileceği bir panel kuruyor ve kısa bir eğitim veriyoruz." },
        { q: "Alan adı ve hosting kimin adına olur?", a: "Sizin adınıza. Hesapları birlikte açar, teslimde tüm erişimleri size devrederiz." },
        { q: "Mevcut sitemizi yenileyebilir misiniz?", a: "Evet. Önce hız, SEO ve içerik analizi yapar, neyin korunup neyin yenileneceğini birlikte belirleriz." },
      ],
      en: [
        { q: "How long does a website take?", a: "A corporate site usually takes 4–8 weeks; e-commerce and web apps 8–12 weeks. We share the exact timeline in writing after the discovery call." },
        { q: "Can we update the site ourselves?", a: "Yes. We set up a panel your team can edit without code and give you a short training." },
        { q: "Whose name are the domain and hosting in?", a: "Yours. We open the accounts together and hand over every login at delivery." },
        { q: "Can you redesign our current site?", a: "Yes. We start with a speed, SEO and content audit, then decide together what to keep and what to rebuild." },
      ],
    },
  },
  {
    slugs: { tr: "mobil", en: "mobile" },
    num: "02",
    tone: "tomato",
    kind: "mobile",
    category: "mobile",
    title: { tr: "Mobil uygulama", en: "Mobile apps" },
    titleLines: { tr: ["Mobil", "uygulama"], en: ["Mobile", "apps"] },
    desc: {
      tr: "iOS ve Android için tek kod tabanıyla, mağaza yayınına kadar uçtan uca geliştiriyoruz. İşletmenize özel sistemler de kuruyoruz.",
      en: "We build iOS and Android apps from one codebase, end to end, all the way to the stores — including systems tailored to your business.",
    },
    bullets: {
      tr: ["iOS & Android (React Native)", "QR menü ve sipariş sistemleri", "Rezervasyon ve randevu uygulamaları"],
      en: ["iOS & Android (React Native)", "QR menus and ordering systems", "Booking and appointment apps"],
    },
    duration: { tr: "Ortalama 8–14 hafta", en: "8–14 weeks on average" },
    items: {
      tr: [
        { icon: "device", title: "iOS & Android", text: "Tek kod tabanı, iki platformda yerel his." },
        { icon: "tag", title: "QR menü ve sipariş", text: "Masadan sipariş, anlık menü güncelleme." },
        { icon: "calendar", title: "Rezervasyon", text: "Randevu, takvim ve hatırlatma bildirimleri." },
        { icon: "data", title: "Backend ve panel", text: "Kullanıcı, içerik ve sipariş yönetimi." },
        { icon: "pen", title: "Uygulama tasarımı", text: "Akış, arayüz ve tıklanabilir prototip." },
        { icon: "globe", title: "Mağaza yayını", text: "App Store ve Google Play süreçleri bizde." },
      ],
      en: [
        { icon: "device", title: "iOS & Android", text: "One codebase with a native feel on both platforms." },
        { icon: "tag", title: "QR menus & ordering", text: "Order from the table, update the menu instantly." },
        { icon: "calendar", title: "Booking", text: "Appointments, calendars and reminder notifications." },
        { icon: "data", title: "Backend & panel", text: "User, content and order management." },
        { icon: "pen", title: "App design", text: "Flows, interface and a clickable prototype." },
        { icon: "globe", title: "Store release", text: "We handle App Store and Google Play submissions." },
      ],
    },
    faq: {
      tr: [
        { q: "Bir mobil uygulama ne kadar sürer?", a: "Kapsama göre 8–14 hafta. İlk hafta sonunda yazılı kapsam ve takvim paylaşırız." },
        { q: "iOS ve Android için ayrı mı ödüyoruz?", a: "Hayır. React Native ile tek kod tabanından iki platforma birden yayın yapıyoruz." },
        { q: "Mağaza hesapları kimin adına açılır?", a: "Sizin adınıza. Geliştirici hesaplarını birlikte açar, yayın sürecini biz yürütürüz." },
        { q: "Yayından sonra güncellemeler nasıl olur?", a: "30 gün ücretsiz düzeltme, ardından isteğe bağlı aylık bakımla yeni sürümleri biz yayınlarız." },
      ],
      en: [
        { q: "How long does a mobile app take?", a: "8–14 weeks depending on scope. We share a written scope and timeline after the first week." },
        { q: "Do we pay separately for iOS and Android?", a: "No. With React Native we ship both platforms from a single codebase." },
        { q: "Whose name are the store accounts in?", a: "Yours. We open the developer accounts together and run the release process for you." },
        { q: "How do updates work after launch?", a: "30 days of free fixes, then optional monthly maintenance where we ship new versions for you." },
      ],
    },
  },
  {
    slugs: { tr: "tasarim", en: "design" },
    num: "03",
    tone: "sage",
    kind: "web",
    category: "design",
    title: { tr: "Tasarım & marka", en: "Design & brand" },
    titleLines: { tr: ["Tasarım &", "marka"], en: ["Design &", "brand"] },
    desc: {
      tr: "Markanızın nasıl göründüğünü ve nasıl hissettirdiğini tasarlıyoruz. Arayüzden logoya, sosyal medyaya kadar tek bir dil.",
      en: "We design how your brand looks and feels — one language from interface to logo to social media.",
    },
    bullets: {
      tr: ["UI/UX tasarımı ve prototip", "Marka kimliği ve logo", "Sosyal medya tasarım sistemi"],
      en: ["UI/UX design and prototyping", "Brand identity and logo", "Social media design system"],
    },
    duration: { tr: "Ortalama 3–6 hafta", en: "3–6 weeks on average" },
    items: {
      tr: [
        { icon: "pen", title: "UI/UX tasarımı", text: "Kullanıcı akışı, arayüz ve tasarım sistemi." },
        { icon: "device", title: "Prototip", text: "Geliştirmeden önce tıklanabilir deneme." },
        { icon: "tag", title: "Marka kimliği", text: "Logo, renk, tipografi ve kullanım kılavuzu." },
        { icon: "doc", title: "Sosyal medya", text: "Şablonlar ve tutarlı bir paylaşım dili." },
        { icon: "globe", title: "Sunum ve basılı", text: "Kurumsal sunum, kartvizit, broşür." },
        { icon: "code", title: "Geliştiriciye teslim", text: "Figma dosyaları ve token'larla hazır devir." },
      ],
      en: [
        { icon: "pen", title: "UI/UX design", text: "User flows, interface and a design system." },
        { icon: "device", title: "Prototyping", text: "A clickable test before any development." },
        { icon: "tag", title: "Brand identity", text: "Logo, colour, typography and usage guidelines." },
        { icon: "doc", title: "Social media", text: "Templates and a consistent posting language." },
        { icon: "globe", title: "Decks & print", text: "Company decks, business cards, brochures." },
        { icon: "code", title: "Developer handoff", text: "Figma files and tokens, ready to build." },
      ],
    },
    faq: {
      tr: [
        { q: "Tasarım süreci nasıl ilerliyor?", a: "Keşif ve referans toplama, ardından 2–3 yön önerisi. Seçilen yönü birlikte detaylandırırız." },
        { q: "Kaç revizyon hakkım var?", a: "Her tasarım aşamasında 2 tur revizyon teklife dahildir. Ek turlar önceden fiyatlandırılır." },
        { q: "Hangi dosyaları teslim alıyoruz?", a: "Kaynak Figma dosyaları, logo paketleri (SVG, PNG, PDF) ve marka kullanım kılavuzu." },
        { q: "Sadece tasarım yaptırabilir miyiz?", a: "Evet. Tasarımı kendi ekibiniz kodlayacaksa geliştiriciye hazır bir devir dosyası hazırlarız." },
      ],
      en: [
        { q: "How does the design process work?", a: "Discovery and references, then 2–3 directions. We refine the chosen one together." },
        { q: "How many revisions do I get?", a: "Two rounds per design stage are included. Extra rounds are priced up front." },
        { q: "Which files do we receive?", a: "Source Figma files, logo packages (SVG, PNG, PDF) and brand guidelines." },
        { q: "Can we hire you for design only?", a: "Yes. If your own team will build it, we prepare a developer-ready handoff." },
      ],
    },
  },
];

function localize(s: ServiceSource, locale: Locale): Service {
  return {
    ...s,
    slug: s.slugs[locale],
    title: s.title[locale],
    titleLines: s.titleLines[locale],
    desc: s.desc[locale],
    bullets: s.bullets[locale],
    duration: s.duration[locale],
    items: s.items[locale],
    faq: s.faq[locale],
  };
}

export function getServices(locale: Locale): Service[] {
  return SERVICES.map((s) => localize(s, locale));
}

/** Finds a service by its slug in any locale (so /en/services/mobil can redirect to /mobile). */
export function findService(locale: Locale, slug: string): Service | undefined {
  const s = SERVICES.find((x) => Object.values(x.slugs).includes(slug));
  return s && localize(s, locale);
}

export const serviceSlugs = SERVICES.map((s) => s.slugs);
