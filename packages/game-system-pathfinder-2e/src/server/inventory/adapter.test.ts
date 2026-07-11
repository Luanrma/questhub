import test from 'node:test'
import assert from 'node:assert/strict'
import { pathfinder2eInventoryAdapter } from './adapter'

test('pathfinder2eInventoryAdapter rejects V2 ammunition as not equippable', () => {
  const result = pathfinder2eInventoryAdapter.validateEquipment({
    optionKey: 'held-main-hand',
    item: {
      schemaVersion: 2,
      name: 'Arrows',
      itemType: 'consumable',
      rarity: null,
      level: null,
      traits: [],
      bulk: null,
      priceMinorUnit: null,
      equipSlot: null,
      isStackable: true,
      systemData: null,
      classification: { role: 'ammunition', subtype: 'arrow' },
      equipment: { equippable: false, options: [] },
    },
    currentEquipment: [],
  })

  assert.equal(result.ok, false)
  if (result.ok) return
  assert.equal(result.code, 'ITEM_NOT_EQUIPPABLE')
})

test('pathfinder2eInventoryAdapter rejects V2 consumables even when stale data has equipment options', () => {
  const result = pathfinder2eInventoryAdapter.validateEquipment({
    optionKey: 'held-main-hand',
    item: {
      schemaVersion: 2,
      name: 'Alcohol',
      itemType: 'consumable',
      rarity: null,
      level: null,
      traits: ['consumable'],
      bulk: null,
      priceMinorUnit: null,
      equipSlot: null,
      isStackable: true,
      systemData: { usage: 'held-in-one-hand', category: 'drug' },
      classification: { role: 'consumable', subtype: 'drug' },
      equipment: {
        equippable: true,
        options: [
          {
            key: 'held-main-hand',
            label: 'Mao principal',
            resourceUsage: [{ resource: 'pf2e:hand:main', amount: 1, exclusive: true }],
          },
        ],
      },
    },
    currentEquipment: [],
  })

  assert.equal(result.ok, false)
  if (result.ok) return
  assert.equal(result.code, 'ITEM_NOT_EQUIPPABLE')
})

test('pathfinder2eInventoryAdapter does not list options for legacy consumables', () => {
  const options = pathfinder2eInventoryAdapter.getEquipmentOptions({
    name: 'Alcohol',
    itemType: 'consumable',
    rarity: null,
    level: null,
    traits: ['consumable'],
    bulk: null,
    priceMinorUnit: null,
    equipSlot: 'held',
    isStackable: true,
    systemData: { usage: 'held-in-one-hand', category: 'drug' },
  })

  assert.deepEqual(options, [])
})

test('pathfinder2eInventoryAdapter uses V2 equipment option resource usage', () => {
  const result = pathfinder2eInventoryAdapter.validateEquipment({
    optionKey: 'worn-head',
    item: {
      schemaVersion: 2,
      name: 'Crown',
      itemType: 'equipment',
      rarity: null,
      level: null,
      traits: [],
      bulk: null,
      priceMinorUnit: null,
      equipSlot: null,
      isStackable: false,
      systemData: null,
      classification: { role: 'wearable', subtype: 'headwear' },
      equipment: {
        equippable: true,
        options: [
          {
            key: 'worn-head',
            label: 'Cabeca',
            resourceUsage: [{ resource: 'pf2e:body:head', amount: 1, exclusive: true }],
          },
        ],
      },
    },
    currentEquipment: [],
  })

  assert.equal(result.ok, true)
  if (!result.ok) return
  assert.equal(result.optionKey, 'worn-head')
  assert.deepEqual(result.resourceUsage, [{ resource: 'pf2e:body:head', amount: 1, exclusive: true }])
})

test('pathfinder2eInventoryAdapter lists item-scoped V2 equipment options', () => {
  const options = pathfinder2eInventoryAdapter.getEquipmentOptions({
    schemaVersion: 2,
    name: 'Crown',
    itemType: 'equipment',
    rarity: null,
    level: null,
    traits: [],
    bulk: null,
    priceMinorUnit: null,
    equipSlot: null,
    isStackable: false,
    systemData: null,
    classification: { role: 'wearable', subtype: 'headwear' },
    equipment: {
      equippable: true,
      options: [
        {
          key: 'worn-head',
          label: 'Cabeca',
          resourceUsage: [{ resource: 'pf2e:body:head', amount: 1, exclusive: true }],
        },
      ],
    },
  })

  assert.deepEqual(options.map((option) => option.key), ['worn-head'])
})

test('pathfinder2eInventoryAdapter does not give broad options to ambiguous V1 items', () => {
  const options = pathfinder2eInventoryAdapter.getEquipmentOptions({
    name: 'Mystery Item',
    itemType: 'equipment',
    rarity: null,
    level: null,
    traits: [],
    bulk: null,
    priceMinorUnit: null,
    equipSlot: null,
    isStackable: false,
    systemData: null,
  })

  assert.deepEqual(options, [])
})

test('pathfinder2eInventoryAdapter detects V2 exclusive resource conflicts', () => {
  const result = pathfinder2eInventoryAdapter.validateEquipment({
    optionKey: 'worn-head',
    item: {
      schemaVersion: 2,
      name: 'Helm',
      itemType: 'equipment',
      rarity: null,
      level: null,
      traits: [],
      bulk: null,
      priceMinorUnit: null,
      equipSlot: null,
      isStackable: false,
      systemData: null,
      classification: { role: 'wearable', subtype: 'headwear' },
      equipment: {
        equippable: true,
        options: [
          {
            key: 'worn-head',
            label: 'Cabeca',
            resourceUsage: [{ resource: 'pf2e:body:head', amount: 1, exclusive: true }],
          },
        ],
      },
    },
    currentEquipment: [
      {
        inventoryItemId: 'item-1',
        equipmentOptionKey: 'worn-head',
        resourceLocks: [{ resource: 'pf2e:body:head', amount: 1, exclusive: true }],
        systemData: null,
      },
    ],
  })

  assert.equal(result.ok, false)
  if (result.ok) return
  assert.equal(result.code, 'EQUIPMENT_CONFLICT')
})

