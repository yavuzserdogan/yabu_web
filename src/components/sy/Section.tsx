import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionProps = { id?: string; className?: string; style?: CSSProperties; children: ReactNode };

/** Vertical rhythm: space-160 top/bottom (space-96 on mobile) inside the page wrap. */
export function Section({ id, className, style, children }: SectionProps) {
  return (
    <section id={id} className={cn("sy-section", className)} style={style}>
      <div className="sy-wrap">{children}</div>
    </section>
  );
}

/** Section intro pattern: masked h2 on 8 cols, muted body-l on the remaining 4. */
export function Intro({ lines, text }: { lines: string[]; text?: string }) {
  return (
    <div className="sy-grid sy-intro">
      <Reveal as="h2" className="sy-t-h2 sy-col-8" lines={lines} />
      {text && <p className="sy-t-bodyl sy-muted sy-col-4">{text}</p>}
    </div>
  );
}

export const Spacer = ({ size }: { size: 24 | 48 | 64 | 96 | 128 }) => (
  <div aria-hidden style={{ height: `var(--space-${size})` }} />
);
