import { Project } from '@/types/project';

export const categories = ['all', 'web', 'mobile', 'uiux', 'social'] as const;

export const techLogos: Record<string, string> = {
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'AI': 'https://api.iconify.design/simple-icons/openai.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'Sass': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'project1',
    category: 'web',   
    description: '',
    image: '/images/onlinedktterapi.png',
    tags: ['Next.js', 'Tailwind', 'TypeScript', 'AI'],
    link: 'https://github.com/Buraktalhaa/onlinedktterapi'
  },
  {
    id: 2,
    title: 'project2',
    category: 'web',
    description: '',
    image: 'https://images.unsplash.com/photo-1759884247173-3db27f7fafef',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/Buraktalhaa/onlinedktterapi'
  },
  {
    id: 3,
    title: 'project3',
    category: 'mobile',
    description: '',
    image: 'https://images.unsplash.com/photo-1707836916010-3c4ad261936c',
    tags: ['React Native', 'Firebase', 'AI'],
    link: 'https://github.com/Buraktalhaa/onlinedktterapi'
  },
];