import { api } from '../../../lib/api'

export type ResolvedTokenSheet = {
  sheetId: string
  title: string
}

export function resolveTokenCharacterSheet(campaignId: string, tokenId: string) {
  return api<ResolvedTokenSheet>(
    `/api/campaigns/${encodeURIComponent(campaignId)}/tokens/${encodeURIComponent(tokenId)}/character-sheet`,
  )
}
