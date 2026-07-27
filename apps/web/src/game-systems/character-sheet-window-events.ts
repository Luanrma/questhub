export const campaignMemberSheetOpenEvent = 'questhub:campaign-actor-sheet:open'

export type CampaignCharacterSheetOpenRequest = {
  campaignId: string
  sheetId: string
  title?: string
}

export function requestCampaignCharacterSheetOpen(request: CampaignCharacterSheetOpenRequest) {
  window.dispatchEvent(new CustomEvent<CampaignCharacterSheetOpenRequest>(
    campaignMemberSheetOpenEvent,
    { detail: request },
  ))
}
