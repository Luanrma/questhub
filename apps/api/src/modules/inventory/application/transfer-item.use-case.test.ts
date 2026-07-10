import test from 'node:test'
import assert from 'node:assert/strict'
import { createEquipItemUseCase } from './equip-item.use-case'
import { createTransferItemUseCase } from './transfer-item.use-case'
import { createInMemoryCampaignAccess } from './__fakes__/in-memory-campaign-access'
import { createInMemoryInventoryEventBus } from './__fakes__/in-memory-inventory-event-bus'
import { createInMemoryInventoryRepository } from './__fakes__/in-memory-inventory-repository'

function setup() {
  const { port: campaignAccess, seedCharacter } = createInMemoryCampaignAccess()
  const { repository: inventoryRepository, seedItemDefinition, seedInventoryItem } = createInMemoryInventoryRepository()
  const { eventBus, itemTransferred } = createInMemoryInventoryEventBus()

  seedCharacter({ id: 'master-cc', campaignId: 'camp-1', characterId: 'char-master', userId: 'user-master', role: 'MASTER', status: 'ACTIVE' })
  seedCharacter({ id: 'player-cc', campaignId: 'camp-1', characterId: 'char-player', userId: 'user-player', role: 'PLAYER', status: 'ACTIVE' })
  seedCharacter({ id: 'other-cc', campaignId: 'camp-1', characterId: 'char-other', userId: 'user-other', role: 'PLAYER', status: 'ACTIVE' })
  seedCharacter({ id: 'foreign-cc', campaignId: 'camp-2', characterId: 'char-foreign', userId: 'user-foreign', role: 'PLAYER', status: 'ACTIVE' })

  const rope = seedItemDefinition({ campaignId: 'camp-1', name: 'Rope', itemType: 'gear', equipSlot: 'held', isStackable: true })

  const transferUseCase = createTransferItemUseCase({ inventoryRepository, eventBus, campaignAccess })
  const equipUseCase = createEquipItemUseCase({ inventoryRepository, eventBus, campaignAccess })

  return { transferUseCase, equipUseCase, rope, seedInventoryItem, itemTransferred }
}

test('owner transfers their own item to another character in the same campaign', async () => {
  const { transferUseCase, rope, seedInventoryItem, itemTransferred } = setup()
  const item = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: rope.id, quantity: 2 })

  const result = await transferUseCase({ campaignId: 'camp-1', inventoryItemId: item.id, toCharacterId: 'char-other', quantity: 2, actorUserId: 'user-player' })
  assert.equal(result.status, 'ok')
  if (result.status !== 'ok') return
  assert.equal(result.inventory.items.length, 0)
  assert.equal(itemTransferred.length, 1)
})

test('a third party cannot transfer someone else item', async () => {
  const { transferUseCase, rope, seedInventoryItem } = setup()
  const item = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: rope.id })

  const result = await transferUseCase({ campaignId: 'camp-1', inventoryItemId: item.id, toCharacterId: 'char-other', quantity: 1, actorUserId: 'user-other' })
  assert.equal(result.status, 'item_belongs_to_another_character')
})

test('blocks cross-campaign transfers', async () => {
  const { transferUseCase, rope, seedInventoryItem } = setup()
  const item = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: rope.id })

  const result = await transferUseCase({ campaignId: 'camp-1', inventoryItemId: item.id, toCharacterId: 'char-foreign', quantity: 1, actorUserId: 'user-player' })
  assert.equal(result.status, 'not_found')
})

test('an equipped item cannot be transferred without unequipping first', async () => {
  const { transferUseCase, equipUseCase, rope, seedInventoryItem } = setup()
  const item = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: rope.id })
  await equipUseCase({ campaignId: 'camp-1', inventoryItemId: item.id, equipmentOptionKey: 'main_hand', actorUserId: 'user-player' })

  const result = await transferUseCase({ campaignId: 'camp-1', inventoryItemId: item.id, toCharacterId: 'char-other', quantity: 1, actorUserId: 'user-player' })
  assert.equal(result.status, 'item_already_equipped')
})

test('rejects transferring more than available', async () => {
  const { transferUseCase, rope, seedInventoryItem } = setup()
  const item = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: rope.id, quantity: 1 })

  const result = await transferUseCase({ campaignId: 'camp-1', inventoryItemId: item.id, toCharacterId: 'char-other', quantity: 5, actorUserId: 'user-player' })
  assert.equal(result.status, 'insufficient_quantity')
})

test('rejects a non-positive quantity', async () => {
  const { transferUseCase, rope, seedInventoryItem } = setup()
  const item = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: rope.id })

  const result = await transferUseCase({ campaignId: 'camp-1', inventoryItemId: item.id, toCharacterId: 'char-other', quantity: 0, actorUserId: 'user-player' })
  assert.equal(result.status, 'invalid_quantity')
})
