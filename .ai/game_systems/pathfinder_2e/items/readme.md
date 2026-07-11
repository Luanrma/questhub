# Submodulo: Pathfinder 2e Catalogo de Itens (Product)

## 1. Proposito
Fornecer ao Mestre um catalogo de referencia de itens Pathfinder 2e (armas, armaduras, equipamentos, consumiveis, tesouros, mochilas, escudos e kits) para consulta rapida durante a preparacao e a condução de sessoes.

O catalogo pertence ao ruleset Pathfinder 2e. Ele usa dados normalizados a partir dos packs de equipamento do Foundry como referencia de conteudo, mas expoe para o QuestHub apenas contratos estaveis do package.

Este catalogo e puramente consultivo. Ele **nao** alimenta nem faz seed do banco de dados de itens de campanha (`CampaignItemDefinition`, modulo `.ai/inventory/`). Essa fronteira ja esta registrada em `.ai/inventory/skills.md` secao 13 e `.ai/inventory/readme.md` secoes 5 e 9, e permanece valida aqui: a liberdade de criacao de itens customizados pelo Mestre e o proposito do banco de inventario, nao um catalogo replicado do compendio oficial.

## 2. Problema Resolvido
Durante a preparacao de uma sessao ou de uma loja/tesouro, o Mestre precisa consultar rapidamente dados de um item oficial (preco, bulk, nivel, raridade, traits, dano de arma, CA de armadura) sem abrir o compendio do Foundry ou o livro de regras. Sem um catalogo dedicado, o Mestre depende de fontes externas ao QuestHub para essa consulta.

## 3. Regras de Negocio
* O catalogo em si e somente leitura: navegar, buscar, filtrar e abrir a ficha nunca criam, editam ou removem registros em `CampaignItemDefinition`.
* A unica excecao e a acao explicita "Enviar para jogador" (secao 5): o Mestre escolhe um item do catalogo e um jogador ativo da campanha, e o sistema clona aquele item especifico para uma `CampaignItemDefinition` (`source = SYSTEM_CATALOG`, deduplicada por origem) antes de concede-lo. Continua sendo uma escrita pontual, por item, sempre iniciada pelo Mestre — nunca um seed ou importacao em massa do catalogo. Contrato completo em `.ai/inventory/specs.md` secao 6.4.1.
* Itens do catalogo nao entram automaticamente no inventario de nenhum personagem; a unica forma de um item do catalogo chegar a um inventario e o envio explicito descrito acima.
* Dados mecanicos Pathfinder 2e permanecem no package `packages/game-system-pathfinder-2e`.
* O VTT generico consome apenas campos neutros de apresentacao (`display`).
* Documentos Foundry de equipamento (`weapon`, `armor`, `equipment`, `consumable`, `treasure`, `backpack`, `shield`, `kit`) sao tratados como entradas do catalogo de itens.
* A normalizacao de itens deve separar tipo documental, papel mecanico, modo de uso, posicao corporal e opcoes de equipamento. A regra de produto e: `itemType != role != usage.mode != usage.placement != equipment`.
* Municao PF2e (flechas, virotes, balas e equivalentes detectados por dados estruturados) permanece no inventario como item stackavel/consumivel, mas nao aparece como item equipavel.
* Itens com uso bruto desconhecido ou sem classificacao segura devem falhar de forma conservadora: nao equipaveis, sem opcoes, e com warning de normalizacao.

## 4. Personas
* **Mestre:** consulta itens por nome, trait, tipo ou nivel e abre a ficha de um item para ver detalhes antes de conceder loot ou definir precos de loja.
* **Jogador:** nao acessa o catalogo de itens da campanha neste momento (mesma restricao aplicada ao bestiario).
* **Desenvolvedor:** expande dados do ruleset sem alterar contratos genericos de mesa nem tocar em `CampaignItemDefinition`.

## 5. Casos de Uso
* Buscar um item por nome ou trait.
* Filtrar o catalogo por tipo de item (arma, armadura, equipamento, consumivel, tesouro, mochila, escudo, kit).
* Filtrar por nivel.
* Filtrar por raridade.
* Abrir a ficha simplificada de um item em modal.
* Enviar um item do catalogo diretamente para o inventario de um jogador ativo da campanha, escolhendo o nome do jogador em uma lista.

## 6. Limites
Pertence ao submodulo:
* normalizacao de dados Pathfinder 2e de itens de equipamento;
* ficha simplificada de item;
* labels, secoes e entradas de apresentacao do catalogo PF2e;
* metadados de fonte e licenca;
* o endpoint de envio de item para jogador (rota registrada aqui, implementacao no modulo `inventory` — ver `.ai/inventory/specs.md` secao 6.4.1).

Nao pertence ao submodulo:
* persistencia de itens de campanha (`CampaignItemDefinition`) fora do fluxo pontual de envio, ou qualquer seed em massa do banco a partir deste catalogo;
* comercio automatizado de loja/NPC;
* craft;
* ficha completa de personagem jogador.
* consumo automatico de municao em ataques;
* anexar runas, talismas ou gadgets a armas/armaduras;
* efeitos mecanicos completos de itens equipados, com excecao dos campos brutos de armadura/escudo (`ac`, `dexCap`, `strengthRequirement`, `checkPenalty`, `speedPenaltyFeet`) capturados na normalizacao especificamente para alimentar o calculo de Armor Class — ver `.ai/game_systems/pathfinder_2e/armor_class/`. Esses campos sao dados normalizados do catalogo, nao uma engine de efeitos mecanicos.
