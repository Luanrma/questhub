import { useEffect, useState } from 'react'
import { Link2, Trash2, X } from 'lucide-react'
import {
  areaTemplateToInput,
  defaultAreaTemplateInput,
  type AreaShape,
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

const shapes: Array<{ value: AreaShape; label: string }> = [
  { value: 'TARGET', label: 'Target' },
  { value: 'CIRCLE', label: 'Círculo' },
  { value: 'CONE', label: 'Cone' },
  { value: 'LINE', label: 'Linha' },
  { value: 'ORTHOGONAL', label: 'Ortogonal' },
  { value: 'RING', label: 'Anel' },
]

function dimensionsForShape(shape: AreaShape, current: AreaTemplateInput['dimensions']) {
  if (shape === 'TARGET') return { targetCount: current.targetCount ?? 1 }
  if (shape === 'CIRCLE' || shape === 'ORTHOGONAL') return { radius: current.radius ?? 3 }
  if (shape === 'CONE') return {
    length: current.length ?? 6,
    angleDegrees: current.angleDegrees ?? 60,
    startWidth: current.startWidth ?? 0,
  }
  if (shape === 'LINE') return { length: current.length ?? 6, width: current.width ?? 1.5 }
  if (shape === 'RING') return { radius: current.radius ?? 4, innerRadius: current.innerRadius ?? 2 }
  return current
}

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
      dimensions: dimensionsForShape(shape, template.dimensions),
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
  return {
    ...template,
    name,
    description: undefined,
    category: undefined,
    tags: [],
    dimensions: dimensionsForShape(shape, template.dimensions),
    originMode: template.originMode === 'TARGET_TOKEN' ? 'SOURCE_TOKEN' : template.originMode,
    placementMode: directional ? 'DIRECTIONAL' : 'POINT',
    persistenceMode: 'INSTANT',
    movementMode: 'STATIC',
    tokenIntersectionRule: template.tokenIntersectionRule === 'MANUAL'
      ? 'COVERED_CELLS'
      : template.tokenIntersectionRule,
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
  inheritedConfiguration,
  inheritedLabel,
  onClose,
  onSaved,
}: {
  campaignId: string
  source: ToolBindingSource
  actionName: string
  inheritedConfiguration?: AreaEffectToolBindingConfiguration
  inheritedLabel?: string
  onClose: () => void
  onSaved?: (binding: AreaEffectToolBinding | null) => void
}) {
  const [configuration, setConfiguration] = useState(() => (
    initialConfiguration(actionName, inheritedConfiguration)
  ))
  const [ownBinding, setOwnBinding] = useState<AreaEffectToolBinding | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const template = configuration.template
  const isTarget = template.shape === 'TARGET'
  const directional = template.shape === 'CONE' || template.shape === 'LINE'

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    areaEffectToolBindingApi.get(campaignId, source)
      .then(({ binding }) => {
        if (cancelled) return
        setOwnBinding(binding)
        setConfiguration(binding
          ? {
              ...binding.configuration,
              template: normalizeTemplate(
                areaTemplateToInput(binding.configuration.template),
                actionName,
              ),
            }
          : initialConfiguration(actionName, inheritedConfiguration))
      })
      .catch((cause) => {
        if (!cancelled) {
          setError(cause instanceof Error ? cause.message : 'Não foi possível carregar a configuração.')
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [actionName, campaignId, inheritedConfiguration, source])

  function setTemplate(next: AreaTemplateInput) {
    setConfiguration((current) => ({
      ...current,
      template: normalizeTemplate(next, actionName),
    }))
  }

  function setDimension(key: string, value: number) {
    setTemplate({
      ...template,
      dimensions: { ...template.dimensions, [key]: value },
    })
  }

  async function save(event: React.FormEvent) {
    event.preventDefault()
    setSaving(true)
    setError(null)
    try {
      const normalized: AreaEffectToolBindingConfiguration = {
        ...configuration,
        template: normalizeTemplate(configuration.template, actionName),
        ...(isTarget
          ? {
              minimumTargets: Math.min(
                configuration.template.dimensions.targetCount ?? 1,
                Math.max(0, configuration.minimumTargets ?? 1),
              ),
            }
          : { minimumTargets: undefined, maximumDistance: undefined }),
        ...(!isTarget && configuration.template.originMode !== 'FREE_POINT'
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
      onClose()
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Não foi possível salvar a configuração.')
    } finally {
      setSaving(false)
    }
  }

  async function remove() {
    if (!ownBinding || saving) return
    setSaving(true)
    setError(null)
    try {
      await areaEffectToolBindingApi.remove(campaignId, source)
      onSaved?.(null)
      onClose()
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Não foi possível remover a configuração.')
    } finally {
      setSaving(false)
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
      <form
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-orange-300/20 bg-[#111218] text-white shadow-2xl"
        onSubmit={save}
      >
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
            <div className="grid gap-5">
              {!ownBinding && inheritedConfiguration ? (
                <div className="rounded-lg border border-sky-300/20 bg-sky-500/[0.08] px-3 py-2 text-xs text-sky-100">
                  Esta configuração começou a partir de {inheritedLabel ?? 'um padrão herdado'}. Ao salvar, será criada uma personalização exclusiva.
                </div>
              ) : null}

              <div className="grid gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 md:grid-cols-3">
                <label className="text-xs text-zinc-400">Forma
                  <select
                    value={template.shape}
                    onChange={(event) => {
                      const shape = event.currentTarget.value as AreaShape
                      setTemplate({
                        ...template,
                        shape,
                        dimensions: dimensionsForShape(shape, template.dimensions),
                        originMode: shape === 'TARGET' ? 'TARGET_TOKEN' : 'SOURCE_TOKEN',
                      })
                    }}
                    className="mt-1 h-10 w-full rounded-lg border border-white/10 bg-zinc-950 px-3 text-sm text-white"
                  >
                    {shapes.map((shape) => <option key={shape.value} value={shape.value}>{shape.label}</option>)}
                  </select>
                </label>

                {!isTarget ? (
                  <label className="text-xs text-zinc-400">Origem
                    <select
                      value={template.originMode}
                      onChange={(event) => setTemplate({ ...template, originMode: event.currentTarget.value as AreaTemplateInput['originMode'] })}
                      className="mt-1 h-10 w-full rounded-lg border border-white/10 bg-zinc-950 px-3 text-sm text-white"
                    >
                      <option value="SOURCE_TOKEN">Token conjurador</option>
                      <option value="FREE_POINT">Ponto livre</option>
                      <option value="GRID_CELL">Célula do grid</option>
                      <option value="GRID_INTERSECTION">Interseção do grid</option>
                    </select>
                  </label>
                ) : null}

                <label className="text-xs text-zinc-400">Visibilidade
                  <select
                    value={template.visibility}
                    onChange={(event) => setTemplate({ ...template, visibility: event.currentTarget.value as AreaTemplateInput['visibility'] })}
                    className="mt-1 h-10 w-full rounded-lg border border-white/10 bg-zinc-950 px-3 text-sm text-white"
                  >
                    <option value="MASTER_ONLY">Somente Mestre</option>
                    <option value="ALL_PLAYERS">Todos os jogadores</option>
                  </select>
                </label>
              </div>

              <div className="grid gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 md:grid-cols-3">
                {isTarget ? (
                  <>
                    <label className="text-xs text-zinc-400">Máximo de alvos
                      <input type="number" min="1" max="100" step="1" value={template.dimensions.targetCount ?? 1} onChange={(event) => setDimension('targetCount', Number(event.currentTarget.value))} className="mt-1 h-10 w-full rounded-lg border border-white/10 bg-black/35 px-3 text-white" />
                    </label>
                    <label className="text-xs text-zinc-400">Mínimo de alvos
                      <input type="number" min="0" max={template.dimensions.targetCount ?? 1} step="1" value={configuration.minimumTargets ?? 1} onChange={(event) => setConfiguration((current) => ({ ...current, minimumTargets: Number(event.currentTarget.value) }))} className="mt-1 h-10 w-full rounded-lg border border-white/10 bg-black/35 px-3 text-white" />
                    </label>
                    <label className="text-xs text-zinc-400">Range a partir do Token (m)
                      <input type="number" min="0.1" step="0.1" value={configuration.maximumDistance ?? ''} onChange={(event) => setConfiguration((current) => ({ ...current, maximumDistance: event.currentTarget.value ? Number(event.currentTarget.value) : undefined }))} placeholder="Sem limite" className="mt-1 h-10 w-full rounded-lg border border-white/10 bg-black/35 px-3 text-white" />
                    </label>
                  </>
                ) : (
                  <>
                    {(template.shape === 'CIRCLE' || template.shape === 'ORTHOGONAL' || template.shape === 'RING') ? (
                      <label className="text-xs text-zinc-400">Raio externo (m)
                        <input type="number" min="0.1" step="0.1" value={template.dimensions.radius ?? 1} onChange={(event) => setDimension('radius', Number(event.currentTarget.value))} className="mt-1 h-10 w-full rounded-lg border border-white/10 bg-black/35 px-3 text-white" />
                      </label>
                    ) : null}
                    {template.shape === 'RING' ? (
                      <label className="text-xs text-zinc-400">Raio interno (m)
                        <input type="number" min="0" step="0.1" value={template.dimensions.innerRadius ?? 0} onChange={(event) => setDimension('innerRadius', Number(event.currentTarget.value))} className="mt-1 h-10 w-full rounded-lg border border-white/10 bg-black/35 px-3 text-white" />
                      </label>
                    ) : null}
                    {directional ? (
                      <label className="text-xs text-zinc-400">Comprimento (m)
                        <input type="number" min="0.1" step="0.1" value={template.dimensions.length ?? 1} onChange={(event) => setDimension('length', Number(event.currentTarget.value))} className="mt-1 h-10 w-full rounded-lg border border-white/10 bg-black/35 px-3 text-white" />
                      </label>
                    ) : null}
                    {template.shape === 'LINE' ? (
                      <label className="text-xs text-zinc-400">Largura (m)
                        <input type="number" min="0.1" step="0.1" value={template.dimensions.width ?? 1.5} onChange={(event) => setDimension('width', Number(event.currentTarget.value))} className="mt-1 h-10 w-full rounded-lg border border-white/10 bg-black/35 px-3 text-white" />
                      </label>
                    ) : null}
                    {template.shape === 'CONE' ? (
                      <label className="text-xs text-zinc-400">Abertura (graus)
                        <input type="number" min="1" max="359" step="1" value={template.dimensions.angleDegrees ?? 60} onChange={(event) => setDimension('angleDegrees', Number(event.currentTarget.value))} className="mt-1 h-10 w-full rounded-lg border border-white/10 bg-black/35 px-3 text-white" />
                      </label>
                    ) : null}
                    {template.originMode === 'FREE_POINT' ? (
                      <label className="text-xs text-zinc-400">Range da origem (m)
                        <input type="number" min="0.1" step="0.1" value={configuration.maximumOriginDistance ?? ''} onChange={(event) => setConfiguration((current) => ({ ...current, maximumOriginDistance: event.currentTarget.value ? Number(event.currentTarget.value) : undefined }))} placeholder="Sem limite" className="mt-1 h-10 w-full rounded-lg border border-white/10 bg-black/35 px-3 text-white" />
                      </label>
                    ) : null}
                  </>
                )}
              </div>

              {!isTarget ? (
                <div className="grid gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 md:grid-cols-3">
                  <label className="text-xs text-zinc-400">Paredes
                    <select value={template.propagationMode} onChange={(event) => setTemplate({ ...template, propagationMode: event.currentTarget.value as AreaTemplateInput['propagationMode'] })} className="mt-1 h-10 w-full rounded-lg border border-white/10 bg-zinc-950 px-3 text-sm text-white">
                      <option value="IGNORE_WALLS">Ignorar</option>
                      <option value="BLOCKED_BY_WALLS">Bloquear</option>
                      <option value="SPREAD_AROUND_WALLS">Contornar</option>
                    </select>
                  </label>
                  <label className="text-xs text-zinc-400">Interseção com Tokens
                    <select value={template.tokenIntersectionRule} onChange={(event) => setTemplate({ ...template, tokenIntersectionRule: event.currentTarget.value as AreaTemplateInput['tokenIntersectionRule'] })} className="mt-1 h-10 w-full rounded-lg border border-white/10 bg-zinc-950 px-3 text-sm text-white">
                      <option value="COVERED_CELLS">Células cobertas</option>
                      <option value="ANY_OVERLAP">Qualquer sobreposição</option>
                      <option value="CENTER_INSIDE">Centro dentro</option>
                      <option value="HALF_OR_MORE">Metade ou mais</option>
                      <option value="FULLY_INSIDE">Totalmente dentro</option>
                    </select>
                  </label>
                  <label className="text-xs text-zinc-400">Efeito visual
                    <select value={template.style.visualEffect} onChange={(event) => setTemplate({ ...template, style: { ...template.style, visualEffect: event.currentTarget.value as AreaTemplateInput['style']['visualEffect'] } })} className="mt-1 h-10 w-full rounded-lg border border-white/10 bg-zinc-950 px-3 text-sm text-white">
                      <option value="DEFAULT">Padrão</option>
                      <option value="FIRE">Fogo</option>
                      <option value="ELECTRIC">Elétrico</option>
                      <option value="HEALING">Cura</option>
                      <option value="EARTH">Terra</option>
                      <option value="VINES">Videiras</option>
                      <option value="LEAVES">Folhas</option>
                    </select>
                  </label>
                  <label className="text-xs text-zinc-400">Preenchimento
                    <input type="color" value={template.style.fillColor} onChange={(event) => setTemplate({ ...template, style: { ...template.style, fillColor: event.currentTarget.value } })} className="mt-1 h-10 w-full rounded-lg bg-transparent" />
                  </label>
                  <label className="text-xs text-zinc-400">Borda
                    <input type="color" value={template.style.borderColor} onChange={(event) => setTemplate({ ...template, style: { ...template.style, borderColor: event.currentTarget.value } })} className="mt-1 h-10 w-full rounded-lg bg-transparent" />
                  </label>
                  <label className="text-xs text-zinc-400">Anel dos Tokens
                    <input type="color" value={template.style.affectedTokenRing.color} onChange={(event) => setTemplate({ ...template, style: { ...template.style, affectedTokenRing: { ...template.style.affectedTokenRing, color: event.currentTarget.value } } })} className="mt-1 h-10 w-full rounded-lg bg-transparent" />
                  </label>
                </div>
              ) : null}

              {error ? <div className="rounded-lg border border-red-300/20 bg-red-500/10 px-3 py-2 text-sm text-red-100">{error}</div> : null}
            </div>
          ) : null}
        </div>

        <footer className="flex flex-wrap justify-end gap-2 border-t border-white/10 bg-black/20 px-5 py-4">
          {ownBinding ? (
            <button type="button" disabled={saving} onClick={() => void remove()} className="mr-auto inline-flex items-center gap-2 rounded-lg border border-red-300/25 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-100 hover:bg-red-500/20 disabled:opacity-50">
              <Trash2 className="h-4 w-4" />
              {inheritedConfiguration ? 'Restaurar padrão' : 'Remover configuração'}
            </button>
          ) : null}
          <button type="button" onClick={onClose} className="rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold text-zinc-300 hover:bg-white/10">Cancelar</button>
          <button type="submit" disabled={loading || saving} className="rounded-lg bg-orange-600 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-500 disabled:opacity-50">
            {saving ? 'Salvando...' : ownBinding ? 'Salvar alterações' : 'Criar associação'}
          </button>
        </footer>
      </form>
    </div>
  )
}
