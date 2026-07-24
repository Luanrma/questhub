import { useEffect, useState } from 'react'
import { BookOpen, Package, PawPrint, Sparkles, X } from 'lucide-react'
import { api } from '../lib/api'
import {
  catalogDomainPaths,
  type GameSystemCatalogDomain,
  type GameSystemContentLocale,
  type GameSystemKey,
} from './registry'

type EditorialStatus = {
  label: string
  tone: 'review' | 'ready' | 'warning' | 'info'
}

type CatalogSheet = {
  id: string
  name: string
  subtitle?: string | null
  description?: string | null
  imageUrl?: string | null
  traits?: readonly string[]
  editorialStatus?: EditorialStatus | null
  stats?: ReadonlyArray<{ label: string; value: string }>
  sections: ReadonlyArray<{
    title: string
    fields: ReadonlyArray<{
      label: string
      value: string
      wide?: boolean
    }>
  }>
  source?: {
    publication?: string | null
    license?: string | null
  }
}

type CatalogSheetResponse = {
  available: boolean
  system: {
    key: GameSystemKey
    label: string
  }
  domain: GameSystemCatalogDomain
  locale: GameSystemContentLocale
  entry: CatalogSheet
}

type Props = {
  campaignId: string
  contentId: string
  domain: GameSystemCatalogDomain
  locale: GameSystemContentLocale
  onClose: () => void
}

const domainIcons = {
  BESTIARY: PawPrint,
  SPELLS: Sparkles,
  ITEMS: Package,
} satisfies Record<GameSystemCatalogDomain, typeof PawPrint>

const statusClasses: Record<EditorialStatus['tone'], string> = {
  review: 'border-amber-300/35 bg-amber-500/15 text-amber-100',
  ready: 'border-emerald-300/35 bg-emerald-500/15 text-emerald-100',
  warning: 'border-red-300/35 bg-red-500/15 text-red-100',
  info: 'border-sky-300/35 bg-sky-500/15 text-sky-100',
}

export function CatalogEntitySheetModal({ campaignId, contentId, domain, locale, onClose }: Props) {
  const [data, setData] = useState<CatalogSheetResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const Icon = domainIcons[domain]

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    api<CatalogSheetResponse>(
      `/api/campaigns/${campaignId}/catalog/${catalogDomainPaths[domain]}/${encodeURIComponent(contentId)}?locale=${locale}`,
      { signal: controller.signal },
    )
      .then(setData)
      .catch((cause) => {
        if (controller.signal.aborted) return
        setError(cause instanceof Error ? cause.message : 'Não foi possível carregar a ficha.')
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [campaignId, contentId, domain, locale])

  const entry = data?.entry

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={entry?.name ?? 'Ficha da entidade'}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111218] text-white shadow-[0_35px_120px_rgba(0,0,0,0.8)]">
        <header className="flex items-start justify-between gap-4 border-b border-white/10 bg-black/30 px-6 py-5">
          <div className="flex min-w-0 items-start gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-indigo-300/25 bg-indigo-500/10 text-indigo-200 shadow-lg">
              <Icon className="h-7 w-7" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-indigo-200/70">
                <BookOpen className="h-3.5 w-3.5" />
                Ficha
              </div>
              <h1 className="mt-1 truncate text-2xl font-semibold text-white">
                {entry?.name ?? 'Carregando...'}
              </h1>
              {entry?.subtitle ? <p className="mt-1 text-xs uppercase text-zinc-500">{entry.subtitle}</p> : null}
            </div>
          </div>

          <button
            type="button"
            title="Fechar ficha"
            onClick={onClose}
            className="rounded-lg border border-white/10 p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto p-6">
          {loading ? <div className="text-sm text-zinc-400">Carregando ficha...</div> : null}
          {error ? (
            <div className="rounded-xl border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
              {error}
            </div>
          ) : null}

          {entry ? (
            <div className="space-y-5">
              <div className="rounded-xl border border-white/10 bg-white/[0.035] p-5">
                {entry.stats?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {entry.stats.map((stat) => (
                      <span
                        key={`${stat.label}:${stat.value}`}
                        className="rounded-md border border-white/10 bg-black/30 px-2.5 py-1.5 text-xs text-zinc-200"
                      >
                        <strong className="font-semibold text-white">{stat.label}</strong> {stat.value}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {entry.traits?.map((trait) => (
                    <span
                      key={trait}
                      className="rounded border border-indigo-300/20 bg-indigo-500/10 px-2.5 py-1 text-[11px] uppercase text-indigo-100/85"
                    >
                      {trait}
                    </span>
                  ))}
                  {entry.editorialStatus ? (
                    <span
                      className={`rounded border px-2.5 py-1 text-[11px] font-semibold uppercase ${statusClasses[entry.editorialStatus.tone]}`}
                    >
                      {entry.editorialStatus.label}
                    </span>
                  ) : null}
                </div>

                {entry.description ? (
                  <p className="mt-5 whitespace-pre-line text-sm leading-7 text-zinc-300">{entry.description}</p>
                ) : null}
              </div>

              {entry.sections.map((section) => (
                <section key={section.title} className="rounded-xl border border-white/10 bg-white/[0.035] p-5">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-indigo-200">
                    {section.title}
                  </h2>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {section.fields.map((sheetField, index) => (
                      <div
                        key={`${section.title}:${sheetField.label}:${index}`}
                        className={`rounded-lg border border-white/10 bg-black/20 px-4 py-3 ${sheetField.wide ? 'md:col-span-2' : ''}`}
                      >
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                          {sheetField.label}
                        </div>
                        <div className="mt-1 whitespace-pre-line text-sm leading-6 text-zinc-200">
                          {sheetField.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}

              {entry.source?.publication || entry.source?.license ? (
                <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-zinc-500">
                  <span>{entry.source.publication}</span>
                  {entry.source.license ? <span>Licença {entry.source.license}</span> : null}
                </footer>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  )
}
