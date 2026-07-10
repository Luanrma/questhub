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

  const sword = seedItemDefinition({ campaignId: 'camp-1', name: 'Short Sword', itemType: 'weapon', isStackable: false })
  const potion = seedItemDefinition({ campaignId: 'camp-1', name: 'Potion', itemType: 'consumable', isStackable: true })

  const useCase = createEquipItemUseCase({ inventoryRepository, eventBus, campaignAccess })
  return { useCase, sword, potion, seedInventoryItem }
}

test('owner equips their own item in an exclusive slot', async () => {
  const { useCase, sword, seedInventoryItem } = setup()
  const item = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: sword.id })

  const result = await useCase({ campaignId: 'camp-1', inventoryItemId: item.id, slot: 'main_hand', actorUserId: 'user-player' })
  assert.equal(result.status, 'ok')
  if (result.status !== 'ok') return
  assert.equal(result.inventory.equippedItems.length, 1)
  assert.equal(result.inventory.equippedItems[0].exclusiveSlotKey, 'main_hand')
})

test('a player cannot equip an item belonging to another character', async () => {
  const { useCase, sword, seedInventoryItem } = setup()
  const item = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: sword.id })

  const result = await useCase({ campaignId: 'camp-1', inventoryItemId: item.id, slot: 'main_hand', actorUserId: 'user-other' })
  assert.equal(result.status, 'item_belongs_to_another_character')
})

test('blocks a second item in the same exclusive slot', async () => {
  const { useCase, sword, seedInventoryItem } = setup()
  const first = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: sword.id })
  const second = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: sword.id })

  const firstResult = await useCase({ campaignId: 'camp-1', inventoryItemId: first.id, slot: 'main_hand', actorUserId: 'user-player' })
  assert.equal(firstResult.status, 'ok')

  const secondResult = await useCase({ campaignId: 'camp-1', inventoryItemId: second.id, slot: 'main_hand', actorUserId: 'user-player' })
  assert.equal(secondResult.status, 'exclusive_slot_occupied')
})

test('cannot equip an item twice', async () => {
  const { useCase, sword, seedInventoryItem } = setup()
  const item = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: sword.id })

  await useCase({ campaignId: 'camp-1', inventoryItemId: item.id, slot: 'main_hand', actorUserId: 'user-player' })
  const result = await useCase({ campaignId: 'camp-1', inventoryItemId: item.id, slot: 'off_hand', actorUserId: 'user-player' })
  assert.equal(result.status, 'already_equipped')
})

test('auto-splits a stack of quantity > 1 when equipping', async () => {
  const { useCase, potion, seedInventoryItem } = setup()
  const stack = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: potion.id, quantity: 3 })

  const result = await useCase({ campaignId: 'camp-1', inventoryItemId: stack.id, slot: 'held', actorUserId: 'user-player' })
  assert.equal(result.status, 'ok')
  if (result.status !== 'ok') return

  const original = result.inventory.items.find((item) => item.id === stack.id)
  assert.equal(original?.quantity, 2)

  const equippedItem = result.inventory.items.find((item) => item.state === 'EQUIPPED')
  assert.equal(equippedItem?.quantity, 1)
  assert.notEqual(equippedItem?.id, stack.id)
})

test('rejects an unknown slot', async () => {
  const { useCase, sword, seedInventoryItem } = setup()
  const item = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: sword.id })

  const result = await useCase({ campaignId: 'camp-1', inventoryItemId: item.id, slot: 'pocket-dimension', actorUserId: 'user-player' })
  assert.equal(result.status, 'invalid_payload')
})

test('master can equip an item on behalf of a player', async () => {
  const { useCase, sword, seedInventoryItem } = setup()
  const item = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: sword.id })

  const result = await useCase({ campaignId: 'camp-1', inventoryItemId: item.id, slot: 'main_hand', actorUserId: 'user-master' })
  assert.equal(result.status, 'ok')
})
