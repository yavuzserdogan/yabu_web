import { Project } from '@/types/project';

export const categories = ['all', 'web', 'mobile', 'uiux', 'social'] as const;


export const projects: Project[] = [
  {
    id: 1,
    title: 'project1',
    category: 'web',
    description: '',
    image: '/images/onlinedktterapi.png',
    link: 'https://onlinedktterapi.vercel.app'
  },
  {
    id: 2,
    title: 'project2',
    category: 'web',
    description: '',
    image: '/images/otrhoorigin.png',
    link: 'https://www.orthoorigin.com/tr'
  },
  {
    id: 3,
    title: 'project3',
    category: 'mobile',
    description: '',
    image: '/images/foodRoulette.png',
    link: 'https://github.com/Buraktalhaa/food-roulette'
  },
];