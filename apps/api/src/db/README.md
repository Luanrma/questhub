# DB

## Objetivo do modulo

Inicializar e exportar Prisma Client.

## Responsabilidade principal

Fornecer uma instancia unica de acesso ao PostgreSQL para toda a API.

## Funcionalidades existentes

- Usa `@prisma/adapter-pg`.
- Exige `DATABASE_URL`.
- Reaproveita `globalThis.__prisma` fora de producao.

## Dependencias internas e externas

- Externas: `@prisma/client`, `@prisma/adapter-pg`.

## Modulos relacionados

- Todos os modulos de negocio da API.

## Pontos de entrada

- `prisma.ts`.

## Fluxos importantes

- A instancia loga `warn` e `error` em desenvolvimento; em outros ambientes, apenas `error`.

## Arquivos criticos

- `prisma.ts`.

## Observacoes tecnicas e debitos

- Nao ha camada de repositorio; rotas consomem Prisma diretamente.

