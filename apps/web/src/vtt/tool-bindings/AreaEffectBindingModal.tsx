import { useEffect, useState } from 'react'
import { Link2, Trash2, X } from 'lucide-react'
import { AreaTemplateEditor } from '../area-templates/components/AreaTemplateEditor'
import {
  areaTemplateToInput,
  defaultAreaTemplateInput,
  type AreaTemplateInput,
} from '../area-templates/domain/types'
import type {
  AreaEffectToolBindingConfiguration,
  ToolBindingSource,
} from '../token-presentation/types'
import {
  areaEffectToolBindingApi,
  type AreaEffectToolBinding,
} from './areaEffectToolBindingApi'

function normalizeTemplate(
  template: AreaTemplateInput,
  name: string,
): AreaTemplateInput {
  const shape = template.shape
  if (shape === 'TARGET') {
    return {
      ...template,
      name,
      description: undefined,
      category: undefined,
      tags: [],
      originMode: 'TARGET_TOKEN',
      placementMode: 'POINT',
      propagationMode: 'IGNORE_WALLS',
      persistenceMode: 'INSTANT',
      movementMode: 'STATIC',
      tokenIntersectionRule: 'MANUAL',
      includesOrigin: false,
    }
  }

  const directional = shape === 'CONE' || shape === 'LINE'
  const originMode = template.originMode === 'TARGET_TOKEN'
    ? 'SOURCE_TOKEN'
    : template.originMode
  return {
    ...template,
    name,
    description: undefined,
    category: undefined,
    tags: [],
    originMode,
    placementMode: directional ? 'DIRECTIONAL' : 'POINT',
    persistenceMode: 'INSTANT',
    movementMode: 'STATIC',
    tokenIntersectionRule: template.tokenIntersectionRule === 'MANUAL'
      ? 'COVERED_CELLS'
      : template.tokenIntersectionRule,
    includesOrigin: directional && originMode === 'SOURCE_TOKEN'
      ? false
      : template.includesOrigin,
  }
}

function initialConfiguration(
  name: string,
  inherited?: AreaEffectToolBindingConfiguration,
): AreaEffectToolBindingConfiguration {
  if (inherited) {
    return {
      ...inherited,
      template: normalizeTemplate(areaTemplateToInput(inherited.template), name),
    }
  }
  return {
    template: normalizeTemplate(
      areaTemplateToInput(defaultAreaTemplateInput),
      name,
    ),
  }
}

