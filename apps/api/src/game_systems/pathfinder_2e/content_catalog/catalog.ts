import type { Pathfinder2eContentEntry } from './content-entry'
import {
  PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_COVERAGE,
  PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ID,
  PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_SOURCE,
} from './deliveries/core-remaster-low-level-content'
import {
  PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_COVERAGE,
  PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ENTRIES,
  PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ID,
  PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_SOURCE,
} from './deliveries/core-remaster-starting-content'
import type { Pathfinder2eContentLocale } from './models'

const DELIVERY_ENTRIES = new Map<string, readonly Pathfinder2eContentEntry[]>([
  [PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ID, PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ENTRIES],
  [PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ID, PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ENTRIES],
])

function originalDisplayFields(entry: Pathfinder2eContentEntry) {
  const data = entry.original.data as { name: string; description: string }
  return {
    name: data.name,
    description: data.description,
  }
}

export function resolvePathfinder2eContentEntry(
  entry: Pathfinder2eContentEntry,
  locale: Pathfinder2eContentLocale,
) {
  const translatedFields = locale === 'pt-BR' ? entry.translation.fields : null
  const originalFields = originalDisplayFields(entry)

  return {
    contentId: entry.original.contentId,
    domain: entry.original.domain,
    locale,
    source: entry.original.source,
    original: entry.original.data,
    translation: locale === 'pt-BR'
      ? {
          status: entry.translation.status,
          version: entry.translation.version,
          fields: entry.translation.fields,
        }
      : null,
    display: {
      name: typeof translatedFields?.name === 'string' ? translatedFields.name : originalFields.name,
      description: typeof translatedFields?.description === 'string'
        ? translatedFields.description
        : originalFields.description,
    },
  }
}

export function listPathfinder2eRoundEntries(
  roundId: string,
  locale: Pathfinder2eContentLocale,
) {
  return (DELIVERY_ENTRIES.get(roundId) ?? []).map((entry) => resolvePathfinder2eContentEntry(entry, locale))
}

export function findPathfinder2eContentEntry(
  contentId: string,
  locale: Pathfinder2eContentLocale,
) {
  for (const entries of DELIVERY_ENTRIES.values()) {
    const entry = entries.find((candidate) => candidate.original.contentId === contentId)
    if (entry) return resolvePathfinder2eContentEntry(entry, locale)
  }

  return null
}

export function getPathfinder2eRoundSummary(roundId: string) {
  if (roundId === PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ID) {
    return {
      id: PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_ID,
      status: 'READY' as const,
      sourceLock: PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_SOURCE,
      coverage: PATHFINDER_2E_CORE_REMASTER_STARTING_CONTENT_COVERAGE,
    }
  }

  if (roundId === PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ID) {
    return {
      id: PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_ID,
      status: 'REVIEWING' as const,
      sourceLock: PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_SOURCE,
      coverage: PATHFINDER_2E_CORE_REMASTER_LOW_LEVEL_CONTENT_COVERAGE,
    }
  }

  return null
}
