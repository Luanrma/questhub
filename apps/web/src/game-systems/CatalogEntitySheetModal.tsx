import { useEffect, useState } from 'react'
import { BookOpen, CopyPlus, Send, Settings2, X } from 'lucide-react'
import { api } from '../lib/api'
import { AreaEffectBindingModal } from '../vtt/tool-bindings/AreaEffectBindingModal'
import { CatalogItemSendModal } from './CatalogItemSendModal'
import {
  PathfinderActiveEffectDefinitionModal,
  type PathfinderActiveEffectReference,
} from './PathfinderActiveEffectDefinitionModal'
import {
  PathfinderActiveEffectReferenceList,
  PathfinderReferenceText,
} from './PathfinderActiveEffectReferences'
import type {
  GameSystemCatalogDomain,
  GameSystemCatalogDomainDescriptor,
  GameSystemContentLocale,
  GameSystemKey,
} from './registry'
import { notifyCampaignTokenLibraryChanged } from '../lib/campaign-token-library-events'
import { createCatalogToken } from './catalogTokenApi'

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
  canCreateToken?: boolean
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

type CampaignGameSystemResponse = {
  descriptor: {
    catalogDomains: GameSystemCatalogDomainDescriptor[]
  }
}

type PathfinderActiveEffectReferencesResponse = {
  contentId: string
  locale: GameSystemContentLocale
  references: PathfinderActiveEffectReference[]
}

type Props = {
  campaignId: string
  contentId: string
  domain: GameSystemCatalogDomainDescriptor | GameSystemCatalogDomain
  locale: GameSystemContentLocale
  canManageTokens?: boolean
  zIndex?: number
  leftInset?: number
  bottomInset?: number
  onClose: () => void
}

const statusClasses: Record<EditorialStatus['tone'], string> = {
  review: 'border-amber-300/35 bg-amber-500/15 text-amber-100',
  ready: 'border-emerald-300/35 bg-emerald-500/15 text-emerald-100',
  warning: 'border-red-300/35 bg-red-500/15 text-red-100',
  info: 'border-sky-300/35 bg-sky-500/15 text-sky-100',
}

