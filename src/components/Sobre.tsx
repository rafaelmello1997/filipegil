const fatos = [
  "41 anos",
  "Casado há mais de 20 anos com Thaís",
  "Pai do Andrei e do Davi",
  "Avô da Sofia",
  "Nascido e criado em Alvorada",
  "Formado em Administração de Empresas",
  "Empresário do ramo moveleiro há mais de 20 anos",
  "Filho de uma família empreendedora",
];

export function Sobre() {
  return (
    <section id="sobre" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-brand-green">
              Quem é Filipe Gil
            </h2>
            <p className="mt-3 text-3xl font-black text-brand-green-dark sm:text-4xl">
              Fé, família e trabalho antes da política
            </p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700">
              <p>
                Filipe Gil não nasceu na política. Construiu sua vida através
                do trabalho, da fé e da família. Antes de ocupar qualquer
                cargo público, já gerava empregos, enfrentava os desafios de
                empreender e vivia a realidade das famílias de Alvorada.
              </p>
              <p>
                Sua entrada na política não foi fruto de um projeto de poder,
                mas de um chamado de Deus para servir. Movido pela convicção
                de que poderia contribuir mais com sua cidade, aceitou o
                desafio de disputar uma eleição e representar a população no
                Legislativo Municipal.
              </p>
              <p>
                Durante essa caminhada conheceu o Deputado Federal Luciano
                Zucco, que se tornou uma referência política e um importante
                incentivador de sua trajetória pública.
              </p>
              <blockquote className="border-l-4 border-brand-gold pl-4 text-lg font-semibold italic text-brand-green-dark">
                &ldquo;Fazer o que é certo, e não o que é fácil.&rdquo;
              </blockquote>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 self-start rounded-2xl bg-neutral-50 p-6 sm:grid-cols-2">
            {fatos.map((fato) => (
              <div
                key={fato}
                className="flex items-start gap-2 rounded-lg bg-white p-3 text-sm font-medium text-neutral-700 shadow-sm"
              >
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-gold" />
                {fato}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
