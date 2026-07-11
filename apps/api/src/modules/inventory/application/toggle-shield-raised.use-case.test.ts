import test from 'node:test'
import assert from 'node:assert/strict'
import { createEquipItemUseCase } from './equip-item.use-case'
import { createToggleShieldRaisedUseCase } from './toggle-shield-raised.use-case'
import { createInMemoryCampaignAccess } from './__fakes__/in-memory-campaign-access'
import { createInMemoryInventoryEventBus } from './__fakes__/in-memory-inventory-event-bus'
import { createInMemoryInventoryRepository } from './__fakes__/in-memory-inventory-repository'

function setup() {
  const { port: campaignAccess, seedCharacter } = createInMemoryCampaignAccess()
  const { repository: inventoryRepository, seedItemDefinition, seedInventoryItem } = createInMemoryInventoryRepository()
  const { eventBus } = createInMemoryInventoryEventBus()

  seedCharacter({ id: 'player-cc', campaignId: 'camp-1', characterId: 'char-player', userId: 'user-player', role: 'PLAYER', status: 'ACTIVE' })
  seedCharacter({ id: 'other-cc', campaignId: 'camp-1', characterId: 'char-other', userId: 'user-other', role: 'PLAYER', status: 'ACTIVE' })

  const shield = seedItemDefinition({
    campaignId: 'camp-1',
    name: 'Steel Shield',
    itemType: 'shield',
    isStackable: false,
    schemaVersion: 2,
    classification: { role: 'shield', subtype: null },
    systemData: { ac: 2 },
    equipment: {
      equippable: true,
      options: [
        {
          key: 'shield',
          label: 'Escudo',
          resourceUsage: [
            { resource: 'pf2e:shield', amount: 1, exclusive: true },
            { resource: 'pf2e:hand:off', amount: 1, exclusive: true },
          ],
        },
      ],
    },
  })
  const breastplate = seedItemDefinition({
    campaignId: 'camp-1',
    name: 'Breastplate',
    itemType: 'armor',
    isStackable: false,
    schemaVersion: 2,
    classification: { role: 'armor', subtype: 'medium' },
    systemData: { category: 'medium', ac: 4, dexCap: 1 },
    equipment: {
      equippable: true,
      options: [{ key: 'worn-armor', label: 'Armadura', resourceUsage: [{ resource: 'pf2e:armor', amount: 1, exclusive: true }] }],
    },
  })

  const shieldItem = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: shield.id })
  const armorItem = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: breastplate.id })

  const equipUseCase = createEquipItemUseCase({ inventoryRepository, eventBus, campaignAccess })
  const toggleShieldRaisedUseCase = createToggleShieldRaisedUseCase({ inventoryRepository, eventBus, campaignAccess })

  return { equipUseCase, toggleShieldRaisedUseCase, shieldItem, armorItem }
}

test('owner raises and lowers their own equipped shield', async () => {
  const { equipUseCase, toggleShieldRaisedUseCase, shieldItem } = setup()
  const equipped = await equipUseCase({ campaignId: 'camp-1', inventoryItemId: shieldItem.id, equipmentOptionKey: 'shield', actorUserId: 'user-player' })
  assert.equal(equipped.status, 'ok')
  if (equipped.status !== 'ok') return

  const equippedItemId = equipped.inventory.equippedItems[0].id

  const raised = await toggleShieldRaisedUseCase({ campaignId: 'camp-1', equippedItemId, raised: true, actorUserId: 'user-player' })
  assert.equal(raised.status, 'ok')
  if (raised.status !== 'ok') return
  assert.equal((raised.inventory.equippedItems[0].systemData as { shieldRaised: boolean }).shieldRaised, true)

  const lowered = await toggleShieldRaisedUseCase({ campaignId: 'camp-1', equippedItemId, raised: false, actorUserId: 'user-player' })
  assert.equal(lowered.status, 'ok')
  if (lowered.status !== 'ok') return
  assert.equal((lowered.inventory.equippedItems[0].systemData as { shieldRaised: boolean }).shieldRaised, false)
})

test('rejects toggling raised state on a non-shield item', async () => {
  const { equipUseCase, toggleShieldRaisedUseCase, armorItem } = setup()
  const equipped = await equipUseCase({ campaignId: 'camp-1', inventoryItemId: armorItem.id, equipmentOptionKey: 'worn-armor', actorUserId: 'user-player' })
  assert.equal(equipped.status, 'ok')
  if (equipped.status !== 'ok') return

  const equippedItemId = equipped.inventory.equippedItems[0].id
  const result = await toggleShieldRaisedUseCase({ campaignId: 'camp-1', equippedItemId, raised: true, actorUserId: 'user-player' })
  assert.equal(result.status, 'not_a_shield')
})

test('a third party cannot raise someone elses shield', async () => {
  const { equipUseCase, toggleShieldRaisedUseCase, shieldItem } = setup()
  const equipped = await equipUseCase({ campaignId: 'camp-1', inventoryItemId: shieldItem.id, equipmentOptionKey: 'shield', actorUserId: 'user-player' })
  if (equipped.status !== 'ok') throw new Error('setup failed')

  const equippedItemId = equipped.inventory.equippedItems[0].id
  const result = await toggleShieldRaisedUseCase({ campaignId: 'camp-1', equippedItemId, raised: true, actorUserId: 'user-other' })
  assert.equal(result.status, 'item_belongs_to_another_character')
})

test('returns not_found for an unknown equipped item', async () => {
  const { toggleShieldRaisedUseCase } = setup()
  const result = await toggleShieldRaisedUseCase({ campaignId: 'camp-1', equippedItemId: 'missing', raised: true, actorUserId: 'user-player' })
  assert.equal(result.status, 'not_found')
})
