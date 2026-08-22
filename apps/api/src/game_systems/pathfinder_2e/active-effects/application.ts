import {
  getPathfinder2eActiveEffectDefinition,
  listPathfinder2eActiveEffectDefinitions,
  type Pathfinder2eActiveEffectDefinition,
} from '../content_catalog/active-effect-definitions'
import {
  getPathfinder2eBestiaryEffectMappings,
  type Pathfinder2eBestiaryEffectMapping,
} from '../content_catalog/bestiary-effect-mappings'
import {
  getPathfinder2eItemEffectMappings,
  type Pathfinder2eItemEffectMapping,
} from '../content_catalog/item-effect-mappings'
import {
  getPathfinder2eSpellEffectMappings,
  type Pathfinder2eSpellEffectMapping,
} from '../content_catalog/spell-effect-mappings'
import { normalizePathfinder2eAppliedEffectDescription } from './presentation'

export const PATHFINDER_2E_ACTIVE_EFFECT_NAMESPACE =
  'questhub:pathfinder-2e:active-effects:v1' as const

export type Pathfinder2eEffectSourceType =
  | 'SPELL'
  | 'ITEM'
  | 'CREATURE'
  | 'HAZARD'
  | 'MANUAL'

export type Pathfinder2eEffectApplicationSource =
  | { type: 'SPELL'; contentId: string; occurrenceIndex: number }
  | { type: 'ITEM'; contentId: string; occurrenceIndex: number }
  | { type: 'CREATURE'; contentId: string; occurrenceIndex: number }
  | { type: 'HAZARD'; contentId: string; occurrenceIndex: number }
  | { type: 'MANUAL'; definitionKey: string }

export type Pathfinder2eEffectApplicationRequest = {
  source: Pathfinder2eEffectApplicationSource
  value?: number
}

type SourceMapping =
  | Pathfinder2eSpellEffectMapping
  | Pathfinder2eItemEffectMapping
  | Pathfinder2eBestiaryEffectMapping

export type Pathfinder2eEffectCandidate = {
  sourceType: Exclude<Pathfinder2eEffectSourceType, 'MANUAL'>
  contentId: string
  occurrenceIndex: number
  definitionKey: string
  kind: Pathfinder2eActiveEffectDefinition['kind']
  name: string
  polarity: Pathfinder2eActiveEffectDefinition['polarity']
  valued: boolean
  valueHint: number | null
  outcome: string | null
  stageHint: number | null
  originLabel: string | null
}

export type Pathfinder2eResolvedActorEffect = {
  namespace: typeof PATHFINDER_2E_ACTIVE_EFFECT_NAMESPACE
  definitionKey: string
  name: string
  description: string | null
  iconUrl: string | null
  polarity: Pathfinder2eActiveEffectDefinition['polarity']
  category: Pathfinder2eActiveEffectDefinition['kind']
  displayValue: string | null
  schemaVersion: 1
  payload: {
    kind: Pathfinder2eActiveEffectDefinition['kind']
    value: number | null
    evidence: string | null
    outcome: string | null
    stage: number | null
  }
  origin: {
    system: 'PATHFINDER_2E'
    type: Pathfinder2eEffectSourceType
    contentId: string | null
    occurrenceIndex: number | null
    structuralOrigin: Pathfinder2eBestiaryEffectMapping['origin'] | null
  }
}

export type Pathfinder2eEffectResolutionFailure =
  | 'DEFINITION_NOT_FOUND'
  | 'SOURCE_NOT_FOUND'
  | 'SOURCE_NOT_POTENTIAL'
  | 'SOURCE_TYPE_MISMATCH'
  | 'INVALID_VALUE'

export type Pathfinder2eEffectResolutionResult =
  | { ok: true; effect: Pathfinder2eResolvedActorEffect }
  | { ok: false; reason: Pathfinder2eEffectResolutionFailure }

function mappingAt<T extends SourceMapping>(
  mappings: readonly T[],
  occurrenceIndex: number,
): T | null {
  if (!Number.isInteger(occurrenceIndex) || occurrenceIndex < 0) return null
  return mappings.find((mapping) => mapping.occurrenceIndex === occurrenceIndex) ?? null
}

function resolveSourceMapping(
  source: Exclude<Pathfinder2eEffectApplicationSource, { type: 'MANUAL' }>,
): { mapping: SourceMapping | null; mismatch: boolean } {
  if (source.type === 'SPELL') {
    return {
      mapping: mappingAt(getPathfinder2eSpellEffectMappings(source.contentId), source.occurrenceIndex),
      mismatch: false,
    }
  }

  if (source.type === 'ITEM') {
    return {
      mapping: mappingAt(getPathfinder2eItemEffectMappings(source.contentId), source.occurrenceIndex),
      mismatch: false,
    }
  }

  const mapping = mappingAt(
    getPathfinder2eBestiaryEffectMappings(source.contentId),
    source.occurrenceIndex,
  )
  if (!mapping) return { mapping: null, mismatch: false }

  return {
    mapping,
    mismatch: mapping.origin.entryType !== source.type,
  }
}

function stageHint(mapping: SourceMapping | null): number | null {
  return mapping && 'stageHint' in mapping
    ? mapping.stageHint?.stage ?? null
    : null
}

