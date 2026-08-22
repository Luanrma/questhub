import {
  PATHFINDER_2E_ACTIVE_EFFECT_SOURCE_DOCUMENTS,
  type Pathfinder2eActiveEffectSourceDocument,
} from './generated/active-effect-source'

export const PATHFINDER_2E_ACTIVE_EFFECT_DEFINITION_SOURCE_COMMIT =
  '01114da5851f31404078d8020809b13e4000bc4b' as const

export type Pathfinder2eActiveEffectPolarity = 'BENEFICIAL' | 'HARMFUL' | 'NEUTRAL'

export type Pathfinder2eActiveEffectDefinition = {
  definitionKey: string
  kind: 'condition' | 'effect' | 'affliction'
  source: {
    sourcePack: string
    sourceId: string
    slug?: string
    publicationTitle?: string
    imagePath?: string
  }
  name: string
  description: string
  iconUrl: string | null
  polarity: Pathfinder2eActiveEffectPolarity
  group: string | null
  conditionValue: {
    isValued: boolean
    baseValue: number | null
  } | null
  schemaVersion: 1
}

function assertSourceDocument(document: Pathfinder2eActiveEffectSourceDocument): void {
  if (!document.definitionKey || !document.description.trim() || !document.name.trim()) {
    throw new Error(`Invalid PF2e active-effect source document: ${document.definitionKey}`)
  }
  if (document.definitionKey !== `${document.source.sourcePack}:${document.source.sourceId}`) {
    throw new Error(`Invalid PF2e active-effect identity: ${document.definitionKey}`)
  }
  if (document.kind === 'condition' && !document.source.slug) {
    throw new Error(`PF2e Condition is missing canonical slug: ${document.definitionKey}`)
  }
}

function toDefinition(
  document: Pathfinder2eActiveEffectSourceDocument,
): Pathfinder2eActiveEffectDefinition {
  assertSourceDocument(document)
  return {
    definitionKey: document.definitionKey,
    kind: document.kind,
    source: {
      sourcePack: document.source.sourcePack,
      sourceId: document.source.sourceId,
      ...(document.source.slug ? { slug: document.source.slug } : {}),
      ...(document.source.publicationTitle
        ? { publicationTitle: document.source.publicationTitle }
        : {}),
      ...(document.source.imagePath ? { imagePath: document.source.imagePath } : {}),
    },
    name: document.name,
    description: document.description,
    // Canonical Foundry image paths are retained as source metadata only. The generic
    // QuestHub UI keeps using its local fallback until a safe local-asset resolver exists.
    iconUrl: null,
    polarity: document.polarity,
    group: document.group,
    conditionValue: document.conditionValue,
    schemaVersion: 1,
  }
}

const definitionsByKey = new Map<string, Pathfinder2eActiveEffectDefinition>()

for (const document of PATHFINDER_2E_ACTIVE_EFFECT_SOURCE_DOCUMENTS) {
  const definition = toDefinition(document)
  if (definitionsByKey.has(definition.definitionKey)) {
    throw new Error(`Duplicate PF2e active-effect definition: ${definition.definitionKey}`)
  }
  definitionsByKey.set(definition.definitionKey, definition)
}

const DEFINITIONS = Object.freeze(
  [...definitionsByKey.values()].sort((left, right) => (
    left.definitionKey.localeCompare(right.definitionKey)
  )),
)

export const PATHFINDER_2E_CANONICAL_CONDITIONS = Object.freeze(
  DEFINITIONS
    .filter((definition) => definition.kind === 'condition')
    .map((definition) => ({
      compendiumKey: definition.name,
      slug: definition.source.slug!,
      polarity: definition.polarity,
      isValued: definition.conditionValue?.isValued ?? false,
      baseValue: definition.conditionValue?.baseValue ?? null,
    }))
    .sort((left, right) => left.slug.localeCompare(right.slug)),
)

export const PATHFINDER_2E_MISSING_CANONICAL_CONDITION_SLUGS = Object.freeze([] as string[])

export function listPathfinder2eActiveEffectDefinitions(): readonly Pathfinder2eActiveEffectDefinition[] {
  return DEFINITIONS
}

export function getPathfinder2eActiveEffectDefinition(
  definitionKey: string,
): Pathfinder2eActiveEffectDefinition | null {
  return definitionsByKey.get(definitionKey) ?? null
}

export function getPathfinder2eActiveEffectDefinitionBySource(
  sourcePack: string,
  sourceId: string,
): Pathfinder2eActiveEffectDefinition | null {
  return getPathfinder2eActiveEffectDefinition(`${sourcePack}:${sourceId}`)
}
