import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()
const appFile = path.join(root, 'apps', 'web', 'src', 'App.tsx')
const prismaSchemaFile = path.join(root, 'apps', 'api', 'prisma', 'schema.prisma')
const tokenMenuFile = path.join(
  root,
  'apps',
  'web',
  'src',
  'vtt',
  'table',
  'components',
  'TokenContextMenu.tsx',
)
const managerFile = path.join(
  root,
  'apps',
  'web',
  'src',
  'game-systems',
  'CampaignCharacterSheetsModal.tsx',
)
const workspaceFile = path.join(
  root,
  'apps',
  'web',
  'src',
  'game-systems',
  'CampaignCharacterSheetWorkspace.tsx',
)
const globalCreatePage = path.join(root, 'apps', 'web', 'src', 'pages', 'CharacterCreatePage.tsx')
const globalLibraryPage = path.join(root, 'apps', 'web', 'src', 'pages', 'CharactersHomePage.tsx')
const externalRedirectPage = path.join(
  root,
  'apps',
  'web',
  'src',
  'game-systems',
  'CampaignCharacterSheetRedirectPage.tsx',
)
const globalSheetPage = path.join(
  root,
  'apps',
  'web',
  'src',
  'features',
  'pathfinder-2e',
  'character-sheet',
  'Pathfinder2eCharacterSheetPage.tsx',
)
const gameSystemRoutesFile = path.join(
  root,
  'apps',
  'api',
  'src',
  'game_systems',
  'registry',
  'register.ts',
)

function extractCreateSheetSchema(source: string) {
  const start = source.indexOf('const createCharacterSheetSchema')
  const end = source.indexOf('const updateCharacterSheetAssignmentsSchema')
  return source.slice(start, end)
}

test('global character and sheet screens no longer exist', () => {
  assert.equal(existsSync(globalCreatePage), false)
  assert.equal(existsSync(globalLibraryPage), false)
  assert.equal(existsSync(externalRedirectPage), false)
  assert.equal(existsSync(globalSheetPage), false)

  const appSource = readFileSync(appFile, 'utf8')
  assert.doesNotMatch(appSource, /characters\/:characterId\/pathfinder-2e-sheet/)
  assert.doesNotMatch(appSource, /campaigns\/:campaignId\/characters\/:characterId\/sheet/)
})

test('sheet entry points open the in-session workspace without browser navigation', () => {
  const tokenMenuSource = readFileSync(tokenMenuFile, 'utf8')
  const managerSource = readFileSync(managerFile, 'utf8')
  const workspaceSource = readFileSync(workspaceFile, 'utf8')

  assert.match(tokenMenuSource, /requestCampaignCharacterSheetOpen/)
  assert.match(managerSource, /requestCampaignCharacterSheetOpen/)
  assert.doesNotMatch(tokenMenuSource, /window\.open|navigate\s*\(/)
  assert.doesNotMatch(managerSource, /window\.open|navigate\s*\(/)
  assert.match(workspaceSource, /ResizableEdges/)
  assert.match(workspaceSource, /minimized/)
  assert.match(workspaceSource, /activePage/)
  assert.match(workspaceSource, /sheetId/)
  assert.doesNotMatch(workspaceSource, /characterId/)
})

test('only the campaign-scoped API creates mechanical sheets', () => {
  const gameSystemRoutesSource = readFileSync(gameSystemRoutesFile, 'utf8')

  assert.match(
    gameSystemRoutesSource,
    /app\.post\('\/api\/campaigns\/:campaignId\/character-sheets'/,
  )
  assert.match(gameSystemRoutesSource, /Apenas o Mestre pode criar fichas/)
  assert.match(gameSystemRoutesSource, /campaign\.gameSystem/)
})

test('creating a sheet does not require a player, NPC, Token or role', () => {
  const gameSystemRoutesSource = readFileSync(gameSystemRoutesFile, 'utf8')
  const createSchema = extractCreateSheetSchema(gameSystemRoutesSource)

  assert.match(createSchema, /name:/)
  assert.doesNotMatch(createSchema, /role:/)
  assert.doesNotMatch(createSchema, /assignedUserId:/)
  assert.doesNotMatch(createSchema, /tokenId:/)
  assert.match(gameSystemRoutesSource, /tx\.campaignCharacterSheet\.create/)
  assert.doesNotMatch(gameSystemRoutesSource, /ASSIGNMENT_REQUIRED/)
})

test('campaign sheets belong to actors and expose reversible controller and token assignments', () => {
  const prismaSource = readFileSync(prismaSchemaFile, 'utf8')
  const gameSystemRoutesSource = readFileSync(gameSystemRoutesFile, 'utf8')

  assert.match(prismaSource, /model CampaignCharacterSheet/)
  assert.match(prismaSource, /actorId\s+String\s+@unique/)
  assert.match(prismaSource, /characterSheet\s+CampaignCharacterSheet\?/)
  assert.match(gameSystemRoutesSource, /character-sheets\/:sheetId\/assignments/)
  assert.match(gameSystemRoutesSource, /controllerMemberId/)
  assert.match(gameSystemRoutesSource, /actorId: sheet\.actorId/)
})
