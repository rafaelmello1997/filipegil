import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { Resultados } from "@/components/Resultados";
import { Leis } from "@/components/Leis";
import { Missao } from "@/components/Missao";
import { Objecao } from "@/components/Objecao";
import { Posicionamento } from "@/components/Posicionamento";
import { CtaApoio } from "@/components/CtaApoio";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Sobre />
        <Resultados />
        <Leis />
        <Missao />
        <Objecao />
        <Posicionamento />
        <CtaApoio />
      </main>
      <Footer />
    </>
  );
}
