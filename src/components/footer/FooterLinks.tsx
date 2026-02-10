"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

export function FooterLinks() {
  return (
    <div>
      <h4 className="font-semibold mb-4 text-white">Hızlı Erişim</h4>
      <ul className="space-y-3">
        {siteConfig.navigation.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              scroll={true}
              className="text-slate-400 hover:text-white text-sm transition-colors duration-200 block"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}