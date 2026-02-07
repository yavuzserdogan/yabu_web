'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Project } from '@/types/project';
import Image from 'next/image';
import { contentTheme } from '@/config/content-theme';

interface Props {
    projects: Project[];
}

export function ProjectsGrid({ projects }: Props) {
    const t = contentTheme;
    return (
        <section className={`py-12 md:py-20 px-4`}>
            <div className={t.section.container}>
                <AnimatePresence mode="wait">
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div
                                    className={`${t.card.bg.white} rounded-2xl overflow-hidden ${t.card.base} hover:shadow-xl transition`}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={800}
                                        height={600}
                                        className="aspect-4/3 w-full object-cover group-hover:scale-110 transition"
                                    />
                                    <div className={t.card.padding.md}>
                                        <h3 className={`${t.typography.cardTitle} ${t.colors.text.primary} mb-2`}>
                                            {project.title}
                                        </h3>
                                        <p className={`${t.typography.body} mb-4`}>
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags?.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs px-3 py-1 bg-slate-100 rounded-full"
                                                >
                                                    {tag}
                                                </span>
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
