# Prisma: Contratos

* `Campaign` é a fronteira de isolamento do mundo.
* `CampaignMember` possui `campaignId`, `userId`, papel, status e um `actorId` principal opcional.
* `CampaignActor` pertence obrigatoriamente a uma campanha e não possui `userId`.
* `CampaignToken.actorId` é opcional e exclusivo; excluir o ator apenas desfaz o vínculo com o Token.
* `CampaignCharacterSheet.actorId` é obrigatório e exclusivo.
* `Inventory.actorId` é obrigatório e exclusivo.
* `InventoryEntry` mantém `quantity` como campo genérico e o item copiado em `data` JSON.
* Não devem existir modelos Prisma chamados `Character`, `CharacterSheet` ou `CampaignCharacter`.
* Migrações desta fase podem redefinir estruturas pré-release, pois o produto ainda não possui dados de produção.
