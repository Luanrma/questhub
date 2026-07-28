# Trade — Diretrizes técnicas

* Usar `CampaignActor`, `Inventory` e `InventoryEntry`; nunca recriar vínculo por `Character`.
* Resolver autorização por `CampaignMember`.
* Validar a fronteira da campanha antes da transação.
* Bloquear transferência para o mesmo ator.
* Usar transação para decremento, remoção, criação ou agrupamento.
* Delegar compatibilidade de agrupamento ao `game_system`.
* Não interpretar `InventoryEntry.data` no módulo de trade.
