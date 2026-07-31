import { useEffect, useMemo, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  LoaderCircle,
  Plus,
  Search,
  Sparkles,
  Trash2,
} from 'lucide-react'
import { api, ApiError } from '../../../lib/api'
import {
  readStoredPathfinder2eDisplaySettings,
  subscribeToPathfinder2eDisplaySettings,
} from './infrastructure/pathfinder2eDisplaySettingsStorage'

type LinkedSpell = {
  id: string
  contentId: string
  baseRank: number
  name: string
  description: string
  rarity: string
  traits: string[]
  traditions: string[]
  castingTime: string
  range: string
  target: string
  area: string | null
  duration: string
  defense: string | null
  damage: Array<{
    formula: string
    type: string
    kind: 'damage' | 'healing' | 'damage-or-healing'
  }>
  heightening: string
  imageUrl: string | null
  createdAt: string
}

type CatalogSpell = {
  contentId: string
  rank: number
  name: string
  description: string
  rarity: string
  traits: string[]
  traditions: string[]
  castingTime: string
  imageUrl: string | null
  linked: boolean
}

type CatalogResponse = {
  entries: CatalogSpell[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

type Props = {
  campaignId: string
  sheetId: string
}

function rankLabel(rank: number) {
  return rank === 0 ? 'Truques · Rank 0' : `Rank ${rank}`
}

function errorMessage(cause: unknown, fallback: string) {
  return cause instanceof ApiError ? cause.message : fallback
}

export function Pathfinder2eCharacterSpellsPanel({ campaignId, sheetId }: Props) {
  const [locale, setLocale] = useState<'pt-BR' | 'en-US'>(
    () => readStoredPathfinder2eDisplaySettings(campaignId).contentLocale,
  )
  const [linked, setLinked] = useState<LinkedSpell[]>([])
  const [catalog, setCatalog] = useState<CatalogResponse | null>(null)
  const [search, setSearch] = useState('')
  const [rank, setRank] = useState('all')
  const [page, setPage] = useState(1)
  const [loadingLinked, setLoadingLinked] = useState(true)
  const [loadingCatalog, setLoadingCatalog] = useState(true)
  const [mutatingId, setMutatingId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const baseEndpoint = useMemo(
    () => `/api/campaigns/${campaignId}/character-sheets/${sheetId}/pathfinder-2e/spells`,
    [campaignId, sheetId],
  )

  const grouped = useMemo(() => {
    const groups = new Map<number, LinkedSpell[]>()
    for (const spell of linked) {
      const entries = groups.get(spell.baseRank) ?? []
      entries.push(spell)
      groups.set(spell.baseRank, entries)
    }
    return [...groups.entries()].sort(([left], [right]) => left - right)
  }, [linked])

  useEffect(() => subscribeToPathfinder2eDisplaySettings(
    campaignId,
    (settings) => setLocale(settings.contentLocale),
  ), [campaignId])

  useEffect(() => {
    const controller = new AbortController()
    setLoadingLinked(true)
    setError(null)

    api<{ entries: LinkedSpell[] }>(
      `${baseEndpoint}?locale=${locale}`,
      { signal: controller.signal },
    )
      .then((response) => setLinked(response.entries))
      .catch((cause) => {
        if (!controller.signal.aborted) {
          setError(errorMessage(cause, 'Não foi possível carregar as magias vinculadas.'))
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoadingLinked(false)
      })

    return () => controller.abort()
  }, [baseEndpoint, locale])

  useEffect(() => {
    const controller = new AbortController()
    const timeout = window.setTimeout(() => {
      setLoadingCatalog(true)
      const params = new URLSearchParams({
        locale,
        page: String(page),
        limit: '24',
      })
      if (search.trim()) params.set('q', search.trim())
      if (rank !== 'all') params.set('rank', rank)

      api<CatalogResponse>(`${baseEndpoint}/catalog?${params.toString()}`, {
        signal: controller.signal,
      })
        .then(setCatalog)
        .catch((cause) => {
          if (!controller.signal.aborted) {
            setError(errorMessage(cause, 'Não foi possível consultar o catálogo de magias.'))
          }
        })
        .finally(() => {
          if (!controller.signal.aborted) setLoadingCatalog(false)
        })
    }, 180)

    return () => {
      controller.abort()
      window.clearTimeout(timeout)
    }
  }, [baseEndpoint, locale, page, rank, search])

  async function reload() {
    const [linkedResponse, catalogResponse] = await Promise.all([
      api<{ entries: LinkedSpell[] }>(`${baseEndpoint}?locale=${locale}`),
      (() => {
        const params = new URLSearchParams({ locale, page: String(page), limit: '24' })
        if (search.trim()) params.set('q', search.trim())
        if (rank !== 'all') params.set('rank', rank)
        return api<CatalogResponse>(`${baseEndpoint}/catalog?${params.toString()}`)
      })(),
    ])
    setLinked(linkedResponse.entries)
    setCatalog(catalogResponse)
  }

  async function addSpell(contentId: string) {
    if (mutatingId) return
    setMutatingId(contentId)
    setError(null)
    try {
      await api(`${baseEndpoint}`, {
        method: 'POST',
        body: JSON.stringify({ contentId }),
      })
      await reload()
    } catch (cause) {
      setError(errorMessage(cause, 'Não foi possível adicionar a magia.'))
    } finally {
      setMutatingId(null)
    }
  }

  async function removeSpell(spell: LinkedSpell) {
    if (mutatingId) return
    setMutatingId(spell.id)
    setError(null)
    try {
      await api<void>(`${baseEndpoint}/${spell.id}`, { method: 'DELETE' })
      await reload()
    } catch (cause) {
      setError(errorMessage(cause, 'Não foi possível remover a magia.'))
    } finally {
      setMutatingId(null)
    }
  }

  return (
    <div className="space-y-5 pb-6">
      <header className="rounded-xl border border-violet-300/20 bg-violet-500/10 p-5">
        <div className="flex items-start gap-3">
          <div className="rounded-lg border border-violet-300/25 bg-black/20 p-2 text-violet-200">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Magias da ficha</h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-zinc-300">
              O QuestHub registra as magias e organiza pelo Rank original do catálogo. Classe,
              tradição, preparação, slots e permissão de uso continuam sendo decisões da mesa.
            </p>
          </div>
        </div>
      </header>

      {error ? (
        <div className="rounded-xl border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
          {error}
        </div>
      ) : null}

      <section className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-violet-200">
              Vinculadas
            </h3>
            <p className="mt-1 text-xs text-zinc-500">Rank 0 representa truques.</p>
          </div>
          <span className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-zinc-300">
            {linked.length} {linked.length === 1 ? 'magia' : 'magias'}
          </span>
        </div>

        {loadingLinked ? (
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] p-5 text-sm text-zinc-400">
            <LoaderCircle className="h-4 w-4 animate-spin" /> Carregando magias...
          </div>
        ) : grouped.length === 0 ? (
          <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.025] p-6 text-sm text-zinc-400">
            Nenhuma magia foi vinculada a esta ficha.
          </div>
        ) : (
          grouped.map(([groupRank, spells]) => (
            <div key={groupRank} className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
              <h4 className="text-sm font-semibold text-white">{rankLabel(groupRank)}</h4>
              <div className="mt-3 grid gap-3 xl:grid-cols-2">
                {spells.map((spell) => (
                  <article key={spell.id} className="rounded-lg border border-white/10 bg-black/20 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h5 className="truncate font-semibold text-white">{spell.name}</h5>
                        <div className="mt-1 flex flex-wrap gap-1.5 text-[11px] uppercase text-zinc-400">
                          {spell.traditions.map((tradition) => (
                            <span key={tradition} className="rounded border border-white/10 px-1.5 py-0.5">
                              {tradition}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        type="button"
                        disabled={Boolean(mutatingId)}
                        onClick={() => void removeSpell(spell)}
                        title="Remover magia da ficha"
                        className="rounded-md border border-red-300/20 p-2 text-red-200 transition hover:bg-red-500/15 disabled:opacity-45"
                      >
                        {mutatingId === spell.id
                          ? <LoaderCircle className="h-4 w-4 animate-spin" />
                          : <Trash2 className="h-4 w-4" />}
                      </button>
                    </div>
                    <details className="mt-3 text-sm text-zinc-300">
                      <summary className="cursor-pointer text-xs font-semibold text-violet-200">
                        Consultar detalhes
                      </summary>
                      <div className="mt-3 space-y-2 leading-6">
                        <p className="whitespace-pre-line">{spell.description}</p>
                        <dl className="grid gap-2 text-xs sm:grid-cols-2">
                          <div><dt className="text-zinc-500">Conjuração</dt><dd>{spell.castingTime || '—'}</dd></div>
                          <div><dt className="text-zinc-500">Alcance</dt><dd>{spell.range || '—'}</dd></div>
                          <div><dt className="text-zinc-500">Alvo</dt><dd>{spell.target || '—'}</dd></div>
                          <div><dt className="text-zinc-500">Área</dt><dd>{spell.area || '—'}</dd></div>
                          <div><dt className="text-zinc-500">Duração</dt><dd>{spell.duration || '—'}</dd></div>
                          <div><dt className="text-zinc-500">Defesa</dt><dd>{spell.defense || '—'}</dd></div>
                        </dl>
                      </div>
                    </details>
                  </article>
                ))}
              </div>
            </div>
          ))
        )}
      </section>

      <section className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
        <div className="flex flex-wrap items-end gap-3">
          <label className="min-w-[220px] flex-1">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Buscar no catálogo
            </span>
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/25 px-3">
              <Search className="h-4 w-4 text-zinc-500" />
              <input
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value)
                  setPage(1)
                }}
                placeholder="Nome, tradição ou trait"
                className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-white outline-none placeholder:text-zinc-600"
              />
            </div>
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Rank
            </span>
            <select
              value={rank}
              onChange={(event) => {
                setRank(event.target.value)
                setPage(1)
              }}
              className="rounded-lg border border-white/10 bg-[#15161d] px-3 py-2.5 text-sm text-white outline-none"
            >
              <option value="all">Todos</option>
              {Array.from({ length: 11 }, (_, value) => (
                <option key={value} value={value}>
                  {value === 0 ? 'Truques · Rank 0' : `Rank ${value}`}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {loadingCatalog ? (
            <div className="col-span-full flex items-center gap-2 py-6 text-sm text-zinc-400">
              <LoaderCircle className="h-4 w-4 animate-spin" /> Consultando catálogo...
            </div>
          ) : catalog?.entries.length ? (
            catalog.entries.map((spell) => (
              <article key={spell.contentId} className="flex flex-col rounded-lg border border-white/10 bg-black/20 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-violet-300">
                      {rankLabel(spell.rank)}
                    </div>
                    <h4 className="mt-1 truncate font-semibold text-white">{spell.name}</h4>
                  </div>
                  <button
                    type="button"
                    disabled={spell.linked || Boolean(mutatingId)}
                    onClick={() => void addSpell(spell.contentId)}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-violet-300/25 bg-violet-500/10 px-2.5 py-2 text-xs font-semibold text-violet-100 transition hover:bg-violet-500/20 disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    {mutatingId === spell.contentId
                      ? <LoaderCircle className="h-3.5 w-3.5 animate-spin" />
                      : <Plus className="h-3.5 w-3.5" />}
                    {spell.linked ? 'Vinculada' : 'Adicionar'}
                  </button>
                </div>
                <p className="mt-3 line-clamp-3 text-xs leading-5 text-zinc-400">{spell.description}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-3 text-[10px] uppercase text-zinc-500">
                  {spell.traditions.map((tradition) => (
                    <span key={tradition} className="rounded border border-white/10 px-1.5 py-0.5">
                      {tradition}
                    </span>
                  ))}
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full py-6 text-sm text-zinc-400">
              Nenhuma magia encontrada com os filtros atuais.
            </div>
          )}
        </div>

        <footer className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-zinc-400">
          <span>{catalog?.pagination.total ?? 0} resultados</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={page <= 1 || loadingCatalog}
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              className="rounded-md border border-white/10 p-2 text-zinc-300 hover:bg-white/10 disabled:opacity-35"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span>Página {catalog?.pagination.page ?? page} de {Math.max(1, catalog?.pagination.totalPages ?? 1)}</span>
            <button
              type="button"
              disabled={loadingCatalog || !catalog || page >= catalog.pagination.totalPages}
              onClick={() => setPage((current) => current + 1)}
              className="rounded-md border border-white/10 p-2 text-zinc-300 hover:bg-white/10 disabled:opacity-35"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </footer>
      </section>
    </div>
  )
}
