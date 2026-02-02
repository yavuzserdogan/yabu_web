'use client';

import { motion } from 'motion/react';

export function ProjectsHero() {
    return (
        <section className="py-12 md:py-20 px-4 bg-linear-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                        Projelerimiz
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600">
                        Müşterilerimiz için hayata geçirdiğimiz başarılı projeler.
                    </p>
                    <p className="text-lg md:text-xl text-slate-600">
                        Her biri özenle tasarlanmış, kullanıcı odaklı çözümler.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
