import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = { num?: string; aside?: ReactNode; className?: string; children: ReactNode };

/** Numbered section label: "01 — İşlerimiz" with a hairline above. */
export function SectionLabel({ num, aside, className, children }: Props) {
  return (
    <div className={cn("sy-label", className)}>
      <span>
        {num && (
          <>
            <span className="sy-label__num">{num}</span>
            <span className="sy-label__dash">—</span>
          </>
        )}
        {children}
      </span>
      {aside && <span className="sy-label__aside">{aside}</span>}
    </div>
  );
}
