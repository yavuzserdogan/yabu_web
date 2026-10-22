import { cn } from "@/lib/utils";
import { ICONS, type IconName } from "./icons";

type Props = {
  name: IconName;
  size?: number;
  stroke?: number;
  label?: string;
  className?: string;
};

export function Icon({ name, size = 24, stroke = 1.5, label, className }: Props) {
  return (
    <svg
      className={cn("sy-icon", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={name === "play" ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      <path d={ICONS[name]} />
    </svg>
  );
}

export type { IconName };
