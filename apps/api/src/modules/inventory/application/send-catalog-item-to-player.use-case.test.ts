import test from 'node:test'
import assert from 'node:assert/strict'
import { createSendCatalogItemToPlayerUseCase } from './send-catalog-item-to-player.use-case'
import { createInMemoryCampaignAccess } from './__fakes__/in-memory-campaign-access'
import { createInMemoryCatalogItemLookup } from './__fakes__/in-memory-catalog-item-lookup'
import { createInMemoryInventoryEventBus } from './__fakes__/in-memory-inventory-event-bus'
import { createInMemoryInventoryRepository } from './__fakes__/in-memory-inventory-repository'

function setup() {
  const { port: campaignAccess, seedCharacter } = createInMemoryCampaignAccess()
  const { repository: inventoryRepository } = createInMemoryInventoryRepository()
  const { eventBus, inventoryChanged } = createInMemoryInventoryEventBus()
  const { port: catalogItemLookup, seedCatalogItem } = createInMemoryCatalogItemLookup()

  seedCharacter({ id: 'master-cc', campaignId: 'camp-1', characterId: 'char-master', userId: 'user-master', role: 'MASTER', status: 'ACTIVE' })
  seedCharacter({ id: 'player-cc', campaignId: 'camp-1', characterId: 'char-player', userId: 'user-player', role: 'PLAYER', status: 'ACTIVE' })
  seedCharacter({ id: 'npc-cc', campaignId: 'camp-1', characterId: 'char-npc', userId: 'user-master', role: 'NPC', status: 'ACTIVE' })
  seedCharacter({ id: 'pending-cc', campaignId: 'camp-1', characterId: 'char-pending', userId: 'user-pending', role: 'PLAYER', status: 'PENDING' })

  seedCatalogItem('PATHFINDER_2E', 'pf2e:equipment:dagger', {
    name: 'Dagger',
    itemType: 'weapon',
    rarity: 'common',
    level: 0,
    traits: ['agile', 'finesse'],
    bulk: 'L',
    priceMinorUnit: 20,
    equipSlot: 'main_hand',
    isStackable: false,
    systemData: { damage: '1d4 piercing' },
    sourcePack: 'equipment',
    sourceId: 'rQWaJhI5Bko5x14Z',
  })

  const useCase = createSendCatalogItemToPlayerUseCase({ inventoryRepository, eventBus, campaignAccess, catalogItemLookup })
  return { useCase, inventoryChanged, inventoryRepository }
}

test('master sends a catalog item to an active player and it lands in their inventory', async () => {
  const { useCase, inventoryChanged } = setup()

  const result = await useCase({
    campaignId: 'camp-1',
    actorUserId: 'user-master',
    catalogItemId: 'pf2e:equipment:dagger',
    targetCharacterId: 'char-player',
  })

  assert.equal(result.status, 'ok')
  if (result.status !== 'ok') return

  assert.equal(result.itemDefinition.name, 'Dagger')
  assert.equal(result.itemDefinition.source, 'SYSTEM_CATALOG')
  assert.equal(result.inventory.items.length, 1)
  assert.equal(result.inventory.items[0].quantity, 1)
  assert.equal(inventoryChanged.length, 1)
})

test('sending the same catalog item twice reuses the same cloned definition instead of duplicating it', async () => {
  const { useCase, inventoryRepository } = setup()

  const first = await useCase({ campaignId: 'camp-1', actorUserId: 'user-master', catalogItemId: 'pf2e:equipment:dagger', targetCharacterId: 'char-player' })
  const second = await useCase({ campaignId: 'camp-1', actorUserId: 'user-master', catalogItemId: 'pf2e:equipment:dagger', targetCharacterId: 'char-player' })

  assert.equal(first.status, 'ok')
  assert.equal(second.status, 'ok')
  if (first.status !== 'ok' || second.status !== 'ok') return

  assert.equal(first.itemDefinition.id, second.itemDefinition.id)

  // Dagger is not stackable, so each send creates its own instance, but both point at the same reused definition.
  const inventory = await inventoryRepository.getOrCreateForCampaignCharacter('camp-1', 'player-cc')
  assert.equal(inventory.items.length, 2)
  assert.ok(inventory.items.every((item) => item.itemDefinition.id === first.itemDefinition.id))
})

test('a player cannot send catalog items', async () => {
  const { useCase } = setup()

  const result = await useCase({
    campaignId: 'camp-1',
    actorUserId: 'user-player',
    catalogItemId: 'pf2e:equipment:dagger',
    targetCharacterId: 'char-player',
  })

  assert.equal(result.status, 'forbidden')
})

test('rejects sending to an NPC', async () => {
  const { useCase } = setup()

  const result = await useCase({
    campaignId: 'camp-1',
    actorUserId: 'user-master',
    catalogItemId: 'pf2e:equipment:dagger',
    targetCharacterId: 'char-npc',
  })

  assert.equal(result.status, 'target_not_active_player')
})

test('rejects sending to a pending (not yet active) player', async () => {
  const { useCase } = setup()

  const result = await useCase({
    campaignId: 'camp-1',
    actorUserId: 'user-master',
    catalogItemId: 'pf2e:equipment:dagger',
    targetCharacterId: 'char-pending',
  })

  assert.equal(result.status, 'target_not_active_player')
})

test('returns target_not_found for a character outside the campaign', async () => {
  const { useCase } = setup()

  const result = await useCase({
    campaignId: 'camp-1',
    actorUserId: 'user-master',
    catalogItemId: 'pf2e:equipment:dagger',
    targetCharacterId: 'char-unknown',
  })

  assert.equal(result.status, 'target_not_found')
})

test('returns catalog_item_not_found for an unknown catalog id', async () => {
  const { useCase } = setup()

  const result = await useCase({
    campaignId: 'camp-1',
    actorUserId: 'user-master',
    catalogItemId: 'pf2e:equipment:not-an-item',
    targetCharacterId: 'char-player',
  })

  assert.equal(result.status, 'catalog_item_not_found')
})

test('rejects a non-positive quantity', async () => {
  const { useCase } = setup()

  const result = await useCase({
    campaignId: 'camp-1',
    actorUserId: 'user-master',
    catalogItemId: 'pf2e:equipment:dagger',
    targetCharacterId: 'char-player',
    quantity: 0,
  })

  assert.equal(result.status, 'invalid_quantity')
})
