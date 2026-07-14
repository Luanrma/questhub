import test from 'node:test'
import assert from 'node:assert/strict'
import { DEFAULT_PATHFINDER_2E_CHARACTER_ACTIVE_EFFECTS, pathfinder2eCharacterActiveEffectsSchema } from './models'
import { pathfinder2eCharacterActiveEffectsAdapter } from './index'

test('default active effects data validates against the schema', () => {
  const result = pathfinder2eCharacterActiveEffectsSchema.safeParse(DEFAULT_PATHFINDER_2E_CHARACTER_ACTIVE_EFFECTS)
  assert.equal(result.success, true)
})

test('adapter exposes the expected system identity', () => {
  assert.equal(pathfinder2eCharacterActiveEffectsAdapter.system, 'PATHFINDER_2E')
  assert.equal(pathfinder2eCharacterActiveEffectsAdapter.dataKey, 'pathfinder2e')
  assert.equal(pathfinder2eCharacterActiveEffectsAdapter.version, 1)
})

test('accepts an effect with a FlatModifier rule element', () => {
  const result = pathfinder2eCharacterActiveEffectsSchema.safeParse({
    effects: [
      {
        id: 'effect-1',
        label: 'Shield (magia)',
        rules: [{ key: 'FlatModifier', selector: 'ac', type: 'circumstance', value: 2 }],
      },
    ],
  })
  assert.equal(result.success, true)
})

test('accepts an effect with no rule elements', () => {
  const result = pathfinder2eCharacterActiveEffectsSchema.safeParse({
    effects: [{ id: 'effect-1', label: 'Cobertura improvisada', rules: [] }],
  })
  assert.equal(result.success, true)
})

test('rejects a rule element without a key', () => {
  const result = pathfinder2eCharacterActiveEffectsSchema.safeParse({
    effects: [{ id: 'effect-1', label: 'Efeito invalido', rules: [{ selector: 'ac', value: 2 }] }],
  })
  assert.equal(result.success, false)
})

test('rejects an effect without a label', () => {
  const result = pathfinder2eCharacterActiveEffectsSchema.safeParse({
    effects: [{ id: 'effect-1', label: '', rules: [] }],
  })
  assert.equal(result.success, false)
})

test('rejects unknown extra fields on the effect (strict)', () => {
  const result = pathfinder2eCharacterActiveEffectsSchema.safeParse({
    effects: [{ id: 'effect-1', label: 'x', rules: [], extra: true }],
  })
  assert.equal(result.success, false)
})

test('rejects unknown extra fields at the top level (strict)', () => {
  const result = pathfinder2eCharacterActiveEffectsSchema.safeParse({ effects: [], unexpectedField: true })
  assert.equal(result.success, false)
})
