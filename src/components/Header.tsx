import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#sobre", label: "Quem é" },
  { href: "#resultados", label: "Resultados" },
  { href: "#leis", label: "Leis aprovadas" },
  { href: "#missao", label: "Missão" },
  { href: "#apoio", label: "Apoiar" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-green-dark/95 backdrop-blur supports-[backdrop-filter]:bg-brand-green-dark/80 border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="#top" className="flex items-center">
          <Image
            src="/logo-simples.png"
            alt="Filipe Gil"
            width={1142}
            height={369}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition hover:text-brand-gold-light"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#apoio"
          className="rounded-full bg-brand-gold px-4 py-2 text-sm font-bold text-brand-green-dark transition hover:bg-brand-gold-light"
        >
          Quero apoiar
        </a>
      </div>
    </header>
  );
}
