# Submodulo: Pathfinder 2e Resolution (Specs & Contracts)

## 1. Spell DC

```ts
// packages/game-system-pathfinder-2e/src/shared/spell-dc.ts

export type Pathfinder2eSpellDCInput = {
  level: number
  rank: Pathfinder2eProficiencyRank
  attributeModifier: number
  ruleElements?: UnknownRuleElement[]
  rollOptions?: RollOptions
}

export type Pathfinder2eSpellDCBreakdown = {
  total: number
  rank: Pathfinder2eProficiencyRank
  proficiencyBonus: number
  attributeModifier: number
  ruleEngineBonus: number
  ruleEngineModifiers: Modifier[]
}

export function calculateSpellDC(input: Pathfinder2eSpellDCInput): Pathfinder2eSpellDCBreakdown
```

`total = 10 + getPathfinder2eProficiencyBonus(level, rank) + attributeModifier + ruleEngineBonus`. `ruleEngineBonus` soma `FlatModifier` de selector `'spell-dc'` (selector real auditado em `pf2e-master/packs`) apos `applyStackingRules` — identico ao padrao de `calculateArmorClass`/`calculateSavingThrow`. Sem `ruleElements`, `ruleEngineBonus = 0` (nenhum efeito ativo hoje usa esse selector, mas o campo existe para nao quebrar quando existir).

## 2. Atributo <-> Abreviacao / Salvamento

```ts
// packages/game-system-pathfinder-2e/src/shared/attribute-modifier.ts
export function getPathfinder2eAttributeModifier(score: number): number // Math.floor((score - 10) / 2)

export type Pathfinder2eAttributeAbbreviation = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha'
export const PATHFINDER_2E_ATTRIBUTE_BY_ABBREVIATION: Record<Pathfinder2eAttributeAbbreviation, keyof Pathfinder2eAttributes>
export function isPathfinder2eAttributeAbbreviation(value: string): value is Pathfinder2eAttributeAbbreviation

// packages/game-system-pathfinder-2e/src/shared/saving-throws.ts (novo export nesta rodada)
export const PATHFINDER_2E_SAVING_THROW_ATTRIBUTE: Record<Pathfinder2eSavingThrowKey, keyof Pathfinder2eAttributes>
// { fortitude: 'constitution', reflex: 'dexterity', will: 'wisdom' }
```

`Pathfinder2eSheetForm.tsx` passa a importar os dois em vez de manter copias locais (`getAttributeModifier`, mapa de salvamento->atributo) — mesmo calculo, uma unica fonte.

## 3. Grau de Sucesso

```ts
// packages/game-system-pathfinder-2e/src/shared/degree-of-success.ts

export type Pathfinder2eDegreeOfSuccess = 'criticalSuccess' | 'success' | 'failure' | 'criticalFailure'

export function calculatePathfinder2eDegreeOfSuccess(input: {
  naturalRoll: number
  modifier: number
  dc: number
}): Pathfinder2eDegreeOfSuccess
```

1. `total = naturalRoll + modifier`;
2. grau base: `total >= dc + 10` -> `criticalSuccess`; `total >= dc` -> `success`; `total <= dc - 10` -> `criticalFailure`; senao `failure`;
3. `naturalRoll === 20` melhora um grau (`failure -> success`, `success -> criticalSuccess`, `criticalFailure -> failure`, `criticalSuccess` permanece);
4. `naturalRoll === 1` piora um grau (direcao oposta, `criticalSuccess` permanece o teto so no sentido de melhora, nunca passa de `criticalFailure` no sentido de piora).

## 4. Dano com Salvamento Basico

```ts
// packages/game-system-pathfinder-2e/src/shared/basic-save-damage.ts

export function applyPathfinder2eBasicSaveDamage(baseDamage: number, degree: Pathfinder2eDegreeOfSuccess): number
// criticalSuccess -> 0 | success -> Math.floor(baseDamage / 2) | failure -> baseDamage | criticalFailure -> baseDamage * 2
```

