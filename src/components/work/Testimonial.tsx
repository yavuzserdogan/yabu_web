import type { Testimonial as T } from "@/content/types";

export function Testimonial({ quote, name, company, initials }: T) {
  return (
    <figure className="sy-quote" style={{ margin: 0 }}>
      <blockquote className="sy-quote__text" style={{ margin: 0 }}>“{quote}”</blockquote>
      <figcaption className="sy-quote__who">
        <span className="sy-quote__avatar" aria-hidden>{initials}</span>
        <span>{name}<small>{company}</small></span>
      </figcaption>
    </figure>
  );
}
