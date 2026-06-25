import type { CampaignCharacterRole } from '@prisma/client'

export type ChatMessageForPresentation = {
  id: string
  campaignId: string
  characterId: string
  characterName: string
  role: CampaignCharacterRole
  content: string
  createdAt: Date
}

export function presentChatMessage(message: ChatMessageForPresentation, currentUserCharacterId?: string | null) {
  return {
    id: message.id,
    campaignId: message.campaignId,
    characterId: message.characterId,
    characterName: message.characterName,
    role: message.role,
    content: message.content,
    createdAt: message.createdAt,
    mine: currentUserCharacterId === message.characterId,
  }
}
