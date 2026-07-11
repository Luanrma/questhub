import test from 'node:test'
import assert from 'node:assert/strict'
import { createEquipItemUseCase } from './equip-item.use-case'
import { createGetArmorClassEquipmentUseCase } from './get-armor-class-equipment.use-case'
import { createInMemoryCampaignAccess } from './__fakes__/in-memory-campaign-access'
import { createInMemoryInventoryEventBus } from './__fakes__/in-memory-inventory-event-bus'
import { createInMemoryInventoryRepository } from './__fakes__/in-memory-inventory-repository'

function setup() {
  const { port: campaignAccess, seedCharacter } = createInMemoryCampaignAccess()
  const { repository: inventoryRepository, seedItemDefinition, seedInventoryItem } = createInMemoryInventoryRepository()
  const { eventBus } = createInMemoryInventoryEventBus()

  seedCharacter({ id: 'player-cc', campaignId: 'camp-1', characterId: 'char-player', userId: 'user-player', role: 'PLAYER', status: 'ACTIVE' })
  seedCharacter({ id: 'other-cc', campaignId: 'camp-1', characterId: 'char-other', userId: 'user-other', role: 'PLAYER', status: 'ACTIVE' })

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

  const armorItem = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: breastplate.id })
  const shieldItem = seedInventoryItem({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', characterId: 'char-player', itemDefinitionId: shield.id })

  const equipUseCase = createEquipItemUseCase({ inventoryRepository, eventBus, campaignAccess })
  const getArmorClassEquipmentUseCase = createGetArmorClassEquipmentUseCase({ inventoryRepository, campaignAccess })

  return { equipUseCase, getArmorClassEquipmentUseCase, armorItem, shieldItem }
}

test('returns null armor/shield facts when nothing is equipped', async () => {
  const { getArmorClassEquipmentUseCase } = setup()
  const result = await getArmorClassEquipmentUseCase({ campaignId: 'camp-1', characterId: 'char-player', actorUserId: 'user-player' })

  assert.equal(result.status, 'ok')
  if (result.status !== 'ok') return
  assert.equal(result.armor, null)
  assert.equal(result.shield, null)
})

test('owner sees resolved armor and shield facts once equipped', async () => {
  const { equipUseCase, getArmorClassEquipmentUseCase, armorItem, shieldItem } = setup()

  const equippedArmor = await equipUseCase({ campaignId: 'camp-1', inventoryItemId: armorItem.id, equipmentOptionKey: 'worn-armor', actorUserId: 'user-player' })
  assert.equal(equippedArmor.status, 'ok')
  if (equippedArmor.status !== 'ok') return
  const equippedShield = await equipUseCase({ campaignId: 'camp-1', inventoryItemId: shieldItem.id, equipmentOptionKey: 'shield', actorUserId: 'user-player' })
  assert.equal(equippedShield.status, 'ok')
  if (equippedShield.status !== 'ok') return

  const armorEquippedItemId = equippedArmor.inventory.equippedItems.find((e) => e.inventoryItemId === armorItem.id)!.id
  const shieldEquippedItemId = equippedShield.inventory.equippedItems.find((e) => e.inventoryItemId === shieldItem.id)!.id

  const result = await getArmorClassEquipmentUseCase({ campaignId: 'camp-1', characterId: 'char-player', actorUserId: 'user-player' })
  assert.equal(result.status, 'ok')
  if (result.status !== 'ok') return
  assert.deepEqual(result.armor, { equippedItemId: armorEquippedItemId, category: 'medium', itemBonus: 4, dexCap: 1 })
  assert.deepEqual(result.shield, { equippedItemId: shieldEquippedItemId, itemBonus: 2, raised: false })
})

test('master can view another players armor class equipment', async () => {
  const { port: campaignAccess, seedCharacter } = createInMemoryCampaignAccess()
  const { repository: inventoryRepository } = createInMemoryInventoryRepository()
  seedCharacter({ id: 'player-cc', campaignId: 'camp-1', characterId: 'char-player', userId: 'user-player', role: 'PLAYER', status: 'ACTIVE' })
  seedCharacter({ id: 'master-cc', campaignId: 'camp-1', characterId: 'char-master', userId: 'user-master', role: 'MASTER', status: 'ACTIVE' })

  const getArmorClassEquipmentUseCase = createGetArmorClassEquipmentUseCase({ inventoryRepository, campaignAccess })
  const result = await getArmorClassEquipmentUseCase({ campaignId: 'camp-1', characterId: 'char-player', actorUserId: 'user-master' })
  assert.equal(result.status, 'ok')
})

test('a third party cannot view someone elses armor class equipment', async () => {
  const { getArmorClassEquipmentUseCase } = setup()
  const result = await getArmorClassEquipmentUseCase({ campaignId: 'camp-1', characterId: 'char-player', actorUserId: 'user-other' })
  assert.equal(result.status, 'forbidden')
})

test('returns not_found for an unknown character', async () => {
  const { getArmorClassEquipmentUseCase } = setup()
  const result = await getArmorClassEquipmentUseCase({ campaignId: 'camp-1', characterId: 'missing', actorUserId: 'user-player' })
  assert.equal(result.status, 'not_found')
})
