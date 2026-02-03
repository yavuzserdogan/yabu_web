'use client';

import { motion } from 'framer-motion';
import { HeroBackground } from "../ui/HeroBackground";

export function ProjectsHero() {
    return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden w-full">
            {/* Arka Plan */}
            <HeroBackground />

            <div className="relative z-10 max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Eyebrow Label */}
                    <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-lg"
                    >
                        Portfolyo
                    </motion.span>

                    <h1 className="text-6xl md:text-9xl font-extrabold text-slate-900 mb-8 tracking-tighter">
                        Seçkin <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">İşlerimiz</span>
                    </h1>

                    <div className="max-w-2xl mx-auto space-y-4">
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed"
                        >
                            Fikirleri koda, tasarımları yaşayan deneyimlere dönüştürüyoruz. 
                            Her proje, bizim için yeni bir başarı hikayesi.
                        </motion.p>
                    </div>
                </motion.div>
            </div>

            {/* Alt Geçiş Gradyanı - Bir sonraki section (ProjectsGrid) ile kusursuz birleşme */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-white via-white/80 to-transparent z-20 pointer-events-none" />

            {/* Minimal Scroll Indicator */}
            <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-400"
            >
                <div className="w-px h-12 bg-linear-to-b from-blue-600 to-transparent mx-auto" />
            </motion.div>
        </section>
    );
}