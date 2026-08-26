import { Dice5 } from 'lucide-react'
import type { DiceResultPopupData } from '../hooks/useVttDiceRoller'

type DiceResultPopupProps = {
  result: DiceResultPopupData | null
  visible: boolean
}

export function DiceResultPopup({ result, visible }: DiceResultPopupProps) {
  if (!result || !visible) return null

  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[min(14rem,calc(100vw-3rem))] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-indigo-200/30 bg-zinc-950/85 px-3 py-2.5 text-center text-white shadow-[0_1.5rem_4rem_rgba(0,0,0,0.55)] backdrop-blur-md">
      <div className="mb-1.5 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase text-indigo-200">
        <Dice5 className="h-4 w-4" />
        {result.label ?? result.expression}
      </div>
      {result.label ? <div className="mb-1 text-xs text-zinc-400">{result.expression}</div> : null}
      <div className="text-[2rem] font-black leading-none text-white">{result.total}</div>
      <div className="mt-1.5 flex flex-wrap justify-center gap-1 text-xs font-semibold text-zinc-200">
        {result.groups.map((group) => (
          <span key={`${group.sides}-${group.values.join('-')}`} className="rounded-md border border-white/10 bg-white/10 px-1.5 py-0.5">
            D{group.sides}: {group.values.join(', ')}
          </span>
        ))}
      </div>
      <div className="mt-1.5 text-[11px] text-zinc-400">
        Dados {result.diceTotal} {result.modifier >= 0 ? '+' : '-'} {Math.abs(result.modifier)}
      </div>
    </div>
  )
}
