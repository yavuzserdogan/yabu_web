"use client";

import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Sparkles, Linkedin, Twitter, Instagram } from "lucide-react";

const iconMap = {
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

export function FooterBrand() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <button
        onClick={() => router.push("/")}
        className="flex items-center gap-3 group"
      >
        <div className="h-10 w-10 rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
          <Sparkles className="h-6 w-6 text-white" />
        </div>
        <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
          YaBu<span className="text-blue-500">.</span>
        </span>
      </button>

      <p className="text-slate-400 text-lg leading-relaxed font-light max-w-sm">
        Geleceğin teknolojilerini, bugünün estetiğiyle birleştiriyoruz. Butik, hızlı ve sonuç odaklı.
      </p>

      <div className="flex gap-4 pt-2">
        {siteConfig.socials.map((social, i) => {
          const Icon = iconMap[social.type as keyof typeof iconMap];
          return (
            <a
              key={i}
              href={social.href}
              target="_blank"           // Yeni sekmede açar
              rel="noopener noreferrer" // Güvenlik için şart
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-300 text-slate-400"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </div>
  );
}