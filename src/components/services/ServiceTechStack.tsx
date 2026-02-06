"use client";

import LogoLoop from './LogoLoop';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiFramer, SiSpringboot, SiPostgresql, SiNodedotjs 
} from 'react-icons/si';

const techLogos = [
  { node: <SiReact size={40} className="text-[#61DAFB]" />, title: "React" },
  { node: <SiNextdotjs size={40} className="text-black" />, title: "Next.js" },
  { node: <SiTypescript size={40} className="text-[#3178C6]" />, title: "TypeScript" },
  { node: <SiTailwindcss size={40} className="text-[#06B6D4]" />, title: "Tailwind CSS" },
  { node: <SiFramer size={40} className="text-black" />, title: "Framer Motion" },
  { node: <SiSpringboot size={40} className="text-[#6DB33F]" />, title: "Spring Boot" },
  { node: <SiNodedotjs size={40} className="text-[#339933]" />, title: "Node.js" },
  { node: <SiPostgresql size={40} className="text-[#4169E1]" />, title: "PostgreSQL" },
];

export function ServiceTechStack() {
  return (
    <section className="w-full py-20 bg-slate-50/50 border-y border-slate-100">
      <div className="container mx-auto px-4 mb-12 text-center">
        {/* Başlık gri kalabilir */}
        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em]">
          Kullandığımız Teknolojiler
        </h2>
      </div>

      <div className="relative h-20 w-full">
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={40}
          gap={80}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true} 
          // Arka plan rengin (bg-slate-50) ile uyumlu fade rengi
          fadeOutColor="rgb(248, 250, 252)" 
        />
      </div>
    </section>
  );
}