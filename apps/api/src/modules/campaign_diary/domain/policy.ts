import type { CampaignDiaryAccess } from './types'

export function canAccessCampaignDiary(input: CampaignDiaryAccess | null) {
  return input?.role === 'MASTER' && input.status === 'ACTIVE'
}
