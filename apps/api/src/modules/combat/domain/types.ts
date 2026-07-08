export type VttCombatantHealth = {
  currentHitPoints: number
  maxHitPoints: number
  temporaryHitPoints: number
  state: 'OK' | 'DOWN'
}

export type PublicNpcHealthState = 'HEALTHY' | 'SCRATCHED' | 'INJURED' | 'BLOODIED' | 'CRITICAL' | 'DOWN'

export type PublicNpcHealth = {
  state: PublicNpcHealthState
  percentage?: number
}

export type CombatHealthOperation = 'DAMAGE' | 'HEAL' | 'SET_CURRENT' | 'SET_MAX' | 'SET_TEMPORARY' | 'CLEAR_TEMPORARY'

export type RawCombatHealth = {
  currentHitPoints: number
  maxHitPoints: number
  temporaryHitPoints: number
}

export type CombatantSource = 'character' | 'bestiary'

export type CombatantIdentity = {
  tokenId: string
  source: CombatantSource
  characterId: string | null
  bestiaryCreatureId: string | null
  ownerUserId: string
  hidden: boolean
}
