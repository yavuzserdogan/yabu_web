import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "YabuDigital | Modern Dijital Ajans",
    template: "%s | YabuDigital",
  },
  description: "Markanızı geleceğe taşıyoruz.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-white antialiased`}>
        <Header />
        {/* pt-24'ü sildik; sayfalar kendi boşluğunu yönetecek */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
