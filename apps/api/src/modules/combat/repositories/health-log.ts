import { prisma } from '../../../db/prisma'
import type { CombatHealthOperation, RawCombatHealth } from '../domain/types'

export async function appendHealthLog(input: {
  campaignId: string
  sceneId: string
  tokenId: string
  actorUserId?: string | null
  actorCharacterId?: string | null
  operation: CombatHealthOperation
  amount?: number | null
  before: RawCombatHealth
  after: RawCombatHealth
  note?: string | null
}): Promise<void> {
  await prisma.campaignSceneTokenHealthLog.create({
    data: {
      campaignId: input.campaignId,
      sceneId: input.sceneId,
      tokenId: input.tokenId,
      actorUserId: input.actorUserId ?? null,
      actorCharacterId: input.actorCharacterId ?? null,
      operation: input.operation,
      amount: input.amount ?? null,
      before: input.before,
      after: input.after,
      note: input.note ?? null,
    },
  })
}
