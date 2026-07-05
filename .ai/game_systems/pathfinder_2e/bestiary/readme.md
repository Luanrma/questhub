# Submodulo: Pathfinder 2e Bestiario (Product)

## 1. Proposito
Fornecer ao Mestre um catalogo de criaturas Pathfinder 2e com consulta rapida e ficha simplificada para preparacao e condução de encontros.

O bestiario pertence ao ruleset Pathfinder 2e. Ele pode usar dados normalizados a partir dos packs do Foundry como referencia de conteudo, mas deve expor para o QuestHub apenas contratos estaveis do package. Hazards possuem documentacao propria em `.ai/game_systems/pathfinder_2e/hazards/` e aparecem aqui apenas como categoria de consulta.

## 2. Problema Resolvido
Durante a mesa, monstros e criaturas precisam ser consultados de forma mais direta que uma ficha completa de personagem. O Mestre precisa ver rapidamente defesa, percepcao, salvamentos, atributos, habilidades, ataques, acoes e notas essenciais sem transformar cada criatura em `Character`.

## 3. Regras de Negocio
* Criaturas do bestiario nao criam personagens automaticamente.
* A ficha simplificada e uma visualizacao de catalogo, nao o estado vivo de uma instancia em cena.
* Ao arrastar uma criatura para o VTT, o token continua sendo uma instancia de cena com origem no bestiario.
* Alteracoes de PV, condicoes ou recursos durante combate pertencem a estado de encontro ou mecanica futura do ruleset, nao ao catalogo.
* Dados mecanicos Pathfinder 2e permanecem no package `packages/game-system-pathfinder-2e`.
* O VTT generico consome apenas campos neutros de apresentacao.
* Documentos Foundry `type = "npc"` sao tratados como entradas de categoria `npc` dentro do bestiario.
* Documentos Foundry `type = "hazard"` sao tratados como entradas de categoria `hazard` dentro do bestiario, com ficha de consulta propria, regras detalhadas no submodulo de Hazards e sem comportamento de token de criatura.

## 4. Personas
* **Mestre:** consulta criaturas, prepara atalhos de token e usa a ficha simplificada durante combate.
* **Jogador:** nao acessa o bestiario da campanha neste momento.
* **Desenvolvedor:** expande dados do ruleset sem alterar contratos genericos de mesa.

## 5. Casos de Uso
* Buscar uma entrada por nome, trait ou pack.
* Filtrar o bestiario por categoria, inicialmente `npc` e `hazard`.
* Filtrar por nivel e raridade.
* Abrir a ficha simplificada de uma criatura em modal.
* Abrir a ficha simplificada de um Hazard em modal.
* Consultar ataques e acoes principais durante a sessao.
* Adicionar a criatura ao toolbar de tokens preparados.
* Arrastar a criatura para o tabuleiro para criar token NPC.
* Abrir a ficha simplificada a partir do menu de contexto de um token de bestiario na cena.

## 6. Limites
Pertence ao submodulo:
* normalizacao de dados Pathfinder 2e de criatura;
* ficha simplificada de criatura;
* labels, secoes e entradas de apresentacao do bestiario PF2e;
* metadados de fonte e licenca.
* agregacao de categorias de consulta, incluindo NPCs e Hazards.

Nao pertence ao submodulo:
* persistencia de tokens de cena;
* controle de turnos e iniciativa persistida;
* estado atual de PV e condicoes de uma instancia;
* automacao completa de rolagens;
* ficha completa de personagem jogador.
* exposicao de hazards como criaturas ou tokens NPC.
* regras detalhadas de criacao de Hazards, que pertencem a `.ai/game_systems/pathfinder_2e/hazards/`.
