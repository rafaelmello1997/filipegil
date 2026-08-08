import Image from "next/image";
import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-diamond-pattern text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-end md:py-24">
        <div>
          <Image
            src="/logo-simples.png"
            alt="Filipe Gil"
            width={1142}
            height={369}
            priority
            className="h-16 w-auto drop-shadow-lg sm:h-20"
          />
          <span className="mt-6 inline-flex items-center rounded-full bg-brand-gold px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-brand-green-dark">
            Candidato a Deputado Estadual
          </span>
          <p className="mt-6 text-2xl font-black leading-tight text-brand-gold-light sm:text-3xl">
            Coragem pra falar.
            <br />
            TMJ pra mudar!
          </p>
          <p className="mt-5 max-w-lg text-base text-white/85 sm:text-lg">
            Empresário, pai de família e vereador mais votado de Alvorada em
            produção de resultados. Fé, família e trabalho a serviço do Rio
            Grande do Sul.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://chat.whatsapp.com/I8Um9R6HzfCGCLieYIhsch?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-bold text-brand-green-dark shadow-lg shadow-black/20 transition hover:brightness-105"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
              Participe do grupo do Gil
            </a>
            <a
              href="#apoio"
              className="rounded-full bg-brand-gold px-6 py-3 text-base font-bold text-brand-green-dark shadow-lg shadow-black/20 transition hover:bg-brand-gold-light"
            >
              Quero apoiar a campanha
            </a>
            <a
              href="#resultados"
              className="rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Ver resultados do mandato
            </a>
          </div>
        </div>

        <div className="relative -mb-16 h-[420px] w-full overflow-hidden sm:h-[520px] md:-mb-24 md:h-[600px] lg:h-[680px]">
          <Image
            src="/foto-filipe.png"
            alt="Filipe Gil"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
          />
        </div>
      </div>
    </section>
  );
}
