import type { CampaignMemberRole } from '@prisma/client'

export type ChatMessageForPresentation = {
  id: string
  campaignId: string
  actorId: string | null
  userId: string | null
  actorName: string
  actorAvatarUrl: string | null
  role: CampaignMemberRole
  content: string
  createdAt: Date
}

export function presentChatMessage(message: ChatMessageForPresentation, currentUserId?: string | null) {
  return {
    id: message.id,
    campaignId: message.campaignId,
    actorId: message.actorId,
    actorName: message.actorName,
    actorAvatarUrl: message.actorAvatarUrl,
    role: message.role,
    content: message.content,
    createdAt: message.createdAt,
    mine: Boolean(message.userId && currentUserId === message.userId),
  }
}
