# Campaign Presence — Contratos

## Eventos

* `presence:session:start`: Mestre envia `campaignId`.
* `presence:session:end`: encerra a sessão iniciada pelo Mestre.
* `presence:enter`: jogador envia `campaignId`.
* `presence:update`: informa entrada ou saída do usuário membro.
* `campaign:status`: informa mudança online/offline.
* `campaign:kicked`: remove jogadores quando o Mestre encerra a sessão.

## Regras

* Autorização usa `CampaignMember.userId`, papel e status.
* O ator não possui `userId` ou papel.
* Jogadores entram somente com campanha online e membro `ACTIVE`/`PLAYER`.
* `presence:enter` responde por ACK; uma rejeição transitória durante a sincronização inicial pode ser repetida pelo cliente sem redirecionar o jogador para fora da mesa.
* Presença não cria, remove ou transfere atores e vínculos de campanha.
* A identidade de presença é `userId` e não depende de ator, ficha ou Token.
* Não existe evento ou estado de ator ativo.
