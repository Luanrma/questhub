import { defaultGridSettings, normalizeGridSettings, type VttGridSettings } from '../../grid'
import { boardGridLimits, sceneImageMaxBytes, sceneImageMimeTypeLabels, sceneImageMimeTypes } from '../config/constants'
import type { CampaignSceneResponse, PreparedScene, VttGridBounds, VttTableScene, VttWallSegment } from './types'

const hexRowStepUnits = Math.sqrt(3) / 2

export function createPreparedScene(index: number): PreparedScene {
  return {
    id: `scene-${index}`,
    name: `Cena${index}`,
    imageUrl: null,
    fileName: null,
    file: null,
    assetId: null,
    storagePath: null,
    grid: {
      visible: true,
      shape: 'square',
      size: 32,
      metersPerCell: 1,
      squareMeasurementColor: '#facc15',
      hexMeasurementColor: '#38bdf8',
      lineWidth: 1,
      color: '#ffffff',
    },
    tokens: [],
    walls: [],
    order: index,
    error: null,
    draft: true,
  }
}

function isWallSegment(value: unknown): value is VttWallSegment {
  if (!value || typeof value !== 'object') return false
  const wall = value as VttWallSegment
  if (wall.kind !== 'wall' && wall.kind !== 'door') return false
  if (!wall.id || typeof wall.id !== 'string') return false
  if (!wall.start || !wall.end) return false
  if (!Number.isFinite(wall.start.x) || !Number.isFinite(wall.start.y)) return false
  if (!Number.isFinite(wall.end.x) || !Number.isFinite(wall.end.y)) return false
  return Math.hypot(wall.end.x - wall.start.x, wall.end.y - wall.start.y) > 0.001
}

export function normalizeWallSegments(value: unknown): VttWallSegment[] {
  if (!Array.isArray(value)) return []
  return value.filter(isWallSegment).map((wall) => ({
    ...wall,
    color: typeof wall.color === 'string' && /^#[0-9a-fA-F]{6}$/.test(wall.color) ? wall.color : undefined,
    playerVisible: Boolean(wall.playerVisible),
    ...(wall.kind === 'door' ? {
      door: wall.door?.open
        ? { open: true, locked: false, blocked: false, ajar: false }
        : {
            open: false,
            locked: Boolean(wall.door?.locked),
            blocked: Boolean(wall.door?.blocked),
            ajar: Boolean(wall.door?.ajar),
          },
    } : {}),
  }))
}

export function formatBytes(bytes: number) {
  if (bytes >= 1024 * 1024) return `${Math.round((bytes / 1024 / 1024) * 10) / 10} MB`
  return `${Math.ceil(bytes / 1024)} KB`
}

export function validateSceneImage(file: File) {
  if (!sceneImageMimeTypes.includes(file.type as (typeof sceneImageMimeTypes)[number])) {
    return `Formato invalido. Use ${sceneImageMimeTypeLabels}.`
  }

  if (file.size > sceneImageMaxBytes) {
    return `Arquivo acima do limite de ${formatBytes(sceneImageMaxBytes)}.`
  }

  return null
}

export function normalizePreparedSceneList(scenes: PreparedScene[]) {
  const persistedScenes = scenes.filter((scene) => !isDraftPreparedScene(scene))
  const normalizedScenes = persistedScenes.map((scene, index) => ({
    ...scene,
    id: scene.id,
    name: `Cena${index + 1}`,
    order: index + 1,
    draft: scene.draft,
  }))

  return [...normalizedScenes, createPreparedScene(normalizedScenes.length + 1)]
}

export function isObjectUrl(url: string | null) {
  return Boolean(url?.startsWith('blob:'))
}

export function revokeSceneImageUrl(scene: PreparedScene) {
  if (scene.imageUrl && isObjectUrl(scene.imageUrl)) URL.revokeObjectURL(scene.imageUrl)
}

export function isDraftPreparedScene(scene: PreparedScene) {
  return scene.draft
}

export function isSelectablePreparedScene(scene: PreparedScene) {
  return !isDraftPreparedScene(scene)
}

export function getDefaultSceneDimensions(grid: VttGridSettings): VttGridBounds {
  if (grid.shape === 'hex') {
    return {
      width: boardGridLimits.columns * grid.size,
      height: (boardGridLimits.rows * hexRowStepUnits + 0.5) * grid.size,
    }
  }

  return {
    width: boardGridLimits.columns * grid.size,
    height: boardGridLimits.rows * grid.size,
  }
}

export function filenameEquals(left: string | null, right: string) {
  return left?.trim().toLocaleLowerCase() === right.trim().toLocaleLowerCase()
}

export function readImageDimensions(imageUrl: string) {
  return new Promise<VttGridBounds>((resolve, reject) => {
    const image = new Image()
    image.onload = () => {
      resolve({
        width: Math.max(1, image.naturalWidth),
        height: Math.max(1, image.naturalHeight),
      })
    }
    image.onerror = () => reject(new Error('Nao foi possivel carregar as dimensoes da cena.'))
    image.src = imageUrl
  })
}

export function sceneResponseToPreparedScene(scene: CampaignSceneResponse, index: number): PreparedScene {
  const grid = normalizeGridSettings(scene.grid)

  return {
    id: scene.id,
    name: scene.name || `Cena${index + 1}`,
    imageUrl: scene.backgroundUrl,
    fileName: scene.name || `Cena${index + 1}`,
    file: null,
    assetId: scene.assetId,
    storagePath: scene.backgroundCacheKey,
    grid,
    tokens: scene.tokens,
    walls: normalizeWallSegments(scene.walls),
    order: scene.order,
    error: null,
    draft: false,
  }
}

export function preparedSceneToTableScene(scene: PreparedScene, dimensions: VttGridBounds): VttTableScene {
  return {
    id: scene.id,
    name: scene.name,
    imageUrl: scene.imageUrl,
    fileName: scene.fileName,
    assetId: scene.assetId,
    width: dimensions.width,
    height: dimensions.height,
    grid: scene.grid,
    tokens: scene.tokens,
    walls: scene.walls,
  }
}

export function sceneImageDimensionKey(scene: Pick<VttTableScene, 'id' | 'imageUrl'>) {
  return `${scene.id}:${scene.imageUrl ?? ''}`
}

export function createDefaultScenePayload(name: string) {
  return {
    name,
    grid: defaultGridSettings,
  }
}
