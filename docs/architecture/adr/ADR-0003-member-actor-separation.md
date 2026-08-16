# ADR-0003 — CampaignMember e CampaignActor são conceitos distintos

Status: **Accepted**  
Data: 2026-08-15

## Contexto

Participação de usuário em uma Campaign e existência de uma entidade dentro do mundo são conceitos diferentes. Um usuário pode controlar múltiplos atores; um ator pode existir sem ser controlado por um Player.

## Decisão

`CampaignMember` representa exclusivamente a participação de um `User` na Campaign, incluindo papel e status.

`CampaignActor` representa uma entidade existente dentro da Campaign: personagem de jogador, NPC, criatura, familiar, montaria ou equivalente.

`CampaignActor` não representa membership e não deve possuir `userId`, papel de membro ou status de participação.

## Relação de controle

Um `CampaignMember` pode controlar zero ou vários `CampaignActor`.

O controle é expresso por uma relação explícita, atualmente `CampaignActor.controllerMemberId`.

## Regras decorrentes

- não existe `Character` global como dono do estado de campanha;
- não existe `CampaignCharacter` combinando membership e ator;
- entrar em uma Campaign cria/reativa membership, não um Actor implicitamente;
- atores são criados explicitamente dentro da Campaign;
- remover membership não deve apagar automaticamente atores existentes;
- ações sobre Actor, ficha ou inventário validam controle/permissão no backend.

## Consequências

Essa separação permite múltiplos personagens por Player, NPCs sem Player, companions, familiares, montarias e outras entidades sem criar novos tipos de membership.
