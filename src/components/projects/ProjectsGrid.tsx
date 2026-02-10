'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types/project';
import Image from 'next/image';
import { contentTheme } from '@/config/content-theme';
import { techLogos } from '@/components/projects/projects.data';

interface Props {
    projects: Project[];
}

export function ProjectsGrid({ projects }: Props) {
    const t = contentTheme;

    return (
        <section className="py-12 md:py-20 px-4 scroll-mt-28" id="projects-section">
            <div className={t.section.container}>
                <AnimatePresence mode="popLayout">
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group h-full"
                            >
                                <div
                                    className={`${t.card.bg.white} rounded-2xl overflow-hidden ${t.card.base} hover:shadow-xl transition-all duration-300 h-full flex flex-col`}
                                >
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                    </div>

                                    <div className={`${t.card.padding.md} flex flex-col flex-grow`}>
                                        <h3 className={`${t.typography.cardTitle} ${t.colors.text.primary} mb-2 group-hover:text-blue-600 transition-colors`}>
                                            {project.title}
                                        </h3>

                                        <p className={`${t.typography.body} mb-6 line-clamp-3 flex-grow`}>
                                            {project.description}
                                        </p>

                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:gap-3 transition-all duration-300 group/link mb-4"
                                        >
                                            <span>Projeyi İncele</span>
                                            <svg
                                                className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </a>


                                        <div className="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                                            {project.tags?.map((tag) => (
                                                <div
                                                    key={tag}
                                                    className="group/tech relative"
                                                    title={tag}
                                                >
                                                    {/* Logo Container */}
                                                    <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 p-2 border border-gray-200 shadow-sm hover:shadow-md hover:scale-110 hover:border-blue-300 transition-all duration-300">
                                                        <Image
                                                            src={techLogos[tag] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg'}
                                                            alt={tag}
                                                            fill
                                                            className="object-contain p-0.5"
                                                            unoptimized
                                                        />
                                                    </div>

                                                    {/* Tooltip */}
                                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover/tech:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10 shadow-lg">
                                                        {tag}
                                                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
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