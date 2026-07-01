import { Dice5, Loader2, Palette, RotateCcw, X } from 'lucide-react'
import { Button } from '../../../components/Button'
import { diceOptions, maxVisibleDice } from '../config/constants'
import type { DiceSides } from '../domain/types'

type VttDicePanelProps = {
  canRollDice: boolean
  command: string
  diceThemeColor: string
  initializing: boolean
  quantities: Record<DiceSides, number>
  remainingSlots: number
  rolling: boolean
  selectedCount: number
  visibleCount: number
  warning: string | null
  onClear: () => void
  onClose?: () => void
  onCommandChange: (value: string) => void
  onQuantityChange: (sides: DiceSides, value: string) => void
  onRoll: () => void
  onThemeColorChange: (value: string) => void
}

export function VttDicePanel({
  canRollDice,
  command,
  diceThemeColor,
  initializing,
  quantities,
  remainingSlots,
  rolling,
  selectedCount,
  visibleCount,
  warning,
  onClear,
  onClose,
  onCommandChange,
  onQuantityChange,
  onRoll,
  onThemeColorChange,
}: VttDicePanelProps) {
  return (
    <div className="pointer-events-auto absolute left-24 top-20 z-30 w-[min(360px,calc(100vw-128px))] rounded-lg border border-white/10 bg-black/60 p-3 text-white shadow-2xl backdrop-blur">
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2 text-xs font-semibold uppercase text-zinc-400">
          <Dice5 className="h-4 w-4 text-indigo-300" />
          Dados
        </div>
        <button
          type="button"
          title="Fechar dados"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {warning ? <div className="mb-2 rounded-md border border-red-400/30 bg-red-500/15 px-3 py-2 text-xs font-semibold text-red-200">{warning}</div> : null}

      <div className="mb-3 flex items-center gap-2">
        <Dice5 className="h-4 w-4 text-indigo-300" />
        <input
          type="text"
          value={command}
          disabled={!canRollDice || selectedCount > 0}
          placeholder="1d20-5d6-3d10"
          className="h-9 min-w-0 flex-1 rounded-md border border-white/10 bg-black/45 px-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-300/40 disabled:cursor-not-allowed disabled:opacity-60"
          onChange={(event) => onCommandChange(event.target.value)}
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {diceOptions.map((sides) => (
          <label key={sides} className="grid gap-1 text-[10px] font-semibold uppercase text-zinc-400">
            D{sides}
            <input
              type="number"
              min={0}
              max={Math.max(0, remainingSlots + (quantities[sides] ?? 0))}
              value={quantities[sides] || ''}
              placeholder="0"
              disabled={!canRollDice}
              className="h-8 rounded-md border border-white/10 bg-black/45 px-2 text-sm font-semibold text-white outline-none transition placeholder:text-zinc-700 focus:border-indigo-300/40 disabled:cursor-not-allowed disabled:opacity-60"
              onChange={(event) => onQuantityChange(sides, event.target.value)}
            />
          </label>
        ))}
      </div>

      <label className="mt-3 flex items-center justify-between gap-3 rounded-md border border-white/10 bg-black/35 px-3 py-2 text-sm">
        <span className="flex items-center gap-2 text-zinc-200">
          <Palette className="h-4 w-4 text-zinc-500" />
          Cor dos dados
        </span>
        <input
          type="color"
          value={diceThemeColor}
          className="h-8 w-12 rounded border border-white/10 bg-transparent p-1"
          onChange={(event) => onThemeColorChange(event.target.value)}
        />
      </label>

      <div className="mt-3 flex items-center gap-2">
        <Button type="button" variant="primary" className="h-9 flex-1 gap-2 px-3" disabled={!canRollDice || rolling || initializing} onClick={onRoll}>
          {rolling || initializing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Dice5 className="h-4 w-4" />}
          Rolar Dados
        </Button>
        <button
          type="button"
          title="Limpar Dados"
          className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-md border border-white/10 px-3 text-xs font-semibold text-zinc-200 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!visibleCount}
          onClick={onClear}
        >
          <RotateCcw className="h-4 w-4" />
          Limpar Dados
        </button>
      </div>

      <div className="mt-2 text-right text-[10px] uppercase text-zinc-500">
        {visibleCount}/{maxVisibleDice} dados na mesa
      </div>
    </div>
  )
}
