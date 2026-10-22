import type { CSSProperties } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Tone } from "@/content/types";

type MediaSource = { name?: string; tone: Tone; kind: "web" | "mobile"; image?: string; slug?: string };

type Props = {
  project: MediaSource;
  /** small caption bottom-left; false hides it */
  label?: string | false;
  /** set false when the media is not itself a link target */
  cursor?: boolean;
  hover?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
};

/** Project imagery: the real screenshot when there is one, otherwise the design's device mockup. */
export function ProjectMedia({ project, label = false, cursor = true, hover, sizes = "(max-width: 860px) 100vw, 60vw", priority, className, style }: Props) {
  return (
    <div className={cn("sy-media", hover && "is-hover", className)} data-cursor={cursor ? "view" : undefined} style={style}>
      <div className="sy-media__inner">
        {project.image ? (
          <Image src={project.image} alt={project.name ?? ""} fill sizes={sizes} priority={priority} className="sy-media__img" />
        ) : (
          <DeviceMockup tone={project.tone} kind={project.kind} wheel={project.slug === "food-roulette"} />
        )}
      </div>
      {label && <span className="sy-media__label">{label}</span>}
    </div>
  );
}

function MockPage() {
  return (
    <div className="sy-mock__page">
      <div className="sy-mock__nav"><b /><span><i /><i /><i /></span></div>
      <div className="sy-mock__h" style={{ width: "78%" }} />
      <div className="sy-mock__h" style={{ width: "52%" }} />
      <div className="sy-mock__p" style={{ width: "60%", marginTop: 10 }} />
      <div className="sy-mock__p" style={{ width: "44%" }} />
      <div className="sy-mock__img" />
      <div className="sy-mock__cols"><i /><i /><i /></div>
      <div className="sy-mock__h" style={{ width: "40%" }} />
      <div className="sy-mock__p" style={{ width: "90%" }} />
      <div className="sy-mock__p" style={{ width: "84%" }} />
      <div className="sy-mock__p" style={{ width: "70%" }} />
      <div className="sy-mock__img" style={{ aspectRatio: "16 / 5" }} />
      <div className="sy-mock__cols"><i /><i /><i /></div>
    </div>
  );
}

function Phone({ wheel }: { wheel?: boolean }) {
  return (
    <div className="sy-mock__phone">
      <div className="sy-mock__phone-screen">
        {wheel ? (
          <>
            <div className="sy-mock__h" style={{ width: "70%" }} />
            <div className="sy-mock__p" style={{ width: "50%" }} />
            <div className="sy-wheel" />
            <div className="sy-mock__h" style={{ width: "100%", height: 22, borderRadius: 99, background: "var(--m-acc)" }} />
          </>
        ) : (
          <>
            <div className="sy-mock__h" style={{ width: "80%" }} />
            <div className="sy-mock__h" style={{ width: "55%" }} />
            <div className="sy-mock__img" />
            <div className="sy-mock__p" style={{ width: "90%" }} />
            <div className="sy-mock__p" style={{ width: "70%" }} />
          </>
        )}
      </div>
    </div>
  );
}

export function DeviceMockup({ tone, kind, wheel }: { tone: Tone; kind: "web" | "mobile"; wheel?: boolean }) {
  if (kind === "mobile") {
    return (
      <div className={cn("sy-mock", `sy-mock--${tone}`, "sy-mock--mobile")}>
        <Phone wheel={wheel} />
        <Phone wheel={wheel !== false} />
        <Phone />
      </div>
    );
  }
  return (
    <div className={cn("sy-mock", `sy-mock--${tone}`)}>
      <div className="sy-mock__desk">
        <div className="sy-mock__bar">
          <i style={{ width: "6%" }} />
          <i style={{ width: "30%", marginLeft: "auto", marginRight: "auto" }} />
        </div>
        <div className="sy-mock__screen"><MockPage /></div>
      </div>
      <Phone />
    </div>
  );
}
