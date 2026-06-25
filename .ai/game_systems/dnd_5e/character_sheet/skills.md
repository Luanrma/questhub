# Submodulo: Ficha D&D 5e (Skills & Tech)

## 1. Stack
* TypeScript para validadores e calculos especificos.
* Zod para extensoes do contrato comum.

## 2. Padroes
* Strategy especifica registrada pelo modulo pai.
* Value Objects somente para conceitos exclusivos de D&D 5e.
* Testes unitarios para regras e calculos especificos.

## 3. Restricoes
* Nao adicionar novas regras aqui sem antes atualizar o contrato do ruleset `game_systems/dnd_5e`.
* Nao criar nem vincular `Character`.
* Nao acessar canvas/tabuleiro diretamente.
* Nao duplicar schemas comuns do envelope de `game_systems`.
* Expor validadores consumidos pelo registry de `game_systems`.
