# Public assets

## Objetivo do modulo

Disponibilizar arquivos estaticos servidos diretamente pelo Vite.

## Responsabilidade principal

Guardar assets publicos referenciados por caminho absoluto na SPA.

## Funcionalidades existentes

- Avatares SVG em `/avatars/*.svg`.

## Dependencias internas e externas

- Consumido por `CharacterCreatePage`.

## Modulos relacionados

- `apps/web/src/pages/CharacterCreatePage.tsx`.

## Pontos de entrada

- `avatars/`.

## Fluxos importantes

- Presets de avatar sao salvos como caminhos internos, por exemplo `/avatars/hooded-ranger.svg`.

## Arquivos criticos

- `avatars/*.svg`.

## Observacoes tecnicas e debitos

- Nao ha manifesto de assets; a lista de presets e hardcoded no frontend.

