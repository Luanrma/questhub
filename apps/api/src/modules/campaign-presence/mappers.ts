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
  source: 'CHARACTER' | 'BESTIARY'
  characterId: string | null
  bestiaryCreatureId: string | null
  campaignNpcDefinitionId: string | null
  name: string | null
  avatarUrl: string | null
  tokenBorderColor: string | null
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
  } | null
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
  if (token.source === 'BESTIARY') {
    return {
      id: token.id,
      source: 'bestiary',
      characterId: null,
      bestiaryCreatureId: token.bestiaryCreatureId,
      campaignNpcDefinitionId: token.campaignNpcDefinitionId,
      name: token.name ?? 'NPC',
      avatarUrl: token.avatarUrl,
      tokenBorderColor: token.tokenBorderColor,
      ownerUserId: '',
      ownerName: 'Mestre',
      role: 'NPC',
      hidden: token.hidden,
      position: {
        x: token.positionX,
        y: token.positionY,
      },
    }
  }

  const campaignCharacter = token.character?.campaigns[0]
  const role = campaignCharacter?.role === 'NPC' ? 'NPC' : 'PLAYER'

  return {
    id: token.id,
    source: 'character',
    characterId: token.characterId,
    bestiaryCreatureId: null,
    name: token.character?.name ?? token.name ?? 'Token',
    avatarUrl: token.character?.avatarUrl ?? token.avatarUrl,
    tokenBorderColor: token.tokenBorderColor,
    ownerUserId: token.character?.userId ?? '',
    ownerName: campaignCharacter?.user?.email ?? token.character?.name ?? 'Mestre',
    role,
    hidden: token.hidden,
    position: {
      x: token.positionX,
      y: token.positionY,
    },
  }
}
