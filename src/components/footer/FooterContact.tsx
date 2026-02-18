"use client";
import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useTranslations } from "next-intl";

export function FooterContact() {
  const t = useTranslations('Footer');
  return (
    <div className="flex flex-col">
      <h4 className="font-semibold mb-5 md:mb-6 text-white text-sm uppercase tracking-wider">
        {t('contact')}
      </h4>
      <ul className="space-y-4 text-slate-200/70 text-sm">
        <li className="flex items-center gap-3">
          <Mail size={16} className="text-blue-400 shrink-0" />
          <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors truncate">
            {siteConfig.email}
          </a>
        </li>
        <li className="flex items-center gap-3">
          <Phone size={16} className="text-blue-400 shrink-0" />
          <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
            {siteConfig.phone}
          </a>
        </li>
        <li className="flex items-center gap-3">
          <Phone size={16} className="text-blue-400 shrink-0" />
          <a href={`tel:${siteConfig.phone2}`} className="hover:text-white transition-colors">
            {siteConfig.phone2}
          </a>
        </li>
      </ul>
    </div>
  );
}