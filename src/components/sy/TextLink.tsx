import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "./Icon";
import { SmartLink, type AppHref } from "./SmartLink";

type Props = {
  href: AppHref;
  variant?: "underline" | "muted";
  arrow?: boolean | IconName;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

export function TextLink({ href, variant, arrow, className, onClick, children }: Props) {
  return (
    <SmartLink href={href} className={cn("sy-link", variant && `sy-link--${variant}`, className)} onClick={onClick}>
      {children}
      {arrow && <Icon name={arrow === true ? "arrow-right" : arrow} size={18} className="sy-link__icon" />}
    </SmartLink>
  );
}
