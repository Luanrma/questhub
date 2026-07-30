import { api } from '../lib/api'
import type {
  GameSystemCatalogDomain,
  GameSystemContentLocale,
} from './registry'
import { catalogDomainPaths } from './registry'

export function createCatalogToken(input: {
  campaignId: string
  contentId: string
  domain: GameSystemCatalogDomain
  locale: GameSystemContentLocale
}) {
  return api<{ actorId: string; sheetId: string; tokenId: string }>(
    `/api/campaigns/${encodeURIComponent(input.campaignId)}/catalog/${catalogDomainPaths[input.domain]}/${encodeURIComponent(input.contentId)}/tokens`,
    {
      method: 'POST',
      body: JSON.stringify({ locale: input.locale }),
    },
  )
}
