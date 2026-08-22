import { useEffect, useMemo, useState } from 'react'
import { Search, Sparkles, X } from 'lucide-react'
import { api, ApiError } from '../lib/api'
import { publishLocalActorEffectsChanged } from '../vtt/actor-effects/localInvalidation'
import type { ActorEffectPresentation, ActorEffectView } from '../vtt/actor-effects/types'

const PF2E_EFFECT_NAMESPACE = 'questhub:pathfinder-2e:active-effects:v1'

type Definition = {
  definitionKey: string
  kind: 'condition' | 'effect' | 'affliction'
  name: string
  description: string | null
  iconUrl: string | null
  polarity: 'BENEFICIAL' | 'HARMFUL' | 'NEUTRAL'
  group: string | null
  valued: boolean
  baseValue: number | null
}

type DefinitionsResponse = {
  gameSystem: 'PATHFINDER_2E'
  definitions: Definition[]
}

type Props = {
  campaignId: string
  actorId: string
}

type PathfinderEffectOrigin = {
  system?: unknown
  type?: unknown
}

const originLabels: Record<string, string> = {
  MANUAL: 'PF2e · Manual',
  SPELL: 'PF2e · Magia',
  ITEM: 'PF2e · Item',
  CREATURE: 'PF2e · Criatura',
  HAZARD: 'PF2e · Hazard',
}

export function resolvePathfinderActorEffectPresentation(
  effect: ActorEffectView,
): ActorEffectPresentation | null {
  if (effect.namespace !== PF2E_EFFECT_NAMESPACE) return null

  const origin = effect.origin && typeof effect.origin === 'object'
    ? effect.origin as PathfinderEffectOrigin
    : null
  const type = typeof origin?.type === 'string' ? origin.type : ''

  return {
    iconUrl: effect.iconUrl,
    originLabel: originLabels[type] ?? 'Pathfinder 2e',
    summary: effect.description,
  }
}

