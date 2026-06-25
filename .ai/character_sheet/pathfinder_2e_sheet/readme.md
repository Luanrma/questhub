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
* Pericias oficiais do Pathfinder 2e no MVP: Acrobacia, Arcanismo, Atletismo, Artesanato, Diplomacia, Enganacao, Furtividade, Intimidacao, Medicina, Natureza, Ocultismo, Performance, Prestidigitacao, Religiao, Sociedade e Sobrevivencia.
* Notes.

## 3. Decisoes De Produto
* A UI deve usar portugues.
* O contrato persistido deve usar ingles.
* Nenhum campo de identidade e obrigatorio no MVP.
* A ficha pode ser salva como rascunho incompleto.
* Atributos sempre existem e iniciam em `10`.
* Numeros sao sempre inteiros.
* O MVP calcula automaticamente o total de pericias a partir de nivel, rank de proficiencia e atributo chave.
* Outros bonus ou penalidades ainda nao possuem campo proprio e sao tratados como `0`.
* Ranks de proficiencia sao armazenados como numeros para preparar automacao futura.
* O bonus total de uma pericia segue: bonus de proficiencia PF2e + modificador do atributo chave + outros bonus ou penalidades.
* Destreinado nao soma nivel. Treinado, Especialista, Mestre e Lendario somam nivel + bonus do rank.
* `Pathfinder2eProficiencyValue.value` representa o total final calculado e salvo no JSON da ficha.

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
* Feats.
* Spells.
* Actions.
* Equipment.
* Strikes/attacks.
* Class DC.
* Campos proprios para bonus de item, circunstancia, status ou penalidades.

## 6. Layout Da Ficha
* A ficha Pathfinder 2e deve ser navegada por abas de icones, nunca por botoes `Anterior` e `Proxima`.
* A primeira aba deve reunir, nesta ordem: identidade, hit points/status do personagem e atributos.
* Armor Class e Initiative pertencem ao status do personagem, nao a proficiencias.
* A primeira aba nao deve exibir `metadata.bio`.
* A segunda aba deve ser inteiramente dedicada a proficiencias de pericia.
* Cada linha de proficiencia deve seguir o layout visual de ficha impressa: icone de ajuda, total calculado destacado na linha sublinhada com o nome da pericia, e rank como selo colorido a direita.
* O rank deve ser apresentado como TAG de tamanho padronizado, sem seta de select box, sem sublinhado preto e com texto branco adaptado ao tamanho da tag.
* Cores das TAGs de rank: Nao treinado em cinza medio, Treinado em azul marinho, Especialista em amarelo, Mestre em roxo e Lendario em laranja.
* A lista aberta de opcoes do rank deve usar fundo neutro em cinza claro e nao herdar a cor da TAG selecionada.
* A aba de proficiencias deve conter somente as pericias: Acrobacia, Arcanismo, Atletismo, Artesanato, Diplomacia, Enganacao, Furtividade, Intimidacao, Medicina, Natureza, Ocultismo, Performance, Prestidigitacao, Religiao, Sociedade e Sobrevivencia.
* A descricao de cada pericia nao deve aparecer diretamente na tela; ela deve aparecer apenas em tooltip ao passar o mouse sobre um icone de interrogacao.
* "Intuicao" nao e persistida como uma pericia propria no MVP; em Pathfinder 2e ela e representada por Sociedade, Ocultismo, Lore ou testes especificos de Percepcao.
