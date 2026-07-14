# Submodulo: Pathfinder 2e Livro de Magias (Product)

## 1. Proposito
Fornecer ao Mestre um catalogo de magias e rituais Pathfinder 2e (Livro de Magias) com consulta rapida, filtros e ficha simplificada, no mesmo padrao ja consolidado pelo Bestiario (`.ai/game_systems/pathfinder_2e/bestiary/`) e pelo Catalogo de Itens (`.ai/game_systems/pathfinder_2e/items/`).

O Livro de Magias pertence ao ruleset Pathfinder 2e. Ele usa dados normalizados a partir dos packs de magias do Foundry (`pf2e-master/packs/spells`) como referencia de conteudo, mas expoe para o QuestHub apenas contratos estaveis e agnosticos do package: o conceito generico `Spell`.

## 2. Problema Resolvido
Durante a preparacao ou a condução de uma sessao, o Mestre precisa consultar rapidamente os dados de uma magia ou ritual oficial (alcance, area, alvo, duracao, tempo de conjuracao, componentes, tradicoes, salvamento) sem abrir o compendio do Foundry ou o livro de regras.

## 3. Regras de Negocio
* O catalogo e somente leitura nesta fase: navegar, buscar, filtrar e abrir a ficha nunca criam, editam ou removem qualquer registro de personagem.
* Este catalogo continua sem nenhuma acao de escrita equivalente ao "Enviar para jogador" dos Itens. "Aprender magia", "preparar magia" e "conceder magia a um personagem" pertencem ao submodulo `.ai/game_systems/pathfinder_2e/character_spells/` (dados de spellbook, ja implementado) e a `Spell Casting` (execucao de conjuracao, ainda nao iniciado) — nunca a este catalogo.
* Documentos Foundry `type = "spell"` sao tratados como entradas do catalogo. A distincao entre magia comum e ritual usa o campo estruturado `system.ritual` (presente apenas em rituais), nunca o nome do arquivo ou a pasta de origem no compendio.
* Truques (`cantrip`) e magias de foco (`focus`) sao magias como outra qualquer, distinguidas pelo trait estruturado `system.traits.value` (`cantrip`, `focus`), e nao formam uma categoria propria.
* Dados mecanicos Pathfinder 2e (rank, tradicao, escola, salvamento, dano, heightening) permanecem inteiramente no package `packages/game-system-pathfinder-2e`, dentro de `systemData`.
* O VTT generico consome apenas campos neutros de apresentacao (`display`). O core jamais deve conhecer "Spell Rank", "Spell Tradition", "Arcane", "Divine", "Occult" ou "Primal" como conceitos tipados.
* Conjuracao, resolucao de ataque/salvamento, dano de magia, regras de heightening executavel e templates de area nao sao implementados nesta fase — apenas o catalogo de consulta.
* Excecao unica e deliberada: qualquer membro ativo da campanha (nao so o Mestre) pode usar a busca minima (`GET /api/campaigns/:campaignId/spells/search`, `specs.md` secao 4.1) para encontrar o `id`/nome/rank/tags de uma magia ao editar o proprio spellbook (`.ai/game_systems/pathfinder_2e/character_spells/`). Essa busca nunca devolve descricao, dano, salvamento ou qualquer dado mecanico — so o suficiente para popular um seletor. O catalogo completo (ficha simplificada, filtros avancados) continua Mestre-apenas.

## 4. Personas
* **Mestre:** consulta magias e rituais por nome, categoria, rank, tradicao ou trait, e abre a ficha simplificada para conferencia durante a sessao.
* **Jogador:** nao acessa o catalogo completo de magias da campanha (mesma restricao ja aplicada ao Bestiario e ao Catalogo de Itens), mas pode usar a busca minima (secao 3) para adicionar magias ao proprio spellbook.
* **Desenvolvedor:** expande dados do ruleset sem alterar contratos genericos de mesa.

## 5. Casos de Uso
* Buscar uma magia ou ritual por nome ou trait.
* Filtrar o catalogo por categoria (`spell` ou `ritual`).
* Filtrar por rank.
* Filtrar por tradicao (valor opaco definido pelo package PF2e, nao tipado no core).
* Filtrar por raridade.
* Paginar os resultados da busca.
* Abrir a ficha simplificada de uma magia ou ritual em modal.

## 5.1. Fase 1 do Plano de Interacao e Efeitos (importador lossless)

