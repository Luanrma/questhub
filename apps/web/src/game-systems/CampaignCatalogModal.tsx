import { useEffect, useMemo, useState } from 'react'
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  CopyPlus,
  ListFilter,
  Search,
  X,
} from 'lucide-react'
import { api } from '../lib/api'
import { CatalogEntitySheetModal } from './CatalogEntitySheetModal'
import type {
  GameSystemCatalogDomain,
  GameSystemCatalogDomainDescriptor,
  GameSystemContentLocale,
  GameSystemKey,
} from './registry'
import { registerVttWindow } from '../vtt/table/infrastructure/vttInteractionRegistry'
import { notifyCampaignTokenLibraryChanged } from '../lib/campaign-token-library-events'
import { createCatalogToken } from './catalogTokenApi'
import {
  CatalogFilters,
  type CatalogFilterDefinition,
  type CatalogFilterSelection,
} from './catalog-filters/CatalogFilters'

type EditorialStatus = {
  label: string
  tone: 'review' | 'ready' | 'warning' | 'info'
}

type EditorialFilter = 'all' | 'review' | 'ready'

type CatalogCard = {
  id: string
  name: string
  subtitle?: string | null
  description?: string | null
  imageUrl?: string | null
  traits?: readonly string[]
  editorialStatus?: EditorialStatus | null
  stats?: ReadonlyArray<{ label: string; value: string }>
  canCreateToken?: boolean
}

