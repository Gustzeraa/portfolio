import Section from "./Section";
import { stack } from "../data";

export default function Stack() {
  return (
    <Section id="stack" title="Stack">
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map(({ grupo, itens }) => (
          <div key={grupo}>
            <h3 className="text-sm text-muted">{grupo}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {itens.map((item) => (
                <li key={item} className="rounded-md border border-line bg-surface px-3 py-1 text-sm font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