A partir de `.ai/game_systems/pathfinder_2e/spells/questhub-spell-interaction-effects-plan.md`, o QuestHub adota um plano canonico de paridade funcional completa com o PF2e do Foundry (conjuracao, Rule Engine, geometria, effects executaveis). Esse plano e executado em fases; **apenas a Fase 1 esta em escopo nesta entrega**, exatamente como definida na secao 19 do plano: Baseline + importador lossless + dependency graph.

Fase 1 nao muda os limites do submodulo definidos abaixo: nenhuma conjuracao, dano, cura ou regra e executada. O que muda e a qualidade e completude dos dados importados:

* o catalogo deixa de sanitizar/truncar a descricao e passa a compilar um AST rico (`Pathfinder2eRichTextDocument`) que preserva `@UUID`, `@Check`, `@Damage`, `@Template`, `@Localize` e action glyphs como nos estruturados, alem do texto original (`raw`) intacto;
* `system.damage` e importado com todos os componentes, tipos, categorias, `kinds` e `materials`, sem perda;
* `system.overlays` (variantes por numero de acoes, como Heal) sao importados como patches estruturados, nao descartados;
* `system.rules` da propria magia e, quando a magia referencia um effect vinculado (ex.: Haste -> Spell Effect: Haste), o grafo de dependencias e resolvido recursivamente (GrantItem, EphemeralEffect, Aura) contra os packs de `spell-effects` e `conditions`;
* um manifesto de origem (`Pathfinder2eSourceManifest`) e um relatorio de compatibilidade (`Pathfinder2eSpellCompatibilityReport`) sao gerados e versionados junto ao catalogo.

## 5.2. Fase 4 do Plano — Character Spells

A Fase 4 (spellbook de personagem) esta implementada em `.ai/game_systems/pathfinder_2e/character_spells/`: modelo Prisma dedicado, contratos de spellcasting entries/slots/preparacao, API com concorrencia otimista, e uma aba "Magias" na ficha de personagem (leitura/edicao manual — sem busca no catalogo, ver `character_spells/skills.md` secao 6 para a razao). Este catalogo de magias nao foi alterado por essa fase; a nova modulo apenas referencia `spellId` como string.

## 5.3. Fase 5 do Plano — Rule Engine (parcial)

A Fase 5 esta parcialmente implementada em `.ai/game_systems/pathfinder_2e/rule_engine/`: substrato de roll options/predicates/modifiers com stacking, mais 21 familias de Rule Element resolvidas losslessly a partir dos dados ja importados por este catalogo (`Pathfinder2eRuleElementSource[]`, secao 1.2). O calculo de CA (`.ai/game_systems/pathfinder_2e/armor_class/`) e o primeiro consumidor real, atraves dos efeitos ativos de personagem (`.ai/game_systems/pathfinder_2e/character_effects/`) — mas isso so cobre `FlatModifier` de CA; nenhuma outra estatistica derivada nem execucao de conjuracao usa o Rule Engine ainda. Ver `.ai/game_systems/pathfinder_2e/spells/questhub-spell-interaction-effects-plan.md` secao 21 para o status completo do plano e secao 22 para as proximas etapas propostas.

Fases ainda nao iniciadas (Scene Geometry, Casting Transaction, Resolution, Effects completos, Item Casting/Rituais executaveis) exigem nova rodada de planejamento e novos modulos `.ai/` proprios antes de serem implementadas.

## 6. Limites
Pertence ao submodulo:
* normalizacao de dados Pathfinder 2e de magias e rituais a partir de `pf2e-master/packs/spells`;
* ficha simplificada de magia/ritual;
* labels, secoes e entradas de apresentacao do catalogo PF2e;
* metadados de fonte e licenca.

Nao pertence ao submodulo:
* `Character Spell` / spellbook, preparacao diaria, slots de conjuracao e focus points — implementado em `.ai/game_systems/pathfinder_2e/character_spells/`, nao aqui;
* interpretacao/execucao de Rule Elements e calculo de estatisticas derivadas — implementado parcialmente (substrato + 21 familias, sem consumidor) em `.ai/game_systems/pathfinder_2e/rule_engine/`, nao aqui;
* `Spell Casting` — executar a conjuracao, resolver ataque ou salvamento, aplicar dano ou efeito (fase futura, nao iniciada);
* `Spell Effect` — efeitos persistentes em cena (fase futura, nao iniciada);
* rituais como fluxo executavel (checagens de participante, sucesso/falha) (fase futura, nao iniciada);
* templates de area, integracao com combate, iluminacao, fog ou animacoes (fase futura `Geometry`, nao iniciada);
* qualquer fluxo de escrita em ficha de personagem a partir deste catalogo.
