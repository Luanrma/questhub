import { orderedCurrencyEntries, type CurrencyBreakdown as CurrencyBreakdownValue } from '../domain/money'

const DENOMINATION_COLORS: Record<string, string> = {
  pp: 'text-zinc-200',
  gp: 'text-yellow-300',
  sp: 'text-slate-300',
  cp: 'text-orange-400',
}

export function CurrencyBreakdown({ breakdown }: { breakdown: CurrencyBreakdownValue }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      {orderedCurrencyEntries(breakdown).map(([key, value]) => (
        <span key={key} className="rounded-md border border-white/10 bg-black/20 px-2 py-1">
          <span className={DENOMINATION_COLORS[key] ?? 'text-zinc-200'}>{value}</span>{' '}
          <span className="text-zinc-500">{key}</span>
        </span>
      ))}
    </div>
  )
}
