import type { VttGridSettings, VttPlayerToken } from './contracts'

export type PersistedSceneGrid = {
  gridVisible: boolean
  gridShape: 'SQUARE' | 'HEX'
  gridSize: number
  metersPerCell: number
  squareMeasurementColor: string
  hexMeasurementColor: string
  gridLineWidth: number
  gridColor: string
}

export type PersistedSceneToken = {
  id: string
  characterId: string
  hidden: boolean
  positionX: number
  positionY: number
  character: {
    name: string
    avatarUrl: string | null
    userId: string
    campaigns: Array<{
      role: 'PLAYER' | 'NPC' | 'MASTER'
      user: { email: string } | null
    }>
  }
}

export function sceneGridToVttSettings(scene: PersistedSceneGrid): VttGridSettings {
  return {
    visible: scene.gridVisible,
    shape: scene.gridShape === 'HEX' ? 'hex' : 'square',
    size: scene.gridSize,
    metersPerCell: scene.metersPerCell,
    squareMeasurementColor: scene.squareMeasurementColor,
    hexMeasurementColor: scene.hexMeasurementColor,
    lineWidth: scene.gridLineWidth,
    color: scene.gridColor,
  }
}

export function vttGridSettingsToSceneData(settings: VttGridSettings) {
  return {
    gridVisible: settings.visible,
    gridShape: settings.shape === 'hex' ? 'HEX' as const : 'SQUARE' as const,
    gridSize: settings.size,
    metersPerCell: settings.metersPerCell,
    squareMeasurementColor: settings.squareMeasurementColor,
    hexMeasurementColor: settings.hexMeasurementColor,
    gridLineWidth: settings.lineWidth,
    gridColor: settings.color,
  }
}

export function tableTokenFromPersistedToken(token: PersistedSceneToken): VttPlayerToken {
  const campaignCharacter = token.character.campaigns[0]
  const role = campaignCharacter?.role === 'NPC' ? 'NPC' : 'PLAYER'

  return {
    id: token.id,
    characterId: token.characterId,
    name: token.character.name,
    avatarUrl: token.character.avatarUrl,
    ownerUserId: token.character.userId,
    ownerName: campaignCharacter?.user?.email ?? token.character.name,
    role,
    hidden: token.hidden,
    position: {
      x: token.positionX,
      y: token.positionY,
    },
  }
}
