import assert from 'node:assert/strict'
import test from 'node:test'
import {
  createManualActorEffectSchema,
  updateActorEffectSchema,
} from './validation'

test('manual effect creation trims fields and normalizes blank optional strings', () => {
  const result = createManualActorEffectSchema.parse({
    name: '  Blessing  ',
    description: '  ',
    iconUrl: '',
    polarity: 'BENEFICIAL',
    category: '  status  ',
    displayValue: '  +1  ',
  })

  assert.equal(result.name, 'Blessing')
  assert.equal(result.description, null)
  assert.equal(result.iconUrl, null)
  assert.equal(result.category, 'status')
  assert.equal(result.displayValue, '+1')
})

test('manual effect creation rejects game-system identity and opaque state spoofing', () => {
  const result = createManualActorEffectSchema.safeParse({
    name: 'Spoofed',
    polarity: 'NEUTRAL',
    namespace: 'questhub:pathfinder_2e:effects:v1',
    definitionKey: 'frightened',
    payload: { value: 2 },
    origin: { type: 'SPELL' },
  })

  assert.equal(result.success, false)
})

test('effect update requires at least one mutable presentation field', () => {
  assert.equal(updateActorEffectSchema.safeParse({}).success, false)
  assert.equal(updateActorEffectSchema.safeParse({ displayValue: '2' }).success, true)
})

test('effect validation rejects unsupported polarity values', () => {
  assert.equal(createManualActorEffectSchema.safeParse({
    name: 'Invalid',
    polarity: 'DEBUFF',
  }).success, false)
})
