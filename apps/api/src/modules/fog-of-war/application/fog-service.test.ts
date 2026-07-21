import assert from 'node:assert/strict'
import { test } from 'node:test'
import { FogService } from './fog-service'
import type { FogRepository } from './ports/fog-repository'
import type { FogExplorationMask } from '../domain/exploration-mask'

function createRepository(overrides: Partial<FogRepository> = {}) {
  const explorations = new Map<string, FogExplorationMask>()
  const repository: FogRepository = {
    async findAccess() { return { role: 'MASTER', memberId: 'member-master' } },
    async sceneExists() { return true },
    async findToken(campaignId, tokenId) {
      return { id: tokenId, campaignId, controllerMemberId: 'member-player', visionConfig: {}, lightConfig: {}, placement: { sceneId: 'scene-1', layer: 'TOKEN' } }
    },
    async updateScene() {},
    async updateTokenVision() {},
    async updateTokenLight() {},
    async updatePlacementOcclusion() {},
    async getExploration(sceneId, tokenId) { return explorations.get(`${sceneId}:${tokenId}`) ?? null },
    async saveExploration(sceneId, tokenId, exploration) { explorations.set(`${sceneId}:${tokenId}`, exploration) },
    async listSceneExplorations(sceneId) {
      return [...explorations.entries()].flatMap(([key, exploration]) => key.startsWith(`${sceneId}:`)
        ? [{ tokenId: key.slice(sceneId.length + 1), exploration }]
        : [])
    },
    ...overrides,
  }
  return { repository, explorations }
}

test('only the master can configure scene fog', async () => {
  const { repository } = createRepository({ async findAccess() { return { role: 'PLAYER', memberId: 'member-player' } } })
  const result = await new FogService(repository).configureScene({ campaignId: 'campaign-1', sceneId: 'scene-1', userId: 'player', fogConfig: {}, fixedLightSources: [] })
  assert.deepEqual(result, { ok: false, code: 'FORBIDDEN', message: 'Apenas o Mestre pode configurar o FOG' })
})

test('master configures token vision and its own light through dedicated contracts', async () => {
  let savedVision: unknown
  let savedLight: unknown
  const { repository } = createRepository({
    async updateTokenVision(_tokenId, visionConfig) { savedVision = visionConfig },
    async updateTokenLight(_tokenId, lightConfig) { savedLight = lightConfig },
  })
  const service = new FogService(repository)

  const visionResult = await service.configureTokenVision({
    campaignId: 'campaign-1', tokenId: 'token-1', userId: 'master', visionConfig: { rangeMeters: 24 },
  })
  const lightResult = await service.configureTokenLight({
    campaignId: 'campaign-1', tokenId: 'token-1', userId: 'master', lightConfig: { enabled: true, rangeMeters: 12 },
  })

  assert.equal(visionResult.ok, true)
  assert.equal(lightResult.ok, true)
  assert.deepEqual(savedVision, { rangeMeters: 24 })
  assert.deepEqual(savedLight, {
    id: 'token-light:token-1', enabled: true, rangeMeters: 12, permission: { allowedControllerMemberIds: [] },
  })
})

test('player exploration is restricted to the controlled token', async () => {
  const { repository } = createRepository({ async findAccess() { return { role: 'PLAYER', memberId: 'another-member' } } })
  const result = await new FogService(repository).loadExploration({ campaignId: 'campaign-1', sceneId: 'scene-1', tokenId: 'token-1', userId: 'player' })
  assert.equal(result.ok, false)
  if (!result.ok) assert.equal(result.code, 'FORBIDDEN')
})

test('exploration sync unions masks from concurrent connections', async () => {
  const { repository, explorations } = createRepository()
  const service = new FogService(repository)
  const first = { revision: 0, width: 4, height: 2, mask: Uint8Array.from([0b00000001]) }
  const second = { revision: 0, width: 4, height: 2, mask: Uint8Array.from([0b10000000]) }
  assert.equal((await service.syncExploration({ campaignId: 'campaign-1', sceneId: 'scene-1', tokenId: 'token-1', userId: 'master', exploration: first })).ok, true)
  assert.equal((await service.syncExploration({ campaignId: 'campaign-1', sceneId: 'scene-1', tokenId: 'token-1', userId: 'master', exploration: second })).ok, true)
  assert.deepEqual([...explorations.get('scene-1:token-1')!.mask], [0b10000001])
})

test('token-specific reset rejects a token placed in another scene', async () => {
  const { repository } = createRepository({
    async findToken(campaignId, tokenId) {
      return { id: tokenId, campaignId, controllerMemberId: null, visionConfig: {}, lightConfig: {}, placement: { sceneId: 'scene-2', layer: 'TOKEN' } }
    },
  })
  const result = await new FogService(repository).resetExploration({ campaignId: 'campaign-1', sceneId: 'scene-1', tokenId: 'token-1', userId: 'master' })
  assert.equal(result.ok, false)
  if (!result.ok) assert.equal(result.code, 'TOKEN_NOT_FOUND')
})
