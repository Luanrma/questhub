type CampaignDashboardEntry = {
  role: 'MASTER' | 'PLAYER'
  status: 'PENDING' | 'ACTIVE' | 'REJECTED' | 'LEFT'
  actor: {
    id: string
    name: string
  } | null
  campaign: {
    id: string
    title: string
    description: string | null
    inviteCode: string
    joinPolicy: string
    createdAt: Date
    members: Array<{
      userId: string
      actor: {
        id: string
        name: string
      } | null
    }>
  }
}

export function presentCampaignDashboardEntry(
  entry: CampaignDashboardEntry,
  options: {
    isOnline: boolean
    sessionState: 'ACTIVE' | 'PAUSED' | null
  },
) {
  const masterMember = entry.campaign.members[0] ?? null
  const master = masterMember?.actor ?? null

  return {
    id: entry.campaign.id,
    title: entry.campaign.title,
    description: entry.campaign.description,
    inviteCode: entry.role === 'MASTER' ? entry.campaign.inviteCode : null,
    joinPolicy: entry.campaign.joinPolicy,
    createdAt: entry.campaign.createdAt,
    gmName: master?.name ?? 'Mestre',
    gmUserId: masterMember?.userId ?? '',
    myRole: entry.role,
    myStatus: entry.status,
    myActorId: entry.actor?.id ?? null,
    myActorName: entry.actor?.name ?? 'Sem personagem',
    isOnline: options.isOnline,
    sessionState: options.sessionState,
  }
}

export function canOpenCampaignTable(input: {
  role: 'MASTER' | 'PLAYER'
  status: 'PENDING' | 'ACTIVE' | 'REJECTED' | 'LEFT'
  isOnline: boolean
}) {
  if (input.status !== 'ACTIVE') return false
  if (input.role === 'MASTER') return true
  if (input.role === 'PLAYER') return input.isOnline

  return false
}
