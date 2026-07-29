import type { VttCombatParticipant } from '../domain/types'

export function CombatInitiativeControl({
  participant,
  isMaster,
  compact = false,
  onAdjustment,
}: {
  participant: VttCombatParticipant
  isMaster: boolean
  compact?: boolean
  onAdjustment: (initiativeAdjustment: number) => void
}) {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <strong
        title="Iniciativa total"
        className={['grid place-items-center rounded-md border border-red-300/25 bg-red-500/10 font-bold text-red-100', compact ? 'h-7 min-w-8 px-1 text-xs' : 'h-8 min-w-9 px-1.5 text-sm'].join(' ')}
      >
        {participant.initiative}
      </strong>
      {isMaster ? (
        <input
          key={`${participant.tokenId}:${participant.initiative}`}
          type="number"
          inputMode="numeric"
          min="-1000"
          max="1000"
          step="1"
          defaultValue=""
          placeholder="+/-"
          aria-label={`Ajuste de iniciativa de ${participant.name}`}
          title="Somar ajuste a iniciativa"
          className={['rounded border border-white/10 bg-black/35 text-center font-semibold text-white outline-none transition placeholder:text-zinc-600 focus:border-red-300/60', compact ? 'h-7 w-10 text-[10px]' : 'h-8 w-12 text-xs'].join(' ')}
          onBlur={(event) => {
            const rawValue = event.currentTarget.value.trim()
            if (!rawValue) return
            const initiativeAdjustment = Number(rawValue)
            event.currentTarget.value = ''
            if (!Number.isInteger(initiativeAdjustment) || initiativeAdjustment < -1000 || initiativeAdjustment > 1000) return
            onAdjustment(initiativeAdjustment)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') event.currentTarget.blur()
          }}
        />
      ) : null}
    </div>
  )
}
