# Pathfinder 2e sheet UI

## Objetivo do modulo

Renderizar o formulario Pathfinder 2e no modal de ficha.

## Responsabilidade principal

Editar o bloco `data.pathfinder2e` e `metadata.bio` do envelope.

## Funcionalidades existentes

- Pagina Identidade.
- Pagina Atributos.
- Pagina Proficiencias.
- Edicao de bio e notas.
- Inputs numericos com limites minimos em alguns campos.

## Dependencias internas e externas

- Interna: tipos locais de Pathfinder 2e.

## Modulos relacionados

- `components/character_sheet/CharacterSheetModal.tsx`.
- API `pathfinder_2e_sheet`.

## Pontos de entrada

- `Pathfinder2eSheetForm.tsx`.
- `types.ts`.

## Fluxos importantes

- `onChangeSheet` substitui o envelope inteiro com o bloco Pathfinder atualizado.
- Proficiencias aceitam ranks 0, 2, 4, 6 e 8.

## Arquivos criticos

- `Pathfinder2eSheetForm.tsx`.
- `types.ts`.

## Observacoes tecnicas e debitos

- Labels e tipos sao duplicados em relacao ao backend.

