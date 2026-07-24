import assert from 'node:assert/strict'
import test from 'node:test'
import { registerPathfinder2eContentCatalogRoutes } from './routes'

test('PF2e content catalog exposes an isolated route registrar', () => {
  assert.equal(typeof registerPathfinder2eContentCatalogRoutes, 'function')
})
