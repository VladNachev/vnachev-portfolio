import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  titleIcon?: ReactNode;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, titleIcon, intro, children }: SectionProps) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="section-header">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="section-title" id={`${id}-title`}>
          {titleIcon ? <span className="section-title-icon">{titleIcon}</span> : null}
          <span className="section-title-text">{title}</span>
        </h2>
        {intro ? <p className="section-intro">{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}
