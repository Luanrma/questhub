import { findBestiaryEntry } from '../../../game_systems/bestiary/registry'
import { presentSceneHazardsForRole } from '../domain/presenter'
import type {
  SceneHazardExecutionMode,
  SceneHazardScope,
  SceneHazardState,
  SceneHazardTriggerMode,
  SceneHazardVisibility,
} from '../domain/types'
import {
  findArmedTokenEnterHazardsInScene,
  findSceneHazardWithCampaign,
  findSceneHazardsByIds,
  findSceneHazardsByScene,
  findSceneWithCampaignSystem,
} from '../repositories/read'
import { createSceneHazard, deleteSceneHazard, updateSceneHazard } from '../repositories/write'

export async function placeSceneHazard(input: {
  campaignId: string
  sceneId: string
  hazardEntryId: string
  scope: SceneHazardScope
  position: { x: number; y: number } | null
  triggerMode: SceneHazardTriggerMode
  executionMode: SceneHazardExecutionMode
}) {
  const scene = await findSceneWithCampaignSystem(input.sceneId, input.campaignId)
  if (!scene) return null

  const entry = findBestiaryEntry(scene.system, input.hazardEntryId)
  if (!entry || entry.category !== 'hazard') return null

  return createSceneHazard({
    sceneId: input.sceneId,
    system: scene.system,
    hazardEntryId: input.hazardEntryId,
    name: entry.name,
    scope: input.scope,
    position: input.position,
    triggerMode: input.triggerMode,
    executionMode: input.executionMode,
    state: input.triggerMode === 'ALWAYS_ON' ? 'ACTIVE' : undefined,
  })
}

export async function updateSceneHazardInstance(input: {
  campaignId: string
  hazardId: string
  scope?: SceneHazardScope
  position?: { x: number; y: number } | null
  visibility?: SceneHazardVisibility
  state?: SceneHazardState
  triggerMode?: SceneHazardTriggerMode
  executionMode?: SceneHazardExecutionMode
  notes?: string | null
}) {
  const existing = await findSceneHazardWithCampaign(input.hazardId)
  if (!existing || existing.campaignId !== input.campaignId) return null

  const updated = await updateSceneHazard(input.hazardId, {
    scope: input.scope,
    position: input.position,
    visibility: input.visibility,
    state: input.state,
    triggerMode: input.triggerMode,
    executionMode: input.executionMode,
    notes: input.notes,
  })

  return { instance: updated, sceneId: existing.sceneId }
}

export async function removeSceneHazardInstance(input: { campaignId: string; hazardId: string }) {
  const existing = await findSceneHazardWithCampaign(input.hazardId)
  if (!existing || existing.campaignId !== input.campaignId) return null

  await deleteSceneHazard(input.hazardId)
  return { sceneId: existing.sceneId }
}

export async function listSceneHazardsForRole(sceneId: string, role: 'MASTER' | 'PLAYER' | 'NPC' | undefined) {
  const instances = await findSceneHazardsByScene(sceneId)
  return presentSceneHazardsForRole(instances, role)
}

export async function findSceneHazardsForEncounter(sceneId: string, hazardIds: string[]) {
  return findSceneHazardsByIds(sceneId, hazardIds)
}

export async function findArmedTokenEnterHazards(sceneId: string) {
  return findArmedTokenEnterHazardsInScene(sceneId)
}
