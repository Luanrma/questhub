import assert from 'node:assert/strict'
import test from 'node:test'
import { PATHFINDER_2E_BESTIARY_ENTRIES } from './bestiary'
import {
  findPathfinder2eContentEntry,
  getPathfinder2eRoundSummary,
  listPathfinder2eRoundEntries,
} from './catalog'
import {
  PATHFINDER_2E_CONTENT_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_COVERAGE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ID,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_IMPORTS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_SOURCE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_COVERAGE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_ID,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_IMPORTS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_SOURCE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_COVERAGE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_ID,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_IMPORTS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_SOURCE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_COVERAGE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ID,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_IMPORTS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_SOURCE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_COVERAGE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_ID,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_IMPORTS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_SOURCE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_COVERAGE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ID,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_IMPORTS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_SOURCE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_COVERAGE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_ID,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_IMPORTS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_SOURCE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_COVERAGE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_ID,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_IMPORTS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_SOURCE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_COVERAGE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_ID,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_IMPORTS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_SOURCE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_IMPORTS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_SOURCE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_IMPORTS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_SOURCE,
  PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_COVERAGE,
  PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_ENTRIES,
  PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_IMPORTS,
  PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_SOURCE,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_COVERAGE,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_ENTRIES,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_IMPORTS,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_SOURCE,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_COVERAGE,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_ENTRIES,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_IMPORTS,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_SOURCE,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_COVERAGE,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_ENTRIES,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_IMPORTS,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_SOURCE,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_COVERAGE,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_ENTRIES,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_IMPORTS,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_SOURCE,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_COVERAGE,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_ENTRIES,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_IMPORTS,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_SOURCE,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_COVERAGE,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_ENTRIES,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_IMPORTS,
  PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_SOURCE,
  PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_COVERAGE,
  PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_ENTRIES,
  PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_IMPORTS,
  PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_SOURCE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_COVERAGE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_IMPORTS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_SOURCE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_COVERAGE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_IMPORTS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_SOURCE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_COVERAGE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_IMPORTS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_SOURCE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_COVERAGE,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_IMPORTS,
  PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_SOURCE,
  PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_COVERAGE,
  PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_ENTRIES,
  PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_IMPORTS,
  PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_SOURCE,
  PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_COVERAGE,
  PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_IMPORTS,
  PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_SOURCE,
  PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_COVERAGE,
  PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_ENTRIES,
  PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_IMPORTS,
  PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_SOURCE,
  PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_COVERAGE,
  PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_ENTRIES,
  PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_IMPORTS,
  PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_SOURCE,
  PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_COVERAGE,
  PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ID,
  PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_IMPORTS,
  PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_SOURCE,
  PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_COVERAGE,
  PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ID,
  PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_IMPORTS,
  PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_SOURCE,
} from './deliveries'
import { PATHFINDER_2E_ITEM_ENTRIES } from './items'
import { PATHFINDER_2E_CONTENT_ROADMAP } from './roadmap'
import { PATHFINDER_2E_SPELL_ENTRIES } from './spells'

test('PF2e content composes two pilots and thirty exhaustive deliveries', () => {
  assert.equal(PATHFINDER_2E_BESTIARY_ENTRIES.length, 7_517)
  assert.equal(PATHFINDER_2E_SPELL_ENTRIES.length, 1_802)
  assert.equal(PATHFINDER_2E_ITEM_ENTRIES.length, 5_698)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ENTRIES.length, 9)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ENTRIES.length, 9)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES.length, 120)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_ENTRIES.length, 240)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_ENTRIES.length, 205)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ENTRIES.length, 240)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_ENTRIES.length, 240)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ENTRIES.length, 159)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_ENTRIES.length, 218)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_ENTRIES.length, 218)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_ENTRIES.length, 204)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_ENTRIES.length, 201)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_ENTRIES.length, 132)
  assert.equal(PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_ENTRIES.length, 132)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_ENTRIES.length, 307)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_ENTRIES.length, 513)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_ENTRIES.length, 458)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_ENTRIES.length, 784)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_ENTRIES.length, 820)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_ENTRIES.length, 820)
  assert.equal(PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_ENTRIES.length, 1_000)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_ENTRIES.length, 760)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_ENTRIES.length, 661)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_ENTRIES.length, 1_000)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_ENTRIES.length, 803)
  assert.equal(PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_ENTRIES.length, 869)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_ENTRIES.length, 658)
  assert.equal(PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_ENTRIES.length, 447)
  assert.equal(PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_ENTRIES.length, 2_070)
  assert.equal(PATHFINDER_2E_CONTENT_ENTRIES.length, 15_017)

  const firstDelivery = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ID,
  )
  const secondDelivery = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ID,
  )
  const exhaustiveDelivery = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ID,
  )
  const doubledExhaustiveDelivery = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_ID,
  )
  const thirdExhaustiveDelivery = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_ID,
  )
  const fourthExhaustiveDelivery = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ID,
  )
  const fifthExhaustiveDelivery = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_ID,
  )
  const sixthExhaustiveDelivery = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ID,
  )
  const seventhExhaustiveDelivery = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_ID,
  )
  const eleventhExhaustiveDelivery = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_ID,
  )
  const twelfthExhaustiveDelivery = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_ID,
  )
  assert.ok(firstDelivery)
  assert.ok(secondDelivery)
  assert.ok(exhaustiveDelivery)
  assert.ok(doubledExhaustiveDelivery)
  assert.ok(thirdExhaustiveDelivery)
  assert.ok(fourthExhaustiveDelivery)
  assert.ok(fifthExhaustiveDelivery)
  assert.ok(sixthExhaustiveDelivery)
  assert.ok(seventhExhaustiveDelivery)
  assert.ok(eleventhExhaustiveDelivery)
  assert.ok(twelfthExhaustiveDelivery)
  assert.equal(firstDelivery.status, 'READY')
  assert.equal(secondDelivery.status, 'REVIEWING')
  assert.equal(exhaustiveDelivery.status, 'REVIEWING')
  assert.equal(doubledExhaustiveDelivery.status, 'REVIEWING')
  assert.equal(thirdExhaustiveDelivery.status, 'REVIEWING')
  assert.equal(fourthExhaustiveDelivery.status, 'REVIEWING')
  assert.equal(fifthExhaustiveDelivery.status, 'REVIEWING')
  assert.equal(sixthExhaustiveDelivery.status, 'REVIEWING')
  assert.equal(seventhExhaustiveDelivery.status, 'REVIEWING')
  assert.equal(eleventhExhaustiveDelivery.status, 'REVIEWING')
  assert.equal(twelfthExhaustiveDelivery.status, 'REVIEWING')
  assert.deepEqual(
    new Set([
      ...firstDelivery.frozenEntryIds.bestiary,
      ...firstDelivery.frozenEntryIds.spells,
      ...firstDelivery.frozenEntryIds.items,
    ]),
    new Set(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ENTRIES.map((entry) => entry.original.contentId)),
  )
  assert.deepEqual(
    new Set([
      ...secondDelivery.frozenEntryIds.bestiary,
      ...secondDelivery.frozenEntryIds.spells,
      ...secondDelivery.frozenEntryIds.items,
    ]),
    new Set(PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ENTRIES.map((entry) => entry.original.contentId)),
  )
  assert.deepEqual(
    new Set([
      ...exhaustiveDelivery.frozenEntryIds.bestiary,
      ...exhaustiveDelivery.frozenEntryIds.spells,
      ...exhaustiveDelivery.frozenEntryIds.items,
    ]),
    new Set(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES.map((entry) => entry.original.contentId)),
  )
  assert.deepEqual(
    new Set([
      ...doubledExhaustiveDelivery.frozenEntryIds.bestiary,
      ...doubledExhaustiveDelivery.frozenEntryIds.spells,
      ...doubledExhaustiveDelivery.frozenEntryIds.items,
    ]),
    new Set(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_ENTRIES.map((entry) => entry.original.contentId)),
  )
  assert.deepEqual(
    new Set([
      ...thirdExhaustiveDelivery.frozenEntryIds.bestiary,
      ...thirdExhaustiveDelivery.frozenEntryIds.spells,
      ...thirdExhaustiveDelivery.frozenEntryIds.items,
    ]),
    new Set(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_ENTRIES.map((entry) => entry.original.contentId)),
  )
  assert.deepEqual(
    new Set([
      ...fourthExhaustiveDelivery.frozenEntryIds.bestiary,
      ...fourthExhaustiveDelivery.frozenEntryIds.spells,
      ...fourthExhaustiveDelivery.frozenEntryIds.items,
    ]),
    new Set(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ENTRIES.map((entry) => entry.original.contentId)),
  )
  assert.deepEqual(
    new Set([
      ...fifthExhaustiveDelivery.frozenEntryIds.bestiary,
      ...fifthExhaustiveDelivery.frozenEntryIds.spells,
      ...fifthExhaustiveDelivery.frozenEntryIds.items,
    ]),
    new Set(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_ENTRIES.map((entry) => entry.original.contentId)),
  )
  assert.deepEqual(
    new Set([
      ...sixthExhaustiveDelivery.frozenEntryIds.bestiary,
      ...sixthExhaustiveDelivery.frozenEntryIds.spells,
      ...sixthExhaustiveDelivery.frozenEntryIds.items,
    ]),
    new Set(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ENTRIES.map((entry) => entry.original.contentId)),
  )
  assert.deepEqual(
    new Set([
      ...seventhExhaustiveDelivery.frozenEntryIds.bestiary,
      ...seventhExhaustiveDelivery.frozenEntryIds.spells,
      ...seventhExhaustiveDelivery.frozenEntryIds.items,
    ]),
    new Set(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_ENTRIES.map((entry) => entry.original.contentId)),
  )
  assert.deepEqual(
    new Set([
      ...eleventhExhaustiveDelivery.frozenEntryIds.bestiary,
      ...eleventhExhaustiveDelivery.frozenEntryIds.spells,
      ...eleventhExhaustiveDelivery.frozenEntryIds.items,
    ]),
    new Set(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_ENTRIES.map((entry) => entry.original.contentId)),
  )
  assert.deepEqual(
    new Set([
      ...twelfthExhaustiveDelivery.frozenEntryIds.bestiary,
      ...twelfthExhaustiveDelivery.frozenEntryIds.spells,
      ...twelfthExhaustiveDelivery.frozenEntryIds.items,
    ]),
    new Set(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_ENTRIES.map((entry) => entry.original.contentId)),
  )
})

test('PF2e originals and pt-BR translations remain separate records', () => {
  for (const entry of PATHFINDER_2E_CONTENT_ENTRIES) {
    assert.equal(entry.original.locale, 'en-US')
    assert.equal(entry.translation.locale, 'pt-BR')
    assert.equal(entry.translation.contentId, entry.original.contentId)
    assert.equal(entry.translation.sourceTranslatableHash, entry.original.translatableHash)
    if (entry.translation.status === 'NOT_STARTED') {
      assert.deepEqual(entry.translation.fields, {})
    } else {
      assert.equal(typeof entry.translation.fields.name, 'string')
      assert.equal(typeof entry.translation.fields.description, 'string')
    }
  }
})

test('PF2e source metadata stays provider-neutral and assets stay inside QuestHub', () => {
  assert.equal('provider' in PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_SOURCE, false)
  assert.equal('provider' in PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_SOURCE, false)
  assert.equal('provider' in PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_SOURCE, false)
  assert.equal('provider' in PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_SOURCE, false)
  assert.equal('provider' in PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_SOURCE, false)
  assert.equal('provider' in PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_SOURCE, false)
  assert.equal('provider' in PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_SOURCE, false)
  assert.equal('provider' in PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_SOURCE, false)
  assert.equal('provider' in PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_SOURCE, false)

  for (const entry of PATHFINDER_2E_CONTENT_ENTRIES) {
    assert.equal('provider' in entry.original.source, false)
    assert.equal(
      entry.original.image === undefined
        || entry.original.image.path.startsWith('/api/game-systems/pathfinder-2e/icons/'),
      true,
    )
  }
})

