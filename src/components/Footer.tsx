import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-auto bg-brand-green-dark py-8 text-center text-sm text-white/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Image
          src="/logo-simples.png"
          alt="Filipe Gil"
          width={1142}
          height={369}
          className="mx-auto h-10 w-auto"
        />
        <p className="mt-3">Candidato a Deputado Estadual pelo Rio Grande do Sul</p>
        <p className="mt-4 text-xs text-white/40">
          {new Date().getFullYear()} - Todos os direitos reservados. Material de campanha.
        </p>
      </div>
    </footer>
  );
}
