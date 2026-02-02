"use client";

import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";

export function FooterLinks() {
  const router = useRouter();

  return (
    <div>
      <h4 className="font-semibold mb-4">Hızlı Erişim</h4>
      <ul className="space-y-3">
        {siteConfig.navigation.map((link) => (
          <li key={link.path}>
            <button
              onClick={() => router.push(link.path)}
              className="text-slate-400 hover:text-white text-sm cursor-pointer"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