test('PF2e delivery metadata is locked without owning catalog content', () => {
  assert.equal(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_SOURCE.systemVersion, '8.3.0')
  assert.equal(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_SOURCE.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.match(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_SOURCE.inputChecksum, /^[a-f0-9]{64}$/)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_IMPORTS.length, 9)
  assert.ok(PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_IMPORTS.every((entry) => entry.status === 'NORMALIZED'))
  assert.equal(PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_SOURCE.systemVersion, '8.3.0')
  assert.equal(PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_SOURCE.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.match(PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_SOURCE.inputChecksum, /^[a-f0-9]{64}$/)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_IMPORTS.length, 9)
  assert.ok(PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_IMPORTS.every((entry) => entry.status === 'NORMALIZED'))
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_SOURCE.systemVersion, '8.3.0')
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_SOURCE.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.match(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_SOURCE.inputChecksum, /^[a-f0-9]{64}$/)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_IMPORTS.length, 120)
  assert.ok(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_IMPORTS.every((entry) => entry.status === 'NORMALIZED'))
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_SOURCE.systemVersion, '8.3.0')
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_SOURCE.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.match(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_SOURCE.inputChecksum, /^[a-f0-9]{64}$/)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_IMPORTS.length, 240)
  assert.ok(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_IMPORTS.every((entry) => entry.status === 'NORMALIZED'))
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_SOURCE.systemVersion, '8.3.0')
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_SOURCE.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.match(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_SOURCE.inputChecksum, /^[a-f0-9]{64}$/)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_IMPORTS.length, 205)
  assert.ok(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_IMPORTS.every((entry) => entry.status === 'NORMALIZED'))
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_SOURCE.systemVersion, '8.3.0')
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_SOURCE.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.match(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_SOURCE.inputChecksum, /^[a-f0-9]{64}$/)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_IMPORTS.length, 240)
  assert.ok(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_IMPORTS.every((entry) => entry.status === 'NORMALIZED'))
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_SOURCE.systemVersion, '8.3.0')
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_SOURCE.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.match(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_SOURCE.inputChecksum, /^[a-f0-9]{64}$/)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_IMPORTS.length, 240)
  assert.ok(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_IMPORTS.every((entry) => entry.status === 'NORMALIZED'))
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_SOURCE.systemVersion, '8.3.0')
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_SOURCE.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.match(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_SOURCE.inputChecksum, /^[a-f0-9]{64}$/)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_IMPORTS.length, 159)
  assert.ok(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_IMPORTS.every((entry) => entry.status === 'NORMALIZED'))
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_SOURCE.systemVersion, '8.3.0')
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_SOURCE.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.match(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_SOURCE.inputChecksum, /^[a-f0-9]{64}$/)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_SOURCE.importerVersion, 6)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_IMPORTS.length, 218)
  assert.ok(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_IMPORTS.every((entry) => entry.status === 'NORMALIZED'))
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_SOURCE.systemVersion, '8.3.0')
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_SOURCE.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.match(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_SOURCE.inputChecksum, /^[a-f0-9]{64}$/)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_SOURCE.importerVersion, 7)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_IMPORTS.length, 218)
  assert.ok(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_IMPORTS.every((entry) => entry.status === 'NORMALIZED'))
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_COVERAGE.bestiary.translated, 78)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_SOURCE.systemVersion, '8.3.0')
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_SOURCE.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_SOURCE.inputChecksum,
    'cf64c913ddaee558a59459d7eba1336aa8dab738a1d17ab8fb98402f8c3b4c8d',
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_SOURCE.importerVersion, 7)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_IMPORTS.length, 204)
  assert.ok(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_IMPORTS.every((entry) => entry.status === 'NORMALIZED'))
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_COVERAGE.bestiary.translated, 100)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_COVERAGE.spells.translated, 4)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_COVERAGE.items.translated, 100)
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_SOURCE.inputChecksum,
    '6e1355fbb31e3c637ef280746c2925f849a6cf8a4e982ae0956b3ffb34db1042',
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_IMPORTS.length, 201)
  assert.ok(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_IMPORTS.every((entry) => entry.status === 'NORMALIZED'))
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_SOURCE.inputChecksum,
    'd70ceddc4e153547917ada8b5ea3112a7d85cdf95d8731cac8923b34792be4ef',
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_IMPORTS.length, 132)
  assert.ok(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_IMPORTS.every((entry) => entry.status === 'NORMALIZED'))
  assert.equal(
    PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_SOURCE.inputChecksum,
    '2c6b2ca517f564ce3e3c6960d027f0218de378b9e85eb8a778557f905e7bc018',
  )
  assert.equal(PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_SOURCE.importerVersion, 7)
  assert.equal(PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_IMPORTS.length, 132)
  assert.ok(PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_IMPORTS.every((entry) => entry.status === 'NORMALIZED'))
  assert.equal(PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_COVERAGE.bestiary.translated, 81)
  assert.equal(PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_COVERAGE.spells.translated, 40)
  assert.equal(PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_COVERAGE.items.translated, 11)
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

test('PF2e low-level content waits for human translation review', () => {
  assert.equal(PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_COVERAGE.ready, false)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_COVERAGE.bestiary.translated, 3)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_COVERAGE.spells.reviewed, 0)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_COVERAGE.items.reviewed, 0)
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ENTRIES.every(
      (entry) => entry.translation.status === 'MACHINE_DRAFT',
    ),
    true,
  )

  const summary = getPathfinder2eRoundSummary(PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ID)
  assert.ok(summary)
  assert.equal(summary.status, 'REVIEWING')
  assert.equal(listPathfinder2eRoundEntries(PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ID, 'pt-BR').length, 9)
})

test('PF2e low-level representatives stay inside Monster Core and Player Core bands', () => {
  const bestiary = PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )

  assert.equal(
    bestiary.every((entry) => (
      entry.original.source.publicationTitle === 'Pathfinder Monster Core'
      && [3, 4].includes((entry.original.data as { level: number }).level)
    )),
    true,
  )
  assert.equal(
    spells.every((entry) => (
      entry.original.source.publicationTitle === 'Pathfinder Player Core'
      && (entry.original.data as { rank: number }).rank === 2
    )),
    true,
  )
  assert.equal(
    items.every((entry) => {
      const level = (entry.original.data as { level: number }).level
      return entry.original.source.publicationTitle === 'Pathfinder Player Core'
        && level >= 2
        && level <= 4
    }),
    true,
  )
})

test('PF2e exhaustive delivery starts at the lowest pending level and Rank', () => {
  const bestiary = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )

  assert.deepEqual(
    Object.fromEntries(
      [-1, 0, 1].map((level) => [
        level,
        bestiary.filter((entry) => (entry.original.data as { level: number }).level === level).length,
      ]),
    ),
    { '-1': 16, 0: 12, 1: 22 },
  )
  assert.equal(spells.length, 20)
  assert.equal(spells.every((entry) => (entry.original.data as { rank: number }).rank === 1), true)
  assert.equal(items.length, 50)
  assert.equal(items.every((entry) => (entry.original.data as { level: number }).level === 0), true)
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES.every(
      (entry) => entry.translation.status === 'MACHINE_DRAFT',
    ),
    true,
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_COVERAGE.ready, false)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_COVERAGE.bestiary.normalized, 50)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_COVERAGE.spells.normalized, 20)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_COVERAGE.items.normalized, 50)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_COVERAGE.bestiary.translated, 50)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_COVERAGE.spells.translated, 20)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_COVERAGE.items.translated, 50)

  const kitImport = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_IMPORTS.find(
    (entry) => entry.contentId === 'pf2e:item:equipment-srd:adventurers-pack',
  )
  assert.deepEqual(kitImport?.normalizationWarnings, ['missing-source-level-defaulted-to-zero'])

  const gnomeBard = bestiary.find(
    (entry) => entry.original.contentId === 'pf2e:bestiary:pathfinder-monster-core:gnome-bard',
  )
  const spellcasting = (
    gnomeBard?.original.data as {
      spellcasting?: Array<{ tradition: string; saveDc: number | null; spells: unknown[] }>
    }
  ).spellcasting
  assert.equal(spellcasting?.[0]?.tradition, 'occult')
  assert.equal(spellcasting?.[0]?.saveDc, 19)
  assert.equal(spellcasting?.[0]?.spells.length, 8)

  const hideArmor = items.find(
    (entry) => entry.original.contentId === 'pf2e:item:equipment-srd:hide-armor',
  )
  assert.equal(
    (hideArmor?.original.data as { armor?: { speedPenaltyFeet: number } }).armor?.speedPenaltyFeet,
    -5,
  )
})

test('PF2e exhaustive translations cover every non-empty primary field', () => {
  for (const entry of PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES) {
    const original = entry.original.data as { name: string; description: string }
    assert.equal(entry.translation.status, 'MACHINE_DRAFT')
    assert.equal(typeof entry.translation.fields.name, 'string')
    assert.notEqual(entry.translation.fields.name, '')

    if (original.description) {
      assert.equal(typeof entry.translation.fields.description, 'string')
      assert.notEqual(entry.translation.fields.description, '')
      assert.notEqual(entry.translation.fields.description, original.description)
    }
  }
})

test('PF2e exhaustive icons use only exact local source paths', () => {
  const byDomain = (domain: 'BESTIARY' | 'SPELL' | 'ITEM') => (
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES.filter(
      (entry) => entry.original.domain === domain,
    )
  )

  assert.equal(byDomain('BESTIARY').filter((entry) => entry.original.image).length, 50)
  assert.equal(byDomain('SPELL').filter((entry) => entry.original.image).length, 14)
  assert.equal(byDomain('ITEM').filter((entry) => entry.original.image).length, 16)

  const daze = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES.find(
    (entry) => entry.original.contentId === 'pf2e:spell:spells-srd:daze',
  )
  const crowbar = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES.find(
    (entry) => entry.original.contentId === 'pf2e:item:equipment-srd:crowbar',
  )
  const telekineticProjectile = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES.find(
    (entry) => entry.original.contentId === 'pf2e:spell:spells-srd:telekinetic-projectile',
  )

  assert.equal(daze?.original.image?.path, '/api/game-systems/pathfinder-2e/icons/spells/daze.webp')
  assert.equal(
    crowbar?.original.image?.path,
    '/api/game-systems/pathfinder-2e/icons/equipment/adventuring-gear/crowbar.webp',
  )
  assert.equal(telekineticProjectile?.original.image, undefined)
})

test('PF2e doubled exhaustive delivery continues every cursor without duplicates', () => {
  const bestiary = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )

  assert.deepEqual(
    Object.fromEntries(
      [1, 2, 3].map((level) => [
        level,
        bestiary.filter((entry) => (entry.original.data as { level: number }).level === level).length,
      ]),
    ),
    { 1: 31, 2: 60, 3: 9 },
  )
  assert.equal(spells.length, 40)
  assert.equal(spells.every((entry) => (entry.original.data as { rank: number }).rank === 1), true)
  assert.equal(items.length, 100)
  assert.equal(items.every((entry) => (entry.original.data as { level: number }).level === 0), true)

  const firstRoundIds = new Set(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES.map((entry) => entry.original.contentId),
  )
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_ENTRIES.every(
      (entry) => !firstRoundIds.has(entry.original.contentId),
    ),
    true,
  )
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_ENTRIES.every(
      (entry) => entry.translation.status === 'MACHINE_DRAFT',
    ),
    true,
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_COVERAGE.ready, false)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_COVERAGE.bestiary.normalized, 100)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_COVERAGE.spells.normalized, 40)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_COVERAGE.items.normalized, 100)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_COVERAGE.bestiary.translated, 100)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_COVERAGE.spells.translated, 40)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_COVERAGE.items.translated, 100)
})

test('PF2e doubled exhaustive translations cover every non-empty primary field', () => {
  for (const entry of PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_ENTRIES) {
    const original = entry.original.data as { name: string; description: string }
    assert.equal(entry.translation.status, 'MACHINE_DRAFT')
    assert.equal(typeof entry.translation.fields.name, 'string')
    assert.notEqual(entry.translation.fields.name, '')

    if (original.description) {
      assert.equal(typeof entry.translation.fields.description, 'string')
      assert.notEqual(entry.translation.fields.description, '')
      assert.notEqual(entry.translation.fields.description, original.description)
    }
  }
})

test('PF2e doubled exhaustive icons use only exact local source paths', () => {
  const byDomain = (domain: 'BESTIARY' | 'SPELL' | 'ITEM') => (
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_ENTRIES.filter(
      (entry) => entry.original.domain === domain,
    )
  )

  assert.equal(byDomain('BESTIARY').filter((entry) => entry.original.image).length, 100)
  assert.equal(byDomain('SPELL').filter((entry) => entry.original.image).length, 21)
  assert.equal(byDomain('ITEM').filter((entry) => entry.original.image).length, 45)

  const mending = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_ENTRIES.find(
    (entry) => entry.original.contentId === 'pf2e:spell:spells-srd:mending',
  )
  const trident = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_ENTRIES.find(
    (entry) => entry.original.contentId === 'pf2e:item:equipment-srd:trident',
  )

  assert.equal(mending?.original.image?.path, '/api/game-systems/pathfinder-2e/icons/spells/mending.webp')
  assert.equal(
    trident?.original.image?.path,
    '/api/game-systems/pathfinder-2e/icons/equipment/weapons/trident.webp',
  )
})

