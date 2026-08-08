import { FormApoio } from "@/components/FormApoio";

export function CtaApoio() {
  return (
    <section id="apoio" className="bg-neutral-50 py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-brand-green">
            Faça parte dessa caminhada
          </h2>
          <p className="mt-3 text-3xl font-black text-brand-green-dark sm:text-4xl">
            Ajude a levar fé, família e trabalho para o Parlamento gaúcho
          </p>
          <p className="mt-4 text-neutral-600">
            Cadastre-se para receber novidades da campanha, participar da
            rede de apoiadores e ajudar como voluntário.
          </p>
        </div>
        <FormApoio />
      </div>
    </section>
  );
}
