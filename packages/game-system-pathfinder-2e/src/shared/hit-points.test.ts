import test from 'node:test'
import assert from 'node:assert/strict'
import { applyMaximumHitPointsIncrease, calculateMaximumHitPoints, initializeCurrentHitPoints } from './hit-points'

test('level 1 with typical ancestry/class/constitution', () => {
  const result = calculateMaximumHitPoints({
    level: 1,
    ancestryHitPoints: 8,
    classHitPointsPerLevel: 8,
    constitutionModifier: 2,
    manualAdjustment: 0,
  })

  assert.equal(result.maximum, 18) // 8 + 1*(8+2)
})

test('level 3 with typical ancestry/class/constitution', () => {
  const result = calculateMaximumHitPoints({
    level: 3,
    ancestryHitPoints: 8,
    classHitPointsPerLevel: 8,
    constitutionModifier: 2,
    manualAdjustment: 0,
  })

  assert.equal(result.maximum, 38) // 8 + 3*(8+2)
})

test('negative constitution modifier reduces the total', () => {
  const result = calculateMaximumHitPoints({
    level: 1,
    ancestryHitPoints: 6,
    classHitPointsPerLevel: 6,
    constitutionModifier: -1,
    manualAdjustment: 0,
  })

  assert.equal(result.maximum, 11) // 6 + 1*(6-1)
})

test('positive manual adjustment adds to the total', () => {
  const result = calculateMaximumHitPoints({
    level: 1,
    ancestryHitPoints: 8,
    classHitPointsPerLevel: 8,
    constitutionModifier: 2,
    manualAdjustment: 2,
  })

  assert.equal(result.maximum, 20)
})

test('negative manual adjustment subtracts from the total', () => {
  const result = calculateMaximumHitPoints({
    level: 1,
    ancestryHitPoints: 8,
    classHitPointsPerLevel: 8,
    constitutionModifier: 2,
    manualAdjustment: -5,
  })

  assert.equal(result.maximum, 13)
})

test('maximum never drops below 1', () => {
  const result = calculateMaximumHitPoints({
    level: 20,
    ancestryHitPoints: 0,
    classHitPointsPerLevel: 0,
    constitutionModifier: -5,
    manualAdjustment: -100,
  })

  assert.equal(result.maximum, 1)
})

test('initializeCurrentHitPoints sets current to the calculated maximum on first initialization', () => {
  assert.equal(initializeCurrentHitPoints(0, 0, 18), 18)
})

test('initializeCurrentHitPoints never heals on recalculation', () => {
  assert.equal(initializeCurrentHitPoints(8, 18, 20), 8)
})

test('initializeCurrentHitPoints clamps current to a lowered maximum', () => {
  assert.equal(initializeCurrentHitPoints(25, 30, 20), 20)
})

test('applyMaximumHitPointsIncrease adds only the positive delta on level up', () => {
  assert.equal(applyMaximumHitPointsIncrease(12, 30, 40), 22)
})

test('applyMaximumHitPointsIncrease never exceeds the new maximum', () => {
  assert.equal(applyMaximumHitPointsIncrease(38, 40, 40), 38)
})