export function AreaEffectBindingModal({
  campaignId,
  source,
  actionName,
  inheritedSource,
  inheritedLabel,
  onClose,
  onSaved,
}: {
  campaignId: string
  source: ToolBindingSource
  actionName: string
  inheritedSource?: ToolBindingSource
  inheritedLabel?: string
  onClose: () => void
  onSaved?: (binding: AreaEffectToolBinding | null) => void
}) {
  const [configuration, setConfiguration] = useState(() => (
    initialConfiguration(actionName)
  ))
  const [ownBinding, setOwnBinding] = useState<AreaEffectToolBinding | null>(null)
  const [inheritedBinding, setInheritedBinding] = useState<AreaEffectToolBinding | null>(null)
  const [loading, setLoading] = useState(true)
  const [removing, setRemoving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const sourceKind = source.kind
  const sourceNamespace = source.namespace
  const sourceId = source.id
  const inheritedSourceKind = inheritedSource?.kind
  const inheritedSourceNamespace = inheritedSource?.namespace
  const inheritedSourceId = inheritedSource?.id

  useEffect(() => {
    const controller = new AbortController()
    let cancelled = false
    const ownSource: ToolBindingSource = {
      kind: sourceKind,
      namespace: sourceNamespace,
      id: sourceId,
    }
    const originalSource: ToolBindingSource | null = inheritedSourceKind
      && inheritedSourceNamespace
      && inheritedSourceId
      ? {
          kind: inheritedSourceKind,
          namespace: inheritedSourceNamespace,
          id: inheritedSourceId,
        }
      : null

    Promise.all([
      areaEffectToolBindingApi.get(campaignId, ownSource, controller.signal),
      originalSource
        ? areaEffectToolBindingApi.get(campaignId, originalSource, controller.signal)
        : Promise.resolve({ binding: null }),
    ])
      .then(([ownResponse, inheritedResponse]) => {
        if (cancelled) return
        const own = ownResponse.binding
        const inherited = inheritedResponse.binding
        setOwnBinding(own)
        setInheritedBinding(inherited)
        setConfiguration(own
          ? {
              ...own.configuration,
              template: normalizeTemplate(
                areaTemplateToInput(own.configuration.template),
                actionName,
              ),
            }
          : initialConfiguration(actionName, inherited?.configuration))
      })
      .catch((cause) => {
        if (!cancelled && !controller.signal.aborted) {
          setError(cause instanceof Error ? cause.message : 'Não foi possível carregar a configuração.')
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
      controller.abort()
    }
  }, [
    actionName,
    campaignId,
    inheritedSourceId,
    inheritedSourceKind,
    inheritedSourceNamespace,
    sourceId,
    sourceKind,
    sourceNamespace,
  ])

  async function save(template: AreaTemplateInput) {
    setError(null)
    try {
      const normalizedTemplate = normalizeTemplate(template, actionName)
      const isTarget = normalizedTemplate.shape === 'TARGET'
      const normalized: AreaEffectToolBindingConfiguration = {
        ...configuration,
        template: normalizedTemplate,
        ...(isTarget
          ? {
              minimumTargets: Math.min(
                normalizedTemplate.dimensions.targetCount ?? 1,
                Math.max(0, configuration.minimumTargets ?? 1),
              ),
            }
          : { minimumTargets: undefined, maximumDistance: undefined }),
        ...(!isTarget && normalizedTemplate.originMode !== 'FREE_POINT'
          ? { maximumOriginDistance: undefined }
          : {}),
      }
      const response = await areaEffectToolBindingApi.save({
        campaignId,
        source,
        name: actionName,
        configuration: normalized,
      })
      onSaved?.(response.binding)
      return true
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Não foi possível salvar a configuração.')
      return false
    }
  }

  async function remove() {
    if (!ownBinding || removing) return
    setRemoving(true)
    setError(null)
    try {
      await areaEffectToolBindingApi.remove(campaignId, source)
      onSaved?.(null)
      onClose()
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Não foi possível remover a configuração.')
    } finally {
      setRemoving(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-[190] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Configurar Area Effect de ${actionName}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-orange-300/20 bg-[#111218] text-white shadow-2xl">
        <header className="flex items-center gap-3 border-b border-white/10 bg-black/30 px-5 py-4">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-orange-300/20 bg-orange-500/10 text-orange-200">
            <Link2 className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="truncate text-base font-semibold">Configurar Area Effect</h2>
            <p className="truncate text-xs text-zinc-400">{actionName}</p>
          </div>
          <button type="button" title="Fechar" onClick={onClose} className="rounded-lg p-2 text-zinc-400 hover:bg-white/10 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto p-5">
          {loading ? <div className="py-10 text-center text-sm text-zinc-400">Carregando configuração...</div> : null}
          {!loading ? (
            <div className="grid gap-3">
              {!ownBinding && inheritedBinding ? (
                <div className="rounded-lg border border-sky-300/20 bg-sky-500/[0.08] px-3 py-2 text-xs text-sky-100">
                  Esta configuração começou a partir de {inheritedLabel ?? 'um padrão herdado'}. Ao salvar, será criada uma personalização exclusiva.
                </div>
              ) : null}
              {error ? <div className="rounded-lg border border-red-300/20 bg-red-500/10 px-3 py-2 text-sm text-red-100">{error}</div> : null}
              <AreaTemplateEditor
                key={ownBinding?.id ?? inheritedBinding?.id ?? `new:${sourceId}`}
                initialTemplate={configuration.template}
                showOrigin
                nameReadOnly
                allowPersistent={false}
                submitLabel={ownBinding ? 'Salvar alterações' : 'Criar associação'}
                onCancel={onClose}
                onSave={save}
                renderAdditionalFields={(form) => form.shape === 'TARGET' ? (
                  <div className="grid gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 md:grid-cols-2">
                    <label className="text-xs text-zinc-400">Mínimo de alvos
                      <input type="number" min="0" max={form.dimensions.targetCount ?? 1} step="1" value={configuration.minimumTargets ?? 1} onChange={(event) => setConfiguration((current) => ({ ...current, minimumTargets: Number(event.currentTarget.value) }))} className="mt-1 h-10 w-full rounded-lg border border-white/10 bg-black/35 px-3 text-white" />
                    </label>
                    <label className="text-xs text-zinc-400">Range a partir do Token (m)
                      <input type="number" min="0.1" step="0.1" value={configuration.maximumDistance ?? ''} onChange={(event) => setConfiguration((current) => ({ ...current, maximumDistance: event.currentTarget.value ? Number(event.currentTarget.value) : undefined }))} placeholder="Sem limite" className="mt-1 h-10 w-full rounded-lg border border-white/10 bg-black/35 px-3 text-white" />
                    </label>
                  </div>
                ) : form.originMode === 'FREE_POINT' ? (
                  <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                    <label className="block max-w-xs text-xs text-zinc-400">Range da origem (m)
                      <input type="number" min="0.1" step="0.1" value={configuration.maximumOriginDistance ?? ''} onChange={(event) => setConfiguration((current) => ({ ...current, maximumOriginDistance: event.currentTarget.value ? Number(event.currentTarget.value) : undefined }))} placeholder="Sem limite" className="mt-1 h-10 w-full rounded-lg border border-white/10 bg-black/35 px-3 text-white" />
                    </label>
                  </div>
                ) : null}
                secondaryAction={ownBinding ? (
                  <button type="button" disabled={removing} onClick={() => void remove()} className="mr-auto inline-flex items-center gap-2 rounded-md border border-red-300/25 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-100 hover:bg-red-500/20 disabled:opacity-50">
                    <Trash2 className="h-4 w-4" />
                    {removing ? 'Restaurando...' : inheritedBinding ? 'Restaurar configuração original' : 'Remover configuração'}
                  </button>
                ) : null}
              />
            </div>
          ) : null}
        </div>
      </section>
    </div>
  )
}
