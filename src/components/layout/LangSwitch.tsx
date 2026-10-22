"use client";

import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { routing, usePathname, useRouter, type Locale } from "@/i18n/routing";

export function LangSwitch() {
  const t = useTranslations("Common.nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const change = (next: Locale) => {
    if (next === locale) return;
    router.replace(
      // @ts-expect-error -- params always belong to the current pathname
      { pathname, params },
      { locale: next, scroll: false }
    );
  };

  return (
    <div className="sy-lang" role="group" aria-label={t("language")}>
      {routing.locales.map((l, i) => (
        <span key={l} style={{ display: "contents" }}>
          {i > 0 && <span>/</span>}
          <button type="button" aria-pressed={locale === l} onClick={() => change(l)} lang={l}>
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
