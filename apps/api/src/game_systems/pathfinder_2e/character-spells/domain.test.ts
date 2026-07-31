import assert from 'node:assert/strict'
import test from 'node:test'
import { resolvePathfinder2eContentEntry } from '../content_catalog/catalog'
import { PATHFINDER_2E_CONTENT_ENTRIES } from '../content_catalog/deliveries'
import {
  createPathfinder2eCharacterSpellSnapshot,
  listPathfinder2eSpellCatalog,
  presentPathfinder2eCharacterSpell,
} from './domain'

function findSpellByRank(rank: number) {
  return PATHFINDER_2E_CONTENT_ENTRIES.find((entry) => (
    entry.original.domain === 'SPELL'
    && (entry.original.data as { rank?: unknown }).rank === rank
  ))
}

test('character spell snapshot derives Rank from the canonical PF2e catalog', () => {
  const cantrip = PATHFINDER_2E_CONTENT_ENTRIES.find((entry) => (
    entry.original.domain === 'SPELL'
    && (entry.original.data as { traits?: unknown }).traits instanceof Array
    && (entry.original.data as { traits: unknown[] }).traits.includes('cantrip')
  ))
  const rankTen = findSpellByRank(10)
  assert.ok(cantrip)
  assert.ok(rankTen)

  const cantripSnapshot = createPathfinder2eCharacterSpellSnapshot(cantrip.original.contentId)
  const rankTenSnapshot = createPathfinder2eCharacterSpellSnapshot(rankTen.original.contentId)

  assert.equal(cantripSnapshot?.baseRank, 1)
  assert.equal(cantripSnapshot?.data.traits.includes('cantrip'), true)
  assert.equal(rankTenSnapshot?.baseRank, 10)
  assert.equal(cantripSnapshot?.catalogContentId, cantrip.original.contentId)
})

test('character spell snapshot rejects unknown or non-spell content', () => {
  const nonSpell = PATHFINDER_2E_CONTENT_ENTRIES.find(
    (entry) => entry.original.domain !== 'SPELL',
  )
  assert.ok(nonSpell)

  assert.equal(createPathfinder2eCharacterSpellSnapshot('missing-content'), null)
  assert.equal(createPathfinder2eCharacterSpellSnapshot(nonSpell.original.contentId), null)
})

test('spell catalog filters by Rank and marks definitions already linked', () => {
  const spell = findSpellByRank(1)
  assert.ok(spell)

  const result = listPathfinder2eSpellCatalog({
    locale: 'pt-BR',
    rank: 1,
    linkedContentIds: new Set([spell.original.contentId]),
    page: 1,
    limit: 60,
  })

  assert.equal(result.entries.every((entry) => entry.rank === 1), true)
  assert.equal(
    result.entries.find((entry) => entry.contentId === spell.original.contentId)?.linked,
    true,
  )
})

test('linked spell presentation localizes display without changing canonical snapshot', () => {
  const spell = findSpellByRank(1)
  assert.ok(spell)
  const snapshot = createPathfinder2eCharacterSpellSnapshot(spell.original.contentId)
  assert.ok(snapshot)

  const presented = presentPathfinder2eCharacterSpell({
    id: 'linked-spell-1',
    catalogContentId: snapshot.catalogContentId,
    baseRank: snapshot.baseRank,
    data: snapshot.data,
    createdAt: new Date('2026-07-30T12:00:00.000Z'),
  }, 'pt-BR')
  const resolved = resolvePathfinder2eContentEntry(spell, 'pt-BR')

  assert.equal(presented?.name, resolved.display.name)
  assert.equal(presented?.description, resolved.display.description)
  assert.equal(snapshot.data.name, (spell.original.data as { name: string }).name)
})
