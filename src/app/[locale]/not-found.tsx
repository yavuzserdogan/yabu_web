"use client";

import { Home, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function NotFound() {
  const t = useTranslations("NotFoundPage");

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="max-w-md px-6 text-center">
        <p className="text-6xl md:text-7xl font-bold text-slate-200">404</p>
        <h1 className="text-xl md:text-2xl font-semibold text-slate-800 mt-4">
          {t("title")}
        </h1>
        <p className="text-slate-600 mt-2">{t("description")}</p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-800 text-white px-5 py-3 font-medium hover:bg-slate-700 transition-colors"
          >
            <Home size={18} />
            {t("backHome")}
            <ArrowRight size={18} className="ml-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
