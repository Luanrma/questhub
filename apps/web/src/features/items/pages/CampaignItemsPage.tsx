import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, ScrollText, Search, Package } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { api } from '../../../lib/api'
import { ItemSheetModal } from '../components/ItemSheetModal'
import { SendItemToPlayerMenu, type SendItemToPlayerOption } from '../components/SendItemToPlayerMenu'
import type { CampaignItemEntry, CampaignItemListResponse, CampaignItemType } from '../types'

type CampaignPlayerRow = {
  userId: string
  email: string
  role: 'MASTER' | 'PLAYER' | null
  status: 'PENDING' | 'ACTIVE' | 'REJECTED'
  characterId?: string | null
  characterName?: string | null
}

const systemLabels: Record<string, string> = {
  PATHFINDER_2E: 'Pathfinder 2e',
  DND_5E: 'Dungeons & Dragons 5e',
}

const itemsPageSizeOptions = [10, 20] as const

const itemTypeOptions: Array<{ value: CampaignItemType | 'all'; label: string }> = [
  { value: 'all', label: 'Todos os tipos' },
  { value: 'weapon', label: 'Armas' },
  { value: 'armor', label: 'Armaduras' },
  { value: 'shield', label: 'Escudos' },
  { value: 'equipment', label: 'Equipamentos' },
  { value: 'consumable', label: 'Consumiveis' },
  { value: 'treasure', label: 'Tesouros' },
  { value: 'backpack', label: 'Mochilas' },
  { value: 'kit', label: 'Kits' },
]

const itemsRarityOptions = [
  { value: '', label: 'Todos' },
  { value: 'common', label: 'Comum' },
  { value: 'uncommon', label: 'Incomum' },
  { value: 'rare', label: 'Raro' },
  { value: 'unique', label: 'Unico' },
] as const

type ItemsPageSize = (typeof itemsPageSizeOptions)[number]

function ItemIcon({ compact = false }: { compact?: boolean }) {
  const sizeClass = compact ? 'h-10 w-10' : 'h-14 w-14'

  return (
    <div className={`${sizeClass} grid shrink-0 place-items-center rounded-full border-2 border-white/10 bg-black/45 text-zinc-300 shadow-lg`} aria-hidden="true">
      <Package className="h-5 w-5" />
    </div>
  )
}

