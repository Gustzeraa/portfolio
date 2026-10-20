import { useState } from "react";
import Section from "./Section";
import ProjectCover from "./ProjectCover";
import ProjectModal from "./ProjectModal";
import { Links, Repositorio, Tecnologias } from "./ProjectLinks";
import { projetos } from "../data";

function ProjectCard({ projeto, onAbrir }) {
  return (
    <li className="overflow-hidden rounded-3xl border border-line bg-surface">
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
        <span className="text-sm font-medium">{projeto.tecnologias[0]}</span>
        <Repositorio projeto={projeto} />
      </div>

      <ProjectCover projeto={projeto} className="aspect-[16/9] border-b border-line" />

      <div className="flex flex-col p-5 sm:p-6">
        <h3 className="flex flex-wrap items-baseline gap-x-3 font-display text-2xl font-bold tracking-tight">
          {projeto.nome}
          {projeto.status && (
            <span className="font-sans text-sm font-medium text-muted">{projeto.status}</span>
          )}
        </h3>
        <p className="mt-2 font-medium">{projeto.resumo}</p>
        <p className="mt-2 max-w-2xl leading-relaxed text-muted">{projeto.descricao}</p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
          <Tecnologias itens={projeto.tecnologias} />
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {projeto.detalhes && (
              <button
                type="button"
                onClick={() => onAbrir(projeto)}
                className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-85"
              >
                Ver detalhes
              </button>
            )}
            <Links projeto={projeto} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Projects() {
  const [aberto, setAberto] = useState(null);

  return (
    <Section id="projetos" title="Projetos">
      <ul className="space-y-6">
        {projetos.map((projeto) => (
          <ProjectCard key={projeto.nome} projeto={projeto} onAbrir={setAberto} />
        ))}
      </ul>
      <ProjectModal projeto={aberto} onClose={() => setAberto(null)} />
    </Section>
  );
}
