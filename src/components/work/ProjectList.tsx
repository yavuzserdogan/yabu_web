"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { lerp, reducedMotion } from "@/lib/motion";
import type { Project } from "@/content/types";
import { Badge } from "@/components/sy/Badge";
import { Button } from "@/components/sy/Button";
import { Portal } from "@/components/sy/Portal";
import { ProjectMedia } from "@/components/sy/ProjectMedia";
import { SmartLink } from "@/components/sy/SmartLink";
import { FilterBar } from "./FilterBar";
import { projectHref } from "./projectHref";
import { useProjectFilter } from "./useProjectFilter";

/** "02 — Tüm projeler": hairline rows, a cursor-following preview on hover, filter chips. */
export function ProjectList({ projects }: { projects: Project[] }) {
  const t = useTranslations("Common");
  const f = useProjectFilter(projects);
  const [hover, setHover] = useState<Project | null>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 0, y = 0, cx = 0, cy = 0, s = 0.2, raf = 0;
    const red = reducedMotion();
    const move = (e: PointerEvent) => { x = e.clientX; y = e.clientY; };
    const tick = () => {
      const el = floatRef.current;
      if (el) {
        cx = red ? x : lerp(cx, x, 0.14);
        cy = red ? y : lerp(cy, y, 0.14);
        s = lerp(s, el.classList.contains("is-on") ? 1 : 0.2, 0.18);
        el.style.transform = `translate3d(${cx - 160}px,${cy - 120}px,0) scale(${s.toFixed(3)}) rotate(${((x - cx) * 0.03).toFixed(2)}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="sy-plist">
      <div className="sy-plist__top">
        <FilterBar value={f.filter} onChange={f.setFilter} count={f.count} />
        <span className="sy-t-caption sy-muted sy-num">{t("projectCount", { count: f.shown.length })}</span>
      </div>
      <div className="sy-plist__rows" key={f.key} onPointerLeave={() => setHover(null)}>
        {f.shown.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} enter={f.key > 0} onEnter={() => setHover(p)} />
        ))}
      </div>
      <Portal>
        <div ref={floatRef} className={cn("sy-plist__float", hover && "is-on")} aria-hidden>
          {hover && <ProjectMedia project={hover} cursor={false} sizes="320px" />}
        </div>
      </Portal>
      <div className="sy-plist__foot">
        <Button variant="ghost" magnetic href="/isler" icon="arrow-right">{t("cta.allWork")}</Button>
      </div>
    </div>
  );
}

type RowProps = { project: Project; index: number; enter: boolean; onEnter: () => void };

function ProjectRow({ project: p, index, enter, onEnter }: RowProps) {
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
    onPointerEnter: onEnter,
  };
  return href ? (
    <SmartLink href={href} data-cursor="view" {...props}>{body}</SmartLink>
  ) : (
    <div {...props}>{body}</div>
  );
}
