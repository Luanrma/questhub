# Criação de campanha

O usuário informa título, descrição opcional e política de entrada.

O fluxo cria, em uma única transação:

1. `Campaign`;
2. `CampaignMember` ativo com papel `MASTER`.

A criação não exige ator, ficha mecânica nem interpretação do `game_system`. Atores são criados explicitamente pelo gerenciador de fichas/atores.
