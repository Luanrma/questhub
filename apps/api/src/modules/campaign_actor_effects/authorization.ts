import type { CampaignMemberRole } from '@prisma/client'

type ActorEffectAccess = {
  role: CampaignMemberRole
  memberId: string
  controllerMemberId: string | null
}

export function canReadActorEffects(access: ActorEffectAccess) {
  if (access.role === 'MASTER') return true
  return access.controllerMemberId === access.memberId
}

export function canMutateActorEffects(role: CampaignMemberRole) {
  return role === 'MASTER'
}
