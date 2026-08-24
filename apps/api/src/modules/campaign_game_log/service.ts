import { randomUUID } from 'node:crypto'
import type { Prisma } from '@prisma/client'
import { prisma } from '../../db/prisma'
import {
  campaignGameLogEventType,
  type CampaignEncounterEndReason,
  type CampaignGameLogEntry,
  type CampaignGameLogEventInput,
} from './contracts'
import { presentPersistedGameLogEntry } from './presenter'

type EncounterParticipantSnapshot = {
  tokenId: string
  actorId: string | null
  name: string
  initiative: number
}

function nowIso() {
  return new Date().toISOString()
}

export async function createCampaignEncounter(input: {
  campaignId: string
  sceneId: string
  participants: EncounterParticipantSnapshot[]
}) {
  const scene = await prisma.campaignScene.findFirst({
    where: { id: input.sceneId, campaignId: input.campaignId },
    select: { id: true, name: true },
  })
  if (!scene) return null

  const result = await prisma.$transaction(async (transaction) => {
    await transaction.campaignEncounter.updateMany({
      where: { campaignId: input.campaignId, endedAt: null },
      data: { endedAt: new Date(), endReason: 'REPLACED' },
    })

    const encounter = await transaction.campaignEncounter.create({
      data: {
        campaignId: input.campaignId,
        sceneId: scene.id,
        sceneNameSnapshot: scene.name,
      },
    })
    const entry = await transaction.campaignGameLogEntry.create({
      data: {
        campaignId: input.campaignId,
        encounterId: encounter.id,
        eventType: campaignGameLogEventType.encounterStarted,
        summary: `Encontro iniciado em ${scene.name}.`,
        payload: {
          sceneId: scene.id,
          sceneName: scene.name,
          participants: input.participants as unknown as Prisma.JsonArray,
        },
      },
    })
    return { encounter, entry }
  })
  return { encounter: result.encounter, entry: presentPersistedGameLogEntry(result.entry) }
}

export async function appendCampaignGameLogEntry(input: {
  campaignId: string
  encounterId?: string | null
  event: CampaignGameLogEventInput
}): Promise<CampaignGameLogEntry> {
  if (!input.encounterId) {
    return {
      id: randomUUID(),
      campaignId: input.campaignId,
      encounterId: null,
      eventType: input.event.eventType,
      summary: input.event.summary,
      payload: input.event.payload ?? {},
      createdAt: nowIso(),
      persistent: false,
    }
  }
  const encounterId = input.encounterId

  const entry = await prisma.$transaction(async (transaction) => {
    const encounter = await transaction.campaignEncounter.findFirst({
      where: { id: encounterId, campaignId: input.campaignId, endedAt: null },
      select: { id: true },
    })
    if (!encounter) throw new Error('Active encounter does not belong to campaign')

    return transaction.campaignGameLogEntry.create({
      data: {
        campaignId: input.campaignId,
        encounterId: encounter.id,
        eventType: input.event.eventType,
        summary: input.event.summary,
        payload: input.event.payload ?? {},
      },
    })
  })
  return presentPersistedGameLogEntry(entry)
}

export async function endCampaignEncounter(input: {
  campaignId: string
  encounterId: string
  reason: CampaignEncounterEndReason
}) {
  const entry = await prisma.$transaction(async (transaction) => {
    const encounter = await transaction.campaignEncounter.findFirst({
      where: { id: input.encounterId, campaignId: input.campaignId, endedAt: null },
      select: { id: true },
    })
    if (!encounter) return null

    const createdEntry = await transaction.campaignGameLogEntry.create({
      data: {
        campaignId: input.campaignId,
        encounterId: encounter.id,
        eventType: campaignGameLogEventType.encounterEnded,
        summary: 'Encontro encerrado.',
        payload: { reason: input.reason },
      },
    })
    await transaction.campaignEncounter.update({
      where: { id: encounter.id },
      data: { endedAt: new Date(), endReason: input.reason },
    })
    return createdEntry
  })
  return entry ? presentPersistedGameLogEntry(entry) : null
}
