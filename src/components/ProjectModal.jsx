import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import ProjectCover from "./ProjectCover";
import { Links, Repositorio, Tecnologias } from "./ProjectLinks";

function Bloco({ titulo, children }) {
  return (
    <section className="mt-8">
      <h3 className="font-display text-lg font-bold tracking-tight">{titulo}</h3>
      <div className="mt-2 leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export default function ProjectModal({ projeto, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (projeto) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (dialog.open) {
      dialog.close();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [projeto]);

  const d = projeto?.detalhes;

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="modal-titulo"
      className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-3xl border border-line bg-surface p-0 text-ink backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      {projeto && (
        <div>
          <div className="relative">
            {projeto.imagem ? (
              <ProjectCover projeto={projeto} className="aspect-[16/8]" />
            ) : (
              <div className="h-16" />
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface transition-colors hover:border-ink"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <div className="p-6 sm:p-10">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h2 id="modal-titulo" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {projeto.nome}
              </h2>
              {projeto.status && <span className="text-sm font-medium text-muted">{projeto.status}</span>}
            </div>
            <p className="mt-2 text-lg font-medium">{projeto.resumo}</p>

            {d?.problema && <Bloco titulo="O problema"><p>{d.problema}</p></Bloco>}
            {d?.solucao && <Bloco titulo="A solução"><p>{d.solucao}</p></Bloco>}
            {d?.decisoes?.length > 0 && (
              <Bloco titulo="Decisões técnicas">
                <ul className="list-disc space-y-2 pl-5 marker:text-ipe">
                  {d.decisoes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Bloco>
            )}
            {d?.resultado && <Bloco titulo="Resultado"><p>{d.resultado}</p></Bloco>}

            <div className="mt-10 space-y-4 border-t border-line pt-6">
              <Tecnologias itens={projeto.tecnologias} />
              <div className="flex flex-wrap items-center gap-5">
                <Links projeto={projeto} />
                {!projeto.link && <Repositorio projeto={projeto} />}
              </div>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
