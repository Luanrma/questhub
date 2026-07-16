# Pathfinder 2e — Catálogo de Magias

## Propósito

Disponibilizar ao QuestHub um catálogo canônico e somente leitura de magias e rituais de Pathfinder 2e.

O Foundry PF2e é exclusivamente uma fonte externa de importação. Ele não é domínio, runtime, engine de regras nem contrato público do QuestHub.

## Regras de negócio

* A aplicação consome somente `Pathfinder2eSpellDefinition`.
* O importador funciona como camada anticorrupção: traduz dados conhecidos e descarta estruturas externas.
* UUIDs, packs, macros, overlays, documentos vinculados e `system.rules` do Foundry não podem existir no catálogo gerado.
* Uma regra não traduzida nunca é inferida. A magia recebe automação `PARTIAL` ou `MANUAL`, com razões explícitas.
* A descrição textual continua disponível quando a execução automática não for suportada.
* Identificadores do catálogo são estáveis e pertencem ao QuestHub (`pf2e.spell.<slug>`).
* Catálogo não conhece personagens, NPCs, slots, recursos ou histórico de conjuração.

## Limites

Pertence ao módulo: definição da magia, busca, filtros, apresentação e importação.

Não pertence ao módulo: repertório do ator, consumo de recursos, transação de cast, resolução, efeitos ativos, HP, chat, geometria de cena ou persistência de campanha.
