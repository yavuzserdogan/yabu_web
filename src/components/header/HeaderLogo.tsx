"use client";

import { useRouter } from "next/navigation";

export function HeaderLogo() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="flex items-center gap-2 group"
    >
      <span className="text-[26px] font-extrabold tracking-tight">
        <span className="text-[#1f2a11]">Ya</span>
        <span className="text-black">Bu</span>
      </span>

      <span className="text-[26px] font-extrabold tracking-tight">
        <span className="text-[#008BFF]">Digital</span>
      </span>
    </button>
  );
}
