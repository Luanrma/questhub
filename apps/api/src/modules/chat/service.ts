import type { Server as SocketIOServer } from 'socket.io'
import { prisma } from '../../db/prisma'
import { campaignRoom } from '../campaign-presence/rooms'
import { presentChatMessage } from './presenter'
import { CHAT_MESSAGE_MAX_LENGTH } from './validation'

type CreateCampaignChatMessageInput = {
  io: SocketIOServer
  campaignId: string
  characterId: string
  userId: string
  content: string
}

export async function createAndBroadcastCampaignChatMessage(input: CreateCampaignChatMessageInput) {
  const content = input.content.trim()
  if (!content || content.length > CHAT_MESSAGE_MAX_LENGTH) return null

  const campaignCharacter = await prisma.campaignCharacter.findFirst({
    where: {
      campaignId: input.campaignId,
      characterId: input.characterId,
      status: 'ACTIVE',
    },
    select: {
      role: true,
      characterId: true,
      character: { select: { name: true } },
    },
  })
  if (!campaignCharacter) return null

  const message = await prisma.chatMessage.create({
    data: {
      campaign: { connect: { id: input.campaignId } },
      character: { connect: { id: campaignCharacter.characterId } },
      user: { connect: { id: input.userId } },
      content,
    },
    select: {
      id: true,
      campaignId: true,
      characterId: true,
      content: true,
      createdAt: true,
    },
  })

  const presented = presentChatMessage({
    ...message,
    characterName: campaignCharacter.character.name,
    role: campaignCharacter.role,
  })
  input.io.to(campaignRoom(input.campaignId)).emit('chat:message:created', presented)

  return presented
}
