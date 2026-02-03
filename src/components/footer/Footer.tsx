import { FooterBrand } from "./FooterBrand";
import { FooterLinks } from "./FooterLinks";
import { FooterContact } from "./FooterContact";

export function Footer() {
  return (
    <footer className="bg-linear-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <FooterBrand />
          <FooterLinks />
          <FooterContact />
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 text-sm text-slate-400">
          © {new Date().getFullYear()} YaBu Digital. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
