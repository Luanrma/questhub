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

test('PF2e content composes two pilots and fifteen exhaustive deliveries', () => {
  assert.equal(PATHFINDER_2E_BESTIARY_ENTRIES.length, 1_322)
  assert.equal(PATHFINDER_2E_SPELL_ENTRIES.length, 453)
  assert.equal(PATHFINDER_2E_ITEM_ENTRIES.length, 1_272)
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
  assert.equal(PATHFINDER_2E_CONTENT_ENTRIES.length, 3_047)

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
    { bestiary: 1_322, spells: 453, items: 1_272 },
  )
  assert.equal(
    new Set(PATHFINDER_2E_CONTENT_ENTRIES.map((entry) => entry.original.contentId)).size,
    PATHFINDER_2E_CONTENT_ENTRIES.length,
  )
  assert.equal(PATHFINDER_2E_CONTENT_ENTRIES.every((entry) => entry.translation.status !== 'NOT_STARTED'), true)
  assert.equal(PATHFINDER_2E_CONTENT_ENTRIES.filter((entry) => entry.translation.status === 'REVIEWED').length, 9)
  assert.equal(PATHFINDER_2E_CONTENT_ENTRIES.filter((entry) => entry.translation.status === 'MACHINE_DRAFT').length, 3_038)
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
