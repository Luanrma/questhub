# Trade

## Objetivo do modulo

Enviar evento de troca de item entre usuarios.

## Responsabilidade principal

Receber requisicao HTTP autenticada e emitir `trade:received` para outro usuario.

## Funcionalidades existentes

- `POST /api/items/trade`.
- Emissao para sala `user:{toUserId}`.

## Dependencias internas e externas

- Interna: `requireAuth`.
- Externa: Socket.IO.

## Modulos relacionados

- `campaign-presence`: cria salas por usuario no Socket.IO.

## Pontos de entrada

- `routes.ts`.

## Fluxos importantes

- Exige apenas `toUserId`.
- `campaignId` e `item` sao opcionais e repassados ao evento.

## Arquivos criticos

- `routes.ts`.

## Observacoes tecnicas e debitos

- Nao ha validacao de estrutura de `item`.
- Nao ha verificacao de que remetente e destinatario compartilham a campanha.
- Nao foi encontrada tela web consumindo este endpoint.

