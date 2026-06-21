export type CharacterForPresentation = {
  id: string
  name: string
  avatarUrl: string | null
  bio: string | null
  system: unknown
  sheet: unknown
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
    system: character.system,
    createdAt: character.createdAt,
    ...(character.updatedAt ? { updatedAt: character.updatedAt } : {}),
    campaigns: character.campaigns,
    available: character.campaigns.length === 0,
    hasSheet: character.sheet !== null,
  }
}
