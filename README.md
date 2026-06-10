# MG Perícias — Site (Next.js)

Site institucional da MG Perícias recriado em Next.js, com blog gerenciável (Supabase), avaliações reais do Google (Places API) e formulário de contato por e-mail (Resend).

## Como rodar no Cursor (passo a passo)

### 1. Instalar dependências
Abra a pasta no Cursor e, no terminal:
```bash
npm install
```

### 2. Variáveis de ambiente
Copie `.env.local.example` para `.env.local` e preencha os valores.
IMPORTANTE: nenhuma variável pode ter `NEXT_PUBLIC_` (todas são privadas).

```bash
cp .env.local.example .env.local
```

Valores necessários:
- `GOOGLE_PLACES_API_KEY` — chave da Places API (você já criou)
- `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY` — em Supabase > Project Settings > API
- `RESEND_API_KEY` — em resend.com > API Keys

### 3. Criar as tabelas no Supabase
No painel do Supabase: SQL Editor > New query > cole o conteúdo de
`supabase-setup.sql` > Run. Isso cria as tabelas `posts` e `avaliacoes_cache`.

### 4. Rodar localmente
```bash
npm run dev
```
Abra http://localhost:3000

### 5. Subir para o GitHub
```bash
git init
git add .
git commit -m "Site MG Pericias em Next.js"
```
Depois crie o repositório no GitHub e siga as instruções de `git remote add` / `git push`.

### 6. Deploy no Vercel
Em vercel.com > Add New Project > importe o repositório > adicione as MESMAS
variáveis de ambiente do `.env.local` nas configurações do projeto > Deploy.

### 7. Travar a chave do Google por domínio
Depois do deploy: Google Cloud Console > Credenciais > sua chave >
Restrições de aplicativo > Sites > adicione o domínio do Vercel.

## Estrutura

```
app/
  layout.tsx          → layout raiz + SEO + schema LocalBusiness
  page.tsx            → home (todas as seções)
  globals.css         → todos os estilos
  api/contato/route.ts → formulário via Resend
  blog/page.tsx       → lista de posts
  blog/[slug]/page.tsx → post individual
  sitemap.ts, robots.ts
components/
  Header, Footer, WhatsAppButton, ContactForm, Avaliacoes
lib/
  supabase.ts         → conexão + funções do blog
  avaliacoes.ts       → Google Places + cache
```

## Publicar um post no blog

Pelo painel do Supabase (Table Editor > tabela `posts` > Insert row):
preencha `slug`, `titulo`, `resumo`, `conteudo`, `categoria`, marque
`publicado` = true. O post aparece automaticamente em /blog.

## Notas

- As imagens hoje são carregadas do servidor antigo (mgpericias.com.br). Quando
  possível, baixe-as para `public/images/` e troque as URLs, para o site novo
  não depender do antigo.
- O formulário precisa de um domínio verificado no Resend para enviar de
  `contato@mgpericias.com.br`. Para testes, use `onboarding@resend.dev` no campo
  `from` em `app/api/contato/route.ts`.