export function CampaignItemsPage({ compact = false }: { compact?: boolean } = {}) {
  const { campaignId } = useParams()
  const [search, setSearch] = useState('')
  const [data, setData] = useState<CampaignItemListResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState<ItemsPageSize>(10)
  const [levelFilter, setLevelFilter] = useState('')
  const [rarityFilter, setRarityFilter] = useState('')
  const [itemTypeFilter, setItemTypeFilter] = useState<CampaignItemType | 'all'>('all')
  const [sheetItem, setSheetItem] = useState<CampaignItemEntry | null>(null)
  const [activePlayers, setActivePlayers] = useState<SendItemToPlayerOption[]>([])

  const query = useMemo(() => search.trim(), [search])
  const normalizedLevelFilter = useMemo(() => levelFilter.trim(), [levelFilter])
  const totalPages = data?.pagination.totalPages ?? 1
  const totalItems = data?.pagination.total ?? 0

  useEffect(() => {
    if (!campaignId) return

    const controller = new AbortController()
    const timeout = window.setTimeout(() => {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams({
        page: String(page),
        limit: String(pageSize),
        itemType: itemTypeFilter,
      })
      if (query) params.set('q', query)
      if (normalizedLevelFilter) params.set('level', normalizedLevelFilter)
      if (rarityFilter) params.set('rarity', rarityFilter)

      const qs = `?${params.toString()}`
      api<CampaignItemListResponse>(`/api/campaigns/${campaignId}/items${qs}`, { signal: controller.signal })
        .then((response) => {
          setData(response)
          if (response.pagination.totalPages < page) setPage(response.pagination.totalPages)
        })
        .catch((err) => {
          if (controller.signal.aborted) return
          setError(err instanceof Error ? err.message : 'Nao foi possivel carregar o catalogo de itens.')
        })
        .finally(() => {
          if (!controller.signal.aborted) setLoading(false)
        })
    }, 180)

    return () => {
      window.clearTimeout(timeout)
      controller.abort()
    }
  }, [campaignId, itemTypeFilter, normalizedLevelFilter, page, pageSize, query, rarityFilter])

  useEffect(() => {
    if (!campaignId) return

    let cancelled = false
    api<CampaignPlayerRow[]>(`/api/campaigns/${campaignId}/players`)
      .then((rows) => {
        if (cancelled) return
        setActivePlayers(
          rows
            .filter((row): row is CampaignPlayerRow & { characterId: string } => row.role === 'PLAYER' && row.status === 'ACTIVE' && Boolean(row.characterId))
            .map((row) => ({ characterId: row.characterId, characterName: row.characterName ?? null, email: row.email })),
        )
      })
      .catch(() => {})

    return () => {
      cancelled = true
    }
  }, [campaignId])

  return (
    <div className={compact ? 'min-w-0 space-y-3 overflow-x-hidden' : 'min-w-0 space-y-5 overflow-x-hidden'}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className={compact ? 'text-xl font-semibold text-white' : 'text-2xl font-semibold text-white'}>Itens</h1>
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
                setPageSize(Number(event.target.value) as ItemsPageSize)
              }}
              className="min-w-0 bg-transparent text-white outline-none"
            >
              {itemsPageSizeOptions.map((option) => (
                <option key={option} value={option} className="bg-zinc-950 text-white">
                  {option}
                </option>
              ))}
            </select>
          </label>
          <select
            value={itemTypeFilter}
            onChange={(event) => {
              setPage(1)
              setItemTypeFilter(event.target.value as CampaignItemType | 'all')
            }}
            className="h-10 min-w-0 rounded-md border border-white/10 bg-black/25 px-3 text-xs font-semibold text-zinc-300 outline-none"
          >
            {itemTypeOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-zinc-950 text-white">
                {option.label}
              </option>
            ))}
          </select>
          <label className="flex h-10 min-w-0 items-center gap-2 rounded-md border border-white/10 bg-black/25 px-3 text-xs font-semibold text-zinc-300">
            <span>Nivel</span>
            <input
              value={levelFilter}
              onChange={(event) => {
                setPage(1)
                setLevelFilter(event.target.value)
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
            {itemsRarityOptions.map((option) => (
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
              placeholder="Buscar item ou trait"
              className="h-10 w-full rounded-md border border-white/10 bg-black/35 pl-9 pr-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-300/50"
            />
          </div>
        </div>
      </div>

      {error ? <div className="rounded-lg border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">{error}</div> : null}

      {loading && !data ? <div className="text-sm text-zinc-400">Carregando catalogo de itens...</div> : null}

      {data && data.entries.length === 0 ? (
        <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-6 text-sm text-zinc-300">Nenhum item encontrado.</div>
      ) : null}

      <div className={compact ? 'grid gap-2' : 'grid gap-3 lg:grid-cols-2'}>
        {data?.entries.map((item) => (
          <article
            key={item.id}
            className={['min-w-0 max-w-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition hover:border-indigo-300/40 hover:bg-white/[0.07]', compact ? 'p-3' : 'p-4'].join(' ')}
          >
            <div className={compact ? 'flex min-w-0 items-start gap-3' : 'flex min-w-0 items-start gap-4'}>
              <ItemIcon compact={compact} />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className={compact ? 'truncate text-sm font-semibold text-white' : 'truncate text-base font-semibold text-white'}>{item.name}</h2>
                    {item.display.subtitle ? <div className="mt-1 text-xs text-zinc-400">{item.display.subtitle}</div> : null}
                  </div>
                  {item.display.level ? (
                    <span className="shrink-0 rounded-md border border-indigo-300/20 bg-indigo-400/10 px-2 py-1 text-xs font-bold text-indigo-100">
                      {item.display.level.label} {item.display.level.value}
                    </span>
                  ) : null}
                  <span className="shrink-0 rounded-md border border-white/10 bg-black/25 px-2 py-1 text-xs font-bold uppercase text-zinc-300">{item.itemType}</span>
                </div>

                <div className={compact ? 'mt-2 flex flex-wrap gap-1.5' : 'mt-3 flex flex-wrap gap-2'}>
                  {item.display.price ? (
                    <span className="inline-flex h-8 max-w-full items-center gap-1.5 rounded-md border border-white/10 bg-black/25 px-2.5 text-xs font-semibold text-zinc-100">
                      {item.display.price.label} {item.display.price.value}
                    </span>
                  ) : null}
                  {item.display.stats.map((stat) => (
                    <span key={stat.key} className="inline-flex h-8 max-w-full items-center gap-1.5 rounded-md border border-white/10 bg-black/25 px-2.5 text-xs font-semibold text-zinc-100">
                      {stat.label} {stat.value}
                    </span>
                  ))}
                </div>

                <div className={compact ? 'mt-2 flex flex-wrap gap-1' : 'mt-3 flex flex-wrap gap-1.5'}>
                  {item.display.tags.map((trait, index) => (
                    <span key={`${trait}:${index}`} className="max-w-full truncate rounded border border-white/10 bg-black/25 px-2 py-0.5 text-[11px] text-zinc-300">
                      {trait}
                    </span>
                  ))}
                </div>

                <div className={compact ? 'mt-3 flex flex-wrap gap-2' : 'mt-4 flex flex-wrap gap-2'}>
                  {item.display.sheet?.sections.length ? (
                    <button
                      type="button"
                      title="Abrir Ficha"
                      aria-label="Abrir Ficha"
                      className={['inline-flex max-w-full items-center gap-2 rounded-md border border-sky-300/20 bg-sky-500/10 px-3 text-xs font-semibold uppercase text-sky-100 transition hover:bg-sky-500/20', compact ? 'h-8' : 'h-9'].join(' ')}
                      onClick={() => setSheetItem(item)}
                    >
                      <ScrollText className="h-4 w-4" />
                      <span className="min-w-0 truncate">Ficha</span>
                    </button>
                  ) : null}
                  <SendItemToPlayerMenu campaignId={campaignId ?? ''} itemId={item.id} players={activePlayers} compact={compact} />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {data && totalItems > 0 ? (
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3 text-sm text-zinc-300">
          <span>
            Pagina {data.pagination.page} de {totalPages} - {totalItems} itens
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

      {campaignId && sheetItem ? (
        <ItemSheetModal campaignId={campaignId} itemId={sheetItem.id} initialItem={sheetItem} onClose={() => setSheetItem(null)} />
      ) : null}
    </div>
  )
}
