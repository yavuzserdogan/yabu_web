import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

// Eski (v1) URL'ler → yeni Türkçe URL'ler. TR artık kökte, EN /en altında.
const legacyRedirects = [
  { source: '/:prefix(tr)?/projects', destination: '/isler' },
  { source: '/en/projects', destination: '/en/work' },
  { source: '/:prefix(tr)?/contact', destination: '/iletisim' },
  { source: '/:prefix(tr)?/about', destination: '/#studyo' },
  { source: '/en/about', destination: '/en#studio' },
  { source: '/:prefix(tr)?/services/:slug', destination: '/hizmetler/:slug' },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return legacyRedirects.map((r) => ({ ...r, permanent: true }));
  },
};

export default withNextIntl(nextConfig);
