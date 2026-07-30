export type CampaignMemberRole = 'MASTER' | 'PLAYER'
export type CampaignMemberStatus = 'PENDING' | 'ACTIVE' | 'REJECTED' | 'LEFT'

export function canOpenCampaignTable(input: {
  role: CampaignMemberRole
  status?: CampaignMemberStatus
  isOnline: boolean
}) {
  if (input.status !== 'ACTIVE') return false
  if (input.role === 'MASTER') return true
  return input.isOnline
}
