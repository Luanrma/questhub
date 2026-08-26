import { Dice5, Loader2, Palette, RotateCcw, X } from 'lucide-react'
import { Button } from '../../../components/Button'
import { diceOptions, maxVisibleDice } from '../config/constants'
import type { DiceInputMode, DiceRollComposition, DiceSides } from '../domain/types'

type VttDicePanelProps = {
  canRollDice: boolean
  command: string
  diceThemeColor: string
  initializing: boolean
  inputMode: DiceInputMode
  labelInput: string
  modifierInput: string
  preview: (DiceRollComposition & { diceCount: number }) | null
  quantities: Record<DiceSides, number>
  remainingSlots: number
  rolling: boolean
  showClearButton: boolean
  visibleCount: number
  warning: string | null
  onClear: () => void
  onClose?: () => void
  onCommandChange: (value: string) => void
  onInputModeChange: (mode: DiceInputMode) => void
  onLabelChange: (value: string) => void
  onModifierChange: (value: string) => void
  onQuantityChange: (sides: DiceSides, value: string) => void
  onRoll: () => void
  onThemeColorChange: (value: string) => void
}

export function VttDicePanel({
  canRollDice,
  command,
  diceThemeColor,
  initializing,
  inputMode,
  labelInput,
  modifierInput,
  preview,
  quantities,
  remainingSlots,
  rolling,
  showClearButton,
  visibleCount,
  warning,
  onClear,
  onClose,
  onCommandChange,
  onInputModeChange,
  onLabelChange,
  onModifierChange,
  onQuantityChange,
  onRoll,
  onThemeColorChange,
}: VttDicePanelProps) {
  return (
    <div className="pointer-events-auto absolute left-24 top-20 z-30 max-h-[calc(100vh-6rem)] w-[min(360px,calc(100vw-128px))] overflow-y-auto rounded-lg border border-white/10 bg-black/60 p-3 text-white shadow-2xl backdrop-blur">
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

      <div className="mb-3 grid grid-cols-2 rounded-md border border-white/10 bg-black/25 p-1 text-xs font-semibold">
        <button type="button" className={inputMode === 'guided' ? 'rounded bg-indigo-600 px-2 py-1.5 text-white' : 'rounded px-2 py-1.5 text-zinc-400 hover:text-white'} onClick={() => onInputModeChange('guided')}>
          Seleção guiada
        </button>
        <button type="button" className={inputMode === 'expression' ? 'rounded bg-indigo-600 px-2 py-1.5 text-white' : 'rounded px-2 py-1.5 text-zinc-400 hover:text-white'} onClick={() => onInputModeChange('expression')}>
          Usar expressão
        </button>
      </div>

      {inputMode === 'guided' ? (
        <>
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
          <label className="mt-3 grid gap-1 text-[10px] font-semibold uppercase text-zinc-400">
            Modificador
            <input type="text" inputMode="numeric" value={modifierInput} placeholder="0, +7 ou -2" disabled={!canRollDice} className="h-9 rounded-md border border-white/10 bg-black/45 px-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-300/40 disabled:cursor-not-allowed disabled:opacity-60" onChange={(event) => onModifierChange(event.target.value)} />
          </label>
        </>
      ) : (
        <label className="grid gap-1 text-[10px] font-semibold uppercase text-zinc-400">
          Expressão
          <input type="text" value={command} placeholder="1d20+7 ou 2d6-2" disabled={!canRollDice} className="h-9 rounded-md border border-white/10 bg-black/45 px-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-300/40 disabled:cursor-not-allowed disabled:opacity-60" onChange={(event) => onCommandChange(event.target.value)} />
        </label>
      )}

      <label className="mt-3 grid gap-1 text-[10px] font-semibold uppercase text-zinc-400">
        Identificação opcional
        <input type="text" maxLength={120} value={labelInput} placeholder="Ataque com espada" disabled={!canRollDice} className="h-9 rounded-md border border-white/10 bg-black/45 px-3 text-sm normal-case text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-300/40 disabled:cursor-not-allowed disabled:opacity-60" onChange={(event) => onLabelChange(event.target.value)} />
      </label>

      <div className="mt-3 min-h-16 rounded-md border border-indigo-300/15 bg-indigo-500/5 px-3 py-2 text-xs">
        <div className="text-[10px] font-semibold uppercase text-zinc-500">Preview</div>
        {preview ? (
          <div className="mt-1 space-y-1">
            {preview.label ? <div className="font-semibold text-indigo-100">{preview.label}</div> : null}
            <div className="font-mono text-zinc-100">{preview.expression}</div>
            <div className="text-zinc-400">{preview.diceCount} dado(s) · modificador {preview.modifier >= 0 ? '+' : '-'}{Math.abs(preview.modifier)}</div>
          </div>
        ) : <div className="mt-1 text-zinc-500">Preencha uma composição válida.</div>}
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
        {showClearButton ? (
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
        ) : null}
      </div>

      <div className="mt-2 text-right text-[10px] uppercase text-zinc-500">
        {visibleCount}/{maxVisibleDice} dados na mesa
      </div>
    </div>
  )
}
