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
    armorClass: 10.5,
  })

  assert.equal(parsed.success, false)
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
  })

  assert.equal(parsed.success, true)
})
