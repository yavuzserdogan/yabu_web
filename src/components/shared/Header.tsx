"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetler", path: "/services" },
    { name: "Portfolyo", path: "/portfolio" },
    { name: "Hakkımda", path: "/about" },
    { name: "İletişim", path: "/contact" },
  ];

  /* Scroll background */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Mobile menu scroll lock */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const handleNavigate = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-slate-50/90 backdrop-blur-lg shadow-sm"
        : "bg-transparent"

        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <button
            onClick={() => handleNavigate("/")}
            className="flex items-center gap-2 group"
          >
            {/* Brand */}
            <span className="text-[26px] font-extrabold tracking-tight">
              <span className="text-[#1f2a11]">Ya</span>
              <span className="text-black">Bu</span>
            </span>

            {/* Digital */}
            <span className="text-[26px] font-extrabold tracking-tight">
              <span className="text-[#008BFF]">Digital</span>
            </span>
          </button>


          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`relative text-sm font-medium transition-colors ${isActive
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA */}
          {/* CTA */}
          <button
            onClick={() => handleNavigate("/contact")}
            className="hidden md:block px-6 py-2.5 text-white rounded-lg 
             bg-gradient-to-r from-blue-600 to-indigo-600
             shadow-lg shadow-blue-500/30
             hover:shadow-xl hover:shadow-blue-500/40
             hover:from-blue-700 hover:to-indigo-700
             transition-all duration-300 hover:scale-105"
          >
            İletişime Geç
          </button>



          {/* Mobile Button */}
          <button
            aria-label="Menüyü aç/kapat"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-200"
          >
            <nav className="px-4 py-4 space-y-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavigate(item.path)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${isActive
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                      }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
