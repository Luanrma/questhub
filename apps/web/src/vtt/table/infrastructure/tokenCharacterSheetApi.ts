import { api } from '../../../lib/api'

export type ResolvedTokenSheet = {
  sheetId: string
  title: string
  inventoryAvailable: boolean
  presentation: 'FULL' | 'SIMPLIFIED'
}

export function resolveTokenCharacterSheet(campaignId: string, tokenId: string) {
  return api<ResolvedTokenSheet>(
    `/api/campaigns/${encodeURIComponent(campaignId)}/tokens/${encodeURIComponent(tokenId)}/character-sheet`,
  )
}
