import assert from 'node:assert/strict'
import test from 'node:test'
import { getPathfinder2eActiveEffectDefinition } from './active-effect-definitions'
import {
  getPathfinder2eBestiaryEffectMappings,
  listPathfinder2ePotentialBestiaryEffects,
  PATHFINDER_2E_BESTIARY_EFFECT_MAPPING_SOURCE_COMMIT,
} from './bestiary-effect-mappings'
import { PATHFINDER_2E_BESTIARY_ENTRIES } from './bestiary'
import { getPathfinder2eSourceReferences } from './source-references'

const CONFOUNDING_PORTAL = 'pf2e:bestiary:pathfinder-dark-archive:confounding-portal'
const STEAM_VENTS = 'pf2e:bestiary:hazards:steam-vents'
const HRYNGAR_SHARPSHOOTER = 'pf2e:bestiary:pathfinder-monster-core:hryngar-sharpshooter'

function entryByContentId(contentId: string) {
  return PATHFINDER_2E_BESTIARY_ENTRIES.find((entry) => entry.original.contentId === contentId)?.original ?? null
}

test('PF2e Bestiary effect mappings remain locked to the semantic source revision', () => {
  assert.equal(
    PATHFINDER_2E_BESTIARY_EFFECT_MAPPING_SOURCE_COMMIT,
    '01114da5851f31404078d8020809b13e4000bc4b',
  )
})

test('every resolved semantic Bestiary reference is accounted exactly once', () => {
  let expectedTotal = 0
  let actualTotal = 0

  for (const entry of PATHFINDER_2E_BESTIARY_ENTRIES) {
    const contentId = entry.original.contentId
    const expectedReferences = getPathfinder2eSourceReferences(contentId).filter((reference) => (
      reference.target.type
      && reference.target.sourcePack
      && reference.target.sourceId
    ))
    const mappings = getPathfinder2eBestiaryEffectMappings(contentId)

    assert.equal(
      mappings.length,
      expectedReferences.length,
      `semantic Bestiary reference coverage mismatch for ${contentId}`,
    )
    assert.deepEqual(
      mappings.map((mapping) => mapping.occurrenceIndex),
      mappings.map((_, index) => index),
      `occurrence indexes must be stable and gapless for ${contentId}`,
    )

    expectedTotal += expectedReferences.length
    actualTotal += mappings.length
  }

  assert.ok(expectedTotal > 0)
  assert.equal(actualTotal, expectedTotal)
})

test('unresolved PF2e Item references are never promoted into Bestiary effect mappings', () => {
  for (const entry of PATHFINDER_2E_BESTIARY_ENTRIES) {
    const contentId = entry.original.contentId
    const unresolved = getPathfinder2eSourceReferences(contentId).filter((reference) => (
      reference.target.documentType === 'Item' && !reference.target.type
    ))
    if (unresolved.length === 0) continue

    const mappedCoordinates = new Set(
      getPathfinder2eBestiaryEffectMappings(contentId).map((mapping) => (
        `${mapping.source.sourcePath}\u0000${mapping.source.sourceIndex}`
      )),
    )

    for (const reference of unresolved) {
      assert.equal(
        mappedCoordinates.has(`${reference.sourcePath}\u0000${reference.sourceIndex}`),
        false,
        `unresolved target was promoted for ${contentId}`,
      )
    }
  }
})

test('every mapping resolves to the QH-EFF-005 definition with matching semantic kind', () => {
  for (const entry of PATHFINDER_2E_BESTIARY_ENTRIES) {
    for (const mapping of getPathfinder2eBestiaryEffectMappings(entry.original.contentId)) {
      const definition = getPathfinder2eActiveEffectDefinition(mapping.definitionKey)
      assert.ok(definition, `missing definition ${mapping.definitionKey}`)
      assert.equal(mapping.kind, definition.kind)
      assert.equal(mapping.schemaVersion, 1)
    }
  }
})

test('origins preserve Bestiary entry type and structural embedded owner identity', () => {
  let creatureMappings = 0
  let hazardMappings = 0

  for (const entry of PATHFINDER_2E_BESTIARY_ENTRIES) {
    const original = entry.original
    const expectedEntryType = original.data.entryType === 'HAZARD' ? 'HAZARD' : 'CREATURE'

    for (const mapping of getPathfinder2eBestiaryEffectMappings(original.contentId)) {
      assert.equal(mapping.origin.entryType, expectedEntryType)

      if (expectedEntryType === 'HAZARD') hazardMappings += 1
      else creatureMappings += 1

      if (mapping.origin.kind === 'ACTION') {
        const action = original.data.actions.find((candidate) => candidate.id === mapping.origin.sourceId)
        assert.ok(action)
        assert.equal(mapping.origin.name, action.name)
        assert.equal(mapping.origin.actionKind, action.kind)
      }

      if (mapping.origin.kind === 'ATTACK') {
        assert.equal(expectedEntryType, 'CREATURE')
        assert.notEqual(original.data.entryType, 'HAZARD')
        if (original.data.entryType !== 'HAZARD') {
          const attack = original.data.attacks.find((candidate) => candidate.id === mapping.origin.sourceId)
          assert.ok(attack)
          assert.equal(mapping.origin.name, attack.name)
          assert.equal(mapping.origin.actionKind, null)
        }
      }
    }
  }

  assert.ok(creatureMappings > 0)
  assert.ok(hazardMappings > 0)
})

