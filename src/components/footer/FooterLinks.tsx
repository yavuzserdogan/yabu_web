"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

export function FooterLinks() {
  return (
    <div className="flex flex-col">
      <h4 className="font-semibold mb-5 md:mb-6 text-white text-sm uppercase tracking-wider">Hızlı Erişim</h4>
      <ul className="space-y-4">
        {siteConfig.navigation.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              scroll={true}
              className="text-slate-200/70 hover:text-white text-sm transition-colors duration-200 block"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}