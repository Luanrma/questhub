# Layouts

## Objetivo do modulo

Definir estruturas visuais e guardas de rota.

## Responsabilidade principal

Separar experiencia publica, autenticada e interna de campanha.

## Funcionalidades existentes

- `PublicLayout`: login/cadastro com hero.
- `AuthedLayout`: paginas autenticadas sem menu lateral.
- `CampaignLayout`: paginas de campanha com aside e presenca.
- `PrivateLayout`: guarda autenticado simples.

## Dependencias internas e externas

- Internas: `SessionContext`, `Aside`, `Button`, `LoadingScreen`, `lib/api`.
- Externas: React Router.

## Modulos relacionados

- `App.tsx`.
- `pages`.

## Pontos de entrada

- `PublicLayout.tsx`.
- `AuthedLayout.tsx`.
- `CampaignLayout.tsx`.
- `PrivateLayout.tsx`.

## Fluxos importantes

- `CampaignLayout` define campanha ativa e emite presenca.
- Jogador sem mestre online e redirecionado para `/campaigns`.

## Arquivos criticos

- `CampaignLayout.tsx`.

## Observacoes tecnicas e debitos

- `PrivateLayout` nao e usado por `App.tsx`.

