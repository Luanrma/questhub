import { hiddenHazardName, hiddenSceneHazardName, type PublicSceneHazardInstance, type SceneHazardInstance } from './types'

export function presentSceneHazardForRole(
  instance: SceneHazardInstance,
  role: 'MASTER' | 'PLAYER' | 'NPC' | undefined,
): SceneHazardInstance | PublicSceneHazardInstance | null {
  if (role === 'MASTER') return instance
  if (instance.visibility === 'HIDDEN') return null

  const genericName = instance.scope === 'SCENE' ? hiddenSceneHazardName : hiddenHazardName

  return {
    id: instance.id,
    sceneId: instance.sceneId,
    name: instance.visibility === 'HINTED' ? genericName : instance.name,
    scope: instance.scope,
    position: instance.position,
    visibility: instance.visibility,
    state: instance.state,
  }
}

export function presentSceneHazardsForRole(
  instances: SceneHazardInstance[],
  role: 'MASTER' | 'PLAYER' | 'NPC' | undefined,
): Array<SceneHazardInstance | PublicSceneHazardInstance> {
  return instances
    .map((instance) => presentSceneHazardForRole(instance, role))
    .filter((instance): instance is SceneHazardInstance | PublicSceneHazardInstance => instance !== null)
}
