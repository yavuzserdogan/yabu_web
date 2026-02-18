"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { motion } from "framer-motion";
import { mainNavigation } from "@/config/navigation";
import { useTranslations } from "next-intl"; // Ekledik

export function DesktopNav({ isScrolled }: { isScrolled: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('Navigation'); // Ekledik

  return (
    <nav className="flex items-center gap-4 lg:gap-8">
      {mainNavigation.map((item) => {
        const isActive = pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => router.push(item.path)}
            className={`relative text-xs lg:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              isScrolled 
                ? (isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600")
                : (isActive ? "text-white" : "text-white/70 hover:text-white")
            }`}
          >
            {t(item.id)}
            
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isScrolled ? "bg-blue-600" : "bg-cyan-400"}`}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}