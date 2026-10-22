"use client";

import { useTranslations } from "next-intl";
import { Chip } from "@/components/sy/Chip";
import { FILTERS, type Filter } from "./useProjectFilter";

type Props = { value: Filter; onChange: (f: Filter) => void; count: (f: Filter) => number };

export function FilterBar({ value, onChange, count }: Props) {
  const t = useTranslations("Common.filters");
  return (
    <div className="sy-chips" role="group" aria-label={t("label")}>
      {FILTERS.filter((f) => f === "all" || count(f) > 0).map((f) => (
        <Chip key={f} size="s" selected={value === f} count={count(f)} onClick={() => onChange(f)}>
          {t(f)}
        </Chip>
      ))}
    </div>
  );
}
