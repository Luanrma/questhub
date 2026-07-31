import { resolveTokenActionToolBinding } from '../../automation/area-effect-tool-binding'
import type { GameSystemToolBindingSnapshot } from '../../automation/contracts'
import {
  PATHFINDER_2E_CHARACTER_SPELL_CATALOG_NAMESPACE,
  resolvePathfinder2eSpellAreaEffectConfiguration,
} from './domain'

export function resolvePathfinder2eSpellAreaEffectStatus(input: {
  entryId: string
  contentId: string
  bindings: readonly GameSystemToolBindingSnapshot[]
}) {
  const ownSource = {
    kind: 'CHARACTER_SHEET_ENTRY',
    namespace: 'questhub:character-sheet-entry',
    id: input.entryId,
  } as const
  const inheritedSource = {
    kind: 'CATALOG_CONTENT',
    namespace: PATHFINDER_2E_CHARACTER_SPELL_CATALOG_NAMESPACE,
    id: input.contentId,
  } as const
  const resolved = resolveTokenActionToolBinding({
    bindings: input.bindings,
    defaultSource: inheritedSource,
    overrideSource: ownSource,
  })
  const effectiveSource = resolved.activation
    ? resolved.presentation?.effective?.source
    : undefined

  return resolvePathfinder2eSpellAreaEffectConfiguration({
    hasOwnConfiguration: effectiveSource?.kind === ownSource.kind
      && effectiveSource.namespace === ownSource.namespace
      && effectiveSource.id === ownSource.id,
    hasInheritedConfiguration: effectiveSource?.kind === inheritedSource.kind
      && effectiveSource.namespace === inheritedSource.namespace
      && effectiveSource.id === inheritedSource.id,
  })
}
