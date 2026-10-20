import { motion } from "motion/react";
import { MapPin, Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { perfil } from "../data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const iconeBotao =
  "inline-flex size-12 items-center justify-center rounded-full border border-line transition-colors hover:border-ink";

export default function Hero() {
  const [primeiroNome, ...resto] = perfil.nome.split(" ");

  return (
    <motion.section
      id="sobre"
      variants={container}
      initial="hidden"
      animate="show"
      className="pb-20 pt-14 sm:pb-28 sm:pt-24"
    >
      <motion.p variants={item} className="flex items-center gap-2 text-sm text-muted">
        <MapPin size={16} aria-hidden="true" />
        {perfil.local}
      </motion.p>

      <motion.h1
        variants={item}
        className="mt-6 font-display text-[clamp(3.25rem,11vw,8rem)] font-bold leading-[0.88] tracking-[-0.04em]"
      >
        {primeiroNome}
        <br />
        {resto.join(" ")}
      </motion.h1>

      <motion.div variants={item} className="mt-8 max-w-xl">
        <p className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{perfil.cargo}</p>
        <p className="mt-1 font-display text-lg font-medium sm:text-xl">
          {perfil.especialidades.map((item, i) => (
            <span key={item}>
              {i > 0 && <span className="mx-2 text-muted" aria-hidden="true">/</span>}
              <span className="text-ipe">{item}</span>
            </span>
          ))}
        </p>
        <p className="mt-3 text-lg leading-relaxed text-muted">{perfil.apresentacao}</p>
      </motion.div>

      <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#projetos"
          className="rounded-full bg-ink px-6 py-3 font-medium text-paper transition-opacity hover:opacity-85"
        >
          Ver projetos
        </a>
        <a
          href={perfil.curriculo}
          download
          className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium transition-colors hover:border-ink"
        >
          <Download size={18} aria-hidden="true" />
          Baixar currículo
        </a>
        <a href={`mailto:${perfil.email}`} aria-label="Enviar e-mail" className={iconeBotao}>
          <Mail size={20} aria-hidden="true" />
        </a>
        <a href={perfil.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconeBotao}>
          <LinkedinIcon size={20} />
        </a>
        <a href={perfil.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconeBotao}>
          <GithubIcon size={20} />
        </a>
      </motion.div>
    </motion.section>
  );
}
