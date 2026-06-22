# Apps

## Objetivo do modulo

Agrupar os aplicativos executaveis do monorepo QuestHub.

## Responsabilidade principal

Separar API backend (`apps/api`) e SPA frontend (`apps/web`) mantendo dependencias e scripts centralizados na raiz.

## Funcionalidades existentes

- API Fastify/Socket.IO.
- Web React/Vite.

## Dependencias internas e externas

- Depende dos scripts e dependencias da raiz.
- `apps/web` depende da API exposta por `apps/api`.
- `apps/api` depende do PostgreSQL e Prisma.

## Modulos relacionados

- `scripts`.
- `docker-compose.yml`.

## Pontos de entrada

- `apps/api/src/server.ts`.
- `apps/web/src/main.tsx`.

## Fluxos importantes

- Web autentica e consome API via cookies.
- Web abre Socket.IO contra API apos login.

## Arquivos criticos

- `apps/api/prisma/schema.prisma`.
- `apps/web/vite.config.ts`.

## Observacoes tecnicas e debitos

- Nao criar `package.json`, `.env`, Dockerfile ou `node_modules` dentro de `apps/*`.