export function PathfinderActiveEffectComposer({ campaignId, actorId }: Props) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [definitions, setDefinitions] = useState<Definition[]>([])
  const [selectedKey, setSelectedKey] = useState<string | null>(null)
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const selected = useMemo(
    () => definitions.find((definition) => definition.definitionKey === selectedKey) ?? null,
    [definitions, selectedKey],
  )

  useEffect(() => {
    if (!open) return
    let cancelled = false
    const timer = window.setTimeout(() => {
      setLoading(true)
      setError(null)
      const params = new URLSearchParams({ q: query.trim(), limit: '60' })
      api<DefinitionsResponse>(
        `/api/campaigns/${encodeURIComponent(campaignId)}/game-system-effects/definitions?${params.toString()}`,
      )
        .then((response) => {
          if (cancelled) return
          setDefinitions(response.definitions)
          setSelectedKey((current) => (
            current && response.definitions.some((definition) => definition.definitionKey === current)
              ? current
              : null
          ))
        })
        .catch((cause) => {
          if (cancelled) return
          setDefinitions([])
          setError(cause instanceof ApiError ? cause.message : 'Não foi possível carregar os efeitos PF2e.')
        })
        .finally(() => {
          if (!cancelled) setLoading(false)
        })
    }, 160)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [campaignId, open, query])

  function selectDefinition(definition: Definition) {
    setSelectedKey(definition.definitionKey)
    setValue(definition.valued && definition.baseValue ? String(definition.baseValue) : '')
    setError(null)
  }

  async function applyEffect() {
    if (!selected || saving) return

    let parsedValue: number | undefined
    if (selected.valued) {
      parsedValue = Number(value)
      if (!Number.isInteger(parsedValue) || parsedValue <= 0) {
        setError('Informe um valor inteiro maior que zero para esta condição.')
        return
      }
    }

    setSaving(true)
    setError(null)
    try {
      await api<ActorEffectView>(
        `/api/campaigns/${encodeURIComponent(campaignId)}/actors/${encodeURIComponent(actorId)}/game-system-effects`,
        {
          method: 'POST',
          body: JSON.stringify({
            source: { type: 'MANUAL', definitionKey: selected.definitionKey },
            ...(parsedValue === undefined ? {} : { value: parsedValue }),
          }),
        },
      )
      publishLocalActorEffectsChanged({ campaignId, actorId })
      setOpen(false)
      setQuery('')
      setDefinitions([])
      setSelectedKey(null)
      setValue('')
    } catch (cause) {
      setError(cause instanceof ApiError ? cause.message : 'Não foi possível aplicar o efeito PF2e.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <>
      <div className="shrink-0 border-b border-[#d4c5aa]/20 bg-[#a99a82] px-3 py-1.5 text-[#332c24]">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-1.5 rounded-md border border-[#6d4ac8]/35 bg-[#6d4ac8]/12 px-2.5 py-1 text-[11px] font-bold text-[#4d2c91] transition hover:bg-[#6d4ac8]/22"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Aplicar efeito PF2e
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[275] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm">
          <div className="flex max-h-[82vh] w-full max-w-xl flex-col overflow-hidden rounded-xl border border-[#8c7a60]/60 bg-[#e1d3bd] text-[#352d24] shadow-2xl">
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#7c6d59]/20 px-4 py-3">
              <div>
                <h4 className="text-sm font-bold">Aplicar efeito Pathfinder 2e</h4>
                <p className="mt-0.5 text-xs text-[#6b5d4d]">Selecione explicitamente a definição a registrar no ator.</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md p-1.5 text-[#665846] hover:bg-black/5"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="shrink-0 p-3">
              <label className="relative block">
                <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-[#776956]" />
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Buscar condição ou efeito…"
                  className="w-full rounded-md border border-[#7c6d59]/30 bg-[#f6ecdc] py-2 pl-9 pr-3 text-sm outline-none focus:border-[#6d4ac8]"
                />
              </label>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-3">
              {loading ? <p className="py-3 text-center text-xs text-[#6b5d4d]">Carregando…</p> : null}
              {!loading && definitions.length === 0 && !error ? (
                <p className="py-3 text-center text-xs text-[#6b5d4d]">Nenhuma definição encontrada.</p>
              ) : null}

              <div className="space-y-1.5">
                {definitions.map((definition) => {
                  const active = definition.definitionKey === selectedKey
                  return (
                    <button
                      key={definition.definitionKey}
                      type="button"
                      onClick={() => selectDefinition(definition)}
                      className={[
                        'flex w-full items-center gap-2 rounded-lg border p-2.5 text-left transition',
                        active
                          ? 'border-[#6d4ac8]/55 bg-[#6d4ac8]/12'
                          : 'border-[#7c6d59]/20 bg-[#f2e8d7]/70 hover:bg-[#f2e8d7]',
                      ].join(' ')}
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-bold">{definition.name}</span>
                        <span className="block text-[10px] uppercase tracking-wide text-[#746653]">
                          {definition.kind === 'condition' ? 'Condição' : definition.kind === 'affliction' ? 'Aflição' : 'Efeito'}
                          {definition.valued ? ' · possui valor' : ''}
                        </span>
                      </span>
                      <span className="rounded-full border border-[#7c6d59]/20 px-2 py-0.5 text-[10px] font-semibold">
                        {definition.polarity === 'HARMFUL' ? 'Prejudicial' : definition.polarity === 'BENEFICIAL' ? 'Benéfico' : 'Neutro'}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="shrink-0 border-t border-[#7c6d59]/20 bg-[#d7c8af] p-3">
              {selected?.valued ? (
                <label className="mb-3 block text-xs font-semibold">
                  Valor / intensidade
                  <input
                    type="number"
                    min={1}
                    step={1}
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    className="mt-1 w-28 rounded-md border border-[#7c6d59]/30 bg-[#f6ecdc] px-3 py-2 text-sm outline-none focus:border-[#6d4ac8]"
                  />
                </label>
              ) : null}

              {error ? <p className="mb-2 text-xs font-semibold text-rose-800">{error}</p> : null}

              <div className="flex items-center justify-between gap-3">
                <span className="truncate text-xs text-[#6b5d4d]">
                  {selected ? selected.name : 'Selecione um efeito para continuar'}
                </span>
                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-md border border-[#7c6d59]/25 px-3 py-1.5 text-xs font-semibold"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    disabled={!selected || saving}
                    onClick={() => void applyEffect()}
                    className="rounded-md bg-[#6d4ac8] px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-50"
                  >
                    {saving ? 'Aplicando…' : 'Aplicar efeito'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
