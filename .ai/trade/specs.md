# Trade — Especificação alvo

## Contrato

```json
{
  "campaignId": "campaign-id",
  "fromActorId": "actor-origin-id",
  "toActorId": "actor-destination-id",
  "inventoryEntryId": "entry-id",
  "quantity": 1
}
```

## Validações

1. Origem e destino existem como `CampaignActor`.
2. Ambos possuem o mesmo `campaignId` informado.
3. Origem e destino são diferentes.
4. O usuário autenticado é Mestre ou controla o ator de origem por `CampaignMember`.
5. A entrada pertence ao inventário do ator de origem.
6. `quantity` é positiva e não supera a quantidade disponível.
7. A política do `game_system` decide se a entrada pode ser agrupada no destino.
8. A transferência e a atualização das quantidades ocorrem em uma única transação.

## Resultado

* Se existir entrada agrupável no destino, sua quantidade é incrementada.
* Caso contrário, uma nova `InventoryEntry` é criada com cópia do JSON.
* A entrada de origem é removida quando sua quantidade chega a zero.
