# Campaign presence

## Objetivo do modulo

Controlar presenca online em campanhas via Socket.IO.

## Responsabilidade principal

Autenticar sockets, validar acesso a campanha e emitir eventos de status/presenca.

## Funcionalidades existentes

- Autenticacao de socket por cookie JWT.
- Sala por usuario: `user:{userId}`.
- Sala por campanha: `campaign:{campaignId}`.
- Evento de entrada `presence:enter`.
- Eventos `presence:update`, `campaign:status` e `campaign:kicked`.
- Funcao `isCampaignOnline`.

## Dependencias internas e externas

- Internas: `auth/jwt`, `http/auth`, Prisma.
- Externas: Socket.IO e `cookie`.

## Modulos relacionados

- `campaigns/routes.ts`: consulta status online e emite eventos para usuarios.
- `SessionContext`: cria conexao Socket.IO.
- `CampaignLayout`: emite presenca.

## Pontos de entrada

- `socket.ts` com `setupCampaignPresence`.

## Fluxos importantes

- Mestre ativo marca a campanha como online.
- Jogador ativo so entra se campanha estiver online.
- Saida do mestre marca campanha offline e remove jogadores da sala.

## Arquivos criticos

- `socket.ts`.

## Observacoes tecnicas e debitos

- Estado e mantido em mapas em memoria; nao suporta multiplas instancias sem adaptacao.
- Nao ha testes automatizados deste modulo.

