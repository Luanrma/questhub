# Pathfinder 2e sheet UI

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

- `components/character_sheet/CharacterSheetModal.tsx`.
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

