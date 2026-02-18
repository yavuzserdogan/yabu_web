'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types/project';
import Image from 'next/image';
import { contentTheme } from '@/config/content-theme';
import { techLogos } from '@/components/projects/projects.data';
import { useTranslations } from 'next-intl';

interface Props {
    projects: Project[];
}

export function ProjectsGrid({ projects }: Props) {
    const theme = contentTheme;
    const t = useTranslations('ProjectsPage.items');

    return (
        <section className="py-12 md:py-20 px-4 scroll-mt-28" id="projects-section">
            <div className={theme.section.container}>
                <AnimatePresence mode="popLayout">
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group h-full"
                            >
                                <div className={`${theme.card.bg.white} rounded-2xl overflow-hidden ${theme.card.base} hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-slate-100`}>
                                    
                                    <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={t(`${project.title}.title`)}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                    </div>

                                    <div className={`${theme.card.padding.md} flex flex-col grow p-5 md:p-6`}>
                                        <h3 className={`${theme.typography.cardTitle} text-lg md:text-xl ${theme.colors.text.primary} mb-2 group-hover:text-blue-600 transition-colors`}>
                                            {t(`${project.title}.title`)}
                                        </h3>

                                        <p className={`${theme.typography.body} text-sm md:text-base mb-6 line-clamp-3 grow`}>
                                            {t(`${project.title}.description`)}
                                        </p>

                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-all duration-300 group/link mb-6 w-fit"
                                        >
                                            <span>{t(`${project.title}.cta`)}</span>
                                            <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>

                                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-auto pt-4 border-t border-gray-100">
                                            {project.tags?.map((tag) => (
                                                <div key={tag} className="group/tech relative" title={tag}>
                                                    <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gray-50 p-1.5 border border-gray-100 shadow-sm transition-all duration-300">
                                                        <Image
                                                            src={techLogos[tag] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg'}
                                                            alt={tag}
                                                            fill
                                                            className="object-contain p-0.5"
                                                            unoptimized
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}