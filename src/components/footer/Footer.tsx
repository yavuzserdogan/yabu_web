import { FooterBrand } from "./FooterBrand";
import { FooterLinks } from "./FooterLinks";
import { FooterContact } from "./FooterContact";

export function Footer() {
  return (
    <footer className="relative bg-[#155dfc] text-white overflow-hidden border-t border-white/5">
      {/* Üst Kısımda Çok Hafif Bir Işık Sızması (Bölümü ayırmak için) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
          <div className="md:col-span-1">
            <FooterBrand />
          </div>
          
          <FooterLinks />
          <FooterContact />
        </div>

        {/* Alt Bilgi Alanı */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} YaBu Digital. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>

      {/* Sağ Köşede Çok Hafif Sabit Bir Parlama (Zifiri karanlığı kırmak için) */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600/5 blur-[100px] pointer-events-none" />
    </footer>
  );
}