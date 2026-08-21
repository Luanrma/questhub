import { PATHFINDER_2E_BESTIARY_SOURCE_REFERENCE_INDEX } from './source_reference_index/generated/bestiary'
import { PATHFINDER_2E_ITEM_SOURCE_REFERENCE_INDEX } from './source_reference_index/generated/items'
import { PATHFINDER_2E_SPELL_SOURCE_REFERENCE_INDEX } from './source_reference_index/generated/spells'
import type {
  Pathfinder2eSemanticTargetType,
  Pathfinder2eSourceReferenceTuple,
} from './source-references'

export const PATHFINDER_2E_ACTIVE_EFFECT_DEFINITION_SOURCE_COMMIT =
  '01114da5851f31404078d8020809b13e4000bc4b' as const

export type Pathfinder2eActiveEffectPolarity = 'BENEFICIAL' | 'HARMFUL' | 'NEUTRAL'

export type Pathfinder2eActiveEffectDefinition = {
  definitionKey: string
  kind: Pathfinder2eSemanticTargetType
  source: {
    sourcePack: string
    sourceId: string
    slug?: string
    publicationTitle?: string
  }
  name: string
  description: string | null
  iconUrl: string | null
  polarity: Pathfinder2eActiveEffectPolarity
  group: string | null
  conditionValue: {
    isValued: boolean
    baseValue: number | null
  } | null
  schemaVersion: 1
}

type CanonicalConditionMetadata = {
  compendiumKey: string
  slug: string
  polarity: Pathfinder2eActiveEffectPolarity
  isValued: boolean
  baseValue: number | null
  sourceIdSupplement?: string
}

const BENEFICIAL_CONDITIONS = new Set(['invisible', 'quickened'])
const NEUTRAL_CONDITIONS = new Set([
  'concealed',
  'friendly',
  'helpful',
  'hidden',
  'hostile',
  'indifferent',
  'observed',
  'undetected',
  'unfriendly',
  'unnoticed',
])
const HARMFUL_CONDITIONS = new Set([
  'blinded',
  'broken',
  'clumsy',
  'confused',
  'controlled',
  'cursebound',
  'dazzled',
  'deafened',
  'doomed',
  'drained',
  'dying',
  'encumbered',
  'enfeebled',
  'fascinated',
  'fatigued',
  'fleeing',
  'frightened',
  'grabbed',
  'immobilized',
  'off-guard',
  'paralyzed',
  'persistent-damage',
  'petrified',
  'prone',
  'restrained',
  'sickened',
  'slowed',
  'stunned',
  'stupefied',
  'unconscious',
  'wounded',
])
const VALUED_CONDITIONS = new Set([
  'clumsy',
  'cursebound',
  'doomed',
  'drained',
  'dying',
  'enfeebled',
  'frightened',
  'sickened',
  'slowed',
  'stunned',
  'stupefied',
  'wounded',
])

function conditionPolarity(slug: string): Pathfinder2eActiveEffectPolarity {
  const matches = [
    BENEFICIAL_CONDITIONS.has(slug) ? 'BENEFICIAL' : null,
    NEUTRAL_CONDITIONS.has(slug) ? 'NEUTRAL' : null,
    HARMFUL_CONDITIONS.has(slug) ? 'HARMFUL' : null,
  ].filter((value): value is Pathfinder2eActiveEffectPolarity => value !== null)

  if (matches.length !== 1) {
    throw new Error(`PF2e Condition polarity must be classified exactly once: ${slug}`)
  }
  return matches[0]
}

function condition(
  slug: string,
  compendiumKey: string,
  sourceIdSupplement?: string,
): CanonicalConditionMetadata {
  const isValued = VALUED_CONDITIONS.has(slug)
  return {
    slug,
    compendiumKey,
    polarity: conditionPolarity(slug),
    isValued,
    baseValue: isValued ? 1 : null,
    ...(sourceIdSupplement ? { sourceIdSupplement } : {}),
  }
}

/**
 * Canonical documents from the frozen `conditionitems` / `packs/pf2e/conditions` pack.
 * `malevolence` is intentionally absent: Foundry accepts the slug internally, but the
 * frozen canonical Conditions pack does not contain it as a base condition document.
 *
 * Most source IDs are already present structurally in QH-EFF-004. `Hostile` is the one
 * canonical condition not referenced by the current catalog, so its exact frozen source
 * ID is versioned here to preserve complete canonical coverage without text inference.
 */
