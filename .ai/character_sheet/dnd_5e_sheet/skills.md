# Submodulo: Ficha D&D 5e (Skills & Tech)

## 1. Stack
* TypeScript para validadores e calculos especificos.
* Zod para extensoes do contrato comum.

## 2. Padroes
* Strategy especifica registrada pelo modulo pai.
* Value Objects somente para conceitos exclusivos de D&D 5e.
* Testes unitarios para regras e calculos especificos.

## 3. Restricoes
* Nao criar nem vincular `Character`.
* Nao acessar canvas/tabuleiro diretamente.
* Nao duplicar schemas comuns de `character_sheet`.
* Expor validadores consumidos por `character_sheet`.
