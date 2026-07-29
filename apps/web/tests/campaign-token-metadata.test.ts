import assert from 'node:assert/strict'
import test from 'node:test'
import { mergeCampaignTokenMetadata } from '../src/vtt/table/domain/campaignTokenMetadata'
import type { CampaignToken } from '../src/vtt/table/domain/types'

const token: CampaignToken = {
  id: 'token-1',
  campaignId: 'campaign-1',
  actorId: null,
  name: 'Novo Token',
  avatarUrl: null,
  color: '#4f46e5',
  size: 1,
  canCustomizeAppearance: false,
  visionConfig: {},
  lightConfig: {},
  controllerMemberId: null,
  controllerUserId: null,
  controllerName: null,
  actorOwnerUserId: null,
  category: 'MASTER_ONLY',
  placement: null,
}

test('appearance metadata changes without restoring a stale placement', () => {
  const staleMetadata: CampaignToken = {
    ...token,
    avatarUrl: '/tokens/aranha.png',
    color: null,
    placement: {
      sceneId: 'scene-1',
      hidden: false,
      position: { x: 1, y: 1 },
      rotation: 0,
      layer: 'TOKEN',
      blocksVisionAndLight: false,
    },
  }

  assert.deepEqual(mergeCampaignTokenMetadata(token, staleMetadata), {
    ...staleMetadata,
    placement: null,
  })
})
