import { contentTheme } from "@/config/content-theme";

interface Props {
  categories: readonly string[];
  active: string;
  onChange: (category: string) => void;
}

export function ProjectsFilter({ categories, active, onChange }: Props) {
  const t = contentTheme;
  return (
    <section className={t.filter.section}>
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`${t.filter.button} ${
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
