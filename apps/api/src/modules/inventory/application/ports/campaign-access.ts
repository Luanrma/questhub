import type { GameSystemId } from '../../../game_systems/ports'

export type CampaignCharacterSummary = {
  id: string
  campaignId: string
  characterId: string
  userId: string
  role: 'MASTER' | 'PLAYER' | 'NPC'
  status: 'PENDING' | 'ACTIVE' | 'REJECTED' | 'LEFT' | 'DEAD'
}

export interface CampaignAccessPort {
  isActiveMaster(campaignId: string, userId: string): Promise<boolean>
  loadCampaignCharacterByCharacterId(campaignId: string, characterId: string): Promise<CampaignCharacterSummary | null>
  loadCampaignCharacterById(campaignCharacterId: string): Promise<CampaignCharacterSummary | null>
  loadCampaignSystem(campaignId: string): Promise<GameSystemId | null>
}