## 5. Perfil de Resolucao por Magia

```ts
// packages/game-system-pathfinder-2e/src/server/spell-casting/resolution-profile.ts

export type Pathfinder2eSpellResolutionProfile =
  | { kind: 'none' }
  | { kind: 'basicSaveDamage'; formula: DiceFormula; damageType: string; statistic: Pathfinder2eSavingThrowKey }

export type Pathfinder2eSpellResolutionProfileOptions = {
  effectiveRank?: number
}

export function resolvePathfinder2eSpellResolutionProfile(
  definition: Pathfinder2eSpellDefinition | null,
  options?: Pathfinder2eSpellResolutionProfileOptions,
): Pathfinder2eSpellResolutionProfile
```

`kind: 'basicSaveDamage'` exige, simultaneamente: `definition.defense?.save.basic === true`; exatamente um componente de `definition.damage` com `kinds` incluindo `'damage'`; e a `formula` desse componente parseavel por `parseDiceFormula` (`.ai/dice/specs.md`). Qualquer outro caso (ver `readme.md` secao 3 para a lista) -> `{ kind: 'none' }`.

Quando `options.effectiveRank` e maior que `definition.rank`, o perfil aplica heightening de dano antes de devolver a formula:
* `heightening.type === 'interval'`: usa `heightening.damage[damageComponentKey]`, calcula `floor((effectiveRank - definition.rank) / interval)` incrementos e soma a formula parseavel ao dano base. Ex.: Fireball rank 3, `Elevada (+1) 2d6`, conjurada em rank 5 -> `10d6`.
* `heightening.type === 'fixed'`: fora desta fatia. O dado real do snapshot usa estruturas por rank que podem representar substituicao ou mudanca textual especifica, nao um incremento universal seguro; o perfil preserva a formula base ate existir interpretador dedicado.
* Se a formula extra nao for parseavel ou nao puder ser somada ao formato atual (`NdM`, `NdM+K` ou flat), o perfil volta para a formula base em vez de chutar. Isso preserva a regra do modulo: resolucao automatica so quando o contrato mecanico for claro.

## 6. Orquestracao (pura, testavel)

```ts
// packages/game-system-pathfinder-2e/src/server/spell-casting/resolve.ts

export type Pathfinder2eResolveTargetInput = {
  tokenId: string
  characterId: string
  name: string
  level: number
  rank: Pathfinder2eProficiencyRank
  attributeModifier: number
  ruleElements: UnknownRuleElement[]
}

export type Pathfinder2eResolveTargetResult = {
  tokenId: string
  characterId: string
  targetName: string
  saveStatistic: Pathfinder2eSavingThrowKey
  naturalRoll: number
  saveModifier: number
  saveTotal: number
  degree: Pathfinder2eDegreeOfSuccess
  damageApplied: number
}

export function resolvePathfinder2eBasicSaveDamage(input: {
  spellDC: number
  statistic: Pathfinder2eSavingThrowKey
  baseDamage: number
  targets: Pathfinder2eResolveTargetInput[]
  rollD20: () => number
}): Pathfinder2eResolveTargetResult[]
```

Para cada alvo: `saveModifier = calculateSavingThrow(statistic, {level, rank, attributeModifier, ruleElements}).total`; `naturalRoll = rollD20()`; `degree = calculatePathfinder2eDegreeOfSuccess({naturalRoll, modifier: saveModifier, dc: spellDC})`; `damageApplied = applyPathfinder2eBasicSaveDamage(baseDamage, degree)`.

## 7. Endpoint HTTP

