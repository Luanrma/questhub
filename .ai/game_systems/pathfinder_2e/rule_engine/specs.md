# Submodulo: Pathfinder 2e Rule Engine (Specs & Contracts)

## 1. Responsabilidade
Prover roll options, predicates e modifiers/stacking como primitivos puros e testados. Nao interpreta Rule Elements nem calcula estatisticas derivadas.

## 2. Roll Options

```ts
// packages/game-system-pathfinder-2e/src/shared/rule-engine/roll-options.ts
type RollOptions = ReadonlySet<string>

function createRollOptions(options: Iterable<string>): RollOptions
function mergeRollOptions(...sets: RollOptions[]): RollOptions
```

## 3. Predicates

```ts
// packages/game-system-pathfinder-2e/src/shared/rule-engine/predicates.ts
type PredicateComparison = [left: string, right: string | number]

type PredicateStatement =
  | string
  | { and: PredicateStatement[] }
  | { or: PredicateStatement[] }
  | { not: PredicateStatement }
  | { nand: PredicateStatement[] }
  | { nor: PredicateStatement[] }
  | { xor: PredicateStatement[] }
  | { eq: PredicateComparison }
  | { gt: PredicateComparison }
  | { gte: PredicateComparison }
  | { lt: PredicateComparison }
  | { lte: PredicateComparison }

type Predicate = PredicateStatement[] // AND implicito entre os elementos do array, igual ao formato real do compendio

function testPredicateStatement(statement: PredicateStatement, rollOptions: RollOptions): boolean
function testPredicate(predicate: Predicate, rollOptions: RollOptions): boolean
```

Regras de avaliacao:

* `string`: verdadeiro se `rollOptions.has(statement)`.
* `and`/`or`/`nand`/`nor`/`xor`: combinam os resultados dos sub-statements (`xor` = exatamente um verdadeiro).
* `not`: nega o resultado do sub-statement.
* `eq`/`gt`/`gte`/`lt`/`lte`: comparam dois valores resolvidos (ver secao 5 do `skills.md` — busca por prefixo `chave:numero` dentro de `rollOptions`, ou o numero literal do lado direito). Se um dos lados for uma expressao dinamica Foundry (`{...}`) ou nao houver opcao numerica correspondente, o resultado e `false`.

## 4. Modifiers

```ts
// packages/game-system-pathfinder-2e/src/shared/rule-engine/modifiers.ts
type Pathfinder2eModifierType = 'circumstance' | 'status' | 'item' | 'untyped'

type Modifier = {
  slug: string
  label: string
  selector: string
  type: Pathfinder2eModifierType
  value: number
  predicate?: Predicate
  enabled?: boolean
}

type StackingResult = {
  total: number
  applied: Modifier[]
}

function applyStackingRules(modifiers: Modifier[]): StackingResult
```

Regra de stacking (identica a regra real do PF2e):

* `untyped`: todos somam.
* `circumstance`/`status`/`item`: dentro do mesmo tipo, so o melhor bonus (`value > 0` mais alto) e a pior penalidade (`value < 0` mais baixa) contam; bonus e penalidade do mesmo tipo coexistem (nao se cancelam).
* Tipos diferentes somam entre si.
* `applied` retorna exatamente os modifiers que efetivamente contaram para `total` (util para exibir "de onde veio" o total).

## 5. Rule Element: FlatModifier

```ts
// packages/game-system-pathfinder-2e/src/shared/rule-engine/rule-elements/flat-modifier.ts
type UnknownRuleElement = Record<string, unknown> & { key: string }

type FlatModifierSource = {
  key: 'FlatModifier'
  selector: string | string[]
  type: Pathfinder2eModifierType
  value: number | string | Record<string, unknown>
  predicate?: Predicate
  slug?: string
  label?: string
}

type SkippedFlatModifier = {
  source: FlatModifierSource
  reason: 'dynamic-value' | 'dynamic-selector' | 'predicate-not-satisfied'
}

type FlatModifierResolution = {
  modifiers: Modifier[]
  skipped: SkippedFlatModifier[]
}

function resolveFlatModifiers(rules: UnknownRuleElement[], rollOptions: RollOptions): FlatModifierResolution
```

