import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // Desteklenen diller
  locales: ['tr', 'en'],

  // Varsayılan dil: TR kökte, EN /en altında
  defaultLocale: 'tr',
  localePrefix: 'as-needed',

  // İç yol (klasör adı) → dile göre görünen URL
  pathnames: {
    '/': '/',
    '/isler': { tr: '/isler', en: '/work' },
    '/isler/[slug]': { tr: '/isler/[slug]', en: '/work/[slug]' },
    '/hizmetler/[slug]': { tr: '/hizmetler/[slug]', en: '/services/[slug]' },
    '/iletisim': { tr: '/iletisim', en: '/contact' },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathname = keyof typeof routing.pathnames;

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
