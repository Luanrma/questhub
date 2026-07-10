import { prisma } from '../../../db/prisma'
import type { RawCombatHealth } from '../domain/types'

function toRawHealth(record: { currentHitPoints: number; maxHitPoints: number; temporaryHitPoints: number }): RawCombatHealth {
  return {
    currentHitPoints: record.currentHitPoints,
    maxHitPoints: record.maxHitPoints,
    temporaryHitPoints: record.temporaryHitPoints,
  }
}

export async function getTokenHealth(tokenId: string): Promise<RawCombatHealth | null> {
  const record = await prisma.campaignSceneTokenHealth.findUnique({ where: { tokenId } })
  return record ? toRawHealth(record) : null
}

export async function upsertTokenHealth(tokenId: string, health: RawCombatHealth): Promise<RawCombatHealth> {
  const record = await prisma.campaignSceneTokenHealth.upsert({
    where: { tokenId },
    create: {
      tokenId,
      currentHitPoints: health.currentHitPoints,
      maxHitPoints: health.maxHitPoints,
      temporaryHitPoints: health.temporaryHitPoints,
    },
    update: {
      currentHitPoints: health.currentHitPoints,
      maxHitPoints: health.maxHitPoints,
      temporaryHitPoints: health.temporaryHitPoints,
    },
  })
  return toRawHealth(record)
}
