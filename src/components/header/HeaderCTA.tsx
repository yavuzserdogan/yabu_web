"use client";

import { useRouter } from "next/navigation";

export function HeaderCTA({ isScrolled }: { isScrolled: boolean }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/contact")}
      className={`px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 cursor-pointer shadow-md ${
        isScrolled 
          ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200" 
          : "bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 shadow-black/10"
      }`}
    >
      İletişime Geç
    </button>
  );
}