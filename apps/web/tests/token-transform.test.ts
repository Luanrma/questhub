import assert from 'node:assert/strict'
import test from 'node:test'
import { normalizeTokenRotation, resizedTokenSize, rotatedTokenDegrees } from '../src/vtt/table/domain/tokenTransform'

test('token resizing is proportional, quantized and bounded', () => {
  assert.equal(resizedTokenSize(1, 40, 60), 1.5)
  assert.equal(resizedTokenSize(1, 40, 49), 1.25)
  assert.equal(resizedTokenSize(1, 40, 1), 0.25)
  assert.equal(resizedTokenSize(10, 10, 40), 20)
})

test('token rotation follows the pointer angle and stays normalized', () => {
  assert.equal(rotatedTokenDegrees(350, 0, Math.PI / 2), 440)
  assert.equal(normalizeTokenRotation(-45), 315)
  assert.equal(normalizeTokenRotation(405), 45)
})

test('token rotation crosses the initial axis without a 360 degree jump', () => {
  const beforeAxis = 179 * Math.PI / 180
  const afterAxis = -179 * Math.PI / 180

  assert.equal(Math.round(rotatedTokenDegrees(179, beforeAxis, afterAxis)), 181)
  assert.equal(Math.round(rotatedTokenDegrees(-179, -beforeAxis, -afterAxis)), -181)
})