Implementado dentro de `apps/api/src/modules/spell_casting/routes.ts` (mesma funcao `registerSpellCastingRoutes`, ja registrada em `server.ts`) em vez de um modulo `resolution` proprio na camada HTTP — decisao deliberada de reuso: a rota de resolucao precisa exatamente da mesma resolucao de cena/token/campanha (`resolveCastSceneContext`, geometria de alcance) e do mesmo acesso ao personagem (`getCharacterAccess`, `parseSpellbookRecord`) ja privados nesse arquivo; duplicar essas queries num modulo `resolution` separado violaria a regra de nao duplicar logica de negocio (AGENTS.md secao 6.4). A separacao conceitual continua real: toda a mecanica (Spell DC, grau de sucesso, dano) mora em funcoes puras proprias (`packages/game-system-pathfinder-2e/src/shared/`, `.../server/spell-casting/resolve.ts`) — so a fiacao HTTP e compartilhada.

```ts
POST /api/characters/:characterId/spells/:spellId/resolve

Body: {
  clientResolveId: string        // min 1, max 80 — identificador local do cliente (sem ledger de replay nesta fatia, ver skills.md)
  clientCastId: string           // identificador do cast que originou esta resolucao — deve existir no ledger recentCasts do conjurador (prova de que um cast real e recente aconteceu; ver skills.md secao 3 para o limite exato dessa garantia)
  entryId: string                // entrada de conjuracao que originou o cast, define Spell DC
  sceneId: string
  casterTokenId: string
  targetTokenIds: string[]       // 1..20, devem ser tokens source:'CHARACTER' ou source:'BESTIARY' na mesma cena
}
```

Fluxo:
1. `requireAuth`; `characterId` (params) deve ser o conjurador — dono do personagem OU Mestre ativo da campanha (mesma query de `getCharacterAccess`).
2. `clientCastId` deve existir no ledger `recentCasts` do spellbook do conjurador (`findPathfinder2eRecentCast`) — sem isso, 400 `CAST_NOT_FOUND`. Impede chamar `/resolve` sem antes ter conjurado de verdade (gasto o recurso).
3. Carrega e valida a ficha do conjurador (`pathfinder2eSheetSchema.safeParse(character.sheet.data.pathfinder2e)`) e seus efeitos ativos (`CharacterActiveEffects`, flatten de `rules`).
4. Resolve a entrada de conjuracao (`entryId`) no spellbook do conjurador; erro `ENTRY_NOT_FOUND` se nao existir. Rejeita `ability` fora de `str|dex|con|int|wis|cha` e `proficiencyRank` fora do conjunto valido `{0,2,4,6,8}` (`Pathfinder2eProficiencyRank` — defensivo, o schema do spellbook so garante `number >= 0`, sem limite superior nem restricao aos 5 valores reais, ver `character_spells/specs.md`).
5. Calcula `spellDC` via `calculateSpellDC` com o atributo do conjurador correspondente a `ability` da entrada.
6. Resolve a magia (`spellId`) no catalogo; recupera o `recentCast` do ledger e, quando o recibo contem `castRank`, calcula `resolvePathfinder2eSpellResolutionProfile(spell, { effectiveRank: castRank })`; casts antigos sem metadado continuam usando a formula base; `{kind:'none'}` -> 400 `UNSUPPORTED_RESOLUTION`.
7. Consulta a cena (`prisma.campaignScene.findUnique`, tokens `{id: {in: [casterTokenId, ...targetTokenIds]}}`), confirma personagem conjurador pertence a campanha da cena, o token conjurador pertence ao personagem, e cada alvo esta dentro do alcance da magia (mesma checagem de distancia — euclidiana ou hexagonal — de `resolveNonAreaCastContext`).
8. Para cada `targetTokenIds`: token deve existir na cena e ter `source === 'CHARACTER'` (com `characterId`) ou `source === 'BESTIARY'` (com `bestiaryCreatureId`) — `resolveSpellResolutionScene` devolve `ResolvedTargetToken[]` tipado por `source`. Alvo `CHARACTER` carrega ficha + efeitos ativos do personagem-alvo do mesmo jeito que o conjurador; alvo `BESTIARY` usa `loadNpcTargetSaveInput` (salvamento fixo do catalogo, `.ai/game_systems/pathfinder_2e/npc_spellcasting/specs.md` secao 6). Qualquer alvo invalido -> 400 com a lista de alvos rejeitados (nenhuma rolagem acontece se algum alvo for invalido — tudo ou nada).
9. Rola o dano uma vez (`rollDiceFormula(profile.formula)`), roda `resolvePathfinder2eBasicSaveDamage` com `rollD20` real (`node:crypto`).
10. Para cada resultado, aplica no HP real via `presence.applyResolvedCombatHealth` (`.ai/combat/specs.md` secao 6.4) — operacao `DAMAGE`, quantidade `damageApplied` (inclusive quando `0`, para registrar "resistiu completamente" no log).
11. Publica uma mensagem de chat + entrada no log de batalha (quando ha encontro ativo), resumindo grau/dano por alvo — mesmo padrao de `castAnnouncementContent`/`castEncounterLogMessage`.
12. Resposta:

