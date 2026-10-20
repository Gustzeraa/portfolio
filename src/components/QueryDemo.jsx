import { useState } from "react";

const TOTAL_ANTES = 101;
const TOTAL_DEPOIS = 2;

const codigoAntes = `ativos = Ativo.objects.all()

for ativo in ativos:
    ativo.categoria.nome  # nova consulta a cada ativo`;

const codigoDepois = `ativos = (
    Ativo.objects
    .select_related("categoria")
    .prefetch_related("movimentacoes")
)

for ativo in ativos:
    ativo.categoria.nome  # já veio no JOIN`;

const opcoes = [
  { label: "Antes", valor: false },
  { label: "Depois", valor: true },
];

export default function QueryDemo() {
  const [otimizado, setOtimizado] = useState(false);
  const total = otimizado ? TOTAL_DEPOIS : TOTAL_ANTES;

  return (
    <div className="rounded-2xl border border-line bg-paper p-5 sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <p aria-live="polite">
          <span className="font-display text-6xl font-bold leading-none tabular-nums">{total}</span>
          <span className="ml-2 text-muted">consultas ao banco</span>
        </p>

        <div role="group" aria-label="Comparar versões" className="inline-flex rounded-full border border-line p-1 text-sm">
          {opcoes.map((opcao) => {
            const ativo = otimizado === opcao.valor;
            return (
              <button
                key={opcao.label}
                type="button"
                aria-pressed={ativo}
                onClick={() => setOtimizado(opcao.valor)}
                className={`rounded-full px-4 py-1.5 font-medium transition-colors ${
                  ativo ? "bg-ink text-paper" : "text-muted hover:text-ink"
                }`}
              >
                {opcao.label}
              </button>
            );
          })}
        </div>
      </div>

      <div aria-hidden="true" className="mt-6 flex flex-wrap gap-1">
        {Array.from({ length: TOTAL_ANTES }, (_, i) => {
          const aceso = !otimizado || i < TOTAL_DEPOIS;
          return (
            <span
              key={i}
              className="size-2.5 rounded-[2px] transition-colors duration-300 motion-reduce:transition-none"
              style={{
                backgroundColor: aceso
                  ? otimizado
                    ? "var(--color-ipe)"
                    : "var(--color-ink)"
                  : "var(--color-line)",
                transitionDelay: `${(otimizado ? TOTAL_ANTES - i : i) * 4}ms`,
              }}
            />
          );
        })}
      </div>

      <pre className="mt-6 overflow-x-auto rounded-xl border border-line bg-surface p-4 text-[13px] leading-relaxed">
        <code>{otimizado ? codigoDepois : codigoAntes}</code>
      </pre>

      <p className="mt-3 text-sm text-muted">
        Listagem com 100 ativos. Cada quadrado é uma consulta ao banco.
      </p>
    </div>
  );
}
