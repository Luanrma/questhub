# Modulo: Prisma e Modelo Relacional (Specs & Contracts)

## 1. Responsabilidade
Definir os contratos persistidos pelo Prisma e as constraints relacionais basicas do QuestHub.

## 2. Pontos De Entrada
```text
apps/api/prisma/schema.prisma
apps/api/prisma/migrations/*/migration.sql
apps/api/src/db/prisma.ts
```

## 3. Modelos Atuais
Modelos documentados:
* `User`
* `Campaign`
* `Character`
* `CampaignCharacter`

Enums documentados:
* Sistema de jogo.
* Politica de entrada de campanha.
* Status de vinculo em campanha.
* Papel operacional em campanha.

## 4. Regras Persistidas
* `CampaignCharacter` e o vinculo operacional entre personagem e campanha.
* `CampaignCharacter.characterId` e unico no modelo atual.
* `Character.sheet` persiste o envelope JSON de ficha.
* `Character.deletedAt` existe para arquivamento/exclusao logica, mas ainda nao possui fluxo operacional completo.

## 5. Relacao Com Rulesets
* Prisma pode armazenar identificadores de sistema e JSONs de ficha.
* Prisma nao valida campos internos de `data.pathfinder2e` ou de qualquer outro ruleset.
* Validacao de ficha pertence a `apps/api/src/modules/game_systems/[system]/character_sheet`.
* O enum `DND_5E` pode existir como identificador reservado sem implicar fluxo funcional.

## 6. Criterios De Aceitacao
* Migrations devem permanecer versionadas em `apps/api/prisma/migrations`.
* Repositories de modulo, dentro de `repositories/read.ts` e `repositories/write.ts`, devem consumir Prisma Client por `apps/api/src/db/prisma.ts`.
* Rotas, presenters, validators e services nao devem acessar Prisma diretamente.
* Participacao em campanha deve continuar modelada por `CampaignCharacter`.
* O envelope JSON em `Character.sheet` deve continuar validavel pelo registry de `game_systems`.