```ts
type ResolveResponse = {
  spellName: string
  spellDC: number
  damageRoll: { formula: string; total: number; rolls: number[] }
  damageType: string
  results: Array<{
    tokenId: string
    targetName: string
    saveStatistic: Pathfinder2eSavingThrowKey
    naturalRoll: number
    saveTotal: number
    degree: Pathfinder2eDegreeOfSuccess
    damageApplied: number
    resultingHealth: VttCombatantHealth
  }>
}
```

### 7.1. Conjurador/alvo NPC (✅ implementado em 2026-07-13)

Ver `.ai/game_systems/pathfinder_2e/npc_spellcasting/specs.md` secao 6 para o contrato completo. Resumo do que muda no fluxo acima quando o conjurador ou algum alvo e NPC:
* Conjurador NPC usa um endpoint separado (`POST /api/campaigns/:campaignId/npc-definitions/:definitionId/spells/:spellId/resolve`, `npc_spellcasting/specs.md` secao 4), nao este mesmo endpoint — le `entry.npcSpellDC` diretamente no lugar de montar `calculateSpellDC` a partir de ficha+efeitos ativos, e nao exige prova de cast previo.
* Alvo NPC (em qualquer um dos dois endpoints): `source === 'BESTIARY'` e valido, lendo o salvamento fixo do catalogo (`Pathfinder2eBestiarySheet.saves`) via `loadNpcTargetSaveInput` em vez de ficha de personagem.
* Aplicar HP: nenhuma mudanca foi necessaria — `applyResolvedCombatHealth` ja era agnostico de `source` (`CombatantIdentity`); a unica mudanca real foi a validacao de alvo (passo 8).

## 8. Criterios de Aceitacao
1. `calculateSpellDC`/`calculatePathfinder2eDegreeOfSuccess`/`applyPathfinder2eBasicSaveDamage`/`resolvePathfinder2eBasicSaveDamage` sao puras e testadas isoladamente (RNG injetavel).
2. `resolvePathfinder2eSpellResolutionProfile` retorna `{kind:'none'}` para os 4 casos documentados como fora de escopo (sem salvamento, salvamento nao-basico, sem dano, mais de um componente de dano) — nunca lanca.
3. O endpoint rejeita alvo que nao seja `source:'CHARACTER'` ou `source:'BESTIARY'` com erro legivel, nunca aplica dano parcial (alvo invalido cancela a resolucao inteira antes de qualquer rolagem).
4. `naturalRoll === 20` e `naturalRoll === 1` alteram o grau de sucesso mesmo quando o total normal ja indicaria outro grau (crit por natural 20 mesmo com total baixo; fail critico por natural 1 mesmo com total alto) — testado explicitamente.
5. O dano aplicado a cada alvo reflete `HealthLog`/`vtt:combat:health:changed` como qualquer outra alteracao de HP (fonte de verdade unica, sem duplicar estado).
