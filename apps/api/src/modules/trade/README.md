# Trade

## Estado atual

Este modulo contem apenas um stub tecnico legado.

Ele ainda nao representa o contrato de produto de trade do QuestHub.

## Contrato de produto esperado

Trade deve acontecer entre `Character` ativos que pertencam a mesma `campaignId`.

Nao deve existir trade operacional direto entre usuarios.

## Dependencias internas e externas

- Interna: `requireAuth`.
- Externa: Socket.IO.

## Modulos relacionados

- `campaign-presence`: cria salas por usuario no Socket.IO.

## Pontos de entrada

- `routes.ts`.

## Limitacoes do stub atual

O endpoint atual `POST /api/items/trade`:

* usa `toUserId`;
* nao recebe `fromCharacterId`;
* nao recebe `toCharacterId`;
* nao valida se os personagens pertencem a mesma campanha;
* nao valida `CampaignCharacter.status = ACTIVE`;
* nao valida ownership do personagem de origem;
* nao persiste inventario ou historico.

## Arquivos criticos

- `routes.ts`.

## Proximo passo

Antes de qualquer uso de produto, este stub deve ser substituido pelo contrato documentado em `.ai/trade`.

