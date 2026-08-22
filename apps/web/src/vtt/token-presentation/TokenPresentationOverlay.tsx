import { useEffect, useMemo, useRef, useState } from 'react'
import { CircleDot, ShieldCheck, TriangleAlert } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { CampaignActiveEffectDefinitionModal } from '../actor-effects/CampaignActiveEffectDefinitionModal'
import { normalizeActorEffectPresentationText } from '../actor-effects/presentationText'
import type { ActorEffectView } from '../actor-effects/types'
import { useTokenActiveEffects } from '../actor-effects/useTokenActiveEffects'
import type {
  TokenIndicatorPresentation,
  TokenResourcePresentation,
} from './types'
import { useTokenPresentation } from './useTokenPresentation'

function resourceFillClass(resource: TokenResourcePresentation) {
  if (resource.tone === 'critical') return 'bg-rose-500'
  if (resource.tone === 'warning') return 'bg-amber-400'
  if (resource.tone === 'positive') return 'bg-emerald-400'

  const maximum = resource.maximum ?? 0
  if (maximum <= 0) return 'bg-sky-400'
  const ratio = resource.value / maximum
  if (ratio <= 0.25) return 'bg-rose-500'
  if (ratio <= 0.5) return 'bg-amber-400'
  return 'bg-emerald-400'
}

function indicatorClass(indicator: TokenIndicatorPresentation) {
  if (indicator.severity === 'critical') return 'border-rose-300/60 bg-rose-950/90 text-rose-100'
  if (indicator.severity === 'warning') return 'border-amber-300/60 bg-amber-950/90 text-amber-100'
  if (indicator.severity === 'positive') return 'border-emerald-300/60 bg-emerald-950/90 text-emerald-100'
  return 'border-zinc-300/40 bg-zinc-950/90 text-zinc-100'
}

function effectClass(effect: ActorEffectView) {
  if (effect.polarity === 'HARMFUL') return 'border-rose-300/70 bg-rose-950/95 text-rose-100'
  if (effect.polarity === 'BENEFICIAL') return 'border-emerald-300/70 bg-emerald-950/95 text-emerald-100'
  return 'border-zinc-300/50 bg-zinc-950/95 text-zinc-100'
}

function effectPolarityLabel(effect: ActorEffectView) {
  if (effect.polarity === 'HARMFUL') return 'Prejudicial'
  if (effect.polarity === 'BENEFICIAL') return 'Benéfico'
  return 'Neutro'
}

function effectDescription(effect: ActorEffectView) {
  return normalizeActorEffectPresentationText(effect.description)
}

function EffectFallbackIcon({ effect, compact }: { effect: ActorEffectView; compact: boolean }) {
  const className = compact ? 'h-2.5 w-2.5' : 'h-4 w-4'
  if (effect.polarity === 'HARMFUL') return <TriangleAlert className={className} />
  if (effect.polarity === 'BENEFICIAL') return <ShieldCheck className={className} />
  return <CircleDot className={className} />
}

function EffectGlyph({ effect, compact = false }: { effect: ActorEffectView; compact?: boolean }) {
  const sizeClass = compact ? 'h-[18px] w-[18px]' : 'h-8 w-8'
  return (
    <span
      className={`relative grid shrink-0 place-items-center overflow-hidden rounded-full border shadow-lg ${sizeClass} ${effectClass(effect)}`}
      title={`${effect.name}${effect.displayValue ? ` ${effect.displayValue}` : ''}`}
    >
      {effect.iconUrl ? (
        <img
          src={effect.iconUrl}
          alt=""
          draggable={false}
          className="h-full w-full object-cover"
        />
      ) : (
        <EffectFallbackIcon effect={effect} compact={compact} />
      )}
      {compact && effect.displayValue ? (
        <span className="absolute -bottom-px -right-px max-w-[14px] truncate rounded bg-black/90 px-0.5 text-[7px] font-black leading-[9px] text-white">
          {effect.displayValue}
        </span>
      ) : null}
    </span>
  )
}

