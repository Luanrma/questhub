import { useEffect, useState, type ComponentType } from 'react'
import { Pathfinder2eCampaignSettingsPanel } from '../features/pathfinder-2e/settings/Pathfinder2eCampaignSettingsPanel'
import { api } from '../lib/api'
import type { GameSystemKey } from './registry'

type GameSystemSettingsPanelProps = {
  campaignId: string
}

type CampaignGameSystemResponse = {
  gameSystem: GameSystemKey
}

const settingsPanels: Partial<Record<GameSystemKey, ComponentType<GameSystemSettingsPanelProps>>> = {
  PATHFINDER_2E: Pathfinder2eCampaignSettingsPanel,
}

export function GameSystemSettingsPanels(props: GameSystemSettingsPanelProps) {
  const [gameSystem, setGameSystem] = useState<GameSystemKey | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    setGameSystem(null)

    api<CampaignGameSystemResponse>(
      `/api/campaigns/${props.campaignId}/game-system`,
      { signal: controller.signal },
    )
      .then((response) => setGameSystem(response.gameSystem))
      .catch(() => {
        if (!controller.signal.aborted) setGameSystem(null)
      })

    return () => controller.abort()
  }, [props.campaignId])

  if (!gameSystem) return null
  const Panel = settingsPanels[gameSystem]
  return Panel ? <Panel {...props} /> : null
}
