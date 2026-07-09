import test from 'node:test'
import assert from 'node:assert/strict'
import { createAddItemToInventoryUseCase } from './add-item-to-inventory.use-case'
import { createInMemoryCampaignAccess } from './__fakes__/in-memory-campaign-access'
import { createInMemoryInventoryEventBus } from './__fakes__/in-memory-inventory-event-bus'
import { createInMemoryInventoryRepository } from './__fakes__/in-memory-inventory-repository'

function setup() {
  const { port: campaignAccess, seedCharacter } = createInMemoryCampaignAccess()
  const { repository: inventoryRepository, seedItemDefinition } = createInMemoryInventoryRepository()
  const { eventBus, inventoryChanged } = createInMemoryInventoryEventBus()

  seedCharacter({ id: 'master-cc', campaignId: 'camp-1', characterId: 'char-master', userId: 'user-master', role: 'MASTER', status: 'ACTIVE' })
  seedCharacter({ id: 'player-cc', campaignId: 'camp-1', characterId: 'char-player', userId: 'user-player', role: 'PLAYER', status: 'ACTIVE' })

  const potion = seedItemDefinition({ campaignId: 'camp-1', name: 'Potion of Healing', itemType: 'consumable', isStackable: true })

  const useCase = createAddItemToInventoryUseCase({ inventoryRepository, eventBus, campaignAccess })
  return { useCase, potion, inventoryChanged }
}

test('Master can add an item to a player inventory and stackable items merge', async () => {
  const { useCase, potion, inventoryChanged } = setup()

  const first = await useCase({ campaignId: 'camp-1', characterId: 'char-player', itemDefinitionId: potion.id, quantity: 2, actorUserId: 'user-master' })
  assert.equal(first.status, 'ok')

  const second = await useCase({ campaignId: 'camp-1', characterId: 'char-player', itemDefinitionId: potion.id, quantity: 3, actorUserId: 'user-master' })
  assert.equal(second.status, 'ok')
  if (second.status !== 'ok') return

  assert.equal(second.inventory.items.length, 1)
  assert.equal(second.inventory.items[0].quantity, 5)
  assert.equal(inventoryChanged.length, 2)
})

test('Player cannot add items to their own inventory in this entry', async () => {
  const { useCase, potion } = setup()

  const result = await useCase({ campaignId: 'camp-1', characterId: 'char-player', itemDefinitionId: potion.id, actorUserId: 'user-player' })
  assert.equal(result.status, 'forbidden')
})

test('rejects zero or negative quantity', async () => {
  const { useCase, potion } = setup()

  const result = await useCase({ campaignId: 'camp-1', characterId: 'char-player', itemDefinitionId: potion.id, quantity: 0, actorUserId: 'user-master' })
  assert.equal(result.status, 'invalid_quantity')
})

test('returns item_definition_not_found for an unknown item', async () => {
  const { useCase } = setup()

  const result = await useCase({ campaignId: 'camp-1', characterId: 'char-player', itemDefinitionId: 'missing', actorUserId: 'user-master' })
  assert.equal(result.status, 'item_definition_not_found')
})

test('returns not_found for a character outside the campaign', async () => {
  const { useCase, potion } = setup()

  const result = await useCase({ campaignId: 'camp-1', characterId: 'char-unknown', itemDefinitionId: potion.id, actorUserId: 'user-master' })
  assert.equal(result.status, 'not_found')
})
