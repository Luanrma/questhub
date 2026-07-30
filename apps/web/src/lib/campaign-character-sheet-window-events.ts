export const campaignCharacterSheetOpenEvent = 'questhub:campaign-character-sheet:open'

export type CampaignCharacterSheetOpenRequest = {
  campaignId: string
  sheetId: string
  title?: string
  presentation?: 'FULL' | 'SIMPLIFIED'
}

export function requestCampaignCharacterSheetOpen(request: CampaignCharacterSheetOpenRequest) {
  window.dispatchEvent(new CustomEvent<CampaignCharacterSheetOpenRequest>(
    campaignCharacterSheetOpenEvent,
    { detail: request },
  ))
}
