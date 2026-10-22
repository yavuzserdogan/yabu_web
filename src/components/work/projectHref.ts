import type { Project } from "@/content/types";
import type { AppHref } from "@/components/sy/SmartLink";

/** Case study page when there is one, otherwise the live site. */
export function projectHref(p: Project): AppHref | undefined {
  if (p.caseStudy) return { pathname: "/isler/[slug]", params: { slug: p.slug } };
  return p.url as AppHref | undefined;
}
