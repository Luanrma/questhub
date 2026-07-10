import { prisma } from '../../../db/prisma'
import { findBestiaryEntry } from '../../game_systems/bestiary/registry'

export async function getCatalogSpeedFeet(campaignId: string, bestiaryCreatureId: string): Promise<number | null> {
  const campaign = await prisma.campaign.findUnique({
    where: { id: campaignId },
    select: { system: true },
  })
  if (!campaign) return null

  const entry = findBestiaryEntry(campaign.system, bestiaryCreatureId)
  if (!entry || entry.category !== 'npc') return null

  const stat = entry.display.stats.find((item) => item.key === 'speed')
  if (!stat) return null

  const feet = Number.parseFloat(stat.value)
  if (!Number.isFinite(feet) || feet <= 0) return null

  return feet
}
