"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ChipProps = {
  selected?: boolean;
  count?: number;
  size?: "s";
  onClick?: () => void;
  children: ReactNode;
};

export function Chip({ selected, count, size, onClick, children }: ChipProps) {
  return (
    <button
      type="button"
      className={cn("sy-chip", size === "s" && "sy-chip--s")}
      aria-pressed={!!selected}
      onClick={onClick}
    >
      {children}
      {count != null && <span className="sy-chip__count">{count}</span>}
    </button>
  );
}

type Option = { value: string; label: string };

type ChipGroupProps<M extends boolean> = {
  options: Option[];
  multiple?: M;
  value: M extends true ? string[] : string | null;
  onChange: (v: M extends true ? string[] : string) => void;
  label: string;
  size?: "s";
};

export function ChipGroup<M extends boolean = false>({ options, multiple, value, onChange, label, size }: ChipGroupProps<M>) {
  const isSelected = (v: string) => (multiple ? (value as string[]).includes(v) : value === v);
  const toggle = (v: string) => {
    if (multiple) {
      const list = value as string[];
      (onChange as (v: string[]) => void)(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);
    } else {
      (onChange as (v: string) => void)(v);
    }
  };
  return (
    <div className="sy-chips" role="group" aria-label={label}>
      {options.map((o) => (
        <Chip key={o.value} size={size} selected={isSelected(o.value)} onClick={() => toggle(o.value)}>
          {o.label}
        </Chip>
      ))}
    </div>
  );
}
