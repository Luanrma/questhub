import test from 'node:test'
import assert from 'node:assert/strict'
import { presentInventory, presentWallet } from './presenters'
import type { InventorySnapshot, WalletSnapshot } from './types'

const itemDefinition = {
  id: 'def-1',
  name: 'Short Sword',
  system: 'PATHFINDER_2E' as const,
  source: 'CUSTOM' as const,
  itemType: 'weapon',
  rarity: 'common',
  level: 0,
  traits: ['agile', 'finesse'],
  bulk: '1',
  priceMinorUnit: 900,
  equipSlot: 'main_hand',
  isStackable: false,
  systemData: null,
}

test('presentInventory maps items and equipped items to the InventoryView contract', () => {
  const snapshot: InventorySnapshot = {
    id: 'inv-1',
    campaignId: 'camp-1',
    characterId: 'char-1',
    campaignCharacterId: 'cc-1',
    items: [
      {
        id: 'item-1',
        itemDefinition,
        quantity: 1,
        state: 'EQUIPPED',
        customName: null,
        notes: null,
        equipped: { id: 'eq-1', inventoryItemId: 'item-1', slot: 'main_hand', exclusiveSlotKey: 'main_hand', quantity: 1 },
      },
    ],
    equippedItems: [{ id: 'eq-1', inventoryItemId: 'item-1', slot: 'main_hand', exclusiveSlotKey: 'main_hand', quantity: 1 }],
  }

  const view = presentInventory(snapshot)

  assert.equal(view.id, 'inv-1')
  assert.equal(view.items.length, 1)
  assert.equal(view.items[0].equipped?.slot, 'main_hand')
  assert.equal(view.equippedItems.length, 1)
})

test('presentWallet embeds the injected currency display without recomputing it', () => {
  const wallet: WalletSnapshot = {
    id: 'wallet-1',
    campaignId: 'camp-1',
    characterId: 'char-1',
    campaignCharacterId: 'cc-1',
    balanceMinorUnit: 1234,
  }

  const view = presentWallet(wallet, {
    system: 'PATHFINDER_2E',
    breakdown: { pp: 1, gp: 2, sp: 3, cp: 4 },
    label: '1 pp 2 gp 3 sp 4 cp',
  })

  assert.equal(view.balanceMinorUnit, 1234)
  assert.equal(view.display.label, '1 pp 2 gp 3 sp 4 cp')
})
