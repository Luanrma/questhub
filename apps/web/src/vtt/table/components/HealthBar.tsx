import type { PublicNpcHealth, VttCombatantHealth } from '../domain/types'

const publicHealthLabels: Record<PublicNpcHealth['state'], string> = {
  HEALTHY: 'Saudavel',
  SCRATCHED: 'Levemente ferido',
  INJURED: 'Ferido',
  BLOODIED: 'Muito ferido',
  CRITICAL: 'A beira da queda',
  DOWN: 'Caido',
}

const publicHealthFallbackPercentage: Record<PublicNpcHealth['state'], number> = {
  HEALTHY: 100,
  SCRATCHED: 87,
  INJURED: 62,
  BLOODIED: 37,
  CRITICAL: 12,
  DOWN: 0,
}

export function isExactCombatantHealth(health: VttCombatantHealth | PublicNpcHealth): health is VttCombatantHealth {
  return 'currentHitPoints' in health
}

function barColorClass(percentage: number): string {
  if (percentage <= 0) return 'bg-zinc-600'
  if (percentage < 25) return 'bg-red-500'
  if (percentage < 50) return 'bg-orange-500'
  if (percentage < 75) return 'bg-yellow-500'
  return 'bg-emerald-500'
}

export function healthBarPercentage(health: VttCombatantHealth | PublicNpcHealth): number {
  if (isExactCombatantHealth(health)) {
    return health.maxHitPoints > 0 ? Math.max(0, Math.min(100, (health.currentHitPoints / health.maxHitPoints) * 100)) : 0
  }
  return health.percentage !== undefined
    ? Math.max(0, Math.min(100, health.percentage * 100))
    : publicHealthFallbackPercentage[health.state]
}

export function healthBarLabel(health: VttCombatantHealth | PublicNpcHealth): string {
  if (isExactCombatantHealth(health)) {
    const temp = health.temporaryHitPoints > 0 ? ` +${health.temporaryHitPoints}` : ''
    return `${health.currentHitPoints}/${health.maxHitPoints}${temp}`
  }
  return publicHealthLabels[health.state]
}

export function HealthBar({
  health,
  size = 'md',
  showLabel = true,
}: {
  health: VttCombatantHealth | PublicNpcHealth | null | undefined
  size?: 'sm' | 'md'
  showLabel?: boolean
}) {
  if (!health) return null

  const percentage = healthBarPercentage(health)
  const barHeight = size === 'sm' ? 'h-1.5' : 'h-2'
  const labelClass = size === 'sm' ? 'text-[10px]' : 'text-[11px]'

  return (
    <div className="grid gap-0.5">
      <div className={['w-full overflow-hidden rounded-full bg-black/60 ring-1 ring-black/40', barHeight].join(' ')}>
        <div
          className={['h-full rounded-full transition-all', barColorClass(percentage)].join(' ')}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel ? (
        <span className={[labelClass, 'font-semibold text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_0_4px_rgba(0,0,0,0.9)]'].join(' ')}>
          {healthBarLabel(health)}
        </span>
      ) : null}
    </div>
  )
}
