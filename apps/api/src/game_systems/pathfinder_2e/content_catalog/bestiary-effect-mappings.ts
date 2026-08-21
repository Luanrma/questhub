import { getPathfinder2eActiveEffectDefinitionBySource } from './active-effect-definitions'
import { PATHFINDER_2E_BESTIARY_ENTRIES } from './bestiary'
import type {
  Pathfinder2eBestiaryAction,
  Pathfinder2eBestiaryData,
  Pathfinder2eCreatureData,
  Pathfinder2eHazardData,
} from './bestiary/types'
import { getPathfinder2eSourceReferences, type Pathfinder2eSourceReference } from './source-references'

export const PATHFINDER_2E_BESTIARY_EFFECT_MAPPING_SOURCE_COMMIT =
  '01114da5851f31404078d8020809b13e4000bc4b' as const

export type Pathfinder2eBestiaryEffectOutcome =
  | 'CRITICAL_SUCCESS'
  | 'SUCCESS'
  | 'FAILURE'
  | 'CRITICAL_FAILURE'
  | null

export type Pathfinder2eBestiaryEffectEvidence =
  | 'EXPLICIT_EFFECT_ASSIGNMENT'
  | 'AFFLICTION_STAGE'
  | 'DEGREE_OF_SUCCESS'
  | 'DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE'
  | 'STANDALONE_REFERENCE'
  | 'REFERENCE_ONLY'
  | 'NON_TEXT_REFERENCE'

export type Pathfinder2eBestiaryEffectOrigin = {
  entryType: 'CREATURE' | 'HAZARD'
  kind: 'ACTION' | 'ATTACK' | 'ENTITY' | 'HAZARD_ROUTINE' | 'UNKNOWN_OWNER'
  sourceId: string | null
  name: string | null
  actionKind: 'action' | 'reaction' | 'passive' | null
}

export type Pathfinder2eBestiaryEffectMapping = {
  contentId: string
  occurrenceIndex: number
  definitionKey: string
  kind: 'condition' | 'effect' | 'affliction'
  potential: boolean
  evidence: Pathfinder2eBestiaryEffectEvidence
  outcome: Pathfinder2eBestiaryEffectOutcome
  valueHint: { value: number; source: 'REFERENCE_LABEL' } | null
  stageHint: { stage: number; source: 'STAGE_LINE' } | null
  origin: Pathfinder2eBestiaryEffectOrigin
  source: {
    sourcePath: string
    sourceIndex: number
    label: string | null
    ownerSourceId: string | null
  }
  schemaVersion: 1
}

type OriginalBestiaryEntry = (typeof PATHFINDER_2E_BESTIARY_ENTRIES)[number]['original']

type ResolvedSemanticReference = {
  reference: Pathfinder2eSourceReference
  definition: NonNullable<ReturnType<typeof getPathfinder2eActiveEffectDefinitionBySource>>
  origin: Pathfinder2eBestiaryEffectOrigin
  textContext: TextContext | null
}

type TextContext = {
  key: string
  text: string
}

type AlignedOccurrence = {
  start: number
  token: string
  line: string
  previousLine: string | null
}

const BESTIARY_BY_CONTENT_ID = new Map(
  PATHFINDER_2E_BESTIARY_ENTRIES.map((entry) => [entry.original.contentId, entry.original]),
)
const MAPPING_CACHE = new Map<string, readonly Pathfinder2eBestiaryEffectMapping[]>()

const OUTCOME_PREFIXES: readonly [string, Exclude<Pathfinder2eBestiaryEffectOutcome, null>][] = [
  ['Critical Success', 'CRITICAL_SUCCESS'],
  ['Critical Failure', 'CRITICAL_FAILURE'],
  ['Success', 'SUCCESS'],
  ['Failure', 'FAILURE'],
]

function entryTypeOf(data: Pathfinder2eBestiaryData): 'CREATURE' | 'HAZARD' {
  return data.entryType === 'HAZARD' ? 'HAZARD' : 'CREATURE'
}

function isHazard(data: Pathfinder2eBestiaryData): data is Pathfinder2eHazardData {
  return data.entryType === 'HAZARD'
}

function isCreature(data: Pathfinder2eBestiaryData): data is Pathfinder2eCreatureData {
  return data.entryType !== 'HAZARD'
}

