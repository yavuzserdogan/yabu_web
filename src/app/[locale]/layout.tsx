import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Toaster } from "sonner";
import Script from "next/script";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: new URL("https://sybordigital.com"),
    title: {
      default: t('title'),
      template: `%s | ${t('siteName')}`,
    },
    description: t('description'),
    alternates: {
      canonical: `https://sybordigital.com/${locale}`,
    },
    appleWebApp: {
      title: "Sybor",
    },
    verification: {
      google: `${process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}`
    },
    openGraph: {
      type: "website",
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      url: `https://sybordigital.com/${locale}`,
      siteName: t('siteName'),
      title: t('ogTitle'),
      description: t('description'),
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: t('siteName'),
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;


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