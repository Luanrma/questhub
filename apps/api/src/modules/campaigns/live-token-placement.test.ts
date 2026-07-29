import assert from 'node:assert/strict'
import test from 'node:test'
import { reconcileLiveTokenPlacement, type LiveTokenPlacement } from './live-token-placement'

const persistedPlacement: LiveTokenPlacement = {
  sceneId: 'scene-persisted',
  hidden: false,
  position: { x: 1, y: 2 },
  rotation: 0,
  layer: 'TOKEN',
  blocksVisionAndLight: false,
}

test('live removal overrides a stale persisted placement', () => {
  const token = { id: 'token-1', avatarUrl: '/tokens/new.png', placement: persistedPlacement }

  assert.deepEqual(reconcileLiveTokenPlacement(token, null), {
    ...token,
    placement: null,
  })
})

test('live placement overrides persisted scene and coordinates', () => {
  const token = { id: 'token-1', placement: persistedPlacement }
  const livePlacement: LiveTokenPlacement = {
    ...persistedPlacement,
    sceneId: 'scene-live',
    position: { x: 8, y: 9 },
  }

  assert.deepEqual(reconcileLiveTokenPlacement(token, livePlacement).placement, livePlacement)
})

test('persisted placement remains authoritative before live state is hydrated', () => {
  const token = { id: 'token-1', placement: persistedPlacement }

  assert.equal(reconcileLiveTokenPlacement(token, undefined), token)
})
