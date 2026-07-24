import { useEffect, useMemo, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Package,
  PawPrint,
  Search,
  Sparkles,
  X,
} from 'lucide-react'
import { api } from '../lib/api'
import {
  catalogDomainLabels,
  catalogDomainPaths,
  type GameSystemCatalogDomain,
  type GameSystemContentLocale,
  type GameSystemKey,
} from './registry'

type CatalogCard = {
  id: string
  name: string
  subtitle?: string | null
  description?: string | null
  imageUrl?: string | null
  badges?: readonly string[]
  stats?: readonly Array<{ label: string; value: string }>
}

type CatalogResponse = {
  available: boolean
  system: {
    key: GameSystemKey
    label: string
  }
  domain: GameSystemCatalogDomain
  locale: GameSystemContentLocale
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
  domain: GameSystemCatalogDomain
  onClose: () => void
}

const domainIcons = {
  BESTIARY: PawPrint,
  SPELLS: Sparkles,
  ITEMS: Package,
} satisfies Record<GameSystemCatalogDomain, typeof PawPrint>

function CatalogImage({ entry, domain }: { entry: CatalogCard; domain: GameSystemCatalogDomain }) {
  const Icon = domainIcons[domain]

  if (entry.imageUrl) {
    return (
      <img
        src={entry.imageUrl}
        alt=""
        draggable={false}
        className="h-16 w-16 shrink-0 rounded-xl border border-indigo-300/25 bg-black/30 object-cover shadow-lg"
      />
    )
  }

  return (
    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-200 shadow-lg">
      <Icon className="h-7 w-7" />
    </div>
  )
}

export function CampaignCatalogModal({ campaignId, domain, onClose }: Props) {
  const [locale, setLocale] = useState<GameSystemContentLocale>('pt-BR')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [data, setData] = useState<CatalogResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const Icon = domainIcons[domain]
  const title = catalogDomainLabels[domain]
  const normalizedSearch = useMemo(() => search.trim(), [search])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  useEffect(() => {
    const controller = new AbortController()
    const timeout = window.setTimeout(() => {
      const params = new URLSearchParams({
        locale,
        page: String(page),
        limit: '24',
      })
      if (normalizedSearch) params.set('q', normalizedSearch)

      setLoading(true)
      setError(null)
      api<CatalogResponse>(
        `/api/campaigns/${campaignId}/catalog/${catalogDomainPaths[domain]}?${params.toString()}`,
        { signal: controller.signal },
      )
        .then((response) => setData(response))
        .catch((cause) => {
          if (controller.signal.aborted) return
          setError(cause instanceof Error ? cause.message : `Não foi possível carregar ${title.toLowerCase()}.`)
        })
        .finally(() => {
          if (!controller.signal.aborted) setLoading(false)
        })
    }, 180)

    return () => {
      window.clearTimeout(timeout)
      controller.abort()
    }
  }, [campaignId, domain, locale, normalizedSearch, page, title])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section className="flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111218]/98 text-white shadow-[0_30px_100px_rgba(0,0,0,0.65)]">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-black/30 px-5 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-200">
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h1 className="truncate text-lg font-semibold">{title}</h1>
              <p className="truncate text-xs text-zinc-400">
                {data?.system.label ?? 'Catálogo do sistema da campanha'}
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

        <div className="border-b border-white/10 px-5 py-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input
              value={search}
              onChange={(event) => {
                setSearch(event.target.value)
                setPage(1)
              }}
              placeholder={`Buscar em ${title.toLowerCase()}`}
              className="h-11 w-full rounded-lg border border-white/10 bg-black/35 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-300/50"
            />
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
                Após o rebase da branch de conteúdo, os cards aparecerão aqui sem alterar o VTT.
              </p>
            </div>
          ) : null}

          {data?.available && data.entries.length === 0 ? (
            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-8 text-center text-sm text-zinc-400">
              Nenhum conteúdo encontrado.
            </div>
          ) : null}

          {data?.available ? (
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {data.entries.map((entry) => (
                <article
                  key={entry.id}
                  className="min-w-0 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-indigo-300/40 hover:bg-white/[0.07]"
                >
                  <div className="flex min-w-0 items-start gap-4">
                    <CatalogImage entry={entry} domain={domain} />
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

                  {entry.badges?.length ? (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {entry.badges.map((badge) => (
                        <span key={badge} className="max-w-full truncate rounded border border-indigo-300/15 bg-indigo-500/10 px-2 py-0.5 text-[10px] uppercase text-indigo-100/80">
                          {badge}
                        </span>
                      ))}
                    </div>
                  ) : null}
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
      </section>
    </div>
  )
}
