-- supabase-setup.sql
-- Cole no SQL Editor do Supabase (painel > SQL Editor > New query > Run).
-- Cria as duas tabelas que o site usa: cache de avaliações e posts do blog.

-- 1. Cache das avaliações do Google (1 linha por place_id)
create table if not exists avaliacoes_cache (
  place_id      text primary key,
  payload       jsonb not null,
  atualizado_em timestamptz not null default now()
);
alter table avaliacoes_cache enable row level security;

-- 2. Posts do blog
create table if not exists posts (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  titulo      text not null,
  resumo      text,
  conteudo    text,
  imagem_capa text,
  categoria   text,
  publicado   boolean not null default false,
  criado_em   timestamptz not null default now()
);
alter table posts enable row level security;

-- Observação de segurança:
-- RLS está LIGADO e sem políticas públicas de propósito. O site acessa essas
-- tabelas só pelo servidor (service role), que ignora RLS. Assim, nenhum
-- visitante consegue ler/escrever direto no banco pelo navegador.

-- Exemplo de post (opcional, para testar o blog):
-- insert into posts (slug, titulo, resumo, conteudo, categoria, publicado)
-- values (
--   'inspecao-predial-obrigatoria-vitoria',
--   'Inspeção predial obrigatória em Vitória: o que a Lei 9.418/2019 exige',
--   'Condomínios com mais de 10 anos precisam apresentar laudo. Entenda prazos e responsabilidades.',
--   'Conteúdo completo do artigo aqui, em texto ou Markdown...',
--   'INSPEÇÃO PREDIAL',
--   true
-- );
