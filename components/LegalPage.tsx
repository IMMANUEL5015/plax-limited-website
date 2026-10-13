import type { ReactNode } from "react";
import PageHero from "./PageHero";
import { site } from "@/lib/site";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type Props = {
  title: string;
  description: string;
  intro: ReactNode;
  sections: LegalSection[];
};

export default function LegalPage({ title, description, intro, sections }: Props) {
  return (
    <>
      <PageHero title={title} description={description} crumb={title} />
      <div className="container legal">
        <aside className="toc">
          <h2>On this page</h2>
          <ol>
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>
                  {i + 1}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <article className="prose">
          <span className="meta">Last updated: {site.lastUpdated}</span>
          <div className="intro">{intro}</div>
          {sections.map((s, i) => (
            <section key={s.id} id={s.id}>
              <h2>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              {s.content}
            </section>
          ))}
        </article>
      </div>
    </>
  );
}

export function ContactBlock() {
  return (
    <div className="contact-block">
      <strong>{site.name}</strong>
      <span>{site.address}</span>
      <span>
        Email: <a href={`mailto:${site.email}`}>{site.email}</a>
      </span>
      <span>
        Phone: <a href={site.phoneHref}>{site.phone}</a>
      </span>
    </div>
  );
}
