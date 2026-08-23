import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import {
  getGameSystemInventoryPolicy,
  registerGameSystemInventoryPolicy,
} from './inventory'
import type { Pathfinder2eItemData } from './pathfinder_2e/content_catalog/items/types'
import { pathfinder2eInventoryPolicy } from './pathfinder_2e/inventory/policy'

function prismaModel(schema: string, modelName: string) {
  return schema.match(new RegExp(`model ${modelName} \\{([\\s\\S]*?)\\n\\}`))?.[1] ?? ''
}

function pathfinderItem(overrides: Partial<Pathfinder2eItemData>): Pathfinder2eItemData {
  return {
    schemaVersion: 1,
    name: 'Item',
    itemType: 'equipment',
    level: 0,
    rarity: 'common',
    traits: [],
    description: '',
    bulk: 0,
    price: {},
    usage: 'carried',
    category: 'adventuring-gear',
    group: 'gear',
    ...overrides,
  }
}

test('a game system can register an inventory policy', () => {
  assert.equal(getGameSystemInventoryPolicy('PATHFINDER_2E'), null)

  registerGameSystemInventoryPolicy('PATHFINDER_2E', pathfinder2eInventoryPolicy)

  assert.equal(getGameSystemInventoryPolicy('PATHFINDER_2E'), pathfinder2eInventoryPolicy)
})

test('Pathfinder equipable items stay individual while quantified items can stack', () => {
  const sword = pathfinderItem({
    name: 'Longsword',
    itemType: 'weapon',
    usage: 'held-in-one-hand',
    category: 'martial',
    group: 'sword',
    damage: { dice: 1, die: 'd8', type: 'slashing' },
  })
  const helmet = pathfinderItem({
    name: 'Helmet',
    usage: 'worn-headwear',
  })
  const arrows = pathfinderItem({
    name: 'Arrows',
    itemType: 'ammunition',
    usage: 'carried',
    category: 'ammunition',
    group: 'arrow',
  })
  const ration = pathfinderItem({
    name: 'Ration',
    usage: 'carried',
  })

  assert.equal(pathfinder2eInventoryPolicy.canStack(sword, { ...sword }), false)
  assert.equal(pathfinder2eInventoryPolicy.canStack(helmet, { ...helmet }), false)
  assert.equal(pathfinder2eInventoryPolicy.canStack(arrows, { ...arrows }), true)
  assert.equal(pathfinder2eInventoryPolicy.canStack(ration, { ...ration }), true)
  assert.equal(pathfinder2eInventoryPolicy.present?.(sword)?.iconKey, 'weapon')
  assert.equal(pathfinder2eInventoryPolicy.present?.(sword)?.catalogDomainKey, 'ITEMS')
})

test('campaign actor persistence replaces the global Character model', () => {
  const schema = readFileSync(path.join(process.cwd(), 'apps', 'api', 'prisma', 'schema.prisma'), 'utf8')
  const actorModel = prismaModel(schema, 'CampaignActor')
  const memberModel = prismaModel(schema, 'CampaignMember')
  const sheetModel = prismaModel(schema, 'CampaignCharacterSheet')

  assert.doesNotMatch(schema, /model Character \{/)
  assert.doesNotMatch(schema, /model CharacterSheet \{/)
  assert.doesNotMatch(schema, /model CampaignCharacter \{/)
  assert.match(actorModel, /campaignId\s+String/)
  assert.doesNotMatch(actorModel, /\buserId\b/)
  assert.match(actorModel, /controllerMemberId\s+String\?/)
  assert.match(memberModel, /userId\s+String/)
  assert.doesNotMatch(memberModel, /\bactorId\b/)
  assert.match(memberModel, /role\s+CampaignMemberRole/)
  assert.match(memberModel, /status\s+CampaignMemberStatus/)
  assert.match(sheetModel, /actorId\s+String\s+@unique/)
})

test('InventoryEntry stores neutral operational state separately from item data', () => {
  const schema = readFileSync(path.join(process.cwd(), 'apps', 'api', 'prisma', 'schema.prisma'), 'utf8')
  const entryModel = prismaModel(schema, 'InventoryEntry')

  assert.match(entryModel, /data\s+Json/)
  assert.match(entryModel, /state\s+Json\?/)
  assert.match(entryModel, /slotIndex\s+Int\?/)
  assert.doesNotMatch(entryModel, /equipped|armorClass|carryMode/i)
})

test('CampaignCharacterSheetEntry stays neutral across game systems', () => {
  const schema = readFileSync(path.join(process.cwd(), 'apps', 'api', 'prisma', 'schema.prisma'), 'utf8')
  const sheetModel = prismaModel(schema, 'CampaignCharacterSheet')
  const entryModel = prismaModel(schema, 'CampaignCharacterSheetEntry')

  assert.doesNotMatch(schema, /model CampaignCharacterSpell \{/)
  assert.match(sheetModel, /entries\s+CampaignCharacterSheetEntry\[\]/)
  assert.match(entryModel, /namespace\s+String/)
  assert.match(entryModel, /typeKey\s+String/)
  assert.match(entryModel, /catalogNamespace\s+String\?/)
  assert.match(entryModel, /catalogContentId\s+String\?/)
  assert.match(entryModel, /schemaVersion\s+Int/)
  assert.match(entryModel, /data\s+Json/)
  assert.match(entryModel, /state\s+Json\?/)
  assert.doesNotMatch(entryModel, /baseRank/)
  assert.doesNotMatch(entryModel, /\bspell\b/i)
})

test('CampaignActor creation makes the inventory capability explicit', () => {
  const sourceFile = path.join(
    process.cwd(),
    'apps',
    'api',
    'src',
    'game_systems',
    'registry',
    'register.ts',
  )
  const source = readFileSync(sourceFile, 'utf8')

  assert.match(source, /inventory:\s*\{\s*create:\s*\{\}\s*\}/)
  assert.equal(
    [...source.matchAll(/data:\s*withoutCampaignActorInventory\(\{/g)].length,
    2,
    'Catalog NPC creation and duplication must omit Inventory explicitly',
  )
})

test('nullable-slot migration is additive and converts legacy negative positions', () => {
  const migrationPath = path.join(
    process.cwd(),
    'apps',
    'api',
    'prisma',
    'migrations',
    '20260804180000_use_nullable_inventory_slots',
    'migration.sql',
  )
  const migration = readFileSync(migrationPath, 'utf8')
  const dropNotNullAt = migration.indexOf('ALTER COLUMN "slotIndex" DROP NOT NULL')
  const clearSlotAt = migration.indexOf('SET "slotIndex" = NULL')

  assert.ok(dropNotNullAt >= 0)
  assert.ok(clearSlotAt > dropNotNullAt)
  assert.match(migration, /"slotIndex" < 0/)
  assert.match(migration, /CHECK \("slotIndex" IS NULL OR "slotIndex" >= 0\)/)
})

test('Prisma history contains the current baseline and additive feature migrations', () => {
  const migrationsPath = path.join(process.cwd(), 'apps', 'api', 'prisma', 'migrations')
  const migrationDirectories = readdirSync(migrationsPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort()

  assert.deepEqual(migrationDirectories, [
    '20260729000000_initial',
    '20260731024500_add_campaign_character_sheet_entries',
    '20260803000000_add_inventory_entry_state',
    '20260803235000_move_equipped_items_outside_backpack',
    '20260804180000_use_nullable_inventory_slots',
    '20260820011000_add_campaign_actor_effects',
  ])
})
