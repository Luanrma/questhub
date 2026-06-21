# Submodulo: Ficha D&D 5e (Product)

## 1. Proposito
Definir somente as regras especificas de fichas de personagens quando `GameSystem = DND_5E`.

Este submodulo pertence a `character_sheet`. Ele nao define ciclo de vida, persistencia, compatibilidade com campanha ou campos comuns; essas responsabilidades ficam no modulo pai.

## 2. Conteudo Especifico
* Terminologia propria de D&D 5e, como race, class, background, proficiency bonus e armor class.
* Limites e formulas especificas de D&D 5e.
* Validacoes de classe, race, background, nivel, recursos, proficiencias, magias e equipamentos quando forem implementadas.

## 3. Fora de Escopo
* Criar ou vincular personagens.
* Persistir ficha fora do contrato comum.
* Redefinir `GameSystem`.
* Duplicar atributos, HP, identidade base ou compatibilidade de campanha ja definidos em `character_sheet`.