Regras:

* Rule elements com `key !== 'FlatModifier'` sao ignorados silenciosamente (nao sao `FlatModifier`, entao nao ha nada a reportar).
* Se `predicate` existir e nao bater com `rollOptions`, o elemento vai para `skipped` com `'predicate-not-satisfied'` — isso e comportamento normal (a regra simplesmente nao se aplica agora), nao um erro de importacao.
* Se `value` nao for `number` (formula string ou objeto `{brackets,...}`), vai para `skipped` com `'dynamic-value'`, apos a checagem de predicate.
* Se `selector` (ou qualquer item de `selector[]`) for uma expressao dinamica (`"{...}"`), vai para `skipped` com `'dynamic-selector'`.
* Selector em array e estatico gera um `Modifier` por selector, todos com o mesmo `value`/`type`/`predicate`.
* `slug` usa `source.slug` quando presente; senao e sintetizado como `` `flat-modifier:${selector}:${index}` `` (indice sequencial de resolucao, nao do array de entrada).

## 6. Rule Element: GrantItem

```ts
// packages/game-system-pathfinder-2e/src/shared/rule-engine/rule-elements/grant-item.ts
type GrantItemSource = {
  key: 'GrantItem'
  uuid: string
  predicate?: Predicate
  inMemoryOnly?: boolean
  allowDuplicate?: boolean
  reevaluateOnUpdate?: boolean
}

type SkippedGrantItem = {
  source: GrantItemSource
  reason: 'dynamic-uuid' | 'predicate-not-satisfied'
}

type GrantedItemReference = {
  uuid: string
  inMemoryOnly: boolean
  allowDuplicate: boolean
  reevaluateOnUpdate: boolean
}

type GrantItemResolution = {
  granted: GrantedItemReference[]
  skipped: SkippedGrantItem[]
}

function resolveGrantItems(rules: UnknownRuleElement[], rollOptions: RollOptions): GrantItemResolution
```

Regras (auditadas contra `pf2e-master/src/module/rules/rule-element/grant-item/{schema,rule-element}.ts`, o codigo-fonte real do sistema Foundry PF2e vendorizado neste repositorio):

* Rule elements com `key !== 'GrantItem'` sao ignorados silenciosamente.
* `predicate` nao satisfeito -> `skipped` com `'predicate-not-satisfied'`.
* `uuid` dinamico (`"{...}"`) -> `skipped` com `'dynamic-uuid'`, apos a checagem de predicate.
* Defaults reais: `inMemoryOnly = false`, `allowDuplicate = true`, `reevaluateOnUpdate = false`.
* Interacao real entre as flags: se `inMemoryOnly` for `true`, `reevaluateOnUpdate` e `allowDuplicate` sao forcados para `true`; senao, se `reevaluateOnUpdate` for `true`, `allowDuplicate` e forcado para `false`.
* `resolveGrantItems` **nao** resolve `uuid` em um documento concreto — essa resolucao ja acontece no importador do catalogo de magias (Fase 1); nem aplica o grant a nenhum personagem.

## 7. Rule Element: RollOption

```ts
// packages/game-system-pathfinder-2e/src/shared/rule-engine/rule-elements/roll-option.ts
type RollOptionSource = {
  key: 'RollOption'
  domain: string
  option: string
  value?: boolean
  predicate?: Predicate
  toggleable?: boolean | 'totm'
  suboptions?: unknown
  count?: boolean
}

type SkippedRollOption = {
  source: RollOptionSource
  reason: 'dynamic-option' | 'predicate-not-satisfied' | 'toggleable-not-resolved' | 'suboptions-not-resolved' | 'count-not-resolved'
}

type ResolvedRollOption = {
  domain: string
  option: string
  active: boolean
}

type RollOptionResolution = {
  resolved: ResolvedRollOption[]
  skipped: SkippedRollOption[]
}

function resolveRollOptions(rules: UnknownRuleElement[], rollOptions: RollOptions): RollOptionResolution
```

Regras (auditadas contra `pf2e-master/src/module/rules/rule-element/roll-option/{data,rule-element}.ts`):

