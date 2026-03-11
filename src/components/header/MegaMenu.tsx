"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { servicesNavigation } from "@/config/navigation";
import { Globe, Smartphone, TrendingUp, Settings } from "lucide-react";

type AppRouter = ReturnType<typeof useRouter>;
type PushParams = Parameters<AppRouter["push"]>[0];

const categoryIcons = {
  web: Globe,
  mobile: Smartphone,
  growth: TrendingUp,
  management: Settings,
};

type Props = {
  isOpen: boolean;
  isScrolled: boolean;
};

export function MegaMenu({ isOpen, isScrolled }: Props) {
  const t = useTranslations("Navigation.servicesMenu");
  const router = useRouter();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-205 z-50"
        >
          <div className={`rounded-2xl border shadow-2xl overflow-hidden ${
            isScrolled
              ? "bg-white border-slate-200 shadow-slate-200/50"
              : "bg-white/95 backdrop-blur-xl border-white/20"
          }`}>
            <div className="grid grid-cols-4 gap-0 divide-x divide-slate-100">
              {servicesNavigation.map((category) => {
                const Icon = categoryIcons[category.id as keyof typeof categoryIcons];
                return (
                  <div key={category.id} className="p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {t(`categories.${category.id}`)}
                      </span>
                    </div>

                    <div className="space-y-1">
                      {category.items.map((item) => (
                        <button
                          key={item.slug}
                          onClick={() => router.push(`/services/${item.slug}` as PushParams)}
                          className="w-full text-left px-3 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 group"
                        >
                          <span className="group-hover:translate-x-0.5 inline-block transition-transform duration-200">
                            {t(`items.${item.id}`)}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <p className="text-xs text-slate-500">
                {t("banner.text")}
              </p>
              <button
                onClick={() => router.push("/contact" as PushParams)}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                {t("banner.cta")} →
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}