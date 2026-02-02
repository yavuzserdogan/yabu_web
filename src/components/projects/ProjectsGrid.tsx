'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Project } from '@/types/project';
import Image from 'next/image';

interface Props {
    projects: Project[];
}

export function ProjectsGrid({ projects }: Props) {
    return (
        <section className="py-12 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white rounded-2xl overflow-hidden border hover:shadow-xl transition">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={800}
                                        height={600}
                                        className="aspect-4/3 w-full object-cover group-hover:scale-110 transition"
                                    />

                                    <div className="p-6">
                                        <h3 className="font-semibold mb-2">{project.title}</h3>
                                        <p className="text-sm text-slate-600 mb-4">
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
