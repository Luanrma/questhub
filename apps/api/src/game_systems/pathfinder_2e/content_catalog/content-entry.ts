import type {
  Pathfinder2eContentTranslation,
  Pathfinder2eOriginalContentRecord,
} from './records'

export type Pathfinder2eContentEntry<TData = unknown> = {
  original: Pathfinder2eOriginalContentRecord<TData>
  translation: Pathfinder2eContentTranslation
}

export function pairPathfinder2eContent<TData>(
  originals: readonly Pathfinder2eOriginalContentRecord<TData>[],
  translations: readonly Pathfinder2eContentTranslation[],
): Pathfinder2eContentEntry<TData>[] {
  const translationsById = new Map(translations.map((translation) => [translation.contentId, translation]))

  return originals.map((original) => {
    const translation = translationsById.get(original.contentId)
    if (!translation) throw new Error(`Missing pt-BR translation for ${original.contentId}`)

    return { original, translation }
  })
}

export function selectPathfinder2eContentEntries<TData>(
  entries: readonly Pathfinder2eContentEntry<TData>[],
  contentIds: readonly string[],
): Pathfinder2eContentEntry<TData>[] {
  const entriesById = new Map(entries.map((entry) => [entry.original.contentId, entry]))

  return contentIds.map((contentId) => {
    const entry = entriesById.get(contentId)
    if (!entry) throw new Error(`Missing Pathfinder 2e content entry ${contentId}`)
    return entry
  })
}
