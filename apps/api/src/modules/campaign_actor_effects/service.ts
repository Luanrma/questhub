import type {
  CampaignActorEffectPolarity,
  Prisma,
} from '@prisma/client'
import { prisma } from '../../db/prisma'

export const MANUAL_ACTOR_EFFECT_NAMESPACE = 'questhub:manual-effects:v1'
export const MANUAL_ACTOR_EFFECT_ORIGIN = { type: 'MANUAL' } as const

export type CreateActorEffectInput = {
  actorId: string
  namespace: string
  definitionKey?: string | null
  name: string
  description?: string | null
  iconUrl?: string | null
  polarity: CampaignActorEffectPolarity
  category?: string | null
  displayValue?: string | null
  schemaVersion?: number
  payload?: Prisma.InputJsonValue | null
  origin?: Prisma.InputJsonValue | null
}

export type UpdateActorEffectPresentationInput = {
  name?: string
  description?: string | null
  iconUrl?: string | null
  polarity?: CampaignActorEffectPolarity
  category?: string | null
  displayValue?: string | null
}

async function lockActiveActor(tx: Prisma.TransactionClient, actorId: string) {
  const actors = await tx.$queryRaw<Array<{ id: string }>>`
    SELECT "id"
    FROM "CampaignActor"
    WHERE "id" = ${actorId}
      AND "archivedAt" IS NULL
    FOR UPDATE
  `
  return actors[0] ?? null
}

export async function listActorEffects(actorId: string) {
  return prisma.campaignActorEffect.findMany({
    where: {
      actorId,
      actor: { is: { archivedAt: null } },
    },
    orderBy: [{ createdAt: 'asc' }, { id: 'asc' }],
  })
}

export async function createActorEffect(input: CreateActorEffectInput) {
  return prisma.$transaction(async (tx) => {
    const actor = await lockActiveActor(tx, input.actorId)
    if (!actor) return null

    return tx.campaignActorEffect.create({
      data: {
        actorId: actor.id,
        namespace: input.namespace,
        definitionKey: input.definitionKey ?? null,
        name: input.name,
        description: input.description ?? null,
        iconUrl: input.iconUrl ?? null,
        polarity: input.polarity,
        category: input.category ?? null,
        displayValue: input.displayValue ?? null,
        schemaVersion: input.schemaVersion ?? 1,
        payload: input.payload == null ? undefined : input.payload,
        origin: input.origin == null ? undefined : input.origin,
      },
    })
  })
}

export async function updateActorEffectPresentation(
  actorId: string,
  effectId: string,
  input: UpdateActorEffectPresentationInput,
) {
  return prisma.$transaction(async (tx) => {
    const actor = await lockActiveActor(tx, actorId)
    if (!actor) return null

    const existing = await tx.campaignActorEffect.findFirst({
      where: { id: effectId, actorId: actor.id },
      select: { id: true },
    })
    if (!existing) return null

    return tx.campaignActorEffect.update({
      where: { id: existing.id },
      data: input,
    })
  })
}

export async function deleteActorEffect(actorId: string, effectId: string) {
  return prisma.$transaction(async (tx) => {
    const actor = await lockActiveActor(tx, actorId)
    if (!actor) return false

    const existing = await tx.campaignActorEffect.findFirst({
      where: { id: effectId, actorId: actor.id },
      select: { id: true },
    })
    if (!existing) return false

    await tx.campaignActorEffect.delete({ where: { id: existing.id } })
    return true
  })
}
