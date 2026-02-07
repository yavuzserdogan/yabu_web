"use client";

import { useRouter } from "next/navigation";

export function HeaderLogo({ isScrolled }: { isScrolled: boolean }) {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/")} className="flex items-center gap-1 group cursor-pointer">
      <span className={`text-xl font-black tracking-tighter transition-colors duration-300 ${
        isScrolled ? "text-slate-900" : "text-white"
      }`}>
        YA<span className={isScrolled ? "text-slate-700" : "text-white/90"}>BU</span>
      </span>
      <span className={`text-xl font-black tracking-tighter transition-all duration-300 ${
        isScrolled ? "text-blue-600" : "bg-linear-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
      }`}>
        DIGITAL
      </span>
    </button>
  );
}