import type { Pathfinder2eContentDomain } from './models'
import type { Pathfinder2eSourceReference } from './source-references'

export type Pathfinder2eImportStatus =
  | 'PLANNED'
  | 'IMPORTED'
  | 'NORMALIZED'
  | 'REJECTED'
  | 'STALE'
  | 'RETIRED'

export type Pathfinder2eTranslationStatus =
  | 'NOT_STARTED'
  | 'MACHINE_DRAFT'
  | 'HUMAN_DRAFT'
  | 'REVIEWED'
  | 'STALE'
  | 'BLOCKED'
  | 'NOT_REQUIRED'

export type Pathfinder2eSourceLock = {
  systemVersion: string
  sourceCommit: string
  inputChecksum: string
  importerVersion: number
  importedAt: string
}

export type Pathfinder2eSourceIdentity = {
  sourcePack: string
  sourceId: string
  slug?: string
  publicationTitle?: string
  license?: string
  remaster?: boolean
}

export type Pathfinder2eContentImage = {
  /** Public path of an asset versioned inside the QuestHub repository. */
  path: string
}

export type Pathfinder2eOriginalContentRecord<TData = unknown> = {
  contentId: string
  domain: Pathfinder2eContentDomain
  locale: 'en-US'
  source: Pathfinder2eSourceIdentity
  image?: Pathfinder2eContentImage
  sourceHash: string
  translatableHash: string
  sourceReferences?: readonly Pathfinder2eSourceReference[]
  data: TData
}

export type Pathfinder2eContentTranslation = {
  contentId: string
  locale: 'pt-BR'
  sourceTranslatableHash: string
  version: number
  status: Pathfinder2eTranslationStatus
  fields: Record<string, string | string[] | Record<string, unknown>>
}

export type Pathfinder2eImportManifestEntry = {
  roundId: string
  contentId: string
  domain: Pathfinder2eContentDomain
  source: Pathfinder2eSourceIdentity
  status: Pathfinder2eImportStatus
  sourceHash?: string
  normalizationWarnings: readonly string[]
  rejectionReason?: string
}

export type Pathfinder2eDomainCoverage = {
  planned: number
  imported: number
  normalized: number
  translated: number
  reviewed: number
  stale: number
  rejected: number
}

export type Pathfinder2eRoundCoverage = {
  roundId: string
  bestiary: Pathfinder2eDomainCoverage
  spells: Pathfinder2eDomainCoverage
  items: Pathfinder2eDomainCoverage
  ready: boolean
}

export function definePathfinder2eOriginalContentRecords<TData>(
  records: readonly unknown[],
): readonly Pathfinder2eOriginalContentRecord<TData>[] {
  return records as readonly Pathfinder2eOriginalContentRecord<TData>[]
}

export function definePathfinder2eContentTranslations(
  translations: readonly unknown[],
): readonly Pathfinder2eContentTranslation[] {
  return translations as readonly Pathfinder2eContentTranslation[]
}

export function pathfinder2eSourceKey(source: Pathfinder2eSourceIdentity): string {
  return `${source.sourcePack}:${source.sourceId}`
}

export function isPathfinder2eTranslationStale(
  original: Pick<Pathfinder2eOriginalContentRecord, 'translatableHash'>,
  translation: Pick<Pathfinder2eContentTranslation, 'sourceTranslatableHash'>,
): boolean {
  return original.translatableHash !== translation.sourceTranslatableHash
}