function armorGroupingItem(overrides: {
  systemData?: unknown
  equippedStateSystemData?: unknown
} = {}) {
  return {
    equippedItemId: 'equipped-armor-1',
    inventoryItemId: 'item-armor-1',
    equipmentOptionKey: 'armor',
    resourceLocks: [{ resource: 'pf2e:armor', amount: 1, exclusive: true }],
    systemData: overrides.equippedStateSystemData ?? null,
    item: {
      schemaVersion: 2 as const,
      name: 'Breastplate',
      itemType: 'armor',
      rarity: 'common',
      level: 4,
      traits: [],
      bulk: '2',
      priceMinorUnit: 20000,
      equipSlot: null,
      isStackable: false,
      systemData: overrides.systemData ?? { category: 'medium', ac: 4, dexCap: 1 },
      classification: { role: 'armor', subtype: 'medium' },
      equipment: { equippable: true, options: [] },
    },
  }
}

function shieldGroupingItem(overrides: {
  systemData?: unknown
  equippedStateSystemData?: unknown
} = {}) {
  return {
    equippedItemId: 'equipped-shield-1',
    inventoryItemId: 'item-shield-1',
    equipmentOptionKey: 'shield',
    resourceLocks: [{ resource: 'pf2e:shield', amount: 1, exclusive: true }],
    systemData: overrides.equippedStateSystemData ?? null,
    item: {
      schemaVersion: 2 as const,
      name: 'Steel Shield',
      itemType: 'shield',
      rarity: 'common',
      level: 1,
      traits: [],
      bulk: '2',
      priceMinorUnit: 500,
      equipSlot: null,
      isStackable: false,
      systemData: overrides.systemData ?? { ac: 2 },
      classification: { role: 'shield', subtype: null },
      equipment: { equippable: true, options: [] },
    },
  }
}

test('resolveArmorClassEquipment returns null armor/shield when nothing relevant is equipped', () => {
  const result = pathfinder2eInventoryAdapter.resolveArmorClassEquipment({ items: [] })

  assert.deepEqual(result, { armor: null, shield: null })
})

test('resolveArmorClassEquipment resolves armor category, item bonus and dex cap', () => {
  const result = pathfinder2eInventoryAdapter.resolveArmorClassEquipment({ items: [armorGroupingItem()] })

  assert.deepEqual(result.armor, { equippedItemId: 'equipped-armor-1', category: 'medium', itemBonus: 4, dexCap: 1 })
  assert.equal(result.shield, null)
})

test('resolveArmorClassEquipment falls back to unarmored for an unknown or missing armor category', () => {
  const result = pathfinder2eInventoryAdapter.resolveArmorClassEquipment({
    items: [armorGroupingItem({ systemData: { ac: 1 } })],
  })

  assert.equal(result.armor?.category, 'unarmored')
})

test('resolveArmorClassEquipment treats a legacy armor item without dexCap as uncapped', () => {
  const result = pathfinder2eInventoryAdapter.resolveArmorClassEquipment({
    items: [armorGroupingItem({ systemData: { category: 'heavy', ac: 6 } })],
  })

  assert.deepEqual(result.armor, { equippedItemId: 'equipped-armor-1', category: 'heavy', itemBonus: 6, dexCap: null })
})

test('resolveArmorClassEquipment resolves shield item bonus and raised state', () => {
  const lowered = pathfinder2eInventoryAdapter.resolveArmorClassEquipment({ items: [shieldGroupingItem()] })
  assert.deepEqual(lowered.shield, { equippedItemId: 'equipped-shield-1', itemBonus: 2, raised: false })

  const raised = pathfinder2eInventoryAdapter.resolveArmorClassEquipment({
    items: [shieldGroupingItem({ equippedStateSystemData: { option: {}, shieldRaised: true } })],
  })
  assert.deepEqual(raised.shield, { equippedItemId: 'equipped-shield-1', itemBonus: 2, raised: true })
})

test('resolveArmorClassEquipment tolerates an item cloned before this feature (systemData without mechanical fields)', () => {
  const result = pathfinder2eInventoryAdapter.resolveArmorClassEquipment({
    items: [armorGroupingItem({ systemData: {} }), shieldGroupingItem({ systemData: {}, equippedStateSystemData: {} })],
  })

  assert.deepEqual(result.armor, { equippedItemId: 'equipped-armor-1', category: 'unarmored', itemBonus: 0, dexCap: null })
  assert.deepEqual(result.shield, { equippedItemId: 'equipped-shield-1', itemBonus: 0, raised: false })
})

test('resolveArmorClassEquipment resolves armor and shield together', () => {
  const result = pathfinder2eInventoryAdapter.resolveArmorClassEquipment({
    items: [armorGroupingItem(), shieldGroupingItem({ equippedStateSystemData: { shieldRaised: true } })],
  })

  assert.deepEqual(result.armor, { equippedItemId: 'equipped-armor-1', category: 'medium', itemBonus: 4, dexCap: 1 })
  assert.deepEqual(result.shield, { equippedItemId: 'equipped-shield-1', itemBonus: 2, raised: true })
})
