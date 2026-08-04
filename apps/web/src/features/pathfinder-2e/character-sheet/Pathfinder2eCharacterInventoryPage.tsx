import { useEffect, useRef, useState } from 'react'
import { Backpack, Loader2 } from 'lucide-react'
import { api } from '../../../lib/api'
import { CampaignInventoryModal } from '../../../game-systems/CampaignInventoryModal'
import type { Pathfinder2eCharacterSheetResponse } from './types'

type Props = {
  campaignId: string
  sheetId: string
}

type InventoryActorsResponse = {
  role: 'MASTER' | 'PLAYER'
}

export function Pathfinder2eCharacterInventoryPage({ campaignId, sheetId }: Props) {
  const [actorId, setActorId] = useState<string | null>(null)
  const [readOnly, setReadOnly] = useState(true)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const openedAutomatically = useRef(false)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    Promise.all([
      api<Pathfinder2eCharacterSheetResponse>(
        `/api/campaigns/${campaignId}/character-sheets/${sheetId}/pathfinder-2e`,
        { signal: controller.signal },
      ),
      api<InventoryActorsResponse>(
        `/api/campaigns/${campaignId}/inventory/actors`,
        { signal: controller.signal },
      ),
    ])
      .then(([sheetResponse, inventoryAccess]) => {
        if (controller.signal.aborted) return
        setActorId(sheetResponse.metadata.actorId)
        setReadOnly(inventoryAccess.role !== 'MASTER')
        if (!openedAutomatically.current) {
          openedAutomatically.current = true
          setOpen(true)
        }
      })
      .catch((cause) => {
        if (controller.signal.aborted) return
        setError(cause instanceof Error ? cause.message : 'Não foi possível abrir o inventário desta ficha.')
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [campaignId, sheetId])

  return (
    <section className="rounded-xl border border-indigo-300/20 bg-indigo-500/[0.08] p-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-200">
            <Backpack className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-white">Inventário do personagem</h2>
            <p className="mt-1 text-xs text-zinc-400">
              A mochila e os equipamentos pertencem ao mesmo ator desta ficha.
            </p>
          </div>
        </div>

        <button
          type="button"
          disabled={loading || !actorId}
          className="inline-flex items-center gap-2 rounded-lg border border-indigo-300/25 bg-indigo-500/15 px-4 py-2 text-sm font-semibold text-indigo-100 transition hover:bg-indigo-500/25 disabled:cursor-not-allowed disabled:opacity-40"
          onClick={() => setOpen(true)}
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Backpack className="h-4 w-4" />}
          Abrir inventário
        </button>
      </div>

      {error ? (
        <div className="mt-4 rounded-lg border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
          {error}
        </div>
      ) : null}

      {open && actorId ? (
        <CampaignInventoryModal
          campaignId={campaignId}
          actorId={actorId}
          readOnly={readOnly}
          zIndex={200}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </section>
  )
}
