import assert from 'node:assert/strict'
import test from 'node:test'
import {
  normalizeTargetMarkerStyle,
  normalizeTokenSelectionRectangle,
  tokenIdsForContextAction,
  tokenIdsIntersectingSelectionRectangle,
  toggleTargetsForSelection,
  translateTokenSelection,
} from '../src/vtt/table/domain/tokenSelection'
import type { VttPlayerToken } from '../src/vtt/table/domain/types'

function token(id: string, x: number, y: number, size = 1): VttPlayerToken {
  return {
    id,
    actorId: null,
    name: id,
    avatarUrl: null,
    color: null,
    size,
    ownerUserId: null,
    ownerName: null,
    controllerMemberId: null,
    controllerUserId: null,
    role: 'GENERIC',
    canCustomizeAppearance: false,
    hidden: false,
    rotation: 0,
    layer: 'TOKEN',
    visionConfig: null,
    lightConfig: null,
    blocksVisionAndLight: false,
    position: { x, y },
  }
}

test('normalizes a selection rectangle dragged in any direction', () => {
  assert.deepEqual(
    normalizeTokenSelectionRectangle({ start: { x: 120, y: 90 }, end: { x: 20, y: 30 } }),
    { left: 20, top: 30, right: 120, bottom: 90, width: 100, height: 60 },
  )
})

test('selects every token whose rendered bounds intersect the marquee', () => {
  const tokens = [
    token('inside', 1.5, 1.5),
    token('large-edge', 3, 1.5, 2),
    token('outside', 6, 6),
  ]

  assert.deepEqual(
    tokenIdsIntersectingSelectionRectangle(
      tokens,
      { start: { x: 50, y: 50 }, end: { x: 125, y: 125 } },
      50,
      { x: 0, y: 0 },
    ),
    ['inside', 'large-edge'],
  )
})

test('accounts for the rendered grid offset', () => {
  assert.deepEqual(
    tokenIdsIntersectingSelectionRectangle(
      [token('offset-token', 0.5, 0.5)],
      { start: { x: 95, y: 35 }, end: { x: 145, y: 85 } },
      50,
      { x: 90, y: 30 },
    ),
    ['offset-token'],
  )
})

test('targets the whole selection and clears it when every selected token is already targeted', () => {
  assert.deepEqual(
    toggleTargetsForSelection(['existing'], ['first', 'second']),
    ['existing', 'first', 'second'],
  )
  assert.deepEqual(
    toggleTargetsForSelection(['existing', 'first', 'second'], ['first', 'second']),
    ['existing'],
  )
})

test('uses the operational selection as context action scope only for one of its members', () => {
  assert.deepEqual(tokenIdsForContextAction('selected-2', ['selected-1', 'selected-2']), ['selected-1', 'selected-2'])
  assert.deepEqual(tokenIdsForContextAction('outside', ['selected-1', 'selected-2']), ['outside'])
})

test('normalizes unsupported target marker styles to the default arrows layout', () => {
  assert.equal(normalizeTargetMarkerStyle('RETICLE'), 'RETICLE')
  assert.equal(normalizeTargetMarkerStyle('ARROWS'), 'ARROWS')
  assert.equal(normalizeTargetMarkerStyle('CIRCLE'), 'ARROWS')
})

test('translates every selected token by the source token movement delta', () => {
  const tokens = [
    token('first', 2, 3),
    token('dragged', 5, 7),
    token('third', 9, 1),
  ]

  assert.deepEqual(
    translateTokenSelection(tokens, 'dragged', { x: 7, y: 4 }).map(({ token: translatedToken, position }) => ({
      id: translatedToken.id,
      position,
    })),
    [
      { id: 'first', position: { x: 4, y: 0 } },
      { id: 'dragged', position: { x: 7, y: 4 } },
      { id: 'third', position: { x: 11, y: -2 } },
    ],
  )
})
