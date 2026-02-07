"use client";

import { useEffect, useState, useCallback } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { HeaderLogo } from "./HeaderLogo";
import { DesktopNav } from "./DesktopNav";
import { HeaderCTA } from "./HeaderCTA";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    // window.scrollY en güvenilir yöntemdir
    // 80px'den fazla kaydırıldıysa veya Hero yoksa direkt beyaz mod
    const heroElement = document.getElementById("hero-section");
    
    if (!heroElement) {
      setIsScrolled(true);
      return;
    }

    // Hero'nun yüksekliğini al (Genelde 100vh yani ekran boyutu kadar)
    const heroHeight = heroElement.offsetHeight;
    
    // Eğer scroll miktarı, hero yüksekliğinden (header payı düşülmüş hali) 
    // fazlaysa beyaz moda geç
    if (window.scrollY > (heroHeight - 100)) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    // Sayfa yüklendiğinde bir mikro saniye sonra kontrol et (DOM'un hazır olması için)
    const timer = setTimeout(() => {
      handleScroll();
    }, 10);

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Sayfa içi navigasyon (link değişimleri) için ek dinleyici
    window.addEventListener("popstate", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-100 mx-auto max-w-7xl px-6 lg:px-8 pt-6 pointer-events-none"
    >
      <div 
        className={`flex items-center justify-between rounded-2xl transition-all duration-500 px-6 py-4 pointer-events-auto border ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-xl shadow-slate-200/50" 
            : "bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl shadow-black/20"
        }`}
      >
        <div className="flex items-center gap-2">
          <div className={`h-8 w-8 rounded-lg flex items-center justify-center transition-all duration-500 shadow-sm ${
            isScrolled ? "bg-blue-600 text-white" : "bg-linear-to-br from-cyan-400 to-blue-600 text-white"
          }`}>
            <Sparkles className="h-5 w-5" />
          </div>
          <HeaderLogo isScrolled={isScrolled} />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <DesktopNav isScrolled={isScrolled} />
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <HeaderCTA isScrolled={isScrolled} />
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className={`md:hidden p-2 transition-colors duration-300 rounded-lg hover:bg-black/5 ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileNav open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>
    </motion.nav>
  );
}