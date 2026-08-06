import type { CampaignMemberRole } from '@prisma/client'

type ActorInventoryAccess = {
  role: CampaignMemberRole
  memberId: string
  controllerMemberId: string | null
  hasLinkedToken: boolean
}

export function canReadActorInventory(access: ActorInventoryAccess) {
  if (access.role === 'MASTER') return true
  return access.controllerMemberId === access.memberId
}

export function canMutateActorInventory(role: CampaignMemberRole) {
  return role === 'MASTER'
}
