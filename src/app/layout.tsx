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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-white text-slate-900 antialiased`}
      >
        {/* Global Header */}
        <Header />

        {/* Sayfa içeriği (Header fixed olduğu için padding-top veriyoruz) */}
        <main className="pt-24">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
