# Modulo: Configuracoes de Usuario por Campanha (Specs & Contracts)

## 1. Modelo Prisma

```prisma
model CampaignUserSettings {
  id         String   @id @default(cuid())
  campaignId String
  userId     String
  settings   Json
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  campaign Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  user     User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([campaignId, userId])
  @@index([userId])
}
```

`Campaign` deve expor `userSettings CampaignUserSettings[]`.
`User` deve expor `campaignSettings CampaignUserSettings[]`.

## 2. JSON Canonico

```ts
type CampaignUserSettings = {
  dice: {
    autoClear: number | 'manual'
    showResultPopup: boolean
  }
}
```

Defaults:

```json
{
  "dice": {
    "autoClear": 3,
    "showResultPopup": true
  }
}
```

Regras:
* `dice.autoClear` aceita numeros inteiros de 3 a 10 ou `"manual"`.
* `"manual"` representa modo `Permanente`.
* `dice.showResultPopup` usa `true` por padrao.
* Campos ou namespaces desconhecidos devem ser preservados quando possivel.
* Campos conhecidos invalidos devem voltar ao default.

## 3. Contratos HTTP

### Buscar minhas configuracoes da campanha

```http
GET /api/campaigns/:campaignId/my-settings
```

Resposta:

```json
{
  "settings": {
    "dice": {
      "autoClear": 3,
      "showResultPopup": true
    }
  }
}
```

Regras:
* Requer usuario autenticado.
* Requer `CampaignCharacter` do usuario na campanha com status `ACTIVE`.
* Se ainda nao existir linha no banco, retorna defaults sem criar registro.

### Salvar minhas configuracoes da campanha

```http
PATCH /api/campaigns/:campaignId/my-settings
```

Payload:

```json
{
  "settings": {
    "dice": {
      "autoClear": "manual",
      "showResultPopup": true
    }
  }
}
```

Resposta:

```json
{
  "settings": {
    "dice": {
      "autoClear": "manual",
      "showResultPopup": true
    }
  }
}
```

Regras:
* Requer usuario autenticado.
* Requer `CampaignCharacter` do usuario na campanha com status `ACTIVE`.
* Deve fazer upsert por `(campaignId, userId)`.
* Deve normalizar o namespace `dice` antes de persistir.
* Deve preservar namespaces existentes fora de `dice`.

## 4. Fluxo Frontend
1. Ao montar a campanha, o frontend tenta carregar `GET /api/campaigns/:campaignId/my-settings`.
2. A resposta e salva no `localStorage` como cache por campanha.
3. O VTT le o cache local para renderizar e reagir sem esperar o backend.
4. Ao alterar configuracoes, a UI atualiza `localStorage` imediatamente.
5. Em seguida, a UI envia `PATCH /api/campaigns/:campaignId/my-settings`.
6. Se o `PATCH` falhar, a configuracao local pode permanecer aplicada e a UI pode exibir aviso nao bloqueante.

## 5. Criterios de Aceitacao
* O mesmo usuario pode ter configuracoes diferentes em campanhas diferentes.
* Usuarios diferentes na mesma campanha podem ter configuracoes diferentes.
* Abrir uma campanha carrega configuracoes do banco uma vez e hidrata o cache local.
* Trocar uma preferencia na UI altera a mesa sem reload.
* Recarregar a pagina restaura o cache local e, ao abrir a campanha, sincroniza com o backend.
* A pagina de configuracoes pode agrupar preferencias locais em secoes recolhiveis, desde que o colapso seja apenas estado visual local e nao altere o contrato persistido.
