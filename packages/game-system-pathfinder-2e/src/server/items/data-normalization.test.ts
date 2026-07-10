import test from 'node:test'
import assert from 'node:assert/strict'
import { PATHFINDER_2E_ITEM_DATA } from './data.generated'
import type { Pathfinder2eCompendiumItem, Pathfinder2eCompendiumItemV2 } from './models'

function itemById(id: string) {
  const item = PATHFINDER_2E_ITEM_DATA.find((candidate) => candidate.id === id)
  assert.ok(item, `missing catalog item ${id}`)
  return assertV2(item)
}

function assertV2(item: Pathfinder2eCompendiumItem): Pathfinder2eCompendiumItemV2 {
  assert.equal('schemaVersion' in item ? item.schemaVersion : undefined, 2)
  return item as Pathfinder2eCompendiumItemV2
}

test('generated PF2e item catalog emits V2 envelopes', () => {
  assert.ok(PATHFINDER_2E_ITEM_DATA.length > 0)

  for (const candidate of PATHFINDER_2E_ITEM_DATA) {
    const item = assertV2(candidate)
    assert.ok(item.classification.role)
    assert.ok(item.usage.mode)
    assert.equal(typeof item.equipment.equippable, 'boolean')
    assert.equal('equipSlot' in item, false)
  }
})

test('generated PF2e catalog classifies ammunition as not equippable', () => {
  const arrows = itemById('pf2e:equipment:arrows')
  assert.equal(arrows.classification.role, 'ammunition')
  assert.equal(arrows.ammunition?.kind, 'arrow')
  assert.equal(arrows.equipment.equippable, false)
  assert.deepEqual(arrows.equipment.options, [])

  const bolts = itemById('pf2e:equipment:bolts')
  assert.equal(bolts.classification.role, 'ammunition')
  assert.equal(bolts.ammunition?.kind, 'bolt')
  assert.equal(bolts.equipment.equippable, false)
})

test('generated PF2e catalog keeps consumables out of persistent equipment', () => {
  const alcohol = itemById('pf2e:equipment:alcohol')
  assert.equal(alcohol.classification.role, 'consumable')
  assert.equal(alcohol.consumable?.category, 'drug')
  assert.equal(alcohol.equipment.equippable, false)
  assert.deepEqual(alcohol.equipment.options, [])
  assert.equal(alcohol.usage.hands, 0)
})

test('generated PF2e catalog distinguishes wearable head items from armor', () => {
  const crown = itemById('pf2e:equipment:beguiling-crown')
  assert.equal(crown.classification.role, 'wearable')
  assert.equal(crown.usage.placement, 'head')
  assert.equal(crown.equipment.options[0]?.key, 'worn-head')
  assert.equal(crown.equipment.options[0]?.resourceUsage[0]?.resource, 'pf2e:body:head')

  const armor = itemById('pf2e:equipment:leather-armor')
  assert.equal(armor.classification.role, 'armor')
  assert.equal(armor.usage.placement, 'armor')
  assert.equal(armor.equipment.options[0]?.key, 'worn-armor')
  assert.equal(armor.equipment.options[0]?.resourceUsage[0]?.resource, 'pf2e:armor')
})

test('generated PF2e catalog creates explicit hand options', () => {
  const lantern = itemById('pf2e:equipment:lantern-bulls-eye')
  assert.equal(lantern.classification.role, 'held-equipment')
  assert.deepEqual(
    lantern.equipment.options.map((option) => option.key),
    ['held-main-hand', 'held-off-hand'],
  )

  const splitheadBow = itemById('pf2e:equipment:splithead-bow')
  assert.equal(splitheadBow.classification.role, 'weapon')
  assert.equal(splitheadBow.usage.hands, 2)
  assert.deepEqual(
    splitheadBow.equipment.options[0]?.resourceUsage.map((usage) => usage.resource),
    ['pf2e:hand:main', 'pf2e:hand:off'],
  )
  assert.deepEqual(splitheadBow.weapon?.ammunition?.acceptedKinds, ['arrow'])
})
