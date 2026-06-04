# QuestHub

Plataforma para organizar campanhas de RPG: cadastro/login, criação e entrada em campanhas via **invite code**.

## Stack

- **Web**: React + Vite + TypeScript (estilo inspirado no projeto `rpkage`)
- **API**: Node.js + Fastify + Socket.IO
- **Banco**: PostgreSQL + Prisma
- **Monorepo**: npm workspaces

## Estrutura do repositório

- `apps/api` — API (Fastify)
- `apps/web` — Frontend (Vite)
- `packages/shared` — pacote compartilhado
- `scripts/` — scripts para iniciar/parar o ambiente

## Pré-requisitos

- Node.js 22+ e npm
- Docker Desktop (para o PostgreSQL)

## Setup rápido (recomendado)

> Este fluxo sobe o banco (Docker), aplica migrations e inicia API + Web **em um terminal só**.

### Git Bash

```bash
./scripts/dev.sh
```

### PowerShell

```powershell
pwsh -File .\scripts\dev.ps1
```

Para parar os containers:

```bash
./scripts/stop.sh
```

## Setup manual (passo a passo)

Na raiz do repositório:

### 1) Instalar dependências

```bash
npm install
```

### 2) Subir PostgreSQL

```bash
docker compose up -d db
```

### 3) Variáveis de ambiente

Crie os arquivos a partir dos exemplos:

- `apps/api/.env` (base: `apps/api/.env.example`)
- `apps/web/.env` (base: `apps/web/.env.example`)

### 4) Migrations (Prisma)

```bash
npm run db:migrate -w apps/api
```

### 5) Rodar API e Web

Em um terminal:

```bash
npm run dev -w apps/api
```

Em outro terminal:

```bash
npm run dev -w apps/web
```

Web: http://localhost:5173  
API: http://localhost:3001 (`GET /api/health`)

## Funcionalidades implementadas

### Autenticação

- `POST /api/register` — cria usuário (email válido + senha mínimo 8)
- `POST /api/sign-in` — login (banco)
- `GET /api/me` — dados do usuário autenticado (cookie JWT)
- `POST /api/logout` — logout

### Campanhas

- `GET /api/campaigns` — lista campanhas do usuário
- `POST /api/campaigns` — cria campanha (você vira GM e recebe invite code)
- `POST /api/campaigns/join` — entra por invite code (role GM/PLAYER)

## Notas

- O arquivo `apps/api/.env` é ignorado pelo Git (não sobe para o GitHub).
- Para encerrar o script de dev, use **Ctrl+C**.
