const missao = [
  "Fortalecer as famílias.",
  "Promover segurança pública.",
  "Defender uma educação baseada em valores.",
  "Garantir oportunidades para quem trabalha.",
  "Levar para o Parlamento a voz das pessoas que acreditam em Deus, na família e no trabalho.",
];

export function Missao() {
  return (
    <section id="missao" className="bg-gold-gradient py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-sm font-bold uppercase tracking-wide text-brand-green-dark/80">
          Qual é a sua missão
        </h2>
        <p className="mt-3 text-3xl font-black text-brand-green-dark sm:text-4xl">
          Uma sociedade forte é construída por famílias fortes
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-brand-green-dark/90">
          Educação de qualidade, segurança pública eficiente e oportunidades
          para quem trabalha.
        </p>

        <ul className="mt-10 space-y-3 text-left">
          {missao.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl bg-white/70 p-4 font-medium text-brand-green-dark shadow-sm backdrop-blur"
            >
              <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-green-dark" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
