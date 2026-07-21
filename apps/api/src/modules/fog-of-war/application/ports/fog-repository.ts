import type { FogFixedLightSource, FogLightSourceConfig, SceneFogConfig, TokenVisionConfig } from '../../domain/config'
import type { FogExplorationMask } from '../../domain/exploration-mask'

export type FogCampaignAccess = {
  role: 'MASTER' | 'PLAYER'
  memberId: string | null
}

export type FogTokenRecord = {
  id: string
  campaignId: string
  controllerMemberId: string | null
  visionConfig: unknown
  lightConfig: unknown
  placement: { sceneId: string; layer: 'OBJECT' | 'TOKEN' | 'OVERLAY' } | null
}

export interface FogRepository {
  findAccess(campaignId: string, userId: string): Promise<FogCampaignAccess | null>
  sceneExists(campaignId: string, sceneId: string): Promise<boolean>
  findToken(campaignId: string, tokenId: string): Promise<FogTokenRecord | null>
  updateScene(input: { sceneId: string; fogConfig: SceneFogConfig; fixedLightSources: FogFixedLightSource[] }): Promise<void>
  updateTokenVision(tokenId: string, visionConfig: TokenVisionConfig): Promise<void>
  updateTokenLight(tokenId: string, lightConfig: FogLightSourceConfig): Promise<void>
  updatePlacementOcclusion(tokenId: string, blocksVisionAndLight: boolean): Promise<void>
  getExploration(sceneId: string, tokenId: string): Promise<FogExplorationMask | null>
  saveExploration(sceneId: string, tokenId: string, exploration: FogExplorationMask): Promise<void>
  listSceneExplorations(sceneId: string): Promise<Array<{ tokenId: string; exploration: FogExplorationMask }>>
}
