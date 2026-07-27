import type { Pathfinder2eContentRoundStatus } from './models'
import type { Pathfinder2eDomainCoverage, Pathfinder2eRoundCoverage } from './records'

export type Pathfinder2eRoundNextAction =
  | 'LOCK_SOURCE'
  | 'INVENTORY_SOURCE'
  | 'IMPORT_AND_NORMALIZE'
  | 'TRANSLATE_PT_BR'
  | 'REVIEW_PT_BR'
  | 'PUBLISH'
  | 'RESOLVE_BLOCKER'
  | 'COMPLETE'

const NEXT_ACTION_BY_STATUS: Record<Pathfinder2eContentRoundStatus, Pathfinder2eRoundNextAction> = {
  PLANNED: 'LOCK_SOURCE',
  SOURCE_LOCKED: 'INVENTORY_SOURCE',
  IMPORTING: 'IMPORT_AND_NORMALIZE',
  TRANSLATING: 'TRANSLATE_PT_BR',
  REVIEWING: 'REVIEW_PT_BR',
  READY: 'PUBLISH',
  PUBLISHED: 'COMPLETE',
  BLOCKED: 'RESOLVE_BLOCKER',
}

export function getPathfinder2eRoundNextAction(
  status: Pathfinder2eContentRoundStatus,
): Pathfinder2eRoundNextAction {
  return NEXT_ACTION_BY_STATUS[status]
}

export function isPathfinder2eDomainCoverageReady(coverage: Pathfinder2eDomainCoverage): boolean {
  if (coverage.planned <= 0) return false
  if (coverage.stale > 0) return false
  if (coverage.normalized + coverage.rejected !== coverage.planned) return false
  return coverage.reviewed === coverage.normalized
}

export function calculatePathfinder2eRoundReadiness(
  coverage: Omit<Pathfinder2eRoundCoverage, 'ready'>,
): Pathfinder2eRoundCoverage {
  return {
    ...coverage,
    ready:
      isPathfinder2eDomainCoverageReady(coverage.bestiary) &&
      isPathfinder2eDomainCoverageReady(coverage.spells) &&
      isPathfinder2eDomainCoverageReady(coverage.items),
  }
}
