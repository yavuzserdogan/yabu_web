"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import type { Project } from "@/content/types";
import { Badge } from "@/components/sy/Badge";
import { Button } from "@/components/sy/Button";
import { SmartLink } from "@/components/sy/SmartLink";
import { FilterBar } from "./FilterBar";
import { projectHref } from "./projectHref";
import { useProjectFilter } from "./useProjectFilter";

/** "02 — Tüm projeler": hairline rows with filter chips. */
export function ProjectList({ projects }: { projects: Project[] }) {
  const t = useTranslations("Common");
  const f = useProjectFilter(projects);

  return (
    <div className="sy-plist">
      <div className="sy-plist__top">
        <FilterBar value={f.filter} onChange={f.setFilter} count={f.count} />
        <span className="sy-t-caption sy-muted sy-num">{t("projectCount", { count: f.shown.length })}</span>
      </div>
      <div className="sy-plist__rows" key={f.key}>
        {f.shown.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} enter={f.key > 0} />
        ))}
      </div>
      <div className="sy-plist__foot">
        <Button variant="ghost" href="/isler" icon="arrow-right">{t("cta.allWork")}</Button>
      </div>
    </div>
  );
}

type RowProps = { project: Project; index: number; enter: boolean };

function ProjectRow({ project: p, index, enter }: RowProps) {
  const t = useTranslations("Common.filters");
  const href = projectHref(p);
  const body = (
    <>
      <span className={cn("sy-prow__icon", `sy-mock--${p.tone}`)} aria-hidden>{p.mono}</span>
      <span className="sy-prow__name">{p.name}</span>
      <span className="sy-prow__desc">{p.short}</span>
      <span className="sy-prow__cat">{t(p.categories[0])}</span>
      <span className="sy-prow__year">{p.year}</span>
      <span className="sy-prow__status"><Badge status={p.status} /></span>
    </>
  );
  const props = {
    className: cn("sy-prow", enter && "is-enter"),
    style: enter ? { animationDelay: `${index * 50}ms` } : undefined,
  };
  return href ? (
    <SmartLink href={href} {...props}>{body}</SmartLink>
  ) : (
    <div {...props}>{body}</div>
  );
}
