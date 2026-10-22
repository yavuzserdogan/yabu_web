import type { Principle } from "@/content/types";
import { Icon } from "./Icon";

type Props = { items: Principle[]; title?: string; count?: string };

export function AssuranceStrip({ items, title, count }: Props) {
  return (
    <div>
      {title && (
        <div className="sy-assure__head">
          <span>{title}</span>
          {count && <span className="sy-muted" style={{ fontWeight: 400 }}>{count}</span>}
        </div>
      )}
      <div className="sy-assure">
        {items.map((a) => (
          <div key={a.title} className="sy-assure__item">
            <Icon name={a.icon} size={28} />
            <div><b>{a.title}</b><p>{a.text}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}
