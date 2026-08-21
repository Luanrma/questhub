import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()
const routesFile = path.join(
  root,
  'apps',
  'api',
  'src',
  'modules',
  'campaign_character_sheet_context',
  'routes.ts',
)

function source() {
  return readFileSync(routesFile, 'utf8')
}

test('character sheet context exposes only the generic sheet-to-actor relation', () => {
  const text = source()

  assert.match(text, /character-sheets\/:sheetId\/context/)
  assert.match(text, /sheetId: sheet\.id/)
  assert.match(text, /actorId: sheet\.actor\.id/)
  assert.doesNotMatch(text, /gameSystem|systemKey|schemaVersion|data:|derived:/)
})

test('character sheet context preserves campaign isolation and active actor lifecycle', () => {
  const text = source()

  assert.match(text, /campaignId: params\.data\.campaignId/)
  assert.match(text, /status: 'ACTIVE'/)
  assert.match(text, /archivedAt: null/)
  assert.match(text, /canReadActorEffects/)
  assert.match(text, /controllerMemberId: sheet\.actor\.controllerMemberId/)
})

test('character sheet context is generic and contains no concrete game-system terms', () => {
  const text = source()

  assert.doesNotMatch(text, /game_systems|PATHFINDER|PF2E|Frightened|Condition|Spell/i)
})
