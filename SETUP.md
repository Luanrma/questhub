# QuestHub — Setup (Windows / Docker)

Este repositório é um monorepo (npm workspaces):

- `apps/api` — API (Fastify + Socket.IO)
- `apps/web` — Frontend (React + Vite)
- `packages/shared` — pacote compartilhado

## Pré-requisitos

- Node.js 22+ (recomendado) e npm
- Docker Desktop (para o modo com `docker compose`)

## Opção A (recomendada): subir tudo com Docker

Na raiz do repositório:

```bash
docker compose up --build
```

Serviços/portas:

- Web: http://localhost:5173
- API: http://localhost:3001 (health: `GET /api/health`)
- Postgres: `localhost:5434` (user `questhub`, pass `questhub`, db `questhub_dev`)

### Credenciais DEV (login)

A API está com um login DEV simples:

- Email: `dev@questhub.local` (ou qualquer email)
- Senha: `dev` (padrão via `DEV_USER_PASSWORD`)

## Opção B: rodar local (sem Docker)

### 1) Instalar dependências

Na raiz do repositório:

```bash
npm ci
```

### 2) Configurar variáveis de ambiente

Crie os arquivos abaixo a partir dos exemplos:

- `apps/api/.env` (base: `apps/api/.env.example`)
- `apps/web/.env` (base: `apps/web/.env.example`)

### 3) Subir Postgres

Você pode usar apenas o Postgres via Docker:

```bash
docker compose up -d db
```

> Observação: no estado atual do código, a API ainda não está usando Prisma/DB em runtime, mas o `DATABASE_URL` já está preparado.

### 4) Subir a API

```bash
npm run dev -w apps/api
```

### 5) Subir o Web

Em outro terminal:

```bash
npm run dev -w apps/web -- --host 0.0.0.0 --port 5173
```

## Problemas comuns

- **Portas ocupadas**: ajuste `PORT` (API) e/ou a porta do Vite.
- **Vulnerabilidades no npm**: rode `npm audit` e, se fizer sentido, `npm audit fix` (cuidado com `--force`).

