import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Toaster } from "sonner";
import Script from "next/script"; 

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Sybor Digital",
    template: "%s | Sybor Digital",
  },
  description: "Markanızı geleceğe taşıyoruz.",
  icons: {
    icon: "/favicon.ico",
  },

  verification: {
    google: `${process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}`
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-white antialiased`}>
        
        {/* --- GOOGLE ANALYTICS BAŞLANGIÇ --- */}
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
        {/* --- GOOGLE ANALYTICS BİTİŞ --- */}

        <Header />
        <main>{children}</main>
        <Toaster
          position="bottom-center"
          expand={false}
          richColors
          duration={4000}
        />
        <Footer />
      </body>
    </html>
  );
}