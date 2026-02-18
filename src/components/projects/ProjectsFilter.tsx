"use client";

import { contentTheme } from "@/config/content-theme";
import { useTranslations } from "next-intl";

interface Props {
  categories: readonly string[];
  active: string;
  onChange: (category: string) => void;
}

export function ProjectsFilter({ categories, active, onChange }: Props) {
  const theme = contentTheme;
  const t = useTranslations('ProjectsPage.filter');

  return (
    <section className={`${theme.filter.section} px-4`}>
      <div className="flex flex-wrap gap-2 md:gap-3 justify-center max-w-4xl mx-auto">
        {categories.map((catKey) => (
          <button
            key={catKey}
            onClick={() => onChange(catKey)}
            className={`${theme.filter.button} cursor-pointer text-xs md:text-sm px-4 py-2 md:px-6 md:py-2.5 transition-all ${
              active === catKey ? theme.filter.buttonActive : theme.filter.buttonInactive
            }`}
          >
            {t(catKey)}
          </button>
        ))}
      </div>
    </section>
  );
}