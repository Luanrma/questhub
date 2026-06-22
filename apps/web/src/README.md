# Web src

## Objetivo do modulo

Concentrar o codigo da SPA React.

## Responsabilidade principal

Compor roteamento, estado global, UI, paginas e integracao com API.

## Funcionalidades existentes

- Bootstrap React.
- Rotas publicas, autenticadas e de campanha.
- Estilos globais.
- Assets importados.

## Dependencias internas e externas

- Internas: `contexts`, `layouts`, `pages`, `components`, `lib`.
- Externas: React e React Router.

## Modulos relacionados

- `apps/api/src/modules`.

## Pontos de entrada

- `main.tsx`.
- `App.tsx`.
- `index.css`.

## Fluxos importantes

- `main.tsx` monta `SessionProvider` antes do `BrowserRouter`.
- `App.tsx` define todos os grupos de rota.

## Arquivos criticos

- `App.tsx`.
- `main.tsx`.
- `index.css`.

## Observacoes tecnicas e debitos

- Comentarios e strings contem problemas de encoding.