* Rule elements com `key !== 'RollOption'` sao ignorados silenciosamente.
* `toggleable` truthy -> `skipped` com `'toggleable-not-resolved'` (checagem antes de qualquer outra, pois nem faz sentido avaliar predicate/valor de algo que depende de clique do jogador).
* `suboptions` presente -> `skipped` com `'suboptions-not-resolved'`.
* `count` truthy -> `skipped` com `'count-not-resolved'`.
* `predicate` nao satisfeito -> `skipped` com `'predicate-not-satisfied'`.
* `option` contendo um segmento dinamico (`{...}`, em qualquer posicao da string, nao so quando a string inteira e a expressao) -> `skipped` com `'dynamic-option'`.
* Caso contrario, resolve para `{domain, option: sanitizeOption(option), active: value ?? true}`. `sanitizeOption` reproduz literalmente a sanitizacao real (`#resolveOption`): remove caracteres fora de `[-:\w]`, colapsa `::` e `--` repetidos, remove espacos nas pontas.
* `domain` nao e concatenado em `option` — e devolvido como campo separado (ver `skills.md` para a justificativa da simplificacao frente ao sistema real de baldes por dominio).

## 8. Rule Elements: Immunity / Weakness / Resistance (IWR)

```ts
// packages/game-system-pathfinder-2e/src/shared/rule-engine/rule-elements/iwr.ts
type Pathfinder2eIwrMode = 'add' | 'remove'

type ImmunitySource = { key: 'Immunity'; type: string | string[]; mode?: Pathfinder2eIwrMode; predicate?: Predicate; exceptions?: unknown[]; override?: boolean }
type WeaknessSource = { key: 'Weakness'; type: string | string[]; value: number | string; mode?: Pathfinder2eIwrMode; predicate?: Predicate; exceptions?: unknown[]; override?: boolean }
type ResistanceSource = { key: 'Resistance'; type: string | string[]; value: number | string; mode?: Pathfinder2eIwrMode; predicate?: Predicate; exceptions?: unknown[]; doubleVs?: unknown[]; override?: boolean }

function resolveImmunities(rules, rollOptions): { resolved: Array<{ type: string; mode; override: boolean; exceptions: string[] }>; skipped: [...] }
function resolveWeaknesses(rules, rollOptions): { resolved: Array<{ type: string; value: number; mode; override: boolean; exceptions: string[] }>; skipped: [...] }
function resolveResistances(rules, rollOptions): { resolved: Array<{ type: string; value: number; mode; override: boolean; exceptions: string[]; doubleVs: string[] }>; skipped: [...] }
```

Regras (auditadas contra `pf2e-master/src/module/rules/rule-element/iwr/{base,immunity,weakness,resistance}.ts`):

* `type` sempre normalizado para array; uma entrada resolvida por elemento do array.
* `mode` default `'add'`, `override` default `false` (defaults reais do schema).
* `Weakness`/`Resistance` exigem `value` numerico (`Math.floor`); formula string -> `skipped('dynamic-value')`; resultado `<= 0` -> `skipped('non-positive-value')` (mesma regra do `getIWR` real: `if (value <= 0) return []`).
* `Immunity` nao tem `value`.
* `exceptions` (todas) e `doubleVs` (so `Resistance`) sao filtrados para strings apenas; excecoes customizadas (`{definition, label}`) sao descartadas — simplificacao documentada.
* `type` com segmento dinamico (`"{item|...}"`) -> `skipped('dynamic-type')`, checado antes do valor.

## 9. Rule Element: TempHP

```ts
// packages/game-system-pathfinder-2e/src/shared/rule-engine/rule-elements/temp-hp.ts
type TempHpSource = { key: 'TempHP'; value: number | string; predicate?: Predicate }
function resolveTempHp(rules, rollOptions): { resolved: Array<{ value: number }>; skipped: [...] }
```

Mesma regra de `value` numerico positivo de IWR (`dynamic-value`/`non-positive-value`), predicate primeiro.

## 10. Rule Element: Sense

