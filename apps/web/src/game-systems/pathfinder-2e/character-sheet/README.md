# Pathfinder 2e sheet UI

## Status arquitetural

Este diretorio e a implementacao atual da UI de ficha Pathfinder 2e.

O destino arquitetural documentado em `.ai` e `apps/web/src/game-systems/pathfinder-2e/character-sheet`; novas telas e mecanicas Pathfinder 2e devem seguir esse limite de ruleset.

## Objetivo do modulo

Renderizar o formulario Pathfinder 2e no modal de ficha.

## Responsabilidade principal

Editar o bloco `data.pathfinder2e` do envelope.

## Funcionalidades existentes

- Aba Identidade e Status: identidade, hit points/status e atributos.
- Aba Proficiencias: somente as pericias oficiais do MVP. Armor class e iniciativa ficam em status.
- Inputs numericos com limites minimos em alguns campos.

## Dependencias internas e externas

- Interna: tipos locais de Pathfinder 2e.

## Modulos relacionados

- `game-systems/character-sheet/CharacterSheetModal.tsx`.
- API `pathfinder_2e_sheet`.

## Pontos de entrada

- `Pathfinder2eSheetForm.tsx`.
- `types.ts`.
- `pathfinder_2e_sheet.json`.

## Fluxos importantes

- `onChangeSheet` substitui o envelope inteiro com o bloco Pathfinder atualizado.
- Proficiencias aceitam ranks 0, 2, 4, 6 e 8.
- `pathfinder_2e_sheet.json` representa exatamente o envelope salvo em `Character.sheet`.

## Arquivos criticos

- `Pathfinder2eSheetForm.tsx`.
- `types.ts`.

## Observacoes tecnicas e debitos

- Labels e tipos sao duplicados em relacao ao backend.

