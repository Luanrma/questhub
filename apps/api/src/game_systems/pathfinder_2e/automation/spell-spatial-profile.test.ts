import assert from 'node:assert/strict'
import test from 'node:test'
import type { Pathfinder2eCharacterSpellPresentation } from '../character-spells/domain'
import {
  projectPathfinder2eSpellActivation,
  resolvePathfinder2eSpellSpatialProfile,
} from './spell-spatial-profile'

function spell(
  overrides: Partial<Pathfinder2eCharacterSpellPresentation> = {},
): Pathfinder2eCharacterSpellPresentation {
  return {
    id: 'entry-1',
    contentId: 'pf2e:spell:test',
    baseRank: 1,
    name: 'Spell',
    description: '',
    rarity: 'common',
    traits: [],
    traditions: ['arcane'],
    castingTime: '2 actions',
    range: '30 feet',
    target: '1 creature',
    area: null,
    duration: 'instantaneous',
    defense: null,
    damage: [],
    heightening: '',
    imageUrl: null,
    createdAt: new Date('2026-07-31T00:00:00.000Z'),
    ...overrides,
  }
}

test('PF2e infers bounded target selection from target and range text', () => {
  const profile = resolvePathfinder2eSpellSpatialProfile(spell({
    target: '1 or 2 creatures',
    range: '30 feet',
    traits: ['electricity'],
  }))

  assert.equal(profile.status, 'RESOLVED')
  if (profile.status !== 'RESOLVED') return
  assert.deepEqual(profile.modes[0]?.activation, {
    kind: 'TARGET_SELECTION',
    minimumTargets: 1,
    maximumTargets: 2,
    maximumDistance: 9,
    visualEffect: 'ELECTRIC',
  })
})

test('PF2e maps burst, emanation, cone and line text to neutral area geometry', () => {
  const burst = projectPathfinder2eSpellActivation(spell({
    area: '20-foot burst',
    range: '30 feet',
  }))
  assert.deepEqual(burst, {
    kind: 'AREA_PLACEMENT',
    maximumOriginDistance: 9,
    template: {
      shape: 'CIRCLE',
      originMode: 'FREE_POINT',
      placementMode: 'POINT',
      dimensions: { radius: 6 },
    },
  })

  const emanation = projectPathfinder2eSpellActivation(spell({
    area: '30-foot emanation',
    range: 'varies',
    traits: ['healing'],
  }))
  assert.deepEqual(emanation, {
    kind: 'AREA_PLACEMENT',
    template: {
      shape: 'CIRCLE',
      originMode: 'SOURCE_TOKEN',
      placementMode: 'POINT',
      dimensions: { radius: 9 },
      visualEffect: 'HEALING',
    },
  })

  const cone = projectPathfinder2eSpellActivation(spell({ area: '30-foot cone' }))
  assert.deepEqual(cone, {
    kind: 'AREA_PLACEMENT',
    template: {
      shape: 'CONE',
      originMode: 'SOURCE_TOKEN',
      placementMode: 'DIRECTIONAL',
      dimensions: { length: 9, endWidth: 9 },
    },
  })

  const line = projectPathfinder2eSpellActivation(spell({ area: '60-foot line' }))
  assert.deepEqual(line, {
    kind: 'AREA_PLACEMENT',
    template: {
      shape: 'LINE',
      originMode: 'SOURCE_TOKEN',
      placementMode: 'DIRECTIONAL',
      dimensions: { length: 18, width: 1.5 },
    },
  })
})

test('PF2e uses explicit variants for spells whose spatial behavior changes by actions', () => {
  const activation = projectPathfinder2eSpellActivation(spell({
    contentId: 'pf2e:spell:spells-srd:heal',
    name: 'Heal',
    range: 'varies',
    target: '1 willing living creature, 1 undead, or all living and undead creatures in a 30-foot emanation',
    area: '30-foot emanation with 3 actions',
    traits: ['healing', 'vitality'],
    damage: [{ formula: '1d8', type: 'vitality', kind: 'damage-or-healing' }],
  }))

  assert.equal(activation?.kind, 'VARIANTS')
  if (activation?.kind !== 'VARIANTS') return
  assert.deepEqual(activation.variants.map((variant) => variant.id), [
    'one-action',
    'two-actions',
    'three-actions',
  ])
  assert.equal(activation.variants[2]?.activation.kind, 'AREA_PLACEMENT')
})

test('PF2e does not invent geometry for ambiguous target text', () => {
  const profile = resolvePathfinder2eSpellSpatialProfile(spell({
    range: '120 feet',
    target: '1 creature per shard',
    area: null,
  }))

  assert.deepEqual(profile, {
    status: 'UNRESOLVED',
    reason: 'Os textos de alcance, alvo e área não formam um perfil espacial determinístico.',
  })
  assert.equal(projectPathfinder2eSpellActivation(spell({ target: '1 creature per shard' })), undefined)
})
