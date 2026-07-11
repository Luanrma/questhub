import { findPathfinder2eCharacterOption, PATHFINDER_2E_ANCESTRIES, PATHFINDER_2E_BACKGROUNDS, PATHFINDER_2E_CLASSES, PATHFINDER_2E_HERITAGES } from './catalog'
import { isCompatibleHeritage } from './compatibility'
import type {
  Pathfinder2eBuildChoices,
  Pathfinder2eCatalogSelection,
  Pathfinder2eCharacterOptionEntry,
  Pathfinder2eCharacterOptionKind,
  Pathfinder2eCharacterSelection,
  Pathfinder2eCharacterSheetV2,
  Pathfinder2eCustomSelection,
  Pathfinder2eMigrationIssue,
} from './models'
import type { Pathfinder2eSheetV1 } from '../character-sheet/models'

const OPTIONS_BY_KIND = {
  class: PATHFINDER_2E_CLASSES,
  ancestry: PATHFINDER_2E_ANCESTRIES,
  heritage: PATHFINDER_2E_HERITAGES,
  background: PATHFINDER_2E_BACKGROUNDS,
} satisfies Record<Pathfinder2eCharacterOptionKind, Pathfinder2eCharacterOptionEntry[]>

const FIELD_KIND = {
  class: 'class',
  ancestry: 'ancestry',
  heritage: 'heritage',
  background: 'background',
} as const

export type Pathfinder2eV1ToV2MigrationResult = {
  sheet: Pathfinder2eCharacterSheetV2<Pathfinder2eSheetV1>
  issues: Pathfinder2eMigrationIssue[]
}

function emptyBuildChoices(): Pathfinder2eBuildChoices {
  return {
    ancestry: {
      boosts: {},
      flaws: {},
      alternateBoostsEnabled: false,
      additionalLanguages: [],
      ruleSelections: {},
    },
    heritage: {
      ruleSelections: {},
    },
    background: {
      boosts: {},
      ruleSelections: {},
    },
    class: {
      keyAbility: null,
      trainedSkills: [],
      ruleSelections: {},
    },
  }
}

function normalizeForMatch(value: string) {
  return value.trim().replace(/\s+/g, ' ').toLocaleLowerCase()
}

function normalizeSlug(value: string) {
  return normalizeForMatch(value)
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function toCatalogSelection(entry: Pathfinder2eCharacterOptionEntry): Pathfinder2eCatalogSelection {
  return {
    source: 'catalog',
    id: entry.id,
    sourcePack: entry.source.sourcePack,
    sourceId: entry.source.sourceId,
    slug: entry.slug,
    name: entry.name,
  }
}

function toCustomSelection(value: string): Pathfinder2eCustomSelection {
  return {
    source: 'custom',
    name: value,
  }
}

function findUniqueMatch(kind: Pathfinder2eCharacterOptionKind, value: string) {
  const normalizedName = normalizeForMatch(value)
  const normalizedSlug = normalizeSlug(value)
  const entries = OPTIONS_BY_KIND[kind]
  const nameMatches = entries.filter((entry) => normalizeForMatch(entry.name) === normalizedName)
  const slugMatches = entries.filter((entry) => normalizeSlug(entry.slug) === normalizedSlug)
  const matches = [...new Map([...nameMatches, ...slugMatches].map((entry) => [entry.id, entry])).values()]

  if (matches.length === 1) return { status: 'matched' as const, entry: matches[0] }
  if (matches.length > 1) return { status: 'ambiguous' as const }
  return { status: 'not_found' as const }
}

function migrateSelection(
  field: keyof typeof FIELD_KIND,
  value: string,
  issues: Pathfinder2eMigrationIssue[],
): Pathfinder2eCharacterSelection | null {
  const trimmed = value.trim()
  if (!trimmed) return null

  const kind = FIELD_KIND[field]
  const match = findUniqueMatch(kind, trimmed)

  if (match.status === 'matched') return toCatalogSelection(match.entry)

  issues.push({
    field,
    value,
    reason: match.status,
  })
  return toCustomSelection(value)
}

function ensureHeritageCompatibility(
  ancestrySelection: Pathfinder2eCharacterSelection | null,
  heritageSelection: Pathfinder2eCharacterSelection | null,
  originalHeritageValue: string,
  issues: Pathfinder2eMigrationIssue[],
) {
  if (!ancestrySelection || ancestrySelection.source !== 'catalog') return heritageSelection
  if (!heritageSelection || heritageSelection.source !== 'catalog') return heritageSelection

  const ancestry = findPathfinder2eCharacterOption('ancestry', ancestrySelection.id)
  const heritage = findPathfinder2eCharacterOption('heritage', heritageSelection.id)

  if (!ancestry || !heritage || heritage.kind !== 'heritage' || ancestry.kind !== 'ancestry') return heritageSelection
  if (isCompatibleHeritage(heritage, ancestry)) return heritageSelection

  issues.push({
    field: 'heritage',
    value: originalHeritageValue,
    reason: 'incompatible',
  })

  return originalHeritageValue.trim() ? toCustomSelection(originalHeritageValue) : null
}

export function migratePathfinder2eSheetV1ToV2(sheet: Pathfinder2eSheetV1): Pathfinder2eV1ToV2MigrationResult {
  const issues: Pathfinder2eMigrationIssue[] = []
  const ancestry = migrateSelection('ancestry', sheet.identity.ancestry, issues)
  const heritage = ensureHeritageCompatibility(
    ancestry,
    migrateSelection('heritage', sheet.identity.heritage, issues),
    sheet.identity.heritage,
    issues,
  )

  return {
    sheet: {
      ...sheet,
      identity: {
        level: sheet.identity.level,
        ancestry,
        heritage,
        background: migrateSelection('background', sheet.identity.background, issues),
        class: migrateSelection('class', sheet.identity.className, issues),
      },
      buildChoices: emptyBuildChoices(),
    },
    issues,
  }
}
