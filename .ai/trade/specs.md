# Modulo: Trade (Specs & Contracts)

## 1. Responsabilidade
Definir o contrato futuro para troca de itens entre personagens ativos na mesma campanha.

No estado atual do produto, trade ainda nao esta implementado. O endpoint legado existente nao deve ser considerado contrato valido.

## 2. Contrato Alvo

### Solicitar ou enviar trade

```http
POST /api/campaigns/:campaignId/trades
```

Payload alvo:

```json
{
  "fromCharacterId": "character_origem_id",
  "toCharacterId": "character_destino_id",
  "item": {
    "id": "item_id",
    "name": "Pocao de Cura",
    "quantity": 1
  }
}
```

## 3. Validacoes Obrigatorias
* Usuario autenticado e obrigatorio.
* `campaignId` e obrigatorio.
* `fromCharacterId` e obrigatorio.
* `toCharacterId` e obrigatorio.
* `fromCharacterId` deve pertencer ao usuario autenticado.
* `fromCharacterId` deve possuir `CampaignCharacter` com:
  * `campaignId` igual ao parametro da rota;
  * `status = ACTIVE`.
* `toCharacterId` deve possuir `CampaignCharacter` com:
  * `campaignId` igual ao parametro da rota;
  * `status = ACTIVE`.
* `fromCharacterId` e `toCharacterId` nao podem ser iguais.
* Trade entre personagens de campanhas diferentes deve retornar erro.
* Trade envolvendo personagem `PENDING`, `REJECTED`, `LEFT` ou `DEAD` deve retornar erro.

## 4. Eventos Realtime Alvo

Evento para o destinatario:

```text
trade:received
```

Payload alvo:

```json
{
  "campaignId": "campaign_id",
  "fromCharacterId": "character_origem_id",
  "toCharacterId": "character_destino_id",
  "item": {
    "id": "item_id",
    "name": "Pocao de Cura",
    "quantity": 1
  },
  "createdAt": "2026-06-29T00:00:00.000Z"
}
```

## 5. Criterios de Aceitacao
* Nao permite trade sem usuario autenticado.
* Nao permite trade direto entre usuarios.
* Nao permite trade se o personagem de origem nao pertence ao usuario autenticado.
* Nao permite trade se qualquer personagem nao estiver ativo na campanha.
* Nao permite trade entre campanhas diferentes.
* Quando o fluxo for implementado, a UI deve selecionar personagens da campanha, nao usuarios.
