# Criação de atores — Contrato atual

* Não existe `POST /api/characters`.
* Criar campanha e entrar em campanha não criam atores implicitamente.
* Criar uma ficha pelo gerenciador cria um ator da campanha.
* Toda criação de `CampaignActor` cria também seu `Inventory`.
* O ator recebe `campaignId`, nome, avatar e bio; nunca recebe `userId`.
* Atribuir o ator a um jogador define `CampaignActor.controllerMemberId`.
