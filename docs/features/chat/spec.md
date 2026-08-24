# Chat — Contratos

## Persistência

O Chat é exclusivo para diálogo entre participantes e atores. Rolagens, resultados e demais eventos mecânicos pertencem ao Campaign Game Log e nunca criam `ChatMessage`.

```prisma
model ChatMessage {
  id                     String
  campaignId             String
  actorId                String?
  userId                 String?
  authorName             String
  authorRole             CampaignMemberRole
  actorNameSnapshot      String?
  actorAvatarUrlSnapshot String?
  content                String
  createdAt              DateTime
}
```

- `actorId` e `userId` usam `SET NULL` quando a entidade original é excluída.
- Nome, papel e identidade visual usados no momento do envio permanecem gravados como snapshot.
- Uma mensagem nunca pode referenciar ator de outra campanha.

## HTTP

`GET /api/campaigns/:campaignId/chat/messages`

Exige membro ativo e retorna as mensagens em ordem cronológica, com `actorId`, `actorName`, avatar, papel, conteúdo e indicador `mine`.

## Socket.IO

Evento: `chat:message:create`

```json
{
  "campaignId": "campaign-id",
  "actorId": "actor-id-opcional",
  "content": "Mensagem"
}
```

O backend valida membro ativo. Quando `actorId` é informado, o ator deve pertencer à campanha e ser controlado pelo membro, salvo quando o remetente é o Mestre.

O evento `chat:message:create` não aceita payload de rolagem ou evento mecânico. Mensagens históricas criadas antes desta separação permanecem intactas; não há migração retroativa neste recorte.
