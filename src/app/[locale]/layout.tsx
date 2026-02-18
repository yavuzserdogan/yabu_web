import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Toaster } from "sonner";
import Script from "next/script";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sybordigital.com"),
  title: {
    default: "Sybor Digital | Butik Dijital Çözümler",
    template: "%s | Sybor Digital",
  },
  description: "Markanızı geleceğe taşıyoruz. Kurumsal düzeyde yazılım mühendisliği, butik tasarım ve ölçeklenebilir web çözümleri.",
  alternates: {
    canonical: "https://sybordigital.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://sybordigital.com",
    siteName: "Sybor Digital",
    title: "Sybor Digital | Yeni Nesil Yazılım Çözümleri",
    description: "Markanızı geleceğe taşıyoruz. Kurumsal düzeyde yazılım mühendisliği ve butik tasarım.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sybor Digital Kurumsal",
      },
    ],
  },
};

export default async function RootLayout({ 
  children,
  params
}: { 
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Hata düzeltildi: 'as any' yerine routing.locales içindeki tiplerden biri olduğu belirtildi
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-white antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script>

          <Header />
          <main>{children}</main>
          <Toaster
            position="bottom-center"
            expand={false}
            richColors
            duration={4000}
          />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}