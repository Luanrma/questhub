import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, ScrollText, Search, Sparkles } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { api } from '../../../lib/api'
import { SpellSheetModal } from '../components/SpellSheetModal'
import type { CampaignSpellCategory, CampaignSpellEntry, CampaignSpellListResponse } from '../types'

const systemLabels: Record<string, string> = {
  PATHFINDER_2E: 'Pathfinder 2e',
  DND_5E: 'Dungeons & Dragons 5e',
}

const spellsPageSizeOptions = [10, 20] as const

const spellCategoryOptions: Array<{ value: CampaignSpellCategory | 'all'; label: string }> = [
  { value: 'all', label: 'Magias e Rituais' },
  { value: 'spell', label: 'Magias' },
  { value: 'ritual', label: 'Rituais' },
]

const spellTraditionOptions = [
  { value: '', label: 'Todas as tradicoes' },
  { value: 'arcane', label: 'Arcana' },
  { value: 'divine', label: 'Divina' },
  { value: 'occult', label: 'Oculta' },
  { value: 'primal', label: 'Primordial' },
] as const

const spellsRarityOptions = [
  { value: '', label: 'Todos' },
  { value: 'common', label: 'Comum' },
  { value: 'uncommon', label: 'Incomum' },
  { value: 'rare', label: 'Raro' },
  { value: 'unique', label: 'Unico' },
] as const

type SpellsPageSize = (typeof spellsPageSizeOptions)[number]

function SpellIcon({ compact = false }: { compact?: boolean }) {
  const sizeClass = compact ? 'h-10 w-10' : 'h-14 w-14'

  return (
    <div className={`${sizeClass} grid shrink-0 place-items-center rounded-full border-2 border-white/10 bg-black/45 text-zinc-300 shadow-lg`} aria-hidden="true">
      <Sparkles className="h-5 w-5" />
    </div>
  )
}

