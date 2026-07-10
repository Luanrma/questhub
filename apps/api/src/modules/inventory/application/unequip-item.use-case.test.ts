import test from 'node:test'
import assert from 'node:assert/strict'
import { createEquipItemUseCase } from './equip-item.use-case'
import { createUnequipItemUseCase } from './unequip-item.use-case'
import { createInMemoryCampaignAccess } from './__fakes__/in-memory-campaign-access'
import { createInMemoryInventoryEventBus } from './__fakes__/in-memory-inventory-event-bus'
import { createInMemoryInventoryRepository } from './__fakes__/in-memory-inventory-repository'

function setup() {
  const { port: campaignAccess, seedCharacter } = createInMemoryCampaignAccess()
  const { repository: inventoryRepository, seedItemDefinition, seedInventoryItem } = createInMemoryInventoryRepository()
  const { eventBus } = createInMemoryInventoryEventBus()

  seedCharacter({ id: 'player-cc', campaignId: 'camp-1', characterId: 'char-player', userId: 'user-player', role: 'PLAYER', status: 'ACTIVE' })
  seedCharacter({ id: 'other-cc', campaignId: 'camp-1', characterId: 'char-other', userId: 'user-other', role: 'PLAYER', status: 'ACTIVE' })

  const sword = seedItemDefinition({ campaignId: 'camp-1', name: 'Short Sword', itemType: 'weapon', equipSlot: 'main_hand', isStackable: false })
  const item = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: sword.id })

  const equipUseCase = createEquipItemUseCase({ inventoryRepository, eventBus, campaignAccess })
  const unequipUseCase = createUnequipItemUseCase({ inventoryRepository, eventBus, campaignAccess })

  return { equipUseCase, unequipUseCase, item }
}

test('owner unequips their own item and it returns to STORED', async () => {
  const { equipUseCase, unequipUseCase, item } = setup()
  const equipped = await equipUseCase({ campaignId: 'camp-1', inventoryItemId: item.id, equipmentOptionKey: 'main_hand', actorUserId: 'user-player' })
  assert.equal(equipped.status, 'ok')
  if (equipped.status !== 'ok') return

  const equippedItemId = equipped.inventory.equippedItems[0].id
  const result = await unequipUseCase({ campaignId: 'camp-1', equippedItemId, actorUserId: 'user-player' })
  assert.equal(result.status, 'ok')
  if (result.status !== 'ok') return

  assert.equal(result.inventory.equippedItems.length, 0)
  assert.equal(result.inventory.items.find((i) => i.id === item.id)?.state, 'STORED')
})

test('a third party cannot unequip someone else item', async () => {
  const { equipUseCase, unequipUseCase, item } = setup()
  const equipped = await equipUseCase({ campaignId: 'camp-1', inventoryItemId: item.id, equipmentOptionKey: 'main_hand', actorUserId: 'user-player' })
  if (equipped.status !== 'ok') throw new Error('setup failed')

  const equippedItemId = equipped.inventory.equippedItems[0].id
  const result = await unequipUseCase({ campaignId: 'camp-1', equippedItemId, actorUserId: 'user-other' })
  assert.equal(result.status, 'item_belongs_to_another_character')
})

test('returns not_found for an unknown equipped item', async () => {
  const { unequipUseCase } = setup()
  const result = await unequipUseCase({ campaignId: 'camp-1', equippedItemId: 'missing', actorUserId: 'user-player' })
  assert.equal(result.status, 'not_found')
})
