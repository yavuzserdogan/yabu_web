import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import type { Project } from "@/content/types";
import { Button } from "@/components/sy/Button";
import { ProjectMedia } from "@/components/sy/ProjectMedia";
import { Reveal } from "@/components/sy/Reveal";
import { SmartLink } from "@/components/sy/SmartLink";
import { StatBox } from "@/components/sy/StatBox";
import { projectHref } from "./projectHref";

type FeatureProps = { project: Project; flip?: boolean; index: string };

/** One featured project: sticky media (7 cols) + story column (4 cols), alternating sides. */
export function ProjectFeature({ project: p, flip, index }: FeatureProps) {
  const t = useTranslations("Common");
  const tc = useTranslations("CaseStudy");
  const href = projectHref(p);

  return (
    <article className={cn("sy-feature", flip && "is-flip")}>
      <div className="sy-feature__grid">
        {href ? (
          <SmartLink href={href} className="sy-feature__media" aria-label={p.name}>
            <ProjectMedia project={p} fit="contain" />
          </SmartLink>
        ) : (
          <div className="sy-feature__media"><ProjectMedia project={p} cursor={false} fit="contain" /></div>
        )}
        <div className="sy-feature__body">
          <div className="sy-feature__index"><span>{index}</span><span>{p.year}</span></div>
          <Reveal as="h3" className="sy-feature__name" lines={[p.name]} />
          <p className="sy-feature__desc">{p.desc}</p>
          {(p.problem || p.solution) && (
            <div className="sy-ps">
              {p.problem && <div className="sy-ps__row"><b>{tc("problem")}</b><p>{p.problem}</p></div>}
              {p.solution && <div className="sy-ps__row"><b>{tc("solution")}</b><p>{p.solution}</p></div>}
            </div>
          )}
          {p.stats && (
            <div className="sy-stats sy-stats--2">
              {p.stats.map((s, i) => <StatBox key={i} compact {...s} />)}
            </div>
          )}
          {href && (
            <div className="sy-feature__cta">
              <Button href={href} icon="arrow-up-right">{t("cta.viewProject")}</Button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export function FeaturedWork({ projects }: { projects: Project[] }) {
  const total = String(projects.length).padStart(2, "0");
  return (
    <div style={{ display: "grid", gap: "var(--space-128)" }}>
      {projects.map((p, i) => (
        <ProjectFeature key={p.slug} project={p} flip={i % 2 === 1} index={`${String(i + 1).padStart(2, "0")} / ${total}`} />
      ))}
    </div>
  );
}
