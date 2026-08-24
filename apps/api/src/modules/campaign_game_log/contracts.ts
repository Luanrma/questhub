import type { Prisma } from '@prisma/client'

export const campaignGameLogEventType = {
  diceRoll: 'DICE_ROLL',
  encounterStarted: 'ENCOUNTER_STARTED',
  encounterParticipantsAdded: 'ENCOUNTER_PARTICIPANTS_ADDED',
  encounterParticipantsRemoved: 'ENCOUNTER_PARTICIPANTS_REMOVED',
  encounterInitiativeAdjusted: 'ENCOUNTER_INITIATIVE_ADJUSTED',
  encounterTurnChanged: 'ENCOUNTER_TURN_CHANGED',
  encounterEnded: 'ENCOUNTER_ENDED',
} as const

export type CampaignGameLogEventType = typeof campaignGameLogEventType[keyof typeof campaignGameLogEventType]

export type CampaignGameLogEntry = {
  id: string
  campaignId: string
  encounterId: string | null
  eventType: string
  summary: string
  payload: Prisma.JsonObject
  createdAt: string
  persistent: boolean
}

export type CampaignGameLogEventInput = {
  eventType: CampaignGameLogEventType
  summary: string
  payload?: Prisma.JsonObject
}

export type CampaignEncounterEndReason =
  | 'MANUAL'
  | 'NO_PARTICIPANTS'
  | 'SCENE_CHANGED'
  | 'SESSION_ENDED'
  | 'REPLACED'
