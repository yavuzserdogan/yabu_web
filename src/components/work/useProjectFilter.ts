"use client";

import { useState } from "react";
import type { Project, ProjectCategory } from "@/content/types";

export type Filter = "all" | ProjectCategory;
export const FILTERS: Filter[] = ["all", "web", "mobile", "design"];

const matches = (p: Project, f: Filter) => f === "all" || p.categories.includes(f);

/** Filter state; `key` bumps on every change so the list re-mounts and replays its entrance. */
export function useProjectFilter(list: Project[]) {
  const [filter, setFilterState] = useState<Filter>("all");
  const [key, setKey] = useState(0);
  return {
    filter,
    key,
    shown: list.filter((p) => matches(p, filter)),
    count: (f: Filter) => list.filter((p) => matches(p, f)).length,
    setFilter: (f: Filter) => { setFilterState(f); setKey((k) => k + 1); },
  };
}
