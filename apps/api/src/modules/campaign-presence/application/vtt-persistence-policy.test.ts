import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import {
  canonicalVttPersistenceEvents,
  canonicalVttPersistenceTrigger,
  forcedVttPersistenceTrigger,
} from './vtt-persistence-policy'

test('VTT persistence policy registers every canonical lifecycle event', () => {
  assert.deepEqual(canonicalVttPersistenceEvents, [
    'presence:session:start',
    'presence:session:pause',
    'presence:session:resume',
    'presence:session:end',
    'vtt:scene:select',
  ])
})

test('VTT persistence policy distinguishes canonical and explicitly forced triggers', () => {
  assert.deepEqual(canonicalVttPersistenceTrigger('presence:session:pause'), {
    kind: 'CANONICAL',
    event: 'presence:session:pause',
  })
  assert.deepEqual(forcedVttPersistenceTrigger('SCENE_IMPORT'), {
    kind: 'FORCED',
    reason: 'SCENE_IMPORT',
  })
  assert.throws(() => forcedVttPersistenceTrigger('   '), /exige uma razao/)
})

test('token movement handlers update live state without durable placement writes', () => {
  const socketSource = readFileSync(
    path.join(process.cwd(), 'apps', 'api', 'src', 'modules', 'campaign-presence', 'socket.ts'),
    'utf8',
  )
  const moveStart = socketSource.indexOf("socket.on('vtt:token:move',")
  const pathMoveStart = socketSource.indexOf("socket.on('vtt:token:move-path',")
  const removeStart = socketSource.indexOf("socket.on('vtt:token:remove',")

  assert.ok(moveStart >= 0 && pathMoveStart > moveStart && removeStart > pathMoveStart)

  for (const handlerSource of [
    socketSource.slice(moveStart, pathMoveStart),
    socketSource.slice(pathMoveStart, removeStart),
  ]) {
    assert.match(handlerSource, /setLiveSceneToken/)
    assert.doesNotMatch(handlerSource, /campaignTokenPlacement|persistCampaignLiveState|prisma\./)
  }
})
