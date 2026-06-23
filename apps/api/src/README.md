# API src

## Objetivo do modulo

Concentrar o codigo TypeScript executado pela API.

## Responsabilidade principal

Compor servidor, ambiente, autenticacao, banco e modulos de negocio.

## Funcionalidades existentes

- Bootstrap Fastify.
- CORS e cookies.
- Socket.IO.
- Registro de rotas.
- Agregador de testes unitarios.

## Dependencias internas e externas

- Internas: `auth`, `db`, `http`, `modules`.
- Externas: Fastify, Socket.IO e plugins.

## Modulos relacionados

- `apps/api/prisma`.
- `apps/web/src/lib/api.ts`.

## Pontos de entrada

- `server.ts`.
- `unit.test.ts`.

## Fluxos importantes

- `env.ts` carrega `.env` da raiz.
- `server.ts` instancia Fastify, registra plugins, cria presenca e registra rotas.

## Arquivos criticos

- `server.ts`.
- `env.ts`.

## Observacoes tecnicas e debitos

- `server.ts` inicia o listener diretamente; isso dificulta testes de integracao do app sem bind de porta.