export function CatalogEntitySheetModal({
  campaignId,
  contentId,
  domain,
  locale,
  canManageTokens = false,
  zIndex = 120,
  leftInset = 0,
  bottomInset = 0,
  onClose,
}: Props) {
  const [resolvedDomain, setResolvedDomain] = useState<GameSystemCatalogDomainDescriptor | null>(
    typeof domain === 'string' ? null : domain,
  )
  const [data, setData] = useState<CatalogSheetResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [failedImageUrl, setFailedImageUrl] = useState<string | null>(null)
  const [sendPermission, setSendPermission] = useState({ key: '', allowed: false })
  const [sendOpen, setSendOpen] = useState(false)
  const [areaEffectOpen, setAreaEffectOpen] = useState(false)
  const [creatingToken, setCreatingToken] = useState(false)
  const [effectReferences, setEffectReferences] = useState<PathfinderActiveEffectReference[]>([])
  const [selectedEffectReference, setSelectedEffectReference] = useState<PathfinderActiveEffectReference | null>(null)
  const sendPermissionKey = resolvedDomain ? `${campaignId}:${resolvedDomain.key}` : ''
  const canSendToActor =
    resolvedDomain?.capabilities?.canSendToActorInventory === true
    && sendPermission.key === sendPermissionKey
    && sendPermission.allowed
  const areaEffectBindingNamespace = resolvedDomain?.capabilities?.areaEffectBindingNamespace ?? null

  useEffect(() => {
    if (typeof domain !== 'string') {
      setResolvedDomain(domain)
      return
    }

    const controller = new AbortController()
    setResolvedDomain(null)
    setData(null)
    setLoading(true)
    setError(null)

    api<CampaignGameSystemResponse>(`/api/campaigns/${campaignId}/game-system`, {
      signal: controller.signal,
    })
      .then((response) => {
        const registeredDomain = response.descriptor.catalogDomains.find(
          (candidate) => candidate.key === domain,
        )
        if (!registeredDomain) {
          setError('Este domínio não está registrado no Compêndio da campanha.')
          setLoading(false)
          return
        }
        setResolvedDomain(registeredDomain)
      })
      .catch((cause) => {
        if (controller.signal.aborted) return
        setError(cause instanceof Error ? cause.message : 'Não foi possível resolver o domínio do Compêndio.')
        setLoading(false)
      })

    return () => controller.abort()
  }, [campaignId, domain])

  useEffect(() => {
    if (!resolvedDomain) return

    const controller = new AbortController()
    queueMicrotask(() => {
      if (controller.signal.aborted) return
      setLoading(true)
      setError(null)
    })

    api<CatalogSheetResponse>(
      `/api/campaigns/${campaignId}/catalog/${encodeURIComponent(resolvedDomain.slug)}/${encodeURIComponent(contentId)}?locale=${locale}`,
      { signal: controller.signal },
    )
      .then((response) => setData(response))
      .catch((cause) => {
        if (controller.signal.aborted) return
        setError(cause instanceof Error ? cause.message : 'Não foi possível carregar a ficha.')
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [campaignId, contentId, locale, resolvedDomain])

  useEffect(() => {
    if (data?.system.key !== 'PATHFINDER_2E') {
      setEffectReferences([])
      setSelectedEffectReference(null)
      return
    }

    const controller = new AbortController()
    setEffectReferences([])
    setSelectedEffectReference(null)

    api<PathfinderActiveEffectReferencesResponse>(
      `/api/game-systems/pathfinder-2e/content/active-effect-references/${encodeURIComponent(contentId)}?locale=${locale}`,
      { signal: controller.signal },
    )
      .then((response) => setEffectReferences(response.references))
      .catch(() => {
        if (!controller.signal.aborted) setEffectReferences([])
      })

    return () => controller.abort()
  }, [contentId, data?.system.key, locale])

  useEffect(() => {
    if (resolvedDomain?.capabilities?.canSendToActorInventory !== true) {
      setSendPermission({ key: sendPermissionKey, allowed: false })
      return
    }

    const controller = new AbortController()
    api<{ recipients: unknown[] }>(`/api/campaigns/${campaignId}/inventory/actor-recipients`, {
      signal: controller.signal,
    })
      .then(() => setSendPermission({ key: sendPermissionKey, allowed: true }))
      .catch(() => {
        if (!controller.signal.aborted) {
          setSendPermission({ key: sendPermissionKey, allowed: false })
        }
      })

    return () => controller.abort()
  }, [campaignId, resolvedDomain?.capabilities?.canSendToActorInventory, sendPermissionKey])

  const entry = data?.entry
  const imageFailed = Boolean(entry?.imageUrl && failedImageUrl === entry.imageUrl)

  async function handleCreateToken() {
    if (!entry || creatingToken || !resolvedDomain) return
    setCreatingToken(true)
    setError(null)
    try {
      await createCatalogToken({ campaignId, contentId, domain: resolvedDomain, locale })
      notifyCampaignTokenLibraryChanged(campaignId)
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Nao foi possivel criar o Token.')
    } finally {
      setCreatingToken(false)
    }
  }

  return (
    <div
      className="fixed inset-y-0 right-0 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      style={{ zIndex, left: leftInset, bottom: bottomInset }}
      role="dialog"
      aria-modal="false"
      aria-label={entry?.name ?? 'Ficha da entidade'}
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
          && !sendOpen
          && !areaEffectOpen
          && !selectedEffectReference
        ) onClose()
      }}
    >
      <section className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111218] text-white shadow-[0_35px_120px_rgba(0,0,0,0.8)]">
        <header className="flex items-start justify-between gap-4 border-b border-white/10 bg-black/30 px-6 py-5">
          <div className="flex min-w-0 items-start gap-4">
            {entry?.imageUrl && !imageFailed ? (
              <img
                src={entry.imageUrl}
                alt=""
                draggable={false}
                onError={() => setFailedImageUrl(entry.imageUrl ?? null)}
                className="h-14 w-14 shrink-0 rounded-xl border border-indigo-300/25 bg-black/30 object-cover shadow-lg"
              />
            ) : (
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-indigo-300/25 bg-indigo-500/10 text-indigo-200 shadow-lg">
                <BookOpen className="h-7 w-7" />
              </div>
            )}
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-indigo-200/70">
                <BookOpen className="h-3.5 w-3.5" />
                {resolvedDomain?.label ?? 'Compêndio'}
              </div>
              <h1 className="mt-1 truncate text-2xl font-semibold text-white">
                {entry?.name ?? 'Carregando...'}
              </h1>
              {entry?.subtitle ? <p className="mt-1 text-xs uppercase text-zinc-500">{entry.subtitle}</p> : null}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2">
            {canManageTokens && areaEffectBindingNamespace && entry ? (
              <button
                type="button"
                onClick={() => setAreaEffectOpen(true)}
                className="inline-flex items-center gap-2 rounded-lg border border-orange-300/25 bg-orange-500/10 px-3 py-2 text-xs font-semibold text-orange-100 transition hover:border-orange-300/50 hover:bg-orange-500/20"
              >
                <Settings2 className="h-4 w-4" />
                Configurar Area Effect
              </button>
            ) : null}
            {canManageTokens && entry?.canCreateToken ? (
              <button
                type="button"
                disabled={creatingToken}
                onClick={() => void handleCreateToken()}
                className="inline-flex items-center gap-2 rounded-lg border border-emerald-300/25 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/50 hover:bg-emerald-500/20 disabled:opacity-45"
              >
                <CopyPlus className="h-4 w-4" />
                {creatingToken ? 'Criando...' : 'Criar Token'}
              </button>
            ) : null}
            {canSendToActor && entry ? (
              <button
                type="button"
                onClick={() => setSendOpen(true)}
                className="inline-flex items-center gap-2 rounded-lg border border-indigo-300/25 bg-indigo-500/10 px-3 py-2 text-xs font-semibold text-indigo-100 transition hover:border-indigo-300/50 hover:bg-indigo-500/20"
              >
                <Send className="h-4 w-4" />
                Enviar para ator
              </button>
            ) : null}
            <button
              type="button"
              title="Fechar ficha"
              onClick={onClose}
              className="rounded-lg border border-white/10 p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
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
                  <p className="mt-5 whitespace-pre-line text-sm leading-7 text-zinc-300">
                    <PathfinderReferenceText
                      text={entry.description}
                      references={effectReferences}
                      onOpen={setSelectedEffectReference}
                    />
                  </p>
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
                          <PathfinderReferenceText
                            text={sheetField.value}
                            references={effectReferences}
                            onOpen={setSelectedEffectReference}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}

              <PathfinderActiveEffectReferenceList
                references={effectReferences}
                onOpen={setSelectedEffectReference}
              />

              {entry.source?.publication || entry.source?.license ? (
                <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-zinc-500">
                  <span>{entry.source?.publication}</span>
                  {entry.source?.license ? <span>Licença {entry.source.license}</span> : null}
                </footer>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      {sendOpen && entry && resolvedDomain ? (
        <CatalogItemSendModal
          campaignId={campaignId}
          contentId={contentId}
          domain={resolvedDomain}
          itemName={entry.name}
          onClose={() => setSendOpen(false)}
        />
      ) : null}

      {areaEffectOpen && entry && areaEffectBindingNamespace ? (
        <AreaEffectBindingModal
          campaignId={campaignId}
          source={{
            kind: 'CATALOG_CONTENT',
            namespace: areaEffectBindingNamespace,
            id: contentId,
          }}
          actionName={entry.name}
          onClose={() => setAreaEffectOpen(false)}
        />
      ) : null}

      {selectedEffectReference ? (
        <PathfinderActiveEffectDefinitionModal
          definitionKey={selectedEffectReference.definitionKey}
          locale={locale}
          reference={selectedEffectReference}
          zIndex={zIndex + 40}
          onClose={() => setSelectedEffectReference(null)}
        />
      ) : null}
    </div>
  )
}
