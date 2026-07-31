import assert from 'node:assert/strict'
import test from 'node:test'
import {
  areaEffectBindingToActivation,
  resolveTokenActionToolBinding,
} from './area-effect-tool-binding'
import type { GameSystemToolBindingSnapshot, ToolBindingSource } from './contracts'

const defaultSource: ToolBindingSource = {
  kind: 'CATALOG_CONTENT',
  namespace: 'questhub:pathfinder_2e:spells:v1',
  id: 'spell:fireball',
}
const overrideSource: ToolBindingSource = {
  kind: 'CHARACTER_SHEET_ENTRY',
  namespace: 'questhub:character-sheet-entry',
  id: 'entry-1',
}

function binding(
  id: string,
  source: ToolBindingSource,
  configuration: unknown,
): GameSystemToolBindingSnapshot {
  return {
    id,
    toolKey: 'VTT_AREA_EFFECT',
    source,
    schemaVersion: 1,
    configuration,
    updatedAt: new Date('2026-07-31T00:00:00.000Z'),
  }
}

test('manual Area Effect target binding preserves target count and Range', () => {
  const activation = areaEffectBindingToActivation(binding('target', defaultSource, {
    template: {
      shape: 'TARGET',
      dimensions: { targetCount: 2 },
      style: { visualEffect: 'HEALING' },
    },
    minimumTargets: 1,
    maximumDistance: 9,
  }))

  assert.deepEqual(activation, {
    kind: 'TARGET_SELECTION',
    minimumTargets: 1,
    maximumTargets: 2,
    maximumDistance: 9,
    visualEffect: 'HEALING',
  })
})

test('manual Area Effect area binding preserves configured geometry', () => {
  const activation = areaEffectBindingToActivation(binding('area', defaultSource, {
    template: {
      shape: 'CIRCLE',
      originMode: 'FREE_POINT',
      placementMode: 'POINT',
      dimensions: { radius: 6 },
      propagationMode: 'BLOCKED_BY_WALLS',
      cellInclusionRule: 'CENTER_INSIDE',
      tokenIntersectionRule: 'COVERED_CELLS',
      includesOrigin: true,
      style: {
        fillColor: '#ff0000',
        borderColor: '#ffffff',
        opacity: 0.4,
      },
      visibility: 'ALL_PLAYERS',
    },
    maximumOriginDistance: 36,
  }))

  assert.equal(activation?.kind, 'AREA_PLACEMENT')
  if (activation?.kind !== 'AREA_PLACEMENT') return
  assert.equal(activation.maximumOriginDistance, 36)
  assert.equal(activation.template.shape, 'CIRCLE')
  assert.equal(activation.template.originMode, 'FREE_POINT')
  assert.deepEqual(activation.template.dimensions, { radius: 6 })
  assert.equal(activation.template.propagationMode, 'BLOCKED_BY_WALLS')
  assert.equal(activation.template.visibility, 'ALL_PLAYERS')
})

test('individual manual binding overrides campaign spell default', () => {
  const inherited = binding('default', defaultSource, {
    template: {
      shape: 'CIRCLE',
      originMode: 'FREE_POINT',
      placementMode: 'POINT',
      dimensions: { radius: 6 },
    },
  })
  const individual = binding('override', overrideSource, {
    template: {
      shape: 'CIRCLE',
      originMode: 'FREE_POINT',
      placementMode: 'POINT',
      dimensions: { radius: 9 },
    },
  })

  const resolved = resolveTokenActionToolBinding({
    bindings: [inherited, individual],
    defaultSource,
    overrideSource,
  })

  assert.equal(resolved.presentation?.effective?.id, 'override')
  assert.equal(resolved.activation?.kind, 'AREA_PLACEMENT')
  if (resolved.activation?.kind !== 'AREA_PLACEMENT') return
  assert.equal(resolved.activation.template.dimensions.radius, 9)
})
