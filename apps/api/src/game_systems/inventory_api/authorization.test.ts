import assert from 'node:assert/strict'
import test from 'node:test'
import {
  canMutateActorInventory,
  canReadActorInventory,
} from './authorization'

test('master can read and mutate any actor inventory', () => {
  assert.equal(canReadActorInventory({
    role: 'MASTER',
    memberId: 'master-member',
    controllerMemberId: null,
    hasLinkedToken: false,
  }), true)
  assert.equal(canMutateActorInventory('MASTER'), true)
})

test('player reads only the inventory of a linked token whose actor they control', () => {
  assert.equal(canReadActorInventory({
    role: 'PLAYER',
    memberId: 'player-member',
    controllerMemberId: 'player-member',
    hasLinkedToken: true,
  }), true)
  assert.equal(canReadActorInventory({
    role: 'PLAYER',
    memberId: 'player-member',
    controllerMemberId: 'player-member',
    hasLinkedToken: false,
  }), false)
  assert.equal(canReadActorInventory({
    role: 'PLAYER',
    memberId: 'player-member',
    controllerMemberId: 'other-member',
    hasLinkedToken: true,
  }), false)
})

test('player cannot mutate inventory entries', () => {
  assert.equal(canMutateActorInventory('PLAYER'), false)
})
