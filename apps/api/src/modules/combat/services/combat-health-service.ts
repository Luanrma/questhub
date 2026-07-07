import { applyDamage, applyHeal, setCurrentHitPoints, setMaxHitPoints, setTemporaryHitPoints } from '../domain/health-rules'
import { presentHealthForRole } from '../domain/presenter'
import type { CombatantIdentity, CombatHealthOperation, PublicNpcHealth, RawCombatHealth, VttCombatantHealth } from '../domain/types'
import { getCatalogHealth } from '../repositories/bestiary-health'
import { getCharacterHealth, writeCharacterHealth } from '../repositories/character-health'
import { appendHealthLog } from '../repositories/health-log'
import { getTokenHealth, upsertTokenHealth } from '../repositories/token-health'

async function getHealth(combatant: CombatantIdentity): Promise<RawCombatHealth | null> {
  if (combatant.source === 'character') {
    return combatant.characterId ? getCharacterHealth(combatant.characterId) : null
  }
  return getTokenHealth(combatant.tokenId)
}

async function persistHealth(combatant: CombatantIdentity, health: RawCombatHealth): Promise<RawCombatHealth | null> {
  if (combatant.source === 'character') {
    return combatant.characterId ? writeCharacterHealth(combatant.characterId, health) : null
  }
  return upsertTokenHealth(combatant.tokenId, health)
}

export async function getOrInitializeHealth(combatant: CombatantIdentity, campaignId: string): Promise<RawCombatHealth | null> {
  const existing = await getHealth(combatant)
  if (existing) return existing
  if (combatant.source !== 'bestiary' || !combatant.bestiaryCreatureId) return null

  const catalogHealth = await getCatalogHealth(campaignId, combatant.bestiaryCreatureId)
  if (!catalogHealth) return null

  return persistHealth(combatant, catalogHealth)
}

export async function adjustHealth(input: {
  combatant: CombatantIdentity
  campaignId: string
  sceneId: string
  operation: 'DAMAGE' | 'HEAL'
  amount: number
  actorUserId?: string | null
  actorCharacterId?: string | null
  note?: string | null
}): Promise<RawCombatHealth | null> {
  const before = await getOrInitializeHealth(input.combatant, input.campaignId)
  if (!before) return null

  const after = input.operation === 'DAMAGE' ? applyDamage(before, input.amount) : applyHeal(before, input.amount)
  const persisted = await persistHealth(input.combatant, after)
  if (!persisted) return null

  await appendHealthLog({
    campaignId: input.campaignId,
    sceneId: input.sceneId,
    tokenId: input.combatant.tokenId,
    actorUserId: input.actorUserId,
    actorCharacterId: input.actorCharacterId,
    operation: input.operation,
    amount: input.amount,
    before,
    after: persisted,
    note: input.note,
  })

  return persisted
}

const defaultRawHealth: RawCombatHealth = { currentHitPoints: 0, maxHitPoints: 1, temporaryHitPoints: 0 }

function primarySetOperation(input: { maxHitPoints?: number; currentHitPoints?: number; temporaryHitPoints?: number }): CombatHealthOperation {
  if (input.maxHitPoints !== undefined) return 'SET_MAX'
  if (input.currentHitPoints !== undefined) return 'SET_CURRENT'
  return 'SET_TEMPORARY'
}

export async function setHealth(input: {
  combatant: CombatantIdentity
  campaignId: string
  sceneId: string
  currentHitPoints?: number
  maxHitPoints?: number
  temporaryHitPoints?: number
  actorUserId?: string | null
  actorCharacterId?: string | null
  note?: string | null
}): Promise<RawCombatHealth | null> {
  const before = (await getOrInitializeHealth(input.combatant, input.campaignId)) ?? defaultRawHealth

  let next = before
  if (input.maxHitPoints !== undefined) next = setMaxHitPoints(next, input.maxHitPoints)
  if (input.currentHitPoints !== undefined) next = setCurrentHitPoints(next, input.currentHitPoints)
  if (input.temporaryHitPoints !== undefined) next = setTemporaryHitPoints(next, input.temporaryHitPoints)

  const persisted = await persistHealth(input.combatant, next)
  if (!persisted) return null

  await appendHealthLog({
    campaignId: input.campaignId,
    sceneId: input.sceneId,
    tokenId: input.combatant.tokenId,
    actorUserId: input.actorUserId,
    actorCharacterId: input.actorCharacterId,
    operation: primarySetOperation(input),
    before,
    after: persisted,
    note: input.note,
  })

  return persisted
}

export function presentHealthForCombatant(
  health: RawCombatHealth,
  combatant: Pick<CombatantIdentity, 'source' | 'hidden'>,
  role: 'MASTER' | 'PLAYER' | 'NPC' | undefined,
): VttCombatantHealth | PublicNpcHealth | null {
  return presentHealthForRole(health, combatant, role)
}
