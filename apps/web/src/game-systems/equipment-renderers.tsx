import { useEffect, useState, type ComponentType } from 'react'
import { Pathfinder2eEquipmentPanel } from '../features/pathfinder-2e/equipment/Pathfinder2eEquipmentPanel'
import { api } from '../lib/api'
import type { GameSystemKey } from './registry'

type EquipmentRendererProps = {
  campaignId: string
  actorId: string
  catalogSheetZIndex?: number
  onEquipmentChanged?: () => void
}

type InventorySystemResponse = {
  gameSystem: GameSystemKey
}

const equipmentRenderers: Partial<Record<GameSystemKey, ComponentType<EquipmentRendererProps>>> = {
  PATHFINDER_2E: Pathfinder2eEquipmentPanel,
}

export function GameSystemEquipmentPanels(props: EquipmentRendererProps) {
  const [gameSystem, setGameSystem] = useState<GameSystemKey | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    setGameSystem(null)

    api<InventorySystemResponse>(
      `/api/campaigns/${props.campaignId}/inventory/system`,
      { signal: controller.signal },
    )
      .then((response) => setGameSystem(response.gameSystem))
      .catch(() => {
        if (!controller.signal.aborted) setGameSystem(null)
      })

    return () => controller.abort()
  }, [props.campaignId])

  if (!gameSystem) return null
  const Renderer = equipmentRenderers[gameSystem]
  return Renderer ? <Renderer {...props} /> : null
}
