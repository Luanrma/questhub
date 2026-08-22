import { useEffect, useState } from 'react'
import { BookOpen, CircleDot, ShieldCheck, Sparkles, TriangleAlert, X } from 'lucide-react'
import { api, ApiError } from '../lib/api'
import type { GameSystemContentLocale } from './registry'

export type PathfinderActiveEffectReferenceContext = {
  outcome: 'CRITICAL_SUCCESS' | 'SUCCESS' | 'FAILURE' | 'CRITICAL_FAILURE' | null
  valueHint: number | null
  stageHint: number | null
  origin: {
    entryType: 'CREATURE' | 'HAZARD'
    kind: 'ACTION' | 'ATTACK' | 'ENTITY' | 'HAZARD_ROUTINE' | 'UNKNOWN_OWNER'
    sourceId: string | null
    name: string | null
    actionKind: 'action' | 'reaction' | 'passive' | null
  } | null
}

export type PathfinderActiveEffectReference = {
  contentId: string
  occurrenceIndex: number
  definitionKey: string
  kind: 'condition' | 'effect' | 'affliction'
  displayLabel: string
  exactLabels: readonly string[]
  potential: boolean
  evidence: string
  context: PathfinderActiveEffectReferenceContext
  source: {
    sourcePath: string
    sourceIndex: number
    label: string | null
    ownerSourceId: string | null
  }
  schemaVersion: 1
}

type Definition = {
  definitionKey: string
  kind: 'condition' | 'effect' | 'affliction'
  source: {
    sourcePack: string
    sourceId: string
    slug?: string
    publicationTitle?: string
  }
  name: string
  description: string
  iconUrl: string | null
  polarity: 'BENEFICIAL' | 'HARMFUL' | 'NEUTRAL'
  group: string | null
  conditionValue: {
    isValued: boolean
    baseValue: number | null
  } | null
}

type Props = {
  definitionKey: string
  locale: GameSystemContentLocale
  reference?: PathfinderActiveEffectReference | null
  zIndex?: number
  onClose: () => void
}

const polarity = {
  BENEFICIAL: {
    label: 'Benéfico',
    classes: 'border-emerald-700/35 bg-emerald-950/15 text-emerald-900',
    Icon: ShieldCheck,
  },
  HARMFUL: {
    label: 'Prejudicial',
    classes: 'border-rose-700/35 bg-rose-950/10 text-rose-900',
    Icon: TriangleAlert,
  },
  NEUTRAL: {
    label: 'Neutro',
    classes: 'border-stone-600/30 bg-stone-900/10 text-stone-800',
    Icon: CircleDot,
  },
} as const

const kindLabels = {
  condition: 'Condição',
  effect: 'Efeito',
  affliction: 'Aflição',
} as const

const outcomeLabels = {
  CRITICAL_SUCCESS: 'Sucesso crítico',
  SUCCESS: 'Sucesso',
  FAILURE: 'Falha',
  CRITICAL_FAILURE: 'Falha crítica',
} as const

const originKindLabels = {
  ACTION: 'Ação',
  ATTACK: 'Ataque',
  ENTITY: 'Entidade',
  HAZARD_ROUTINE: 'Rotina de hazard',
  UNKNOWN_OWNER: 'Origem estrutural',
} as const

