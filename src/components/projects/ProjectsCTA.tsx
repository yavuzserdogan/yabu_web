'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { contentTheme } from '@/config/content-theme';

export function ProjectsCTA() {
  const t = contentTheme;
  return (
    <section className={`${t.section.padding} ${t.section.bg.slate} text-center`}>
      <h2 className={`${t.typography.sectionTitle} ${t.colors.text.primary} mb-6`}>
        Bir Sonraki Proje Sizin mi?
      </h2>
      <Link href="/contact" className={t.ctaButton}>
        Projenizi Başlatalım
        <ArrowRight size={20} />
      </Link>
    </section>
  );
}
