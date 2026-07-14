# Submodulo: Pathfinder 2e Character Active Effects (Product)

## 1. Proposito
Guardar, por personagem, uma lista pequena de **efeitos ativos** (`Pathfinder2eActiveEffect[]`) que o dono do personagem ou o Mestre anexam manualmente — ex.: "Shield (magia)" concedendo +2 de circunstancia ao CA enquanto ativo. Cada efeito carrega Rule Elements brutos no mesmo formato ja usado pelo catalogo de magias (`Pathfinder2eRuleElementSource`, `.ai/game_systems/pathfinder_2e/spells/specs.md` secao 1.2), para que o Rule Engine (`.ai/game_systems/pathfinder_2e/rule_engine/`) tenha, pela primeira vez, uma fonte real de dados vinda de um personagem — nao apenas fixtures de teste.

Este e o primeiro consumidor real do Rule Engine, conforme `.ai/game_systems/pathfinder_2e/spells/questhub-spell-interaction-effects-plan.md` secao 22, item 1: o calculo de CA (`.ai/game_systems/pathfinder_2e/armor_class/`) passa a somar os `FlatModifier` com `selector: 'ac'` encontrados nos efeitos ativos do personagem, aplicando a regra real de stacking do PF2e entre eles.

Estendido (rodada de 2026-07-13) para os salvamentos: o calculo de Fortitude/Reflexo/Vontade (`.ai/game_systems/pathfinder_2e/character_sheet/specs.md` secao 6.1) soma da mesma forma os `FlatModifier` com `selector` igual ao salvamento (`'fortitude'`/`'reflex'`/`'will'`) **ou** igual a `'saving-throw'` (selector real do PF2e que se aplica aos tres salvamentos ao mesmo tempo — auditado em `pf2e-master/packs`).

## 2. Problema Resolvido
Antes deste submodulo, o Rule Engine tinha 21 familias de Rule Element implementadas e testadas, mas nenhuma delas era alcancavel a partir de um personagem de verdade — o calculo de CA continuava 100% hand-rolled (armadura + escudo + proficiencia + ajuste manual, sem nenhum bonus condicional de magia/efeito). Sem uma fonte de Rule Elements ligada a um personagem, nao havia como um efeito como a magia Shield (+2 de circunstancia ao CA enquanto ativa) refletir automaticamente na ficha.

## 3. Regras de Negocio
* Um personagem tem zero ou mais efeitos ativos, cada um com `id`, `label` (texto livre, ex.: "Shield (magia)") e `rules: Pathfinder2eRuleElementSource[]` (lista bruta de Rule Elements, mesma forma usada pelo catalogo de magias).
* A UI da ficha (`ActiveEffectsCard.tsx`) so cria efeitos com exatamente um Rule Element `FlatModifier` (formulario: rotulo + alvo + tipo de bonus + valor). O alvo (`selector`) e um dos 5 valores reais do PF2e auditados em `pf2e-master/packs`: `'ac'`, `'fortitude'`, `'reflex'`, `'will'`, `'saving-throw'` (aplica aos tres salvamentos ao mesmo tempo). O contrato (`rules: [...]`) e generico e aceita qualquer Rule Element valido via API, mas a UI atual e deliberadamente restrita a esse unico caso de uso — ver `skills.md` secao 3.
* O calculo de CA (`calculateArmorClass`, `.ai/game_systems/pathfinder_2e/armor_class/`) e o calculo de cada salvamento (`calculateSavingThrow`, `.ai/game_systems/pathfinder_2e/character_sheet/specs.md` secao 6.1) resolvem os `FlatModifier`s de todos os efeitos ativos do personagem via `resolveFlatModifiers` (Rule Engine), cada um filtrando pelo(s) seu(s) proprio(s) `selector` (CA: `'ac'`; cada salvamento: o proprio nome ou `'saving-throw'`), aplicam `applyStackingRules` (bonus/penalidade do mesmo tipo nomeado nao se acumulam; untyped sempre se acumula) e somam o resultado ao total ja calculado pela formula existente. Rule Elements com `value`/`selector` dinamico (formula Foundry) sao ignorados nesse calculo, nunca avaliados ou adivinhados — mesma regra ja aplicada pelo resolver.
* Efeitos ativos nao expiram automaticamente, nao tem duracao, nao sao criados automaticamente ao conjurar uma magia (isso pertence a `Spell Casting`, fase futura nao iniciada) e nao sao removidos por nenhum gatilho de jogo — remover um efeito e sempre uma acao explicita (dono ou Mestre apaga da lista).
* Um efeito ativo pertence a um unico personagem; nao existe efeito "de area" nem efeito aplicado a varios personagens de uma vez.
* Rule Elements de familias diferentes de `FlatModifier` podem ser salvos no campo `rules` (o schema aceita qualquer Rule Element com `key` valido), mas nenhum calculo hoje os consome — ficam inertes ate um consumidor futuro ser construido (ex.: `Note`, `TempHP`).

## 4. Personas
* **Jogador:** anexa/remove efeitos ativos no proprio personagem (ex.: registra que conjurou Shield, ou uma penalidade de status em um salvamento), ve CA/salvamentos recalculados automaticamente.
* **Mestre:** anexa/remove efeitos ativos em qualquer personagem da campanha, mesma regra de acesso ja usada pela ficha e pelo livro de magias.
* **Desenvolvedor:** usa `rules: Pathfinder2eRuleElementSource[]` como o ponto de entrada generico para futuros consumidores do Rule Engine (Spell DC, velocidade, pericias) sem precisar de um novo contrato de persistencia por estatistica.

## 5. Casos de Uso
* Listar os efeitos ativos de um personagem (jogador dono ou Mestre ativo da campanha).
* Adicionar um efeito ativo com um bonus/penalidade a CA ou a um salvamento (rotulo + alvo + tipo + valor).
* Remover um efeito ativo.
* Ver o CA e os salvamentos da ficha recalculados imediatamente apos adicionar/remover um efeito, incluindo os casos em que dois efeitos do mesmo tipo nomeado nao se acumulam (regra de stacking) e em que um efeito com alvo `'saving-throw'` afeta os tres salvamentos ao mesmo tempo.

## 6. Limites
Pertence ao submodulo:
* o modelo de persistencia (`CharacterActiveEffects`) e seu envelope, no mesmo padrao de `CharacterSpellbook`;
* o contrato `Pathfinder2eActiveEffect` (`id`, `label`, `rules`);
* os endpoints HTTP de leitura/escrita da lista de efeitos ativos;
* a integracao com `calculateArmorClass` (CA) e `calculateSavingThrow` (Fortitude/Reflexo/Vontade) — os dois consumidores implementados ate esta entrega.

Nao pertence ao submodulo:
* criacao/remocao automatica de efeitos a partir de conjuracao de magia — pertence a `Spell Casting` (fase futura, nao iniciada);
* duracao, sustain, cleanup automatico de efeitos — pertence a `Effects completos` (fase futura, nao iniciada, plano secao 21 item 9);
* qualquer consumidor alem de CA/salvamentos (Spell DC, velocidade, pericias, Percepcao) — fica para quando cada um desses tiver sua propria integracao decidida com o usuario;
* interpretar Rule Elements que nao sejam `FlatModifier` — sao salvos losslessly mas inertes;
* geometria, conditions do bestiario/combate, ou qualquer efeito aplicado a NPC/token de cena (`.ai/combat/`) — este submodulo e exclusivo de `Character` (ficha de jogador/personagem), nao de `CampaignSceneToken`.
