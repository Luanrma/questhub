# Prisma: Contratos

* `Campaign` é a fronteira de isolamento do mundo.
* `CampaignMember` possui `campaignId`, `userId`, papel e status; não referencia personagem principal.
* `CampaignActor` pertence obrigatoriamente a uma campanha e não possui `userId`.
* `CampaignActor.controllerMemberId` é opcional e representa o único vínculo persistido de controle do ator.
* `CampaignToken.actorId` é opcional e exclusivo; excluir o ator apenas desfaz o vínculo com o Token.
* `CampaignCharacterSheet.actorId` é obrigatório e exclusivo.
* `Inventory.actorId` é obrigatório e exclusivo.
* `InventoryEntry` mantém `quantity`, `slotIndex` único por inventário, `catalogContentId` opcional e o item copiado em `data` JSON.
* `InventoryEntry.slotIndex` aceita de `0` a `99`, representando a grade persistente de `10 x 10`.
* Não devem existir modelos Prisma chamados `Character`, `CharacterSheet` ou `CampaignCharacter`.
* Migrações desta fase podem redefinir estruturas pré-release, pois o produto ainda não possui dados de produção.
* A migração que remove o personagem principal converte atores legados relevantes em atores controlados e remove somente perfis automáticos vazios, sem ficha, Token, chat ou item de inventário.
