import assert from 'node:assert/strict'
import test from 'node:test'
import type { Pathfinder2eSpellDefinition } from '../spells'
import { resolvePathfinder2eSpellResolutionProfile } from './resolution-profile'

function spell(overrides: Partial<Pathfinder2eSpellDefinition> = {}): Pathfinder2eSpellDefinition {
  return {
    id: 'pf2e.spell.test', name: 'Teste', kind: 'SPELL', rank: 1, rarity: 'COMMON', traits: [], traditions: ['ARCANE'],
    casting: { time: { kind: 'ACTIONS', actions: 2 } },
    targeting: { range: { kind: 'DISTANCE', feet: 30 }, area: null },
    duration: { text: '', sustained: false },
    defense: { kind: 'SAVE', statistic: 'REFLEX', basic: true },
    damage: [{ id: 'base', formula: '2d6', damageType: 'fire', kind: 'DAMAGE', applyAbilityModifier: false }],
    heightening: { kind: 'NONE' }, counteraction: false, ritual: null, description: '',
    automation: { status: 'SUPPORTED', reasons: [] },
    source: { provider: 'PAIZO', sourceId: 'test', remaster: true },
    ...overrides,
  }
}

test('resolve dano de salvamento basico pelo contrato canonico', () => {
  assert.deepEqual(resolvePathfinder2eSpellResolutionProfile(spell()), {
    kind: 'basicSaveDamage', formula: { kind: 'dice', count: 2, sides: 6, bonus: 0 }, damageType: 'fire', statistic: 'reflex',
  })
})

test('aplica heightening intervalar canonico', () => {
  const result = resolvePathfinder2eSpellResolutionProfile(spell({
    heightening: { kind: 'INTERVAL', everyRanks: 1, damage: { base: '1d6' } },
  }), { effectiveRank: 3 })
  assert.deepEqual(result, {
    kind: 'basicSaveDamage', formula: { kind: 'dice', count: 4, sides: 6, bonus: 0 }, damageType: 'fire', statistic: 'reflex',
  })
})

test('nao automatiza perfil sem salvamento basico ou com componentes multiplos', () => {
  assert.deepEqual(resolvePathfinder2eSpellResolutionProfile(spell({ defense: { kind: 'NONE' } })), { kind: 'none' })
  assert.deepEqual(resolvePathfinder2eSpellResolutionProfile(spell({ damage: [] })), { kind: 'none' })
})
