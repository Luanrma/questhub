import { getCharacterSheetBio } from '../character_sheet'

export type CharacterForPresentation = {
  id: string
  name: string
  avatarUrl: string | null
  system: unknown
  sheet: unknown
  createdAt: Date
  updatedAt?: Date
  campaigns: unknown[]
}

export function presentCharacter(character: CharacterForPresentation) {
  const bio = getCharacterSheetBio(character.sheet)

  return {
    id: character.id,
    name: character.name,
    avatarUrl: character.avatarUrl,
    bio,
    system: character.system,
    sheet: character.sheet,
    createdAt: character.createdAt,
    ...(character.updatedAt ? { updatedAt: character.updatedAt } : {}),
    campaigns: character.campaigns,
    available: character.campaigns.length === 0,
    hasSheet: character.sheet !== null,
  }
}