test('PF2e third exhaustive delivery continues cursors and exhausts Player Core items', () => {
  const bestiary = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )

  assert.deepEqual(
    Object.fromEntries(
      [3, 4, 5].map((level) => [
        level,
        bestiary.filter((entry) => (entry.original.data as { level: number }).level === level).length,
      ]),
    ),
    { 3: 35, 4: 40, 5: 25 },
  )
  assert.deepEqual(
    Object.fromEntries(
      [1, 2].map((rank) => [
        rank,
        spells.filter((entry) => (entry.original.data as { rank: number }).rank === rank).length,
      ]),
    ),
    { 1: 20, 2: 20 },
  )
  assert.deepEqual(
    Object.fromEntries(
      [0, 1, 2, 3, 5, 7, 9, 17].map((level) => [
        level,
        items.filter((entry) => (entry.original.data as { level: number }).level === level).length,
      ]),
    ),
    { 0: 25, 1: 7, 2: 3, 3: 24, 5: 1, 7: 1, 9: 2, 17: 2 },
  )

  const previousIds = new Set([
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES,
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_ENTRIES,
  ].map((entry) => entry.original.contentId))
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_ENTRIES.every(
      (entry) => !previousIds.has(entry.original.contentId),
    ),
    true,
  )
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_ENTRIES.every(
      (entry) => entry.translation.status === 'MACHINE_DRAFT',
    ),
    true,
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_COVERAGE.ready, false)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_COVERAGE.bestiary.normalized, 100)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_COVERAGE.spells.normalized, 40)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_COVERAGE.items.normalized, 65)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_COVERAGE.bestiary.translated, 100)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_COVERAGE.spells.translated, 40)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_COVERAGE.items.translated, 65)
})

test('PF2e third exhaustive translations cover every non-empty primary field', () => {
  for (const entry of PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_ENTRIES) {
    const original = entry.original.data as { name: string; description: string }
    assert.equal(entry.translation.status, 'MACHINE_DRAFT')
    assert.equal(typeof entry.translation.fields.name, 'string')
    assert.notEqual(entry.translation.fields.name, '')

    if (original.description) {
      assert.equal(typeof entry.translation.fields.description, 'string')
      assert.notEqual(entry.translation.fields.description, '')
      assert.notEqual(entry.translation.fields.description, original.description)
    }
  }
})

test('PF2e third exhaustive icons use only exact local source paths', () => {
  const byDomain = (domain: 'BESTIARY' | 'SPELL' | 'ITEM') => (
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_ENTRIES.filter(
      (entry) => entry.original.domain === domain,
    )
  )

  assert.equal(byDomain('BESTIARY').filter((entry) => entry.original.image).length, 100)
  assert.equal(byDomain('SPELL').filter((entry) => entry.original.image).length, 21)
  assert.equal(byDomain('ITEM').filter((entry) => entry.original.image).length, 25)

  const charm = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_ENTRIES.find(
    (entry) => entry.original.contentId === 'pf2e:spell:spells-srd:charm',
  )
  const sawtoothSaber = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_ENTRIES.find(
    (entry) => entry.original.contentId === 'pf2e:item:equipment-srd:sawtooth-saber',
  )

  assert.equal(charm?.original.image?.path, '/api/game-systems/pathfinder-2e/icons/spells/charm.webp')
  assert.equal(
    sawtoothSaber?.original.image?.path,
    '/api/game-systems/pathfinder-2e/icons/equipment/weapons/sawtooth-saber.webp',
  )
})

test('PF2e fourth exhaustive delivery advances only the exhausted item publication', () => {
  const bestiary = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )

  assert.deepEqual(
    Object.fromEntries(
      [5, 6, 7, 8, 9].map((level) => [
        level,
        bestiary.filter((entry) => (entry.original.data as { level: number }).level === level).length,
      ]),
    ),
    { 5: 5, 6: 28, 7: 26, 8: 28, 9: 13 },
  )
  assert.deepEqual(
    Object.fromEntries(
      [2, 3].map((rank) => [
        rank,
        spells.filter((entry) => (entry.original.data as { rank: number }).rank === rank).length,
      ]),
    ),
    { 2: 32, 3: 8 },
  )
  assert.deepEqual(
    Object.fromEntries(
      [0, 1, 2, 3, 4, 5].map((level) => [
        level,
        items.filter((entry) => (entry.original.data as { level: number }).level === level).length,
      ]),
    ),
    { 0: 16, 1: 32, 2: 11, 3: 21, 4: 14, 5: 6 },
  )
  assert.equal(
    bestiary.every((entry) => entry.original.source.publicationTitle === 'Pathfinder Monster Core'),
    true,
  )
  assert.equal(
    spells.every((entry) => entry.original.source.publicationTitle === 'Pathfinder Player Core'),
    true,
  )
  assert.equal(
    items.every((entry) => entry.original.source.publicationTitle === 'Pathfinder Player Core 2'),
    true,
  )

  const previousIds = new Set([
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES,
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_ENTRIES,
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_ENTRIES,
  ].map((entry) => entry.original.contentId))
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ENTRIES.every(
      (entry) => !previousIds.has(entry.original.contentId),
    ),
    true,
  )
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ENTRIES.every(
      (entry) => entry.translation.status === 'MACHINE_DRAFT',
    ),
    true,
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_COVERAGE.ready, false)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_COVERAGE.bestiary.translated, 100)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_COVERAGE.spells.translated, 40)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_COVERAGE.items.translated, 100)
})

test('PF2e fourth exhaustive translations cover every non-empty primary field', () => {
  for (const entry of PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ENTRIES) {
    const original = entry.original.data as { name: string; description: string }
    assert.equal(entry.translation.status, 'MACHINE_DRAFT')
    assert.equal(typeof entry.translation.fields.name, 'string')
    assert.notEqual(entry.translation.fields.name, '')

    if (original.description) {
      assert.equal(typeof entry.translation.fields.description, 'string')
      assert.notEqual(entry.translation.fields.description, '')
      assert.notEqual(entry.translation.fields.description, original.description)
    }
  }
})

test('PF2e fourth exhaustive icons use only exact local source paths', () => {
  const byDomain = (domain: 'BESTIARY' | 'SPELL' | 'ITEM') => (
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ENTRIES.filter(
      (entry) => entry.original.domain === domain,
    )
  )

  assert.equal(byDomain('BESTIARY').filter((entry) => entry.original.image).length, 100)
  assert.equal(byDomain('SPELL').filter((entry) => entry.original.image).length, 17)
  assert.equal(byDomain('ITEM').filter((entry) => entry.original.image).length, 66)

  const clearMind = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ENTRIES.find(
    (entry) => entry.original.contentId === 'pf2e:spell:spells-srd:clear-mind',
  )
  const tenguGaleBlade = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ENTRIES.find(
    (entry) => entry.original.contentId === 'pf2e:item:equipment-srd:tengu-gale-blade',
  )

  assert.equal(
    clearMind?.original.image?.path,
    '/api/game-systems/pathfinder-2e/icons/spells/detect-alignment.webp',
  )
  assert.equal(
    tenguGaleBlade?.original.image?.path,
    '/api/game-systems/pathfinder-2e/icons/equipment/weapons/tengu-gale-blade.webp',
  )
})

test('PF2e fifth exhaustive delivery continues all three independent cursors', () => {
  const bestiary = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )

  assert.deepEqual(
    Object.fromEntries(
      [9, 10, 11, 12, 13, 14, 15, 16].map((level) => [
        level,
        bestiary.filter((entry) => (entry.original.data as { level: number }).level === level).length,
      ]),
    ),
    { 9: 10, 10: 21, 11: 15, 12: 16, 13: 10, 14: 11, 15: 9, 16: 8 },
  )
  assert.deepEqual(
    Object.fromEntries(
      [3, 4].map((rank) => [
        rank,
        spells.filter((entry) => (entry.original.data as { rank: number }).rank === rank).length,
      ]),
    ),
    { 3: 26, 4: 14 },
  )
  assert.deepEqual(
    Object.fromEntries(
      [5, 6, 7, 8, 9, 10, 11, 12].map((level) => [
        level,
        items.filter((entry) => (entry.original.data as { level: number }).level === level).length,
      ]),
    ),
    { 5: 5, 6: 14, 7: 10, 8: 13, 9: 8, 10: 13, 11: 19, 12: 18 },
  )
  assert.equal(
    bestiary.every((entry) => entry.original.source.publicationTitle === 'Pathfinder Monster Core'),
    true,
  )
  assert.equal(
    spells.every((entry) => entry.original.source.publicationTitle === 'Pathfinder Player Core'),
    true,
  )
  assert.equal(
    items.every((entry) => entry.original.source.publicationTitle === 'Pathfinder Player Core 2'),
    true,
  )

  const previousIds = new Set([
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES,
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_ENTRIES,
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_ENTRIES,
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ENTRIES,
  ].map((entry) => entry.original.contentId))
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_ENTRIES.every(
      (entry) => !previousIds.has(entry.original.contentId),
    ),
    true,
  )
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_ENTRIES.every(
      (entry) => entry.translation.status === 'MACHINE_DRAFT',
    ),
    true,
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_COVERAGE.ready, false)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_COVERAGE.bestiary.translated, 100)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_COVERAGE.spells.translated, 40)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_COVERAGE.items.translated, 100)
})

test('PF2e fifth exhaustive translations cover every non-empty primary field', () => {
  for (const entry of PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_ENTRIES) {
    const original = entry.original.data as { name: string; description: string }
    assert.equal(entry.translation.status, 'MACHINE_DRAFT')
    assert.equal(typeof entry.translation.fields.name, 'string')
    assert.notEqual(entry.translation.fields.name, '')

    if (original.description) {
      assert.equal(typeof entry.translation.fields.description, 'string')
      assert.notEqual(entry.translation.fields.description, '')
      assert.notEqual(entry.translation.fields.description, original.description)
    }
  }
})

test('PF2e fifth exhaustive icons use only exact local source paths', () => {
  const byDomain = (domain: 'BESTIARY' | 'SPELL' | 'ITEM') => (
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_ENTRIES.filter(
      (entry) => entry.original.domain === domain,
    )
  )

  assert.equal(byDomain('BESTIARY').filter((entry) => entry.original.image).length, 100)
  assert.equal(byDomain('SPELL').filter((entry) => entry.original.image).length, 14)
  assert.equal(byDomain('ITEM').filter((entry) => entry.original.image).length, 60)

  const bindUndead = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_ENTRIES.find(
    (entry) => entry.original.contentId === 'pf2e:spell:spells-srd:bind-undead',
  )
  const potionOfDisguise = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_ENTRIES.find(
    (entry) => entry.original.contentId === 'pf2e:item:equipment-srd:potion-of-disguise-lesser',
  )

  assert.equal(
    bindUndead?.original.image?.path,
    '/api/game-systems/pathfinder-2e/icons/spells/bind-undead.webp',
  )
  assert.equal(
    potionOfDisguise?.original.image?.path,
    '/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-disguise.webp',
  )
})

test('PF2e sixth exhaustive delivery exhausts two publications without mixing the next book', () => {
  const bestiary = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )

  assert.deepEqual(
    Object.fromEntries(
      [16, 17, 18, 19, 20, 21, 25].map((level) => [
        level,
        bestiary.filter((entry) => (entry.original.data as { level: number }).level === level).length,
      ]),
    ),
    { 16: 1, 17: 9, 18: 9, 19: 6, 20: 8, 21: 2, 25: 1 },
  )
  assert.deepEqual(
    Object.fromEntries(
      [4, 5].map((rank) => [
        rank,
        spells.filter((entry) => (entry.original.data as { rank: number }).rank === rank).length,
      ]),
    ),
    { 4: 19, 5: 21 },
  )
  assert.deepEqual(
    Object.fromEntries(
      [12, 13, 14, 15, 16, 17, 18, 19, 20].map((level) => [
        level,
        items.filter((entry) => (entry.original.data as { level: number }).level === level).length,
      ]),
    ),
    { 12: 4, 13: 6, 14: 8, 15: 3, 16: 15, 17: 17, 18: 16, 19: 4, 20: 10 },
  )
  assert.equal(bestiary.length, 36)
  assert.equal(spells.length, 40)
  assert.equal(items.length, 83)
  const banshee = bestiary.find(
    (entry) => entry.original.contentId === 'pf2e:bestiary:pathfinder-monster-core:banshee',
  )
  assert.equal((banshee?.original.data as { speedFeet?: number } | undefined)?.speedFeet, 60)
  assert.equal(
    bestiary.every((entry) => entry.original.source.publicationTitle === 'Pathfinder Monster Core'),
    true,
  )
  assert.equal(
    spells.every((entry) => entry.original.source.publicationTitle === 'Pathfinder Player Core'),
    true,
  )
  assert.equal(
    items.every((entry) => entry.original.source.publicationTitle === 'Pathfinder Player Core 2'),
    true,
  )

  const previousIds = new Set([
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES,
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_ENTRIES,
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_ENTRIES,
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ENTRIES,
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_ENTRIES,
  ].map((entry) => entry.original.contentId))
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ENTRIES.every(
      (entry) => !previousIds.has(entry.original.contentId),
    ),
    true,
  )
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ENTRIES.every(
      (entry) => entry.translation.status === 'MACHINE_DRAFT',
    ),
    true,
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_COVERAGE.ready, false)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_COVERAGE.bestiary.translated, 36)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_COVERAGE.spells.translated, 40)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_COVERAGE.items.translated, 83)
})

test('PF2e sixth exhaustive translations cover every non-empty primary field', () => {
  for (const entry of PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ENTRIES) {
    const original = entry.original.data as { name: string; description: string }
    assert.equal(entry.translation.status, 'MACHINE_DRAFT')
    assert.equal(typeof entry.translation.fields.name, 'string')
    assert.notEqual(entry.translation.fields.name, '')

    if (original.description) {
      assert.equal(typeof entry.translation.fields.description, 'string')
      assert.notEqual(entry.translation.fields.description, '')
      assert.notEqual(entry.translation.fields.description, original.description)
    }
  }
})

