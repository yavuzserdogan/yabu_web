"use client";

import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import { SocialLink } from "./SocialLink";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const iconMap = {
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};


export function FooterBrand() {
  const router = useRouter();

  return (
    <div className="md:col-span-2">
      <button
        onClick={() => router.push("/")}
        className="flex items-center gap-2 mb-4"
      >
        <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
          <span className="font-bold text-xl">YaBu</span>
        </div>
        <span className="font-semibold">{siteConfig.name}</span>
      </button>

      <p className="text-slate-400 text-sm max-w-md mb-6">
        Butik dijital stüdyo olarak işletmenize özel, yüksek kaliteli web ve
        mobil çözümler sunuyoruz.
      </p>

      <div className="flex gap-4">
        {siteConfig.socials.map((social, i) => {
          const Icon = iconMap[social.type];
          return (
            <SocialLink key={i} href={social.href}>
              <Icon size={20} />
            </SocialLink>
          );
        })}
      </div>
    </div>
  );
}
