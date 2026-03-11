"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "@/i18n/routing";
import { mainNavigation, servicesNavigation } from "@/config/navigation";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";

type AppRouter = ReturnType<typeof useRouter>;
type PushParams = Parameters<AppRouter["push"]>[0];

export function MobileNav({ onClose, isScrolled }: { onClose: () => void; isScrolled: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Navigation");
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 10, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      className="absolute left-0 right-0 top-full mt-2 md:hidden pointer-events-auto px-1 z-50"
    >
      <div className={`rounded-2xl shadow-2xl overflow-hidden border transition-all duration-500 ${isScrolled
          ? "bg-white/95 backdrop-blur-md border-slate-200"
          : "bg-white/10 backdrop-blur-xl border-white/20"
        }`}>
        <nav className="p-2 space-y-1">
          {mainNavigation.map((item) => {
            const isActive = pathname === item.path;
            const isServices = item.id === "services";

            if (isServices) {
              return (
                <div key={item.path}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`flex w-full items-center justify-between px-4 py-4 rounded-xl text-sm font-bold transition-all ${isScrolled
                        ? "text-slate-600 hover:bg-slate-50"
                        : "text-white/80 hover:bg-white/10"
                      }`}
                  >
                    {t(item.id)}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: servicesOpen ? "auto" : 0, opacity: servicesOpen ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-2 pb-2 space-y-3">
                      {servicesNavigation.map((category) => (
                        <div key={category.id}>
                          <p className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${isScrolled ? "text-slate-400" : "text-white/40"
                            }`}>
                            {t(`services.categories.${category.id}`)}
                          </p>
                          {category.items.map((serviceItem) => (
                            <button
                              key={serviceItem.slug}
                              onClick={() => {
                                router.push(`/services/${serviceItem.slug}` as PushParams);
                                onClose();
                              }}
                              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${isScrolled
                                  ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                                  : "text-white/70 hover:text-white hover:bg-white/10"
                                }`}
                            >
                              {t(`services.items.${serviceItem.id}`)}
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            }

            return (
              <button
                key={item.path}
                onClick={() => { router.push(item.path as PushParams); onClose(); }}
                className={`flex w-full items-center justify-between px-4 py-4 rounded-xl text-sm font-bold transition-all ${isActive
                    ? (isScrolled ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-white text-blue-600 shadow-lg shadow-white/20")
                    : (isScrolled ? "text-slate-600 hover:bg-slate-50" : "text-white/80 hover:bg-white/10")
                  }`}
              >
                {t(item.id)}
                {isActive && <div className={`h-1.5 w-1.5 rounded-full ${isScrolled ? "bg-white" : "bg-blue-600"}`} />}
              </button>
            );
          })}
        </nav>

        <div className={`p-2 sm:hidden border-t ${isScrolled ? "border-slate-100" : "border-white/10"}`}>
          <button
            onClick={() => { router.push("/contact" as PushParams); onClose(); }}
            className={`w-full py-4 rounded-xl font-bold text-sm transition-all shadow-md ${isScrolled
                ? "bg-blue-600 text-white shadow-blue-100"
                : "bg-white/10 backdrop-blur-md border border-white/30 text-white shadow-black/10"
              }`}
          >
            {t("cta")}
          </button>
        </div>
      </div>
    </motion.div>
  );
}