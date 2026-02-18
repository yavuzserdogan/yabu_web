export const mainNavigation = [
  { id: 'home', name: 'Ana Sayfa', path: '/' },
  { id: 'services', name: 'Hizmetler', path: '/services' },
  { id: 'projects', name: 'Projelerimiz', path: '/projects' },
  { id: 'about', name: 'Hakkımızda', path: '/about' },
  { id: 'contact', name: 'İletişim', path: '/contact' },
];

export type NavItem = (typeof mainNavigation)[number];
