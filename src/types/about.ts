import type { LucideIcon } from "lucide-react";

export interface AboutValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface AboutStat {
  number: string;
  label: string;
}

export interface AboutProcess {
  step: string;
  title: string;
  description: string;
}
