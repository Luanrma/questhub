import { useEffect, useState } from 'react'
import { TriangleAlert } from 'lucide-react'
import { ApiError, api } from '../../../lib/api'
import type { BestiaryEntry } from '../../../features/bestiary/types'

const routineCache = new Map<string, BestiaryEntry>()

type Props = {
  campaignId: string
  hazardEntryId: string
  hazardName: string
}

export function HazardRoutineHint({ campaignId, hazardEntryId, hazardName }: Props) {
  const [entry, setEntry] = useState<BestiaryEntry | null>(() => routineCache.get(hazardEntryId) ?? null)
  const [loading, setLoading] = useState(!routineCache.has(hazardEntryId))
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const cached = routineCache.get(hazardEntryId)
    if (cached) {
      setEntry(cached)
      setLoading(false)
      return
    }

    let cancelled = false
    setLoading(true)
    setError(null)

    api<BestiaryEntry>(`/api/campaigns/${campaignId}/bestiary/${encodeURIComponent(hazardEntryId)}`)
      .then((response) => {
        if (cancelled) return
        routineCache.set(hazardEntryId, response)
        setEntry(response)
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof ApiError ? err.message : 'Nao foi possivel carregar a rotina.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [campaignId, hazardEntryId])

  const operationsSection = entry?.display.sheet?.sections.find((section) => section.key === 'operations')

  return (
    <div className="grid gap-1.5 rounded-md border border-amber-300/20 bg-amber-500/[0.06] p-2.5">
      <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-amber-200/80">
        <TriangleAlert className="h-3.5 w-3.5" />
        Rotina de {hazardName}
      </div>
      {loading ? <div className="text-xs text-zinc-400">Carregando rotina...</div> : null}
      {error ? <div className="text-xs text-red-300">{error}</div> : null}
      {!loading && !error && !operationsSection?.entries.length ? (
        <div className="text-xs text-zinc-500">Sem rotina detalhada registrada para este Hazard.</div>
      ) : null}
      {!loading
        ? operationsSection?.entries.map((sectionEntry) => (
            <div key={sectionEntry.key} className="text-xs text-zinc-300">
              <span className="font-semibold text-white">{sectionEntry.label}</span>
              {sectionEntry.value ? <span>: {sectionEntry.value}</span> : null}
              {sectionEntry.detail ? <div className="text-zinc-400">{sectionEntry.detail}</div> : null}
            </div>
          ))
        : null}
    </div>
  )
}
