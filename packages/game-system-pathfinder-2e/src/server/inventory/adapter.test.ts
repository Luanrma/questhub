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
