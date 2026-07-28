# Prisma: Contratos

* `Campaign` é a fronteira de isolamento do mundo.
* `CampaignMember` possui `campaignId`, `userId`, papel e status; não referencia personagem principal.
* `CampaignActor` pertence obrigatoriamente a uma campanha, não possui `userId` e pode ser arquivado por `archivedAt`.
* `CampaignActor.controllerMemberId` é opcional e representa o único vínculo persistido de controle do ator.
* O banco rejeita controlador, ator, Token ou mensagem vinculados a outra campanha.
* `CampaignToken.actorId` é opcional e exclusivo; excluir ou arquivar o ator apenas desfaz o vínculo com o Token.
* Token com `actorId` não pode manter `controllerMemberId`; o controle é derivado do ator.
* `CampaignCharacterSheet.actorId` é obrigatório e exclusivo.
* `Inventory.actorId` é obrigatório e exclusivo.
* Toda criação de `CampaignActor` deve incluir `Inventory` na mesma transação.
* `InventoryEntry` mantém `quantity`, `slotIndex` único por inventário, referência de catálogo com namespace e o item copiado em `data` JSON.
* `InventoryEntry.slotIndex` aceita qualquer inteiro não negativo; o core não define capacidade máxima.
* `ChatMessage` preserva snapshots do nome, papel e ator; excluir usuário ou ator não apaga o histórico.
* Não devem existir modelos Prisma chamados `Character`, `CharacterSheet` ou `CampaignCharacter`.
* As migrations intermediárias foram consolidadas em uma migration final de pré-release.
* Bancos de desenvolvimento que aplicaram as migrations removidas devem ser resetados.
