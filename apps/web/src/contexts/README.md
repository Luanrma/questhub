# Contexts

## Objetivo do modulo

Gerenciar estado compartilhado da SPA.

## Responsabilidade principal

Manter sessao, campanhas, campanha ativa e conexao Socket.IO.

## Funcionalidades existentes

- `SessionProvider`.
- `useSession`.
- `refreshMe`.
- `loadCampaigns`.
- `signIn`.
- `logout`.
- `enterPresence`.
- Persistencia de campanha ativa em `localStorage`.

## Dependencias internas e externas

- Interna: `lib/api`.
- Externas: React e `socket.io-client`.

## Modulos relacionados

- Layouts autenticados.
- Paginas de campanha.
- API auth, campaigns e presence.

## Pontos de entrada

- `SessionContext.tsx`.

## Fluxos importantes

- Ao montar, carrega `/api/me` e campanhas.
- Ao autenticar, abre Socket.IO com credenciais.
- Eventos Socket.IO atualizam campanhas e exibem `alert`.

## Arquivos criticos

- `SessionContext.tsx`.

## Observacoes tecnicas e debitos

- Notificacoes usam `alert`, o que acopla eventos globais a UX bloqueante.
- Tipos de payload Socket.IO usam `any`.

