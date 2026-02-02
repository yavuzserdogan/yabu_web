'use client';

import { useState } from 'react';
import { ProjectsHero } from '@/components/projects/ProjectsHero';
import { ProjectsFilter } from '@/components/projects/ProjectsFilter';
import { ProjectsGrid } from '@/components/projects/ProjectsGrid';
import { ProjectsCTA } from '@/components/projects/ProjectsCTA';
import { projects, categories } from '@/components/projects/projects.data';

export default function ProjectsPage() {
  const [active, setActive] = useState('Tümü');

  const filtered =
    active === 'Tümü'
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <ProjectsHero />
      <ProjectsFilter
        categories={categories}
        active={active}
        onChange={setActive}
      />
      <ProjectsGrid projects={filtered} />
      <ProjectsCTA />
    </>
  );
}
