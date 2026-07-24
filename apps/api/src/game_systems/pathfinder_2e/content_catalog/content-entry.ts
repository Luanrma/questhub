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
