export const mainNavigation = [
  { id: 'home', name: 'Ana Sayfa', path: '/' },
  { id: 'about', name: 'Hakkımızda', path: '/about' },
  { id: 'services', name: 'Hizmetler', path: '/services' },
  { id: 'projects', name: 'Projeler', path: '/projects' },
  { id: 'contact', name: 'İletişim', path: '/contact' },
];

export type NavItem = (typeof mainNavigation)[number];
