# API

## Objetivo do modulo

Fornecer a API HTTP, eventos Socket.IO e acesso a banco do QuestHub.

## Responsabilidade principal

Autenticar usuarios, persistir campanhas/personagens/fichas e publicar eventos de presenca e convites.

## Funcionalidades existentes

- Healthcheck `GET /api/health`.
- Cadastro, login, me e logout.
- CRUD parcial de personagens.
- Ficha Pathfinder 2e.
- Campanhas, convite, entrada, configuracao e jogadores.
- Presenca online via Socket.IO.
- Trade experimental por evento.

## Dependencias internas e externas

- Internas: `src/db`, `src/http`, `src/auth`, `src/modules/*`.
- Externas: Fastify, Socket.IO, Prisma, PostgreSQL, Zod, bcryptjs, jsonwebtoken.

## Modulos relacionados

- `apps/web`.
- `apps/api/prisma`.

## Pontos de entrada

- `src/server.ts`.
- `prisma/schema.prisma`.

## Fluxos importantes

- `server.ts` registra CORS, cookie plugin, Socket.IO e rotas.
- Rotas protegidas usam `requireAuth`.
- Prisma e inicializado por singleton.

## Arquivos criticos

- `src/server.ts`.
- `src/env.ts`.
- `src/db/prisma.ts`.
- `prisma/schema.prisma`.

## Observacoes tecnicas e debitos

- Regras de negocio estao majoritariamente dentro dos handlers.
- CORS em desenvolvimento e permissivo.
- Presenca online fica em memoria.
- Ha strings com possivel problema de encoding.

