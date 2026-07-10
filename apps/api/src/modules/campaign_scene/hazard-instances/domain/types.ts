export type SceneHazardVisibility = 'HIDDEN' | 'HINTED' | 'REVEALED'
export type SceneHazardState = 'ARMED' | 'TRIGGERED' | 'ACTIVE' | 'DISABLED' | 'EXPIRED'
export type SceneHazardScope = 'POINT' | 'AREA' | 'SCENE' | 'TARGET'
export type SceneHazardTriggerMode = 'MANUAL' | 'ON_TOKEN_ENTER' | 'ALWAYS_ON'
export type SceneHazardExecutionMode = 'INSTANT' | 'ONGOING' | 'ENCOUNTER_PARTICIPANT'

export type SceneHazardInstance = {
  id: string
  sceneId: string
  hazardEntryId: string
  name: string
  scope: SceneHazardScope
  position: { x: number; y: number } | null
  visibility: SceneHazardVisibility
  state: SceneHazardState
  triggerMode: SceneHazardTriggerMode
  executionMode: SceneHazardExecutionMode
  notes: string | null
}

export type PublicSceneHazardInstance = {
  id: string
  sceneId: string
  name: string
  scope: SceneHazardScope
  position: { x: number; y: number } | null
  visibility: 'HINTED' | 'REVEALED'
  state: SceneHazardState
}

export const hiddenHazardName = 'Perigo desconhecido'
export const hiddenSceneHazardName = 'Ambiente perigoso'
