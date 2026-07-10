import { useState } from 'react'
import { Coins } from 'lucide-react'
import type { WalletAdjustReason, WalletView } from '../domain/inventoryTypes'
import { CurrencyBreakdown } from './CurrencyBreakdown'

const ADJUST_REASONS: WalletAdjustReason[] = ['LOOT', 'REWARD', 'PURCHASE', 'SALE', 'CORRECTION', 'ADJUSTMENT']

export function WalletPanel({
  wallet,
  loading,
  error,
  canAdjust,
  canTransfer,
  onAdjust,
  onTransfer,
}: {
  wallet: WalletView | null
  loading: boolean
  error: string | null
  canAdjust: boolean
  canTransfer: boolean
  onAdjust: (deltaMinorUnit: number, reason: WalletAdjustReason) => void
  onTransfer: (toCharacterId: string, amountMinorUnit: number) => void
}) {
  const [deltaInput, setDeltaInput] = useState('')
  const [reason, setReason] = useState<WalletAdjustReason>('ADJUSTMENT')
  const [transferTarget, setTransferTarget] = useState('')
  const [transferAmount, setTransferAmount] = useState('')

  return (
    <section className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3">
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <Coins className="h-4 w-4 text-yellow-300" />
        <div>
          <div className="text-sm font-semibold text-white">Carteira</div>
          <div className="text-[11px] uppercase text-zinc-500">Pathfinder 2e</div>
        </div>
      </div>

      {loading ? <div className="text-xs text-zinc-500">Carregando carteira...</div> : null}
      {error ? <div className="text-xs text-red-400">{error}</div> : null}

      {wallet ? (
        <>
          <CurrencyBreakdown breakdown={wallet.display.breakdown} />

          {canAdjust ? (
            <form
              className="flex flex-wrap items-center gap-2"
              onSubmit={(event) => {
                event.preventDefault()
                const delta = Number(deltaInput)
                if (!Number.isInteger(delta) || delta === 0) return
                onAdjust(delta, reason)
                setDeltaInput('')
              }}
            >
              <input
                type="number"
                placeholder="Delta em cp (ex: 100 ou -50)"
                value={deltaInput}
                onChange={(event) => setDeltaInput(event.target.value)}
                className="w-40 rounded-md border border-white/10 bg-black/20 px-2 py-1 text-xs text-white"
              />
              <select
                value={reason}
                onChange={(event) => setReason(event.target.value as WalletAdjustReason)}
                className="rounded-md border border-white/10 bg-black/20 px-2 py-1 text-xs text-white"
              >
                {ADJUST_REASONS.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <button type="submit" className="rounded-md border border-yellow-400/30 bg-yellow-500/10 px-2 py-1 text-xs text-yellow-200 hover:bg-yellow-500/20">
                Ajustar
              </button>
            </form>
          ) : null}

          {canTransfer ? (
            <form
              className="flex flex-wrap items-center gap-2"
              onSubmit={(event) => {
                event.preventDefault()
                const amount = Number(transferAmount)
                if (!transferTarget.trim() || !Number.isInteger(amount) || amount <= 0) return
                onTransfer(transferTarget.trim(), amount)
                setTransferAmount('')
              }}
            >
              <input
                type="text"
                placeholder="ID do personagem destino"
                value={transferTarget}
                onChange={(event) => setTransferTarget(event.target.value)}
                className="w-44 rounded-md border border-white/10 bg-black/20 px-2 py-1 text-xs text-white"
              />
              <input
                type="number"
                placeholder="Valor em cp"
                value={transferAmount}
                onChange={(event) => setTransferAmount(event.target.value)}
                className="w-28 rounded-md border border-white/10 bg-black/20 px-2 py-1 text-xs text-white"
              />
              <button type="submit" className="rounded-md border border-indigo-400/30 bg-indigo-500/10 px-2 py-1 text-xs text-indigo-200 hover:bg-indigo-500/20">
                Transferir
              </button>
            </form>
          ) : null}
        </>
      ) : null}
    </section>
  )
}
