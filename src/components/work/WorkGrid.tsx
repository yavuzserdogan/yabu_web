"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import type { Project } from "@/content/types";
import { Badge } from "@/components/sy/Badge";
import { ProjectMedia } from "@/components/sy/ProjectMedia";
import { SmartLink } from "@/components/sy/SmartLink";
import { FilterBar } from "./FilterBar";
import { projectHref } from "./projectHref";
import { useProjectFilter } from "./useProjectFilter";

type CardProps = { project: Project; index?: number; enter?: boolean };

export function ProjectCard({ project: p, index = 0, enter }: CardProps) {
  const href = projectHref(p);
  const body = (
    <>
      <ProjectMedia project={p} cursor={!!href} sizes="(max-width: 760px) 100vw, 50vw" />
      <div className="sy-card__row">
        <div>
          <div className="sy-card__name">{p.name}</div>
          <div className="sy-card__meta">{p.short} · {p.year}</div>
        </div>
        <Badge status={p.status} />
      </div>
    </>
  );
  const props = {
    className: cn("sy-card", enter && "is-enter"),
    style: enter ? { animationDelay: `${index * 70}ms` } : undefined,
  };
  return href ? <SmartLink href={href} {...props}>{body}</SmartLink> : <div {...props}>{body}</div>;
}

export function WorkGrid({ projects }: { projects: Project[] }) {
  const t = useTranslations("Common");
  const f = useProjectFilter(projects);
  return (
    <div>
      <div className="sy-plist__top">
        <FilterBar value={f.filter} onChange={f.setFilter} count={f.count} />
        <span className="sy-t-caption sy-muted sy-num">{t("projectCount", { count: f.shown.length })}</span>
      </div>
      <div className="sy-wgrid" key={f.key}>
        {f.shown.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} enter />)}
      </div>
    </div>
  );
}
