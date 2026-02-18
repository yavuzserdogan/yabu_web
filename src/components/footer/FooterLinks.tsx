"use client";

import { Link } from "@/i18n/routing"; // i18n Link bileşeni
import { mainNavigation } from "@/config/navigation"; // Navigasyon dizimiz
import { useTranslations } from "next-intl";

export function FooterLinks() {
  const t_footer = useTranslations('Footer');
  const t_nav = useTranslations('Navigation');

  return (
    <div className="flex flex-col">
      <h4 className="font-semibold mb-5 md:mb-6 text-white text-sm uppercase tracking-wider">
        {t_footer('quickLinks')}
      </h4>
      <ul className="space-y-4">
        {mainNavigation.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              scroll={true}
              className="text-slate-200/70 hover:text-white text-sm transition-colors duration-200 block"
            >
              {t_nav(link.id)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}