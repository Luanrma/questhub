export const campaignTokenLibraryChangedEvent = 'questhub:campaign-token-library-changed'
export const campaignTokenCapabilitiesChangedEvent = 'questhub:campaign-token-capabilities-changed'
export const campaignTokenCapabilitiesRequestedEvent = 'questhub:campaign-token-capabilities-requested'
export const campaignTokenActionRequestedEvent = 'questhub:campaign-token-action-requested'
export const campaignTokenActionCompletedEvent = 'questhub:campaign-token-action-completed'

export type CampaignTokenLibraryChanged = {
  campaignId: string
}

export type CampaignTokenCapabilitiesChanged = {
  campaignId: string
  tokens: ReadonlyArray<{
    tokenId: string
    actions: readonly ['duplicate']
  }>
}

export type CampaignTokenActionRequest = {
  campaignId: string
  tokenId: string
  action: 'duplicate'
}

export type CampaignTokenActionResult = CampaignTokenActionRequest & {
  ok: boolean
  error?: string
}

export function notifyCampaignTokenLibraryChanged(campaignId: string) {
  window.dispatchEvent(new CustomEvent<CampaignTokenLibraryChanged>(
    campaignTokenLibraryChangedEvent,
    { detail: { campaignId } },
  ))
}

export function publishCampaignTokenCapabilities(detail: CampaignTokenCapabilitiesChanged) {
  window.dispatchEvent(new CustomEvent<CampaignTokenCapabilitiesChanged>(
    campaignTokenCapabilitiesChangedEvent,
    { detail },
  ))
}

export function requestCampaignTokenCapabilities(campaignId: string) {
  window.dispatchEvent(new CustomEvent<CampaignTokenLibraryChanged>(
    campaignTokenCapabilitiesRequestedEvent,
    { detail: { campaignId } },
  ))
}

export function requestCampaignTokenAction(detail: CampaignTokenActionRequest) {
  window.dispatchEvent(new CustomEvent<CampaignTokenActionRequest>(
    campaignTokenActionRequestedEvent,
    { detail },
  ))
}

export function publishCampaignTokenActionResult(detail: CampaignTokenActionResult) {
  window.dispatchEvent(new CustomEvent<CampaignTokenActionResult>(
    campaignTokenActionCompletedEvent,
    { detail },
  ))
}
