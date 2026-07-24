import type { Pathfinder2eContentLocale } from './models'
import {
  PATHFINDER_2E_ROUND_01_COVERAGE,
  PATHFINDER_2E_ROUND_01_ENTRIES,
  PATHFINDER_2E_ROUND_01_ID,
  PATHFINDER_2E_ROUND_01_SOURCE_LOCK,
  type Pathfinder2eRoundContentEntry,
} from './round-01'

const ROUND_ENTRIES = new Map<string, readonly Pathfinder2eRoundContentEntry[]>([
  [PATHFINDER_2E_ROUND_01_ID, PATHFINDER_2E_ROUND_01_ENTRIES],
])

function originalDisplayFields(entry: Pathfinder2eRoundContentEntry) {
  const data = entry.original.data
  return {
    name: data.name,
    description: data.description,
  }
}

export function resolvePathfinder2eContentEntry(
  entry: Pathfinder2eRoundContentEntry,
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
  return (ROUND_ENTRIES.get(roundId) ?? []).map((entry) => resolvePathfinder2eContentEntry(entry, locale))
}

export function findPathfinder2eContentEntry(
  contentId: string,
  locale: Pathfinder2eContentLocale,
) {
  for (const entries of ROUND_ENTRIES.values()) {
    const entry = entries.find((candidate) => candidate.original.contentId === contentId)
    if (entry) return resolvePathfinder2eContentEntry(entry, locale)
  }

  return null
}

export function getPathfinder2eRoundSummary(roundId: string) {
  if (roundId !== PATHFINDER_2E_ROUND_01_ID) return null

  return {
    id: PATHFINDER_2E_ROUND_01_ID,
    status: 'REVIEWING' as const,
    sourceLock: PATHFINDER_2E_ROUND_01_SOURCE_LOCK,
    coverage: PATHFINDER_2E_ROUND_01_COVERAGE,
  }
}
