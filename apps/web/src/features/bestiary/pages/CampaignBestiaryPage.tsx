import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight, Footprints, Heart, Minus, Plus, Search, Shield, Sparkles } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { api } from '../../../lib/api'
import {
  PREPARED_BESTIARY_TOKENS_CHANGED_EVENT,
  readStoredCampaignUserSettings,
  storeCampaignUserSettings,
  type CampaignUserSettings,
} from '../../../vtt/dice-roller/infrastructure/storage/diceThemeStorage'
import { questhubBestiaryDragType } from '../../../vtt/table/config/constants'

type BestiaryCreature = {
  id: string
  system: string
  name: string
  display: {
    subtitle?: string
    level?: {
      label: string
      value: string
    }
    stats: Array<{
      key: string
      label: string
      value: string
    }>
    tags: string[]
  }
  token: {
    imageUrl: string | null
    fallbackInitials: string
    borderColor: string
  }
}

type BestiaryResponse = {
  campaignId: string
  system: 'PATHFINDER_2E' | 'DND_5E'
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
  creatures: BestiaryCreature[]
}

const systemLabels: Record<BestiaryResponse['system'], string> = {
  PATHFINDER_2E: 'Pathfinder 2e',
  DND_5E: 'Dungeons & Dragons 5e',
}

function CreatureToken({ creature, compact = false }: { creature: BestiaryCreature; compact?: boolean }) {
  const sizeClass = compact ? 'h-10 w-10' : 'h-14 w-14'

  if (creature.token.imageUrl) {
    return (
      <img
        src={creature.token.imageUrl}
        alt=""
        className={`${sizeClass} shrink-0 rounded-full border-2 object-cover shadow-lg`}
        style={{ borderColor: creature.token.borderColor }}
        draggable={false}
      />
    )
  }

  return (
    <div
      className={`${sizeClass} grid shrink-0 place-items-center rounded-full border-2 bg-black/45 text-sm font-bold text-white shadow-lg`}
      style={{
        borderColor: creature.token.borderColor,
        boxShadow: `0 0 22px ${creature.token.borderColor}33`,
      }}
      aria-hidden="true"
    >
      {creature.token.fallbackInitials}
    </div>
  )
}

const bestiaryPageSizeOptions = [10, 20] as const
const bestiaryRarityOptions = [
  { value: '', label: 'Todos' },
  { value: 'common', label: 'Comum' },
  { value: 'uncommon', label: 'Incomum' },
  { value: 'rare', label: 'Raro' },
  { value: 'unique', label: 'Unico' },
] as const

type BestiaryPageSize = (typeof bestiaryPageSizeOptions)[number]

function StatPill({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <span className="inline-flex h-8 max-w-full items-center gap-1.5 rounded-md border border-white/10 bg-black/25 px-2.5 text-xs font-semibold text-zinc-100">
      <span className="text-zinc-400">{icon}</span>
      <span className="min-w-0 truncate">{label}</span>
    </span>
  )
}

function statIcon(key: string) {
  if (key === 'armorClass') return <Shield className="h-3.5 w-3.5" />
  if (key === 'hitPoints') return <Heart className="h-3.5 w-3.5" />
  if (key === 'speed') return <Footprints className="h-3.5 w-3.5" />
  return <Sparkles className="h-3.5 w-3.5" />
}

