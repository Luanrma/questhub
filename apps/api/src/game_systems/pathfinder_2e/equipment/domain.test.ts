import assert from 'node:assert/strict'
import test from 'node:test'
import { createDefaultPathfinder2eCharacterSheet } from '../character-sheet/defaults'
import type { Pathfinder2eItemData } from '../content_catalog/items/types'
import {
  buildPathfinder2eEquipmentView,
  createPathfinder2eEquipmentState,
  transitionPathfinder2eEquipment,
  type Pathfinder2eEquipmentEntry,
} from './domain'

function item(overrides: Partial<Pathfinder2eItemData>): Pathfinder2eItemData {
  return {
    schemaVersion: 1,
    name: 'Item',
    itemType: 'equipment',
    level: 0,
    rarity: 'common',
    traits: [],
    description: '',
    bulk: 1,
    price: {},
    usage: 'worn',
    category: 'adventuring-gear',
    ...overrides,
  }
}

function entry(
  id: string,
  data: Pathfinder2eItemData,
  mode: 'STOWED' | 'HELD' | 'WORN' = 'STOWED',
  quantity = 1,
): Pathfinder2eEquipmentEntry {
  return {
    id,
    quantity,
    data,
    state: mode === 'STOWED' ? null : createPathfinder2eEquipmentState(mode),
  }
}

const sword = item({
  name: 'Longsword',
  itemType: 'weapon',
  usage: 'held-in-one-hand',
  category: 'martial',
  group: 'sword',
  damage: { dice: 1, die: 'd8', type: 'slashing' },
})

const shield = item({
  name: 'Steel Shield',
  itemType: 'shield',
  usage: 'held-in-one-hand',
  category: 'shield',
  group: 'shield',
})

const bow = item({
  name: 'Shortbow',
  itemType: 'weapon',
  usage: 'held-in-one-plus-hands',
  category: 'martial',
  group: 'bow',
  damage: { dice: 1, die: 'd6', type: 'piercing' },
})

test('one-handed items share the two available hands', () => {
  const view = buildPathfinder2eEquipmentView([
    entry('sword', sword, 'HELD'),
    entry('shield', shield, 'HELD'),
  ], createDefaultPathfinder2eCharacterSheet())

  assert.equal(view.hands.occupied, 2)
  assert.deepEqual(view.hands.entries, [
    { entryId: 'sword', hands: 1 },
    { entryId: 'shield', hands: 1 },
  ])
})

test('equipping a two-handed weapon reports and atomically resolves hand conflicts', () => {
  const entries = [
    entry('sword', sword, 'HELD'),
    entry('shield', shield, 'HELD'),
    entry('bow', bow),
  ]

  const blocked = transitionPathfinder2eEquipment({
    entries,
    entryId: 'bow',
    carryMode: 'HELD',
    resolveConflicts: false,
  })
  assert.equal(blocked.ok, false)
  if (!blocked.ok) assert.deepEqual(blocked.conflictEntryIds, ['sword', 'shield'])

  const resolved = transitionPathfinder2eEquipment({
    entries,
    entryId: 'bow',
    carryMode: 'HELD',
    resolveConflicts: true,
  })
  assert.equal(resolved.ok, true)
  if (resolved.ok) {
    assert.deepEqual(resolved.updates.map((update) => update.entryId), ['sword', 'shield', 'bow'])
  }
})

test('worn usage groups are exclusive while plain worn items can coexist', () => {
  const firstHeadwear = item({ name: 'Crown', usage: 'worn-headwear' })
  const secondHeadwear = item({ name: 'Helm', usage: 'worn-headwear' })
  const ringA = item({ name: 'Ring A', usage: 'worn' })
  const ringB = item({ name: 'Ring B', usage: 'worn' })
  const entries = [
    entry('crown', firstHeadwear, 'WORN'),
    entry('helm', secondHeadwear),
    entry('ring-a', ringA, 'WORN'),
    entry('ring-b', ringB),
  ]

  const view = buildPathfinder2eEquipmentView(entries, createDefaultPathfinder2eCharacterSheet())
  const helmAction = view.entries.find((candidate) => candidate.entryId === 'helm')?.actions[0]
  const ringAction = view.entries.find((candidate) => candidate.entryId === 'ring-b')?.actions[0]

  assert.deepEqual(helmAction?.conflictEntryIds, ['crown'])
  assert.deepEqual(ringAction?.conflictEntryIds, [])
})

test('equipped armor changes AC with dexterity cap and category proficiency', () => {
  const sheet = createDefaultPathfinder2eCharacterSheet()
  sheet.identity.level = 1
  sheet.attributes.dexterity = 4
  sheet.armorProficiencies.light = 2
  const leather = item({
    name: 'Leather Armor',
    itemType: 'armor',
    usage: 'worn-armor',
    category: 'light',
    group: 'leather',
    armor: {
      armorClassBonus: 1,
      dexterityCap: 2,
      checkPenalty: -1,
      speedPenaltyFeet: 0,
    },
  })

  const view = buildPathfinder2eEquipmentView([
    entry('leather', leather, 'WORN'),
  ], sheet)

  assert.equal(view.armor.entryId, 'leather')
  assert.equal(view.armorClass?.category, 'light')
  assert.equal(view.armorClass?.sourceName, 'Leather Armor')
  assert.equal(view.armorClass?.value, 16)
  assert.deepEqual(view.armorClass?.breakdown, [
    { label: 'Base', value: 10 },
    { label: 'Destreza', value: 2 },
    { label: 'Proficiência', value: 3 },
    { label: 'Armadura', value: 1 },
  ])
})

test('lack of armor proficiency warns but does not block wearing armor', () => {
  const sheet = createDefaultPathfinder2eCharacterSheet()
  const plate = item({
    name: 'Full Plate',
    itemType: 'armor',
    usage: 'worn-armor',
    category: 'heavy',
    group: 'plate',
    armor: {
      armorClassBonus: 6,
      dexterityCap: 0,
      checkPenalty: -3,
      speedPenaltyFeet: -10,
    },
  })
  const entries = [entry('plate', plate)]
  const view = buildPathfinder2eEquipmentView(entries, sheet)
  const plateView = view.entries.find((candidate) => candidate.entryId === 'plate')

  assert.equal(plateView?.actions[0]?.carryMode, 'WORN')
  assert.match(plateView?.warnings[0] ?? '', /não possui proficiência/)
})

test('stacked entries must be split before they can be equipped', () => {
  const transition = transitionPathfinder2eEquipment({
    entries: [entry('swords', sword, 'STOWED', 2)],
    entryId: 'swords',
    carryMode: 'HELD',
    resolveConflicts: false,
  })

  assert.equal(transition.ok, false)
  if (!transition.ok) assert.match(transition.error, /Separe a pilha/)
})
