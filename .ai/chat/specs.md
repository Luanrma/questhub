# Chat — Contratos

## Persistência

```prisma
model ChatMessage {
  id         String
  campaignId String
  actorId    String?
  userId     String
  content    String
  createdAt  DateTime
}
```

## HTTP

`GET /api/campaigns/:campaignId/chat/messages`

Exige membro ativo e retorna as mensagens em ordem cronológica, com `actorId`, `actorName`, papel, conteúdo e indicador `mine`.

## Socket.IO

Evento: `chat:message:create`

```json
{
  "campaignId": "campaign-id",
  "content": "Mensagem"
}
```

O backend valida apenas o membro autenticado e ativo para o chat geral. Mensagens contextuais futuras poderão informar um `actorId` derivado de Token controlado, sem criar estado global.
