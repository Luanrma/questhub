import test from 'node:test'
import assert from 'node:assert/strict'
import { pathfinder2eSheetAdapter } from './adapter'
import { defaultPathfinder2eSheet } from './default-sheet'

test('pathfinder2eSheetAdapter.health.read maps hitPoints to the generic shape', () => {
  const sheet = {
    ...defaultPathfinder2eSheet,
    hitPoints: { ...defaultPathfinder2eSheet.hitPoints, current: 12, maximum: 30, temporary: 5 },
  }

  const health = pathfinder2eSheetAdapter.health?.read(sheet)

  assert.deepEqual(health, { current: 12, max: 30, temporary: 5 })
})

test('pathfinder2eSheetAdapter.health.write updates only the hit points fields', () => {
  const sheet = {
    ...defaultPathfinder2eSheet,
    hitPoints: { ...defaultPathfinder2eSheet.hitPoints, current: 12, maximum: 30, temporary: 5, wounded: 1, dying: 0, doomed: 0 },
    notes: 'ficha do jogador',
  }

  const next = pathfinder2eSheetAdapter.health?.write(sheet, { current: 4, max: 30, temporary: 0 })

  assert.deepEqual(next?.hitPoints, { current: 4, maximum: 30, temporary: 0, wounded: 1, dying: 0, doomed: 0 })
  assert.equal(next?.notes, 'ficha do jogador')
})

test('pathfinder2eSheetAdapter.movement.read maps movementMeters to the generic shape', () => {
  const sheet = {
    ...defaultPathfinder2eSheet,
    general: { ...defaultPathfinder2eSheet.general, movementMeters: 7.5 },
  }

  const movement = pathfinder2eSheetAdapter.movement?.read(sheet)

  assert.deepEqual(movement, { meters: 7.5 })
})
