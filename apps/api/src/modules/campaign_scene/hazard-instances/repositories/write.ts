import type { GameSystem } from '@prisma/client'
import { prisma } from '../../../../db/prisma'
import type {
  SceneHazardExecutionMode,
  SceneHazardInstance,
  SceneHazardScope,
  SceneHazardState,
  SceneHazardTriggerMode,
  SceneHazardVisibility,
} from '../domain/types'

function toSceneHazardInstance(record: {
  id: string
  sceneId: string
  hazardEntryId: string
  name: string
  scope: string
  positionX: number | null
  positionY: number | null
  visibility: string
  state: string
  triggerMode: string
  executionMode: string
  notes: string | null
}): SceneHazardInstance {
  return {
    id: record.id,
    sceneId: record.sceneId,
    hazardEntryId: record.hazardEntryId,
    name: record.name,
    scope: record.scope as SceneHazardScope,
    position: record.positionX !== null && record.positionY !== null ? { x: record.positionX, y: record.positionY } : null,
    visibility: record.visibility as SceneHazardVisibility,
    state: record.state as SceneHazardState,
    triggerMode: record.triggerMode as SceneHazardTriggerMode,
    executionMode: record.executionMode as SceneHazardExecutionMode,
    notes: record.notes,
  }
}

export async function createSceneHazard(input: {
  sceneId: string
  system: GameSystem
  hazardEntryId: string
  name: string
  scope: SceneHazardScope
  position: { x: number; y: number } | null
  triggerMode: SceneHazardTriggerMode
  executionMode: SceneHazardExecutionMode
  state?: SceneHazardState
}): Promise<SceneHazardInstance> {
  const record = await prisma.campaignSceneHazard.create({
    data: {
      sceneId: input.sceneId,
      system: input.system,
      hazardEntryId: input.hazardEntryId,
      name: input.name,
      scope: input.scope,
      positionX: input.position?.x ?? null,
      positionY: input.position?.y ?? null,
      triggerMode: input.triggerMode,
      executionMode: input.executionMode,
      ...(input.state ? { state: input.state } : {}),
    },
  })

  return toSceneHazardInstance(record)
}

export async function updateSceneHazard(
  hazardId: string,
  patch: {
    scope?: SceneHazardScope
    position?: { x: number; y: number } | null
    visibility?: SceneHazardVisibility
    state?: SceneHazardState
    triggerMode?: SceneHazardTriggerMode
    executionMode?: SceneHazardExecutionMode
    notes?: string | null
  },
): Promise<SceneHazardInstance> {
  const record = await prisma.campaignSceneHazard.update({
    where: { id: hazardId },
    data: {
      ...(patch.scope ? { scope: patch.scope } : {}),
      ...(patch.position !== undefined
        ? { positionX: patch.position?.x ?? null, positionY: patch.position?.y ?? null }
        : {}),
      ...(patch.visibility ? { visibility: patch.visibility } : {}),
      ...(patch.state ? { state: patch.state } : {}),
      ...(patch.triggerMode ? { triggerMode: patch.triggerMode } : {}),
      ...(patch.executionMode ? { executionMode: patch.executionMode } : {}),
      ...(patch.notes !== undefined ? { notes: patch.notes } : {}),
    },
  })

  return toSceneHazardInstance(record)
}

export async function deleteSceneHazard(hazardId: string): Promise<void> {
  await prisma.campaignSceneHazard.delete({ where: { id: hazardId } })
}
