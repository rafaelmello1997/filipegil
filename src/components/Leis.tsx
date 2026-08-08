const leis = [
  "Escola Cívico-Militar",
  "Hora Cívica",
  "Semana do Veterano Militar",
  "Projetos voltados à proteção da infância",
  "Projetos de valorização da família",
  "Inclusão e atenção às pessoas com TEA",
  "Participação comunitária e voluntariado",
  "Cultura e desenvolvimento econômico",
];

export function Leis() {
  return (
    <section id="leis" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-sm font-bold uppercase tracking-wide text-brand-green">
          Leis e projetos que viraram realidade
        </h2>
        <p className="mt-3 max-w-2xl text-3xl font-black text-brand-green-dark sm:text-4xl">
          O objetivo nunca foi só apresentar projetos. Foi entregar resultados.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {leis.map((lei) => (
            <div
              key={lei}
              className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm font-semibold text-brand-green-dark"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-green-dark">
                ✓
              </span>
              {lei}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
