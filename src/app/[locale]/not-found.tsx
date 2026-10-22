import { useTranslations } from "next-intl";
import { Button } from "@/components/sy/Button";
import { VideoPlaceholder } from "@/components/sy/VideoPlaceholder";

/** "4 [kapsül] 4" — the zero is the hero's video capsule. */
export default function NotFound() {
  const t = useTranslations("NotFoundPage");
  const tc = useTranslations("Common.cta");

  return (
    <section className="sy-wrap sy-404-page">
      <div className="sy-404">
        <div className="sy-404__big" aria-label="404">
          <span aria-hidden>4</span>
          <span className="sy-404__pill" data-cursor="play" aria-hidden>
            <VideoPlaceholder variant="sphere" />
          </span>
          <span aria-hidden>4</span>
        </div>
        <div className="sy-404__row">
          <div>
            <h1 className="sy-t-h2">{t("title")}</h1>
            <p className="sy-t-bodyl sy-muted" style={{ marginTop: 16, maxWidth: 520 }}>{t("description")}</p>
          </div>
          <div className="sy-404__ctas">
            <Button href="/" icon="arrow-right">{t("backHome")}</Button>
            <Button variant="ghost" href="/isler">{tc("seeWork")}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
