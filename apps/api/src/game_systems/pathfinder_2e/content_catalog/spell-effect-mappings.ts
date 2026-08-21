import { getPathfinder2eActiveEffectDefinitionBySource } from './active-effect-definitions'
import { getPathfinder2eSourceReferences, type Pathfinder2eSourceReference } from './source-references'
import { PATHFINDER_2E_SPELL_ENTRIES } from './spells'

export const PATHFINDER_2E_SPELL_EFFECT_MAPPING_SOURCE_COMMIT =
  '01114da5851f31404078d8020809b13e4000bc4b' as const

const DESCRIPTION_SOURCE_PATH = '/system/description/value'

export type Pathfinder2eSpellEffectOutcome =
  | 'CRITICAL_SUCCESS'
  | 'SUCCESS'
  | 'FAILURE'
  | 'CRITICAL_FAILURE'
  | null

export type Pathfinder2eSpellEffectEvidence =
  | 'DEGREE_OF_SUCCESS'
  | 'DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE'
  | 'STANDALONE_REFERENCE'
  | 'REFERENCE_ONLY'
  | 'NON_DESCRIPTION_REFERENCE'

export type Pathfinder2eSpellEffectValueHint = {
  value: number
  source: 'REFERENCE_LABEL'
} | null

export type Pathfinder2eSpellEffectMapping = {
  contentId: string
  /** Zero-based deterministic index among resolved semantic references for this Spell. */
  occurrenceIndex: number
  definitionKey: string
  kind: 'condition' | 'effect' | 'affliction'
  potential: boolean
  evidence: Pathfinder2eSpellEffectEvidence
  outcome: Pathfinder2eSpellEffectOutcome
  valueHint: Pathfinder2eSpellEffectValueHint
  source: {
    sourcePath: string
    sourceIndex: number
    label: string | null
    ownerSourceId: string | null
  }
  schemaVersion: 1
}

type AlignedOccurrence = {
  start: number
  token: string
  line: string
  previousNonEmptyLine: string | null
}

type ResolvedSemanticReference = {
  reference: Pathfinder2eSourceReference
  definition: NonNullable<ReturnType<typeof getPathfinder2eActiveEffectDefinitionBySource>>
}

const SPELL_BY_CONTENT_ID = new Map(
  PATHFINDER_2E_SPELL_ENTRIES.map((entry) => [entry.original.contentId, entry.original]),
)
const MAPPING_CACHE = new Map<string, readonly Pathfinder2eSpellEffectMapping[]>()

const OUTCOME_PREFIXES: readonly [string, Exclude<Pathfinder2eSpellEffectOutcome, null>][] = [
  ['Critical Success', 'CRITICAL_SUCCESS'],
  ['Critical Failure', 'CRITICAL_FAILURE'],
  ['Success', 'SUCCESS'],
  ['Failure', 'FAILURE'],
]

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

function previousNonEmptyLineAt(text: string, position: number): string | null {
  const currentLineStart = lineStartAt(text, position)
  if (currentLineStart <= 0) return null

  const previousText = text.slice(0, currentLineStart - 1)
  const lines = previousText.split('\n')
  for (let index = lines.length - 1; index >= 0; index -= 1) {
    const line = lines[index].trim()
    if (line) return line
  }
  return null
}

function outcomeForLine(line: string | null): Pathfinder2eSpellEffectOutcome {
  if (!line) return null
  for (const [prefix, outcome] of OUTCOME_PREFIXES) {
    if (line === prefix || line.startsWith(`${prefix} `)) return outcome
  }
  return null
}

function isStructuralOccurrence(line: string, token: string): boolean {
  return line === token || outcomeForLine(line) !== null
}

/**
 * Aligns QH-EFF-004 references with the normalized en-US description conservatively.
 * An explicit reference label is preferred. Foundry UUIDs without explicit labels use
 * their structural compendiumKey only as an exact alignment token; source.label remains
 * untouched and mechanical value hints still require an explicit label.
 */