export const PATHFINDER_2E_CANONICAL_CONDITIONS = [
  condition('blinded', 'Blinded'),
  condition('broken', 'Broken'),
  condition('clumsy', 'Clumsy'),
  condition('concealed', 'Concealed'),
  condition('confused', 'Confused'),
  condition('controlled', 'Controlled'),
  condition('cursebound', 'Cursebound'),
  condition('dazzled', 'Dazzled'),
  condition('deafened', 'Deafened'),
  condition('doomed', 'Doomed'),
  condition('drained', 'Drained'),
  condition('dying', 'Dying'),
  condition('encumbered', 'Encumbered'),
  condition('enfeebled', 'Enfeebled'),
  condition('fascinated', 'Fascinated'),
  condition('fatigued', 'Fatigued'),
  condition('fleeing', 'Fleeing'),
  condition('friendly', 'Friendly'),
  condition('frightened', 'Frightened'),
  condition('grabbed', 'Grabbed'),
  condition('helpful', 'Helpful'),
  condition('hidden', 'Hidden'),
  condition('hostile', 'Hostile', 'ud7gTLwPeklzYSXG'),
  condition('immobilized', 'Immobilized'),
  condition('indifferent', 'Indifferent'),
  condition('invisible', 'Invisible'),
  condition('observed', 'Observed'),
  condition('off-guard', 'Off-Guard'),
  condition('paralyzed', 'Paralyzed'),
  condition('persistent-damage', 'Persistent Damage'),
  condition('petrified', 'Petrified'),
  condition('prone', 'Prone'),
  condition('quickened', 'Quickened'),
  condition('restrained', 'Restrained'),
  condition('sickened', 'Sickened'),
  condition('slowed', 'Slowed'),
  condition('stunned', 'Stunned'),
  condition('stupefied', 'Stupefied'),
  condition('unconscious', 'Unconscious'),
  condition('undetected', 'Undetected'),
  condition('unfriendly', 'Unfriendly'),
  condition('unnoticed', 'Unnoticed'),
  condition('wounded', 'Wounded'),
] as const satisfies readonly CanonicalConditionMetadata[]

const CONDITION_BY_COMPENDIUM_KEY = new Map(
  PATHFINDER_2E_CANONICAL_CONDITIONS.map((entry) => [entry.compendiumKey, entry]),
)

const REFERENCE_INDEXES: ReadonlyArray<
  Readonly<Record<string, readonly Pathfinder2eSourceReferenceTuple[]>>
> = [
  PATHFINDER_2E_BESTIARY_SOURCE_REFERENCE_INDEX,
  PATHFINDER_2E_SPELL_SOURCE_REFERENCE_INDEX,
  PATHFINDER_2E_ITEM_SOURCE_REFERENCE_INDEX,
]

type ParsedUuid = {
  package: string
  sourcePack: string
  documentType: string
  compendiumKey: string
}

function parseUuid(uuid: string): ParsedUuid | null {
  const match = uuid.match(/^Compendium\.([^.]+)\.([^.]+)\.([^.]+)\.(.+)$/)
  if (!match) return null
  return {
    package: match[1],
    sourcePack: match[2],
    documentType: match[3],
    compendiumKey: match[4],
  }
}

function canonicalConditionDefinition(
  metadata: CanonicalConditionMetadata,
  sourceId: string,
): Pathfinder2eActiveEffectDefinition {
  return {
    definitionKey: `conditionitems:${sourceId}`,
    kind: 'condition',
    source: {
      sourcePack: 'conditionitems',
      sourceId,
      slug: metadata.slug,
    },
    name: metadata.compendiumKey,
    description: null,
    iconUrl: null,
    polarity: metadata.polarity,
    group: null,
    conditionValue: {
      isValued: metadata.isValued,
      baseValue: metadata.baseValue,
    },
    schemaVersion: 1,
  }
}

function definitionFromTuple(
  tuple: Pathfinder2eSourceReferenceTuple,
): Pathfinder2eActiveEffectDefinition | null {
  const uuid = tuple[3]
  const sourceId = tuple[6]
  const targetType = tuple[8]
  if (!sourceId || !targetType) return null

  const parsed = parseUuid(uuid)
  if (!parsed || parsed.package !== 'pf2e' || parsed.documentType !== 'Item') return null

  const definitionKey = `${parsed.sourcePack}:${sourceId}`

  if (targetType === 'condition') {
    const metadata = CONDITION_BY_COMPENDIUM_KEY.get(parsed.compendiumKey)
    if (!metadata || parsed.sourcePack !== 'conditionitems') return null
    return canonicalConditionDefinition(metadata, sourceId)
  }

  return {
    definitionKey,
    kind: targetType,
    source: {
      sourcePack: parsed.sourcePack,
      sourceId,
    },
    name: parsed.compendiumKey,
    description: null,
    iconUrl: null,
    polarity: targetType === 'affliction' ? 'HARMFUL' : 'NEUTRAL',
    group: null,
    conditionValue: null,
    schemaVersion: 1,
  }
}

