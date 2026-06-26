# Modulo: Chat em Tempo Real (Specs & Contracts)

## 1. Modelo Prisma

```prisma
model ChatMessage {
  id          String   @id @default(cuid())
  campaignId  String
  characterId String
  userId      String
  content     String
  createdAt   DateTime @default(now())

  campaign  Campaign  @relation(fields: [campaignId], references: [id])
  character Character @relation(fields: [characterId], references: [id])
  user      User      @relation(fields: [userId], references: [id])

  @@index([campaignId, createdAt])
}
```

## 2. API HTTP

### Listar mensagens

`GET /api/campaigns/:campaignId/chat/messages`

Resposta:

```json
[
  {
    "id": "message_id",
    "campaignId": "campaign_id",
    "characterId": "character_id",
    "characterName": "Arion",
    "role": "MASTER",
    "content": "Boa noite, aventureiros.",
    "createdAt": "2026-06-25T00:00:00.000Z",
    "mine": true
  }
]
```

Regras:
* Usuario precisa ter `CampaignCharacter` ativo na campanha.
* Retorna as ultimas 50 mensagens em ordem cronologica.

## 3. Socket.IO

### Criar mensagem

Evento cliente: `chat:message:create`

Payload:

```json
{
  "campaignId": "campaign_id",
  "characterId": "character_id",
  "content": "Mensagem"
}
```

Ack:

```json
{
  "ok": true,
  "message": {
    "id": "message_id",
    "campaignId": "campaign_id",
    "characterId": "character_id",
    "characterName": "Arion",
    "role": "PLAYER",
    "content": "Mensagem",
    "createdAt": "2026-06-25T00:00:00.000Z",
    "mine": true
  }
}
```

Evento broadcast: `chat:message:created`

Regras:
* `content` e obrigatorio depois de trim.
* `content` tem no maximo 500 caracteres.
* Usuario precisa ser dono do `characterId`.
* O personagem precisa estar ativo na campanha.
* `NPC` nao envia mensagem no MVP.
* Broadcast vai para `campaign:{campaignId}`.

### Rolagem rapida

Fluxo:
* UI exibe `D20` como dado selecionado inicial.
* UI abre menu no botao "Dados".
* Usuario escolhe uma das faces permitidas: `4`, `6`, `8`, `10`, `12`, `20`.
* A escolha altera o dado selecionado, mas nao rola automaticamente.
* Cliente calcula `roll = Math.floor(Math.random() * sides) + 1` ao clicar no botao do dado selecionado.
* Cliente envia `chat:message:create` com `content` no formato:

```text
ROLOU D20: 17
```

Regras:
* A rolagem exige campanha online, socket conectado e personagem ativo.
* A rolagem usa o mesmo `characterId` do personagem ativo na campanha.
* A mensagem retornada no ack deve ser inserida no chat do remetente.
* Demais participantes recebem a rolagem por `chat:message:created`.
* O cliente que executou a rolagem dispara a animacao 3D local com o mesmo dado e valor.

## 4. Criterios de Aceitacao
* Participante ativo ve historico ao abrir a mesa.
* Participante ativo envia mensagem e recebe ack.
* Outros participantes conectados recebem a mensagem em tempo real.
* Usuario sem participacao ativa recebe 403 no historico e erro no socket.
* Mensagem vazia ou acima do limite e recusada.
* O chat aparece no painel lateral direito conforme o layout do VTT.
* Ao clicar em "Dados", aparecem as opcoes D4, D6, D8, D10, D12 e D20.
* Ao selecionar uma opcao, o botao de rolagem passa a exibir o dado escolhido.
* Ao clicar no botao do dado selecionado, o valor rolado aparece no chat como mensagem.
* Ao clicar no botao do dado selecionado, o dado 3D rola sobre o VTT e revela o mesmo valor da mensagem.
