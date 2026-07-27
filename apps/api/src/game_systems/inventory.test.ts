import assert from 'node:assert/strict'
import test from 'node:test'
import {
  getGameSystemInventoryPolicy,
  registerGameSystemInventoryPolicy,
} from './inventory'
import { pathfinder2eInventoryPolicy } from './pathfinder_2e/inventory/policy'

test('a game system can register an inventory policy', () => {
  assert.equal(getGameSystemInventoryPolicy('PATHFINDER_2E'), null)

  registerGameSystemInventoryPolicy('PATHFINDER_2E', pathfinder2eInventoryPolicy)

  assert.equal(getGameSystemInventoryPolicy('PATHFINDER_2E'), pathfinder2eInventoryPolicy)
})

test('Pathfinder 2e initially stacks items with deeply equivalent JSON data', () => {
  const first = {
    schemaVersion: 1,
    name: 'Arrows',
    itemType: 'ammunition',
    traits: ['consumable'],
    price: { sp: 1 },
  }
  const equivalent = {
    price: { sp: 1 },
    traits: ['consumable'],
    itemType: 'ammunition',
    name: 'Arrows',
    schemaVersion: 1,
  }
  const different = {
    ...first,
    name: 'Wooden Arrows',
  }

  assert.equal(pathfinder2eInventoryPolicy.canStack(first, equivalent), true)
  assert.equal(pathfinder2eInventoryPolicy.canStack(first, different), false)
})
