'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { contentTheme } from '@/config/content-theme';

export function ProjectsCTA() {
  const t = contentTheme;
  return (
    <section className={`${t.section.padding} ${t.section.bg.slate} text-center px-4`}>
      <h2 className={`${t.typography.sectionTitle} text-2xl md:text-4xl ${t.colors.text.primary} mb-6`}>
        Bir Sonraki Proje Sizin mi?
      </h2>
      <Link href="/contact" className={`${t.ctaButton} inline-flex items-center gap-2 justify-center w-full sm:w-auto px-8 py-4`}>
        Projenizi Başlatalım
        <ArrowRight size={20} />
      </Link>
    </section>
  );
}