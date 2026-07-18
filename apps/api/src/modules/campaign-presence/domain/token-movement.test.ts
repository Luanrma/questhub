import assert from 'node:assert/strict'
import test from 'node:test'
import { vttTokenMovePathSchema } from '../contracts'
import { movementDurationMs, movementPathDistance, pathHasBlockedSegment } from './token-movement'

test('movement path sums every segment', () => {
  assert.equal(movementPathDistance([{ x: 0, y: 0 }, { x: 3, y: 4 }, { x: 6, y: 8 }]), 10)
})

test('movement duration accelerates long paths and stays bounded', () => {
  const shortDuration = movementDurationMs([{ x: 0, y: 0 }, { x: 1, y: 0 }])
  const longDuration = movementDurationMs([{ x: 0, y: 0 }, { x: 100, y: 0 }])

  assert.ok(shortDuration >= 550)
  assert.equal(longDuration, 6000)
  assert.ok(longDuration / 100 < shortDuration)
})

test('movement collision checks every path segment', () => {
  const path = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }]
  assert.equal(pathHasBlockedSegment(path, (start) => start.x === 1), true)
  assert.equal(pathHasBlockedSegment(path, () => false), false)
})

test('movement path contract requires scene, token and at least one effective segment', () => {
  assert.equal(vttTokenMovePathSchema.safeParse({
    campaignId: 'campaign-1',
    sceneId: 'scene-1',
    tokenId: 'token-1',
    path: [{ x: 0.5, y: 0.5 }, { x: 1.5, y: 0.5 }],
  }).success, true)
  assert.equal(vttTokenMovePathSchema.safeParse({
    campaignId: 'campaign-1',
    sceneId: 'scene-1',
    tokenId: 'token-1',
    path: [{ x: 0.5, y: 0.5 }, { x: 0.5, y: 0.5 }],
  }).success, false)
})
