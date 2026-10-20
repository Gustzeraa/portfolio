import { ArrowUpRight, Lock } from "lucide-react";

export function LinkExterno({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 font-medium underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-ipe"
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

export function Repositorio({ projeto }) {
  if (projeto.link) {
    return <span className="text-sm text-muted">Repositório público</span>;
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-muted">
      <Lock size={14} aria-hidden="true" />
      Repositório privado
    </span>
  );
}

export function Tecnologias({ itens }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted" aria-label="Tecnologias">
      {itens.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export function Links({ projeto }) {
  return (
    <>
      {projeto.site && <LinkExterno href={projeto.site}>Ver site</LinkExterno>}
      {projeto.link && <LinkExterno href={projeto.link}>Ver no GitHub</LinkExterno>}
    </>
  );
}
