import { defaultVttGridSettings, type OnlineCampaign, type UserPresence, type VttGridSettings, type VttMeasurement, type VttPlayerToken, type VttTableScene } from './contracts'

export class CampaignPresenceState {
  private readonly userPresence = new Map<string, UserPresence>()
  private readonly campaignOnline = new Map<string, OnlineCampaign>()
  private readonly campaignGridSettings = new Map<string, VttGridSettings>()
  private readonly campaignTokens = new Map<string, Map<string, VttPlayerToken>>()
  private readonly campaignTokenSceneIds = new Map<string, Map<string, string>>()
  private readonly campaignSceneGridSettings = new Map<string, Map<string, VttGridSettings>>()
  private readonly campaignMeasurements = new Map<string, VttMeasurement>()
  private readonly campaignScenes = new Map<string, VttTableScene>()
  private readonly campaignPendingScenes = new Map<string, VttTableScene | null>()

  getUserPresence(userId: string) {
    return this.userPresence.get(userId)
  }

  setUserPresence(userId: string, presence: UserPresence) {
    this.userPresence.set(userId, presence)
  }

  deleteUserPresence(userId: string) {
    this.userPresence.delete(userId)
  }

  isCampaignOnline(campaignId: string) {
    return this.campaignOnline.has(campaignId)
  }

  getCampaignOnline(campaignId: string) {
    return this.campaignOnline.get(campaignId)
  }

  setCampaignOnline(campaignId: string, online: OnlineCampaign) {
    this.campaignOnline.set(campaignId, online)
  }

  getCampaignSessionState(campaignId: string) {
    return this.campaignOnline.get(campaignId)?.state ?? null
  }

  clearCampaignSession(campaignId: string) {
    this.campaignOnline.delete(campaignId)
    this.campaignTokens.delete(campaignId)
    this.campaignTokenSceneIds.delete(campaignId)
    this.campaignSceneGridSettings.delete(campaignId)
    this.campaignMeasurements.delete(campaignId)
    this.campaignScenes.delete(campaignId)
    this.campaignPendingScenes.delete(campaignId)
  }

  getCampaignGridSettings(campaignId: string) {
    return this.campaignGridSettings.get(campaignId) ?? defaultVttGridSettings
  }

  setCampaignGridSettings(campaignId: string, settings: VttGridSettings) {
    this.campaignGridSettings.set(campaignId, settings)
  }

  getCampaignTokens(campaignId: string) {
    return this.campaignTokens.get(campaignId)
  }

  setCampaignTokens(campaignId: string, tokenMap: Map<string, VttPlayerToken>) {
    this.campaignTokens.set(campaignId, tokenMap)
  }

  getOrCreateCampaignTokenMap(campaignId: string) {
    const existing = this.campaignTokens.get(campaignId)
    if (existing) return existing

    const next = new Map<string, VttPlayerToken>()
    this.campaignTokens.set(campaignId, next)
    return next
  }

  deleteCampaignTokens(campaignId: string) {
    this.campaignTokens.delete(campaignId)
  }

  getCampaignTokenSceneIds(campaignId: string) {
    return this.campaignTokenSceneIds.get(campaignId)
  }

  setCampaignTokenSceneIds(campaignId: string, tokenSceneMap: Map<string, string>) {
    this.campaignTokenSceneIds.set(campaignId, tokenSceneMap)
  }

  getOrCreateCampaignTokenSceneMap(campaignId: string) {
    const existing = this.campaignTokenSceneIds.get(campaignId)
    if (existing) return existing

    const next = new Map<string, string>()
    this.campaignTokenSceneIds.set(campaignId, next)
    return next
  }

  getCampaignSceneGridSettings(campaignId: string) {
    return this.campaignSceneGridSettings.get(campaignId)
  }

  setCampaignSceneGridSettings(campaignId: string, sceneGridMap: Map<string, VttGridSettings>) {
    this.campaignSceneGridSettings.set(campaignId, sceneGridMap)
  }

  getOrCreateCampaignSceneGridMap(campaignId: string) {
    const existing = this.campaignSceneGridSettings.get(campaignId)
    if (existing) return existing

    const next = new Map<string, VttGridSettings>()
    this.campaignSceneGridSettings.set(campaignId, next)
    return next
  }

  getCampaignMeasurement(campaignId: string) {
    return this.campaignMeasurements.get(campaignId)
  }

  setCampaignMeasurement(campaignId: string, measurement: VttMeasurement) {
    this.campaignMeasurements.set(campaignId, measurement)
  }

  deleteCampaignMeasurement(campaignId: string) {
    this.campaignMeasurements.delete(campaignId)
  }

  getCampaignScene(campaignId: string) {
    return this.campaignScenes.get(campaignId)
  }

  setCampaignScene(campaignId: string, scene: VttTableScene) {
    this.campaignScenes.set(campaignId, scene)
  }

  deleteCampaignScene(campaignId: string) {
    this.campaignScenes.delete(campaignId)
  }

  hasPendingCampaignScene(campaignId: string) {
    return this.campaignPendingScenes.has(campaignId)
  }

  getPendingCampaignScene(campaignId: string) {
    return this.campaignPendingScenes.get(campaignId) ?? null
  }

  deletePendingCampaignScene(campaignId: string) {
    this.campaignPendingScenes.delete(campaignId)
  }

  clearTransientVttState(campaignId: string) {
    this.campaignMeasurements.delete(campaignId)
    this.campaignScenes.delete(campaignId)
    this.campaignPendingScenes.delete(campaignId)
  }
}
