import { prisma } from '../../../db/prisma'
import type { GameSystemId } from '../../game_systems/ports'
import type { CampaignAccessPort, CampaignCharacterSummary } from '../application/ports/campaign-access'

function loadCampaignCharacterByCharacterId(
  campaignId: string,
  characterId: string,
): Promise<CampaignCharacterSummary | null> {
  return prisma.campaignCharacter.findFirst({ where: { campaignId, characterId } })
}

function loadCampaignCharacterById(campaignCharacterId: string): Promise<CampaignCharacterSummary | null> {
  return prisma.campaignCharacter.findUnique({ where: { id: campaignCharacterId } })
}

async function isActiveMaster(campaignId: string, userId: string): Promise<boolean> {
  const master = await prisma.campaignCharacter.findFirst({
    where: { campaignId, userId, role: 'MASTER', status: 'ACTIVE' },
    select: { id: true },
  })
  return master !== null
}

async function loadCampaignSystem(campaignId: string): Promise<GameSystemId | null> {
  const campaign = await prisma.campaign.findUnique({ where: { id: campaignId }, select: { system: true } })
  return campaign?.system ?? null
}

export const prismaCampaignAccessRepository: CampaignAccessPort = {
  isActiveMaster,
  loadCampaignCharacterByCharacterId,
  loadCampaignCharacterById,
  loadCampaignSystem,
}
