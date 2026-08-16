# ADR-0002 — Campaign é a fronteira de isolamento dos dados

Status: **Accepted**  
Data: 2026-08-15

## Contexto

O QuestHub representa cada campanha como um mundo independente. Atores, fichas, inventários, tokens, cenas e estado operacional não podem vazar entre mundos diferentes.

## Decisão

`Campaign` é a fronteira máxima de isolamento dos dados de jogo.

Entidades pertencentes ao mundo da campanha devem ser associadas direta ou indiretamente à mesma `Campaign` e operações devem validar essa pertença no backend.

## Regras decorrentes

- `CampaignActor` pertence a exatamente uma Campaign;
- fichas e inventários pertencem ao Actor daquela Campaign;
- `CampaignToken` pertence a exatamente uma Campaign;
- cenas, placements e efeitos pertencem à mesma Campaign;
- relações que apontem para entidades de outra Campaign são inválidas;
- o frontend não é considerado fronteira de segurança;
- autorização e ownership são validados no backend.

## Consequências

A reutilização de identidade, conteúdo ou catálogo entre Campaigns deve acontecer por mecanismos explicitamente globais ou por cópia/importação controlada, nunca reutilizando estado mutável pertencente a outro mundo.