function originFor(
  entry: OriginalBestiaryEntry,
  reference: Pathfinder2eSourceReference,
): Pathfinder2eBestiaryEffectOrigin {
  const entryType = entryTypeOf(entry.data)
  const ownerSourceId = reference.ownerSourceId

  const action = ownerSourceId
    ? entry.data.actions.find((candidate) => candidate.id === ownerSourceId)
    : undefined
  if (action) {
    return {
      entryType,
      kind: 'ACTION',
      sourceId: action.id,
      name: action.name,
      actionKind: action.kind,
    }
  }

  if (ownerSourceId && isCreature(entry.data)) {
    const attack = entry.data.attacks.find((candidate) => candidate.id === ownerSourceId)
    if (attack) {
      return {
        entryType,
        kind: 'ATTACK',
        sourceId: attack.id,
        name: attack.name,
        actionKind: null,
      }
    }
  }

  if (ownerSourceId === entry.source.sourceId) {
    if (isHazard(entry.data) && reference.sourcePath === '/system/details/routine') {
      return {
        entryType,
        kind: 'HAZARD_ROUTINE',
        sourceId: ownerSourceId,
        name: entry.data.name,
        actionKind: null,
      }
    }

    return {
      entryType,
      kind: 'ENTITY',
      sourceId: ownerSourceId,
      name: entry.data.name,
      actionKind: null,
    }
  }

  return {
    entryType,
    kind: 'UNKNOWN_OWNER',
    sourceId: ownerSourceId,
    name: null,
    actionKind: null,
  }
}

function actionByOrigin(
  data: Pathfinder2eBestiaryData,
  origin: Pathfinder2eBestiaryEffectOrigin,
): Pathfinder2eBestiaryAction | null {
  if (origin.kind !== 'ACTION' || !origin.sourceId) return null
  return data.actions.find((candidate) => candidate.id === origin.sourceId) ?? null
}

function textContextFor(
  entry: OriginalBestiaryEntry,
  reference: Pathfinder2eSourceReference,
  origin: Pathfinder2eBestiaryEffectOrigin,
): TextContext | null {
  if (
    origin.kind === 'ACTION'
    && reference.sourcePath.endsWith('/system/description/value')
  ) {
    const action = actionByOrigin(entry.data, origin)
    return action
      ? { key: `ACTION:${action.id}`, text: action.description }
      : null
  }

  if (origin.kind === 'HAZARD_ROUTINE' && isHazard(entry.data)) {
    return { key: 'HAZARD_ROUTINE', text: entry.data.routine }
  }

  if (origin.kind === 'ENTITY') {
    if (isHazard(entry.data) && reference.sourcePath === '/system/details/description') {
      return { key: 'ENTITY_DESCRIPTION', text: entry.data.description }
    }
    if (isCreature(entry.data) && reference.sourcePath === '/system/details/publicNotes') {
      return { key: 'ENTITY_DESCRIPTION', text: entry.data.description }
    }
  }

  return null
}

function alignmentTokenFor(resolved: ResolvedSemanticReference): string | null {
  const explicitLabel = resolved.reference.label
  if (explicitLabel && explicitLabel.trim()) return explicitLabel

  const compendiumKey = resolved.reference.target.compendiumKey
  if (compendiumKey && compendiumKey.trim()) return compendiumKey

  return null
}

function exactOccurrences(text: string, token: string): number[] {
  if (!token) return []
  const positions: number[] = []
  let cursor = 0
  while (cursor <= text.length - token.length) {
    const index = text.indexOf(token, cursor)
    if (index < 0) break
    positions.push(index)
    cursor = index + Math.max(token.length, 1)
  }
  return positions
}

function lineStartAt(text: string, position: number): number {
  return text.lastIndexOf('\n', Math.max(position - 1, 0)) + 1
}

function lineAt(text: string, position: number): string {
  const lineStart = lineStartAt(text, position)
  const nextBreak = text.indexOf('\n', position)
  const lineEnd = nextBreak < 0 ? text.length : nextBreak
  return text.slice(lineStart, lineEnd).trim()
}

function previousLineAt(text: string, position: number): string | null {
  const currentLineStart = lineStartAt(text, position)
  if (currentLineStart <= 0) return null
  const previousLineEnd = currentLineStart - 1
  const previousLineStart = text.lastIndexOf('\n', Math.max(previousLineEnd - 1, 0)) + 1
  return text.slice(previousLineStart, previousLineEnd).trim()
}

function outcomeForLine(line: string | null): Pathfinder2eBestiaryEffectOutcome {
  if (!line) return null
  for (const [prefix, outcome] of OUTCOME_PREFIXES) {
    if (line === prefix || line.startsWith(`${prefix} `)) return outcome
  }
  return null
}

