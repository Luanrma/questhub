import test from 'node:test'
import assert from 'node:assert/strict'
import { buildPathfinder2eSuggestedSlots, getPathfinder2eCasterClassProfile } from './spellcasting-suggestion'

test('resolves a caster profile from the catalog id form', () => {
  const profile = getPathfinder2eCasterClassProfile('pf2e:class:wizard')
  assert.equal(profile?.classSlug, 'wizard')
  assert.equal(profile?.tradition, 'arcane')
  assert.equal(profile?.category, 'PREPARED')
  assert.equal(profile?.ability, 'int')
})

test('non-caster classes have no profile', () => {
  assert.equal(getPathfinder2eCasterClassProfile('pf2e:class:fighter'), null)
  assert.equal(getPathfinder2eCasterClassProfile(null), null)
})

test('sorcerer requires a tradition choice instead of guessing one', () => {
  const profile = getPathfinder2eCasterClassProfile('sorcerer')
  assert.equal(profile?.tradition, null)
  assert.equal(profile?.category, 'SPONTANEOUS')
  assert.equal(profile?.ability, 'cha')
})

test('level 1 three-slot caster gets 5 cantrips and two rank-1 slots (table E.1)', () => {
  assert.deepEqual(buildPathfinder2eSuggestedSlots('three', 1), [
    { rank: 0, max: 5 },
    { rank: 1, max: 2 },
  ])
})

test('level 4 three-slot caster has 3 slots at ranks 1 and 2 (table E.1)', () => {
  assert.deepEqual(buildPathfinder2eSuggestedSlots('three', 4), [
    { rank: 0, max: 5 },
    { rank: 1, max: 3 },
    { rank: 2, max: 3 },
  ])
})

test('level 5 three-slot caster unlocks rank 3 with 2 slots (table E.1)', () => {
  const slots = buildPathfinder2eSuggestedSlots('three', 5)
  assert.deepEqual(slots[slots.length - 1], { rank: 3, max: 2 })
})

test('four-slot caster (sorcerer/oracle) unlocks with 3 and caps at 4 (table E.2)', () => {
  assert.deepEqual(buildPathfinder2eSuggestedSlots('four', 1), [
    { rank: 0, max: 5 },
    { rank: 1, max: 3 },
  ])
  assert.deepEqual(buildPathfinder2eSuggestedSlots('four', 5), [
    { rank: 0, max: 5 },
    { rank: 1, max: 4 },
    { rank: 2, max: 4 },
    { rank: 3, max: 3 },
  ])
})

test('psychic unlocks each rank with 1 slot, caps at 2, with 3 chosen cantrips (table E.3)', () => {
  assert.deepEqual(buildPathfinder2eSuggestedSlots('psychic', 1), [
    { rank: 0, max: 3 },
    { rank: 1, max: 1 },
  ])
  assert.deepEqual(buildPathfinder2eSuggestedSlots('psychic', 5), [
    { rank: 0, max: 3 },
    { rank: 1, max: 2 },
    { rank: 2, max: 2 },
    { rank: 3, max: 1 },
  ])
})

test('sorcerer and oracle use the four-slot progression', () => {
  assert.equal(getPathfinder2eCasterClassProfile('sorcerer')?.slotProgression, 'four')
  assert.equal(getPathfinder2eCasterClassProfile('oracle')?.slotProgression, 'four')
  assert.equal(getPathfinder2eCasterClassProfile('bard')?.slotProgression, 'three')
})

test('level 19 adds the single rank-10 slot', () => {
  const slots = buildPathfinder2eSuggestedSlots('three', 19)
  assert.deepEqual(slots[slots.length - 1], { rank: 10, max: 1 })
})

test('bounded casters (null progression) get no suggested table', () => {
  assert.deepEqual(buildPathfinder2eSuggestedSlots(null, 10), [])
})
