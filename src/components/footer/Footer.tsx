import { FooterBrand } from "./FooterBrand";
import { FooterLinks } from "./FooterLinks";
import { FooterContact } from "./FooterContact";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#050a1f] border-t border-white/10" id="footer">

      {/* 1. KATMAN: Arka Plan Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-indigo-700 to-cyan-600 opacity-90" />
        <div className="absolute inset-0 bg-linear-to-tl from-cyan-500/30 via-blue-700/40 to-indigo-900/60" />
      </div>

      {/* 2. KATMAN: Diagonal Şekiller */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -right-1/4 top-[-20%] w-[120%] h-[120%] bg-linear-to-br from-blue-500/20 via-indigo-600/20 to-cyan-500/20"
          style={{ clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
        />
        <div
          className="absolute -left-1/4 bottom-[-30%] w-[120%] h-[120%] bg-linear-to-tr from-cyan-500/10 via-blue-600/10 to-indigo-700/10"
          style={{ clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 20% 100%)" }}
        />
      </div>

      {/* 3. KATMAN: İçerik */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 text-white">

          {/* Marka Alanı */}
          <div className="md:col-span-5 lg:col-span-4">
            <FooterBrand />
          </div>

          {/* Linkler ve İletişim Alanı - Mobilde tek sütun, tablette ve üstünde yan yana */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8">
            <FooterLinks />
            <FooterContact />
          </div>
        </div>

        {/* Alt Bilgi Alanı */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex items-center gap-2 text-white/60 hover:text-white transition-colors cursor-default">
            <Sparkles size={16} className="text-cyan-300" />
            <p className="text-sm font-light tracking-wide text-center">
              © {new Date().getFullYear()} Sybor Digital. Türkiye&apos;den dünyaya.
            </p>
          </div>
        </div>
      </div>

      {/* Hero'daki Alt Gölgelendirme */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black/20 to-transparent z-20 pointer-events-none" />
    </footer>
  );
}