test('PF2e sixth exhaustive icons use only exact local source paths', () => {
  const byDomain = (domain: 'BESTIARY' | 'SPELL' | 'ITEM') => (
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ENTRIES.filter(
      (entry) => entry.original.domain === domain,
    )
  )

  assert.equal(byDomain('BESTIARY').filter((entry) => entry.original.image).length, 36)
  assert.equal(byDomain('SPELL').filter((entry) => entry.original.image).length, 19)
  assert.equal(byDomain('ITEM').filter((entry) => entry.original.image).length, 48)

  const dinosaurForm = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ENTRIES.find(
    (entry) => entry.original.contentId === 'pf2e:spell:spells-srd:dinosaur-form',
  )
  const slumberWine = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ENTRIES.find(
    (entry) => entry.original.contentId === 'pf2e:item:equipment-srd:slumber-wine',
  )

  assert.equal(
    dinosaurForm?.original.image?.path,
    '/api/game-systems/pathfinder-2e/icons/spells/dinosaur-form.webp',
  )
  assert.equal(
    slumberWine?.original.image?.path,
    '/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-poisons/slumber-wine.webp',
  )
})

test('PF2e seventh exhaustive delivery completes Rank 5 and advances only exhausted publications', () => {
  const bestiary = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )

  assert.deepEqual(
    Object.fromEntries(
      [-1, 0, 1, 2].map((level) => [
        level,
        bestiary.filter((entry) => (entry.original.data as { level: number }).level === level).length,
      ]),
    ),
    { '-1': 10, 0: 11, 1: 62, 2: 17 },
  )
  assert.deepEqual(
    Object.fromEntries(
      [5].map((rank) => [
        rank,
        spells.filter((entry) => (entry.original.data as { rank: number }).rank === rank).length,
      ]),
    ),
    { 5: 18 },
  )
  assert.deepEqual(
    Object.fromEntries(
      [0].map((level) => [
        level,
        items.filter((entry) => (entry.original.data as { level: number }).level === level).length,
      ]),
    ),
    { 0: 100 },
  )
  assert.equal(
    bestiary.every((entry) => (
      entry.original.source.publicationTitle === 'Pathfinder Monster Core 2'
      && entry.original.source.sourcePack === 'pathfinder-monster-core-2'
      && entry.original.contentId.startsWith('pf2e:bestiary:pathfinder-monster-core-2:')
    )),
    true,
  )
  assert.equal(
    spells.every((entry) => entry.original.source.publicationTitle === 'Pathfinder Player Core'),
    true,
  )
  assert.equal(
    items.every((entry) => entry.original.source.publicationTitle === 'Pathfinder GM Core'),
    true,
  )

  const previousIds = new Set([
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_01_ENTRIES,
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_02_ENTRIES,
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_03_ENTRIES,
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_04_ENTRIES,
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_05_ENTRIES,
    ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_06_ENTRIES,
  ].map((entry) => entry.original.contentId))
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_ENTRIES.every(
      (entry) => !previousIds.has(entry.original.contentId),
    ),
    true,
  )
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_ENTRIES.every(
      (entry) => entry.translation.status === 'MACHINE_DRAFT',
    ),
    true,
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_COVERAGE.ready, false)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_COVERAGE.bestiary.translated, 100)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_COVERAGE.spells.translated, 18)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_COVERAGE.items.translated, 100)
})

test('PF2e seventh exhaustive translations cover every non-empty primary field', () => {
  for (const entry of PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_ENTRIES) {
    const original = entry.original.data as { name: string; description: string }
    assert.equal(entry.translation.status, 'MACHINE_DRAFT')
    assert.equal(typeof entry.translation.fields.name, 'string')
    assert.notEqual(entry.translation.fields.name, '')

    if (original.description) {
      assert.equal(typeof entry.translation.fields.description, 'string')
      assert.notEqual(entry.translation.fields.description, '')
      assert.notEqual(entry.translation.fields.description, original.description)
    }
  }
})

test('PF2e seventh exhaustive icons use only exact local source paths', () => {
  const byDomain = (domain: 'BESTIARY' | 'SPELL' | 'ITEM') => (
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_ENTRIES.filter(
      (entry) => entry.original.domain === domain,
    )
  )

  assert.equal(byDomain('BESTIARY').filter((entry) => entry.original.image).length, 100)
  assert.equal(byDomain('SPELL').filter((entry) => entry.original.image).length, 6)
  assert.equal(byDomain('ITEM').filter((entry) => entry.original.image).length, 78)

  const impalingSpike = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_ENTRIES.find(
    (entry) => entry.original.contentId === 'pf2e:spell:spells-srd:impaling-spike',
  )
  const hematite = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_07_ENTRIES.find(
    (entry) => entry.original.contentId === 'pf2e:item:equipment-srd:hematite',
  )

  assert.equal(
    impalingSpike?.original.image?.path,
    '/api/game-systems/pathfinder-2e/icons/spells/impaling-spike.webp',
  )
  assert.equal(
    hematite?.original.image?.path,
    '/api/game-systems/pathfinder-2e/icons/equipment/treasure/gems/lesser-semiprecious-stones/hematite.webp',
  )
})

test('PF2e cumulative imported and translated coverage matches the roadmap snapshot', () => {
  const byDomain = (domain: 'BESTIARY' | 'SPELL' | 'ITEM') => (
    PATHFINDER_2E_CONTENT_ENTRIES.filter((entry) => entry.original.domain === domain)
  )

  assert.deepEqual(
    {
      bestiary: byDomain('BESTIARY').length,
      spells: byDomain('SPELL').length,
      items: byDomain('ITEM').length,
    },
    { bestiary: 7_517, spells: 1_802, items: 5_698 },
  )
  assert.equal(
    new Set(PATHFINDER_2E_CONTENT_ENTRIES.map((entry) => entry.original.contentId)).size,
    PATHFINDER_2E_CONTENT_ENTRIES.length,
  )
  assert.equal(PATHFINDER_2E_CONTENT_ENTRIES.every((entry) => entry.translation.status !== 'NOT_STARTED'), true)
  assert.equal(PATHFINDER_2E_CONTENT_ENTRIES.filter((entry) => entry.translation.status === 'REVIEWED').length, 9)
  assert.equal(PATHFINDER_2E_CONTENT_ENTRIES.filter((entry) => entry.translation.status === 'MACHINE_DRAFT').length, 15_008)
})

test('PF2e eleventh delivery imports all Core Remaster hazards without creature placeholders', () => {
  const hazards = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_11_ENTRIES.filter((entry) => (
    entry.original.domain === 'BESTIARY'
    && (entry.original.data as { entryType?: string }).entryType === 'HAZARD'
  ))

  assert.equal(hazards.length, 33)
  assert.equal(
    hazards.filter((entry) => entry.original.source.sourcePack === 'pathfinder-monster-core-2').length,
    1,
  )
  assert.equal(
    hazards.filter((entry) => entry.original.source.sourcePack === 'hazards').length,
    32,
  )

  for (const entry of hazards) {
    const data = entry.original.data as {
      entryType: 'HAZARD'
      stealth: { modifier: number; details: string }
      disable: string
      routine: string
      reset: string
      actions: Array<{ id: string; traits?: string[] }>
    }

    assert.equal(data.entryType, 'HAZARD')
    assert.equal('perception' in data, false)
    assert.equal('abilities' in data, false)
    assert.equal('attacks' in data, false)
    assert.equal('speedFeet' in data, false)
    assert.equal(typeof data.stealth.modifier, 'number')
    assert.equal(typeof data.disable, 'string')
    assert.equal(entry.original.image?.path, '/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg')
    assert.equal(entry.translation.status, 'MACHINE_DRAFT')
    assert.equal(typeof entry.translation.fields.name, 'string')
    assert.equal(typeof entry.translation.fields.stealthDetails, 'string')
    assert.equal(typeof entry.translation.fields.disable, 'string')
    assert.equal(typeof entry.translation.fields.routine, 'string')
    assert.equal(typeof entry.translation.fields.reset, 'string')
    assert.equal(typeof entry.translation.fields.actions, 'object')
  }
})

test('PF2e twelfth delivery preserves the independent transition cursors', () => {
  const bestiary = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )
  const distribution = (
    entries: readonly typeof PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_ENTRIES[number][],
    key: 'level' | 'rank',
  ) => Object.fromEntries(
    [...new Set(entries.map((entry) => (entry.original.data as Record<string, number>)[key]))]
      .sort((left, right) => left - right)
      .map((value) => [
        value,
        entries.filter(
          (entry) => (entry.original.data as Record<string, number>)[key] === value,
        ).length,
      ]),
  )

  assert.equal(bestiary.length, 100)
  assert.equal(spells.length, 4)
  assert.equal(items.length, 100)
  assert.deepEqual(distribution(bestiary, 'level'), { '-1': 20, 0: 17, 1: 23, 2: 30, 3: 10 })
  assert.deepEqual(distribution(spells, 'rank'), { 9: 3, 10: 1 })
  assert.deepEqual(distribution(items, 'level'), { 10: 1, 11: 30, 12: 35, 13: 28, 14: 6 })
  assert.equal(
    bestiary.every((entry) => (
      entry.original.source.sourcePack === 'pathfinder-npc-core'
      && entry.original.source.publicationTitle === 'Pathfinder NPC Core'
    )),
    true,
  )
  assert.equal(
    spells.every((entry) => entry.original.source.publicationTitle === 'Pathfinder Player Core 2'),
    true,
  )
  assert.equal(
    items.every((entry) => entry.original.source.publicationTitle === 'Pathfinder GM Core'),
    true,
  )
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_12_ENTRIES.every((entry) => (
      entry.translation.status === 'MACHINE_DRAFT'
      && typeof entry.translation.fields.name === 'string'
      && typeof entry.translation.fields.description === 'string'
    )),
    true,
  )
  assert.equal(bestiary.filter((entry) => entry.original.image).length, 100)
  assert.equal(spells.filter((entry) => entry.original.image).length, 1)
  assert.equal(items.filter((entry) => entry.original.image).length, 67)
})

test('PF2e thirteenth and fourteenth deliveries exhaust the documented transition sources', () => {
  const split = (entries: readonly typeof PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_ENTRIES[number][]) => ({
    bestiary: entries.filter((entry) => entry.original.domain === 'BESTIARY'),
    spells: entries.filter((entry) => entry.original.domain === 'SPELL'),
    items: entries.filter((entry) => entry.original.domain === 'ITEM'),
  })
  const thirteenth = split(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_ENTRIES)
  const fourteenth = split(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_ENTRIES)

  assert.deepEqual(
    [thirteenth.bestiary.length, thirteenth.spells.length, thirteenth.items.length],
    [100, 1, 100],
  )
  assert.deepEqual(
    [fourteenth.bestiary.length, fourteenth.spells.length, fourteenth.items.length],
    [71, 4, 57],
  )
  assert.equal(
    [...thirteenth.bestiary, ...fourteenth.bestiary].every(
      (entry) => entry.original.source.publicationTitle === 'Pathfinder NPC Core',
    ),
    true,
  )
  assert.equal(
    thirteenth.spells.every(
      (entry) => entry.original.source.publicationTitle === 'Pathfinder GM Core',
    ),
    true,
  )
  assert.equal(
    fourteenth.spells.every(
      (entry) => entry.original.source.publicationTitle === 'Pathfinder NPC Core',
    ),
    true,
  )
  assert.equal(
    [...thirteenth.items, ...fourteenth.items].every(
      (entry) => entry.original.source.publicationTitle === 'Pathfinder GM Core',
    ),
    true,
  )
  assert.equal(
    [...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_13_ENTRIES,
      ...PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_14_ENTRIES]
      .every((entry) => entry.translation.status === 'MACHINE_DRAFT'),
    true,
  )
  assert.equal(thirteenth.bestiary.filter((entry) => entry.original.image).length, 100)
  assert.equal(thirteenth.spells.filter((entry) => entry.original.image).length, 1)
  assert.equal(thirteenth.items.filter((entry) => entry.original.image).length, 67)
  assert.equal(fourteenth.bestiary.filter((entry) => entry.original.image).length, 71)
  assert.equal(fourteenth.spells.filter((entry) => entry.original.image).length, 0)
  assert.equal(fourteenth.items.filter((entry) => entry.original.image).length, 36)
})

