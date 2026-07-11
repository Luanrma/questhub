# Submodulo: Ficha Pathfinder 2e (Product)

## 1. Proposito
Fornecer a primeira ficha jogavel de Pathfinder 2e dentro do QuestHub.

Este submodulo define o formato, os defaults, as validacoes e a experiencia de preenchimento para fichas com `system = PATHFINDER_2E`. O modulo `game_systems` fornece o envelope comum e o registry.

Este submodulo e a autoridade de produto para a ficha Pathfinder 2e.

## Autoridade Documental
Este diretorio em `.ai/game_systems/pathfinder_2e/character_sheet` e o local canonico para documentacao de produto, tecnica e contratos da ficha Pathfinder 2e.

Os diretorios de codigo em `apps/api/src/modules/game_systems/pathfinder_2e/character_sheet` e `apps/web/src/game-systems/pathfinder-2e/character-sheet` devem conter implementacao, tipos e fixtures, mas nao READMEs ou documentacao paralela.

## 2. Escopo Do MVP
A primeira entrega sera uma ficha minima jogavel, focada em armazenamento, edicao e visualizacao.

Campos incluidos:
* General: experiencia atual, experiencia para o proximo nivel e deslocamento em metros.
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
* O resumo fixo lateral da ficha deve usar dados persistidos no contrato Pathfinder 2e e permanecer visivel ao trocar de aba.
* A evolucao V2 da ficha substitui `className`, `ancestry`, `heritage` e `background` como strings canonicas por selecoes estruturadas vindas do modulo `.ai/game_systems/pathfinder_2e/character_options`.
* Conteudo customizado continua permitido na V2, mas deve ser representado como selecao customizada, nao como campo de texto indistinto.
* Fichas V1 devem ser aceitas durante a transicao e migradas para V2 antes de novas escritas.
* **Decisao revertida (evolucao V3):** Armor Class deixou de ser um numero digitado a mao. A ficha agora persiste `armorProficiencies` (proficiencia por categoria de armadura) e `armorClass.manualAdjustment` (ajuste de circunstancia/status); o total exibido e sempre calculado combinando esses campos com o equipamento do inventario. Contrato completo, formula e reatividade em `.ai/game_systems/pathfinder_2e/armor_class/`.
* Player dono da ficha define Classe, Ancestralidade, Heranca e Background apenas no momento de criacao/setup inicial da ficha; depois esses quatro campos ficam imutaveis para o Player.
* Mestre ativo de uma campanha onde o personagem esta vinculado pode criar e editar a ficha do Player, incluindo Classe, Ancestralidade, Heranca e Background.

## 4. Defaults De Nova Ficha
* `general.experience.current`: `0`
* `general.experience.nextLevel`: `0`
* `general.movementMeters`: `0`
* `level`: `1`
* `ancestry`: texto vazio
* `heritage`: texto vazio
* `background`: texto vazio
* `className`: texto vazio
* Atributos: todos `10`
* HP: `maximum = 0`, `current = 0`, `temporary = 0`
* Condicoes de HP: `wounded = 0`, `dying = 0`, `doomed = 0`
* `armorClass.manualAdjustment`: `0` (total de AC nao e mais persistido — ver `.ai/game_systems/pathfinder_2e/armor_class/`)
* `armorProficiencies`: `unarmored` treinado, `light`/`medium`/`heavy` nao treinado
* `initiative`: `0`
* `perception`: rank nao treinado e valor final `0`
* Saves: rank nao treinado e valor final `0`
* `notes`: texto vazio

## 5. Fora De Escopo Do MVP
* Criacao guiada por boosts de atributos.
* Validacao por ancestry, heritage, background ou class oficiais no contrato V1. A validacao canonica passa a pertencer a evolucao V2 documentada em `.ai/game_systems/pathfinder_2e/character_options`.
* Feats.
* Spells.
* Actions.
* Equipment como aba/inventario completo dentro da ficha (o inventario continua sendo gerenciado pelo modulo `.ai/inventory`; a ficha PF2e so consome fatos de equipamento resolvidos, exclusivamente para o calculo de Armor Class — ver `.ai/game_systems/pathfinder_2e/armor_class/`).
* Strikes/attacks.
* Class DC.
* Campos proprios de bonus de item/circunstancia/status para qualquer coisa alem de Armor Class (pericias, saves e demais totais continuam sem esses campos no MVP).

