import { prisma } from '../../../db/prisma'
import { findBestiaryEntry } from '../../game_systems/bestiary/registry'
import type { RawCombatHealth } from '../domain/types'

export async function getCatalogHealth(campaignId: string, bestiaryCreatureId: string): Promise<RawCombatHealth | null> {
  const campaign = await prisma.campaign.findUnique({
    where: { id: campaignId },
    select: { system: true },
  })
  if (!campaign) return null

  const entry = findBestiaryEntry(campaign.system, bestiaryCreatureId)
  if (!entry || entry.category !== 'npc') return null

  const stat = entry.display.stats.find((item) => item.key === 'hitPoints')
  const hitPoints = stat ? Number(stat.value) : NaN
  if (!Number.isFinite(hitPoints) || hitPoints <= 0) return null

  return { currentHitPoints: hitPoints, maxHitPoints: hitPoints, temporaryHitPoints: 0 }
}
