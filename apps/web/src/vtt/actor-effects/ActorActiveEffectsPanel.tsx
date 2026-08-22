import { useMemo, useState } from 'react'
import {
  CircleDot,
  List,
  Pencil,
  Plus,
  ShieldCheck,
  Sparkles,
  Trash2,
  TriangleAlert,
  X,
} from 'lucide-react'
import { api, ApiError } from '../../lib/api'
import { publishLocalActorEffectsChanged } from './localInvalidation'
import { useActorActiveEffects } from './useActorActiveEffects'
import type {
  ActorEffectPolarity,
  ActorEffectPresentationResolver,
  ActorEffectView,
} from './types'

type Props = {
  campaignId: string
  actorId: string
  canManage: boolean
  resolvePresentation?: ActorEffectPresentationResolver
}

type EffectDraft = {
  name: string
  description: string
  polarity: ActorEffectPolarity
  category: string
  displayValue: string
}

type OverlayState =
  | { kind: 'all' }
  | { kind: 'detail'; effectId: string }
  | { kind: 'create' }
  | { kind: 'edit'; effectId: string }
  | null

const emptyDraft: EffectDraft = {
  name: '',
  description: '',
  polarity: 'NEUTRAL',
  category: '',
  displayValue: '',
}

const polarityPresentation: Record<ActorEffectPolarity, {
  label: string
  chipClass: string
  badgeClass: string
  Icon: typeof Sparkles
}> = {
  BENEFICIAL: {
    label: 'Benéfico',
    chipClass: 'border-emerald-700/45 bg-emerald-950/20 hover:bg-emerald-950/30',
    badgeClass: 'border-emerald-700/40 bg-emerald-950/30 text-emerald-200',
    Icon: ShieldCheck,
  },
  HARMFUL: {
    label: 'Prejudicial',
    chipClass: 'border-rose-700/45 bg-rose-950/20 hover:bg-rose-950/30',
    badgeClass: 'border-rose-700/40 bg-rose-950/30 text-rose-200',
    Icon: TriangleAlert,
  },
  NEUTRAL: {
    label: 'Neutro',
    chipClass: 'border-stone-500/40 bg-stone-900/20 hover:bg-stone-900/30',
    badgeClass: 'border-stone-500/40 bg-stone-900/25 text-stone-200',
    Icon: CircleDot,
  },
}

function nullable(value: string) {
  const trimmed = value.trim()
  return trimmed ? trimmed : null
}

function draftFromEffect(effect: ActorEffectView): EffectDraft {
  return {
    name: effect.name,
    description: effect.description ?? '',
    polarity: effect.polarity,
    category: effect.category ?? '',
    displayValue: effect.displayValue ?? '',
  }
}

function EffectIcon({ effect, resolvedIconUrl }: { effect: ActorEffectView; resolvedIconUrl?: string | null }) {
  const visual = polarityPresentation[effect.polarity]
  const iconUrl = resolvedIconUrl ?? effect.iconUrl

  if (iconUrl) {
    return <img src={iconUrl} alt="" className="h-5 w-5 shrink-0 rounded object-contain" />
  }

  return <visual.Icon className="h-4 w-4 shrink-0" />
}

