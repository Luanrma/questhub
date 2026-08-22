# PF2e Active Effects — pt-BR

Este diretório contém o catálogo estático e versionado de traduções pt-BR para definições canônicas Pathfinder 2e com `kind: effect`.

## Identidade e fonte canônica

- A identidade de cada tradução é exclusivamente o `definitionKey` (`<sourcePack>:<sourceId>`).
- O snapshot canônico de Active Effects usado pelo QuestHub está congelado em `PATHFINDER_2E_ACTIVE_EFFECT_DEFINITION_SOURCE_COMMIT = 01114da5851f31404078d8020809b13e4000bc4b`.
- Nomes e descrições canônicas permanecem preservados no catálogo de origem; esta camada altera apenas a apresentação localizada.

## Origem da tradução

- O corpus pt-BR mantido pelo QuestHub foi revisado contra o material canônico do snapshot acima.
- Quando havia correspondência exata aproveitável no projeto `mclemente/fvtt-ptbr-pf2e-translation`, o snapshot de referência congelado foi `3bbc31593155fe5a01171c6e4eb6539c1db46f49`.
- Entradas sem cobertura upstream adequada são mantidas diretamente neste catálogo QuestHub, sempre vinculadas ao `definitionKey`; não existe tradução externa em runtime ou CI.
- O fallback legado por nome não é aceito para `kind: effect`. Conditions/afflictions continuam fora do escopo deste card e preservam o comportamento anterior.

## Revisão QH-EFF-016

Revisão congelada em 2026-08-22 para o inventário de 1.610 Effects canônicos distribuídos em sete packs:

| Pack | Effects |
| --- | ---: |
| `bestiary-effects` | 460 |
| `campaign-effects` | 5 |
| `equipment-effects` | 643 |
| `feat-effects` | 20 |
| `kingmaker-features` | 1 |
| `other-effects` | 2 |
| `spell-effects` | 479 |
| **Total** | **1.610** |

O gate `QH-EFF-016 Translation Inventory` percorre o catálogo integral e falha se:

- o total ou a distribuição por pack divergirem do inventário congelado;
- qualquer Effect não possuir tradução explícita por `definitionKey`;
- qualquer nome não resolver em pt-BR;
- qualquer descrição canônica não vazia não possuir descrição pt-BR;
- a apresentação localizada expuser `@Check`, `@UUID`, `@Compendium` ou HTML cru.

## Limites arquiteturais

Esta camada é exclusivamente de conteúdo/localização do Game System Pathfinder 2e. Ela não adiciona Rule Elements, stacking, duração, saves, dano, aplicação automática nem semântica PF2e ao VTT Core.
