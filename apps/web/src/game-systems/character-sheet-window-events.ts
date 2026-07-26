export const campaignCharacterSheetOpenEvent = 'questhub:campaign-character-sheet:open'

export type CampaignCharacterSheetOpenRequest = {
  campaignId: string
  characterId: string
  title?: string
}

export function requestCampaignCharacterSheetOpen(request: CampaignCharacterSheetOpenRequest) {
  window.dispatchEvent(new CustomEvent<CampaignCharacterSheetOpenRequest>(
    campaignCharacterSheetOpenEvent,
    { detail: request },
  ))
}
