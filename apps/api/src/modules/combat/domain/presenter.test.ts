import test from 'node:test'
import assert from 'node:assert/strict'
import { presentHealthForRole } from './presenter'

const health = { currentHitPoints: 10, maxHitPoints: 20, temporaryHitPoints: 0 }

test('Mestre recebe HP exato de qualquer combatente', () => {
  const forCharacter = presentHealthForRole(health, { source: 'character', hidden: false }, 'MASTER')
  const forNpc = presentHealthForRole(health, { source: 'bestiary', hidden: false }, 'MASTER')

  assert.deepEqual(forCharacter, { currentHitPoints: 10, maxHitPoints: 20, temporaryHitPoints: 0, state: 'OK' })
  assert.deepEqual(forNpc, { currentHitPoints: 10, maxHitPoints: 20, temporaryHitPoints: 0, state: 'OK' })
})

test('Jogador recebe HP exato de token de personagem', () => {
  const presented = presentHealthForRole(health, { source: 'character', hidden: false }, 'PLAYER')
  assert.deepEqual(presented, { currentHitPoints: 10, maxHitPoints: 20, temporaryHitPoints: 0, state: 'OK' })
})

test('Jogador nao recebe HP exato de NPC', () => {
  const presented = presentHealthForRole(health, { source: 'bestiary', hidden: false }, 'PLAYER')
  assert.equal((presented as { currentHitPoints?: number }).currentHitPoints, undefined)
  assert.equal(presented?.state, 'INJURED')
})

test('Token hidden nao vaza HP para jogador', () => {
  const presented = presentHealthForRole(health, { source: 'character', hidden: true }, 'PLAYER')
  assert.equal(presented, null)
})

test('Token hidden ainda mostra HP para o Mestre', () => {
  const presented = presentHealthForRole(health, { source: 'bestiary', hidden: true }, 'MASTER')
  assert.notEqual(presented, null)
})