test('PF2e fifteenth delivery concludes NPC Core Items and starts Rage of Elements', () => {
  const bestiary = PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )
  const distribution = (
    entries: readonly typeof PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_ENTRIES[number][],
    key: 'level' | 'rank',
  ) => Object.fromEntries(
    [...new Set(entries.map((entry) => (entry.original.data as Record<string, number>)[key]))]
      .sort((left, right) => left - right)
      .map((value) => [
        value,
        entries.filter(
          (entry) => (entry.original.data as Record<string, number>)[key] === value,
        ).length,
      ]),
  )

  assert.deepEqual([bestiary.length, spells.length, items.length], [81, 40, 11])
  assert.deepEqual(distribution(spells, 'rank'), { 1: 27, 2: 13 })
  assert.deepEqual(
    distribution(items, 'level'),
    { 1: 2, 2: 1, 3: 2, 4: 2, 6: 1, 11: 1, 12: 1, 18: 1 },
  )
  assert.equal(
    bestiary.every((entry) => (
      entry.original.source.sourcePack === 'rage-of-elements-bestiary'
      && entry.original.source.publicationTitle === 'Pathfinder Rage of Elements'
      && entry.original.source.remaster === true
    )),
    true,
  )
  assert.equal(
    spells.every((entry) => (
      entry.original.source.publicationTitle === 'Pathfinder Rage of Elements'
      && entry.original.source.remaster === true
    )),
    true,
  )
  assert.equal(
    items.every((entry) => entry.original.source.publicationTitle === 'Pathfinder NPC Core'),
    true,
  )
  assert.equal(
    PATHFINDER_2E_NPC_CORE_EXHAUSTIVE_15_ENTRIES.every((entry) => (
      entry.translation.status === 'MACHINE_DRAFT'
      && typeof entry.translation.fields.name === 'string'
      && typeof entry.translation.fields.description === 'string'
    )),
    true,
  )
  assert.equal(bestiary.filter((entry) => entry.original.image).length, 81)
  assert.equal(spells.filter((entry) => entry.original.image).length, 15)
  assert.equal(items.filter((entry) => entry.original.image).length, 4)
})

test('PF2e pt-BR translations keep feminine agreement immediately before magia', () => {
  const invalidAgreement = /\b(?:O|o|Os|os|Este|este|Estes|estes|Esse|esse|Esses|esses|Aquele|aquele|Aqueles|aqueles|Um|um|Uns|uns|Do|do|Dos|dos|No|no|Nos|nos|Ao|ao|Aos|aos|Pelo|pelo|Pelos|pelos|Meu|meu|Meus|meus|Teu|teu|Teus|teus|Seu|seu|Seus|seus|Nosso|nosso|Nossos|nossos|Vosso|vosso|Vossos|vossos|Todo|todo|Todos|todos|Outro|outro|Outros|outros|Mesmo|mesmo|Mesmos|mesmos|Próprio|próprio|Próprios|próprios|Algum|algum|Alguns|alguns|Nenhum|nenhum) magia(?:s)?\b/g
  const invalidEntries = PATHFINDER_2E_CONTENT_ENTRIES.flatMap((entry) => {
    const matches = JSON.stringify(entry.translation.fields).match(invalidAgreement) ?? []
    return matches.map((phrase) => `${entry.original.contentId}:${phrase}`)
  })

  assert.deepEqual(invalidEntries, [])
})

test('PF2e sixteenth delivery exhausts the current Rulebooks publications with expanded capacity', () => {
  const bestiary = PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )
  const distribution = (
    entries: readonly typeof PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_ENTRIES[number][],
    key: 'level' | 'rank',
  ) => Object.fromEntries(
    [...new Set(entries.map((entry) => (entry.original.data as Record<string, number>)[key]))]
      .sort((left, right) => left - right)
      .map((value) => [
        value,
        entries.filter(
          (entry) => (entry.original.data as Record<string, number>)[key] === value,
        ).length,
      ]),
  )

  assert.deepEqual([bestiary.length, spells.length, items.length], [76, 81, 150])
  assert.deepEqual(
    distribution(spells, 'rank'),
    { 2: 10, 3: 17, 4: 20, 5: 11, 6: 10, 7: 7, 8: 4, 9: 1, 10: 1 },
  )
  assert.equal(
    bestiary.every((entry) => (
      entry.original.source.sourcePack === 'howl-of-the-wild-bestiary'
      && entry.original.source.publicationTitle === 'Pathfinder Howl of the Wild'
      && entry.original.source.remaster === true
    )),
    true,
  )
  assert.equal(
    [...spells, ...items].every((entry) => (
      entry.original.source.publicationTitle === 'Pathfinder Rage of Elements'
      && entry.original.source.remaster === true
    )),
    true,
  )
  assert.equal(
    PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_ENTRIES.every((entry) => (
      entry.translation.status === 'MACHINE_DRAFT'
      && entry.translation.sourceTranslatableHash === entry.original.translatableHash
      && typeof entry.translation.fields.name === 'string'
      && typeof entry.translation.fields.description === 'string'
    )),
    true,
  )
  assert.equal(
    PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_ENTRIES.every((entry) => (
      !/\[\[\/|@(?:UUID|Check|Damage|Template|item|actor)|\|(?:options|opções):[^\]]+\]/i
        .test(JSON.stringify({
          original: entry.original.data,
          translation: entry.translation.fields,
        }))
    )),
    true,
  )
  assert.equal(bestiary.filter((entry) => entry.original.image).length, 76)
  assert.equal(spells.filter((entry) => entry.original.image).length, 42)
  assert.equal(items.filter((entry) => entry.original.image).length, 63)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_SOURCE.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.equal(
    PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_SOURCE.inputChecksum,
    'fdfa4416ebaf2af6a2b8864346956a8b21ade30e1ef71fddb0c5b721e293ee39',
  )
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_SOURCE.importerVersion, 7)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_IMPORTS.length, 307)
  assert.ok(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_IMPORTS.every((entry) => entry.status === 'NORMALIZED'))
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_COVERAGE.bestiary.translated, 76)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_COVERAGE.spells.translated, 81)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_COVERAGE.items.translated, 150)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_16_COVERAGE.ready, false)
})

test('PF2e seventeenth delivery exhausts three Rulebooks in explicit publication order', () => {
  const bestiary = PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )
  const publicationSequence = (
    entries: readonly typeof PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_ENTRIES[number][],
  ) => entries
    .map((entry) => entry.original.source.publicationTitle)
    .filter((publication, index, publications) => (
      index === 0 || publication !== publications[index - 1]
    ))
  const distribution = (
    entries: readonly typeof PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_ENTRIES[number][],
    key: 'level' | 'rank',
  ) => Object.fromEntries(
    [...new Set(entries.map((entry) => (entry.original.data as Record<string, number>)[key]))]
      .sort((left, right) => left - right)
      .map((value) => [
        value,
        entries.filter(
          (entry) => (entry.original.data as Record<string, number>)[key] === value,
        ).length,
      ]),
  )

  assert.deepEqual([bestiary.length, spells.length, items.length], [71, 56, 386])
  assert.deepEqual(
    publicationSequence(bestiary),
    ['Pathfinder War of Immortals', 'Pathfinder Battlecry!'],
  )
  assert.deepEqual(
    publicationSequence(spells),
    [
      'Pathfinder Howl of the Wild',
      'Pathfinder War of Immortals',
      'Pathfinder Battlecry!',
    ],
  )
  assert.deepEqual(publicationSequence(items), publicationSequence(spells))
  assert.deepEqual(
    distribution(spells, 'rank'),
    { 1: 7, 2: 10, 3: 7, 4: 7, 5: 6, 6: 7, 7: 2, 8: 5, 9: 1, 10: 4 },
  )
  assert.deepEqual(
    distribution(items, 'level'),
    {
      0: 46,
      1: 12,
      2: 14,
      3: 28,
      4: 31,
      5: 28,
      6: 16,
      7: 27,
      8: 25,
      9: 13,
      10: 23,
      11: 15,
      12: 19,
      13: 15,
      14: 10,
      15: 13,
      16: 9,
      17: 10,
      18: 9,
      19: 6,
      20: 12,
      21: 1,
      23: 1,
      24: 1,
      25: 2,
    },
  )
  assert.equal(
    PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_ENTRIES.every((entry) => (
      entry.original.source.remaster === true
      && entry.translation.status === 'MACHINE_DRAFT'
      && entry.translation.sourceTranslatableHash === entry.original.translatableHash
      && typeof entry.translation.fields.name === 'string'
      && typeof entry.translation.fields.description === 'string'
    )),
    true,
  )
  assert.equal(
    PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_ENTRIES.every((entry) => (
      !/\[\[\/|@(?:UUID|Check|Damage|Template|item|actor)|\|(?:options|opções):[^\]]+\]/i
        .test(JSON.stringify({
          original: entry.original.data,
          translation: entry.translation.fields,
        }))
    )),
    true,
  )
  assert.equal(bestiary.filter((entry) => entry.original.image).length, 71)
  assert.equal(spells.filter((entry) => entry.original.image).length, 6)
  assert.equal(items.filter((entry) => entry.original.image).length, 94)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_SOURCE.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.equal(
    PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_SOURCE.inputChecksum,
    '6df6b11abe7d0747fb93e0e97ae979ea0b3c0a78f3d75816069f48522bb0178a',
  )
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_SOURCE.importerVersion, 8)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_IMPORTS.length, 513)
  assert.ok(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_IMPORTS.every((entry) => entry.status === 'NORMALIZED'))
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_COVERAGE.bestiary.translated, 71)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_COVERAGE.spells.translated, 56)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_COVERAGE.items.translated, 386)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_17_COVERAGE.ready, false)
})

test('PF2e eighteenth delivery advances the remaining Rulebooks with explicit publication precedence', () => {
  const bestiary = PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )
  const publicationSequence = (
    entries: readonly typeof PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_ENTRIES[number][],
  ) => entries
    .map((entry) => entry.original.source.publicationTitle)
    .filter((publication, index, publications) => (
      index === 0 || publication !== publications[index - 1]
    ))
  const distribution = (
    entries: readonly typeof PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_ENTRIES[number][],
    key: 'level' | 'rank',
  ) => Object.fromEntries(
    [...new Set(entries.map((entry) => (entry.original.data as Record<string, number>)[key]))]
      .sort((left, right) => left - right)
      .map((value) => [
        value,
        entries.filter(
          (entry) => (entry.original.data as Record<string, number>)[key] === value,
        ).length,
      ]),
  )

  assert.deepEqual([bestiary.length, spells.length, items.length], [26, 32, 400])
  assert.deepEqual(publicationSequence(bestiary), ['Pathfinder Dark Archive (Remastered)'])
  assert.deepEqual(
    publicationSequence(spells),
    ['Pathfinder Dark Archive (Remastered)', 'Pathfinder Treasure Vault (Remastered)'],
  )
  assert.deepEqual(
    publicationSequence(items),
    [
      'Pathfinder Guns & Gears',
      'Pathfinder Dark Archive (Remastered)',
      'Pathfinder Treasure Vault (Remastered)',
    ],
  )
  assert.deepEqual(
    distribution(spells, 'rank'),
    { 1: 5, 2: 2, 3: 9, 4: 4, 5: 3, 6: 3, 7: 3, 8: 2, 9: 1 },
  )
  assert.deepEqual(
    distribution(items, 'level'),
    {
      0: 135,
      1: 40,
      2: 16,
      3: 27,
      4: 18,
      5: 19,
      6: 15,
      7: 13,
      8: 12,
      9: 20,
      10: 16,
      11: 11,
      12: 12,
      13: 8,
      14: 5,
      15: 11,
      16: 5,
      17: 10,
      18: 3,
      19: 2,
      20: 2,
    },
  )
  assert.equal(
    PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_ENTRIES.every((entry) => (
      entry.translation.status === 'MACHINE_DRAFT'
      && entry.translation.sourceTranslatableHash === entry.original.translatableHash
      && typeof entry.translation.fields.name === 'string'
      && typeof entry.translation.fields.description === 'string'
      && !/\[\[\/|@(?:UUID|Check|Damage|Template|item|actor)|\|(?:options|opÃ§Ãµes):[^\]]+\]/i
        .test(JSON.stringify({
          original: entry.original.data,
          translation: entry.translation.fields,
        }))
    )),
    true,
  )
  assert.equal(bestiary.filter((entry) => entry.original.image).length, 26)
  assert.equal(spells.filter((entry) => entry.original.image).length, 24)
  assert.equal(items.filter((entry) => entry.original.image).length, 250)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_SOURCE.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.equal(
    PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_SOURCE.inputChecksum,
    '25dab5adf7e785ba3fc998ff58457c2f04e7c1ea20b73ca5b306b03b92523c15',
  )
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_SOURCE.importerVersion, 9)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_IMPORTS.length, 458)
  assert.ok(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_IMPORTS.every((entry) => entry.status === 'NORMALIZED'))
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_COVERAGE.bestiary.translated, 26)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_COVERAGE.spells.translated, 32)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_COVERAGE.items.translated, 400)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_18_COVERAGE.ready, false)
})

