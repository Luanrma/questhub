import { assetService } from '../assets/service'
import { presentCampaignScene } from './presenter'

type PresentCampaignSceneInput = Parameters<typeof presentCampaignScene>[0]

export async function presentCampaignSceneWithSignedBackground(scene: PresentCampaignSceneInput) {
  const presentedScene = presentCampaignScene(scene)
  if (!scene.backgroundCacheKey) return presentedScene

  try {
    return {
      ...presentedScene,
      backgroundUrl: await assetService.getSignedUrl(scene.backgroundCacheKey),
    }
  } catch {
    return presentedScene
  }
}
