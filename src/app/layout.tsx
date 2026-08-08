import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "Filipe Gil - Candidato a Deputado Estadual";
const description =
  "Filipe Gil, vereador de Alvorada, candidato a Deputado Estadual pelo Rio Grande do Sul. Coragem pra falar. TMJ pra mudar!";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Filipe Gil",
    "Deputado Estadual",
    "Rio Grande do Sul",
    "Alvorada",
    "candidato",
    "eleicoes 2026",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Filipe Gil",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
