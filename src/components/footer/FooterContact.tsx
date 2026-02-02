import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FooterContact() {
  return (
    <div>
      <h4 className="font-semibold mb-4">İletişim</h4>
      <ul className="space-y-3 text-slate-400 text-sm">
        <li className="flex items-center gap-3">
          <Mail size={16} />
          <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
            {siteConfig.email}
          </a>
        </li>
        <li className="flex items-center gap-3">
          <Phone size={16} />
          <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
            {siteConfig.phone}
          </a>
        </li>
      </ul>
    </div>
  );
}
