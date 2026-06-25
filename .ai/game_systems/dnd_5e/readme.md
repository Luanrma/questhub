# Submodulo: D&D 5e (Product)

## 1. Proposito
Reservar o ruleset de D&D 5e como sistema suportado pelo QuestHub, mantendo a fronteira arquitetural igual a Pathfinder 2e.

No estado atual, D&D 5e existe como identificador de compatibilidade (`DND_5E`). Regras mecanicas, ficha completa, classes, especies/racas, backgrounds, feats, spells e itens ainda nao estao implementados neste ruleset.

## 2. Escopo Atual
Incluido:
* Identificador de sistema `DND_5E`.
* Reserva de compatibilidade futura para campanhas e personagens.

Nao incluido no codigo atual:
* Criar campanha em D&D 5e.
* Criar personagem em D&D 5e.

Fora de escopo:
* Ficha jogavel de D&D 5e.
* Classes.
* Especies/racas.
* Backgrounds.
* Feats.
* Spells.
* Itens.
* Automacoes de regras.

## 3. Fronteira com VTT
D&D 5e nao deve adicionar campos especificos ao VTT generico. Quando for implementado, o ruleset podera fornecer atalhos e metadados opcionais para rolagens, mas mapa, tokens, chat e movimentacao continuam genericos.
