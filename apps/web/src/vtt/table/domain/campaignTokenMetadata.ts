import type { CampaignToken } from './types'

export function mergeCampaignTokenMetadata(
  current: CampaignToken,
  metadata: CampaignToken,
): CampaignToken {
  return {
    ...metadata,
    placement: current.placement,
  }
}
