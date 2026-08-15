import assert from 'node:assert/strict'
import test from 'node:test'
import {
  addPathfinder2eCurrency,
  emptyPathfinder2eCurrency,
  hasPathfinder2eCurrencyValue,
  parsePathfinder2eCurrency,
  subtractPathfinder2eCurrency,
} from './domain'

test('PF2e currency keeps the four canonical denominations', () => {
  assert.deepEqual(parsePathfinder2eCurrency({
    platinum: 1,
    gold: 2,
    silver: 3,
    copper: 4,
  }), { platinum: 1, gold: 2, silver: 3, copper: 4 })
})

test('currency cannot become negative or exceed the supported limit', () => {
  assert.equal(subtractPathfinder2eCurrency(emptyPathfinder2eCurrency, {
    platinum: 0,
    gold: 0,
    silver: 0,
    copper: 1,
  }), null)
  assert.equal(addPathfinder2eCurrency({
    platinum: 100_000_000,
    gold: 0,
    silver: 0,
    copper: 0,
  }, { platinum: 1, gold: 0, silver: 0, copper: 0 }), null)
})

test('a transfer can debit and credit the exact denominations without conversion', () => {
  const source = { platinum: 1, gold: 12, silver: 7, copper: 3 }
  const amount = { platinum: 0, gold: 2, silver: 4, copper: 1 }
  assert.deepEqual(subtractPathfinder2eCurrency(source, amount), {
    platinum: 1,
    gold: 10,
    silver: 3,
    copper: 2,
  })
  assert.deepEqual(addPathfinder2eCurrency(emptyPathfinder2eCurrency, amount), amount)
  assert.equal(hasPathfinder2eCurrencyValue(emptyPathfinder2eCurrency), false)
  assert.equal(hasPathfinder2eCurrencyValue(amount), true)
})