function structuralOrigin(
  mapping: SourceMapping | null,
): Pathfinder2eBestiaryEffectMapping['origin'] | null {
  return mapping && 'origin' in mapping ? mapping.origin : null
}

function effectiveValue(
  definition: Pathfinder2eActiveEffectDefinition,
  mapping: SourceMapping | null,
  requestedValue: number | undefined,
): { ok: true; value: number | null } | { ok: false } {
  const isValued = definition.kind === 'condition' && definition.conditionValue?.isValued === true

  if (!isValued) {
    return requestedValue === undefined
      ? { ok: true, value: null }
      : { ok: false }
  }

  if (requestedValue !== undefined) {
    return Number.isInteger(requestedValue) && requestedValue > 0
      ? { ok: true, value: requestedValue }
      : { ok: false }
  }

  const hinted = mapping?.valueHint?.value
  if (hinted !== undefined && hinted !== null) return { ok: true, value: hinted }

  const baseValue = definition.conditionValue?.baseValue
  if (baseValue !== undefined && baseValue !== null && baseValue > 0) {
    return { ok: true, value: baseValue }
  }

  return { ok: false }
}

export function resolvePathfinder2eEffectApplication(
  request: Pathfinder2eEffectApplicationRequest,
): Pathfinder2eEffectResolutionResult {
  let mapping: SourceMapping | null = null
  let definitionKey: string

  if (request.source.type === 'MANUAL') {
    definitionKey = request.source.definitionKey
  } else {
    const resolved = resolveSourceMapping(request.source)
    if (resolved.mismatch) return { ok: false, reason: 'SOURCE_TYPE_MISMATCH' }
    if (!resolved.mapping) return { ok: false, reason: 'SOURCE_NOT_FOUND' }
    if (!resolved.mapping.potential) return { ok: false, reason: 'SOURCE_NOT_POTENTIAL' }
    mapping = resolved.mapping
    definitionKey = mapping.definitionKey
  }

  const definition = getPathfinder2eActiveEffectDefinition(definitionKey)
  if (!definition) return { ok: false, reason: 'DEFINITION_NOT_FOUND' }

  const value = effectiveValue(definition, mapping, request.value)
  if (!value.ok) return { ok: false, reason: 'INVALID_VALUE' }

  const source = request.source
  return {
    ok: true,
    effect: {
      namespace: PATHFINDER_2E_ACTIVE_EFFECT_NAMESPACE,
      definitionKey: definition.definitionKey,
      name: definition.name,
      description: normalizePathfinder2eAppliedEffectDescription(definition.description),
      iconUrl: definition.iconUrl,
      polarity: definition.polarity,
      category: definition.kind,
      displayValue: value.value === null ? null : String(value.value),
      schemaVersion: 1,
      payload: {
        kind: definition.kind,
        value: value.value,
        evidence: mapping?.evidence ?? null,
        outcome: mapping?.outcome ?? null,
        stage: stageHint(mapping),
      },
      origin: {
        system: 'PATHFINDER_2E',
        type: source.type,
        contentId: source.type === 'MANUAL' ? null : source.contentId,
        occurrenceIndex: source.type === 'MANUAL' ? null : source.occurrenceIndex,
        structuralOrigin: structuralOrigin(mapping),
      },
    },
  }
}

export function searchPathfinder2eEffectDefinitions(
  query = '',
  limit = 50,
): readonly Pathfinder2eActiveEffectDefinition[] {
  const normalized = query.trim().toLocaleLowerCase('en-US')
  const safeLimit = Math.max(1, Math.min(100, Math.trunc(limit) || 50))

  return listPathfinder2eActiveEffectDefinitions()
    .filter((definition) => {
      if (!normalized) return true
      return [
        definition.name,
        definition.definitionKey,
        definition.source.slug ?? '',
      ].some((value) => value.toLocaleLowerCase('en-US').includes(normalized))
    })
    .slice(0, safeLimit)
}

export function listPathfinder2eEffectCandidates(
  sourceType: Exclude<Pathfinder2eEffectSourceType, 'MANUAL'>,
  contentId: string,
): readonly Pathfinder2eEffectCandidate[] {
  let mappings: readonly SourceMapping[]

  if (sourceType === 'SPELL') mappings = getPathfinder2eSpellEffectMappings(contentId)
  else if (sourceType === 'ITEM') mappings = getPathfinder2eItemEffectMappings(contentId)
  else {
    mappings = getPathfinder2eBestiaryEffectMappings(contentId).filter((mapping) => (
      mapping.origin.entryType === sourceType
    ))
  }

  return mappings
    .filter((mapping) => mapping.potential)
    .map((mapping) => {
      const definition = getPathfinder2eActiveEffectDefinition(mapping.definitionKey)
      if (!definition) {
        throw new Error(`Missing PF2e active-effect definition ${mapping.definitionKey}`)
      }
      return {
        sourceType,
        contentId,
        occurrenceIndex: mapping.occurrenceIndex,
        definitionKey: definition.definitionKey,
        kind: definition.kind,
        name: definition.name,
        polarity: definition.polarity,
        valued: definition.kind === 'condition' && definition.conditionValue?.isValued === true,
        valueHint: mapping.valueHint?.value ?? null,
        outcome: mapping.outcome,
        stageHint: stageHint(mapping),
        originLabel: 'origin' in mapping ? mapping.origin.name : null,
      }
    })
}
