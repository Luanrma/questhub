# Game systems

## Status arquitetural

Este modulo e a implementacao backend de sistemas de jogo/rulesets.

Ele concentra o envelope comum de `Character.sheet`, o registry de adapters e as rotas HTTP relacionadas a ficha. Regras especificas ficam dentro de cada ruleset, por exemplo `pathfinder_2e/character_sheet`.

## Objetivo do modulo

Definir contratos e registry de sistemas de jogo.

## Responsabilidade principal

Garantir que dados persistidos sigam envelope versionado e sejam validados pelo adapter do ruleset correto.

## Funcionalidades existentes

- Envelope generico de ficha.
- Metadata com `bio`.
- Registry de adapters por sistema.
- Adapter de ficha Pathfinder 2e em `pathfinder_2e/character_sheet`.
- Rotas para ficha default, leitura e salvamento.

## Dependencias internas e externas

- Internas: Prisma, `requireAuth`, submodulo `pathfinder_2e/character_sheet`.
- Externa: Zod.

## Modulos relacionados

- `characters`: cria fichas default e apresenta bio.
- `campaigns`: cria fichas default ao criar/vincular personagem.
- Web: `game-systems/[system-slug]/character-sheet`, como `game-systems/pathfinder-2e/character-sheet`.

## Pontos de entrada

- `index.ts`.
- `routes.ts`.
- `registry.ts`.
- `schemas.ts`.
- `metadata.ts`.

## Fluxos importantes

- `buildDefaultCharacterSheetEnvelope(system)` busca adapter e monta envelope.
- `validateCharacterSheetEnvelope` valida envelope, versao, data key e schema especifico.
- Salvamento de ficha rejeita sistema incompativel com campanha vinculada.

## Arquivos criticos

- `registry.ts`.
- `routes.ts`.
- `schemas.ts`.

## Observacoes tecnicas e debitos

- Apenas `PATHFINDER_2E` possui adapter.
- `DND_5E` existe no enum Prisma, mas nao possui adapter de ficha e nao e aceito nos fluxos atuais de criacao.
- Testes cobrem registry e schema Pathfinder, mas nao as rotas HTTP.

