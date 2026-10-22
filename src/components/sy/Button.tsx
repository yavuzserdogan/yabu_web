import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "./Icon";
import { SmartLink, type AppHref } from "./SmartLink";

type Props = {
  variant?: "primary" | "ghost" | "round";
  size?: "s" | "m" | "l";
  icon?: IconName;
  href?: AppHref;
  type?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "m",
  icon,
  href,
  type = "button",
  disabled,
  loading,
  className,
  onClick,
  children,
}: Props) {
  const cls = cn(
    "sy-btn",
    `sy-btn--${variant}`,
    size !== "m" && `sy-btn--${size}`,
    loading && "is-loading",
    className
  );
  const inner = (
    <>
      <span className="sy-btn__label">
        {children}
        {icon && <Icon name={icon} size={18} className="sy-btn__icon" />}
      </span>
      {loading && <span className="sy-btn__spin" aria-hidden />}
    </>
  );

  return href && !disabled ? (
    <SmartLink href={href} className={cls} onClick={onClick}>
      {inner}
    </SmartLink>
  ) : (
    <button type={type} className={cls} onClick={onClick} disabled={disabled} aria-busy={loading || undefined}>
      {inner}
    </button>
  );
}
