create table if not exists public.apoiadores (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  telefone text not null,
  email text,
  bairro text,
  mensagem text,
  quer_ser_voluntario boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.apoiadores enable row level security;

create policy "qualquer_um_pode_cadastrar_apoio"
  on public.apoiadores
  for insert
  to anon
  with check (true);
