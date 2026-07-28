# Criação de campanha

O usuário informa título, descrição opcional, política de entrada e o nome de seu ator principal como Mestre.

O fluxo cria, em uma única transação:

1. `Campaign`;
2. `CampaignMember` ativo com papel `MASTER`;
3. `CampaignActor` principal do Mestre;
4. `Inventory` do ator.

A criação não exige ficha mecânica nem interpretação do `game_system`.
