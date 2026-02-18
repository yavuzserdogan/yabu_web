import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // Desteklenen diller
  locales: ['en', 'tr'],
  
  // Varsayılan dil
  defaultLocale: 'tr'
});

// Yeni versiyonda bu fonksiyon createNavigation oldu
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);