export function PathfinderActiveEffectDefinitionModal({
  definitionKey,
  locale,
  reference = null,
  zIndex = 290,
  onClose,
}: Props) {
  const [definition, setDefinition] = useState<Definition | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)
    setDefinition(null)

    api<Definition>(
      `/api/game-systems/pathfinder-2e/content/active-effects/${encodeURIComponent(definitionKey)}?locale=${locale}`,
      { signal: controller.signal },
    )
      .then((response) => setDefinition(response))
      .catch((cause) => {
        if (controller.signal.aborted) return
        setError(cause instanceof ApiError ? cause.message : 'Não foi possível carregar a definição PF2e.')
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [definitionKey, locale])

  const visual = definition ? polarity[definition.polarity] : polarity.NEUTRAL
  const Icon = visual.Icon

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
      style={{ zIndex }}
      role="dialog"
      aria-modal="true"
      aria-label={definition?.name ?? 'Definição de efeito Pathfinder 2e'}
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        className="max-h-[82vh] w-full max-w-lg overflow-y-auto rounded-xl border border-[#8c7a60]/60 bg-[#e1d3bd] p-4 text-[#352d24] shadow-2xl"
        onPointerDown={(event) => event.stopPropagation()}
      >
        <header className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#7c6d59]/25 bg-[#f2e8d7]">
              {definition?.iconUrl ? (
                <img src={definition.iconUrl} alt="" className="h-7 w-7 object-contain" />
              ) : definition ? (
                <Icon className="h-5 w-5" />
              ) : (
                <Sparkles className="h-5 w-5" />
              )}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#756653]">
                <BookOpen className="h-3 w-3" />
                Definição canônica PF2e
              </div>
              <h4 className="mt-1 text-base font-bold">{definition?.name ?? 'Carregando…'}</h4>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-[#665846] hover:bg-black/5"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        {loading ? <p className="mt-4 text-sm text-[#6b5d4d]">Carregando definição…</p> : null}
        {error ? (
          <p className="mt-4 rounded-lg border border-rose-700/25 bg-rose-950/10 px-3 py-2 text-sm text-rose-900">
            {error}
          </p>
        ) : null}

        {definition ? (
          <div className="mt-4 space-y-4">
            <div className="flex flex-wrap gap-1.5">
              <span className="rounded-full border border-[#6f6252]/25 bg-[#f2e8d7] px-2 py-0.5 text-[10px] font-bold">
                {kindLabels[definition.kind]}
              </span>
              <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${visual.classes}`}>
                {visual.label}
              </span>
              {definition.group ? (
                <span className="rounded-full border border-[#6f6252]/25 bg-[#f2e8d7] px-2 py-0.5 text-[10px]">
                  {definition.group}
                </span>
              ) : null}
              {definition.conditionValue?.isValued ? (
                <span className="rounded-full border border-[#6d4ac8]/25 bg-[#6d4ac8]/10 px-2 py-0.5 text-[10px] font-semibold text-[#4d2c91]">
                  Condição com valor
                </span>
              ) : null}
            </div>

            <p className="whitespace-pre-wrap rounded-lg border border-[#7c6d59]/20 bg-[#f2e8d7]/70 p-3 text-sm leading-6 text-[#4b4034]">
              {definition.description || 'Sem descrição publicada.'}
            </p>

            {reference ? (
              <section className="rounded-lg border border-[#6d4ac8]/20 bg-[#6d4ac8]/8 p-3">
                <h5 className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#5b3fa2]">
                  Contexto desta referência
                </h5>
                <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] text-[#514438]">
                  {reference.source.label ? (
                    <span className="rounded border border-[#7c6d59]/20 bg-[#f2e8d7]/70 px-2 py-1">
                      {reference.source.label}
                    </span>
                  ) : null}
                  {reference.context.outcome ? (
                    <span className="rounded border border-[#7c6d59]/20 bg-[#f2e8d7]/70 px-2 py-1">
                      {outcomeLabels[reference.context.outcome]}
                    </span>
                  ) : null}
                  {reference.context.valueHint !== null ? (
                    <span className="rounded border border-[#7c6d59]/20 bg-[#f2e8d7]/70 px-2 py-1">
                      Valor {reference.context.valueHint}
                    </span>
                  ) : null}
                  {reference.context.stageHint !== null ? (
                    <span className="rounded border border-[#7c6d59]/20 bg-[#f2e8d7]/70 px-2 py-1">
                      Estágio {reference.context.stageHint}
                    </span>
                  ) : null}
                  {reference.context.origin ? (
                    <span className="rounded border border-[#7c6d59]/20 bg-[#f2e8d7]/70 px-2 py-1">
                      {originKindLabels[reference.context.origin.kind]}
                      {reference.context.origin.name ? ` · ${reference.context.origin.name}` : ''}
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-[10px] leading-4 text-[#756653]">
                  Este contexto descreve a ocorrência no conteúdo. Ele não altera a identidade da definição e não aplica nenhum efeito.
                </p>
              </section>
            ) : null}

            {definition.source.publicationTitle ? (
              <footer className="border-t border-[#7c6d59]/20 pt-3 text-xs text-[#756653]">
                {definition.source.publicationTitle}
              </footer>
            ) : null}
          </div>
        ) : null}
      </section>
    </div>
  )
}
