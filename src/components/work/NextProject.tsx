import type { Project } from "@/content/types";
import { Icon } from "@/components/sy/Icon";
import { ProjectMedia } from "@/components/sy/ProjectMedia";
import { SmartLink } from "@/components/sy/SmartLink";

type Props = { project: Project; label: string; count: string };

/** Full-width "Sonraki proje" link; the media peeks up on hover. */
export function NextProject({ project, label, count }: Props) {
  return (
    <SmartLink href={{ pathname: "/isler/[slug]", params: { slug: project.slug } }} className="sy-next" data-cursor="view">
      <div className="sy-next__label"><span>{label}</span><span className="sy-num">{count}</span></div>
      <div className="sy-next__name">
        {project.name}
        <Icon name="arrow-right" className="sy-next__arrow" stroke={1} />
      </div>
      <div className="sy-next__peek" aria-hidden>
        <ProjectMedia project={project} cursor={false} sizes="30vw" />
      </div>
    </SmartLink>
  );
}

export function Specs({ items }: { items: [string, string][] }) {
  return (
    <dl className="sy-specs" style={{ margin: 0 }}>
      {items.map(([k, v]) => (
        <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
      ))}
    </dl>
  );
}