function alignDescriptionReferences(
  description: string,
  references: readonly ResolvedSemanticReference[],
): Map<Pathfinder2eSourceReference, AlignedOccurrence> {
  const aligned = new Map<Pathfinder2eSourceReference, AlignedOccurrence>()
  const byToken = new Map<string, ResolvedSemanticReference[]>()

  for (const resolved of references) {
    const { reference } = resolved
    if (reference.sourcePath !== DESCRIPTION_SOURCE_PATH) continue

    const token = alignmentTokenFor(resolved)
    if (!token) continue

    const group = byToken.get(token) ?? []
    group.push(resolved)
    byToken.set(token, group)
  }

  for (const [token, group] of byToken) {
    group.sort((left, right) => left.reference.sourceIndex - right.reference.sourceIndex)

    const allPositions = exactOccurrences(description, token)
    let selectedPositions: number[] | null = null

    if (allPositions.length === group.length) {
      selectedPositions = allPositions
    } else {
      const structuralPositions = allPositions.filter((position) => (
        isStructuralOccurrence(lineAt(description, position), token)
      ))
      if (structuralPositions.length === group.length) selectedPositions = structuralPositions
    }

    if (!selectedPositions) continue

    group.forEach((resolved, index) => {
      const start = selectedPositions![index]
      aligned.set(resolved.reference, {
        start,
        token,
        line: lineAt(description, start),
        previousNonEmptyLine: previousNonEmptyLineAt(description, start),
      })
    })
  }

  // The Feature Spec requires one forward-only pass through the normalized description.
  // Per-token matching above resolves duplicate labels safely; this second pass enforces
  // global source order across different tokens. Any candidate that would move backwards
  // is deliberately discarded so the reference remains REFERENCE_ONLY rather than being
  // attached to an earlier plain-text occurrence.
  let lastAcceptedStart = -1
  const sourceOrdered = [...references]
    .filter(({ reference }) => reference.sourcePath === DESCRIPTION_SOURCE_PATH)
    .sort((left, right) => left.reference.sourceIndex - right.reference.sourceIndex)

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

function valueHintFor(
  label: string | null,
  definition: ResolvedSemanticReference['definition'],
): Pathfinder2eSpellEffectValueHint {
  if (
    definition.kind !== 'condition'
    || !definition.conditionValue?.isValued
    || !label
  ) return null

  const prefix = `${definition.name} `
  if (!label.startsWith(prefix)) return null

  const rawValue = label.slice(prefix.length)
  if (!/^[1-9]\d*$/.test(rawValue)) return null

  return {
    value: Number(rawValue),
    source: 'REFERENCE_LABEL',
  }
}

function resolveSemanticReferences(contentId: string): ResolvedSemanticReference[] {
  return getPathfinder2eSourceReferences(contentId)
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
          `Missing PF2e active-effect definition for resolved Spell reference ${contentId} -> ${sourcePack}:${sourceId}`,
        )
      }
      if (definition.kind !== reference.target.type) {
        throw new Error(
          `PF2e Spell reference kind mismatch ${contentId} -> ${definition.definitionKey}`,
        )
      }
      return { reference, definition }
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
): Pathfinder2eSpellEffectMapping {
  const { reference, definition } = resolved
  let evidence: Pathfinder2eSpellEffectEvidence
  let outcome: Pathfinder2eSpellEffectOutcome = null
  let potential = false

  if (reference.sourcePath !== DESCRIPTION_SOURCE_PATH) {
    evidence = 'NON_DESCRIPTION_REFERENCE'
  } else if (!aligned) {
    evidence = 'REFERENCE_ONLY'
  } else {
    const sameLineOutcome = outcomeForLine(aligned.line)

    // A same-line Degree-of-Success marker is only strong enough when QH-EFF-004
    // preserved an explicit label. An implicit compendiumKey is alignment metadata only;
    // treating it as application evidence creates false positives such as the comparative
    // Unfriendly/Indifferent links in Outcast's Curse.
    if (sameLineOutcome && reference.label) {
      evidence = 'DEGREE_OF_SUCCESS'
      outcome = sameLineOutcome
      potential = true
    } else if (sameLineOutcome) {
      evidence = 'REFERENCE_ONLY'
      outcome = null
    } else if (aligned.line === aligned.token) {
      const previousOutcome = outcomeForLine(aligned.previousNonEmptyLine)
      if (previousOutcome) {
        evidence = 'DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE'
        outcome = previousOutcome
      } else {
        evidence = 'STANDALONE_REFERENCE'
        outcome = null
      }
      potential = true
    } else {
      evidence = 'REFERENCE_ONLY'
      outcome = null
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
    source: {
      sourcePath: reference.sourcePath,
      sourceIndex: reference.sourceIndex,
      label: reference.label,
      ownerSourceId: reference.ownerSourceId,
    },
    schemaVersion: 1,
  }
}

export function getPathfinder2eSpellEffectMappings(
  contentId: string,
): readonly Pathfinder2eSpellEffectMapping[] {
  const cached = MAPPING_CACHE.get(contentId)
  if (cached) return cached

  const spell = SPELL_BY_CONTENT_ID.get(contentId)
  if (!spell) return []

  const resolvedReferences = resolveSemanticReferences(contentId)
  const descriptionReferences = resolvedReferences.filter(({ reference }) => (
    reference.sourcePath === DESCRIPTION_SOURCE_PATH
  ))
  const aligned = alignDescriptionReferences(spell.data.description, descriptionReferences)

  const mappings = Object.freeze(
    resolvedReferences.map((resolved, occurrenceIndex) => (
      classifyMapping(
        contentId,
        occurrenceIndex,
        resolved,
        aligned.get(resolved.reference),
      )
    )),
  )

  MAPPING_CACHE.set(contentId, mappings)
  return mappings
}

export function listPathfinder2ePotentialSpellEffects(
  contentId: string,
): readonly Pathfinder2eSpellEffectMapping[] {
  return getPathfinder2eSpellEffectMappings(contentId).filter((mapping) => mapping.potential)
}
