import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/content/types";

export function Badge({ status = "live", className }: { status?: ProjectStatus; className?: string }) {
  const t = useTranslations("Common.status");
  return (
    <span className={cn("sy-badge", `sy-badge--${status}`, className)}>
      <i className="sy-badge__dot" aria-hidden />
      {t(status)}
    </span>
  );
}

export function Tag({ outline, children }: { outline?: boolean; children: ReactNode }) {
  return <span className={cn("sy-tag", outline && "sy-tag--outline")}>{children}</span>;
}
