import type { PublicNpcHealth, PublicNpcHealthState, RawCombatHealth, VttCombatantHealth } from './types'

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

export function applyDamage(health: RawCombatHealth, amount: number): RawCombatHealth {
  const absorbedByTemp = Math.min(health.temporaryHitPoints, amount)
  const remaining = amount - absorbedByTemp

  return {
    ...health,
    temporaryHitPoints: health.temporaryHitPoints - absorbedByTemp,
    currentHitPoints: clamp(health.currentHitPoints - remaining, 0, health.maxHitPoints),
  }
}

export function applyHeal(health: RawCombatHealth, amount: number): RawCombatHealth {
  return {
    ...health,
    currentHitPoints: clamp(health.currentHitPoints + amount, 0, health.maxHitPoints),
  }
}

export function setCurrentHitPoints(health: RawCombatHealth, value: number): RawCombatHealth {
  return {
    ...health,
    currentHitPoints: clamp(value, 0, health.maxHitPoints),
  }
}

export function setMaxHitPoints(health: RawCombatHealth, value: number): RawCombatHealth {
  const maxHitPoints = Math.max(1, value)
  return {
    ...health,
    maxHitPoints,
    currentHitPoints: Math.min(health.currentHitPoints, maxHitPoints),
  }
}

export function setTemporaryHitPoints(health: RawCombatHealth, value: number): RawCombatHealth {
  return {
    ...health,
    temporaryHitPoints: Math.max(0, value),
  }
}

export function deriveHealthState(currentHitPoints: number): 'OK' | 'DOWN' {
  return currentHitPoints > 0 ? 'OK' : 'DOWN'
}

export function toCombatantHealth(health: RawCombatHealth): VttCombatantHealth {
  return {
    currentHitPoints: health.currentHitPoints,
    maxHitPoints: health.maxHitPoints,
    temporaryHitPoints: health.temporaryHitPoints,
    state: deriveHealthState(health.currentHitPoints),
  }
}

export function derivePublicNpcHealth(health: RawCombatHealth): PublicNpcHealth {
  const percentage = health.maxHitPoints > 0 ? health.currentHitPoints / health.maxHitPoints : 0
  return { state: derivePublicNpcHealthState(percentage), percentage }
}

function derivePublicNpcHealthState(percentage: number): PublicNpcHealthState {
  if (percentage <= 0) return 'DOWN'
  if (percentage < 0.25) return 'CRITICAL'
  if (percentage < 0.5) return 'BLOODIED'
  if (percentage < 0.75) return 'INJURED'
  if (percentage < 1) return 'SCRATCHED'
  return 'HEALTHY'
}
