import assert from 'node:assert/strict'
import test from 'node:test'
import {
  findPathfinder2eContentEntry,
  getPathfinder2eRoundSummary,
  listPathfinder2eRoundEntries,
} from './catalog'
import { PATHFINDER_2E_CONTENT_ROADMAP } from './roadmap'
import {
  PATHFINDER_2E_ROUND_01_COVERAGE,
  PATHFINDER_2E_ROUND_01_ENTRIES,
  PATHFINDER_2E_ROUND_01_ID,
  PATHFINDER_2E_ROUND_01_IMPORT_MANIFEST,
  PATHFINDER_2E_ROUND_01_SOURCE_LOCK,
} from './round-01'

const byDomain = (domain: 'BESTIARY' | 'SPELL' | 'ITEM') =>
  PATHFINDER_2E_ROUND_01_ENTRIES.filter((entry) => entry.original.domain === domain)

test('PF2e round 1 freezes a small coherent batch in all three domains', () => {
  assert.equal(PATHFINDER_2E_ROUND_01_ENTRIES.length, 9)
  assert.equal(byDomain('BESTIARY').length, 3)
  assert.equal(byDomain('SPELL').length, 3)
  assert.equal(byDomain('ITEM').length, 3)

  const round = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find((candidate) => candidate.id === PATHFINDER_2E_ROUND_01_ID)
  assert.ok(round)
  assert.equal(round.status, 'REVIEWING')
  assert.deepEqual(
    new Set([
      ...round.frozenEntryIds.bestiary,
      ...round.frozenEntryIds.spells,
      ...round.frozenEntryIds.items,
    ]),
    new Set(PATHFINDER_2E_ROUND_01_ENTRIES.map((entry) => entry.original.contentId)),
  )
})

test('PF2e round 1 preserves en-US and stores pt-BR as a separate draft overlay', () => {
  for (const entry of PATHFINDER_2E_ROUND_01_ENTRIES) {
    assert.equal(entry.original.locale, 'en-US')
    assert.equal(entry.translation.locale, 'pt-BR')
    assert.equal(entry.translation.status, 'MACHINE_DRAFT')
    assert.equal(entry.translation.contentId, entry.original.contentId)
    assert.equal(entry.translation.sourceTranslatableHash, entry.original.translatableHash)
    assert.equal(typeof entry.translation.fields.name, 'string')
    assert.equal(typeof entry.translation.fields.description, 'string')
  }
})

test('PF2e round 1 source is locked to an exact Foundry PF2e snapshot', () => {
  assert.equal(PATHFINDER_2E_ROUND_01_SOURCE_LOCK.systemVersion, '8.3.0')
  assert.equal(PATHFINDER_2E_ROUND_01_SOURCE_LOCK.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.match(PATHFINDER_2E_ROUND_01_SOURCE_LOCK.inputChecksum, /^[a-f0-9]{64}$/)
  assert.equal(PATHFINDER_2E_ROUND_01_IMPORT_MANIFEST.length, 9)
  assert.ok(PATHFINDER_2E_ROUND_01_IMPORT_MANIFEST.every((entry) => entry.status === 'NORMALIZED'))
})

test('PF2e catalog switches locale without mutating original content', () => {
  const contentId = 'pf2e:spell:spells-srd:electric-arc'
  const original = findPathfinder2eContentEntry(contentId, 'en-US')
  const translated = findPathfinder2eContentEntry(contentId, 'pt-BR')

  assert.ok(original)
  assert.ok(translated)
  assert.equal(original.display.name, 'Electric Arc')
  assert.equal(translated.display.name, 'Arco Elétrico')
  assert.equal(original.original.name, 'Electric Arc')
  assert.equal(translated.original.name, 'Electric Arc')
  assert.equal(original.translation, null)
  assert.equal(translated.translation?.status, 'MACHINE_DRAFT')
})

test('PF2e round 1 remains blocked from publication until translation review', () => {
  assert.equal(PATHFINDER_2E_ROUND_01_COVERAGE.ready, false)
  assert.equal(PATHFINDER_2E_ROUND_01_COVERAGE.bestiary.reviewed, 0)
  assert.equal(PATHFINDER_2E_ROUND_01_COVERAGE.spells.reviewed, 0)
  assert.equal(PATHFINDER_2E_ROUND_01_COVERAGE.items.reviewed, 0)

  const summary = getPathfinder2eRoundSummary(PATHFINDER_2E_ROUND_01_ID)
  assert.ok(summary)
  assert.equal(summary.status, 'REVIEWING')
  assert.equal(listPathfinder2eRoundEntries(PATHFINDER_2E_ROUND_01_ID, 'pt-BR').length, 9)
})
