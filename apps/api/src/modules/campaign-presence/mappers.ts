import type { VttGridSettings, VttPlayerToken } from './contracts'

export type PersistedSceneGrid = {
  gridVisible: boolean
  gridShape: 'SQUARE' | 'HEX'
  gridSize: number
  gridOffsetX: number
  gridOffsetY: number
  metersPerCell: number
  squareMeasurementColor: string
  hexMeasurementColor: string
  gridLineWidth: number
  gridColor: string
}

export type PersistedSceneToken = {
  id: string
  tokenId: string
  sceneId: string
  hidden: boolean
  positionX: number
  positionY: number
  rotation: number
  layer: 'OBJECT' | 'TOKEN' | 'OVERLAY'
  blocksVisionAndLight: boolean
  token: {
    id: string
    actorId: string | null
    name: string
    avatarUrl: string | null
    color: string | null
    size: number
    canCustomizeAppearance: boolean
    visionConfig: unknown
    lightConfig: unknown
    actor: {
      mainForMember: { userId: string; role: 'PLAYER' | 'MASTER' } | null
      controllerMember: { userId: string } | null
    } | null
    controllerMember: {
      id: string
      userId: string
      user: { email: string }
    } | null
  }
}

export function sceneGridToVttSettings(scene: PersistedSceneGrid): VttGridSettings {
  return {
    visible: scene.gridVisible,
    shape: scene.gridShape === 'HEX' ? 'hex' : 'square',
    size: scene.gridSize,
    offsetX: scene.gridOffsetX,
    offsetY: scene.gridOffsetY,
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
    gridOffsetX: settings.offsetX,
    gridOffsetY: settings.offsetY,
    metersPerCell: settings.metersPerCell,
    squareMeasurementColor: settings.squareMeasurementColor,
    hexMeasurementColor: settings.hexMeasurementColor,
    gridLineWidth: settings.lineWidth,
    gridColor: settings.color,
  }
}

export function tableTokenFromPersistedToken(token: PersistedSceneToken): VttPlayerToken {
  const mainMember = token.token.actor?.mainForMember ?? null
  const role = mainMember?.role === 'PLAYER' ? 'PLAYER' : token.token.actor ? 'NPC' : 'GENERIC'

  return {
    id: token.token.id,
    actorId: token.token.actorId,
    name: token.token.name,
    avatarUrl: token.token.avatarUrl,
    color: token.token.color,
    size: token.token.size,
    ownerUserId: mainMember?.userId ?? token.token.actor?.controllerMember?.userId ?? null,
    ownerName: token.token.controllerMember?.user.email ?? null,
    controllerMemberId: token.token.controllerMember?.id ?? null,
    controllerUserId: token.token.controllerMember?.userId ?? null,
    role,
    canCustomizeAppearance: token.token.canCustomizeAppearance,
    visionConfig: token.token.visionConfig,
    lightConfig: token.token.lightConfig,
    hidden: token.hidden,
    rotation: token.rotation,
    layer: token.layer,
    blocksVisionAndLight: token.blocksVisionAndLight,
    position: {
      x: token.positionX,
      y: token.positionY,
    },
  }
}
