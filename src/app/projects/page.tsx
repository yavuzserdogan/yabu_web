import ProjectsContent from '@/components/projects/ProjectsContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projelerimiz",
  description: "Kurumsal düzeyde yazılım mühendisliği, butik tasarım ve ölçeklenebilir web/mobil çözümler sunuyoruz. Geleceği birlikte inşa edelim.",
};

export default function Page() {
  return <ProjectsContent />;
}