function stageForLine(line: string | null): number | null {
  if (!line) return null
  const match = line.match(/^Stage ([1-9]\d*)(?:\s|$)/)
  return match ? Number(match[1]) : null
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function isExplicitEffectAssignment(line: string, token: string): boolean {
  const target = escapeRegex(token)
  const causal = new RegExp(
    `\\b(?:become|becomes|becoming|knocked|rendered|land|lands|gain|gains)\\s+${target}(?=$|[\\s.,;:()])`,
  )
  const passiveBy = new RegExp(
    `\\b(?:is|are)\\s+${target}\\s+by\\b`,
  )
  return causal.test(line) || passiveBy.test(line)
}

function isStructuralOccurrence(line: string, token: string): boolean {
  return line === token
    || outcomeForLine(line) !== null
    || stageForLine(line) !== null
    || isExplicitEffectAssignment(line, token)
}

function alignContextReferences(
  context: TextContext,
  references: readonly ResolvedSemanticReference[],
): Map<Pathfinder2eSourceReference, AlignedOccurrence> {
  const aligned = new Map<Pathfinder2eSourceReference, AlignedOccurrence>()
  const byToken = new Map<string, ResolvedSemanticReference[]>()

  for (const resolved of references) {
    const token = alignmentTokenFor(resolved)
    if (!token) continue
    const group = byToken.get(token) ?? []
    group.push(resolved)
    byToken.set(token, group)
  }

  for (const [token, group] of byToken) {
    group.sort((left, right) => left.reference.sourceIndex - right.reference.sourceIndex)
    const allPositions = exactOccurrences(context.text, token)
    let selectedPositions: number[] | null = null

    if (allPositions.length === group.length) {
      selectedPositions = allPositions
    } else {
      const structuralPositions = allPositions.filter((position) => (
        isStructuralOccurrence(lineAt(context.text, position), token)
      ))
      if (structuralPositions.length === group.length) selectedPositions = structuralPositions
    }

    if (!selectedPositions) continue

    group.forEach((resolved, index) => {
      const start = selectedPositions![index]
      aligned.set(resolved.reference, {
        start,
        token,
        line: lineAt(context.text, start),
        previousLine: previousLineAt(context.text, start),
      })
    })
  }

  let lastAcceptedStart = -1
  const sourceOrdered = [...references].sort((left, right) => (
    left.reference.sourceIndex - right.reference.sourceIndex
  ))
  for (const resolved of sourceOrdered) {
    const occurrence = aligned.get(resolved.reference)
    if (!occurrence) continue
    if (occurrence.start <= lastAcceptedStart) {
      aligned.delete(resolved.reference)
      continue
    }
    lastAcceptedStart = occurrence.start
  }

  return aligned
}

function alignReferences(
  resolvedReferences: readonly ResolvedSemanticReference[],
): Map<Pathfinder2eSourceReference, AlignedOccurrence> {
  const aligned = new Map<Pathfinder2eSourceReference, AlignedOccurrence>()
  const byContext = new Map<string, { context: TextContext; references: ResolvedSemanticReference[] }>()

  for (const resolved of resolvedReferences) {
    if (!resolved.textContext) continue
    const group = byContext.get(resolved.textContext.key) ?? {
      context: resolved.textContext,
      references: [],
    }
    group.references.push(resolved)
    byContext.set(resolved.textContext.key, group)
  }

  for (const { context, references } of byContext.values()) {
    for (const [reference, occurrence] of alignContextReferences(context, references)) {
      aligned.set(reference, occurrence)
    }
  }
  return aligned
}

function valueHintFor(
  label: string | null,
  definition: ResolvedSemanticReference['definition'],
): Pathfinder2eBestiaryEffectMapping['valueHint'] {
  if (
    definition.kind !== 'condition'
    || !definition.conditionValue?.isValued
    || !label
  ) return null

  const prefix = `${definition.name} `
  if (!label.startsWith(prefix)) return null
  const rawValue = label.slice(prefix.length)
  if (!/^[1-9]\d*$/.test(rawValue)) return null
  return { value: Number(rawValue), source: 'REFERENCE_LABEL' }
}

function resolveSemanticReferences(
  entry: OriginalBestiaryEntry,
): ResolvedSemanticReference[] {
  return getPathfinder2eSourceReferences(entry.contentId)
    .filter((reference) => (
      reference.target.type
      && reference.target.sourcePack
      && reference.target.sourceId
    ))
    .map((reference) => {
      const sourcePack = reference.target.sourcePack!
      const sourceId = reference.target.sourceId!
      const definition = getPathfinder2eActiveEffectDefinitionBySource(sourcePack, sourceId)
      if (!definition) {
        throw new Error(
          `Missing PF2e active-effect definition for Bestiary reference ${entry.contentId} -> ${sourcePack}:${sourceId}`,
        )
      }
      if (definition.kind !== reference.target.type) {
        throw new Error(
          `PF2e Bestiary reference kind mismatch ${entry.contentId} -> ${definition.definitionKey}`,
        )
      }
      const origin = originFor(entry, reference)
      return {
        reference,
        definition,
        origin,
        textContext: textContextFor(entry, reference, origin),
      }
    })
    .sort((left, right) => (
      left.reference.sourcePath.localeCompare(right.reference.sourcePath)
      || left.reference.sourceIndex - right.reference.sourceIndex
    ))
}

function classifyMapping(
  contentId: string,
  occurrenceIndex: number,
  resolved: ResolvedSemanticReference,
  aligned: AlignedOccurrence | undefined,
): Pathfinder2eBestiaryEffectMapping {
  const { reference, definition, origin, textContext } = resolved
  let potential = false
  let evidence: Pathfinder2eBestiaryEffectEvidence
  let outcome: Pathfinder2eBestiaryEffectOutcome = null
  let stageHint: Pathfinder2eBestiaryEffectMapping['stageHint'] = null

  if (!textContext) {
    evidence = 'NON_TEXT_REFERENCE'
  } else if (!aligned) {
    evidence = 'REFERENCE_ONLY'
  } else {
    const sameLineStage = stageForLine(aligned.line)
    const sameLineOutcome = outcomeForLine(aligned.line)

    if (sameLineStage !== null && reference.label) {
      evidence = 'AFFLICTION_STAGE'
      potential = true
      stageHint = { stage: sameLineStage, source: 'STAGE_LINE' }
    } else if (sameLineStage !== null) {
      evidence = 'REFERENCE_ONLY'
    } else if (sameLineOutcome && reference.label) {
      evidence = 'DEGREE_OF_SUCCESS'
      potential = true
      outcome = sameLineOutcome
    } else if (sameLineOutcome) {
      evidence = 'REFERENCE_ONLY'
    } else if (aligned.line === aligned.token) {
      const previousOutcome = outcomeForLine(aligned.previousLine)
      if (previousOutcome) {
        evidence = 'DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE'
        outcome = previousOutcome
      } else {
        evidence = 'STANDALONE_REFERENCE'
      }
      potential = true
    } else if (
      (origin.kind === 'ACTION' || origin.kind === 'HAZARD_ROUTINE')
      && isExplicitEffectAssignment(aligned.line, aligned.token)
    ) {
      evidence = 'EXPLICIT_EFFECT_ASSIGNMENT'
      potential = true
    } else {
      evidence = 'REFERENCE_ONLY'
    }
  }

  return {
    contentId,
    occurrenceIndex,
    definitionKey: definition.definitionKey,
    kind: definition.kind,
    potential,
    evidence,
    outcome,
    valueHint: valueHintFor(reference.label, definition),
    stageHint,
    origin,
    source: {
      sourcePath: reference.sourcePath,
      sourceIndex: reference.sourceIndex,
      label: reference.label,
      ownerSourceId: reference.ownerSourceId,
    },
    schemaVersion: 1,
  }
}

export function getPathfinder2eBestiaryEffectMappings(
  contentId: string,
): readonly Pathfinder2eBestiaryEffectMapping[] {
  const cached = MAPPING_CACHE.get(contentId)
  if (cached) return cached

  const entry = BESTIARY_BY_CONTENT_ID.get(contentId)
  if (!entry) return []

  const resolvedReferences = resolveSemanticReferences(entry)
  const aligned = alignReferences(resolvedReferences)
  const mappings = Object.freeze(
    resolvedReferences.map((resolved, occurrenceIndex) => (
      classifyMapping(contentId, occurrenceIndex, resolved, aligned.get(resolved.reference))
    )),
  )
  MAPPING_CACHE.set(contentId, mappings)
  return mappings
}

export function listPathfinder2ePotentialBestiaryEffects(
  contentId: string,
): readonly Pathfinder2eBestiaryEffectMapping[] {
  return getPathfinder2eBestiaryEffectMappings(contentId).filter((mapping) => mapping.potential)
}