function ManualIconPreview({ polarity }: { polarity: ActorEffectPolarity }) {
  const visual = polarityPresentation[polarity]
  return (
    <div className="flex items-center gap-2 rounded-lg border border-[#7c6d59]/20 bg-[#f2e8d7]/70 px-3 py-2">
      <span className={`grid h-8 w-8 place-items-center rounded-full border ${visual.badgeClass}`}>
        <visual.Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold text-[#44392e]">Ícone automático</span>
        <span className="block text-[10px] leading-snug text-[#756653]">
          Efeitos manuais usam um símbolo genérico de {visual.label.toLowerCase()}. Efeitos de Game System podem trazer seu próprio ícone.
        </span>
      </span>
    </div>
  )
}

export function ActorActiveEffectsPanel({
  campaignId,
  actorId,
  canManage,
  resolvePresentation,
}: Props) {
  const { effects, loading, error, reload } = useActorActiveEffects(campaignId, actorId)
  const [overlay, setOverlay] = useState<OverlayState>(null)
  const [draft, setDraft] = useState<EffectDraft>(emptyDraft)
  const [saving, setSaving] = useState(false)
  const [mutationError, setMutationError] = useState<string | null>(null)

  const visibleEffects = effects.slice(0, 6)
  const hiddenCount = Math.max(0, effects.length - visibleEffects.length)
  const selectedEffect = useMemo(() => {
    if (!overlay || !('effectId' in overlay)) return null
    return effects.find((effect) => effect.id === overlay.effectId) ?? null
  }, [effects, overlay])

  function resolved(effect: ActorEffectView) {
    const presentation = resolvePresentation?.(effect) ?? null
    return {
      iconUrl: presentation?.iconUrl ?? effect.iconUrl,
      originLabel: presentation?.originLabel
        ?? (effect.namespace === 'questhub:manual-effects:v1' ? 'Manual' : null),
      summary: presentation?.summary ?? effect.description,
    }
  }

  function closeOverlay() {
    setMutationError(null)
    setOverlay(null)
  }

  function openCreate() {
    setDraft(emptyDraft)
    setMutationError(null)
    setOverlay({ kind: 'create' })
  }

  function openEdit(effect: ActorEffectView) {
    setDraft(draftFromEffect(effect))
    setMutationError(null)
    setOverlay({ kind: 'edit', effectId: effect.id })
  }

  function invalidateAfterMutation() {
    publishLocalActorEffectsChanged({ campaignId, actorId })
    reload()
  }

  async function saveEffect() {
    if (!canManage || saving || !draft.name.trim()) return
    setSaving(true)
    setMutationError(null)

    const body = {
      name: draft.name.trim(),
      description: nullable(draft.description),
      polarity: draft.polarity,
      category: nullable(draft.category),
      displayValue: nullable(draft.displayValue),
    }

    try {
      if (overlay?.kind === 'edit') {
        await api<ActorEffectView>(
          `/api/campaigns/${encodeURIComponent(campaignId)}/actors/${encodeURIComponent(actorId)}/effects/${encodeURIComponent(overlay.effectId)}`,
          { method: 'PATCH', body: JSON.stringify(body) },
        )
      } else {
        await api<ActorEffectView>(
          `/api/campaigns/${encodeURIComponent(campaignId)}/actors/${encodeURIComponent(actorId)}/effects`,
          { method: 'POST', body: JSON.stringify(body) },
        )
      }

      closeOverlay()
      invalidateAfterMutation()
    } catch (cause) {
      setMutationError(cause instanceof ApiError ? cause.message : 'Não foi possível salvar o efeito.')
    } finally {
      setSaving(false)
    }
  }

  async function removeEffect(effect: ActorEffectView) {
    if (!canManage || saving) return
    if (!window.confirm(`Remover o efeito “${effect.name}”?`)) return

    setSaving(true)
    setMutationError(null)
    try {
      await api<void>(
        `/api/campaigns/${encodeURIComponent(campaignId)}/actors/${encodeURIComponent(actorId)}/effects/${encodeURIComponent(effect.id)}`,
        { method: 'DELETE' },
      )
      closeOverlay()
      invalidateAfterMutation()
    } catch (cause) {
      setMutationError(cause instanceof ApiError ? cause.message : 'Não foi possível remover o efeito.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <section
      className="shrink-0 border-b border-[#d4c5aa]/25 bg-[#a99a82] px-3 py-2 text-[#332c24]"
      aria-label="Efeitos ativos"
      data-actor-active-effects
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <Sparkles className="h-4 w-4 shrink-0 text-[#6d4ac8]" />
          <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#51483d]">Efeitos ativos</h3>
          <span className="rounded-full border border-[#6f6252]/25 bg-[#ede2cf]/55 px-1.5 py-0.5 text-[10px] font-semibold text-[#665846]">
            {effects.length}
          </span>
        </div>
        {canManage ? (
          <button
            type="button"
            onClick={openCreate}
            className="inline-flex shrink-0 items-center gap-1 rounded-md border border-[#6d4ac8]/30 bg-[#6d4ac8]/10 px-2 py-1 text-[11px] font-semibold text-[#4d2c91] transition hover:bg-[#6d4ac8]/20"
          >
            <Plus className="h-3.5 w-3.5" />
            Adicionar efeito
          </button>
        ) : null}
      </div>

      <div className="mt-1.5 flex flex-wrap items-center gap-1.5 overflow-x-hidden">
        {loading && effects.length === 0 ? (
          <div className="h-7 w-40 animate-pulse rounded-md bg-[#7b6d5b]/15" />
        ) : null}

        {!loading && error ? (
          <button
            type="button"
            onClick={reload}
            className="rounded-md border border-rose-700/25 bg-rose-950/10 px-2 py-1 text-xs text-rose-900"
          >
            {error} Tentar novamente
          </button>
        ) : null}

        {!loading && !error && effects.length === 0 ? (
          <span className="text-xs text-[#6f6252]">Nenhum efeito ativo</span>
        ) : null}

        {visibleEffects.map((effect) => {
          const visual = polarityPresentation[effect.polarity]
          const presentation = resolved(effect)
          return (
            <button
              key={effect.id}
              type="button"
              onClick={() => setOverlay({ kind: 'detail', effectId: effect.id })}
              className={`inline-flex max-w-56 items-center gap-1.5 rounded-md border px-2 py-1 text-left text-xs font-semibold text-[#3f352b] transition ${visual.chipClass}`}
              title={effect.name}
            >
              <EffectIcon effect={effect} resolvedIconUrl={presentation.iconUrl} />
              <span className="truncate">{effect.name}</span>
              {effect.displayValue ? (
                <span className="shrink-0 rounded bg-black/10 px-1 py-0.5 text-[10px] font-bold">{effect.displayValue}</span>
              ) : null}
            </button>
          )
        })}

        {hiddenCount > 0 ? (
          <button
            type="button"
            onClick={() => setOverlay({ kind: 'all' })}
            className="inline-flex items-center gap-1 rounded-md border border-[#6f6252]/25 bg-[#ede2cf]/50 px-2 py-1 text-xs font-semibold text-[#584c3e] hover:bg-[#ede2cf]/75"
          >
            <List className="h-3.5 w-3.5" />
            +{hiddenCount} Ver todos
          </button>
        ) : null}
      </div>

      {overlay ? (
        <div
          className="fixed inset-0 z-[260] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) closeOverlay()
          }}
        >
          <div
            className={`max-h-[82vh] w-full overflow-y-auto rounded-xl border border-[#8c7a60]/60 bg-[#e1d3bd] p-4 text-[#352d24] shadow-2xl ${overlay.kind === 'create' || overlay.kind === 'edit' ? 'max-w-md' : 'max-w-lg'}`}
            onPointerDown={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <h4 className="text-sm font-bold">
                {overlay.kind === 'all' ? 'Todos os efeitos ativos' : null}
                {overlay.kind === 'create' ? 'Adicionar efeito' : null}
                {overlay.kind === 'edit' ? 'Editar efeito' : null}
                {overlay.kind === 'detail' ? 'Detalhes do efeito' : null}
              </h4>
              <button
                type="button"
                onClick={closeOverlay}
                className="rounded-md p-1.5 text-[#665846] hover:bg-black/5"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {overlay.kind === 'all' ? (
              <div className="space-y-2">
                {effects.map((effect) => {
                  const visual = polarityPresentation[effect.polarity]
                  const presentation = resolved(effect)
                  return (
                    <button
                      key={effect.id}
                      type="button"
                      onClick={() => setOverlay({ kind: 'detail', effectId: effect.id })}
                      className={`flex w-full items-center gap-2 rounded-lg border p-2 text-left ${visual.chipClass}`}
                    >
                      <EffectIcon effect={effect} resolvedIconUrl={presentation.iconUrl} />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold">{effect.name}</span>
                        <span className="block truncate text-xs text-[#6b5d4d]">
                          {effect.displayValue || presentation.summary || visual.label}
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>
            ) : null}

            {overlay.kind === 'detail' && selectedEffect ? (() => {
              const visual = polarityPresentation[selectedEffect.polarity]
              const presentation = resolved(selectedEffect)
              return (
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#7c6d59]/25 bg-[#f2e8d7]">
                      <EffectIcon effect={selectedEffect} resolvedIconUrl={presentation.iconUrl} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-base font-bold">{selectedEffect.name}</div>
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${visual.badgeClass}`}>{visual.label}</span>
                        {selectedEffect.displayValue ? <span className="rounded-full border border-[#6f6252]/25 bg-[#f2e8d7] px-2 py-0.5 text-[10px] font-bold">{selectedEffect.displayValue}</span> : null}
                        {selectedEffect.category ? <span className="rounded-full border border-[#6f6252]/25 bg-[#f2e8d7] px-2 py-0.5 text-[10px]">{selectedEffect.category}</span> : null}
                        {presentation.originLabel ? <span className="rounded-full border border-[#6f6252]/25 bg-[#f2e8d7] px-2 py-0.5 text-[10px]">{presentation.originLabel}</span> : null}
                      </div>
                    </div>
                  </div>

                  {presentation.summary ? (
                    <p className="whitespace-pre-wrap rounded-lg border border-[#7c6d59]/20 bg-[#f2e8d7]/75 p-3 text-sm leading-relaxed text-[#514537]">{presentation.summary}</p>
                  ) : null}

                  {mutationError ? (
                    <p className="rounded-md border border-rose-700/25 bg-rose-950/10 px-3 py-2 text-xs font-semibold text-rose-800">{mutationError}</p>
                  ) : null}

                  {canManage ? (
                    <div className="flex justify-end gap-2 border-t border-[#7c6d59]/20 pt-3">
                      <button
                        type="button"
                        onClick={() => openEdit(selectedEffect)}
                        className="inline-flex items-center gap-1 rounded-md border border-[#6d4ac8]/30 bg-[#6d4ac8]/10 px-3 py-1.5 text-xs font-semibold text-[#4d2c91]"
                      >
                        <Pencil className="h-3.5 w-3.5" /> Editar
                      </button>
                      <button
                        type="button"
                        onClick={() => void removeEffect(selectedEffect)}
                        className="inline-flex items-center gap-1 rounded-md border border-rose-700/30 bg-rose-950/10 px-3 py-1.5 text-xs font-semibold text-rose-900"
                      >
                        <Trash2 className="h-3.5 w-3.5" /> Remover
                      </button>
                    </div>
                  ) : null}
                </div>
              )
            })() : null}

            {(overlay.kind === 'create' || overlay.kind === 'edit') ? (
              <div className="space-y-3">
                <ManualIconPreview polarity={draft.polarity} />

                <label className="block text-xs font-semibold">
                  Nome
                  <input
                    value={draft.name}
                    onChange={(event) => setDraft((current) => ({ ...current, name: event.target.value }))}
                    maxLength={120}
                    autoFocus
                    className="mt-1 w-full rounded-md border border-[#7c6d59]/30 bg-[#f6ecdc] px-3 py-2 text-sm outline-none focus:border-[#6d4ac8]"
                  />
                </label>

                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block text-xs font-semibold">
                    Polaridade
                    <select
                      value={draft.polarity}
                      onChange={(event) => setDraft((current) => ({ ...current, polarity: event.target.value as ActorEffectPolarity }))}
                      className="mt-1 w-full rounded-md border border-[#7c6d59]/30 bg-[#f6ecdc] px-3 py-2 text-sm outline-none focus:border-[#6d4ac8]"
                    >
                      <option value="BENEFICIAL">Benéfico</option>
                      <option value="HARMFUL">Prejudicial</option>
                      <option value="NEUTRAL">Neutro</option>
                    </select>
                  </label>
                  <label className="block text-xs font-semibold">
                    Valor exibido
                    <input
                      value={draft.displayValue}
                      onChange={(event) => setDraft((current) => ({ ...current, displayValue: event.target.value }))}
                      maxLength={120}
                      placeholder="Opcional"
                      className="mt-1 w-full rounded-md border border-[#7c6d59]/30 bg-[#f6ecdc] px-3 py-2 text-sm outline-none focus:border-[#6d4ac8]"
                    />
                  </label>
                </div>

                <label className="block text-xs font-semibold">
                  Categoria
                  <input
                    value={draft.category}
                    onChange={(event) => setDraft((current) => ({ ...current, category: event.target.value }))}
                    maxLength={120}
                    placeholder="Opcional"
                    className="mt-1 w-full rounded-md border border-[#7c6d59]/30 bg-[#f6ecdc] px-3 py-2 text-sm outline-none focus:border-[#6d4ac8]"
                  />
                </label>

                <label className="block text-xs font-semibold">
                  Descrição
                  <textarea
                    value={draft.description}
                    onChange={(event) => setDraft((current) => ({ ...current, description: event.target.value }))}
                    maxLength={4000}
                    rows={4}
                    placeholder="Opcional"
                    className="mt-1 w-full resize-y rounded-md border border-[#7c6d59]/30 bg-[#f6ecdc] px-3 py-2 text-sm outline-none focus:border-[#6d4ac8]"
                  />
                </label>

                {mutationError ? <p className="text-xs font-semibold text-rose-800">{mutationError}</p> : null}

                <div className="flex justify-end gap-2 border-t border-[#7c6d59]/20 pt-3">
                  <button
                    type="button"
                    onClick={closeOverlay}
                    className="rounded-md border border-[#7c6d59]/25 px-3 py-1.5 text-xs font-semibold"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    disabled={saving || !draft.name.trim()}
                    onClick={() => void saveEffect()}
                    className="rounded-md bg-[#6d4ac8] px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-50"
                  >
                    {saving ? 'Salvando…' : 'Salvar'}
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  )
}
