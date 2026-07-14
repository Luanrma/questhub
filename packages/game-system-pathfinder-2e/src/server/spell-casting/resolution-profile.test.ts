import assert from 'node:assert/strict'
import test from 'node:test'
import { resolvePathfinder2eSpellResolutionProfile } from './resolution-profile'
import type { Pathfinder2eSpellDamageComponent, Pathfinder2eSpellDefinition } from '../spells/models'

function buildSpell(overrides: Partial<Pathfinder2eSpellDefinition>): Pathfinder2eSpellDefinition {
  return {
    id: 'test-spell',
    source: { pack: 'spells', id: 'test-spell', remaster: true },
    name: 'Test Spell',
    category: 'spell',
    rank: 3,
    rarity: 'common',
    traits: [],
    traditions: [],
    time: '2',
    area: null,
    duration: { value: '', sustained: false },
    defense: null,
    damage: {},
    heightening: null,
    overlays: [],
    counteraction: false,
    ritual: null,
    rules: [],
    description: { raw: '', nodes: [] },
    dependencyIds: [],
    ...overrides,
  }
}

function damageComponent(overrides: Partial<Pathfinder2eSpellDamageComponent>): Pathfinder2eSpellDamageComponent {
  return { formula: '6d6', type: 'fire', kinds: ['damage'], category: null, applyMod: false, materials: [], ...overrides }
}

test('missing spell definition resolves to none', () => {
  assert.deepEqual(resolvePathfinder2eSpellResolutionProfile(null), { kind: 'none' })
})

test('no defense at all resolves to none', () => {
  const spell = buildSpell({ damage: { base: damageComponent({}) } })
  assert.deepEqual(resolvePathfinder2eSpellResolutionProfile(spell), { kind: 'none' })
})

test('non-basic save resolves to none (fireball-shaped happy path excluded on purpose when basic:false)', () => {
  const spell = buildSpell({
    defense: { save: { statistic: 'reflex', basic: false } },
    damage: { base: damageComponent({}) },
  })
  assert.deepEqual(resolvePathfinder2eSpellResolutionProfile(spell), { kind: 'none' })
})

test('basic save with no damage component resolves to none', () => {
  const spell = buildSpell({ defense: { save: { statistic: 'reflex', basic: true } }, damage: {} })
  assert.deepEqual(resolvePathfinder2eSpellResolutionProfile(spell), { kind: 'none' })
})

test('basic save with more than one damage component resolves to none (composite damage deferred)', () => {
  const spell = buildSpell({
    defense: { save: { statistic: 'reflex', basic: true } },
    damage: { fire: damageComponent({ type: 'fire' }), cold: damageComponent({ type: 'cold' }) },
  })
  assert.deepEqual(resolvePathfinder2eSpellResolutionProfile(spell), { kind: 'none' })
})

test('basic save with a healing-only component resolves to none', () => {
  const spell = buildSpell({
    defense: { save: { statistic: 'reflex', basic: true } },
    damage: { base: damageComponent({ kinds: ['healing'] }) },
  })
  assert.deepEqual(resolvePathfinder2eSpellResolutionProfile(spell), { kind: 'none' })
})

test('basic save with an unparseable formula resolves to none, never guessed', () => {
  const spell = buildSpell({
    defense: { save: { statistic: 'reflex', basic: true } },
    damage: { base: damageComponent({ formula: '@item.rank' }) },
  })
  assert.deepEqual(resolvePathfinder2eSpellResolutionProfile(spell), { kind: 'none' })
})

test('the real fireball shape resolves to a supported basic-save-damage profile', () => {
  const spell = buildSpell({
    defense: { save: { statistic: 'reflex', basic: true } },
    damage: { base: damageComponent({ formula: '6d6', type: 'fire', kinds: ['damage'] }) },
  })
  assert.deepEqual(resolvePathfinder2eSpellResolutionProfile(spell), {
    kind: 'basicSaveDamage',
    formula: { kind: 'dice', count: 6, sides: 6, bonus: 0 },
    damageType: 'fire',
    statistic: 'reflex',
  })
})

test('interval heightening adds damage once per effective rank interval', () => {
  const spell = buildSpell({
    rank: 3,
    defense: { save: { statistic: 'reflex', basic: true } },
    damage: { base: damageComponent({ formula: '6d6', type: 'fire', kinds: ['damage'] }) },
    heightening: { type: 'interval', interval: 1, damage: { base: '2d6' } },
  })

  assert.deepEqual(resolvePathfinder2eSpellResolutionProfile(spell, { effectiveRank: 5 }), {
    kind: 'basicSaveDamage',
    formula: { kind: 'dice', count: 10, sides: 6, bonus: 0 },
    damageType: 'fire',
    statistic: 'reflex',
  })
})

test('fixed heightening keeps the base formula in this conservative slice', () => {
  const spell = buildSpell({
    rank: 1,
    defense: { save: { statistic: 'will', basic: true } },
    damage: { base: damageComponent({ formula: '2d6', type: 'mental', kinds: ['damage'] }) },
    heightening: {
      type: 'fixed',
      levels: {
        '3': { damage: { base: '1d6' } },
        '5': { damage: { base: '2d6' } },
      },
    },
  })

  assert.deepEqual(resolvePathfinder2eSpellResolutionProfile(spell, { effectiveRank: 5 }), {
    kind: 'basicSaveDamage',
    formula: { kind: 'dice', count: 2, sides: 6, bonus: 0 },
    damageType: 'mental',
    statistic: 'will',
  })
})

test('unparseable heightening keeps the base supported formula', () => {
  const spell = buildSpell({
    rank: 1,
    defense: { save: { statistic: 'reflex', basic: true } },
    damage: { base: damageComponent({ formula: '2d4', type: 'electricity', kinds: ['damage'] }) },
    heightening: { type: 'interval', interval: 1, damage: { base: '@item.rank' } },
  })

  assert.deepEqual(resolvePathfinder2eSpellResolutionProfile(spell, { effectiveRank: 3 }), {
    kind: 'basicSaveDamage',
    formula: { kind: 'dice', count: 2, sides: 4, bonus: 0 },
    damageType: 'electricity',
    statistic: 'reflex',
  })
})