export function CampaignBestiaryPage({ compact = false }: { compact?: boolean } = {}) {
  const { campaignId } = useParams()
  const [search, setSearch] = useState('')
  const [data, setData] = useState<BestiaryResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [preparedCreatureIds, setPreparedCreatureIds] = useState<string[]>([])
  const [savingCreatureId, setSavingCreatureId] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState<BestiaryPageSize>(10)
  const [levelFilter, setLevelFilter] = useState('')
  const [rarityFilter, setRarityFilter] = useState('')

  const query = useMemo(() => search.trim(), [search])
  const normalizedLevelFilter = useMemo(() => levelFilter.trim(), [levelFilter])
  const preparedCreatureIdSet = useMemo(() => new Set(preparedCreatureIds), [preparedCreatureIds])
  const totalPages = data?.pagination.totalPages ?? 1
  const totalCreatures = data?.pagination.total ?? 0

  useEffect(() => {
    setPage(1)
  }, [normalizedLevelFilter, pageSize, query, rarityFilter])

  useEffect(() => {
    if (!campaignId) return

    const controller = new AbortController()
    const timeout = window.setTimeout(() => {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams({
        page: String(page),
        limit: String(pageSize),
      })
      if (query) params.set('q', query)
      if (normalizedLevelFilter) params.set('level', normalizedLevelFilter)
      if (rarityFilter) params.set('rarity', rarityFilter)

      const qs = `?${params.toString()}`
      api<BestiaryResponse>(`/api/campaigns/${campaignId}/bestiary${qs}`, { signal: controller.signal })
        .then(setData)
        .catch((err) => {
          if (controller.signal.aborted) return
          setError(err instanceof Error ? err.message : 'Nao foi possivel carregar o bestiario.')
        })
        .finally(() => {
          if (!controller.signal.aborted) setLoading(false)
        })
    }, 180)

    return () => {
      window.clearTimeout(timeout)
      controller.abort()
    }
  }, [campaignId, normalizedLevelFilter, page, pageSize, query, rarityFilter])

  useEffect(() => {
    if (!data) return
    if (data.pagination.totalPages >= page) return
    setPage(data.pagination.totalPages)
  }, [data, page])

  useEffect(() => {
    if (!campaignId) return

    const storedSettings = readStoredCampaignUserSettings(campaignId)
    setPreparedCreatureIds(storedSettings.vtt.preparedBestiaryCreatureIds)

    let cancelled = false
    api<{ settings: CampaignUserSettings }>(`/api/campaigns/${campaignId}/my-settings`)
      .then((response) => {
        if (cancelled) return
        storeCampaignUserSettings(campaignId, response.settings)
        setPreparedCreatureIds(response.settings.vtt.preparedBestiaryCreatureIds)
      })
      .catch(() => {})

    return () => {
      cancelled = true
    }
  }, [campaignId])

  useEffect(() => {
    if (!campaignId) return

    function onPreparedBestiaryTokensChanged(event: Event) {
      const detail = (event as CustomEvent<{ campaignId?: string; creatureIds?: unknown }>).detail
      if (detail?.campaignId !== campaignId) return
      if (!Array.isArray(detail.creatureIds)) return

      setPreparedCreatureIds(
        Array.from(new Set(detail.creatureIds.filter((creatureId): creatureId is string => typeof creatureId === 'string' && creatureId.trim().length > 0))),
      )
    }

    window.addEventListener(PREPARED_BESTIARY_TOKENS_CHANGED_EVENT, onPreparedBestiaryTokensChanged)
    return () => window.removeEventListener(PREPARED_BESTIARY_TOKENS_CHANGED_EVENT, onPreparedBestiaryTokensChanged)
  }, [campaignId])

  function savePreparedCreatureIds(nextIds: string[], currentSettings: CampaignUserSettings, errorMessage: string) {
    if (!campaignId) return

    const nextSettings: CampaignUserSettings = {
      ...currentSettings,
      vtt: {
        ...currentSettings.vtt,
        preparedBestiaryCreatureIds: nextIds,
      },
    }

    setPreparedCreatureIds(nextIds)
    storeCampaignUserSettings(campaignId, nextSettings)

    void api<{ settings: CampaignUserSettings }>(`/api/campaigns/${campaignId}/my-settings`, {
      method: 'PATCH',
      body: JSON.stringify({ settings: { vtt: { preparedBestiaryCreatureIds: nextIds } } }),
    })
      .then((response) => {
        storeCampaignUserSettings(campaignId, response.settings)
        setPreparedCreatureIds(response.settings.vtt.preparedBestiaryCreatureIds)
      })
      .catch(() => {
        setPreparedCreatureIds(currentSettings.vtt.preparedBestiaryCreatureIds)
        storeCampaignUserSettings(campaignId, currentSettings)
        setError(errorMessage)
      })
      .finally(() => setSavingCreatureId(null))
  }

  function addCreatureToken(creature: BestiaryCreature) {
    if (!campaignId || preparedCreatureIdSet.has(creature.id) || savingCreatureId) return

    const currentSettings = readStoredCampaignUserSettings(campaignId)
    const nextIds = Array.from(new Set([...currentSettings.vtt.preparedBestiaryCreatureIds, creature.id]))

    setSavingCreatureId(creature.id)
    savePreparedCreatureIds(nextIds, currentSettings, 'Nao foi possivel adicionar o token ao toolbar.')
  }

  function removeCreatureToken(creature: BestiaryCreature) {
    if (!campaignId || !preparedCreatureIdSet.has(creature.id) || savingCreatureId) return

    const currentSettings = readStoredCampaignUserSettings(campaignId)
    const nextIds = currentSettings.vtt.preparedBestiaryCreatureIds.filter((creatureId) => creatureId !== creature.id)

    setSavingCreatureId(creature.id)
    savePreparedCreatureIds(nextIds, currentSettings, 'Nao foi possivel remover o token do toolbar.')
  }

  return (
    <div className={compact ? 'min-w-0 space-y-3 overflow-x-hidden' : 'min-w-0 space-y-5 overflow-x-hidden'}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className={compact ? 'text-xl font-semibold text-white' : 'text-2xl font-semibold text-white'}>Bestiario</h1>
          <p className={compact ? 'mt-1 text-xs text-zinc-300' : 'mt-2 text-sm text-zinc-300'}>
            {data ? systemLabels[data.system] : 'Carregando sistema da campanha...'}
          </p>
        </div>
        <div className="flex w-full max-w-3xl min-w-0 flex-wrap items-center justify-end gap-2">
          <label className="flex h-10 min-w-0 items-center gap-2 rounded-md border border-white/10 bg-black/25 px-3 text-xs font-semibold text-zinc-300">
            <span>Por pagina</span>
            <select
              value={pageSize}
              onChange={(event) => setPageSize(Number(event.target.value) as BestiaryPageSize)}
              className="min-w-0 bg-transparent text-white outline-none"
            >
              {bestiaryPageSizeOptions.map((option) => (
                <option key={option} value={option} className="bg-zinc-950 text-white">
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="flex h-10 min-w-0 items-center gap-2 rounded-md border border-white/10 bg-black/25 px-3 text-xs font-semibold text-zinc-300">
            <span>Nivel</span>
            <input
              value={levelFilter}
              onChange={(event) => setLevelFilter(event.target.value)}
              inputMode="numeric"
              placeholder="Todos"
              className="h-full w-16 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
            />
          </label>
          <select
            value={rarityFilter}
            onChange={(event) => setRarityFilter(event.target.value)}
            className="h-10 min-w-0 rounded-md border border-white/10 bg-black/25 px-3 text-xs font-semibold text-zinc-300 outline-none"
          >
            {bestiaryRarityOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-zinc-950 text-white">
                {option.label}
              </option>
            ))}
          </select>
          <div className="relative min-w-0 flex-1 basis-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar criatura ou trait"
              className="h-10 w-full rounded-md border border-white/10 bg-black/35 pl-9 pr-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-300/50"
            />
          </div>
        </div>
      </div>

      {error ? (
        <div className="rounded-lg border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">{error}</div>
      ) : null}

      {loading && !data ? <div className="text-sm text-zinc-400">Carregando bestiario...</div> : null}

      {data && data.creatures.length === 0 ? (
        <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-6 text-sm text-zinc-300">
          Nenhuma criatura encontrada.
        </div>
      ) : null}

      <div className={compact ? 'grid gap-2' : 'grid gap-3 lg:grid-cols-2'}>
        {data?.creatures.map((creature) => (
          <article
            key={creature.id}
            draggable
            title="Arraste para o tabuleiro para criar um token NPC"
            className={[
              'min-w-0 max-w-full cursor-grab overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition hover:border-indigo-300/40 hover:bg-white/[0.07] active:cursor-grabbing',
              compact ? 'p-3' : 'p-4',
            ].join(' ')}
            onDragStart={(event) => {
              event.dataTransfer.setData(questhubBestiaryDragType, creature.id)
              event.dataTransfer.effectAllowed = 'copy'
            }}
          >
            <div className={compact ? 'flex min-w-0 items-start gap-3' : 'flex min-w-0 items-start gap-4'}>
              <CreatureToken creature={creature} compact={compact} />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className={compact ? 'truncate text-sm font-semibold text-white' : 'truncate text-base font-semibold text-white'}>{creature.name}</h2>
                    {creature.display.subtitle ? <div className="mt-1 text-xs text-zinc-400">{creature.display.subtitle}</div> : null}
                  </div>
                  {creature.display.level ? (
                    <span className="shrink-0 rounded-md border border-indigo-300/20 bg-indigo-400/10 px-2 py-1 text-xs font-bold text-indigo-100">
                      {creature.display.level.label} {creature.display.level.value}
                    </span>
                  ) : null}
                </div>

                <div className={compact ? 'mt-2 flex flex-wrap gap-1.5' : 'mt-3 flex flex-wrap gap-2'}>
                  {creature.display.stats.map((stat) => (
                    <StatPill key={stat.key} icon={statIcon(stat.key)} label={`${stat.label} ${stat.value}`} />
                  ))}
                </div>

                <div className={compact ? 'mt-2 flex flex-wrap gap-1' : 'mt-3 flex flex-wrap gap-1.5'}>
                  {creature.display.tags.map((trait, index) => (
                    <span key={`${trait}:${index}`} className="max-w-full truncate rounded border border-white/10 bg-black/25 px-2 py-0.5 text-[11px] text-zinc-300">
                      {trait}
                    </span>
                  ))}
                </div>

                <div className={compact ? 'mt-3 flex flex-wrap gap-2' : 'mt-4 flex flex-wrap gap-2'}>
                  <button
                    type="button"
                    title="Adicionar Token"
                    aria-label="Adicionar Token"
                    disabled={preparedCreatureIdSet.has(creature.id) || savingCreatureId === creature.id}
                    className={[
                      'inline-flex max-w-full items-center gap-2 rounded-md border border-emerald-300/20 bg-emerald-500/10 px-3 text-xs font-semibold uppercase text-emerald-100 transition hover:bg-emerald-500/20 disabled:cursor-default disabled:border-white/10 disabled:bg-white/[0.04] disabled:text-zinc-400',
                      compact ? 'h-8' : 'h-9',
                    ].join(' ')}
                    onClick={(event) => {
                      event.preventDefault()
                      event.stopPropagation()
                      addCreatureToken(creature)
                    }}
                  >
                    <Plus className="h-4 w-4" />
                    <span className="min-w-0 truncate">Token</span>
                    <span className="sr-only">Adicionar Token</span>
                  </button>
                  {preparedCreatureIdSet.has(creature.id) ? (
                    <button
                      type="button"
                      title="Remover Token"
                      aria-label="Remover Token"
                      disabled={savingCreatureId === creature.id}
                      className={[
                        'inline-flex max-w-full items-center gap-2 rounded-md border border-red-300/20 bg-red-500/10 px-3 text-xs font-semibold uppercase text-red-100 transition hover:bg-red-500/20 disabled:cursor-default disabled:border-white/10 disabled:bg-white/[0.04] disabled:text-zinc-400',
                        compact ? 'h-8' : 'h-9',
                      ].join(' ')}
                      onClick={(event) => {
                        event.preventDefault()
                        event.stopPropagation()
                        removeCreatureToken(creature)
                      }}
                    >
                      <Minus className="h-4 w-4" />
                      <span className="min-w-0 truncate">Token</span>
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {data && totalCreatures > 0 ? (
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3 text-sm text-zinc-300">
          <span>
            Pagina {data.pagination.page} de {totalPages} - {totalCreatures} criaturas
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              title="Pagina anterior"
              disabled={page <= 1 || loading}
              className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-black/25 text-zinc-200 transition hover:border-indigo-300/40 hover:text-white disabled:cursor-default disabled:opacity-40"
              onClick={() => setPage((current) => Math.max(1, current - 1))}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              title="Proxima pagina"
              disabled={page >= totalPages || loading}
              className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-black/25 text-zinc-200 transition hover:border-indigo-300/40 hover:text-white disabled:cursor-default disabled:opacity-40"
              onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
