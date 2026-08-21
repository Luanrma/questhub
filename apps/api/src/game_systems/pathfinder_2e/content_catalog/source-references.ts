import { PATHFINDER_2E_BESTIARY_SOURCE_REFERENCE_INDEX } from './source_reference_index/generated/bestiary'
import { PATHFINDER_2E_ITEM_SOURCE_REFERENCE_INDEX } from './source_reference_index/generated/items'
import { PATHFINDER_2E_SPELL_SOURCE_REFERENCE_INDEX } from './source_reference_index/generated/spells'

export type Pathfinder2eSourceReferenceSyntax =
  | 'INLINE_UUID'
  | 'UUID_VALUE'

export type Pathfinder2eSemanticTargetType = 'condition' | 'effect' | 'affliction'

export type Pathfinder2eSourceReferenceTarget = {
  uuid: string
  package?: string
  sourcePack?: string
  documentType?: string
  compendiumKey?: string
  sourceId?: string
  slug?: string
  type?: Pathfinder2eSemanticTargetType
}

export type Pathfinder2eSourceReference = {
  syntax: Pathfinder2eSourceReferenceSyntax
  sourcePath: string
  sourceIndex: number
  uuid: string
  label: string | null
  ownerSourceId: string | null
  target: Pathfinder2eSourceReferenceTarget
}

/**
 * Compact generated representation used only by the PF2e semantic sidecar.
 * Raw UUID preserves package/pack/document/key; those parts are decoded at read time.
 * A null target type means the source contained an explicit PF2e reference whose target
 * could not be resolved exactly; the reference is preserved without semantic inference.
 */
export type Pathfinder2eSourceReferenceTuple = readonly [
  syntax: 0 | 1,
  sourcePath: string,
  sourceIndex: number,
  uuid: string,
  label: string | null,
  ownerSourceId: string | null,
  targetSourceId: string | null,
  targetSlug: string | null,
  targetType: Pathfinder2eSemanticTargetType | null,
]

const EMPTY_REFERENCES: readonly Pathfinder2eSourceReferenceTuple[] = []

function parseTarget(uuid: string): Pathfinder2eSourceReferenceTarget {
  const target: Pathfinder2eSourceReferenceTarget = { uuid }
  const match = uuid.match(/^Compendium\.([^.]+)\.([^.]+)\.([^.]+)\.(.+)$/)
  if (!match) return target

  target.package = match[1]
  target.sourcePack = match[2]
  target.documentType = match[3]
  target.compendiumKey = match[4]
  return target
}

function tuplesFor(contentId: string): readonly Pathfinder2eSourceReferenceTuple[] {
  return PATHFINDER_2E_BESTIARY_SOURCE_REFERENCE_INDEX[contentId]
    ?? PATHFINDER_2E_SPELL_SOURCE_REFERENCE_INDEX[contentId]
    ?? PATHFINDER_2E_ITEM_SOURCE_REFERENCE_INDEX[contentId]
    ?? EMPTY_REFERENCES
}

export function getPathfinder2eSourceReferences(
  contentId: string,
): readonly Pathfinder2eSourceReference[] {
  return tuplesFor(contentId).map((tuple) => {
    const [
      syntax,
      sourcePath,
      sourceIndex,
      uuid,
      label,
      ownerSourceId,
      targetSourceId,
      targetSlug,
      targetType,
    ] = tuple

    return {
      syntax: syntax === 0 ? 'INLINE_UUID' : 'UUID_VALUE',
      sourcePath,
      sourceIndex,
      uuid,
      label,
      ownerSourceId,
      target: {
        ...parseTarget(uuid),
        ...(targetSourceId ? { sourceId: targetSourceId } : {}),
        ...(targetSlug ? { slug: targetSlug } : {}),
        ...(targetType ? { type: targetType } : {}),
      },
    }
  })
}
