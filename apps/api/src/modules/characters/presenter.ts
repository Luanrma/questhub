export type CharacterForPresentation = {
  id: string
  name: string
  avatarUrl: string | null
  bio: string | null
  gameSystem: 'PATHFINDER_2E'
  createdAt: Date
  updatedAt?: Date
  campaigns: unknown[]
}

export function presentCharacter(character: CharacterForPresentation) {
  return {
    id: character.id,
    name: character.name,
    avatarUrl: character.avatarUrl,
    bio: character.bio,
    gameSystem: character.gameSystem,
    createdAt: character.createdAt,
    ...(character.updatedAt ? { updatedAt: character.updatedAt } : {}),
    campaigns: character.campaigns,
    available: character.campaigns.length === 0,
  }
}
