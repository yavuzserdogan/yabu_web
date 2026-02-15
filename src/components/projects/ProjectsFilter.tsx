import { contentTheme } from "@/config/content-theme";

interface Props {
  categories: readonly string[];
  active: string;
  onChange: (category: string) => void;
}

export function ProjectsFilter({ categories, active, onChange }: Props) {
  const t = contentTheme;
  return (
    <section className={`${t.filter.section} px-4`}> {/* Mobilde kenardan boşluk eklendi */}
      <div className="flex flex-wrap gap-2 md:gap-3 justify-center max-w-4xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`${t.filter.button} cursor-pointer text-xs md:text-sm px-4 py-2 md:px-6 md:py-2.5 transition-all ${
              active === cat ? t.filter.buttonActive : t.filter.buttonInactive
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}