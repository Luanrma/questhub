# Submodulo: Ficha Pathfinder 2e (Product)

## 1. Proposito
Fornecer a primeira ficha jogavel de Pathfinder 2e dentro do QuestHub.

Este submodulo define o formato, os defaults, as validacoes e a experiencia de preenchimento para fichas com `system = PATHFINDER_2E`. O modulo base `character_sheet` fornece apenas o envelope e o roteamento.

## 2. Escopo Do MVP
A primeira entrega sera uma ficha minima jogavel, focada em armazenamento, edicao e visualizacao.

Campos incluidos:
* Level.
* Ancestry.
* Heritage.
* Background.
* Class.
* Seis atributos.
* Hit points.
* Armor Class.
* Initiative.
* Perception.
* Saving throws principais.
* Notes.

## 3. Decisoes De Produto
* A UI deve usar portugues.
* O contrato persistido deve usar ingles.
* Nenhum campo de identidade e obrigatorio no MVP.
* A ficha pode ser salva como rascunho incompleto.
* Atributos sempre existem e iniciam em `10`.
* Numeros sao sempre inteiros.
* O MVP nao faz calculos automaticos de Pathfinder 2e.
* Valores derivados sao preenchidos manualmente pelo usuario.
* Ranks de proficiencia sao armazenados como numeros para preparar automacao futura.

## 4. Defaults De Nova Ficha
* `level`: `1`
* `ancestry`: texto vazio
* `heritage`: texto vazio
* `background`: texto vazio
* `className`: texto vazio
* Atributos: todos `10`
* HP: `maximum = 0`, `current = 0`, `temporary = 0`
* Condicoes de HP: `wounded = 0`, `dying = 0`, `doomed = 0`
* `armorClass`: `10`
* `initiative`: `0`
* `perception`: rank nao treinado e valor final `0`
* Saves: rank nao treinado e valor final `0`
* `notes`: texto vazio

## 5. Fora De Escopo Do MVP
* Criacao guiada por boosts de atributos.
* Validacao por ancestry, heritage, background ou class oficiais.
* Skills.
* Feats.
* Spells.
* Actions.
* Equipment.
* Strikes/attacks.
* Class DC.
* Calculo automatico de proficiencia, level, atributos, bonuses ou penalidades.