type CatalogResponse = {
  available: boolean
  system: {
    key: GameSystemKey
    label: string
  }
  domain: GameSystemCatalogDomain
  locale: GameSystemContentLocale
  editorialStatus?: EditorialFilter
  filterDefinitions?: readonly CatalogFilterDefinition[]
  entries: CatalogCard[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

type Props = {
  campaignId: string
  domains: readonly GameSystemCatalogDomainDescriptor[]
  canManageTokens?: boolean
  zIndex?: number
  onClose: () => void
}

const statusClasses: Record<EditorialStatus['tone'], string> = {
  review: 'border-amber-300/35 bg-amber-500/15 text-amber-100',
  ready: 'border-emerald-300/35 bg-emerald-500/15 text-emerald-100',
  warning: 'border-red-300/35 bg-red-500/15 text-red-100',
  info: 'border-sky-300/35 bg-sky-500/15 text-sky-100',
}

const EMPTY_FILTER_SELECTION: CatalogFilterSelection = {}

function CatalogImage({ entry }: { entry: CatalogCard }) {
  const [failed, setFailed] = useState(false)

  if (entry.imageUrl && !failed) {
    return (
      <img
        src={entry.imageUrl}
        alt=""
        draggable={false}
        onError={() => setFailed(true)}
        className="h-16 w-16 shrink-0 rounded-xl border border-indigo-300/25 bg-black/30 object-cover shadow-lg"
      />
    )
  }

  return (
    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-200 shadow-lg">
      <BookOpen className="h-7 w-7" />
    </div>
  )
}

export function CampaignCatalogModal({
  domains,
  campaignId,
  canManageTokens = false,
  zIndex = 100,
  onClose,
}: Props) {
  const [selectedDomainKey, setSelectedDomainKey] = useState<GameSystemCatalogDomain | null>(domains[0]?.key ?? null)
  const [locale, setLocale] = useState<GameSystemContentLocale>('pt-BR')
  const [search, setSearch] = useState('')
  const [editorialFilter, setEditorialFilter] = useState<EditorialFilter>('all')
  const [filterState, setFilterState] = useState<{
    domain: GameSystemCatalogDomain | null
    selection: CatalogFilterSelection
  }>({ domain: domains[0]?.key ?? null, selection: {} })
  const [page, setPage] = useState(1)
  const [data, setData] = useState<CatalogResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedEntryId, setSelectedEntryId] = useState<string | null>(null)
  const [creatingTokenId, setCreatingTokenId] = useState<string | null>(null)

  const domain = useMemo(
    () => domains.find((candidate) => candidate.key === selectedDomainKey) ?? domains[0] ?? null,
    [domains, selectedDomainKey],
  )
  const domainKey = domain?.key ?? null
  const domainLabel = domain?.label ?? 'Compêndio'
  const normalizedSearch = useMemo(() => search.trim(), [search])
  const filterSelection = filterState.domain === domainKey
    ? filterState.selection
    : EMPTY_FILTER_SELECTION
  const filterDefinitions = data?.domain === domainKey ? data.filterDefinitions ?? [] : []
  const serializedFilters = useMemo(
    () => Object.entries(filterSelection)
      .flatMap(([filterId, values]) => values.map((value) => `${filterId}:${value}`))
      .sort(),
    [filterSelection],
  )

  useEffect(() => {
    if (domainKey === selectedDomainKey) return
    setSelectedDomainKey(domainKey)
  }, [domainKey, selectedDomainKey])

  async function createToken(entry: CatalogCard) {
    if (creatingTokenId || !domain) return
    setCreatingTokenId(entry.id)
    setError(null)
    try {
      await createCatalogToken({
        campaignId,
        contentId: entry.id,
        domain,
        locale,
      })
      notifyCampaignTokenLibraryChanged(campaignId)
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Nao foi possivel criar o Token.')
    } finally {
      setCreatingTokenId(null)
    }
  }

  useEffect(() => registerVttWindow({
    id: `campaign-compendium:${campaignId}:${domainKey ?? 'unregistered'}`,
    getZIndex: () => selectedEntryId ? zIndex + 20 : zIndex,
    close: () => selectedEntryId ? setSelectedEntryId(null) : onClose(),
    isVisible: () => true,
  }), [campaignId, domainKey, onClose, selectedEntryId, zIndex])

  useEffect(() => {
    if (!domain) {
      setData(null)
      setLoading(false)
      return
    }

    const controller = new AbortController()
    const timeout = window.setTimeout(() => {
      const params = new URLSearchParams({
        locale,
        editorialStatus: locale === 'pt-BR' ? editorialFilter : 'all',
        page: String(page),
        limit: '24',
      })
      if (normalizedSearch) params.set('q', normalizedSearch)
      serializedFilters.forEach((filter) => params.append('filter', filter))

      setLoading(true)
      setError(null)
      api<CatalogResponse>(
        `/api/campaigns/${campaignId}/catalog/${encodeURIComponent(domain.slug)}?${params.toString()}`,
        { signal: controller.signal },
      )
        .then((response) => setData(response))
        .catch((cause) => {
          if (controller.signal.aborted) return
          setError(cause instanceof Error ? cause.message : `Não foi possível carregar ${domainLabel.toLowerCase()}.`)
        })
        .finally(() => {
          if (!controller.signal.aborted) setLoading(false)
        })
    }, 180)

    return () => {
      window.clearTimeout(timeout)
      controller.abort()
    }
  }, [campaignId, domain, domainLabel, editorialFilter, locale, normalizedSearch, page, serializedFilters])

  function selectDomain(nextDomain: GameSystemCatalogDomainDescriptor) {
    if (nextDomain.key === domainKey) return
    setSelectedDomainKey(nextDomain.key)
    setSearch('')
    setFilterState({ domain: nextDomain.key, selection: {} })
    setPage(1)
    setData(null)
    setError(null)
    setSelectedEntryId(null)
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      style={{ zIndex }}
      role="dialog"
      aria-modal="true"
      aria-label={domain ? `Compêndio — ${domainLabel}` : 'Compêndio'}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !selectedEntryId) onClose()
      }}
    >
      <section className="flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111218]/98 text-white shadow-[0_30px_100px_rgba(0,0,0,0.65)]">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-black/30 px-5 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-200">
              <BookOpen className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h1 className="truncate text-lg font-semibold">Compêndio · {domainLabel}</h1>
              <p className="truncate text-xs text-zinc-400">
                {data?.system.label ?? 'Conteúdo do sistema da campanha'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="inline-flex rounded-lg border border-white/10 bg-black/30 p-1">
              <button
                type="button"
                onClick={() => {
                  setLocale('pt-BR')
                  setPage(1)
                }}
                className={[
                  'rounded-md px-3 py-1.5 text-xs font-semibold transition',
                  locale === 'pt-BR' ? 'bg-indigo-500/25 text-indigo-100' : 'text-zinc-400 hover:text-white',
                ].join(' ')}
              >
                PT-BR
              </button>
              <button
                type="button"
                onClick={() => {
                  setLocale('en-US')
                  setEditorialFilter('all')
                  setPage(1)
                }}
                className={[
                  'rounded-md px-3 py-1.5 text-xs font-semibold transition',
                  locale === 'en-US' ? 'bg-indigo-500/25 text-indigo-100' : 'text-zinc-400 hover:text-white',
                ].join(' ')}
              >
                EN-US
              </button>
            </div>
            <button
              type="button"
              title="Fechar"
              onClick={onClose}
              className="rounded-lg border border-white/10 p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </header>

        {domains.length > 1 ? (
          <div className="border-b border-white/10 bg-black/15 px-5 py-3">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Domínios do Compêndio">
              {domains.map((candidate) => (
                <button
                  key={candidate.key}
                  type="button"
                  role="tab"
                  aria-selected={candidate.key === domainKey}
                  onClick={() => selectDomain(candidate)}
                  className={[
                    'rounded-lg border px-3 py-2 text-xs font-semibold transition',
                    candidate.key === domainKey
                      ? 'border-indigo-300/40 bg-indigo-500/20 text-indigo-100'
                      : 'border-white/10 bg-white/[0.03] text-zinc-400 hover:bg-white/[0.08] hover:text-white',
                  ].join(' ')}
                >
                  {candidate.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {domain ? (
          <>
            <div className="border-b border-white/10 px-5 py-4">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-200/80">
                {domainLabel}
              </div>
              <div className="flex flex-col gap-3 md:flex-row md:flex-wrap">
                <div className="relative min-w-0 flex-1">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                  <input
                    value={search}
                    onChange={(event) => {
                      setSearch(event.target.value)
                      setPage(1)
                    }}
                    placeholder={`Buscar em ${domainLabel.toLowerCase()}`}
                    className="h-11 w-full rounded-lg border border-white/10 bg-black/35 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-300/50"
                  />
                </div>

                <CatalogFilters
                  definitions={filterDefinitions}
                  locale={locale}
                  selection={filterSelection}
                  onChange={(selection) => {
                    setFilterState({ domain: domain.key, selection })
                    setPage(1)
                  }}
                />

                {locale === 'pt-BR' ? (
                  <label className="relative min-w-56 flex-1 md:max-w-60">
                    <ListFilter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                    <select
                      value={editorialFilter}
                      onChange={(event) => {
                        setEditorialFilter(event.target.value as EditorialFilter)
                        setPage(1)
                      }}
                      aria-label="Filtrar por status da tradução"
                      className="h-11 w-full appearance-none rounded-lg border border-white/10 bg-black/35 pl-10 pr-4 text-sm text-zinc-200 outline-none transition focus:border-indigo-300/50"
                    >
                      <option value="all">Todas as traduções</option>
                      <option value="review">Tradução em revisão</option>
                      <option value="ready">Tradução revisada</option>
                    </select>
                  </label>
                ) : null}
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto p-5">
              {error ? (
                <div className="rounded-xl border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">{error}</div>
              ) : null}

              {loading && !data ? <div className="text-sm text-zinc-400">Carregando catálogo...</div> : null}

              {data && !data.available ? (
                <div className="rounded-xl border border-amber-300/20 bg-amber-500/10 p-5">
                  <div className="font-semibold text-amber-100">Catálogo ainda não instalado</div>
                  <p className="mt-2 text-sm leading-6 text-amber-100/75">
                    A campanha já está vinculada ao sistema, mas o pacote de conteúdo ainda não registrou este catálogo.
                  </p>
                </div>
              ) : null}

              {data?.available && data.entries.length === 0 ? (
                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-8 text-center text-sm text-zinc-400">
                  Nenhum conteúdo encontrado para os filtros selecionados.
                </div>
              ) : null}

              {data?.available ? (
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {data.entries.map((entry) => (
                    <article
                      key={entry.id}
                      className="flex min-w-0 flex-col rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-indigo-300/40 hover:bg-white/[0.07]"
                    >
                      <div className="flex min-w-0 items-start gap-4">
                        <CatalogImage
                          key={`${entry.id}:${entry.imageUrl ?? 'fallback'}`}
                          entry={entry}
                        />
                        <div className="min-w-0 flex-1">
                          <h2 className="truncate text-sm font-semibold text-white">{entry.name}</h2>
                          {entry.subtitle ? <p className="mt-1 truncate text-xs text-zinc-400">{entry.subtitle}</p> : null}
                          {entry.stats?.length ? (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {entry.stats.map((stat) => (
                                <span key={`${stat.label}:${stat.value}`} className="rounded-md border border-white/10 bg-black/25 px-2 py-1 text-[11px] text-zinc-200">
                                  {stat.label} {stat.value}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      {entry.description ? (
                        <p className="mt-3 line-clamp-3 text-xs leading-5 text-zinc-400">{entry.description}</p>
                      ) : null}

                      <div className="mt-3 flex flex-wrap items-center gap-1.5">
                        {entry.traits?.map((trait) => (
                          <span key={trait} className="max-w-full truncate rounded border border-indigo-300/15 bg-indigo-500/10 px-2 py-0.5 text-[10px] uppercase text-indigo-100/80">
                            {trait}
                          </span>
                        ))}
                        {entry.editorialStatus ? (
                          <span className={`max-w-full truncate rounded border px-2 py-0.5 text-[10px] font-semibold uppercase ${statusClasses[entry.editorialStatus.tone]}`}>
                            {entry.editorialStatus.label}
                          </span>
                        ) : null}
                      </div>

                      <div className="mt-auto flex justify-end gap-2 pt-4">
                        {canManageTokens && entry.canCreateToken ? (
                          <button
                            type="button"
                            disabled={Boolean(creatingTokenId)}
                            onClick={() => void createToken(entry)}
                            className="inline-flex items-center gap-2 rounded-lg border border-emerald-300/25 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/50 hover:bg-emerald-500/20 disabled:opacity-45"
                          >
                            <CopyPlus className="h-4 w-4" />
                            {creatingTokenId === entry.id ? 'Criando...' : 'Criar Token'}
                          </button>
                        ) : null}
                        <button
                          type="button"
                          onClick={() => setSelectedEntryId(entry.id)}
                          className="inline-flex items-center gap-2 rounded-lg border border-indigo-300/25 bg-indigo-500/10 px-3 py-2 text-xs font-semibold text-indigo-100 transition hover:border-indigo-300/50 hover:bg-indigo-500/20"
                        >
                          <BookOpen className="h-4 w-4" />
                          Ficha
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              ) : null}
            </div>

            {data?.available && data.pagination.total > 0 ? (
              <footer className="flex items-center justify-between gap-3 border-t border-white/10 bg-black/20 px-5 py-3 text-xs text-zinc-400">
                <span>{data.pagination.total} registros</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={page <= 1}
                    onClick={() => setPage((current) => Math.max(1, current - 1))}
                    className="rounded-lg border border-white/10 p-2 text-zinc-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span>Página {data.pagination.page} de {Math.max(1, data.pagination.totalPages)}</span>
                  <button
                    type="button"
                    disabled={page >= data.pagination.totalPages}
                    onClick={() => setPage((current) => current + 1)}
                    className="rounded-lg border border-white/10 p-2 text-zinc-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </footer>
            ) : null}
          </>
        ) : (
          <div className="p-8 text-sm text-zinc-400">O sistema da campanha não registrou domínios de Compêndio.</div>
        )}
      </section>

      {selectedEntryId && domain ? (
        <CatalogEntitySheetModal
          campaignId={campaignId}
          contentId={selectedEntryId}
          domain={domain}
          locale={locale}
          canManageTokens={canManageTokens}
          zIndex={zIndex + 20}
          onClose={() => setSelectedEntryId(null)}
        />
      ) : null}
    </div>
  )
}