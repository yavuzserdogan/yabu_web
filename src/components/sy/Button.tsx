import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "./Icon";
import { Magnetic } from "./Magnetic";
import { SmartLink, type AppHref } from "./SmartLink";

type Props = {
  variant?: "primary" | "ghost" | "round";
  size?: "s" | "m" | "l";
  icon?: IconName;
  href?: AppHref;
  type?: "button" | "submit";
  magnetic?: boolean;
  disabled?: boolean;
  loading?: boolean;
  cursor?: string;
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
  magnetic,
  disabled,
  loading,
  cursor,
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
      <span className="sy-btn__fill" aria-hidden />
      <span className="sy-btn__label">
        {children}
        {icon && <Icon name={icon} size={18} className="sy-btn__icon" />}
      </span>
      {loading && <span className="sy-btn__spin" aria-hidden />}
    </>
  );

  const el =
    href && !disabled ? (
      <SmartLink href={href} className={cls} onClick={onClick} data-cursor={cursor}>
        {inner}
      </SmartLink>
    ) : (
      <button
        type={type}
        className={cls}
        onClick={onClick}
        disabled={disabled}
        aria-busy={loading || undefined}
        data-cursor={cursor}
      >
        {inner}
      </button>
    );

  if (!magnetic) return el;
  return (
    <Magnetic strength={variant === "round" ? 0.3 : 0.25} padding={variant === "round" ? 40 : 20}>
      {el}
    </Magnetic>
  );
}