test('PF2e nineteenth delivery prioritizes creatures while preserving independent publication cursors', () => {
  const bestiary = PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )
  const publicationCounts = (
    entries: readonly typeof PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_ENTRIES[number][],
  ) => Object.fromEntries(entries.reduce<Array<[string, number]>>((counts, entry) => {
    const publication = entry.original.source.publicationTitle ?? ''
    const current = counts.find(([candidate]) => candidate === publication)
    if (current) current[1] += 1
    else counts.push([publication, 1])
    return counts
  }, []))
  const distribution = (
    entries: readonly typeof PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_ENTRIES[number][],
    key: 'level' | 'rank',
  ) => Object.fromEntries(
    [...new Set(entries.map((entry) => (entry.original.data as Record<string, number>)[key]))]
      .sort((left, right) => left - right)
      .map((value) => [
        value,
        entries.filter(
          (entry) => (entry.original.data as Record<string, number>)[key] === value,
        ).length,
      ]),
  )

  assert.deepEqual([bestiary.length, spells.length, items.length], [291, 93, 400])
  assert.deepEqual(publicationCounts(bestiary), {
    'Pathfinder Lost Omens Tian Xia World Guide': 25,
    'Pathfinder Lost Omens Shining Kingdoms': 11,
    'Pathfinder Lost Omens Draconic Codex': 229,
    'Pathfinder Lost Omens Hellfire Dispatches': 14,
    'Pathfinder Lost Omens High Seas': 12,
  })
  assert.deepEqual(publicationCounts(spells), {
    'Pathfinder Lost Omens Divine Mysteries': 34,
    'Pathfinder Lost Omens Rival Academies': 26,
    'Pathfinder Lost Omens Shining Kingdoms': 18,
    'Pathfinder Lost Omens Draconic Codex': 9,
    'Pathfinder Lost Omens High Seas': 6,
  })
  assert.deepEqual(publicationCounts(items), {
    'Pathfinder Treasure Vault (Remastered)': 400,
  })
  assert.deepEqual(
    distribution(spells, 'rank'),
    { 1: 25, 2: 19, 3: 18, 4: 8, 5: 7, 6: 2, 7: 9, 8: 3, 9: 1, 10: 1 },
  )
  assert.deepEqual(
    distribution(items, 'level'),
    { 0: 31, 1: 45, 2: 28, 3: 67, 4: 53, 5: 79, 6: 66, 7: 31 },
  )
  assert.equal(
    bestiary.every(
      (entry) => (entry.original.data as { entryType?: string }).entryType !== 'HAZARD',
    ),
    true,
  )
  assert.equal(
    PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_ENTRIES.every((entry) => (
      entry.translation.status === 'MACHINE_DRAFT'
      && entry.translation.sourceTranslatableHash === entry.original.translatableHash
      && typeof entry.translation.fields.name === 'string'
      && typeof entry.translation.fields.description === 'string'
      && !/\[\[\/|@(?:UUID|Check|Damage|Template|item|actor)|\|(?:options|opções):[^\]]+/i
        .test(JSON.stringify({
          original: entry.original.data,
          translation: entry.translation.fields,
        }))
    )),
    true,
  )
  assert.equal(bestiary.filter((entry) => entry.original.image).length, 291)
  assert.equal(spells.filter((entry) => entry.original.image).length, 6)
  assert.equal(items.filter((entry) => entry.original.image).length, 156)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_SOURCE.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.equal(
    PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_SOURCE.inputChecksum,
    'b8a3df669779f8de55d8f1f65d475f8f0c54a5a0af544ec07902e7d7469b03c6',
  )
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_SOURCE.importerVersion, 9)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_IMPORTS.length, 784)
  assert.deepEqual(
    PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_IMPORTS
      .filter((entry) => entry.normalizationWarnings.length > 0)
      .map((entry) => [entry.contentId, entry.normalizationWarnings]),
    [[
      'pf2e:item:equipment-srd:fortress-plate',
      ['source-publication-title-trimmed'],
    ]],
  )
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_COVERAGE.bestiary.translated, 291)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_COVERAGE.spells.translated, 93)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_COVERAGE.items.translated, 400)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_19_COVERAGE.ready, false)
})

test('PF2e twentieth delivery fills the bestiary limit before advancing through Adventure Paths', () => {
  const bestiary = PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )
  const publicationCounts = (
    entries: readonly typeof PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_ENTRIES[number][],
  ) => Object.fromEntries(entries.reduce<Array<[string, number]>>((counts, entry) => {
    const publication = entry.original.source.publicationTitle ?? ''
    const current = counts.find(([candidate]) => candidate === publication)
    if (current) current[1] += 1
    else counts.push([publication, 1])
    return counts
  }, []))
  const distribution = (
    entries: readonly typeof PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_ENTRIES[number][],
    key: 'level' | 'rank',
  ) => Object.fromEntries(
    [...new Set(entries.map((entry) => (entry.original.data as Record<string, number>)[key]))]
      .sort((left, right) => left - right)
      .map((value) => [
        value,
        entries.filter(
          (entry) => (entry.original.data as Record<string, number>)[key] === value,
        ).length,
      ]),
  )

  assert.deepEqual([bestiary.length, spells.length, items.length], [400, 20, 400])
  assert.deepEqual(publicationCounts(bestiary), {
    'Pathfinder Adventures: Dark Archive Web Supplement: In Darkness (Remastered)': 4,
    'Pathfinder Free RPG Day Adventure: The Great Toy Heist': 2,
    'Pathfinder Adventure: Prey for Death': 40,
    'Pathfinder Claws of the Tyrant': 42,
    'Pathfinder Adventures: Troubles in Grayce': 53,
    'Pathfinder Adventure: The Scourge of Sheerleaf': 3,
    'Pathfinder Game Night: Dawn of the Frogs': 8,
    'Pathfinder Beginner Box: Secrets of the Unlit Star': 24,
    'Pathfinder Adventure Path: Gatewalkers': 88,
    'Pathfinder Season of Ghosts Hardcover Compilation': 88,
    'Pathfinder #201: Pactbreaker': 31,
    'Pathfinder #202: Severed at the Root': 17,
  })
  assert.deepEqual(publicationCounts(spells), {
    'Pathfinder Adventure: Prey for Death': 5,
    'Pathfinder Adventure Path: Gatewalkers': 4,
    'Pathfinder Season of Ghosts Hardcover Compilation': 10,
    'Pathfinder #201: Pactbreaker': 1,
  })
  assert.deepEqual(publicationCounts(items), {
    'Pathfinder Treasure Vault (Remastered)': 400,
  })
  assert.deepEqual(
    distribution(bestiary, 'level'),
    {
      [-1]: 6,
      0: 8,
      1: 28,
      2: 38,
      3: 52,
      4: 39,
      5: 31,
      6: 34,
      7: 35,
      8: 21,
      9: 15,
      10: 6,
      11: 11,
      12: 12,
      13: 8,
      14: 6,
      15: 5,
      16: 13,
      17: 9,
      18: 9,
      19: 9,
      20: 4,
      22: 1,
    },
  )
  assert.deepEqual(distribution(spells, 'rank'), { 1: 3, 2: 3, 3: 2, 4: 8, 5: 2, 6: 2 })
  assert.deepEqual(
    distribution(items, 'level'),
    { 7: 23, 8: 70, 9: 54, 10: 54, 11: 72, 12: 78, 13: 37, 14: 12 },
  )
  assert.equal(
    bestiary.filter(
      (entry) => (entry.original.data as { entryType?: string }).entryType === 'HAZARD',
    ).length,
    102,
  )
  assert.equal(
    bestiary.filter(
      (entry) => (entry.original.data as { entryType?: string }).entryType !== 'HAZARD',
    ).length,
    298,
  )
  assert.equal(
    spells.every((entry) => {
      const defense = (entry.translation.fields as { defense?: string }).defense
      return defense === undefined || [
        'CA',
        'teste de Vontade',
        'teste de Fortitude',
        'teste de Reflexos',
        'teste básico de Vontade',
        'teste básico de Fortitude',
        'teste básico de Reflexos',
      ].includes(defense)
    }),
    true,
  )
  assert.equal(
    PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_ENTRIES.every((entry) => (
      entry.translation.status === 'MACHINE_DRAFT'
      && entry.translation.sourceTranslatableHash === entry.original.translatableHash
      && typeof entry.translation.fields.name === 'string'
      && typeof entry.translation.fields.description === 'string'
      && !/\[\[\/|@(?:UUID|Check|Damage|Template|item|actor)|\|(?:options|opções):[^\]]+/i
        .test(JSON.stringify({
          original: entry.original.data,
          translation: entry.translation.fields,
        }))
    )),
    true,
  )
  assert.equal(bestiary.filter((entry) => entry.original.image).length, 400)
  assert.equal(spells.filter((entry) => entry.original.image).length, 3)
  assert.equal(items.filter((entry) => entry.original.image).length, 135)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_SOURCE.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.equal(
    PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_SOURCE.inputChecksum,
    '38a3c1ff4f618e765d5d42d19e84094503711d1cd5b4ad09b585340a07f0fd27',
  )
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_SOURCE.importerVersion, 9)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_IMPORTS.length, 820)
  assert.equal(
    PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_IMPORTS.every(
      (entry) => entry.status === 'NORMALIZED' && entry.normalizationWarnings.length === 0,
    ),
    true,
  )
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_COVERAGE.bestiary.translated, 400)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_COVERAGE.spells.translated, 20)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_COVERAGE.items.translated, 400)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_20_COVERAGE.ready, false)
})

test('PF2e twenty-first delivery advances Remaster Adventure Paths and excludes Legacy records', () => {
  const bestiary = PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )
  const publicationCounts = (
    entries: readonly typeof PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_ENTRIES[number][],
  ) => Object.fromEntries(entries.reduce<Array<[string, number]>>((counts, entry) => {
    const publication = entry.original.source.publicationTitle ?? ''
    const current = counts.find(([candidate]) => candidate === publication)
    if (current) current[1] += 1
    else counts.push([publication, 1])
    return counts
  }, []))
  const distribution = (
    entries: readonly typeof PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_ENTRIES[number][],
    key: 'level' | 'rank',
  ) => Object.fromEntries(
    [...new Set(entries.map((entry) => (entry.original.data as Record<string, number>)[key]))]
      .sort((left, right) => left - right)
      .map((value) => [
        value,
        entries.filter(
          (entry) => (entry.original.data as Record<string, number>)[key] === value,
        ).length,
      ]),
  )

  assert.deepEqual([bestiary.length, spells.length, items.length], [400, 20, 400])
  assert.deepEqual(publicationCounts(bestiary), {
    'Pathfinder #202: Severed at the Root': 16,
    'Pathfinder #203: Shepherd of Decay': 26,
    'Pathfinder #204: Stage Fright': 20,
    'Pathfinder #205: Singer, Stalker, Skinsaw Man': 30,
    'Pathfinder #206: Bring the House Down': 24,
    'Pathfinder #207: The Resurrection Flood': 19,
    'Pathfinder #208: Hoof, Cinder, and Storm': 35,
    'Pathfinder #209: Destroyer\'s Doom': 35,
    'Pathfinder #210: Whispers in the Dirt': 21,
    'Pathfinder #211: The Secret of Deathstalk Tower': 31,
    'Pathfinder #212: A Voice in the Blight': 26,
    'Pathfinder #213: Thirst for Blood': 19,
    'Pathfinder #214: The Broken Palace': 28,
    'Pathfinder #215: To Blot Out the Sun': 49,
    'Pathfinder Adventure Path #215: To Blot Out the Sun': 2,
    'Pathfinder #216: The Acropolis Pyre': 19,
  })
  assert.deepEqual(publicationCounts(spells), {
    'Pathfinder #203: Shepherd of Decay': 5,
    'Pathfinder #205: Singer, Stalker, Skinsaw Man': 5,
    'Pathfinder #209: Destroyer\'s Doom': 4,
    'Pathfinder #211: The Secret of Deathstalk Tower': 2,
    'Pathfinder #212: A Voice in the Blight': 2,
    'Pathfinder #216: The Acropolis Pyre': 2,
  })
  assert.deepEqual(publicationCounts(items), {
    'Pathfinder Treasure Vault (Remastered)': 253,
    'Pathfinder Lost Omens Tian Xia Actor Guide': 50,
    'Pathfinder Lost Omens Divine Mysteries': 4,
    'Pathfinder Lost Omens Rival Academies': 67,
    'Pathfinder Lost Omens Shining Kingdoms': 26,
  })
  assert.deepEqual(distribution(bestiary, 'level'), {
    [-1]: 4,
    0: 7,
    1: 12,
    2: 14,
    3: 18,
    4: 17,
    5: 25,
    6: 18,
    7: 23,
    8: 24,
    9: 39,
    10: 31,
    11: 27,
    12: 22,
    13: 22,
    14: 19,
    15: 16,
    16: 11,
    17: 7,
    18: 10,
    19: 12,
    20: 14,
    21: 2,
    22: 4,
    23: 1,
    24: 1,
  })
  assert.deepEqual(
    distribution(spells, 'rank'),
    { 1: 3, 2: 1, 3: 3, 4: 2, 5: 2, 6: 3, 7: 2, 8: 2, 9: 2 },
  )
  assert.deepEqual(distribution(items, 'level'), {
    0: 12,
    1: 12,
    2: 11,
    3: 11,
    4: 12,
    5: 12,
    6: 7,
    7: 4,
    8: 4,
    9: 5,
    10: 9,
    11: 7,
    12: 5,
    13: 4,
    14: 41,
    15: 42,
    16: 37,
    17: 46,
    18: 51,
    19: 25,
    20: 35,
    21: 2,
    22: 1,
    23: 2,
    24: 1,
    25: 1,
    28: 1,
  })
  assert.equal(
    bestiary.filter(
      (entry) => (entry.original.data as { entryType?: string }).entryType === 'HAZARD',
    ).length,
    85,
  )
  assert.equal(
    bestiary.filter(
      (entry) => (entry.original.data as { entryType?: string }).entryType !== 'HAZARD',
    ).length,
    315,
  )
  assert.equal(
    spells.every((entry) => {
      const defense = (entry.translation.fields as { defense?: string }).defense
      return defense === undefined || [
        'CA',
        'teste de Vontade',
        'teste de Fortitude',
        'teste de Reflexos',
        'teste básico de Vontade',
        'teste básico de Fortitude',
        'teste básico de Reflexos',
      ].includes(defense)
    }),
    true,
  )
  assert.equal(
    PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_ENTRIES.every((entry) => (
      entry.original.source.remaster === true
      && entry.translation.status === 'MACHINE_DRAFT'
      && entry.translation.sourceTranslatableHash === entry.original.translatableHash
      && typeof entry.translation.fields.name === 'string'
      && typeof entry.translation.fields.description === 'string'
      && !/\[\[\/|@(?:UUID|Check|Damage|Template|item|actor)|\|(?:options|opÃ§Ãµes):[^\]]+/i
        .test(JSON.stringify({
          original: entry.original.data,
          translation: entry.translation.fields,
        }))
    )),
    true,
  )
  assert.equal(
    PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_ENTRIES.some(
      (entry) => entry.original.source.sourceId === 'q11aZe8Gc09QkP0y',
    ),
    false,
  )
  assert.equal(bestiary.filter((entry) => entry.original.image).length, 400)
  assert.equal(spells.filter((entry) => entry.original.image).length, 2)
  assert.equal(items.filter((entry) => entry.original.image).length, 118)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_SOURCE.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.equal(
    PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_SOURCE.inputChecksum,
    '24bcdfefe2f4f900e8394e41091cd9a264589bbd7e6733e04fabbe092c12d026',
  )
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_SOURCE.importerVersion, 10)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_IMPORTS.length, 820)
  assert.equal(
    PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_IMPORTS.every(
      (entry) => entry.status === 'NORMALIZED' && entry.normalizationWarnings.length === 0,
    ),
    true,
  )
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_COVERAGE.bestiary.translated, 400)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_COVERAGE.spells.translated, 20)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_COVERAGE.items.translated, 400)
  assert.equal(PATHFINDER_2E_RULEBOOKS_EXHAUSTIVE_21_COVERAGE.ready, false)
})

