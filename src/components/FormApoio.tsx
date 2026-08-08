"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

type Status = "idle" | "loading" | "success" | "error";

export function FormApoio() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const supabase = createClient();
    const { error } = await supabase.from("apoiadores").insert({
      nome: data.get("nome"),
      telefone: data.get("telefone"),
      email: data.get("email") || null,
      bairro: data.get("bairro") || null,
      mensagem: data.get("mensagem") || null,
      quer_ser_voluntario: data.get("voluntario") === "on",
    });

    if (error) {
      setStatus("error");
      setErrorMsg("Não foi possível enviar agora. Tente novamente em instantes.");
      return;
    }

    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
        <p className="text-xl font-bold text-brand-green-dark">
          Obrigado pelo seu apoio!
        </p>
        <p className="mt-2 text-neutral-600">
          Recebemos seu cadastro. Em breve a equipe do Filipe Gil entra em
          contato.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl bg-white p-6 shadow-xl sm:p-8"
    >
      <div>
        <label htmlFor="nome" className="text-sm font-semibold text-brand-green-dark">
          Nome completo
        </label>
        <input
          id="nome"
          name="nome"
          required
          className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/30"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="telefone" className="text-sm font-semibold text-brand-green-dark">
            WhatsApp
          </label>
          <input
            id="telefone"
            name="telefone"
            required
            placeholder="(51) 90000-0000"
            className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/30"
          />
        </div>
        <div>
          <label htmlFor="bairro" className="text-sm font-semibold text-brand-green-dark">
            Bairro / cidade
          </label>
          <input
            id="bairro"
            name="bairro"
            className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/30"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-semibold text-brand-green-dark">
          E-mail (opcional)
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/30"
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="text-sm font-semibold text-brand-green-dark">
          Mensagem (opcional)
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={3}
          className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/30"
        />
      </div>

      <label className="flex items-center gap-2 text-sm text-neutral-700">
        <input type="checkbox" name="voluntario" className="h-4 w-4 rounded border-neutral-300 text-brand-green" />
        Quero ser voluntário da campanha
      </label>

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-brand-gold px-6 py-3 text-base font-bold text-brand-green-dark transition hover:bg-brand-gold-light disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Quero apoiar Filipe Gil"}
      </button>
    </form>
  );
}
