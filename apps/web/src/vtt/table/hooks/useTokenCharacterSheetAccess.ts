import { useCallback, useEffect, useState } from 'react'
import { requestCampaignCharacterSheetOpen } from '../../../lib/campaign-character-sheet-window-events'
import { ApiError } from '../../../lib/api'
import {
  resolveTokenCharacterSheet,
  type ResolvedTokenSheet,
} from '../infrastructure/tokenCharacterSheetApi'

type TokenCharacterSheetAccessState = {
  sheet: ResolvedTokenSheet | null
  loading: boolean
  error: boolean
}

const emptyState: TokenCharacterSheetAccessState = {
  sheet: null,
  loading: false,
  error: false,
}

export function useTokenCharacterSheetAccess(
  campaignId: string | null | undefined,
  tokenId: string | null | undefined,
) {
  const [state, setState] = useState<TokenCharacterSheetAccessState>(emptyState)

  useEffect(() => {
    if (!campaignId || !tokenId) return
    const activeCampaignId = campaignId
    const activeTokenId = tokenId
    let cancelled = false

    queueMicrotask(() => {
      if (cancelled) return
      setState({ sheet: null, loading: true, error: false })
    })

    resolveTokenCharacterSheet(activeCampaignId, activeTokenId)
      .then((sheet) => {
        if (!cancelled) setState({ sheet, loading: false, error: false })
      })
      .catch((cause) => {
        if (cancelled) return
        setState({
          sheet: null,
          loading: false,
          error: !(cause instanceof ApiError) || cause.status !== 404,
        })
      })

    return () => {
      cancelled = true
    }
  }, [campaignId, tokenId])

  const openSheet = useCallback(() => {
    if (!campaignId || !state.sheet) return
    requestCampaignCharacterSheetOpen({
      campaignId,
      sheetId: state.sheet.sheetId,
      title: state.sheet.title,
      presentation: state.sheet.presentation,
    })
  }, [campaignId, state.sheet])

  if (!campaignId || !tokenId) {
    return { ...emptyState, openSheet }
  }

  return { ...state, openSheet }
}
