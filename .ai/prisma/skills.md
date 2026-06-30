# Modulo: Prisma e Modelo Relacional (Skills & Tech)

## 1. Stack
* Prisma ORM.
* Prisma CLI para geracao de client e migrations.
* PostgreSQL como banco relacional.
* TypeScript no consumo do Prisma Client pela API.

## 2. Arquivos De Codigo
* `apps/api/prisma/schema.prisma`: schema canonico do Prisma.
* `apps/api/prisma/migrations/*/migration.sql`: migrations versionadas.
* `apps/api/prisma/migrations/migration_lock.toml`: lock de provider das migrations.
* `apps/api/src/db/prisma.ts`: instancia compartilhada do Prisma Client.

## 3. Padroes
* **Schema as Persistence Contract:** alteracoes estruturais de banco devem comecar no `schema.prisma`.
* **Versioned Migrations:** mudancas persistentes devem gerar migrations versionadas.
* **Module Ownership:** regras de negocio ficam nos modulos consumidores; Prisma representa persistencia e constraints.
* **JSON Envelope Boundary:** `Character.sheet` persiste JSON, mas validacao de contrato pertence a `game_systems`.

## 4. Restricoes
* Nao colocar regras mecanicas de Pathfinder 2e, D&D 5e ou outro ruleset no schema Prisma.
* Nao usar relacao direta usuario-campanha para participacao operacional; usar `CampaignCharacter`.
* Nao criar documentacao paralela em `apps/api/prisma/README.md`; esta pasta `.ai/prisma` e o local canonico.
* Alteracoes de banco devem considerar impacto em migrations, Prisma Client e testes unitarios.
