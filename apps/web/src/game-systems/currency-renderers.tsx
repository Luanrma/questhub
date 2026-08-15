import { useEffect, useState, type ComponentType } from 'react'
import { Pathfinder2eCurrencyBox } from '../features/pathfinder-2e/currency/Pathfinder2eCurrencyBox'
import { api } from '../lib/api'
import type { GameSystemKey } from './registry'

type CurrencyRendererProps = { campaignId: string; actorId: string; zIndex?: number }
type InventorySystemResponse = { gameSystem: GameSystemKey }

const currencyRenderers: Partial<Record<GameSystemKey, ComponentType<CurrencyRendererProps>>> = {
  PATHFINDER_2E: Pathfinder2eCurrencyBox,
}

export function GameSystemCurrencyBox(props: CurrencyRendererProps) {
  const [gameSystem, setGameSystem] = useState<GameSystemKey | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    setGameSystem(null)
    api<InventorySystemResponse>(`/api/campaigns/${props.campaignId}/inventory/system`, { signal: controller.signal })
      .then((response) => setGameSystem(response.gameSystem))
      .catch(() => { if (!controller.signal.aborted) setGameSystem(null) })
    return () => controller.abort()
  }, [props.campaignId])

  if (!gameSystem) return null
  const Renderer = currencyRenderers[gameSystem]
  return Renderer ? <Renderer {...props} /> : null
}
