import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Script from "next/script";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Cursor } from "@/components/sy/Cursor";

// Inter Tight variable (OFL) — Design system font, self-hosted for zero CLS.
const interTight = localFont({
  src: "../../fonts/InterTight-Variable.woff2",
  weight: "100 900",
  variable: "--font-inter-tight",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t('title'),
      template: `%s | ${t('siteName')}`,
    },
    description: t('description'),
    appleWebApp: {
      title: "Sybor",
    },
    verification: {
      google: `${process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}`
    },
    openGraph: {
      type: "website",
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      siteName: t('siteName'),
      title: t('ogTitle'),
      description: t('description'),
      images: [
        {
          url: "/og-image.png",
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

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={interTight.variable}>
      <body id="top" className="sy-root font-sans antialiased">
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

          <SmoothScroll />
          <Cursor />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <Toaster position="bottom-center" expand={false} duration={4000} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
