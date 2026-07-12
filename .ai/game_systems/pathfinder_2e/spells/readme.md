# Submodulo: Pathfinder 2e Livro de Magias (Product)

## 1. Proposito
Fornecer ao Mestre um catalogo de magias e rituais Pathfinder 2e (Livro de Magias) com consulta rapida, filtros e ficha simplificada, no mesmo padrao ja consolidado pelo Bestiario (`.ai/game_systems/pathfinder_2e/bestiary/`) e pelo Catalogo de Itens (`.ai/game_systems/pathfinder_2e/items/`).

O Livro de Magias pertence ao ruleset Pathfinder 2e. Ele usa dados normalizados a partir dos packs de magias do Foundry (`pf2e-master/packs/spells`) como referencia de conteudo, mas expoe para o QuestHub apenas contratos estaveis e agnosticos do package: o conceito generico `Spell`.

## 2. Problema Resolvido
Durante a preparacao ou a condução de uma sessao, o Mestre precisa consultar rapidamente os dados de uma magia ou ritual oficial (alcance, area, alvo, duracao, tempo de conjuracao, componentes, tradicoes, salvamento) sem abrir o compendio do Foundry ou o livro de regras.

## 3. Regras de Negocio
* O catalogo e somente leitura nesta fase: navegar, buscar, filtrar e abrir a ficha nunca criam, editam ou removem qualquer registro de personagem.
* Nao existe, nesta fase, nenhuma acao de escrita equivalente ao "Enviar para jogador" dos Itens. Nao ha "aprender magia", "preparar magia" ou "conceder magia a um personagem" — esses fluxos pertencem a `Character Spell` e `Spell Casting` (futuro) e nao devem ser implementados agora.
* Documentos Foundry `type = "spell"` sao tratados como entradas do catalogo. A distincao entre magia comum e ritual usa o campo estruturado `system.ritual` (presente apenas em rituais), nunca o nome do arquivo ou a pasta de origem no compendio.
* Truques (`cantrip`) e magias de foco (`focus`) sao magias como outra qualquer, distinguidas pelo trait estruturado `system.traits.value` (`cantrip`, `focus`), e nao formam uma categoria propria.
* Dados mecanicos Pathfinder 2e (rank, tradicao, escola, salvamento, dano, heightening) permanecem inteiramente no package `packages/game-system-pathfinder-2e`, dentro de `systemData`.
* O VTT generico consome apenas campos neutros de apresentacao (`display`). O core jamais deve conhecer "Spell Rank", "Spell Tradition", "Arcane", "Divine", "Occult" ou "Primal" como conceitos tipados.
* Conjuracao, resolucao de ataque/salvamento, dano de magia, regras de heightening executavel e templates de area nao sao implementados nesta fase — apenas o catalogo de consulta.

## 4. Personas
* **Mestre:** consulta magias e rituais por nome, categoria, rank, tradicao ou trait, e abre a ficha simplificada para conferencia durante a sessao.
* **Jogador:** nao acessa o catalogo de magias da campanha neste momento (mesma restricao ja aplicada ao Bestiario e ao Catalogo de Itens).
* **Desenvolvedor:** expande dados do ruleset sem alterar contratos genericos de mesa.

## 5. Casos de Uso
* Buscar uma magia ou ritual por nome ou trait.
* Filtrar o catalogo por categoria (`spell` ou `ritual`).
* Filtrar por rank.
* Filtrar por tradicao (valor opaco definido pelo package PF2e, nao tipado no core).
* Filtrar por raridade.
* Paginar os resultados da busca.
* Abrir a ficha simplificada de uma magia ou ritual em modal.

## 6. Limites
Pertence ao submodulo:
* normalizacao de dados Pathfinder 2e de magias e rituais a partir de `pf2e-master/packs/spells`;
* ficha simplificada de magia/ritual;
* labels, secoes e entradas de apresentacao do catalogo PF2e;
* metadados de fonte e licenca.

Nao pertence ao submodulo (futuro, fora de escopo desta entrega):
* `Character Spell` — personagem ou NPC aprendendo ou conhecendo uma magia;
* Spellbook e preparacao diaria de magias, slots de conjuracao e focus points;
* `Spell Casting` — executar a conjuracao, resolver ataque ou salvamento, aplicar dano ou efeito;
* `Spell Effect` — efeitos persistentes em cena;
* rituais como fluxo executavel (checagens de participante, sucesso/falha);
* templates de area, integracao com combate, iluminacao, fog ou animacoes;
* qualquer fluxo de escrita em ficha de personagem a partir deste catalogo.
