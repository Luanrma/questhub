# QuestHub — Setup (Windows)

Monorepo (npm workspaces):
- `apps/api` — API (Fastify + Socket.IO)
- `apps/web` — Frontend (React + Vite)
- `packages/shared` — pacote compartilhado

## Pré-requisitos
- Node.js 22+ e npm
- Docker Desktop (recomendado para banco/stack completa)

## Rodar com Docker (recomendado)

Na raiz do repositório:

```bash
docker compose up --build
```

Serviços/portas:
- Web: http://localhost:5173
- API: http://localhost:3001 (health: `GET /api/health`)
- Postgres: `localhost:5434` (user `questhub`, pass `questhub`, db `questhub_dev`)

Credenciais DEV (login atual):
- Email: qualquer email (ex.: `dev@questhub.local`)
- Senha: `dev` (controlado por `DEV_USER_PASSWORD`)

## Rodar local (sem Docker)

### 1) Instalar dependências
Na raiz:
```bash
npm ci
```

### 2) Variáveis de ambiente
Crie a partir dos exemplos:
- `apps/api/.env` (base: `apps/api/.env.example`)
- `apps/web/.env` (base: `apps/web/.env.example`)

### 3) Subir Postgres (opcional)
Você pode subir só o banco via Docker:
```bash
docker compose up -d db
```

### 4) Subir API
```bash
npm run dev -w apps/api
```

### 5) Subir Web
```bash
npm run dev -w apps/web
```

