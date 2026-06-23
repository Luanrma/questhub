# Components

## Objetivo do modulo

Armazenar componentes reutilizaveis da interface.

## Responsabilidade principal

Fornecer blocos visuais compartilhados e o modal de ficha.

## Funcionalidades existentes

- `Button`.
- `Aside`.
- `LoadingScreen`.
- Reexport `CharacterSheetModal`.
- Submodulo de ficha.

## Dependencias internas e externas

- Externas: React, React Router e Lucide React.
- Internas: `character_sheet`.

## Modulos relacionados

- Layouts e paginas.

## Pontos de entrada

- `Button.tsx`.
- `Aside.tsx`.
- `CharacterSheetModal.tsx`.

## Fluxos importantes

- `Aside` monta links por `campaignId`.
- `CharacterSheetModal.tsx` reexporta o componente real em `character_sheet`.

## Arquivos criticos

- `Button.tsx`.
- `Aside.tsx`.

## Observacoes tecnicas e debitos

- `Button` tem apenas variantes `primary` e `ghost`.
- `Aside` guarda estado local de colapso.

