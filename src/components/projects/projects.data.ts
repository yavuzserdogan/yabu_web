import { Project } from '@/types/project';

export const categories = ['all', 'web', 'mobile', 'uiux', 'social'] as const;


export const projects: Project[] = [
  {
    id: 1,
    title: 'project1',
    category: 'web',
    description: '',
    image: '/images/onlinedktterapi.png',
    tags: [
      'Kurumsal Web Sitesi',
      'Online Terapi Platformu',
      'Randevu & Ödeme Entegrasyonu',
    ],
    link: 'https://github.com/Buraktalhaa/onlinedktterapi'
  },
  {
    id: 2,
    title: 'project2',
    category: 'web',
    description: '',
    image: '/images/otrhoorigin.png',
    tags: [
      'E-Ticaret Platformu',
      'Ürün & Stok Yönetimi',
      'Çoklu Dil & Para Birimi',
    ],
    link: 'https://www.orthoorigin.com/tr'
  },
  {
    id: 3,
    title: 'project3',
    category: 'mobile',
    description: '',
    image: 'https://images.unsplash.com/photo-1707836916010-3c4ad261936c',
    tags: [
      'Mobil Fitness Uygulaması',
      'Antrenman & Beslenme Takibi',
      'Push Bildirim & Hedef Takibi',
    ],
    link: 'https://github.com/Buraktalhaa/onlinedktterapi'
  },
];