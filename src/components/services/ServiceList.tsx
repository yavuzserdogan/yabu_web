import { ServiceCard } from "./ServiceCard";
import { contentTheme } from "@/config/content-theme";
import { services } from "./services.data";

export function ServicesList() {
  const t = contentTheme;
  return (
    <section className={t.section.padding}>
      <div className={`${t.section.container} space-y-24`}>
        {services.map((service, i) => (
          <ServiceCard
            key={service.slug}
            service={service}
            reverse={i % 2 === 1}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
