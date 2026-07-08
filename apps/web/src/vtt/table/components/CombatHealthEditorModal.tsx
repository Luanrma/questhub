import { useEffect, useRef, useState } from 'react'
import { Heart, X } from 'lucide-react'
import type { VttCombatantHealth } from '../domain/types'

export function CombatHealthEditorModal({
  combatantName,
  initialHealth,
  onApplyDamage,
  onApplyHeal,
  onSaveValues,
  onClose,
}: {
  combatantName: string
  initialHealth: VttCombatantHealth | null
  onApplyDamage: (amount: number, note?: string) => void
  onApplyHeal: (amount: number, note?: string) => void
  onSaveValues: (
    patch: { currentHitPoints?: number; maxHitPoints?: number; temporaryHitPoints?: number },
    note?: string,
  ) => void
  onClose: () => void
}) {
  const [amountDraft, setAmountDraft] = useState('')
  const [currentDraft, setCurrentDraft] = useState(initialHealth ? String(initialHealth.currentHitPoints) : '')
  const [maxDraft, setMaxDraft] = useState(initialHealth ? String(initialHealth.maxHitPoints) : '')
  const [temporaryDraft, setTemporaryDraft] = useState(initialHealth ? String(initialHealth.temporaryHitPoints) : '')
  const [noteDraft, setNoteDraft] = useState('')
  const [hasSyncedInitial, setHasSyncedInitial] = useState(Boolean(initialHealth))
  const currentCommittedRef = useRef(currentDraft)
  const maxCommittedRef = useRef(maxDraft)
  const temporaryCommittedRef = useRef(temporaryDraft)

  useEffect(() => {
    if (hasSyncedInitial || !initialHealth) return
    const current = String(initialHealth.currentHitPoints)
    const max = String(initialHealth.maxHitPoints)
    const temporary = String(initialHealth.temporaryHitPoints)
    setCurrentDraft(current)
    setMaxDraft(max)
    setTemporaryDraft(temporary)
    currentCommittedRef.current = current
    maxCommittedRef.current = max
    temporaryCommittedRef.current = temporary
    setHasSyncedInitial(true)
  }, [initialHealth, hasSyncedInitial])

  const amount = Number(amountDraft)
  const canApplyAmount = amountDraft.trim() !== '' && Number.isFinite(amount) && amount > 0

  function applyDamage() {
    if (!canApplyAmount) return
    onApplyDamage(Math.round(amount), noteDraft.trim() || undefined)
    setAmountDraft('')
  }

  function applyHeal() {
    if (!canApplyAmount) return
    onApplyHeal(Math.round(amount), noteDraft.trim() || undefined)
    setAmountDraft('')
  }

  function commitCurrent() {
    if (currentDraft.trim() === '' || !Number.isFinite(Number(currentDraft)) || currentDraft === currentCommittedRef.current) return
    currentCommittedRef.current = currentDraft
    onSaveValues({ currentHitPoints: Math.round(Number(currentDraft)) }, noteDraft.trim() || undefined)
  }

  function commitMax() {
    if (maxDraft.trim() === '' || !Number.isFinite(Number(maxDraft)) || maxDraft === maxCommittedRef.current) return
    maxCommittedRef.current = maxDraft
    onSaveValues({ maxHitPoints: Math.round(Number(maxDraft)) }, noteDraft.trim() || undefined)
  }

  function commitTemporary() {
    if (temporaryDraft.trim() === '' || !Number.isFinite(Number(temporaryDraft)) || temporaryDraft === temporaryCommittedRef.current) return
    temporaryCommittedRef.current = temporaryDraft
    onSaveValues({ temporaryHitPoints: Math.round(Number(temporaryDraft)) }, noteDraft.trim() || undefined)
  }

  function commitOnEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') event.currentTarget.blur()
  }

  return (
    <div className="pointer-events-auto fixed inset-0 z-[90] grid place-items-center bg-black/60 p-4" onClick={onClose}>
      <div
        className="grid w-80 gap-4 rounded-lg border border-white/10 bg-[#101116]/95 p-4 text-white shadow-2xl backdrop-blur"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
          <div className="flex min-w-0 items-center gap-2">
            <Heart className="h-4 w-4 shrink-0 text-red-300" />
            <h2 className="truncate text-sm font-semibold">Vida - {combatantName}</h2>
          </div>
          <button type="button" title="Fechar" className="rounded-md p-1.5 text-zinc-300 transition hover:bg-white/10 hover:text-white" onClick={onClose}>
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <label className="grid min-w-0 gap-1 text-xs text-zinc-400">
            HP atual
            <input
              type="number"
              className="h-9 w-full min-w-0 rounded-md border border-white/10 bg-black/30 px-2 text-center text-sm text-white outline-none focus:border-red-300/60"
              value={currentDraft}
              onChange={(event) => setCurrentDraft(event.currentTarget.value)}
              onBlur={commitCurrent}
              onKeyDown={commitOnEnter}
            />
          </label>
          <label className="grid min-w-0 gap-1 text-xs text-zinc-400">
            HP maximo
            <input
              type="number"
              className="h-9 w-full min-w-0 rounded-md border border-white/10 bg-black/30 px-2 text-center text-sm text-white outline-none focus:border-red-300/60"
              value={maxDraft}
              onChange={(event) => setMaxDraft(event.currentTarget.value)}
              onBlur={commitMax}
              onKeyDown={commitOnEnter}
            />
          </label>
          <label className="grid min-w-0 gap-1 text-xs text-zinc-400">
            HP temp.
            <input
              type="number"
              className="h-9 w-full min-w-0 rounded-md border border-white/10 bg-black/30 px-2 text-center text-sm text-white outline-none focus:border-red-300/60"
              value={temporaryDraft}
              onChange={(event) => setTemporaryDraft(event.currentTarget.value)}
              onBlur={commitTemporary}
              onKeyDown={commitOnEnter}
            />
          </label>
        </div>
        <p className="-mt-2 text-[10px] text-zinc-500">Os valores salvam sozinhos ao sair do campo.</p>

        <div className="grid gap-2 border-t border-white/10 pt-3">
          <label className="grid gap-1 text-xs text-zinc-400">
            Quantidade (dano ou cura)
            <input
              type="number"
              min={1}
              className="h-9 rounded-md border border-white/10 bg-black/30 px-2 text-sm text-white outline-none focus:border-red-300/60"
              value={amountDraft}
              placeholder="0"
              onChange={(event) => setAmountDraft(event.currentTarget.value)}
            />
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              disabled={!canApplyAmount}
              className="flex h-9 items-center justify-center rounded-md bg-red-600 text-sm font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-45"
              onClick={applyDamage}
            >
              Aplicar dano
            </button>
            <button
              type="button"
              disabled={!canApplyAmount}
              className="flex h-9 items-center justify-center rounded-md bg-emerald-600 text-sm font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-45"
              onClick={applyHeal}
            >
              Aplicar cura
            </button>
          </div>
        </div>

        <label className="grid gap-1 text-xs text-zinc-400">
          Nota (opcional)
          <input
            type="text"
            maxLength={500}
            className="h-9 rounded-md border border-white/10 bg-black/30 px-2 text-sm text-white outline-none focus:border-red-300/60"
            value={noteDraft}
            onChange={(event) => setNoteDraft(event.currentTarget.value)}
          />
        </label>
      </div>
    </div>
  )
}