```ts
// packages/game-system-pathfinder-2e/src/shared/rule-engine/rule-elements/sense.ts
type SenseAcuity = 'precise' | 'imprecise' | 'vague'
type SenseSource = { key: 'Sense'; selector: string; predicate?: Predicate; acuity?: SenseAcuity; range?: number | string; force?: boolean }
function resolveSenses(rules, rollOptions): { resolved: Array<{ selector: string; acuity: SenseAcuity; range: number; force: boolean }>; skipped: [...] }
```

Defaults reais (auditados em `pf2e-master/src/module/rules/rule-element/sense.ts`): `range` = `Infinity` quando omitido; `acuity` default documentado como `'precise'` (simplificacao — o sistema real usa uma tabela de acuidades obrigatorias por `selector` nao reproduzida). `range` como formula string -> `skipped('dynamic-range')`.

## 11. Rule Element: ActorTraits

```ts
// packages/game-system-pathfinder-2e/src/shared/rule-engine/rule-elements/actor-traits.ts
type ActorTraitsSource = { key: 'ActorTraits'; add?: string[]; remove?: string[]; predicate?: Predicate }
function resolveActorTraits(rules, rollOptions): { resolved: Array<{ add: string[]; remove: string[] }>; skipped: [...] }
```

`add`/`remove` default para array vazio. Nao gera os roll options `self:trait:<trait>` que o sistema real cria como efeito colateral (fora de escopo, integracao entre familias).

## 12. Rule Element: BaseSpeed

```ts
// packages/game-system-pathfinder-2e/src/shared/rule-engine/rule-elements/base-speed.ts
type BaseSpeedSource = { key: 'BaseSpeed'; selector: string; value: number | string; predicate?: Predicate }
function resolveBaseSpeeds(rules, rollOptions): { resolved: Array<{ selector: string; value: number }>; skipped: [...] }
```

`selector` normalizado removendo sufixo `-speed` (reproduz o construtor real). `value` segue a mesma regra `dynamic-value` de IWR/TempHP (sem checagem de positividade aqui — velocidade zero e um valor real e valido no sistema, ex.: velocidade removida).

## 13. Rule Element: Note

```ts
// packages/game-system-pathfinder-2e/src/shared/rule-engine/rule-elements/note.ts
type NoteSource = { key: 'Note'; selector: string | string[]; text: string; title?: string | null; predicate?: Predicate; outcome?: string[] }
function resolveNotes(rules, rollOptions): { resolved: Array<{ selector: string; text: string; title: string | null; outcome: string[] | null }>; skipped: [...] }
```

`selector` em array gera uma nota resolvida por selector. `title` default `null` (default real do schema). `text`/`title` nunca sao interpretados (ver `skills.md`).

## 14. Rule Element: ActiveEffectLike

```ts
// packages/game-system-pathfinder-2e/src/shared/rule-engine/rule-elements/active-effect-like.ts
type ActiveEffectLikeMode = 'multiply' | 'add' | 'subtract' | 'remove' | 'downgrade' | 'upgrade' | 'override'
type ActiveEffectLikeSource = { key: 'ActiveEffectLike'; mode: ActiveEffectLikeMode; path: string; value: number | string | boolean; predicate?: Predicate; phase?: string; merge?: boolean }
function resolveActiveEffectLikes(rules, rollOptions): { resolved: Array<{ mode; path: string; value: number | boolean; phase: string; merge: boolean }>; skipped: [...] }
```

`value` string (formula) -> `skipped('dynamic-value')`. `phase` default `'applyAEs'`, `merge` default `false` (defaults reais auditados em `ae-like.ts`). Nunca computa o valor final combinando com o valor atual do personagem — so expoe a mudanca pendente.

## 15. Rule Element: AdjustDegreeOfSuccess

```ts
// packages/game-system-pathfinder-2e/src/shared/rule-engine/rule-elements/adjust-degree-of-success.ts
type Pathfinder2eDegreeOutcome = 'all' | 'criticalFailure' | 'failure' | 'success' | 'criticalSuccess'
type Pathfinder2eDegreeAdjustmentAmount = 'one-degree-better' | 'one-degree-worse' | 'two-degrees-better' | 'two-degrees-worse' | 'to-critical-failure' | 'to-failure' | 'to-success' | 'to-critical-success'
type AdjustDegreeOfSuccessSource = { key: 'AdjustDegreeOfSuccess'; selector: string; adjustment: Partial<Record<Pathfinder2eDegreeOutcome, Pathfinder2eDegreeAdjustmentAmount>>; predicate?: Predicate }
function resolveAdjustDegreeOfSuccess(rules, rollOptions): { resolved: Array<{ selector: string; adjustment }>; skipped: [...] }
```

