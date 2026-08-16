# ADR-0004 — CampaignToken é independente de CampaignActor

Status: **Accepted**  
Data: 2026-08-15

## Contexto

O VTT precisa permitir objetos/token visuais que existam no tabuleiro sem depender da existência de ficha, personagem ou Game System. Ao mesmo tempo, quando fizer sentido, um Token pode representar um Actor da Campaign.

## Decisão

`CampaignToken` é uma entidade visual/operacional do VTT e pode existir sem `CampaignActor` vinculado.

O vínculo `CampaignToken.actorId` é opcional.

A existência de Token e Actor é independente.

## Regras decorrentes

- criar Token não exige Actor;
- criar Token não exige Character Sheet, Inventory ou interpretação de Game System;
- excluir/desvincular um Token não exclui o Actor;
- excluir/desvincular um Actor não precisa excluir o Token;
- um Token pode ser vinculado posteriormente a um Actor compatível da mesma Campaign;
- posicionamento em cena pertence ao Token/placement e não à ficha mecânica;
- informações mecânicas exibidas sobre um Token devem chegar ao VTT por contratos/projeções genéricas, não por acesso direto à ficha.

## Implementação atual

O schema atual usa `CampaignToken.actorId String? @unique`, confirmando um vínculo opcional e no máximo 1:1 entre Token e Actor.

## Consequências

O VTT permanece capaz de representar marcadores, props, criaturas ainda sem ficha, familiars, companions e outros elementos sem introduzir dependência do Game System.
