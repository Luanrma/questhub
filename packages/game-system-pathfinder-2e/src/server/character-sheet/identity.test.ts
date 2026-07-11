import assert from 'node:assert/strict'
import { test } from 'node:test'
import { isPathfinder2eIdentityComplete, hasPathfinder2eIdentityChanged } from './identity'

function sheet(identity: Record<string, unknown>) {
  return {
    system: 'PATHFINDER_2E',
    version: 2,
    data: {
      pathfinder2e: {
        identity,
      },
    },
  }
}

test('isPathfinder2eIdentityComplete requires class, ancestry, heritage, and background', () => {
  assert.equal(isPathfinder2eIdentityComplete(sheet({
    level: 1,
    class: { source: 'catalog', id: 'fighter', name: 'Fighter' },
    ancestry: { source: 'catalog', id: 'human', name: 'Human' },
    heritage: { source: 'custom', name: 'Versatile Human' },
    background: { source: 'catalog', id: 'acolyte', name: 'Acolyte' },
  })), true)

  assert.equal(isPathfinder2eIdentityComplete(sheet({
    level: 1,
    class: { source: 'catalog', id: 'fighter', name: 'Fighter' },
    ancestry: { source: 'catalog', id: 'human', name: 'Human' },
    heritage: null,
    background: { source: 'catalog', id: 'acolyte', name: 'Acolyte' },
  })), false)
})

test('hasPathfinder2eIdentityChanged detects identity changes and ignores equivalent custom casing', () => {
  const previous = sheet({
    level: 1,
    class: { source: 'custom', name: 'Fighter' },
    ancestry: { source: 'catalog', id: 'human', name: 'Human' },
    heritage: { source: 'custom', name: 'Versatile Human' },
    background: { source: 'catalog', id: 'acolyte', name: 'Acolyte' },
  })

  assert.equal(hasPathfinder2eIdentityChanged(previous, sheet({
    level: 1,
    class: { source: 'custom', name: ' fighter ' },
    ancestry: { source: 'catalog', id: 'human', name: 'Human' },
    heritage: { source: 'custom', name: 'Versatile Human' },
    background: { source: 'catalog', id: 'acolyte', name: 'Acolyte' },
  })), false)

  assert.equal(hasPathfinder2eIdentityChanged(previous, sheet({
    level: 1,
    class: { source: 'custom', name: 'Wizard' },
    ancestry: { source: 'catalog', id: 'human', name: 'Human' },
    heritage: { source: 'custom', name: 'Versatile Human' },
    background: { source: 'catalog', id: 'acolyte', name: 'Acolyte' },
  })), true)
})
