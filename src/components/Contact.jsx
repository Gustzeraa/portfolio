import { MessageCircle, Download } from "lucide-react";
import Section from "./Section";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { perfil } from "../data";

const linkClasse = "inline-flex items-center gap-2 font-medium hover:text-muted";

export default function Contact() {
  return (
    <Section id="contato" title="Contato">
      <p className="max-w-xl text-lg leading-relaxed text-muted">
        Aberto a novas oportunidades e a conversas sobre projetos. Pode entrar em contato comigo pelo e-mail ou pelas redes sociais.
      </p>
      <a
        href={`mailto:${perfil.email}`}
        className="mt-8 inline-block break-all font-display text-2xl font-bold tracking-tight underline decoration-ipe decoration-4 underline-offset-8 transition-opacity hover:opacity-75 sm:text-3xl"
      >
        {perfil.email}
      </a>
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        <li>
          <a href={perfil.linkedin} target="_blank" rel="noreferrer" className={linkClasse}>
            <LinkedinIcon size={18} />
            linkedin.com/in/ghssouza
          </a>
        </li>
        <li>
          <a href={perfil.github} target="_blank" rel="noreferrer" className={linkClasse}>
            <GithubIcon size={18} />
            github.com/Gustzeraa
          </a>
        </li>
        <li>
          <a href={perfil.whatsapp} target="_blank" rel="noreferrer" className={linkClasse}>
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp {perfil.telefone}
          </a>
        </li>
        <li>
          <a href={perfil.curriculo} download className={linkClasse}>
            <Download size={18} aria-hidden="true" />
            Baixar currículo
          </a>
        </li>
      </ul>
    </Section>
  );
}