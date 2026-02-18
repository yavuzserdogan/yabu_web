"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

export function LanguageSwitcher({ isScrolled }: { isScrolled: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const toggleLanguage = () => {
    const nextLocale = locale === "tr" ? "en" : "tr";
    
    // ESLint hatasını spesifik olarak bu satır için devre dışı bırakıyoruz
    // Çünkü next-intl'in router.replace metodu çok katı tip beklerken 
    // useParams() dinamik bir obje döner.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    router.replace({ pathname, params } as any, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 border cursor-pointer hover:scale-105 ${
        isScrolled
          ? "border-slate-200 text-slate-600 hover:bg-slate-50"
          : "border-white/20 text-white hover:bg-white/10"
      }`}
    >
      <span className={locale === "tr" ? "text-blue-500" : ""}>TR</span>
      <span className={isScrolled ? "text-slate-300" : "text-white/30"}>|</span>
      <span className={locale === "en" ? "text-blue-500" : ""}>EN</span>
    </button>
  );
}