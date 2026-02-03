import { Project } from '@/types/project';

export const categories = ['Tümü', 'Web', 'Mobil', 'UI/UX', 'Sosyal Medya'] as const;

export const projects: Project[] = [
  {
    id: 1,
    title: 'Online DKT Terapi',
    category: 'Web',
    description: 'Dil ve konuşma terapistleri için özelleştirilmiş bir platform.',
    image: '/images/onlinedktterapi.png',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
    link: 'https://github.com/Buraktalhaa/onlinedktterapi'
  },
  {
    id: 2,
    title: 'E-Ticaret Platformu',
    category: 'Web',
    description: 'Modern ve kullanıcı dostu alışveriş deneyimi sunan kapsamlı e-ticaret çözümü.',
    image: 'https://images.unsplash.com/photo-1759884247173-3db27f7fafef',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 3,
    title: 'Fitness Mobil Uygulaması',
    category: 'Mobil',
    description: 'Kişiselleştirilmiş antrenman programları ve beslenme takibi uygulaması.',
    image: 'https://images.unsplash.com/photo-1707836916010-3c4ad261936c',
    tags: ['React Native', 'Firebase', 'AI'],
  },
];
