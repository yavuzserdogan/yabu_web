"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { mainNavigation } from "@/config/navigation";

export function MobileNav({
  onClose,
  isScrolled,
}: {
  onClose: () => void;
  isScrolled: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 10, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      className="absolute left-0 right-0 top-full mt-2 md:hidden pointer-events-auto px-1"
    >
      <div 
        className={`rounded-2xl shadow-2xl overflow-hidden border transition-all duration-500 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md border-slate-200" 
            : "bg-white/10 backdrop-blur-xl border-white/20 shadow-black/20"
        }`}
      >
        <nav className="p-2 space-y-1">
          {mainNavigation.map((item) => {
            const isActive = pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => {
                  router.push(item.path);
                  onClose();
                }}
                className={`flex w-full items-center justify-between px-4 py-4 rounded-xl text-sm font-bold transition-all ${
                  isActive
                    ? (isScrolled ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-white text-blue-600 shadow-lg shadow-white/20")
                    : (isScrolled ? "text-slate-600 hover:bg-slate-50" : "text-white/80 hover:bg-white/10")
                }`}
              >
                {item.name}
                {isActive && (
                  <div className={`h-1.5 w-1.5 rounded-full ${isScrolled ? "bg-white" : "bg-blue-600"}`} />
                )}
              </button>
            );
          })}
        </nav>
        
        {/* Mobilde İletişim Butonu */}
        <div className={`p-2 sm:hidden border-t ${isScrolled ? "border-slate-100" : "border-white/10"}`}>
           <button 
            onClick={() => { router.push("/contact"); onClose(); }}
            className={`w-full py-4 rounded-xl font-bold text-sm transition-all shadow-md ${
              isScrolled 
                ? "bg-blue-600 text-white shadow-blue-100" 
                : "bg-white/10 backdrop-blur-md border border-white/30 text-white shadow-black/10"
            }`}
           >
            İletişime Geç
           </button>
        </div>
      </div>
    </motion.div>
  );
}