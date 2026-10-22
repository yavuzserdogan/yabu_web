import type { Locale } from "@/i18n/routing";
import type { FaqItem, Localized, Principle, Step, TeamMember } from "./types";

export const manifesto: Localized<string> = {
  tr: "Küçük bir ekibiz. Hesap yöneticisi yok, doğrudan işi yapan insanlarla konuşursunuz.",
  en: "We are a small team. No account managers — you talk directly to the people doing the work.",
};

export const principles: Localized<Principle[]> = {
  tr: [
    { icon: "tag", title: "Sabit fiyat", text: "Kapsamı yazılı netleştiririz, fiyat başta belli olur. Sürpriz fatura yok." },
    { icon: "calendar", title: "Net teslim tarihi", text: "Her aşamanın tarihi takvimde. Haftalık demo ile ilerlemeyi görürsünüz." },
    { icon: "code", title: "Kodun sahibi sizsiniz", text: "Kaynak kod, tasarım dosyaları ve hesaplar teslimde size devredilir." },
    { icon: "support", title: "Lansman sonrası destek", text: "Yayından sonra 30 gün ücretsiz düzeltme, ardından isteğe bağlı bakım." },
  ],
  en: [
    { icon: "tag", title: "Fixed price", text: "We agree the scope in writing, so the price is clear from day one. No surprise invoices." },
    { icon: "calendar", title: "Clear deadline", text: "Every stage has a date. Weekly demos let you see the progress." },
    { icon: "code", title: "You own the code", text: "Source code, design files and accounts are handed over at delivery." },
    { icon: "support", title: "Support after launch", text: "30 days of free fixes after launch, then optional maintenance." },
  ],
};

export const steps: Localized<Step[]> = {
  tr: [
    { title: "Keşif", text: "Hedefler, kullanıcılar, kapsam. Sonunda yazılı teklif ve takvim.", time: "1 hafta" },
    { title: "Tasarım", text: "Wireframe, arayüz, prototip. Her ekranı birlikte onaylarız.", time: "2–3 hafta" },
    { title: "Geliştirme", text: "Haftalık demo ile kodlama, içerik girişi ve testler.", time: "3–6 hafta" },
    { title: "Yayın", text: "Lansman, ölçüm kurulumu, ekibinize eğitim ve devir.", time: "1 hafta" },
  ],
  en: [
    { title: "Discovery", text: "Goals, users, scope. Ends with a written quote and timeline.", time: "1 week" },
    { title: "Design", text: "Wireframes, interface, prototype. We approve every screen together.", time: "2–3 weeks" },
    { title: "Development", text: "Build, content entry and testing, with a demo every week.", time: "3–6 weeks" },
    { title: "Launch", text: "Go-live, analytics setup, training and handover to your team.", time: "1 week" },
  ],
};

// TODO(icerik): gerçek ekip — ad, rol, S/B portre (public/team/...) ve LinkedIn.
export const team: Localized<TeamMember[]> = {
  tr: [
    { name: "Ad Soyad", role: "Kurucu · Tasarım" },
    { name: "Ad Soyad", role: "Geliştirme" },
    { name: "Ad Soyad", role: "Mobil" },
  ],
  en: [
    { name: "Full name", role: "Founder · Design" },
    { name: "Full name", role: "Development" },
    { name: "Full name", role: "Mobile" },
  ],
};

export const assurances: Localized<Principle[]> = {
  tr: [
    { icon: "lock", title: "NDA", text: "İlk görüşmeden önce gizlilik sözleşmesi imzalarız." },
    { icon: "code", title: "Kod sahipliği", text: "Tüm kaynak kod ve fikri haklar teslimde sizindir." },
    { icon: "data", title: "Veri kontrolü", text: "Sunucu, veritabanı ve hesaplar sizin adınıza açılır." },
    { icon: "shield", title: "KVKK / GDPR uyumu", text: "Aydınlatma metinleri, çerez onayı, veri saklama politikası." },
  ],
  en: [
    { icon: "lock", title: "NDA", text: "We sign a non-disclosure agreement before the first call." },
    { icon: "code", title: "Code ownership", text: "All source code and IP are yours at delivery." },
    { icon: "data", title: "Data control", text: "Servers, databases and accounts are opened in your name." },
    { icon: "shield", title: "KVKK / GDPR", text: "Privacy notices, cookie consent and a data retention policy." },
  ],
};

export const faq: Localized<FaqItem[]> = {
  tr: [
    { q: "Bir proje ne kadar sürer?", a: "Kurumsal bir site genellikle 4–8 hafta, bir mobil uygulama 8–14 hafta sürer. Kesin takvimi keşif görüşmesinden sonra yazılı olarak paylaşırız." },
    { q: "Fiyatı nasıl belirliyorsunuz?", a: "Kapsamı birlikte netleştirir, sabit fiyatlı bir teklif göndeririz. Saatlik ücret ya da sürpriz ek fatura yok; kapsam değişirse önce yazılı onay alırız." },
    { q: "Projede kimlerle çalışacağım?", a: "Tasarımı ve kodu yapan kişilerle doğrudan. Arada hesap yöneticisi yok; ortak bir WhatsApp ya da Slack kanalı açarız." },
    { q: "Kaç revizyon hakkım var?", a: "Her tasarım aşamasında 2 tur revizyon teklife dahildir. Ek turlar önceden fiyatlandırılır." },
    { q: "Lansmandan sonra ne oluyor?", a: "30 gün boyunca hataları ücretsiz düzeltiriz. Sonrasında isteğe bağlı aylık bakım paketiyle güncelleme, yedekleme ve küçük geliştirmeleri üstleniriz." },
    { q: "Mevcut sitemizi yenileyebilir misiniz?", a: "Evet. Önce mevcut sitenin hız, SEO ve içerik analizini yapar, neyin korunup neyin yenileneceğini birlikte belirleriz." },
  ],
  en: [
    { q: "How long does a project take?", a: "A corporate website usually takes 4–8 weeks, a mobile app 8–14 weeks. We share the exact timeline in writing after the discovery call." },
    { q: "How do you set the price?", a: "We define the scope together and send a fixed-price quote. No hourly billing or surprise invoices; if the scope changes, we get your written approval first." },
    { q: "Who will I work with?", a: "Directly with the people designing and building it. No account managers in between — we open a shared WhatsApp or Slack channel." },
    { q: "How many revisions do I get?", a: "Two rounds of revisions are included at every design stage. Extra rounds are priced up front." },
    { q: "What happens after launch?", a: "We fix bugs for free for 30 days. After that, an optional monthly maintenance plan covers updates, backups and small improvements." },
    { q: "Can you redesign our current site?", a: "Yes. We start with a speed, SEO and content audit of your current site and decide together what to keep and what to rebuild." },
  ],
};

export const pick = <T,>(value: Localized<T>, locale: Locale) => value[locale];
