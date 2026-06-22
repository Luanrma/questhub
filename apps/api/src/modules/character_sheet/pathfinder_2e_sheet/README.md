# Pathfinder 2e sheet

## Objetivo do modulo

Implementar o sistema de ficha Pathfinder 2e.

## Responsabilidade principal

Fornecer constantes, tipos, schema Zod e ficha default para o adapter de fichas.

## Funcionalidades existentes

- Sistema `PATHFINDER_2E`.
- Data key `pathfinder2e`.
- Versao `1`.
- Proficiencias por ranks 0, 2, 4, 6 e 8.
- Schema de identidade, atributos, pontos de vida, CA, iniciativa, percepcao, salvamentos e notas.
- Default sheet.

## Dependencias internas e externas

- Externa: Zod.
- Interna: contrato `CharacterSheetSystemAdapter`.

## Modulos relacionados

- `character_sheet/registry.ts`.
- Web: formulario Pathfinder 2e.

## Pontos de entrada

- `adapter.ts`.
- `schema.ts`.
- `default-sheet.ts`.
- `models.ts`.
- `constants.ts`.

## Fluxos importantes

- Adapter e registrado manualmente no registry global.
- A versao do envelope precisa bater com `PATHFINDER_2E_SHEET_VERSION`.

## Arquivos criticos

- `adapter.ts`.
- `schema.ts`.
- `default-sheet.ts`.

## Observacoes tecnicas e debitos

- O arquivo `default-sheet.json` existe, mas o codigo atual importa `default-sheet.ts`.

