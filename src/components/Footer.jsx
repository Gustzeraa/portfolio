import { perfil } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-center text-sm text-muted">
      <p>
        © {new Date().getFullYear()} {perfil.nome}. Feito com React, Vite e Tailwind CSS.
      </p>
    </footer>
  );
}
