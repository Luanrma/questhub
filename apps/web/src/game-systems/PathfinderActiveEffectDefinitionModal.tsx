import { useEffect, useMemo, useState } from 'react'
import { api, ApiError } from '../lib/api'
import {
  ActiveEffectDefinitionModal,
  type ActiveEffectDefinitionTag,
} from '../vtt/actor-effects/ActiveEffectDefinitionModal'
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
  descriptionBlocks?: readonly string[]
  iconUrl: string | null
  polarity: 'BENEFICIAL' | 'HARMFUL' | 'NEUTRAL'
  group: string | null
  conditionValue: {
    isValued: boolean
    baseValue: number | null
  } | null
  localization: {
    requestedLocale: GameSystemContentLocale
    nameLocale: GameSystemContentLocale
    descriptionLocale: GameSystemContentLocale
  }
}

type Props = {
  definitionKey: string
  locale: GameSystemContentLocale
  reference?: PathfinderActiveEffectReference | null
  zIndex?: number
  onClose: () => void
}

const polarityLabels = {
  BENEFICIAL: 'Benéfico',
  HARMFUL: 'Prejudicial',
  NEUTRAL: 'Neutro',
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

function descriptionBlocks(definition: Definition | null) {
  if (!definition) return []
  if (definition.descriptionBlocks?.length) return definition.descriptionBlocks
  return definition.description
    .split(/\n{2,}|\n/)
    .map((block) => block.trim())
    .filter(Boolean)
}

export function PathfinderActiveEffectDefinitionModal({
  definitionKey,
  locale,
  reference = null,
  zIndex = 290,
  onClose,
}: Props) {
  const [currentLocale, setCurrentLocale] = useState<GameSystemContentLocale>(locale)
  const [definition, setDefinition] = useState<Definition | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => setCurrentLocale(locale), [locale, definitionKey])

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    api<Definition>(
      `/api/game-systems/pathfinder-2e/content/active-effects/${encodeURIComponent(definitionKey)}?locale=${currentLocale}`,
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
  }, [definitionKey, currentLocale])

  const tags = useMemo<ActiveEffectDefinitionTag[]>(() => {
    if (!definition) return []
    const result: ActiveEffectDefinitionTag[] = [
      { label: kindLabels[definition.kind] },
      {
        label: polarityLabels[definition.polarity],
        tone: definition.polarity === 'HARMFUL'
          ? 'harmful'
          : definition.polarity === 'BENEFICIAL'
            ? 'beneficial'
            : 'neutral',
      },
    ]
    if (definition.group) result.push({ label: definition.group })
    if (definition.conditionValue?.isValued) result.push({ label: 'Condição com valor', tone: 'accent' })
    return result
  }, [definition])

  const context = reference ? (
    <section className="rounded-lg border border-[#6d4ac8]/20 bg-[#6d4ac8]/8 p-3">
      <h5 className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#5b3fa2]">
        Contexto desta referência
      </h5>
      <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] text-[#514438]">
        {reference.source.label ? (
          <span className="rounded border border-[#7c6d59]/20 bg-[#f2e8d7]/70 px-2 py-1">{reference.source.label}</span>
        ) : null}
        {reference.context.outcome ? (
          <span className="rounded border border-[#7c6d59]/20 bg-[#f2e8d7]/70 px-2 py-1">
            {outcomeLabels[reference.context.outcome]}
          </span>
        ) : null}
        {reference.context.valueHint !== null ? (
          <span className="rounded border border-[#7c6d59]/20 bg-[#f2e8d7]/70 px-2 py-1">Valor {reference.context.valueHint}</span>
        ) : null}
        {reference.context.stageHint !== null ? (
          <span className="rounded border border-[#7c6d59]/20 bg-[#f2e8d7]/70 px-2 py-1">Estágio {reference.context.stageHint}</span>
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
  ) : null

  return (
    <ActiveEffectDefinitionModal
      title={definition?.name ?? 'Definição de efeito'}
      headerLabel="Definição canônica PF2e"
      descriptionBlocks={descriptionBlocks(definition)}
      iconUrl={definition?.iconUrl}
      polarity={definition?.polarity}
      tags={tags}
      sourceLabel={definition?.source.publicationTitle ?? null}
      locale={currentLocale}
      localization={definition?.localization ?? null}
      localeEnabled
      loading={loading}
      error={error}
      context={context}
      zIndex={zIndex}
      onLocaleChange={setCurrentLocale}
      onClose={onClose}
    />
  )
}
