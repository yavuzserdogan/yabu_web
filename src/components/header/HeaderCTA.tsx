"use client";

import { useRouter } from "next/navigation";

export function HeaderCTA() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/contact")}
      className="hidden md:block px-6 py-2.5 text-white rounded-lg 
        bg-linear-to-r from-blue-600 to-indigo-600
        shadow-lg shadow-blue-500/30
        hover:shadow-xl hover:shadow-blue-500/40
        hover:from-blue-700 hover:to-indigo-700
        transition-all duration-300 hover:scale-105
        cursor-pointer
        "
    >
      İletişime Geç
    </button>
  );
}
