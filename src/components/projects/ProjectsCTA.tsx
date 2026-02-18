"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight } from 'lucide-react';
import { contentTheme } from '@/config/content-theme';

export function ProjectsCTA() {
  const theme = contentTheme;
  const t = useTranslations('ProjectsPage.cta');

  return (
    <section className={`${theme.section.padding} ${theme.section.bg.slate} text-center px-4`}>
      <h2 className={`${theme.typography.sectionTitle} text-2xl md:text-4xl ${theme.colors.text.primary} mb-6`}>
        {t('title')}
      </h2>
      <Link 
        href="/contact" 
        className={`${theme.ctaButton} inline-flex items-center gap-2 justify-center w-full sm:w-auto px-8 py-4`}
      >
        {t('button')}
        <ArrowRight size={20} />
      </Link>
    </section>
  );
}