## 6. Layout Da Ficha
* A ficha Pathfinder 2e deve exibir um painel fixo a esquerda com resumo rapido do personagem, inspirado em ficha impressa.
* O painel fixo deve permanecer visivel em todas as abas quando houver espaco horizontal suficiente.
* O painel fixo deve conter nome do personagem, nivel, experiencia, vida, condicoes de vida, classe de armadura, saves, iniciativa, percepcao e deslocamento.
* Classe, ancestralidade, heranca e background devem aparecer no conteudo principal a direita, acima de Atributos, em uma secao chamada Identificacao.
* Vida deve aparecer no painel fixo como uma secao propria com Maxima, Atual e Temporaria em fonte maior e destacada.
* Hit points/status nao devem aparecer duplicados no conteudo principal quando ja estiverem no painel fixo.
* A ficha nao deve exibir o texto `QuestHub` em cabecalhos ou no painel fixo.
* Em telas estreitas, o painel fixo deve virar o primeiro bloco vertical da ficha, antes do conteudo da aba.
* A ficha Pathfinder 2e deve ser navegada por abas de icones, nunca por botoes `Anterior` e `Proxima`.
* A primeira aba deve exibir Identificacao e Atributos no conteudo principal; status permanece no painel fixo.
* A primeira aba deve aproximar visualmente a referencia de ficha PF2e: painel lateral como cartao de personagem com retrato ornamental, identidade central com cards, escolhas de criacao em paineis compactos e atributos sugeridos em linha inferior.
* O painel lateral nao deve duplicar Ancestralidade nem Background, pois esses campos ja aparecem nos cards de Identificacao da area principal.
* Cards de Identificacao nao devem exibir campos duplicados de busca, origem, tags ou resultados de catalogo no estado de leitura; esses controles aparecem apenas quando o usuario edita o card.
* Cards de Identificacao devem exibir controles de edicao para Player apenas durante o setup inicial da ficha; depois disso, apenas Mestre deve ver controles de edicao nesses cards.
* O total de Armor Class e Initiative pertencem ao status do personagem (painel fixo), nao a aba de proficiencias.
* As quatro proficiencias de armadura (`unarmored`/`light`/`medium`/`heavy`) que alimentam o calculo de AC sao editadas na aba de proficiencias, junto das pericias, reaproveitando o mesmo padrao visual de rank em TAG — apenas o total calculado de AC continua exclusivo do painel fixo. Contrato completo em `.ai/game_systems/pathfinder_2e/armor_class/`.
* A primeira aba nao deve exibir `metadata.bio`.
* A segunda aba deve ser inteiramente dedicada a proficiencias de pericia.
* Cada linha de proficiencia deve seguir o layout visual de ficha impressa: icone de ajuda, total calculado destacado na linha sublinhada com o nome da pericia, e rank como selo colorido a direita.
* O rank deve ser apresentado como TAG de tamanho padronizado, sem seta de select box, sem sublinhado preto e com texto branco adaptado ao tamanho da tag.
* Cores das TAGs de rank: Nao treinado em cinza medio, Treinado em azul marinho, Especialista em amarelo, Mestre em roxo e Lendario em laranja.
* A lista aberta de opcoes do rank deve usar fundo neutro em cinza claro e nao herdar a cor da TAG selecionada.
* A aba de proficiencias deve conter somente as pericias: Acrobacia, Arcanismo, Atletismo, Artesanato, Diplomacia, Enganacao, Furtividade, Intimidacao, Medicina, Natureza, Ocultismo, Performance, Prestidigitacao, Religiao, Sociedade e Sobrevivencia.
* A descricao de cada pericia nao deve aparecer diretamente na tela; ela deve aparecer apenas em tooltip ao passar o mouse sobre um icone de interrogacao.
* "Intuicao" nao e persistida como uma pericia propria no MVP; em Pathfinder 2e ela e representada por Sociedade, Ocultismo, Lore ou testes especificos de Percepcao.

## 7. Implementacao Atual
Backend:
* `adapter.ts`: registra a capacidade de ficha Pathfinder 2e para o registry de `game_systems`.
* `schema.ts`: valida o bloco `data.pathfinder2e` com Zod.
* `default-sheet.ts`: default usado pelo codigo para novas fichas.
* `default-sheet.json`: fixture espelho do default documentado.
* `models.ts`: tipos do contrato Pathfinder 2e.
* `constants.ts`: constantes como sistema, data key, versao e ranks.

Frontend:
* `Pathfinder2eSheetForm.tsx`: renderiza a ficha Pathfinder 2e e edita `data.pathfinder2e`.
* `Pathfinder2eSheetForm.css`: concentra os estilos especificos da ficha Pathfinder 2e, escopados pela classe raiz `pathfinder-sheet`.
* `pathfinder2eCharacterSheetRenderer`: declara paginas, icones, marca visual e renderizacao da ficha Pathfinder 2e para consumo do registry generico de ficha.
* `types.ts`: tipos locais do envelope e do bloco Pathfinder 2e usados pela UI.
* `pathfinder_2e_sheet.json`: fixture que representa exatamente o envelope salvo em `Character.sheet`.

Fluxos importantes:
* `onChangeSheet` substitui o envelope inteiro com o bloco Pathfinder atualizado.
* O modal generico consome o renderer via registry e nao deve declarar titulos, icones, marca visual ou regras de Pathfinder 2e.
* O backend valida e persiste o snapshot recebido; calculos derivados de pericia permanecem no frontend neste MVP.
* Armor Class e excecao a regra acima: nenhum total e persistido. O backend valida apenas `armorProficiencies` e `armorClass.manualAdjustment`; o total exibido e sempre calculado (frontend e, quando necessario, backend) combinando esses campos com fatos de equipamento resolvidos pelo modulo `.ai/inventory` — ver `.ai/game_systems/pathfinder_2e/armor_class/`.

## 8. Integracao Com Character Options
O submodulo `character_options` passa a ser a autoridade para catalogos oficiais de Classe, Ancestralidade, Heranca e Background.

Impactos esperados na ficha:

* `version = 1` permanece como contrato legado aceito temporariamente.
* `version = 2` deve persistir `identity.class`, `identity.ancestry`, `identity.heritage` e `identity.background` como selecoes estruturadas ou `null`.
* `identity.className` nao deve existir em novas escritas V2.
* `buildChoices` deve preservar escolhas do usuario separadas da opcao selecionada.
* trocar Ancestralidade deve validar a Heranca selecionada e limpar/sinalizar incompatibilidades sem apagar texto customizado.
* efeitos derivados devem ser reconstruidos a partir de catalogo, selecoes, escolhas e nivel.
