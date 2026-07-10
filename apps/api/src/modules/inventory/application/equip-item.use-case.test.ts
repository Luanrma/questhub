import test from 'node:test'
import assert from 'node:assert/strict'
import { createEquipItemUseCase } from './equip-item.use-case'
import { createInMemoryCampaignAccess } from './__fakes__/in-memory-campaign-access'
import { createInMemoryInventoryEventBus } from './__fakes__/in-memory-inventory-event-bus'
import { createInMemoryInventoryRepository } from './__fakes__/in-memory-inventory-repository'

function setup() {
  const { port: campaignAccess, seedCharacter } = createInMemoryCampaignAccess()
  const { repository: inventoryRepository, seedItemDefinition, seedInventoryItem } = createInMemoryInventoryRepository()
  const { eventBus } = createInMemoryInventoryEventBus()

  seedCharacter({ id: 'master-cc', campaignId: 'camp-1', characterId: 'char-master', userId: 'user-master', role: 'MASTER', status: 'ACTIVE' })
  seedCharacter({ id: 'player-cc', campaignId: 'camp-1', characterId: 'char-player', userId: 'user-player', role: 'PLAYER', status: 'ACTIVE' })
  seedCharacter({ id: 'other-cc', campaignId: 'camp-1', characterId: 'char-other', userId: 'user-other', role: 'PLAYER', status: 'ACTIVE' })

  const sword = seedItemDefinition({ campaignId: 'camp-1', name: 'Short Sword', itemType: 'weapon', equipSlot: 'main_hand', isStackable: false })
  const armor = seedItemDefinition({ campaignId: 'camp-1', name: 'Armored Coat', itemType: 'armor', equipSlot: 'armor', isStackable: false })
  const shield = seedItemDefinition({ campaignId: 'camp-1', name: 'Steel Shield', itemType: 'shield', equipSlot: 'shield', isStackable: false })
  const greatsword = seedItemDefinition({ campaignId: 'camp-1', name: 'Greatsword', itemType: 'weapon', equipSlot: 'two_hands', isStackable: false })
  const investedCloak = seedItemDefinition({ campaignId: 'camp-1', name: 'Magic Cloak', itemType: 'equipment', equipSlot: 'worn', traits: ['invested'], isStackable: false })
  const potion = seedItemDefinition({ campaignId: 'camp-1', name: 'Potion', itemType: 'consumable', equipSlot: 'held', isStackable: true })

  const useCase = createEquipItemUseCase({ inventoryRepository, eventBus, campaignAccess })
  return { useCase, sword, armor, shield, greatsword, investedCloak, potion, seedInventoryItem }
}

test('owner equips their own item with an equipment option', async () => {
  const { useCase, sword, seedInventoryItem } = setup()
  const item = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: sword.id })

  const result = await useCase({ campaignId: 'camp-1', inventoryItemId: item.id, equipmentOptionKey: 'main_hand', actorUserId: 'user-player' })
  assert.equal(result.status, 'ok')
  if (result.status !== 'ok') return
  assert.equal(result.inventory.equippedItems.length, 1)
  assert.equal(result.inventory.equippedItems[0].equipmentOptionKey, 'main_hand')
  assert.deepEqual(result.inventory.equippedItems[0].resourceLocks, [
    { resource: 'pf2e:hand:main', amount: 1, exclusive: true },
  ])
})

test('a player cannot equip an item belonging to another character', async () => {
  const { useCase, sword, seedInventoryItem } = setup()
  const item = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: sword.id })

  const result = await useCase({ campaignId: 'camp-1', inventoryItemId: item.id, equipmentOptionKey: 'main_hand', actorUserId: 'user-other' })
  assert.equal(result.status, 'item_belongs_to_another_character')
})

test('blocks a second item using the same exclusive resource', async () => {
  const { useCase, sword, seedInventoryItem } = setup()
  const first = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: sword.id })
  const second = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: sword.id })

  const firstResult = await useCase({ campaignId: 'camp-1', inventoryItemId: first.id, equipmentOptionKey: 'main_hand', actorUserId: 'user-player' })
  assert.equal(firstResult.status, 'ok')

  const secondResult = await useCase({ campaignId: 'camp-1', inventoryItemId: second.id, equipmentOptionKey: 'main_hand', actorUserId: 'user-player' })
  assert.equal(secondResult.status, 'equipment_conflict')
})

