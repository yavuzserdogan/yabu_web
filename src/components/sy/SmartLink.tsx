import type { ComponentProps, ReactNode } from "react";
import { Link } from "@/i18n/routing";

export type InternalHref = ComponentProps<typeof Link>["href"];
export type ExternalHref = `http${string}` | `mailto:${string}` | `tel:${string}` | `#${string}`;
export type AppHref = InternalHref | ExternalHref;

type Props = Omit<ComponentProps<"a">, "href"> & {
  href: AppHref;
  children?: ReactNode;
};

export function isExternal(href: AppHref): href is ExternalHref {
  return typeof href === "string" && /^(https?:|mailto:|tel:|#)/.test(href);
}

/** Localized next-intl Link for app routes, plain <a> for external/mailto/tel/hash. */
export function SmartLink({ href, ...rest }: Props) {
  if (isExternal(href)) {
    const newTab = href.startsWith("http");
    return <a href={href} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener" : undefined} {...rest} />;
  }
  return <Link href={href} {...rest} />;
}
