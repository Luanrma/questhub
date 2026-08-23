import { api } from '../lib/api'
import type {
  GameSystemCatalogDomainDescriptor,
  GameSystemContentLocale,
} from './registry'

export function createCatalogToken(input: {
  campaignId: string
  contentId: string
  domain: GameSystemCatalogDomainDescriptor
  locale: GameSystemContentLocale
}) {
  return api<{ actorId: string; sheetId: string; tokenId: string }>(
    `/api/campaigns/${encodeURIComponent(input.campaignId)}/catalog/${encodeURIComponent(input.domain.slug)}/${encodeURIComponent(input.contentId)}/tokens`,
    {
      method: 'POST',
      body: JSON.stringify({ locale: input.locale }),
    },
  )
}
