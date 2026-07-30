import { useEffect, useState } from 'react'
import { BookOpen, PawPrint } from 'lucide-react'
import { api } from '../lib/api'

type SimplifiedSheetResponse = {
  metadata: {
    name: string
  }
  entry: {
    id: string
    name: string
    subtitle?: string | null
    imageUrl?: string | null
    traits?: readonly string[]
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
}

export function SimplifiedCatalogTokenSheetRenderer({
  campaignId,
  sheetId,
}: {
  campaignId: string
  sheetId: string
}) {
  const [data, setData] = useState<SimplifiedSheetResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    api<SimplifiedSheetResponse>(
      `/api/campaigns/${encodeURIComponent(campaignId)}/character-sheets/${encodeURIComponent(sheetId)}/simplified`,
      { signal: controller.signal },
    )
      .then(setData)
      .catch((cause) => {
        if (!controller.signal.aborted) {
          setError(cause instanceof Error ? cause.message : 'Nao foi possivel carregar a ficha simplificada.')
        }
      })
    return () => controller.abort()
  }, [campaignId, sheetId])

  if (error) {
    return <div className="rounded-xl border border-red-300/20 bg-red-500/10 p-5 text-sm text-red-100">{error}</div>
  }
  if (!data) {
    return <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-300">Carregando ficha...</div>
  }

  const entry = data.entry
  return (
    <div className="space-y-4 pb-6">
      <header className="flex flex-wrap items-start gap-4 rounded-xl border border-indigo-300/15 bg-indigo-500/10 p-4">
        {entry.imageUrl ? (
          <img src={entry.imageUrl} alt="" className="h-16 w-16 rounded-xl border border-white/15 bg-black/25 object-cover" />
        ) : (
          <div className="grid h-16 w-16 place-items-center rounded-xl border border-white/15 bg-black/20 text-indigo-200">
            <PawPrint className="h-7 w-7" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
            <BookOpen className="h-3.5 w-3.5" />
            Ficha simplificada
          </div>
          <h2 className="mt-1 truncate text-xl font-semibold text-white">{entry.name}</h2>
          {entry.subtitle ? <p className="mt-1 text-xs uppercase text-zinc-400">{entry.subtitle}</p> : null}
          {entry.traits?.length ? (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {entry.traits.map((trait) => (
                <span key={trait} className="rounded border border-indigo-300/20 bg-indigo-500/10 px-2 py-1 text-[10px] uppercase text-indigo-100">
                  {trait}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      {entry.stats?.length ? (
        <section className="flex flex-wrap gap-2 rounded-xl border border-white/10 bg-white/[0.035] p-4">
          {entry.stats.map((stat) => (
            <span key={`${stat.label}:${stat.value}`} className="rounded-md border border-white/10 bg-black/25 px-3 py-2 text-xs text-zinc-200">
              <strong className="text-white">{stat.label}</strong> {stat.value}
            </span>
          ))}
        </section>
      ) : null}

      {entry.sections.map((section) => (
        <section key={section.title} className="rounded-xl border border-white/10 bg-white/[0.035] p-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-indigo-200">{section.title}</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {section.fields.map((field, index) => (
              <div
                key={`${section.title}:${field.label}:${index}`}
                className={`rounded-lg border border-white/10 bg-black/20 px-4 py-3 ${field.wide ? 'md:col-span-2' : ''}`}
              >
                <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">{field.label}</div>
                <div className="mt-1 whitespace-pre-line text-sm leading-6 text-zinc-200">{field.value}</div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {entry.source?.publication || entry.source?.license ? (
        <footer className="flex flex-wrap justify-between gap-3 border-t border-white/10 pt-4 text-xs text-zinc-500">
          <span>{entry.source.publication}</span>
          {entry.source.license ? <span>Licenca {entry.source.license}</span> : null}
        </footer>
      ) : null}
    </div>
  )
}
