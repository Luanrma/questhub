import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'

function prismaModel(schema: string, name: string) {
  const match = schema.match(new RegExp(`model ${name} \\{([\\s\\S]*?)\\n\\}`))
  assert.ok(match, `Expected Prisma model ${name}`)
  return match[1]
}

test('chat dialogue and mechanical game log use separate persistence models', () => {
  const schema = readFileSync(path.join(process.cwd(), 'apps', 'api', 'prisma', 'schema.prisma'), 'utf8')
  const chat = prismaModel(schema, 'ChatMessage')
  const encounter = prismaModel(schema, 'CampaignEncounter')
  const entry = prismaModel(schema, 'CampaignGameLogEntry')

  assert.doesNotMatch(chat, /eventType|encounterId|payload/)
  assert.match(encounter, /endedAt\s+DateTime\?/)
  assert.match(entry, /encounterId\s+String/)
  assert.match(entry, /eventType\s+String/)
  assert.match(entry, /payload\s+Json/)
  assert.match(entry, /fields: \[encounterId, campaignId\]/)
  assert.match(entry, /references: \[id, campaignId\]/)
})

test('game log migration enforces campaign-scoped encounter ownership', () => {
  const migration = readFileSync(path.join(
    process.cwd(),
    'apps',
    'api',
    'prisma',
    'migrations',
    '20260824230500_add_campaign_game_log',
    'migration.sql',
  ), 'utf8')

  assert.match(migration, /CREATE TABLE "CampaignEncounter"/)
  assert.match(migration, /CREATE TABLE "CampaignGameLogEntry"/)
  assert.match(migration, /FOREIGN KEY \("encounterId", "campaignId"\)/)
  assert.doesNotMatch(migration, /ALTER TABLE "ChatMessage"/)
})