`selector` dinamico -> `skipped('dynamic-selector')`. Um exemplo real do compendio grafa `adjusment` (typo); nao bate com a forma esperada, ignorado silenciosamente (ver `skills.md`).

## 16. Rule Element: RollTwice

```ts
type RollTwiceSource = { key: 'RollTwice'; keep: 'higher' | 'lower'; selector: string; predicate?: Predicate; removeAfterRoll?: boolean }
function resolveRollTwice(rules, rollOptions): { resolved: Array<{ keep; selector: string; removeAfterRoll: boolean }>; skipped: [...] }
```

`removeAfterRoll` default `false`.

## 17. Rule Elements: TokenLight / TokenMark

```ts
type TokenLightSource = { key: 'TokenLight'; value: { bright?: number; dim?: number; color?: string; animation?: { type?: string; intensity?: number; speed?: number } }; predicate?: Predicate }
function resolveTokenLights(rules, rollOptions): { resolved: TokenLightValue[]; skipped: [...] }

type TokenMarkSource = { key: 'TokenMark'; slug: string; predicate?: Predicate }
function resolveTokenMarks(rules, rollOptions): { resolved: string[]; skipped: [...] }
```

Ambos sao dados de apresentacao (luz do token, marcador visual); `value`/`slug` sao repassados sem interpretacao.

## 18. Rule Element: DexterityModifierCap

```ts
type DexterityModifierCapSource = { key: 'DexterityModifierCap'; value: number | string; predicate?: Predicate }
function resolveDexterityModifierCaps(rules, rollOptions): { resolved: Array<{ value: number }>; skipped: [...] }
```

Sem campo `selector` (confirmado no schema real) — e sempre sobre o teto de Destreza na CA.

## 19. Rule Elements: Striking / WeaponPotency

```ts
type StrikingSource = { key: 'Striking'; selector: string; value: number | string; predicate?: Predicate }
type WeaponPotencySource = { key: 'WeaponPotency'; selector: string; value: number | string; predicate?: Predicate }
function resolveStriking(rules, rollOptions): { resolved: Array<{ selector: string; value: number }>; skipped: [...] }
function resolveWeaponPotency(rules, rollOptions): { resolved: Array<{ selector: string; value: number }>; skipped: [...] }
```

Mesma forma; `selector` dinamico -> `skipped('dynamic-selector')` (checado antes do valor); `value` formula -> `skipped('dynamic-value')`.

## 20. Rule Element: FastHealing

```ts
type FastHealingSource = { key: 'FastHealing'; value: number | string; predicate?: Predicate; type?: 'fast-healing' | 'regeneration'; deactivatedBy?: unknown }
function resolveFastHealing(rules, rollOptions): { resolved: Array<{ value: number; type: 'fast-healing' | 'regeneration' }>; skipped: [...] }
```

`type` default real `'fast-healing'`. Mesma regra `dynamic-value`/`non-positive-value` de TempHP/IWR.

## 21. Rule Element: CriticalSpecialization

```ts
type CriticalSpecializationSource = { key: 'CriticalSpecialization'; predicate?: Predicate }
function resolveCriticalSpecialization(rules, rollOptions): { activeCount: number; skipped: [...] }
```

Sem valor proprio; so conta quantas instancias ativas existem (util para futura logica de "so uma especializacao critica se aplica por ataque").

## 22. Rule Element: MartialProficiency

```ts
type MartialProficiencySource = { key: 'MartialProficiency'; slug?: string; label?: string; kind?: 'attack' | 'defense'; definition: Predicate; value: number | string; sameAs?: string; maxRank?: 'trained' | 'expert' | 'master' | 'legendary'; predicate?: Predicate }
function resolveMartialProficiency(rules, rollOptions): { resolved: Array<{ slug?: string; kind; definition: Predicate; value: number; sameAs?: string; maxRank?: string }>; skipped: [...] }
```

