interface HeroBackgroundProps {
  variant?: "default" | "soft" | "dark";
}

export function HeroBackground({ variant = "default" }: HeroBackgroundProps) {
  const variants = {
    default: "from-blue-50 via-indigo-50 to-purple-50",
    soft: "from-slate-50 via-white to-slate-100",
    dark: "from-slate-900 via-slate-800 to-slate-900",
  };

  return (
    <div
      className={`absolute inset-0 -z-10 bg-linear-to-br ${variants[variant]}`}
    />
  );
}
