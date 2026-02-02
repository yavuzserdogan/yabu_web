"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { mainNavigation } from "@/config/navigation";

export function DesktopNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="hidden md:flex items-center gap-8">
      {mainNavigation.map((item) => {
        const isActive = pathname === item.path;

        return (
          <button
            key={item.path}
            onClick={() => router.push(item.path)}
            className={`relative text-sm font-medium transition-colors cursor-pointer ${
              isActive
                ? "text-slate-900"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {item.name}

            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