`kind` default `'attack'`. **`definition` nao e avaliado por `testPredicate`** (escopa itens, dominio diferente do `predicate` de ator) — devolvido como metadado opaco. So `predicate` gate a resolucao.

## 23. Rule Element: EphemeralEffect

```ts
type EphemeralEffectSource = { key: 'EphemeralEffect'; uuid: string; selectors: string[]; affects?: 'origin' | 'target'; predicate?: Predicate }
function resolveEphemeralEffects(rules, rollOptions): { resolved: Array<{ uuid: string; selectors: string[]; affects: 'origin' | 'target' }>; skipped: [...] }
```

`affects` default real `'target'`. Mesma nao-resolucao de UUID do `GrantItem` — so decide se o grant dispara e expoe a referencia bruta.

## 24. Criterios de Aceitacao
* `testPredicate`/`testPredicateStatement` cobrem todos os operadores encontrados na auditoria real (`and`, `or`, `not`, `nand`, `nor`, `gte`, `gt`, `lte`, `lt`) usando pelo menos um exemplo genuino extraido de `pf2e-master/packs/spell-effects`/`conditions` como fixture.
* Expressao dinamica Foundry (`{item|level}` etc.) em qualquer lado de um comparador resulta em `false`, nunca excecao.
* `applyStackingRules` reproduz corretamente os quatro casos: (a) dois bonus `status` do mesmo selector — so o maior conta; (b) bonus e penalidade `circumstance` no mesmo selector — os dois contam; (c) modifiers `untyped` multiplos — todos somam; (d) mistura de tipos — cada tipo contribui seu proprio resultado.
* `resolveFlatModifiers` cobre, com exemplos reais auditados: modifier sem predicate (sempre resolve), modifier com predicate satisfeito/nao satisfeito, `value` em formula (skip `'dynamic-value'`), `selector` em array estatico (varios modifiers), `selector` com expressao dinamica (skip `'dynamic-selector'`), e integracao ponta a ponta com `applyStackingRules`.
* `resolveGrantItems` cobre, com exemplos reais auditados (incluindo a cadeia Haste -> Spell Effect: Haste -> GrantItem -> Quickened): grant sem predicate, grant com predicate satisfeito/nao satisfeito, uuid dinamico (skip `'dynamic-uuid'`), e as duas direcoes da interacao real `inMemoryOnly`/`reevaluateOnUpdate`/`allowDuplicate`.
* `resolveRollOptions` cobre, com exemplos reais auditados: option sem predicate (sempre resolve, string sanitizada identica ao codigo real), `value` omitido (default `true`) e explicito `false`, option com expressao dinamica embutida (skip `'dynamic-option'`), option `toggleable` (skip `'toggleable-not-resolved'`), predicate satisfeito/nao satisfeito, e um teste ponta a ponta mostrando um roll option resolvido sendo mesclado de volta ao contexto e satisfazendo o predicate de uma regra seguinte.
* `resolveImmunities`/`resolveWeaknesses`/`resolveResistances`, `resolveTempHp`, `resolveSenses`, `resolveActorTraits`, `resolveBaseSpeeds`, `resolveNotes`, `resolveActiveEffectLikes`, `resolveAdjustDegreeOfSuccess`, `resolveRollTwice`, `resolveTokenLights`, `resolveTokenMarks`, `resolveDexterityModifierCaps`, `resolveStriking`, `resolveWeaponPotency`, `resolveFastHealing`, `resolveCriticalSpecialization`, `resolveMartialProficiency` e `resolveEphemeralEffects` cobrem, cada uma com exemplos reais auditados: caso sem predicate, predicate satisfeito/nao satisfeito, tipo/selector/valor/uuid dinamico reportado em `skipped` (nunca avaliado), e os defaults reais documentados em cada secao acima.
* Nenhuma funcao deste submodulo depende de React, Prisma, fetch ou qualquer estado de personagem/campanha real.
* Testes vivem em `packages/game-system-pathfinder-2e/src/shared/rule-engine/*.test.ts` e sao importados por `apps/api/src/unit.test.ts`, mesmo padrao de `shared/armor-class.test.ts`.