function mergeDefinitionAliases(
  existing: Pathfinder2eActiveEffectDefinition,
  candidate: Pathfinder2eActiveEffectDefinition,
): Pathfinder2eActiveEffectDefinition {
  if (existing.kind !== candidate.kind) {
    throw new Error(
      `Conflicting PF2e active-effect definition kind: ${candidate.definitionKey}`,
    )
  }

  if (existing.source.slug !== candidate.source.slug) {
    throw new Error(
      `Conflicting PF2e active-effect definition slug: ${candidate.definitionKey}`,
    )
  }

  if (
    existing.polarity !== candidate.polarity
    || JSON.stringify(existing.conditionValue) !== JSON.stringify(candidate.conditionValue)
  ) {
    throw new Error(
      `Conflicting PF2e active-effect definition metadata: ${candidate.definitionKey}`,
    )
  }

  if (existing.name === candidate.name) return existing

  // Foundry references can use more than one compendium key/alias for the same sourceId.
  // Identity is sourcePack + sourceId, never the alias. Choose a stable presentation name
  // without changing semantic identity or inferring mechanics from text.
  return existing.name.localeCompare(candidate.name) <= 0
    ? existing
    : { ...existing, name: candidate.name }
}

function collectDefinitions(): ReadonlyMap<string, Pathfinder2eActiveEffectDefinition> {
  const definitions = new Map<string, Pathfinder2eActiveEffectDefinition>()

  for (const index of REFERENCE_INDEXES) {
    for (const references of Object.values(index)) {
      for (const reference of references) {
        const definition = definitionFromTuple(reference)
        if (!definition) continue

        const existing = definitions.get(definition.definitionKey)
        if (existing) {
          definitions.set(
            definition.definitionKey,
            mergeDefinitionAliases(existing, definition),
          )
          continue
        }

        definitions.set(definition.definitionKey, definition)
      }
    }
  }

  for (const metadata of PATHFINDER_2E_CANONICAL_CONDITIONS) {
    if (!metadata.sourceIdSupplement) continue
    const definition = canonicalConditionDefinition(metadata, metadata.sourceIdSupplement)
    const existing = definitions.get(definition.definitionKey)
    definitions.set(
      definition.definitionKey,
      existing ? mergeDefinitionAliases(existing, definition) : definition,
    )
  }

  return definitions
}

const DEFINITIONS_BY_KEY = collectDefinitions()
const DEFINITIONS = Object.freeze(
  [...DEFINITIONS_BY_KEY.values()].sort((left, right) => (
    left.definitionKey.localeCompare(right.definitionKey)
  )),
)

const RESOLVED_CANONICAL_CONDITION_SLUGS = new Set(
  DEFINITIONS
    .filter((definition) => definition.kind === 'condition')
    .map((definition) => definition.source.slug)
    .filter((slug): slug is string => typeof slug === 'string'),
)

/** Frozen canonical Conditions that are still missing from the semantic definition catalog. */
export const PATHFINDER_2E_MISSING_CANONICAL_CONDITION_SLUGS = Object.freeze(
  PATHFINDER_2E_CANONICAL_CONDITIONS
    .map((entry) => entry.slug)
    .filter((slug) => !RESOLVED_CANONICAL_CONDITION_SLUGS.has(slug)),
)

export function listPathfinder2eActiveEffectDefinitions(): readonly Pathfinder2eActiveEffectDefinition[] {
  return DEFINITIONS
}

export function getPathfinder2eActiveEffectDefinition(
  definitionKey: string,
): Pathfinder2eActiveEffectDefinition | null {
  return DEFINITIONS_BY_KEY.get(definitionKey) ?? null
}

export function getPathfinder2eActiveEffectDefinitionBySource(
  sourcePack: string,
  sourceId: string,
): Pathfinder2eActiveEffectDefinition | null {
  return getPathfinder2eActiveEffectDefinition(`${sourcePack}:${sourceId}`)
}
