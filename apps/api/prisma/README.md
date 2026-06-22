# Prisma

## Objetivo do modulo

Definir o modelo relacional e migrations do banco PostgreSQL.

## Responsabilidade principal

Modelar usuarios, campanhas, personagens e vinculos entre campanhas e personagens.

## Funcionalidades existentes

- Enums de sistema, politica de entrada, status e papel em campanha.
- Modelos `User`, `Campaign`, `Character` e `CampaignCharacter`.
- Migrations versionadas.

## Dependencias internas e externas

- Externa: Prisma CLI e PostgreSQL.
- Interna: API consome Prisma Client em `src/db/prisma.ts`.

## Modulos relacionados

- `modules/auth`: usa `User`.
- `modules/characters`: usa `Character`.
- `modules/campaigns` e `campaign-presence`: usam `Campaign` e `CampaignCharacter`.

## Pontos de entrada

- `schema.prisma`.
- `migrations/*/migration.sql`.

## Fluxos importantes

- `CampaignCharacter` representa participacao de um personagem em uma campanha.
- `characterId` e unico em `CampaignCharacter`, impedindo o mesmo personagem em mais de uma campanha.
- `Character.sheet` guarda envelope JSON da ficha.

## Arquivos criticos

- `schema.prisma`.
- `migrations/migration_lock.toml`.

## Observacoes tecnicas e debitos

- Enum `DND_5E` existe, mas nao ha adapter de ficha nem fluxo web/API funcional para ele.
- `Character.deletedAt` existe, mas nao ha rota de exclusao/arquivamento implementada.

