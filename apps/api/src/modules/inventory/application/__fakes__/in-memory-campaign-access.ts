import type { CampaignAccessPort, CampaignCharacterSummary } from '../ports/campaign-access'

export function createInMemoryCampaignAccess() {
  const characters: CampaignCharacterSummary[] = []
  const systems = new Map<string, 'DND_5E' | 'PATHFINDER_2E'>()

  function seedCharacter(character: CampaignCharacterSummary) {
    characters.push(character)
    if (!systems.has(character.campaignId)) systems.set(character.campaignId, 'PATHFINDER_2E')
    return character
  }

  function seedCampaignSystem(campaignId: string, system: 'DND_5E' | 'PATHFINDER_2E') {
    systems.set(campaignId, system)
  }

  const port: CampaignAccessPort = {
    async isActiveMaster(campaignId, userId) {
      return characters.some(
        (c) => c.campaignId === campaignId && c.userId === userId && c.role === 'MASTER' && c.status === 'ACTIVE',
      )
    },
    async loadCampaignCharacterByCharacterId(campaignId, characterId) {
      return characters.find((c) => c.campaignId === campaignId && c.characterId === characterId) ?? null
    },
    async loadCampaignCharacterById(campaignCharacterId) {
      return characters.find((c) => c.id === campaignCharacterId) ?? null
    },
    async loadCampaignSystem(campaignId) {
      return systems.get(campaignId) ?? null
    },
  }

  return { port, seedCharacter, seedCampaignSystem }
}
