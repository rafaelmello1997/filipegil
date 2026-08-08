const stats = [
  { valor: "2.057", label: "votos em 2024" },
  { valor: "3º", label: "vereador mais votado de Alvorada" },
  { valor: "2º", label: "vereador mais votado do PL" },
  { valor: "R$ 4,5 mi", label: "conquistados em emendas em pouco mais de 1 ano" },
];

const areas = [
  {
    titulo: "Segurança Pública",
    itens: [
      "R$ 500 mil para segurança pública",
      "R$ 300 mil para viatura da Guarda Municipal",
      "R$ 200 mil para segurança nas escolas (Face School)",
    ],
  },
  {
    titulo: "Educação",
    itens: [
      "R$ 200 mil para mobiliário escolar",
      "R$ 500 mil para Escola Cívico-Militar",
      "R$ 297 mil para Jogos Estudantis",
    ],
  },
  {
    titulo: "Saúde",
    itens: [
      "R$ 1,8 milhão para aquisição do tomógrafo",
      "R$ 200 mil para exames de imagem",
      "R$ 200 mil na modalidade PAP",
    ],
  },
  {
    titulo: "Assistência Social",
    itens: ["R$ 150 mil para aquisição de veículo ao MAE"],
  },
  {
    titulo: "Comunidade e Fé",
    itens: ["R$ 200 mil para a Marcha para Jesus"],
  },
];

export function Resultados() {
  return (
    <section id="resultados" className="bg-brand-blue-dark py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-sm font-bold uppercase tracking-wide text-brand-gold-light">
          Resultados de um primeiro mandato
        </h2>
        <p className="mt-3 max-w-2xl text-3xl font-black sm:text-4xl">
          O tempo de mandato não se mede pelo calendário. Se mede pelos
          resultados entregues.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
            >
              <div className="text-3xl font-black text-brand-gold-light sm:text-4xl">
                {stat.valor}
              </div>
              <div className="mt-2 text-xs font-medium text-white/70 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.titulo}
              className="rounded-2xl bg-white/95 p-6 text-brand-blue-dark shadow-lg"
            >
              <h3 className="text-lg font-bold">{area.titulo}</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                {area.itens.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-gold-dark" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
