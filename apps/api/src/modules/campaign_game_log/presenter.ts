import type { Prisma } from '@prisma/client'
import type { CampaignGameLogEntry } from './contracts'

export type PersistedCampaignGameLogEntry = {
  id: string
  campaignId: string
  encounterId: string
  eventType: string
  summary: string
  payload: Prisma.JsonValue
  createdAt: Date
}

export function presentPersistedGameLogEntry(entry: PersistedCampaignGameLogEntry): CampaignGameLogEntry {
  return {
    ...entry,
    payload: entry.payload as Prisma.JsonObject,
    createdAt: entry.createdAt.toISOString(),
    persistent: true,
  }
}
