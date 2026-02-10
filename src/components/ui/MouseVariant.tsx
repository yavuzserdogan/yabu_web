import { motion } from "framer-motion";

// --- VARIANT 1: MODERN MOUSE ---
export const MouseVariant = () => (
  <div className="flex flex-col items-center gap-3">
    <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Kaydır</span>
    <motion.div className="w-6.5 h-10.5 border-2 border-white/20 rounded-full flex justify-center p-1.5">
      <motion.div 
        animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="w-1 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" 
      />
    </motion.div>
  </div>
);