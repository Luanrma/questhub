import {
  getPathfinder2eActiveEffectDefinition,
  listPathfinder2eActiveEffectDefinitions,
  type Pathfinder2eActiveEffectDefinition,
} from './active-effect-definitions'
import { presentPathfinder2eActiveEffectDescription } from './active-effect-description'
import { resolvePathfinder2eActiveEffectDisplay } from './active-effect-localization'
import type { Pathfinder2eContentLocale } from './models'

export type Pathfinder2eActiveEffectDefinitionKind = Pathfinder2eActiveEffectDefinition['kind']

export type Pathfinder2eActiveEffectDefinitionView = {
  definitionKey: string
  kind: Pathfinder2eActiveEffectDefinitionKind
  source: Pathfinder2eActiveEffectDefinition['source']
  name: string
  description: string
  descriptionBlocks: readonly string[]
  iconUrl: string | null
  usesIconFallback: boolean
  polarity: Pathfinder2eActiveEffectDefinition['polarity']
  group: string | null
  conditionValue: Pathfinder2eActiveEffectDefinition['conditionValue']
  schemaVersion: 1
  localization: {
    requestedLocale: Pathfinder2eContentLocale
    nameLocale: Pathfinder2eContentLocale
    descriptionLocale: Pathfinder2eContentLocale
  }
}

export type Pathfinder2eActiveEffectDefinitionListOptions = {
  locale: Pathfinder2eContentLocale
  kind?: Pathfinder2eActiveEffectDefinitionKind
  polarity?: Pathfinder2eActiveEffectDefinition['polarity']
  editorialStatus?: 'all' | 'review' | 'ready'
  query?: string
  offset?: number
  limit?: number
}

const DEFAULT_LIMIT = 50
const MAX_LIMIT = 100

function normalizedSearchText(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase()
}

function toView(
  definition: Pathfinder2eActiveEffectDefinition,
  locale: Pathfinder2eContentLocale,
): Pathfinder2eActiveEffectDefinitionView {
  const display = resolvePathfinder2eActiveEffectDisplay(definition, locale)
  const presentedDescription = presentPathfinder2eActiveEffectDescription(display.description, locale)
  return {
    definitionKey: definition.definitionKey,
    kind: definition.kind,
    source: definition.source,
    name: display.name,
    description: presentedDescription.description,
    descriptionBlocks: presentedDescription.descriptionBlocks,
    iconUrl: definition.iconUrl,
    usesIconFallback: definition.iconUrl === null,
    polarity: definition.polarity,
    group: definition.group,
    conditionValue: definition.conditionValue,
    schemaVersion: definition.schemaVersion,
    localization: display.localization,
  }
}

function matchesQuery(
  definition: Pathfinder2eActiveEffectDefinition,
  view: Pathfinder2eActiveEffectDefinitionView,
  query: string,
): boolean {
  const normalizedQuery = normalizedSearchText(query)
  if (!normalizedQuery) return true

  return [
    view.name,
    definition.name,
    definition.definitionKey,
    definition.source.slug ?? '',
  ].some((candidate) => normalizedSearchText(candidate).includes(normalizedQuery))
}

function isTranslationReady(
  view: Pathfinder2eActiveEffectDefinitionView,
  locale: Pathfinder2eContentLocale,
) {
  return view.localization.nameLocale === locale
    && view.localization.descriptionLocale === locale
}

function matchesEditorialStatus(
  view: Pathfinder2eActiveEffectDefinitionView,
  locale: Pathfinder2eContentLocale,
  editorialStatus: Pathfinder2eActiveEffectDefinitionListOptions['editorialStatus'] = 'all',
) {
  if (editorialStatus === 'all') return true
  const ready = isTranslationReady(view, locale)
  return editorialStatus === 'ready' ? ready : !ready
}

export function getPathfinder2eActiveEffectDefinitionView(
  definitionKey: string,
  locale: Pathfinder2eContentLocale,
): Pathfinder2eActiveEffectDefinitionView | null {
  const definition = getPathfinder2eActiveEffectDefinition(definitionKey)
  return definition ? toView(definition, locale) : null
}

export function listPathfinder2eActiveEffectDefinitionViews(
  options: Pathfinder2eActiveEffectDefinitionListOptions,
) {
  const offset = Math.max(0, Math.trunc(options.offset ?? 0))
  const requestedLimit = Math.trunc(options.limit ?? DEFAULT_LIMIT)
  const limit = Math.min(MAX_LIMIT, Math.max(1, requestedLimit))

  const matching = listPathfinder2eActiveEffectDefinitions()
    .filter((definition) => !options.kind || definition.kind === options.kind)
    .filter((definition) => !options.polarity || definition.polarity === options.polarity)
    .map((definition) => ({ definition, view: toView(definition, options.locale) }))
    .filter(({ definition, view }) => !options.query || matchesQuery(definition, view, options.query))
    .filter(({ view }) => matchesEditorialStatus(
      view,
      options.locale,
      options.editorialStatus,
    ))

  const total = matching.length
  const items = matching
    .slice(offset, offset + limit)
    .map(({ view }) => view)

  return {
    items,
    page: {
      offset,
      limit,
      total,
      hasMore: offset + items.length < total,
    },
  }
}