test('PF2e twenty-second delivery advances independent Remaster and Legacy cursors', () => {
  const bestiary = PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )
  const publicationCounts = (
    entries: readonly typeof PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_ENTRIES[number][],
  ) => Object.fromEntries(entries.reduce<Array<[string, number]>>((counts, entry) => {
    const publication = entry.original.source.publicationTitle ?? ''
    const current = counts.find(([candidate]) => candidate === publication)
    if (current) current[1] += 1
    else counts.push([publication, 1])
    return counts
  }, []))

  assert.deepEqual([bestiary.length, spells.length, items.length], [400, 200, 400])
  assert.deepEqual(publicationCounts(bestiary), {
    'Pathfinder #216: The Acropolis Pyre': 6,
    'Pathfinder #217: Death Sails a Wine-Dark Sea': 18,
    'Pathfinder #218: Titanbane': 38,
    'Pathfinder #219: Lord of the Trinity Star': 23,
    'Pathfinder #220: Crypt of Runes': 42,
    'Pathfinder #221: Into the Apocalypse Archive': 35,
    'Pathfinder Adventure Path: Bastion of Blasphemies': 83,
    'Pathfinder Adventure Path: Hell\'s Destiny': 90,
    'Pathfinder Adventure Path: Hellbreakers': 65,
  })
  assert.deepEqual(publicationCounts(spells), {
    'Pathfinder Core Rulebook': 55,
    'Pathfinder Advanced Player\'s Guide': 11,
    'Pathfinder Secrets of Magic': 134,
  })
  assert.equal(
    bestiary.filter(
      (entry) => (entry.original.data as { entryType?: string }).entryType === 'HAZARD',
    ).length,
    111,
  )
  assert.equal(bestiary.every((entry) => entry.original.source.remaster === true), true)
  assert.equal(items.every((entry) => entry.original.source.remaster === true), true)
  assert.equal(spells.every((entry) => entry.original.source.remaster === false), true)
  assert.equal(
    PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_ENTRIES.every((entry) => (
      entry.translation.status === 'MACHINE_DRAFT'
      && entry.translation.sourceTranslatableHash === entry.original.translatableHash
      && typeof entry.translation.fields.name === 'string'
      && typeof entry.translation.fields.description === 'string'
    )),
    true,
  )
  assert.equal(bestiary.filter((entry) => entry.original.image).length, 400)
  assert.equal(spells.filter((entry) => entry.original.image).length, 74)
  assert.equal(items.filter((entry) => entry.original.image).length, 89)
  assert.equal(PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_SOURCE.sourceCommit, '01114da5851f31404078d8020809b13e4000bc4b')
  assert.equal(
    PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_SOURCE.inputChecksum,
    '199d06ff02e63de15ececea0723de99cb95deb3687a384d62e6bb21a2524048f',
  )
  assert.equal(PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_SOURCE.importerVersion, 12)
  assert.equal(PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_IMPORTS.length, 1_000)
  assert.deepEqual(
    PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_IMPORTS
      .filter((entry) => entry.normalizationWarnings.length > 0)
      .map((entry) => [entry.contentId, entry.normalizationWarnings]),
    [
      [
        'pf2e:bestiary:hells-destiny-bestiary:vorrea-talminari',
        ['invalid-source-skill-omitted'],
      ],
      [
        'pf2e:item:equipment-srd:bioluminescence-bomb',
        ['incomplete-weapon-damage-omitted'],
      ],
      [
        'pf2e:item:equipment-srd:spider-satchel-lesser',
        ['incomplete-weapon-damage-omitted'],
      ],
      [
        'pf2e:item:equipment-srd:spider-satchel-moderate',
        ['incomplete-weapon-damage-omitted'],
      ],
      [
        'pf2e:item:equipment-srd:spider-satchel-greater',
        ['incomplete-weapon-damage-omitted'],
      ],
      [
        'pf2e:item:equipment-srd:spider-satchel-major',
        ['incomplete-weapon-damage-omitted'],
      ],
    ],
  )
  assert.equal(PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_COVERAGE.bestiary.translated, 400)
  assert.equal(PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_COVERAGE.spells.translated, 200)
  assert.equal(PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_COVERAGE.items.translated, 400)
  assert.equal(PATHFINDER_2E_LOST_OMENS_EXHAUSTIVE_22_COVERAGE.ready, false)
})

test('PF2e twenty-third delivery reconciles alternate packs and exhausts eligible spell and item queues', () => {
  const bestiary = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )

  assert.deepEqual([bestiary.length, spells.length, items.length], [400, 189, 171])
  assert.equal(
    bestiary.filter(
      (entry) => (entry.original.data as { entryType?: string }).entryType === 'HAZARD',
    ).length,
    101,
  )
  assert.equal(bestiary.every((entry) => entry.original.source.remaster === true), true)
  assert.equal(items.every((entry) => entry.original.source.remaster === true), true)
  assert.equal(spells.every((entry) => entry.original.source.remaster === false), true)
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_ENTRIES.every((entry) => (
      entry.translation.status === 'MACHINE_DRAFT'
      && entry.translation.sourceTranslatableHash === entry.original.translatableHash
      && typeof entry.translation.fields.name === 'string'
      && typeof entry.translation.fields.description === 'string'
    )),
    true,
  )
  assert.equal(bestiary.filter((entry) => entry.original.image).length, 400)
  assert.equal(spells.filter((entry) => entry.original.image).length, 104)
  assert.equal(items.filter((entry) => entry.original.image).length, 15)
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_SOURCE.sourceCommit,
    '01114da5851f31404078d8020809b13e4000bc4b',
  )
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_SOURCE.inputChecksum,
    'a6c6c10b27559b18b6c7ff1da37036f22f638c3c33b171850d8dc42b55fd446e',
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_SOURCE.importerVersion, 12)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_IMPORTS.length, 760)
  assert.deepEqual(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_IMPORTS
      .filter((entry) => entry.normalizationWarnings.length > 0)
      .map((entry) => [entry.contentId, entry.normalizationWarnings]),
    [
      ['pf2e:item:equipment-srd:atrophy-bomb-lesser', ['incomplete-weapon-damage-omitted']],
      ['pf2e:item:equipment-srd:atrophy-bomb-moderate', ['incomplete-weapon-damage-omitted']],
      ['pf2e:item:equipment-srd:atrophy-bomb-greater', ['incomplete-weapon-damage-omitted']],
      ['pf2e:item:equipment-srd:atrophy-bomb-major', ['incomplete-weapon-damage-omitted']],
    ],
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_COVERAGE.bestiary.translated, 400)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_COVERAGE.spells.translated, 189)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_COVERAGE.items.translated, 171)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_23_COVERAGE.ready, false)
})

test('PF2e twenty-fourth delivery exhausts Remaster bestiary and imports focus spells with stable identities', () => {
  const bestiary = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )

  assert.deepEqual([bestiary.length, spells.length, items.length], [61, 200, 400])
  assert.equal(bestiary.every((entry) => entry.original.source.remaster === true), true)
  assert.equal(spells.every((entry) => entry.original.source.remaster === true), true)
  assert.equal(items.every((entry) => entry.original.source.remaster === false), true)
  assert.equal(
    spells.every((entry) => (
      entry.original.source.sourcePack === 'spells-srd'
      && entry.original.contentId.startsWith('pf2e:spell:spells-srd:')
    )),
    true,
  )
  assert.equal(
    spells.every((entry) => {
      const defense = (entry.translation.fields as { defense?: string }).defense
      return defense === undefined || [
        'CA',
        'teste de Vontade',
        'teste de Fortitude',
        'teste de Reflexos',
        'teste básico de Vontade',
        'teste básico de Fortitude',
        'teste básico de Reflexos',
      ].includes(defense)
    }),
    true,
  )
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_ENTRIES.every((entry) => (
      entry.translation.status === 'MACHINE_DRAFT'
      && entry.translation.sourceTranslatableHash === entry.original.translatableHash
      && typeof entry.translation.fields.name === 'string'
      && typeof entry.translation.fields.description === 'string'
      && !/\[\[\/|@(?:UUID|Check|Damage|Template|item|actor)|\|(?:options|opções):[^\]]+/i
        .test(JSON.stringify({
          original: entry.original.data,
          translation: entry.translation.fields,
        }))
    )),
    true,
  )
  assert.equal(bestiary.filter((entry) => entry.original.image).length, 61)
  assert.equal(spells.filter((entry) => entry.original.image).length, 107)
  assert.equal(items.filter((entry) => entry.original.image).length, 232)
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_SOURCE.sourceCommit,
    '01114da5851f31404078d8020809b13e4000bc4b',
  )
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_SOURCE.inputChecksum,
    'cd2af90cfdbdbc6284a3d80fcf93c2a90eea27a0d94bf5a01746fd109092d017',
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_SOURCE.importerVersion, 13)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_IMPORTS.length, 661)
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_IMPORTS.every(
      (entry) => entry.status === 'NORMALIZED' && entry.normalizationWarnings.length === 0,
    ),
    true,
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_COVERAGE.bestiary.translated, 61)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_COVERAGE.spells.translated, 200)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_COVERAGE.items.translated, 400)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_24_COVERAGE.ready, false)
})

