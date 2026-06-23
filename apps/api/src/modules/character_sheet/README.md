# Character sheet

## Objetivo do modulo

Definir contrato, validacao e criacao de fichas de personagem.

## Responsabilidade principal

Garantir que fichas persistidas sigam envelope versionado e schema do sistema suportado.

## Funcionalidades existentes

- Envelope generico de ficha.
- Metadata com `bio`.
- Registry de adapters por sistema.
- Adapter Pathfinder 2e.
- Rotas para ficha default, leitura e salvamento.

## Dependencias internas e externas

- Internas: Prisma, `requireAuth`, submodulo `pathfinder_2e_sheet`.
- Externa: Zod.

## Modulos relacionados

- `characters`: cria fichas default e apresenta bio.
- `campaigns`: cria fichas default ao criar/vincular personagem.
- Web: `components/character_sheet`.

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
- Testes cobrem registry e schema Pathfinder, mas nao as rotas HTTP.

