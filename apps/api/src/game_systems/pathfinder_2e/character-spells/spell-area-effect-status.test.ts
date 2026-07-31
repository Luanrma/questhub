import assert from 'node:assert/strict'
import test from 'node:test'
import type {
  GameSystemToolBindingSnapshot,
  ToolBindingSource,
} from '../../automation/contracts'
import { resolvePathfinder2eSpellAreaEffectStatus } from './spell-area-effect-status'

const catalogSource: ToolBindingSource = {
  kind: 'CATALOG_CONTENT',
  namespace: 'questhub:pathfinder_2e:spells:v1',
  id: 'spell-1',
}

function binding(
  source: ToolBindingSource,
  configuration: unknown,
): GameSystemToolBindingSnapshot {
  return {
    id: 'binding-1',
    toolKey: 'VTT_AREA_EFFECT',
    source,
    schemaVersion: 1,
    configuration,
    updatedAt: new Date('2026-07-31T00:00:00.000Z'),
  }
}

test('spell status ignores a stored binding that cannot produce an activation', () => {
  const status = resolvePathfinder2eSpellAreaEffectStatus({
    entryId: 'entry-1',
    contentId: 'spell-1',
    bindings: [binding(catalogSource, {
      template: {
        shape: 'CIRCLE',
        originMode: 'TARGET_TOKEN',
        placementMode: 'POINT',
        dimensions: { radius: 3 },
      },
    })],
  })

  assert.equal(status, 'NONE')
})

test('spell status follows the same executable binding used by Encounter actions', () => {
  const status = resolvePathfinder2eSpellAreaEffectStatus({
    entryId: 'entry-1',
    contentId: 'spell-1',
    bindings: [binding(catalogSource, {
      template: {
        shape: 'CIRCLE',
        originMode: 'FREE_POINT',
        placementMode: 'POINT',
        dimensions: { radius: 3 },
      },
    })],
  })

  assert.equal(status, 'INHERITED')
})
