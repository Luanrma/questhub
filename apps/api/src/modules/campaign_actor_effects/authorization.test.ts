import assert from 'node:assert/strict'
import test from 'node:test'
import {
  canMutateActorEffects,
  canReadActorEffects,
} from './authorization'

test('master can read and mutate effects of any campaign actor', () => {
  assert.equal(canReadActorEffects({
    role: 'MASTER',
    memberId: 'master-member',
    controllerMemberId: null,
  }), true)
  assert.equal(canMutateActorEffects('MASTER'), true)
})

test('player reads only effects of actors assigned to their membership', () => {
  assert.equal(canReadActorEffects({
    role: 'PLAYER',
    memberId: 'player-member',
    controllerMemberId: 'player-member',
  }), true)
  assert.equal(canReadActorEffects({
    role: 'PLAYER',
    memberId: 'player-member',
    controllerMemberId: 'other-member',
  }), false)
  assert.equal(canReadActorEffects({
    role: 'PLAYER',
    memberId: 'player-member',
    controllerMemberId: null,
  }), false)
})

test('player cannot mutate active effects', () => {
  assert.equal(canMutateActorEffects('PLAYER'), false)
})