test('PF2e twenty-fifth delivery advances Legacy bestiaries and preserves focus spell identities', () => {
  const bestiary = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )
  const publicationCounts = (
    entries: readonly typeof PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_ENTRIES[number][],
  ) => Object.fromEntries(entries.reduce<Array<[string, number]>>((counts, entry) => {
    const publication = entry.original.source.publicationTitle ?? ''
    const current = counts.find(([candidate]) => candidate === publication)
    if (current) current[1] += 1
    else counts.push([publication, 1])
    return counts
  }, []))

  assert.deepEqual([bestiary.length, spells.length, items.length], [400, 200, 400])
  assert.deepEqual(publicationCounts(bestiary), {
    'Pathfinder Bestiary': 160,
    'Pathfinder Bestiary 2': 160,
    'Pathfinder Bestiary 3': 80,
  })
  assert.equal(bestiary.every((entry) => entry.original.source.remaster === false), true)
  assert.equal(spells.every((entry) => entry.original.source.remaster === true), true)
  assert.equal(items.every((entry) => entry.original.source.remaster === false), true)
  assert.equal(
    spells.every((entry) => (
      entry.original.source.sourcePack === 'spells-srd'
      && entry.original.contentId.startsWith('pf2e:spell:spells-srd:')
    )),
    true,
  )
  assert.equal(
    spells.every((entry) => {
      const defense = (entry.translation.fields as { defense?: string }).defense
      return defense === undefined || [
        'CA',
        'teste de Vontade',
        'teste de Fortitude',
        'teste de Reflexos',
        'teste básico de Vontade',
        'teste básico de Fortitude',
        'teste básico de Reflexos',
      ].includes(defense)
    }),
    true,
  )
  const translatedTechnicalActionNames = bestiary.flatMap((entry) => {
    const originalActions = (
      entry.original.data as { actions?: readonly { id: string; name: string }[] }
    ).actions ?? []
    const translatedActions = (
      entry.translation.fields as {
        actions?: Record<string, { name?: string }>
      }
    ).actions ?? {}
    return originalActions
      .filter((action) => /\b(?:Saves|AC) vs\./i.test(action.name))
      .map((action) => translatedActions[action.id]?.name ?? '')
  })
  assert.equal(translatedTechnicalActionNames.length, 125)
  assert.equal(
    translatedTechnicalActionNames.every((name) => (
      name.length > 0
      && !/\b(?:vs\.?|versus|Will Saves|salvamentos)\b/i.test(name)
    )),
    true,
  )
  assert.equal(
    translatedTechnicalActionNames.includes('+2 em testes de Vontade contra emoção'),
    true,
  )
  assert.equal(
    translatedTechnicalActionNames.includes('36 CA contra ataques não mágicos'),
    true,
  )
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_ENTRIES.every((entry) => (
      entry.translation.status === 'MACHINE_DRAFT'
      && entry.translation.sourceTranslatableHash === entry.original.translatableHash
      && typeof entry.translation.fields.name === 'string'
      && typeof entry.translation.fields.description === 'string'
      && !/\[\[\/|@(?:UUID|Check|Damage|Template|item|actor)|\|(?:options|opções):[^\]]+/i
        .test(JSON.stringify({
          original: entry.original.data,
          translation: entry.translation.fields,
        }))
    )),
    true,
  )
  assert.equal(bestiary.filter((entry) => entry.original.image).length, 400)
  assert.equal(spells.filter((entry) => entry.original.image).length, 55)
  assert.equal(items.filter((entry) => entry.original.image).length, 312)
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_SOURCE.sourceCommit,
    '01114da5851f31404078d8020809b13e4000bc4b',
  )
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_SOURCE.inputChecksum,
    '2dc6f556c2ac58c3f8f6ca1db1b974f5f56c610874a6d8b2f51342d2b51d4e3a',
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_SOURCE.importerVersion, 14)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_IMPORTS.length, 1_000)
  assert.deepEqual(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_IMPORTS
      .filter((entry) => entry.normalizationWarnings.length > 0)
      .map((entry) => [entry.contentId, entry.normalizationWarnings]),
    [
      [
        'pf2e:item:equipment-srd:cartographers-kit',
        ['missing-source-level-defaulted-to-zero'],
      ],
    ],
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_COVERAGE.bestiary.translated, 400)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_COVERAGE.spells.translated, 200)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_COVERAGE.items.translated, 400)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_25_COVERAGE.ready, false)
})

test('PF2e twenty-sixth delivery closes Remaster focus and expands Legacy content', () => {
  const bestiary = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )
  const hazards = bestiary.filter((entry) => (
    (entry.original.data as { entryType?: string }).entryType === 'HAZARD'
  ))

  assert.deepEqual([bestiary.length, spells.length, items.length], [400, 3, 400])
  assert.equal(hazards.length, 68)
  assert.equal(bestiary.every((entry) => entry.original.source.remaster === false), true)
  assert.equal(spells.every((entry) => entry.original.source.remaster === true), true)
  assert.equal(items.every((entry) => entry.original.source.remaster === false), true)
  assert.deepEqual(
    spells.map((entry) => (entry.original.data as { name: string }).name),
    ['Crown of Prophets', 'Gift of the Anemos', 'Wish Market'],
  )
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_ENTRIES.every((entry) => (
      entry.translation.status === 'MACHINE_DRAFT'
      && entry.translation.sourceTranslatableHash === entry.original.translatableHash
      && typeof entry.translation.fields.name === 'string'
      && typeof entry.translation.fields.description === 'string'
    )),
    true,
  )
  assert.equal(bestiary.filter((entry) => entry.original.image).length, 400)
  assert.equal(spells.filter((entry) => entry.original.image).length, 0)
  assert.equal(items.filter((entry) => entry.original.image).length, 227)
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_SOURCE.sourceCommit,
    '01114da5851f31404078d8020809b13e4000bc4b',
  )
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_SOURCE.inputChecksum,
    '2ee8880e451657eb2cb3dda10333f5c4ca6a30e731bf281366dc3ac912fa1ad6',
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_SOURCE.importerVersion, 14)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_IMPORTS.length, 803)
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_IMPORTS.every(
      (entry) => entry.status === 'NORMALIZED' && entry.normalizationWarnings.length === 0,
    ),
    true,
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_COVERAGE.bestiary.translated, 400)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_COVERAGE.spells.translated, 3)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_COVERAGE.items.translated, 400)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_EXHAUSTIVE_26_COVERAGE.ready, false)
})

test('PF2e twenty-seventh delivery exhausts Legacy focus and numbered AP items', () => {
  const bestiary = PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )
  const hazards = bestiary.filter((entry) => (
    (entry.original.data as { entryType?: string }).entryType === 'HAZARD'
  ))

  assert.deepEqual([bestiary.length, spells.length, items.length], [400, 105, 364])
  assert.equal(hazards.length, 75)
  assert.equal(
    PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_ENTRIES.every(
      (entry) => entry.original.source.remaster === false,
    ),
    true,
  )
  assert.equal(
    PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_ENTRIES.every((entry) => (
      entry.translation.status === 'MACHINE_DRAFT'
      && entry.translation.sourceTranslatableHash === entry.original.translatableHash
      && typeof entry.translation.fields.name === 'string'
      && typeof entry.translation.fields.description === 'string'
    )),
    true,
  )
  assert.equal(bestiary.filter((entry) => entry.original.image).length, 400)
  assert.equal(spells.filter((entry) => entry.original.image).length, 50)
  assert.equal(items.filter((entry) => entry.original.image).length, 169)
  assert.equal(
    PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_SOURCE.sourceCommit,
    '01114da5851f31404078d8020809b13e4000bc4b',
  )
  assert.equal(
    PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_SOURCE.inputChecksum,
    'a65bdc88c3d857052a4c967e9482b5d6ab82a2908d8de10ddd8987c788e0e90c',
  )
  assert.equal(PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_SOURCE.importerVersion, 14)
  assert.equal(PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_IMPORTS.length, 869)
  assert.equal(
    PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_IMPORTS.filter(
      (entry) => entry.normalizationWarnings.includes('incomplete-weapon-damage-omitted'),
    ).length,
    13,
  )
  assert.equal(PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_COVERAGE.bestiary.translated, 400)
  assert.equal(PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_COVERAGE.spells.translated, 105)
  assert.equal(PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_COVERAGE.items.translated, 364)
  assert.equal(PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_27_COVERAGE.ready, false)
})

test('PF2e twenty-eighth delivery exhausts Remaster rituals and all eligible Items', () => {
  const bestiary = PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )
  const hazards = bestiary.filter((entry) => (
    (entry.original.data as { entryType?: string }).entryType === 'HAZARD'
  ))

  assert.deepEqual([bestiary.length, spells.length, items.length], [400, 103, 155])
  assert.equal(hazards.length, 38)
  assert.equal(bestiary.every((entry) => entry.original.source.remaster === false), true)
  assert.equal(spells.every((entry) => entry.original.source.remaster === true), true)
  assert.equal(items.every((entry) => entry.original.source.remaster === false), true)
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_ENTRIES.every((entry) => (
      entry.translation.status === 'MACHINE_DRAFT'
      && entry.translation.sourceTranslatableHash === entry.original.translatableHash
      && typeof entry.translation.fields.name === 'string'
      && typeof entry.translation.fields.description === 'string'
    )),
    true,
  )
  assert.equal(bestiary.filter((entry) => entry.original.image).length, 400)
  assert.equal(spells.filter((entry) => entry.original.image).length, 36)
  assert.equal(items.filter((entry) => entry.original.image).length, 78)
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_SOURCE.sourceCommit,
    '01114da5851f31404078d8020809b13e4000bc4b',
  )
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_SOURCE.inputChecksum,
    'b13f309ca24d4b87cdf949bf7ee0bd19db7e77fb68425c4bec7aa33aa39eea29',
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_SOURCE.importerVersion, 14)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_IMPORTS.length, 658)
  assert.equal(
    PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_IMPORTS.filter(
      (entry) => entry.normalizationWarnings.includes('incomplete-weapon-damage-omitted'),
    ).length,
    11,
  )
  assert.equal(PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_COVERAGE.bestiary.translated, 400)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_COVERAGE.spells.translated, 103)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_COVERAGE.items.translated, 155)
  assert.equal(PATHFINDER_2E_CORE_REMASTER_RECONCILIATION_28_COVERAGE.ready, false)
})

test('PF2e twenty-ninth delivery exhausts Legacy rituals and advances AP bestiaries', () => {
  const bestiary = PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )
  const hazards = bestiary.filter((entry) => (
    (entry.original.data as { entryType?: string }).entryType === 'HAZARD'
  ))

  assert.deepEqual([bestiary.length, spells.length, items.length], [400, 47, 0])
  assert.equal(hazards.length, 92)
  assert.equal(
    PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_ENTRIES.every(
      (entry) => entry.original.source.remaster === false,
    ),
    true,
  )
  assert.equal(
    PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_ENTRIES.every((entry) => (
      entry.translation.status === 'MACHINE_DRAFT'
      && entry.translation.sourceTranslatableHash === entry.original.translatableHash
      && typeof entry.translation.fields.name === 'string'
      && typeof entry.translation.fields.description === 'string'
    )),
    true,
  )
  assert.equal(bestiary.filter((entry) => entry.original.image).length, 400)
  assert.equal(spells.filter((entry) => entry.original.image).length, 25)
  assert.equal(items.filter((entry) => entry.original.image).length, 0)
  assert.equal(
    PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_SOURCE.sourceCommit,
    '01114da5851f31404078d8020809b13e4000bc4b',
  )
  assert.equal(
    PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_SOURCE.inputChecksum,
    '8847faa43b2f62a41df75c085b491d225f71e4de247e3c124a7d0b2de1545f55',
  )
  assert.equal(PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_SOURCE.importerVersion, 14)
  assert.equal(PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_IMPORTS.length, 447)
  assert.equal(
    PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_IMPORTS.every(
      (entry) => entry.status === 'NORMALIZED' && entry.normalizationWarnings.length === 0,
    ),
    true,
  )
  assert.equal(PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_COVERAGE.bestiary.translated, 400)
  assert.equal(PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_COVERAGE.spells.translated, 47)
  assert.equal(PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_COVERAGE.items.translated, 0)
  assert.equal(PATHFINDER_2E_LEGACY_OGL_EXHAUSTIVE_29_COVERAGE.ready, false)
})

test('PF2e thirtieth delivery reconciles every remaining Legacy Bestiary entry', () => {
  const bestiary = PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_ENTRIES.filter(
    (entry) => entry.original.domain === 'BESTIARY',
  )
  const spells = PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_ENTRIES.filter(
    (entry) => entry.original.domain === 'SPELL',
  )
  const items = PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_ENTRIES.filter(
    (entry) => entry.original.domain === 'ITEM',
  )
  const hazards = bestiary.filter((entry) => (
    (entry.original.data as { entryType?: string }).entryType === 'HAZARD'
  ))

  assert.deepEqual([bestiary.length, spells.length, items.length], [2_070, 0, 0])
  assert.equal(hazards.length, 463)
  assert.equal(
    bestiary.every((entry) => entry.original.source.remaster === false),
    true,
  )
  assert.equal(
    bestiary.every((entry) => (
      entry.translation.status === 'MACHINE_DRAFT'
      && entry.translation.sourceTranslatableHash === entry.original.translatableHash
      && typeof entry.translation.fields.name === 'string'
      && typeof entry.translation.fields.description === 'string'
    )),
    true,
  )
  assert.equal(bestiary.filter((entry) => entry.original.image).length, 2_070)
  assert.equal(
    PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_SOURCE.sourceCommit,
    '01114da5851f31404078d8020809b13e4000bc4b',
  )
  assert.equal(
    PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_SOURCE.inputChecksum,
    '49ee3a1a2e9e8648f315b0653eca5f9bd9ed73835bd37f82b3aaf9b3b1831e3e',
  )
  assert.equal(PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_SOURCE.importerVersion, 14)
  assert.equal(PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_IMPORTS.length, 2_070)
  assert.equal(
    PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_IMPORTS.every(
      (entry) => entry.status === 'NORMALIZED' && entry.normalizationWarnings.length === 0,
    ),
    true,
  )
  assert.equal(
    PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_COVERAGE.bestiary.translated,
    2_070,
  )
  assert.equal(PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_COVERAGE.spells.translated, 0)
  assert.equal(PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_COVERAGE.items.translated, 0)
  assert.equal(PATHFINDER_2E_LEGACY_OGL_TERMINAL_RECONCILIATION_30_COVERAGE.ready, false)
})
