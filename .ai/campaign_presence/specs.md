# Campaign Presence — Contratos

## Eventos

* `presence:session:start`: Mestre envia `campaignId` e seu `actorId` principal.
* `presence:session:end`: encerra a sessão iniciada pelo Mestre.
* `presence:enter`: jogador envia `campaignId` e seu `actorId` principal.
* `presence:update`: informa entrada ou saída do ator.
* `campaign:status`: informa mudança online/offline.
* `campaign:kicked`: remove jogadores quando o Mestre encerra a sessão.

## Regras

* Autorização usa `CampaignMember.userId`, papel e status.
* O `actorId` enviado precisa ser o ator principal daquele membro.
* O ator não possui `userId` ou papel.
* Jogadores entram somente com campanha online e membro `ACTIVE`/`PLAYER`.
* Presença não cria, remove ou transfere atores e vínculos de campanha.
