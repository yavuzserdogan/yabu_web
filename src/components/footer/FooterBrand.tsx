"use client";

import { useRouter } from "@/i18n/routing"; // Kendi routing'imiz
import { siteConfig } from "@/config/site";
import { Sparkles, Linkedin, Twitter, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";

const iconMap = {
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

export function FooterBrand() {
  const router = useRouter();
  const t = useTranslations('Footer');

  return (
    <div className="space-y-6">
      <button
        onClick={() => router.push("/")}
        className="flex items-center gap-3 group cursor-pointer"
      >
        <div className="h-10 w-10 rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
          <Sparkles className="h-6 w-6 text-white" />
        </div>
        <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase italic">
          Sybor <span className="text-blue-600">DIGITAL</span>
        </span>
      </button>

      <p className="text-slate-200/80 text-base md:text-lg leading-relaxed font-light max-w-sm">
        {t('description')}
      </p>

      <div className="flex gap-4 pt-2">
        {siteConfig.socials.map((social, i) => {
          const Icon = iconMap[social.type as keyof typeof iconMap];
          return (
            <a
              key={i}
              href={social.href}
              target="_blank"          
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-300 text-slate-300"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </div>
  );
}