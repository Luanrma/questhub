import test from 'node:test'
import assert from 'node:assert/strict'
import { toCopper, fromCopper, formatPathfinder2eCurrency } from './money'

test('toCopper converts a full breakdown to copper', () => {
  assert.equal(toCopper({ pp: 1, gp: 2, sp: 3, cp: 4 }), 1000 + 200 + 30 + 4)
})

test('toCopper handles zeroed breakdown', () => {
  assert.equal(toCopper({ pp: 0, gp: 0, sp: 0, cp: 0 }), 0)
})

test('fromCopper converts back to a breakdown', () => {
  assert.deepEqual(fromCopper(1234), { pp: 1, gp: 2, sp: 3, cp: 4 })
})

test('fromCopper handles zero', () => {
  assert.deepEqual(fromCopper(0), { pp: 0, gp: 0, sp: 0, cp: 0 })
})

test('fromCopper and toCopper are inverses for round values', () => {
  const breakdown = fromCopper(5678)
  assert.equal(toCopper(breakdown), 5678)
})

test('formatPathfinder2eCurrency formats non-zero denominations only', () => {
  assert.equal(formatPathfinder2eCurrency(1234), '1 pp 2 gp 3 sp 4 cp')
  assert.equal(formatPathfinder2eCurrency(100), '1 gp')
  assert.equal(formatPathfinder2eCurrency(0), '0 cp')
})

test('formatPathfinder2eCurrency prefixes negative amounts', () => {
  assert.equal(formatPathfinder2eCurrency(-50), '-5 sp')
})
