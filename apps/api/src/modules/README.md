# API modules

## Objetivo do modulo

Agrupar funcionalidades de negocio da API.

## Responsabilidade principal

Registrar rotas HTTP e eventos relacionados aos dominios do QuestHub.

## Funcionalidades existentes

- Autenticacao.
- Campanhas.
- Presenca de campanha.
- Chat em tempo real.
- Personagens.
- Fichas.
- Trade experimental.

## Dependencias internas e externas

- Internas: `db`, `http`, `auth`.
- Externas: Fastify, Socket.IO, Prisma e Zod.

## Modulos relacionados

- `apps/web/src/pages`.
- `apps/web/src/contexts/SessionContext.tsx`.

## Pontos de entrada

- Cada subpasta exporta suas rotas/funcoes principais.

## Fluxos importantes

- `server.ts` registra todos os modulos explicitamente.

## Arquivos criticos

- `auth/routes.ts`.
- `campaigns/routes.ts`.
- `characters/routes.ts`.
- `game_systems/routes.ts`.
- `campaign-presence/socket.ts`.
- `chat/routes.ts`.
- `chat/socket.ts`.

## Observacoes tecnicas e debitos

- Padrao predominante e handler direto, sem camada formal de service/use-case.

