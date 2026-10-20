import Section from "./Section";
import { formacao, cursos, idiomas } from "../data";

function Grupo({ titulo, children }) {
  return (
    <div>
      <h3 className="text-sm text-muted">{titulo}</h3>
      <ul className="mt-3 space-y-3">{children}</ul>
    </div>
  );
}

export default function Education() {
  return (
    <Section id="formacao" title="Formação">
      <div className="grid gap-10 sm:grid-cols-3">
        <Grupo titulo="Graduação">
          {formacao.map((f) => (
            <li key={f.curso}>
              <p className="font-medium">{f.curso}</p>
              <p className="text-sm text-muted">{f.local}, {f.periodo}</p>
            </li>
          ))}
        </Grupo>
        <Grupo titulo="Cursos">
          {cursos.map((c) => (
            <li key={c.curso}>
              <p className="font-medium">{c.curso}</p>
              <p className="text-sm text-muted">{c.local}</p>
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-ipe"
                >
                  Ver certificado
                </a>
              )}
            </li>
          ))}
        </Grupo>
        <Grupo titulo="Idiomas">
          {idiomas.map((i) => (
            <li key={i.idioma}>
              <p className="font-medium">{i.idioma}</p>
              <p className="text-sm text-muted">{i.nivel}</p>
            </li>
          ))}
        </Grupo>
      </div>
    </Section>
  );
}
