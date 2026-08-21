import { useEffect, useState } from 'react'
import { api } from '../../lib/api'

type CharacterSheetActorContext = {
  sheetId: string
  actorId: string
}

export function useCharacterSheetActorContext(
  campaignId: string,
  sheetId: string,
  enabled: boolean,
) {
  const [actorId, setActorId] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) {
      setActorId(null)
      return
    }

    let cancelled = false
    setActorId(null)

    api<CharacterSheetActorContext>(
      `/api/campaigns/${encodeURIComponent(campaignId)}/character-sheets/${encodeURIComponent(sheetId)}/context`,
    )
      .then((context) => {
        if (!cancelled) setActorId(context.actorId)
      })
      .catch(() => {
        if (!cancelled) setActorId(null)
      })

    return () => {
      cancelled = true
    }
  }, [campaignId, enabled, sheetId])

  return actorId
}