function ActiveEffectIndicators({
  campaignId,
  effects,
}: {
  campaignId?: string
  effects: ActorEffectView[]
}) {
  const [open, setOpen] = useState(false)
  const [selectedEffect, setSelectedEffect] = useState<ActorEffectView | null>(null)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const visibleEffects = effects.slice(0, 3)
  const hiddenCount = Math.max(0, effects.length - visibleEffects.length)

  useEffect(() => {
    if (!open) return

    function onOutsidePointerDown(event: PointerEvent) {
      const root = rootRef.current
      if (!root || root.contains(event.target as Node)) return
      event.stopPropagation()
      setOpen(false)
    }

    document.addEventListener('pointerdown', onOutsidePointerDown, true)
    return () => document.removeEventListener('pointerdown', onOutsidePointerDown, true)
  }, [open])

  useEffect(() => {
    if (!selectedEffect) return
    const current = effects.find((effect) => effect.id === selectedEffect.id)
    if (!current) {
      setSelectedEffect(null)
      return
    }
    if (current !== selectedEffect) setSelectedEffect(current)
  }, [effects, selectedEffect])

  function openDetail(effect: ActorEffectView) {
    setOpen(false)
    setSelectedEffect(effect)
  }

  function closeDetail() {
    setSelectedEffect(null)
    setOpen(true)
  }

  return (
    <>
      <div ref={rootRef} className="pointer-events-auto relative w-max max-w-[220px]">
        <button
          type="button"
          aria-expanded={open}
          aria-label={`${effects.length} efeito${effects.length === 1 ? '' : 's'} ativo${effects.length === 1 ? '' : 's'}`}
          title="Efeitos ativos — clique para ver detalhes"
          className="flex cursor-pointer items-center justify-center gap-0.5 rounded-full border border-black/70 bg-black/60 px-1 py-0.5 shadow-lg backdrop-blur-sm"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={(event) => {
            event.stopPropagation()
            setOpen((current) => !current)
          }}
        >
          {visibleEffects.map((effect) => (
            <EffectGlyph key={effect.id} effect={effect} compact />
          ))}
          {hiddenCount > 0 ? (
            <span className="grid h-[18px] min-w-[18px] place-items-center rounded-full border border-zinc-300/50 bg-zinc-950/95 px-1 text-[8px] font-black text-zinc-100 shadow-lg">
              +{hiddenCount}
            </span>
          ) : null}
        </button>

        {open ? (
          <div
            className="absolute bottom-full left-1/2 z-[60] mb-2 max-h-64 w-64 -translate-x-1/2 overflow-y-auto rounded-lg border border-white/15 bg-[#111218]/98 p-2 text-left text-white shadow-2xl backdrop-blur"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-2 border-b border-white/10 px-1 pb-2 text-[10px] font-bold uppercase tracking-wide text-zinc-400">
              Efeitos ativos · {effects.length}
            </div>
            <div className="grid gap-1.5">
              {effects.map((effect) => {
                const description = effectDescription(effect)
                return (
                  <button
                    key={effect.id}
                    type="button"
                    onClick={() => openDetail(effect)}
                    className="flex w-full gap-2 rounded-md border border-white/10 bg-white/[0.04] p-2 text-left transition hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    <EffectGlyph effect={effect} />
                    <span className="min-w-0 flex-1">
                      <span className="flex items-start justify-between gap-2">
                        <span className="truncate text-xs font-bold text-zinc-100">{effect.name}</span>
                        {effect.displayValue ? (
                          <span className="shrink-0 rounded border border-white/10 bg-black/30 px-1.5 py-0.5 text-[9px] font-bold text-zinc-200">
                            {effect.displayValue}
                          </span>
                        ) : null}
                      </span>
                      <span className="mt-0.5 flex flex-wrap gap-x-2 text-[9px] uppercase tracking-wide text-zinc-500">
                        <span>{effectPolarityLabel(effect)}</span>
                        {effect.category ? <span>{effect.category}</span> : null}
                      </span>
                      {description ? (
                        <span className="mt-1 line-clamp-2 block whitespace-pre-line text-[10px] leading-snug text-zinc-300">{description}</span>
                      ) : null}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        ) : null}
      </div>

      {selectedEffect ? (
        <CampaignActiveEffectDefinitionModal
          campaignId={campaignId}
          effect={selectedEffect}
          onClose={closeDetail}
        />
      ) : null}
    </>
  )
}

function ResourceBar({ resource }: { resource: TokenResourcePresentation }) {
  const maximum = Math.max(0, resource.maximum ?? 0)
  const current = Math.max(0, resource.value)
  const percentage = maximum > 0 ? Math.min(100, (current / maximum) * 100) : 0
  const temporary = Math.max(0, resource.temporary ?? 0)
  const title = [
    resource.label,
    maximum > 0 ? `${current}/${maximum}` : String(current),
    temporary > 0 ? `+${temporary}` : null,
  ].filter(Boolean).join(' ')

  return (
    <div title={title} className="relative h-2 overflow-hidden rounded-full border border-black/80 bg-zinc-950/90 shadow-lg">
      <div className={`h-full transition-[width] duration-200 ${resourceFillClass(resource)}`} style={{ width: `${percentage}%` }} />
      {temporary > 0 && maximum > 0 ? (
        <div
          className="absolute bottom-0 top-0 border-l border-white/70 bg-sky-300/70"
          style={{
            left: `${percentage}%`,
            width: `${Math.min(100 - percentage, (temporary / maximum) * 100)}%`,
          }}
        />
      ) : null}
    </div>
  )
}

export function TokenPresentationOverlay({
  tokenId,
  left,
  top,
  size,
}: {
  tokenId: string
  left: number
  top: number
  size: number
}) {
  const { campaignId } = useParams()
  const { presentation: currentPresentation } = useTokenPresentation(campaignId, tokenId)
  const { effects } = useTokenActiveEffects(campaignId, tokenId)
  const resources = useMemo(
    () => currentPresentation?.resources.filter((resource) => resource.presentation === 'bar') ?? [],
    [currentPresentation],
  )
  const indicators = currentPresentation?.indicators ?? []
  if (!resources.length && !indicators.length && !effects.length) return null

  const overlayWidth = Math.max(64, size)
  const overlayLeft = left + (size - overlayWidth) / 2

  return (
    <div
      className="pointer-events-none absolute z-[9]"
      style={{ left: overlayLeft, top, width: overlayWidth, height: size }}
      data-token-presentation-overlay
    >
      {(effects.length || indicators.length) ? (
        <div className="absolute bottom-full left-1/2 mb-1 flex max-w-[240px] -translate-x-1/2 flex-wrap items-end justify-center gap-1">
          {effects.length ? <ActiveEffectIndicators campaignId={campaignId} effects={effects} /> : null}
          {indicators.map((indicator) => (
            <span
              key={indicator.id}
              className={`whitespace-nowrap rounded border px-1.5 py-0.5 text-[9px] font-bold leading-none shadow-lg ${indicatorClass(indicator)}`}
            >
              {indicator.label}{indicator.value !== undefined ? ` ${indicator.value}` : ''}
            </span>
          ))}
        </div>
      ) : null}

      {resources.length ? (
        <div className="absolute left-0 right-0 top-full mt-1 grid gap-1">
          {resources.map((resource) => <ResourceBar key={resource.id} resource={resource} />)}
        </div>
      ) : null}
    </div>
  )
}