export function CampaignSpellsPage({ compact = false }: { compact?: boolean } = {}) {
  const { campaignId } = useParams()
  const [search, setSearch] = useState('')
  const [data, setData] = useState<CampaignSpellListResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState<SpellsPageSize>(10)
  const [rankFilter, setRankFilter] = useState('')
  const [rarityFilter, setRarityFilter] = useState('')
  const [traditionFilter, setTraditionFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<CampaignSpellCategory | 'all'>('all')
  const [sheetSpell, setSheetSpell] = useState<CampaignSpellEntry | null>(null)

  const query = useMemo(() => search.trim(), [search])
  const normalizedRankFilter = useMemo(() => rankFilter.trim(), [rankFilter])
  const totalPages = data?.pagination.totalPages ?? 1
  const totalSpells = data?.pagination.total ?? 0

  useEffect(() => {
    if (!campaignId) return

    const controller = new AbortController()
    const timeout = window.setTimeout(() => {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams({
        page: String(page),
        limit: String(pageSize),
        category: categoryFilter,
      })
      if (query) params.set('q', query)
      if (normalizedRankFilter) params.set('rank', normalizedRankFilter)
      if (rarityFilter) params.set('rarity', rarityFilter)
      if (traditionFilter) params.set('tradition', traditionFilter)

      const qs = `?${params.toString()}`
      api<CampaignSpellListResponse>(`/api/campaigns/${campaignId}/spells${qs}`, { signal: controller.signal })
        .then((response) => {
          setData(response)
          if (response.pagination.totalPages < page) setPage(response.pagination.totalPages)
        })
        .catch((err) => {
          if (controller.signal.aborted) return
          setError(err instanceof Error ? err.message : 'Nao foi possivel carregar o livro de magias.')
        })
        .finally(() => {
          if (!controller.signal.aborted) setLoading(false)
        })
    }, 180)

    return () => {
      window.clearTimeout(timeout)
      controller.abort()
    }
  }, [campaignId, categoryFilter, normalizedRankFilter, page, pageSize, query, rarityFilter, traditionFilter])

  return (
    <div className={compact ? 'min-w-0 space-y-3 overflow-x-hidden' : 'min-w-0 space-y-5 overflow-x-hidden'}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className={compact ? 'text-xl font-semibold text-white' : 'text-2xl font-semibold text-white'}>Magias</h1>
          <p className={compact ? 'mt-1 text-xs text-zinc-300' : 'mt-2 text-sm text-zinc-300'}>
            {data ? systemLabels[data.system] ?? data.system : 'Carregando sistema da campanha...'}
          </p>
        </div>
        <div className="flex w-full max-w-3xl min-w-0 flex-wrap items-center justify-end gap-2">
          <label className="flex h-10 min-w-0 items-center gap-2 rounded-md border border-white/10 bg-black/25 px-3 text-xs font-semibold text-zinc-300">
            <span>Por pagina</span>
            <select
              value={pageSize}
              onChange={(event) => {
                setPage(1)
                setPageSize(Number(event.target.value) as SpellsPageSize)
              }}
              className="min-w-0 bg-transparent text-white outline-none"
            >
              {spellsPageSizeOptions.map((option) => (
                <option key={option} value={option} className="bg-zinc-950 text-white">
                  {option}
                </option>
              ))}
            </select>
          </label>
          <select
            value={categoryFilter}
            onChange={(event) => {
              setPage(1)
              setCategoryFilter(event.target.value as CampaignSpellCategory | 'all')
            }}
            className="h-10 min-w-0 rounded-md border border-white/10 bg-black/25 px-3 text-xs font-semibold text-zinc-300 outline-none"
          >
            {spellCategoryOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-zinc-950 text-white">
                {option.label}
              </option>
            ))}
          </select>
          <select
            value={traditionFilter}
            onChange={(event) => {
              setPage(1)
              setTraditionFilter(event.target.value)
            }}
            className="h-10 min-w-0 rounded-md border border-white/10 bg-black/25 px-3 text-xs font-semibold text-zinc-300 outline-none"
          >
            {spellTraditionOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-zinc-950 text-white">
                {option.label}
              </option>
            ))}
          </select>
          <label className="flex h-10 min-w-0 items-center gap-2 rounded-md border border-white/10 bg-black/25 px-3 text-xs font-semibold text-zinc-300">
            <span>Rank</span>
            <input
              value={rankFilter}
              onChange={(event) => {
                setPage(1)
                setRankFilter(event.target.value)
              }}
              inputMode="numeric"
              placeholder="Todos"
              className="h-full w-16 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
            />
          </label>
          <select
            value={rarityFilter}
            onChange={(event) => {
              setPage(1)
              setRarityFilter(event.target.value)
            }}
            className="h-10 min-w-0 rounded-md border border-white/10 bg-black/25 px-3 text-xs font-semibold text-zinc-300 outline-none"
          >
            {spellsRarityOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-zinc-950 text-white">
                {option.label}
              </option>
            ))}
          </select>
          <div className="relative min-w-0 flex-1 basis-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input
              value={search}
              onChange={(event) => {
                setPage(1)
                setSearch(event.target.value)
              }}
              placeholder="Buscar magia ou trait"
              className="h-10 w-full rounded-md border border-white/10 bg-black/35 pl-9 pr-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-300/50"
            />
          </div>
        </div>
      </div>

      {error ? <div className="rounded-lg border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">{error}</div> : null}

      {loading && !data ? <div className="text-sm text-zinc-400">Carregando livro de magias...</div> : null}

      {data && data.entries.length === 0 ? (
        <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-6 text-sm text-zinc-300">Nenhuma magia encontrada.</div>
      ) : null}

      <div className={compact ? 'grid gap-2' : 'grid gap-3 lg:grid-cols-2'}>
        {data?.entries.map((spell) => (
          <article
            key={spell.id}
            className={['min-w-0 max-w-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition hover:border-indigo-300/40 hover:bg-white/[0.07]', compact ? 'p-3' : 'p-4'].join(' ')}
          >
            <div className={compact ? 'flex min-w-0 items-start gap-3' : 'flex min-w-0 items-start gap-4'}>
              <SpellIcon compact={compact} />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className={compact ? 'truncate text-sm font-semibold text-white' : 'truncate text-base font-semibold text-white'}>{spell.name}</h2>
                    {spell.display.subtitle ? <div className="mt-1 text-xs text-zinc-400">{spell.display.subtitle}</div> : null}
                  </div>
                  {spell.display.level ? (
                    <span className="shrink-0 rounded-md border border-indigo-300/20 bg-indigo-400/10 px-2 py-1 text-xs font-bold text-indigo-100">
                      {spell.display.level.label} {spell.display.level.value}
                    </span>
                  ) : null}
                  <span className="shrink-0 rounded-md border border-white/10 bg-black/25 px-2 py-1 text-xs font-bold uppercase text-zinc-300">
                    {spell.category === 'ritual' ? 'Ritual' : 'Magia'}
                  </span>
                </div>

                <div className={compact ? 'mt-2 flex flex-wrap gap-1.5' : 'mt-3 flex flex-wrap gap-2'}>
                  {spell.display.stats.map((stat) => (
                    <span key={stat.key} className="inline-flex h-8 max-w-full items-center gap-1.5 rounded-md border border-white/10 bg-black/25 px-2.5 text-xs font-semibold text-zinc-100">
                      {stat.label} {stat.value}
                    </span>
                  ))}
                </div>

                <div className={compact ? 'mt-2 flex flex-wrap gap-1' : 'mt-3 flex flex-wrap gap-1.5'}>
                  {spell.display.tags.map((trait, index) => (
                    <span key={`${trait}:${index}`} className="max-w-full truncate rounded border border-white/10 bg-black/25 px-2 py-0.5 text-[11px] text-zinc-300">
                      {trait}
                    </span>
                  ))}
                </div>

                <div className={compact ? 'mt-3 flex flex-wrap gap-2' : 'mt-4 flex flex-wrap gap-2'}>
                  {spell.display.sheet?.sections.length ? (
                    <button
                      type="button"
                      title="Abrir Ficha"
                      aria-label="Abrir Ficha"
                      className={['inline-flex max-w-full items-center gap-2 rounded-md border border-sky-300/20 bg-sky-500/10 px-3 text-xs font-semibold uppercase text-sky-100 transition hover:bg-sky-500/20', compact ? 'h-8' : 'h-9'].join(' ')}
                      onClick={() => setSheetSpell(spell)}
                    >
                      <ScrollText className="h-4 w-4" />
                      <span className="min-w-0 truncate">Ficha</span>
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {data && totalSpells > 0 ? (
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3 text-sm text-zinc-300">
          <span>
            Pagina {data.pagination.page} de {totalPages} - {totalSpells} magias
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

      {campaignId && sheetSpell ? (
        <SpellSheetModal campaignId={campaignId} spellId={sheetSpell.id} initialSpell={sheetSpell} onClose={() => setSheetSpell(null)} />
      ) : null}
    </div>
  )
}