test('potential classification is restricted to approved evidence and non-text references are never promoted', () => {
  const approvedPotentialEvidence = new Set([
    'EXPLICIT_EFFECT_ASSIGNMENT',
    'AFFLICTION_STAGE',
    'DEGREE_OF_SUCCESS',
    'DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE',
    'STANDALONE_REFERENCE',
  ])

  for (const entry of PATHFINDER_2E_BESTIARY_ENTRIES) {
    const contentId = entry.original.contentId
    const mappings = getPathfinder2eBestiaryEffectMappings(contentId)
    assert.deepEqual(
      listPathfinder2ePotentialBestiaryEffects(contentId),
      mappings.filter((mapping) => mapping.potential),
    )

    for (const mapping of mappings) {
      if (mapping.potential) {
        assert.equal(approvedPotentialEvidence.has(mapping.evidence), true)
      } else {
        assert.equal(
          mapping.evidence === 'REFERENCE_ONLY' || mapping.evidence === 'NON_TEXT_REFERENCE',
          true,
        )
        assert.equal(mapping.outcome, null)
        assert.equal(mapping.stageHint, null)
      }
      if (mapping.evidence === 'NON_TEXT_REFERENCE') assert.equal(mapping.potential, false)
    }
  }
})

test('Confounding Portal maps Confused from its reaction as explicit potential assignment', () => {
  const entry = entryByContentId(CONFOUNDING_PORTAL)
  assert.ok(entry)
  assert.equal(entry.data.entryType, 'HAZARD')

  const confused = getPathfinder2eBestiaryEffectMappings(CONFOUNDING_PORTAL).find((mapping) => (
    mapping.definitionKey === 'conditionitems:yblD8fOR1J8rDwEQ'
    && mapping.origin.sourceId === 'K7zv6GnWMFnvcN2z'
  ))
  assert.ok(confused)
  assert.equal(confused.kind, 'condition')
  assert.equal(confused.potential, true)
  assert.equal(confused.evidence, 'EXPLICIT_EFFECT_ASSIGNMENT')
  assert.equal(confused.outcome, null)
  assert.equal(confused.origin.entryType, 'HAZARD')
  assert.equal(confused.origin.kind, 'ACTION')
  assert.equal(confused.origin.name, 'Confounding Misdirection')
  assert.equal(confused.origin.actionKind, 'reaction')
})

test('Steam Vents maps Prone as potential without resolving the critical-failure save', () => {
  const entry = entryByContentId(STEAM_VENTS)
  assert.ok(entry)
  assert.equal(entry.data.entryType, 'HAZARD')

  const prone = getPathfinder2eBestiaryEffectMappings(STEAM_VENTS).find((mapping) => (
    mapping.definitionKey === 'conditionitems:j91X7x0XSomq8d60'
    && mapping.origin.sourceId === 'SvqJNCRH2eI1jZk1'
  ))
  assert.ok(prone)
  assert.equal(prone.potential, true)
  assert.equal(prone.evidence, 'EXPLICIT_EFFECT_ASSIGNMENT')
  assert.equal(prone.outcome, null)
  assert.equal(prone.origin.kind, 'ACTION')
  assert.equal(prone.origin.name, 'Steam Blast')
  assert.equal(prone.origin.actionKind, 'reaction')
})

test('creature passive origin can expose potential effects without executing its save or attack', () => {
  const entry = entryByContentId(HRYNGAR_SHARPSHOOTER)
  assert.ok(entry)
  assert.notEqual(entry.data.entryType, 'HAZARD')

  const mappings = getPathfinder2eBestiaryEffectMappings(HRYNGAR_SHARPSHOOTER)
  const prone = mappings.find((mapping) => (
    mapping.definitionKey === 'conditionitems:j91X7x0XSomq8d60'
    && mapping.origin.sourceId === 'gooqrR0z9rN4mnlN'
  ))
  assert.ok(prone)
  assert.equal(prone.potential, true)
  assert.equal(prone.evidence, 'EXPLICIT_EFFECT_ASSIGNMENT')
  assert.equal(prone.outcome, null)
  assert.equal(prone.origin.entryType, 'CREATURE')
  assert.equal(prone.origin.kind, 'ACTION')
  assert.equal(prone.origin.name, 'Bola Bolt')
  assert.equal(prone.origin.actionKind, 'passive')
})

test('value hints require an exact explicit label on a valued Condition', () => {
  for (const entry of PATHFINDER_2E_BESTIARY_ENTRIES) {
    for (const mapping of getPathfinder2eBestiaryEffectMappings(entry.original.contentId)) {
      if (!mapping.valueHint) continue
      const definition = getPathfinder2eActiveEffectDefinition(mapping.definitionKey)
      assert.ok(definition)
      assert.equal(definition.kind, 'condition')
      assert.equal(definition.conditionValue?.isValued, true)
      assert.equal(mapping.source.label, `${definition.name} ${mapping.valueHint.value}`)
      assert.equal(mapping.valueHint.source, 'REFERENCE_LABEL')
    }
  }
})

test('Bestiary effect mapping reads are deterministic and cached per contentId', () => {
  for (const entry of PATHFINDER_2E_BESTIARY_ENTRIES) {
    const first = getPathfinder2eBestiaryEffectMappings(entry.original.contentId)
    const second = getPathfinder2eBestiaryEffectMappings(entry.original.contentId)
    assert.equal(first, second)
  }
  assert.deepEqual(getPathfinder2eBestiaryEffectMappings('pf2e:bestiary:missing:test'), [])
})
