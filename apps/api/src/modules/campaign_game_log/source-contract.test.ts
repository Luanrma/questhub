import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'

function source(...segments: string[]) {
  return readFileSync(path.join(process.cwd(), ...segments), 'utf8')
}

test('dice rolls publish mechanical events without using the dialogue channel', () => {
  const roller = source('apps', 'web', 'src', 'vtt', 'dice-roller', 'hooks', 'useVttDiceRoller.ts')
  const legacyPublisher = path.join(
    process.cwd(),
    'apps',
    'web',
    'src',
    'vtt',
    'dice-roller',
    'infrastructure',
    'chat',
    'diceRollChatPublisher.ts',
  )

  assert.match(roller, /socket\?\.emit\('vtt:dice:roll'/)
  assert.doesNotMatch(roller, /chat:message:create|publishDiceRollChatMessage|formatChatMessage/)
  assert.equal(existsSync(legacyPublisher), false)
})

test('campaign communication UI supports shared dock and detachable game log', () => {
  const panel = source('apps', 'web', 'src', 'components', 'CampaignGameLog.tsx')

  assert.match(panel, /> Chat/)
  assert.match(panel, /> Log/)
  assert.match(panel, /createPortal/)
  assert.match(panel, /ResizableEdges/)
  assert.match(panel, /setDetached\(false\); setSelected\('log'\)/)
  assert.match(panel, /Histórico/)
  assert.match(panel, /Temporário/)
})

test('server exposes campaign-scoped history and realtime game log facts', () => {
  const server = source('apps', 'api', 'src', 'server.ts')
  const routes = source('apps', 'api', 'src', 'modules', 'campaign_game_log', 'routes.ts')
  const presence = source('apps', 'api', 'src', 'modules', 'campaign-presence', 'socket.ts')

  assert.match(server, /registerCampaignGameLogRoutes\(app\)/)
  assert.match(routes, /status: 'ACTIVE'/)
  assert.match(routes, /campaignId: params\.data\.campaignId/)
  assert.match(presence, /game-log:entry:created/)
})
