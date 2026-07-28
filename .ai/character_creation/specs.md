# Criação de atores — Contrato atual

* Não existe `POST /api/characters`.
* Criar campanha cria o ator principal do Mestre.
* Entrar em campanha cria o ator principal do jogador.
* Criar uma ficha pelo gerenciador cria um ator da campanha.
* Toda criação de `CampaignActor` cria também seu `Inventory`.
* O ator recebe `campaignId`, nome, avatar e bio; nunca recebe `userId`.
