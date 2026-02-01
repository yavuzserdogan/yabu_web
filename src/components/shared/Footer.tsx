"use client";

import { Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react";
import { useRouter } from "next/navigation";

export function Footer() {
    const router = useRouter();

    const quickLinks = [
        { label: "Ana Sayfa", path: "/" },
        { label: "Hizmetler", path: "/services" },
        { label: "Portfolyo", path: "/portfolio" },
        { label: "Hakkımda", path: "/about" },
        { label: "İletişim", path: "/contact" },
    ];

    const handleNavigate = (path: string) => {
        router.push(path);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-linear-to-b from-slate-900 to-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <button
                            onClick={() => handleNavigate("/")}
                            className="flex items-center gap-2 mb-4"
                        >
                            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <span className="text-white font-bold text-xl">YaBu </span>
                            </div>
                            <span className="font-semibold text-white">Digital</span>
                        </button>

                        <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md">
                            Butik dijital stüdyo olarak işletmenize özel, yüksek kaliteli web ve
                            mobil çözümler sunuyoruz. Küçük ekip, büyük işler.
                        </p>

                        <div className="flex gap-4">
                            <SocialLink href="https://linkedin.com">
                                <Linkedin size={20} />
                            </SocialLink>
                            <SocialLink href="https://twitter.com">
                                <Twitter size={20} />
                            </SocialLink>
                            <SocialLink href="https://instagram.com">
                                <Instagram size={20} />
                            </SocialLink>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Hızlı Erişim</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <button
                                        onClick={() => handleNavigate(link.path)}
                                        className="text-slate-400 hover:text-white transition-colors text-sm"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">İletişim</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-slate-400 text-sm">
                                <Mail size={16} />
                                <a
                                    href="mailto:hello@digitalstudio.com"
                                    className="hover:text-white transition-colors"
                                >
                                    hello@digitalstudio.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 text-sm">
                                <Phone size={16} />
                                <a
                                    href="tel:+905551234567"
                                    className="hover:text-white transition-colors"
                                >
                                    +90 555 123 45 67
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-slate-800 relative text-center md:text-left">
                    <span className="absolute top-0 left-0 h-px w-32 bg-blue-600" />
                    <p className="text-slate-400 text-sm">
                        © {new Date().getFullYear()} Digital Studio. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </footer >
    );
}

/* ----------------- */
/* Social Link Atom  */
/* ----------------- */
function SocialLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sosyal medya"
            className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
        >
            {children}
        </a>
    );
}
