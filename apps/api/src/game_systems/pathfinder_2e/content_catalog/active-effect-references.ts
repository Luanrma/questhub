import { getPathfinder2eActiveEffectDefinitionView } from './active-effect-query'
import { getPathfinder2eBestiaryEffectMappings } from './bestiary-effect-mappings'
import { getPathfinder2eItemEffectMappings } from './item-effect-mappings'
import type { Pathfinder2eContentLocale } from './models'
import { getPathfinder2eSpellEffectMappings } from './spell-effect-mappings'

export type Pathfinder2eActiveEffectReferenceOrigin = {
  entryType: 'CREATURE' | 'HAZARD'
  kind: 'ACTION' | 'ATTACK' | 'ENTITY' | 'HAZARD_ROUTINE' | 'UNKNOWN_OWNER'
  sourceId: string | null
  name: string | null
  actionKind: 'action' | 'reaction' | 'passive' | null
}

export type Pathfinder2eActiveEffectReferenceView = {
  contentId: string
  occurrenceIndex: number
  definitionKey: string
  kind: 'condition' | 'effect' | 'affliction'
  displayLabel: string
  exactLabels: readonly string[]
  potential: boolean
  evidence: string
  context: {
    outcome: 'CRITICAL_SUCCESS' | 'SUCCESS' | 'FAILURE' | 'CRITICAL_FAILURE' | null
    valueHint: number | null
    stageHint: number | null
    origin: Pathfinder2eActiveEffectReferenceOrigin | null
  }
  source: {
    sourcePath: string
    sourceIndex: number
    label: string | null
    ownerSourceId: string | null
  }
  schemaVersion: 1
}

type CommonMapping = {
  contentId: string
  occurrenceIndex: number
  definitionKey: string
  kind: 'condition' | 'effect' | 'affliction'
  potential: boolean
  evidence: string
  outcome: Pathfinder2eActiveEffectReferenceView['context']['outcome']
  valueHint: { value: number } | null
  source: Pathfinder2eActiveEffectReferenceView['source']
  schemaVersion: 1
  stageHint?: { stage: number } | null
  origin?: Pathfinder2eActiveEffectReferenceOrigin
}

function mappingsFor(contentId: string): readonly CommonMapping[] {
  if (contentId.startsWith('pf2e:spell:')) {
    return getPathfinder2eSpellEffectMappings(contentId)
  }
  if (contentId.startsWith('pf2e:item:')) {
    return getPathfinder2eItemEffectMappings(contentId)
  }
  if (contentId.startsWith('pf2e:bestiary:')) {
    return getPathfinder2eBestiaryEffectMappings(contentId)
  }
  return []
}

function uniqueExactLabels(values: readonly (string | null | undefined)[]) {
  const result: string[] = []
  const seen = new Set<string>()

  for (const value of values) {
    const normalized = value?.trim()
    if (!normalized || seen.has(normalized)) continue
    seen.add(normalized)
    result.push(normalized)
  }

  return result
}

function toReferenceView(
  mapping: CommonMapping,
  locale: Pathfinder2eContentLocale,
): Pathfinder2eActiveEffectReferenceView {
  const localized = getPathfinder2eActiveEffectDefinitionView(mapping.definitionKey, locale)
  const canonical = locale === 'en-US'
    ? localized
    : getPathfinder2eActiveEffectDefinitionView(mapping.definitionKey, 'en-US')

  if (!localized || !canonical) {
    throw new Error(`Missing PF2e Active Effect definition view for ${mapping.definitionKey}`)
  }

  const value = mapping.valueHint?.value ?? null
  const localizedValuedLabel = value === null ? null : `${localized.name} ${value}`
  const canonicalValuedLabel = value === null ? null : `${canonical.name} ${value}`
  const exactLabels = uniqueExactLabels([
    mapping.source.label,
    localizedValuedLabel,
    canonicalValuedLabel,
    localized.name,
    canonical.name,
  ])

  return {
    contentId: mapping.contentId,
    occurrenceIndex: mapping.occurrenceIndex,
    definitionKey: mapping.definitionKey,
    kind: mapping.kind,
    displayLabel: localizedValuedLabel ?? localized.name,
    exactLabels,
    potential: mapping.potential,
    evidence: mapping.evidence,
    context: {
      outcome: mapping.outcome,
      valueHint: value,
      stageHint: mapping.stageHint?.stage ?? null,
      origin: mapping.origin ?? null,
    },
    source: mapping.source,
    schemaVersion: 1,
  }
}

export function getPathfinder2eActiveEffectReferences(
  contentId: string,
  locale: Pathfinder2eContentLocale,
): readonly Pathfinder2eActiveEffectReferenceView[] {
  return mappingsFor(contentId).map((mapping) => toReferenceView(mapping, locale))
}
