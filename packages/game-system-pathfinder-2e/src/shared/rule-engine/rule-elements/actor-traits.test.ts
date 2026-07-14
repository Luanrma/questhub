import test from 'node:test'
import assert from 'node:assert/strict'
import { createRollOptions } from '../roll-options'
import { resolveActorTraits } from './actor-traits'
import type { ActorTraitsSource } from './actor-traits'

// Real ActorTraits rule elements audited from pf2e-master/packs/spell-effects and conditions.

const INCORPOREAL: ActorTraitsSource = { key: 'ActorTraits', add: ['incorporeal'] }
const PREDICATED_MINION: ActorTraitsSource = {
  key: 'ActorTraits',
  add: ['minion'],
  predicate: ['self:mode:undead', 'self:trait:mindless'],
}

test('an ActorTraits rule without a predicate always resolves', () => {
  const { resolved, skipped } = resolveActorTraits([INCORPOREAL], createRollOptions([]))
  assert.equal(skipped.length, 0)
  assert.deepEqual(resolved, [{ add: ['incorporeal'], remove: [] }])
})

test('a predicate gates whether the traits are applied', () => {
  const withoutState = resolveActorTraits([PREDICATED_MINION], createRollOptions([]))
  assert.equal(withoutState.resolved.length, 0)
  assert.equal(withoutState.skipped[0]?.reason, 'predicate-not-satisfied')

  const withState = resolveActorTraits([PREDICATED_MINION], createRollOptions(['self:mode:undead', 'self:trait:mindless']))
  assert.deepEqual(withState.resolved, [{ add: ['minion'], remove: [] }])
})

test('remove defaults to an empty array when omitted', () => {
  const { resolved } = resolveActorTraits([{ key: 'ActorTraits', add: ['swarm'] }], createRollOptions([]))
  assert.deepEqual(resolved[0]?.remove, [])
})

test('non-ActorTraits rule elements are ignored', () => {
  const { resolved, skipped } = resolveActorTraits([{ key: 'GrantItem', uuid: 'Compendium.pf2e.conditionitems.Item.Quickened' }], createRollOptions([]))
  assert.equal(resolved.length, 0)
  assert.equal(skipped.length, 0)
})
