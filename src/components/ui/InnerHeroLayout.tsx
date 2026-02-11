"use client";

import { motion } from "framer-motion";
import ShinyText from "./ShinyText";
import { MouseVariant } from "./MouseVariant";
import { InnerHeroLayoutProps } from "@/types/innerHeroLayout";

export function InnerHeroLayout({ 
  title, 
  description, 
  id = "hero-section", 
  showScrollIndicator = true,
  children 
}: InnerHeroLayoutProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050a1f] flex items-center justify-center" id={id}>
      {/* Arka Plan Katmanları */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-indigo-600 to-cyan-500 opacity-90" />
        <div className="absolute inset-0 bg-linear-to-tl from-cyan-500/30 via-blue-700/40 to-indigo-900/60" />
      </div>

      {/* Diagonal Şekiller */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-1/4 top-[-20%] w-[120%] h-[120%] bg-linear-to-br from-blue-500/20 via-indigo-600/20 to-cyan-500/20" style={{ clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)" }} />
        <div className="absolute -left-1/4 bottom-[-30%] w-[120%] h-[120%] bg-linear-to-tr from-cyan-500/10 via-blue-600/10 to-indigo-700/10" style={{ clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 20% 100%)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center pt-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none">{title}</h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <ShinyText text={description} speed={5} className="text-xl md:text-2xl font-light" color="rgba(255, 255, 255, 0.7)" shineColor="#ffffff" />
          </div>

          {children}

          {/* Scroll İndikatörü */}
          {showScrollIndicator && (
            <div className="mt-20 flex items-end justify-center gap-16">
              <div className="flex flex-col items-center gap-2">
                <span className="text-[8px] text-white/20 uppercase"></span>
                <MouseVariant />
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/20 to-transparent z-20 pointer-events-none" />
    </section>
  );
}