# Chat — Contratos

## Persistência

```prisma
model ChatMessage {
  id         String
  campaignId String
  actorId    String
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
  "actorId": "actor-id",
  "content": "Mensagem"
}
```

O backend valida que `actorId` é o ator principal do membro autenticado e ativo naquela campanha. Tokens ou atores sem membro principal não enviam mensagens no MVP.
