import { ReactNode } from "react";

export interface InnerHeroLayoutProps {
  title: ReactNode;
  description: string;
  id?: string;
  showScrollIndicator?: boolean;
  children?: ReactNode;
}