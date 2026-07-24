import assert from 'node:assert/strict'
import test from 'node:test'
import { PATHFINDER_2E_BESTIARY_ENTRIES } from './bestiary'
import {
  findPathfinder2eContentEntry,
  getPathfinder2eRoundSummary,
  listPathfinder2eRoundEntries,
} from './catalog'
import {
  PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_COVERAGE,
  PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ID,
  PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_IMPORTS,
  PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_SOURCE,
} from './deliveries/core-remaster-starting-content'
import { PATHFINDER_2E_ITEM_ENTRIES } from './items'
import { PATHFINDER_2E_CONTENT_ROADMAP } from './roadmap'
import { PATHFINDER_2E_SPELL_ENTRIES } from './spells'

test('PF2e content is composed from bestiary, spells and item categories', () => {
  assert.equal(PATHFINDER_2E_BESTIARY_ENTRIES.length, 3)
  assert.equal(PATHFINDER_2E_SPELL_ENTRIES.length, 3)
  assert.equal(PATHFINDER_2E_ITEM_ENTRIES.length, 3)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ENTRIES.length, 9)

  const delivery = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ID,
  )
  assert.ok(delivery)
  assert.equal(delivery.status, 'READY')
  assert.deepEqual(
    new Set([
      ...delivery.frozenEntryIds.bestiary,
      ...delivery.frozenEntryIds.spells,
      ...delivery.frozenEntryIds.items,
    ]),
    new Set(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ENTRIES.map((entry) => entry.original.contentId)),
  )
})

test('PF2e originals and reviewed pt-BR translations remain separate records', () => {
  for (const entry of PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ENTRIES) {
    assert.equal(entry.original.locale, 'en-US')
    assert.equal(entry.translation.locale, 'pt-BR')
    assert.equal(entry.translation.status, 'REVIEWED')
    assert.equal(entry.translation.contentId, entry.original.contentId)
    assert.equal(entry.translation.sourceTranslatableHash, entry.original.translatableHash)
    assert.equal(typeof entry.translation.fields.name, 'string')
    assert.equal(typeof entry.translation.fields.description, 'string')
  }
})

test('PF2e delivery metadata is locked without owning catalog content', () => {
  assert.equal(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_SOURCE.systemVersion, '8.3.0')
  assert.equal(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_SOURCE.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.match(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_SOURCE.inputChecksum, /^[a-f0-9]{64}$/)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_IMPORTS.length, 9)
  assert.ok(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_IMPORTS.every((entry) => entry.status === 'NORMALIZED'))
})

test('PF2e catalog switches locale without mutating original content', () => {
  const contentId = 'pf2e:spell:spells-srd:electric-arc'
  const original = findPathfinder2eContentEntry(contentId, 'en-US')
  const translated = findPathfinder2eContentEntry(contentId, 'pt-BR')

  assert.ok(original)
  assert.ok(translated)
  assert.equal(original.display.name, 'Electric Arc')
  assert.equal(translated.display.name, 'Arco Elétrico')
  assert.equal((original.original as { name: string }).name, 'Electric Arc')
  assert.equal((translated.original as { name: string }).name, 'Electric Arc')
  assert.equal(original.translation, null)
  assert.equal(translated.translation?.status, 'REVIEWED')
})

test('PF2e starting content is ready after translation review', () => {
  assert.equal(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_COVERAGE.ready, true)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_COVERAGE.bestiary.reviewed, 3)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_COVERAGE.spells.reviewed, 3)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_COVERAGE.items.reviewed, 3)

  const summary = getPathfinder2eRoundSummary(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ID)
  assert.ok(summary)
  assert.equal(summary.status, 'READY')
  assert.equal(listPathfinder2eRoundEntries(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ID, 'pt-BR').length, 9)
})
