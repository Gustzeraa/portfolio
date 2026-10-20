export default function ProjectCover({ projeto, className = "" }) {
  if (projeto.imagem) {
    return (
      <img
        src={projeto.imagem}
        alt={`Tela do ${projeto.nome}`}
        loading="lazy"
        className="block h-auto w-full border-b border-line"
      />
    );
  }

  // Sem imagem: capa tipográfica com o nome do projeto
  return (
    <div aria-hidden="true" className={`flex items-end bg-paper p-6 ${className}`}>
      <span className="font-display text-4xl font-bold leading-none tracking-tight text-line sm:text-5xl">
        {projeto.nome}
      </span>
    </div>
  );
}