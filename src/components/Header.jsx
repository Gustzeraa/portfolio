import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { perfil } from "../data";

const links = [
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "experiencia", label: "Experiência" },
  { id: "stack", label: "Stack" },
  { id: "formacao", label: "Formação" },
  { id: "contato", label: "Contato" },
];

const iconeBotao =
  "inline-flex size-10 items-center justify-center rounded-lg border border-line transition-colors hover:border-ink";

export default function Header() {
  const [rolou, setRolou] = useState(false);
  const [ativo, setAtivo] = useState("sobre");
  const travado = useRef(false);

  useEffect(() => {
    const atualizar = () => {
      setRolou(window.scrollY > 8);

      // Depois de um clique no menu, espera a rolagem terminar
      if (travado.current) return;

      // Chegou no fim da página: marca a última seção
      const noFim =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (noFim) {
        setAtivo(links[links.length - 1].id);
        return;
      }

      // Senão, marca a última seção cujo topo já passou da barra
      let atual = links[0].id;
      for (const link of links) {
        const secao = document.getElementById(link.id);
        if (secao && secao.getBoundingClientRect().top <= 120) atual = link.id;
      }
      setAtivo(atual);
    };

    atualizar();
    window.addEventListener("scroll", atualizar, { passive: true });
    window.addEventListener("resize", atualizar);
    return () => {
      window.removeEventListener("scroll", atualizar);
      window.removeEventListener("resize", atualizar);
    };
  }, []);

  const aoClicar = (id) => {
    setAtivo(id);
    travado.current = true;
    const destravar = () => {
      travado.current = false;
      window.removeEventListener("scrollend", destravar);
    };
    window.addEventListener("scrollend", destravar);
    setTimeout(destravar, 1200);
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${
        rolou ? "border-line bg-paper/85" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a
          href="#sobre"
          onClick={() => aoClicar("sobre")}
          className="flex items-center gap-2 font-display text-base font-bold tracking-tight"
        >
          <span className="size-2.5 rounded-sm bg-ipe" aria-hidden="true" />
          {perfil.nome}
        </a>

        <nav aria-label="Seções" className="hidden lg:block">
          <ul className="flex gap-1 text-sm">
            {links.map((link) => {
              const atual = ativo === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => aoClicar(link.id)}
                    aria-current={atual ? "true" : undefined}
                    className={`block rounded-lg px-3 py-2 transition-colors ${
                      atual ? "bg-ink/10 font-medium text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={perfil.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={`${iconeBotao} hidden sm:inline-flex`}>
            <GithubIcon size={18} />
          </a>
          <a href={perfil.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={`${iconeBotao} hidden sm:inline-flex`}>
            <LinkedinIcon size={18} />
          </a>
          <a
            href={perfil.curriculo}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            Currículo
            <Download size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}