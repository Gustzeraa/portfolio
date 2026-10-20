import Section from "./Section";
import { experiencias } from "../data";

export default function Experience() {
  return (
    <Section id="experiencia" title="Experiência">
      <ol className="space-y-12">
        {experiencias.map((exp) => (
          <li key={exp.cargo + exp.empresa} className="sm:grid sm:grid-cols-[150px_1fr] sm:gap-6">
            <p className="flex items-center gap-2 text-sm text-muted sm:pt-1.5">
              {exp.atual && <span className="size-2 rounded-full bg-ipe" aria-hidden="true" />}
              {exp.periodo}
            </p>
            <div className="mt-2 sm:mt-0">
              <h3 className="font-display text-xl font-bold tracking-tight">{exp.cargo}</h3>
              <p className="text-muted">{exp.empresa}</p>
              <ul className="mt-4 max-w-2xl space-y-2 leading-relaxed">
                {exp.itens.map((texto) => (
                  <li key={texto}>{texto}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
