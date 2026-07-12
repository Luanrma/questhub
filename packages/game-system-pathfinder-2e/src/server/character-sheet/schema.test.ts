import test from 'node:test'
import assert from 'node:assert/strict'
import { PROFICIENCY_RANKS } from './constants'
import { defaultPathfinder2eSheet } from './default-sheet'
import { pathfinder2eSheetSchema } from './schema'

test('pathfinder2eSheetSchema accepts the default sheet', () => {
  const parsed = pathfinder2eSheetSchema.safeParse(defaultPathfinder2eSheet)

  assert.equal(parsed.success, true)
})

test('pathfinder2eSheetSchema rejects decimal numbers', () => {
  const parsed = pathfinder2eSheetSchema.safeParse({
    ...defaultPathfinder2eSheet,
    armorClass: { manualAdjustment: 10.5 },
  })

  assert.equal(parsed.success, false)
})

test('pathfinder2eSheetSchema accepts negative armor class manual adjustment', () => {
  const parsed = pathfinder2eSheetSchema.safeParse({
    ...defaultPathfinder2eSheet,
    armorClass: { manualAdjustment: -2 },
  })

  assert.equal(parsed.success, true)
})

test('pathfinder2eSheetSchema accepts negative hit points manual adjustment', () => {
  const parsed = pathfinder2eSheetSchema.safeParse({
    ...defaultPathfinder2eSheet,
    hitPoints: { ...defaultPathfinder2eSheet.hitPoints, manualAdjustment: -3 },
  })

  assert.equal(parsed.success, true)
})

test('pathfinder2eSheetSchema rejects decimal hit points manual adjustment', () => {
  const parsed = pathfinder2eSheetSchema.safeParse({
    ...defaultPathfinder2eSheet,
    hitPoints: { ...defaultPathfinder2eSheet.hitPoints, manualAdjustment: 1.5 },
  })

  assert.equal(parsed.success, false)
})

test('pathfinder2eSheetSchema defaults hit points manual adjustment to 0 for legacy sheets without it', () => {
  const { manualAdjustment: _legacyManualAdjustment, ...legacyHitPoints } = defaultPathfinder2eSheet.hitPoints
  const parsed = pathfinder2eSheetSchema.safeParse({
    ...defaultPathfinder2eSheet,
    hitPoints: legacyHitPoints,
  })

  assert.equal(parsed.success, true)
  if (parsed.success) assert.equal(parsed.data.hitPoints.manualAdjustment, 0)
})

test('pathfinder2eSheetSchema rejects unsupported armor proficiency ranks', () => {
  const parsed = pathfinder2eSheetSchema.safeParse({
    ...defaultPathfinder2eSheet,
    armorProficiencies: {
      ...defaultPathfinder2eSheet.armorProficiencies,
      medium: 3,
    },
  })

  assert.equal(parsed.success, false)
})

test('pathfinder2eSheetSchema accepts decimal movement', () => {
  const parsed = pathfinder2eSheetSchema.safeParse({
    ...defaultPathfinder2eSheet,
    general: {
      ...defaultPathfinder2eSheet.general,
      movementMeters: 7.5,
    },
  })

  assert.equal(parsed.success, true)
})

test('pathfinder2eSheetSchema rejects unsupported proficiency ranks', () => {
  const parsed = pathfinder2eSheetSchema.safeParse({
    ...defaultPathfinder2eSheet,
    perception: {
      rank: 3,
      value: 7,
    },
  })

  assert.equal(parsed.success, false)
})

test('pathfinder2eSheetSchema accepts numeric proficiency ranks and manual final values', () => {
  const parsed = pathfinder2eSheetSchema.safeParse({
    ...defaultPathfinder2eSheet,
    perception: {
      rank: PROFICIENCY_RANKS.EXPERT,
      value: 12,
    },
    savingThrows: {
      ...defaultPathfinder2eSheet.savingThrows,
      fortitude: {
        rank: PROFICIENCY_RANKS.TRAINED,
        value: 8,
      },
    },
    skills: {
      ...defaultPathfinder2eSheet.skills,
      acrobatics: {
        rank: PROFICIENCY_RANKS.LEGENDARY,
        value: 18,
      },
    },
  })

  assert.equal(parsed.success, true)
})

test('pathfinder2eSheetSchema rejects unsupported skill proficiency ranks', () => {
  const parsed = pathfinder2eSheetSchema.safeParse({
    ...defaultPathfinder2eSheet,
    skills: {
      ...defaultPathfinder2eSheet.skills,
      arcana: {
        rank: 3,
        value: 7,
      },
    },
  })

  assert.equal(parsed.success, false)
})
