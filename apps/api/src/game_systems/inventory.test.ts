import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import {
  getGameSystemInventoryPolicy,
  registerGameSystemInventoryPolicy,
} from './inventory'
import { pathfinder2eInventoryPolicy } from './pathfinder_2e/inventory/policy'

function prismaModel(schema: string, modelName: string) {
  return schema.match(new RegExp(`model ${modelName} \\{([\\s\\S]*?)\\n\\}`))?.[1] ?? ''
}

test('a game system can register an inventory policy', () => {
  assert.equal(getGameSystemInventoryPolicy('PATHFINDER_2E'), null)

  registerGameSystemInventoryPolicy('PATHFINDER_2E', pathfinder2eInventoryPolicy)

  assert.equal(getGameSystemInventoryPolicy('PATHFINDER_2E'), pathfinder2eInventoryPolicy)
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

test('Prisma history contains the current baseline and additive feature migrations', () => {
  const migrationsPath = path.join(process.cwd(), 'apps', 'api', 'prisma', 'migrations')
  const migrationDirectories = readdirSync(migrationsPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort()

  assert.deepEqual(migrationDirectories, [
    '20260729000000_initial',
    '20260731024500_add_campaign_character_sheet_entries',
  ])
})
