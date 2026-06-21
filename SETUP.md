# QuestHub - Setup (Windows)

Monorepo com dependências e infraestrutura centralizadas:

- `apps/api` - API (Fastify + Socket.IO)
- `apps/web` - Frontend (React + Vite)

Arquivos como `.env`, `.gitignore`, `package.json`, `node_modules` e configurações Docker devem existir somente na raiz. Configurações específicas do frontend ficam em `apps/web`.

## Pré-requisitos

- Node.js 22+ e npm
- Docker Desktop (recomendado para banco/stack completa)

## Rodar com Docker

Na raiz do repositório:

### 1. Variáveis de ambiente

Crie o arquivo `.env` na raiz do projeto:

```bash
cp .env.example .env
```

### 2. Subir serviços

```bash
docker compose up --build
```

### 3. Inicializar banco

Em outro terminal, com o Postgres já rodando:

```bash
npm run db:migrate
```

Serviços/portas:

- Web: http://localhost:5173
- API: http://localhost:3001 (`GET /api/health`)
- Postgres: `localhost:5434`

## Rodar local

### 1. Instalar dependências

Na raiz:

```bash
npm ci
```

### 2. Variáveis de ambiente

Crie o `.env` na raiz a partir do `.env.example`.

### 3. Subir Postgres

```bash
docker compose up -d db
```

### 4. Inicializar banco

```bash
npm run db:migrate
```

### 5. Subir API

```bash
npm run dev:api
```

### 6. Subir Web

```bash
npm run dev:web
```

## Script de inicialização

Na raiz do repo:

### Git Bash

```bash
./scripts/dev.sh
```

### PowerShell

```powershell
pwsh -File .\scripts\dev.ps1
```

Para parar o Postgres:

```bash
./scripts/stop.sh
```
