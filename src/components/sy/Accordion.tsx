"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/content/types";
import { Icon } from "./Icon";

export function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(-1);
  const id = useId();
  return (
    <div className="sy-acc">
      {items.map((it, i) => {
        const on = open === i;
        const panel = `${id}-${i}`;
        return (
          <div key={it.q} className={cn("sy-acc__item", on && "is-open")}>
            <button
              type="button"
              className="sy-acc__head"
              aria-expanded={on}
              aria-controls={panel}
              onClick={() => setOpen(on ? -1 : i)}
            >
              {it.q}
              <span className="sy-acc__icon" aria-hidden><Icon name="plus" size={20} /></span>
            </button>
            <div id={panel} className="sy-acc__panel" role="region">
              <div><p>{it.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
