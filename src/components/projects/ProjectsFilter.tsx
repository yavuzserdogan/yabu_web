interface Props {
  categories: readonly string[];
  active: string;
  onChange: (category: string) => void;
}

export function ProjectsFilter({ categories, active, onChange }: Props) {
  return (
    <section className="py-8 bg-white sticky top-20 z-40 border-b border-slate-200">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              active === cat
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
