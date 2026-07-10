import { derivePublicNpcHealth, toCombatantHealth } from './health-rules'
import type { CombatantIdentity, PublicNpcHealth, RawCombatHealth, VttCombatantHealth } from './types'

export function presentHealthForRole(
  health: RawCombatHealth,
  combatant: Pick<CombatantIdentity, 'source' | 'hidden'>,
  role: 'MASTER' | 'PLAYER' | 'NPC' | undefined,
): VttCombatantHealth | PublicNpcHealth | null {
  if (combatant.hidden && role !== 'MASTER') return null
  if (role === 'MASTER' || combatant.source === 'character') return toCombatantHealth(health)

  return derivePublicNpcHealth(health)
}
