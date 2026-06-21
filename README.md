# QuestHub

Plataforma para organizar campanhas de RPG: cadastro/login, criação e entrada em campanhas via **invite code**.

## Stack

- **Web**: React + Vite + TypeScript
- **API**: Node.js + Fastify + Socket.IO
- **Banco**: PostgreSQL + Prisma
- **Projeto**: monorepo com dependências e infraestrutura centralizadas na raiz

## Estrutura do repositório

- `apps/api` - API (Fastify)
- `apps/web` - Frontend (Vite)
- `scripts/` - scripts para iniciar/parar o ambiente

## Padrão do projeto

Arquivos globais ficam somente na raiz:

- `package.json` e `package-lock.json`
- `.env` e `.env.example`
- `.gitignore`
- `Dockerfile.dev` e `docker-compose.yml`

Não crie `package.json`, `.env`, `.env.example`, `.gitignore`, `Dockerfile` ou `node_modules` dentro de `apps/*`.

Configurações específicas do frontend, como `vite.config.ts`, `tsconfig*.json`, `eslint.config.js` e `postcss.config.mjs`, ficam em `apps/web`.

## Pré-requisitos

- Node.js 22+ e npm
- Docker Desktop (para o PostgreSQL)

## Setup rápido

Este fluxo sobe o banco, aplica migrations e inicia API + Web em um terminal só.

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

## Variáveis de ambiente

Os segredos/senhas não ficam hardcoded no repositório. Crie um arquivo `.env` na raiz do projeto:

```bash
cp .env.example .env
```

O arquivo `.env` da raiz é ignorado pelo Git. Ajuste `POSTGRES_PASSWORD` e `JWT_SECRET` antes de expor publicamente.

## Setup manual

Na raiz do repositório:

### 1. Instalar dependências

```bash
npm install
```

### 2. Subir PostgreSQL

```bash
docker compose up -d db
```

### 3. Aplicar migrations

```bash
npm run db:migrate
```

### 4. Rodar API e Web

Em um terminal:

```bash
npm run dev:api
```

Em outro terminal:

```bash
npm run dev:web
```

Web: http://localhost:5173
API: http://localhost:3001 (`GET /api/health`)

## Funcionalidades implementadas

### Autenticação

- `POST /api/register` - cria usuário (email válido + senha mínimo 8)
- `POST /api/sign-in` - login (banco)
- `GET /api/me` - dados do usuário autenticado (cookie JWT)
- `POST /api/logout` - logout

### Campanhas

- `GET /api/campaigns` - lista campanhas do usuário
- `POST /api/campaigns` - cria campanha (você vira GM e recebe invite code)
- `POST /api/campaigns/join` - entra por invite code (role GM/PLAYER)

## Notas

- Para encerrar o script de dev, use **Ctrl+C**.
- Para VPS, troque `POSTGRES_PASSWORD` e `JWT_SECRET`, use reverse proxy com TLS e não exponha o Postgres diretamente na internet.
