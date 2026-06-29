type CampaignDashboardEntry = {
  role: 'MASTER' | 'PLAYER' | 'NPC'
  status: 'PENDING' | 'ACTIVE' | 'REJECTED' | 'LEFT' | 'DEAD'
  character: {
    id: string
    name: string
  }
  campaign: {
    id: string
    title: string
    description: string | null
    inviteCode: string
    system: string
    joinPolicy: string
    createdAt: Date
    characters: Array<{
      character: {
        id: string
        userId: string
        name: string
      }
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
  const master = entry.campaign.characters[0]?.character ?? null

  return {
    id: entry.campaign.id,
    title: entry.campaign.title,
    description: entry.campaign.description,
    inviteCode: entry.role === 'MASTER' ? entry.campaign.inviteCode : null,
    system: entry.campaign.system,
    joinPolicy: entry.campaign.joinPolicy,
    createdAt: entry.campaign.createdAt,
    gmName: master?.name ?? 'Mestre',
    gmUserId: master?.userId ?? '',
    myRole: entry.role,
    myStatus: entry.status,
    myCharacterId: entry.character.id,
    myCharacterName: entry.character.name,
    isOnline: options.isOnline,
    sessionState: options.sessionState,
  }
}

export function canOpenCampaignTable(input: {
  role: 'MASTER' | 'PLAYER' | 'NPC'
  status: 'PENDING' | 'ACTIVE' | 'REJECTED' | 'LEFT' | 'DEAD'
  isOnline: boolean
}) {
  if (input.status !== 'ACTIVE') return false
  if (input.role === 'MASTER') return true
  if (input.role === 'PLAYER') return input.isOnline

  return false
}