test('cannot equip an item twice', async () => {
  const { useCase, sword, seedInventoryItem } = setup()
  const item = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: sword.id })

  await useCase({ campaignId: 'camp-1', inventoryItemId: item.id, equipmentOptionKey: 'main_hand', actorUserId: 'user-player' })
  const result = await useCase({ campaignId: 'camp-1', inventoryItemId: item.id, equipmentOptionKey: 'off_hand', actorUserId: 'user-player' })
  assert.equal(result.status, 'already_equipped')
})

test('auto-splits a stack of quantity > 1 when equipping', async () => {
  const { useCase, potion, seedInventoryItem } = setup()
  const stack = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: potion.id, quantity: 3 })

  const result = await useCase({ campaignId: 'camp-1', inventoryItemId: stack.id, equipmentOptionKey: 'main_hand', actorUserId: 'user-player' })
  assert.equal(result.status, 'ok')
  if (result.status !== 'ok') return

  const original = result.inventory.items.find((item) => item.id === stack.id)
  assert.equal(original?.quantity, 2)

  const equippedItem = result.inventory.items.find((item) => item.state === 'EQUIPPED')
  assert.equal(equippedItem?.quantity, 1)
  assert.notEqual(equippedItem?.id, stack.id)
})

test('rejects an unknown equipment option', async () => {
  const { useCase, sword, seedInventoryItem } = setup()
  const item = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: sword.id })

  const result = await useCase({ campaignId: 'camp-1', inventoryItemId: item.id, equipmentOptionKey: 'pocket-dimension', actorUserId: 'user-player' })
  assert.equal(result.status, 'invalid_payload')
})

test('rejects an equipment option incompatible with the item definition', async () => {
  const { useCase, armor, seedInventoryItem } = setup()
  const item = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: armor.id })

  const result = await useCase({ campaignId: 'camp-1', inventoryItemId: item.id, equipmentOptionKey: 'main_hand', actorUserId: 'user-player' })
  assert.equal(result.status, 'invalid_payload')
})

test('a two-handed weapon blocks both hands', async () => {
  const { useCase, sword, greatsword, seedInventoryItem } = setup()
  const first = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: greatsword.id })
  const second = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: sword.id })

  const firstResult = await useCase({ campaignId: 'camp-1', inventoryItemId: first.id, equipmentOptionKey: 'two_hands', actorUserId: 'user-player' })
  assert.equal(firstResult.status, 'ok')

  const secondResult = await useCase({ campaignId: 'camp-1', inventoryItemId: second.id, equipmentOptionKey: 'off_hand', actorUserId: 'user-player' })
  assert.equal(secondResult.status, 'equipment_conflict')
})

test('a shield consumes the shield state and the off hand', async () => {
  const { useCase, sword, shield, seedInventoryItem } = setup()
  const first = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: shield.id })
  const second = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: sword.id })

  const firstResult = await useCase({ campaignId: 'camp-1', inventoryItemId: first.id, equipmentOptionKey: 'shield', actorUserId: 'user-player' })
  assert.equal(firstResult.status, 'ok')

  const secondResult = await useCase({ campaignId: 'camp-1', inventoryItemId: second.id, equipmentOptionKey: 'off_hand', actorUserId: 'user-player' })
  assert.equal(secondResult.status, 'equipment_conflict')
})

test('blocks investing more than ten Pathfinder 2e items', async () => {
  const { useCase, investedCloak, seedInventoryItem } = setup()

  for (let index = 0; index < 10; index += 1) {
    const item = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: investedCloak.id })
    const result = await useCase({ campaignId: 'camp-1', inventoryItemId: item.id, equipmentOptionKey: 'worn', actorUserId: 'user-player' })
    assert.equal(result.status, 'ok')
  }

  const eleventh = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: investedCloak.id })
  const result = await useCase({ campaignId: 'camp-1', inventoryItemId: eleventh.id, equipmentOptionKey: 'worn', actorUserId: 'user-player' })
  assert.equal(result.status, 'equipment_conflict')
})

test('master can equip an item on behalf of a player', async () => {
  const { useCase, sword, seedInventoryItem } = setup()
  const item = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: sword.id })

  const result = await useCase({ campaignId: 'camp-1', inventoryItemId: item.id, equipmentOptionKey: 'main_hand', actorUserId: 'user-master' })
  assert.equal(result.status, 'ok')
})
