/**
 * İçerik Sayfaları Tema Konfigürasyonu
 *
 * Hero, Header ve Footer HARİÇ tüm sayfa bölümlerinde kullanılacak
 * merkezi tasarım token'ları. Tek bir yerden yönetim sağlar.
 */

export const contentTheme = {
  // ─── Typography ─────────────────────────────────────────────────────
  typography: {
    sectionTitle: "text-3xl md:text-5xl font-bold tracking-tight",
    sectionSubtitle: "text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed",
    cardTitle: "text-lg font-semibold",
    cardTitleLarge: "text-xl font-bold",
    cardTitleXLarge: "text-2xl md:text-3xl font-bold tracking-tight",
    body: "text-slate-600 text-sm leading-relaxed",
    bodyLarge: "text-slate-600 text-base leading-relaxed",
    label: "text-xs font-semibold uppercase tracking-wider text-slate-500",
  },

  // ─── Renkler ────────────────────────────────────────────────────────
  colors: {
    text: {
      primary: "text-slate-900",
      secondary: "text-slate-600",
      muted: "text-slate-500",
    },
    icon: {
      primary: "text-blue-600",
      bg: "bg-blue-600",
      bgGradient: "bg-gradient-to-br from-blue-500 to-indigo-500",
      bgLight: "bg-blue-50",
    },
    accent: {
      primary: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      borderHover: "hover:border-blue-300",
    },
  },

  // ─── Kartlar ────────────────────────────────────────────────────────
  card: {
    base: "rounded-2xl border border-slate-200 transition-all duration-300",
    hover: "hover:border-blue-300 hover:shadow-xl",
    padding: {
      sm: "p-5",
      md: "p-6",
      lg: "p-8",
    },
    bg: {
      white: "bg-white",
      light: "bg-white/60 backdrop-blur-sm",
      gradient: "bg-gradient-to-br from-white to-slate-50",
    },
  },

  // ─── İkon Kutuları ──────────────────────────────────────────────────
  iconBox: {
    sm: "w-10 h-10 rounded-xl flex items-center justify-center",
    md: "w-12 h-12 rounded-xl flex items-center justify-center",
    lg: "w-14 h-14 rounded-xl flex items-center justify-center",
    xl: "w-16 h-16 rounded-2xl flex items-center justify-center",
    gradient: "bg-gradient-to-br from-blue-500 to-indigo-500",
    solid: "bg-blue-600",
    shadow: "shadow-lg shadow-blue-200",
  },

  // ─── Badge / Chip / Tag ─────────────────────────────────────────────
  badge: {
    base: "inline-block px-3 py-1 text-xs font-semibold rounded-full",
    primary: "text-blue-600 bg-blue-50",
    tag: "px-4 py-2 rounded-xl text-sm font-semibold border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-all",
  },

  // ─── Section Label (küçük başlık) ───────────────────────────────────
  sectionLabel: "text-sm font-bold uppercase tracking-[0.3em] text-slate-400",

  // ─── Bölüm (Section) ────────────────────────────────────────────────
  section: {
    padding: "py-20 px-4",
    paddingLarge: "py-24 px-4",
    bg: {
      white: "bg-white",
      slate: "bg-slate-50/50",
      gradient: "bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50",
    },
    container: "max-w-7xl mx-auto",
    header: {
      margin: "mb-16",
      marginLarge: "mb-20",
    },
  },

  // ─── Grid ───────────────────────────────────────────────────────────
  grid: {
    services: "grid md:grid-cols-4 gap-6",
    steps: "grid md:grid-cols-4 gap-6",
    projects: "grid md:grid-cols-3 gap-6",
    values: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
    stats: "grid grid-cols-2 lg:grid-cols-4 gap-8",
    process: "grid md:grid-cols-2 lg:grid-cols-4 gap-12",
    whyUs: "grid md:grid-cols-2 gap-8",
  },

  // ─── Form & Input (Contact form için) ───────────────────────────────
  form: {
    input:
      "h-11 pl-10 bg-white border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 rounded-xl transition-all",
    textarea:
      "min-h-32 pl-10 bg-white border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 rounded-xl resize-none transition-all",
    label: "text-slate-800 font-semibold text-sm",
    button:
      "bg-slate-900 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300",
  },

  // ─── Filter (Projects) ──────────────────────────────────────────────
  filter: {
    section: "py-8 bg-white sticky top-20 z-40 border-b border-slate-200",
    button: "px-6 py-2.5 rounded-full font-medium transition-all",
    buttonActive: "bg-slate-900 text-white",
    buttonInactive: "bg-slate-100 text-slate-600 hover:bg-slate-200",
  },

  // ─── CTA Buton ──────────────────────────────────────────────────────
  ctaButton:
    "inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-blue-600 transition-all duration-300",

  // ─── Accordion / FAQ ────────────────────────────────────────────────
  accordion: {
    item:
      "border-none bg-white rounded-2xl px-6 shadow-sm hover:shadow-md transition-all duration-300 [&[data-state=open]]:shadow-lg [&[data-state=open]]:ring-1 [&[data-state=open]]:ring-blue-100",
    trigger: "py-6 group",
    title: "text-left font-semibold text-lg group-hover:text-blue-600 transition-colors",
    content: "text-slate-600 text-base leading-relaxed pb-6",
  },

  // ─── Contact Card (bilgi kartları) ───────────────────────────────────
  contactCard: {
    base: "flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-600 hover:shadow-md transition-all group",
    icon: "w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors",
    iconSvg: "text-blue-600 group-hover:text-white transition-colors",
    label: "text-xs text-slate-500 font-medium",
    value: "text-sm font-semibold text-slate-900",
  },

  // ─── Liste (Check işaretli) ─────────────────────────────────────────
  checklist: {
    item: "flex items-center gap-3 text-slate-700 font-medium",
    icon: "w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors",
    iconSvg: "text-blue-600 group-hover:text-white transition-colors",
  },
} as const;

// Yardımcı: className birleştirme için kullanılacak
export type ContentTheme = typeof contentTheme;
