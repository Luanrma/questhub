import type { CampaignMemberRole } from '@prisma/client'

export type ChatMessageForPresentation = {
  id: string
  campaignId: string
  actorId: string
  actorName: string
  role: CampaignMemberRole
  content: string
  createdAt: Date
}

export function presentChatMessage(message: ChatMessageForPresentation, currentUserActorId?: string | null) {
  return {
    id: message.id,
    campaignId: message.campaignId,
    actorId: message.actorId,
    actorName: message.actorName,
    role: message.role,
    content: message.content,
    createdAt: message.createdAt,
    mine: currentUserActorId === message.actorId,
  }
}
