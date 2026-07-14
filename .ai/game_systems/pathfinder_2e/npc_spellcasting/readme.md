# Submodulo: Pathfinder 2e NPC Spellcasting (Product)

**Status: ✅ implementado em 2026-07-13** (pedido explicito do usuario: "as spells afetem tokens de NPCs" + "criaturas devem poder castar spells e o Mestre deixar pre-pronto esses monstros").

## 1. Proposito
Permitir que o Mestre prepare magias para uma criatura do bestiario (`CampaignNpcDefinition`, `.ai/game_systems/pathfinder_2e/bestiary/specs.md` secao 8) e que essa criatura conjure durante um encontro, reaproveitando ao maximo a mecanica ja construida e testada para personagens de jogador (`.ai/spell_casting/`, `.ai/game_systems/pathfinder_2e/spell_casting/`, `.ai/game_systems/pathfinder_2e/resolution/`) em vez de duplica-la.

## 2. Problema Resolvido
Toda a cadeia de conjuracao (livro de magias, consumo de recurso, Spell DC, salvamento, dano) so entendia `Character`. Um NPC nao tem `Character.sheet` nem `CharacterSpellbook`, e o endpoint de resolucao rejeitava qualquer alvo ou conjurador que nao fosse `source: 'character'`. Sem este submodulo, um Mestre que queira um vilao conjurador precisava simular tudo manualmente.

## 3. Regras de Negocio
* Um `CampaignNpcDefinition` sem `spellbook` populado (spellbook vazio por padrao) e uma criatura comum — so ganha opcoes de conjurar depois que o Mestre adiciona pelo menos uma entrada pelo editor.
* O formato do spellbook de NPC e **identico** ao de personagem (`Pathfinder2eCharacterSpellbookData` — mesmo tipo, sem duplicacao) — todas as funcoes puras de consumo/cast-options/resolucao ja existentes funcionam sem alteracao contra um spellbook de NPC.
* **Editor implementado cobre so a categoria `INNATE`** (magias inatas, "a vontade" ou "N/dia") — a categoria que melhor reflete como statblocks reais de monstro imprimem conjuracao. O modelo de dados aceita as outras 5 categorias (`PREPARED`/`SPONTANEOUS`/`FOCUS`/`RITUAL`/`ITEMS`), mas a tela do Mestre (`NpcSpellbookEditorModal`) nao oferece UI para configura-las nesta rodada — decisao de escopo para caber no tempo desta implementacao, nao uma limitacao tecnica do backend.
* Apenas o Mestre ativo da campanha pode conjurar por um NPC — nao existe conceito de "dono" de um NPC como existe para personagem (`character.userId`). Diferente do fluxo de personagem (dono OU Mestre), aqui e **so** Mestre.
* Spell DC de NPC e um valor fixo por entrada de conjuracao (`npcSpellDC`, estilo statblock impresso: "Spell DC 25"), nao uma formula de nivel+proficiencia+atributo como a de personagem.
* Salvamento de NPC (quando e alvo de uma magia de outro conjurador) usa o valor fixo ja existente no catalogo (`Pathfinder2eBestiarySheet.saves`). Ver `.ai/game_systems/pathfinder_2e/resolution/specs.md`.
* Um NPC customizado (com spellbook) so pode ser conjurado quando esta posicionado como token numa cena (mesma exigencia de contexto de cena que personagem — `caster.sceneId`/`caster.casterTokenId`).
* **Magias com area nao sao suportadas para conjurador NPC nesta rodada** — o painel de conjuracao de NPC (`NpcSpellCastPanel`) mostra um erro legivel em vez de abrir o fluxo de posicionamento; so magias sem area (auto-alvo ou com contagem de alvo) sao conjuraveis. Personagens continuam com suporte completo a area.
* Conjuracao de NPC nao tem ledger de idempotencia (`recentCasts`) nem prova de "cast real" antes de resolver — decisao deliberada dado que so o Mestre (ja com autoridade total sobre HP de NPC e de qualquer token) pode disparar essas rotas; o risco que o ledger de personagem mitiga (jogador aplicando dano de graca) nao existe aqui. Ver `skills.md` secao 3.

## 4. Personas
* **Mestre:** cria/edita o spellbook de um `CampaignNpcDefinition`, conjura pelo NPC durante o encontro.
* **Jogador:** nunca conjura por um NPC; pode ser alvo de uma magia de NPC (`.ai/game_systems/pathfinder_2e/resolution/`).

## 5. Casos de Uso
* Mestre clica "Customizar" num card do bestiario → cria (ou reaproveita, dedup por nome) um `CampaignNpcDefinition` e abre o editor de magias.
* Mestre adiciona uma entrada (nome + Spell DC) e magias inatas via busca no catalogo (`SpellSearchPicker`, reaproveitado do fluxo de personagem), cada uma com "a vontade" ou "N/dia".
* Mestre arrasta o NPC customizado da barra de tokens preparados (aparece automaticamente, sem precisar "preparar") para a cena ativa.
* Durante um encontro, Mestre clica com o botao direito no token do NPC → "Lancar magia (NPC)" → painel equivalente ao de personagem (sem posicionamento de area).
* Magias sem area com alvo parseavel entram no mesmo modo de selecao de alvo na cena (clicar token(s), confirmar) ja usado para personagem — qualquer token (personagem ou outro NPC) pode ser selecionado.
* NPC conjura uma magia de dano com salvamento basico contra um ou mais alvos e o dano e aplicado automaticamente ao HP real.

## 6. Limites
Pertence ao submodulo:
* contrato do spellbook de NPC (reuso do tipo de personagem, sem duplicar);
* Spell DC fixo por entrada (`npcSpellDC`, substitui `calculateSpellDC` para este caso);
* endpoints de conjuracao/descanso/refocus/resolucao equivalentes aos de personagem, mas endereçados por `campaignNpcDefinitionId` em vez de `characterId`, com permissao Mestre-only;
* editor de spellbook de NPC (`NpcSpellbookEditorModal`), escopado a entradas `INNATE`.

Nao pertence ao submodulo:
* a entidade `CampaignNpcDefinition` em si (pertence a `.ai/game_systems/pathfinder_2e/bestiary/`);
* grau de sucesso, dano, aplicacao de HP (pertence a `.ai/game_systems/pathfinder_2e/resolution/`, que aceita caster/alvo NPC);
* posicionamento de area para conjurador NPC (fora de escopo nesta rodada, ver secao 3);
* IA ou automacao de decisao ("qual magia o NPC deveria conjurar") — o Mestre sempre decide manualmente qual magia e alvo, como um jogador decide pelo proprio personagem.
