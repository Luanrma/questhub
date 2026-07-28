import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
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

test('Pathfinder 2e initially stacks items with deeply equivalent JSON data', () => {
  const first = {
    schemaVersion: 1,
    name: 'Arrows',
    itemType: 'ammunition',
    traits: ['consumable'],
    price: { sp: 1 },
  }
  const equivalent = {
    price: { sp: 1 },
    traits: ['consumable'],
    itemType: 'ammunition',
    name: 'Arrows',
    schemaVersion: 1,
  }
  const different = {
    ...first,
    name: 'Wooden Arrows',
  }

  assert.equal(pathfinder2eInventoryPolicy.canStack(first, equivalent), true)
  assert.equal(pathfinder2eInventoryPolicy.canStack(first, different), false)
})

test('Pathfinder 2e presents opaque item JSON for the generic inventory UI', () => {
  const presentation = pathfinder2eInventoryPolicy.present?.({
    schemaVersion: 1,
    name: 'Longsword',
    itemType: 'weapon',
    level: 0,
    rarity: 'common',
    traits: ['versatile-p'],
    description: 'A martial sword.',
    bulk: 1,
    price: { gp: 1 },
    usage: 'held-in-one-hand',
    category: 'martial',
    group: 'sword',
  })

  assert.equal(presentation?.name, 'Longsword')
  assert.equal(presentation?.subtitle, 'Arma · Nível 0')
  assert.equal(presentation?.details?.some((detail) => detail.label === 'Preço' && detail.value === '1 po'), true)
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
  assert.match(memberModel, /userId\s+String/)
  assert.match(memberModel, /actorId\s+String\?/)
  assert.match(memberModel, /role\s+CampaignMemberRole/)
  assert.match(memberModel, /status\s+CampaignMemberStatus/)
  assert.match(sheetModel, /actorId\s+String\s+@unique/)
})

test('every CampaignActor creation also creates its inventory aggregate', () => {
  const sourceFiles = [
    path.join(process.cwd(), 'apps', 'api', 'src', 'modules', 'campaigns', 'routes.ts'),
    path.join(process.cwd(), 'apps', 'api', 'src', 'game_systems', 'registry', 'register.ts'),
  ]

  for (const sourceFile of sourceFiles) {
    const source = readFileSync(sourceFile, 'utf8')
    const creations = [...source.matchAll(/campaignActor\.create\(\{([\s\S]*?)\n\s*\}\)/g)]
    assert.equal(creations.length > 0, true, `Expected CampaignActor creation in ${sourceFile}`)
    for (const creation of creations) {
      assert.match(creation[1] ?? '', /inventory:\s*\{\s*create:\s*\{\}\s*\}/)
    }
  }
})
