"use client";

import { useRouter } from "@/i18n/routing";

export function HeaderLogo({ isScrolled }: { isScrolled: boolean }) {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push("/")} 
      className="flex items-center gap-1 group cursor-pointer"
    >
      <span className={`text-lg md:text-xl font-black tracking-tighter transition-colors duration-300 ${
        isScrolled ? "text-slate-900" : "text-white"
      }`}>
        SYBOR
      </span>
      <span className={`text-lg md:text-xl font-black tracking-tighter transition-all duration-300 ${
        isScrolled 
          ? "text-blue-600" 
          : "bg-linear-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent"
      }`}>
        DIGITAL
      </span>
    </button>
  );
}