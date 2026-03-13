"use client";

import { useState, useRef } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { mainNavigation } from "@/config/navigation";
import { useTranslations } from "next-intl";
import { MegaMenu } from "./MegaMenu";

export function DesktopNav({ isScrolled }: { isScrolled: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Navigation");
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setMegaMenuOpen(false), 150);
  };

  return (
    <nav className="flex items-center gap-4 lg:gap-8">
      {mainNavigation.map((item) => {
        const isActive = pathname === item.path;
        const isServices = item.id === "services";

        if (isServices) {
          return (
            <div
              key={item.path}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`relative flex items-center gap-1 text-xs lg:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isScrolled
                    ? isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                    : isActive ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {t(item.id)}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    megaMenuOpen ? "rotate-180" : ""
                  }`}
                />
                {isActive && (
                  <motion.div
                    layoutId={`activeTab-${item.id}`}
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      isScrolled ? "bg-blue-600" : "bg-cyan-400"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <MegaMenu isOpen={megaMenuOpen} isScrolled={isScrolled} />
            </div>
          );
        }

        return (
          <button
            key={item.path}
            onClick={() => router.push(item.path)}
            className={`relative text-xs lg:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              isScrolled
                ? isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                : isActive ? "text-white" : "text-white/70 hover:text-white"
            }`}
          >
            {t(item.id)}
            {isActive && (
              <motion.div
                layoutId={`activeTab-${item.id}`}
                className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                  isScrolled ? "bg-blue-600" : "bg-cyan-400"
                }`}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}