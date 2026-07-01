import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Dice5,
  Eye,
  EyeOff,
  Grid3X3,
  ImagePlus,
  MessageCircle,
  MousePointer2,
  Move,
  Palette,
  Plus,
  Ruler,
  SlidersHorizontal,
  PanelRightClose,
  PanelRightOpen,
  Trash2,
  Users,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { CampaignChat } from '../../components/CampaignChat'
import { useSession } from '../../contexts/SessionContext'
import { api, apiForm } from '../../lib/api'
import { VttDiceControls } from '../../vtt/dice-roller'
import { defaultGridSettings, metersPerCellAllowedValues, normalizeGridSettings, type VttGridSettings, type VttGridShape } from '../../vtt/grid'

const gridSizeLimits = { min: 24, max: 96 }
const gridLineWidthLimits = { min: 1, max: 4 }
const zoomLimits = { min: 50, max: 150, step: 10 }
const boardGridLimits = { columns: 50, rows: 34 }
const sceneImageMaxBytes = Number(import.meta.env.VITE_ASSET_MAX_UPLOAD_BYTES ?? 10 * 1024 * 1024)
const sceneImageMimeTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/avif'] as const
const sceneImageMimeTypeLabels = 'JPG, PNG, WEBP ou AVIF'

type VttToolId = 'select' | 'move' | 'measure' | 'grid' | 'dice' | 'tokens'

type PreparedScene = {
  id: string
  name: string
  imageUrl: string | null
  fileName: string | null
  file: File | null
  assetId: string | null
  storagePath: string | null
  grid: VttGridSettings
  tokens: VttPlayerToken[]
  order: number
  error: string | null
}

type AssetUploadResponse = {
  id: string
  storagePath: string
  signedUrl: string
}

type AssetExistsResponse = {
  exists: boolean
  asset: {
    id: string
    storagePath: string
    originalName: string
  } | null
}

function createPreparedScene(index: number): PreparedScene {
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
    order: index,
    error: null,
  }
}

function formatBytes(bytes: number) {
  if (bytes >= 1024 * 1024) return `${Math.round((bytes / 1024 / 1024) * 10) / 10} MB`
  return `${Math.ceil(bytes / 1024)} KB`
}

function validateSceneImage(file: File) {
  if (!sceneImageMimeTypes.includes(file.type as (typeof sceneImageMimeTypes)[number])) {
    return `Formato invalido. Use ${sceneImageMimeTypeLabels}.`
  }

  if (file.size > sceneImageMaxBytes) {
    return `Arquivo acima do limite de ${formatBytes(sceneImageMaxBytes)}.`
  }

  return null
}

function normalizePreparedSceneList(scenes: PreparedScene[]) {
  const normalizedScenes = scenes.map((scene, index) => ({
    ...scene,
    id: scene.id,
    name: `Cena${index + 1}`,
    order: index + 1,
  }))

  if (!normalizedScenes.length) return [createPreparedScene(1)]
  if (normalizedScenes.some((scene) => !scene.imageUrl)) return normalizedScenes
  return [...normalizedScenes, createPreparedScene(normalizedScenes.length + 1)]
}

function isObjectUrl(url: string | null) {
  return Boolean(url?.startsWith('blob:'))
}

function revokeSceneImageUrl(scene: PreparedScene) {
  if (scene.imageUrl && isObjectUrl(scene.imageUrl)) URL.revokeObjectURL(scene.imageUrl)
}

function isSelectablePreparedScene(scene: PreparedScene) {
  return Boolean(scene.imageUrl && scene.assetId)
}

function filenameEquals(left: string | null, right: string) {
  return left?.trim().toLocaleLowerCase() === right.trim().toLocaleLowerCase()
}

function readImageDimensions(imageUrl: string) {
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

const toolButtons = [
  { id: 'select', label: 'Selecionar', icon: MousePointer2 },
  { id: 'move', label: 'Mover', icon: Move },
  { id: 'measure', label: 'Medir', icon: Ruler },
  { id: 'dice', label: 'Dados', icon: Dice5 },
  { id: 'tokens', label: 'Tokens', icon: CircleUserRound },
  { id: 'grid', label: 'Grid', icon: Grid3X3 },
] as const

function createHexGridDataUrl(settings: VttGridSettings) {
  const hexWidth = settings.size
  const radius = hexWidth / Math.sqrt(3)
  const rowStep = radius * 1.5
  const patternWidth = hexWidth * 2
  const patternHeight = rowStep * 2
  const halfWidth = hexWidth / 2
  const halfRadius = radius / 2

  function hexPath(centerX: number, centerY: number) {
    return [
      `M ${centerX} ${centerY - radius}`,
      `L ${centerX + halfWidth} ${centerY - halfRadius}`,
      `L ${centerX + halfWidth} ${centerY + halfRadius}`,
      `L ${centerX} ${centerY + radius}`,
      `L ${centerX - halfWidth} ${centerY + halfRadius}`,
      `L ${centerX - halfWidth} ${centerY - halfRadius}`,
      'Z',
    ].join(' ')
  }

  const paths = [
    hexPath(0, 0),
    hexPath(hexWidth, 0),
    hexPath(patternWidth, 0),
    hexPath(halfWidth, rowStep),
    hexPath(hexWidth + halfWidth, rowStep),
    hexPath(0, patternHeight),
    hexPath(hexWidth, patternHeight),
    hexPath(patternWidth, patternHeight),
  ]

  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${patternWidth}" height="${patternHeight}" viewBox="0 0 ${patternWidth} ${patternHeight}">`,
    `<path d="${paths.join(' ')}" fill="none" stroke="${settings.color}" stroke-width="${settings.lineWidth}" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>`,
    '</svg>',
  ].join('')

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

function getGridStyle(settings: VttGridSettings): CSSProperties {
  if (!settings.visible) return { display: 'none' }

  if (settings.shape === 'hex') {
    const radius = settings.size / Math.sqrt(3)
    const rowStep = radius * 1.5

    return {
      backgroundImage: createHexGridDataUrl(settings),
      backgroundSize: `${settings.size * 2}px ${rowStep * 2}px`,
      opacity: 0.72,
    }
  }

  return {
    backgroundImage: [
      `linear-gradient(${settings.color} ${settings.lineWidth}px, transparent ${settings.lineWidth}px)`,
      `linear-gradient(90deg, ${settings.color} ${settings.lineWidth}px, transparent ${settings.lineWidth}px)`,
    ].join(', '),
    backgroundSize: `${settings.size}px ${settings.size}px`,
    opacity: 0.72,
  }
}

function VttGridOverlay({ settings }: { settings: VttGridSettings }) {
  return <div className="absolute inset-0 pointer-events-none" style={getGridStyle(settings)} />
}

function VttGridSettingsModal({
  settings,
  onChange,
  onClose,
}: {
  settings: VttGridSettings
  onChange: (settings: VttGridSettings) => void
  onClose: () => void
}) {
  function updateSetting<Key extends keyof VttGridSettings>(key: Key, value: VttGridSettings[Key]) {
    onChange({ ...settings, [key]: value })
  }

  const metersPerCellIndex = Math.max(0, metersPerCellAllowedValues.indexOf(settings.metersPerCell))

  return (
    <div className="pointer-events-auto absolute left-24 top-20 z-30 w-[min(360px,calc(100vw-48px))] rounded-lg border border-white/10 bg-[#101116]/95 text-white shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-indigo-300" />
          <h2 className="truncate text-sm font-semibold">Configurar grid</h2>
        </div>
        <button
          type="button"
          title="Fechar"
          className="rounded-md p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="grid gap-4 p-4">
        <label className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm">
          <span className="text-zinc-200">Mostrar grid</span>
          <input
            type="checkbox"
            className="h-4 w-4 accent-indigo-500"
            checked={settings.visible}
            onChange={(event) => updateSetting('visible', event.target.checked)}
          />
        </label>

        <div className="grid gap-2">
          <span className="text-xs font-semibold uppercase text-zinc-400">Formato</span>
          <div className="grid grid-cols-2 gap-2">
            {[
              ['square', 'Quadrado'],
              ['hex', 'Hexagonal'],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                className={[
                  'rounded-md border px-3 py-2 text-sm font-semibold transition',
                  settings.shape === value
                    ? 'border-indigo-300/40 bg-indigo-500/20 text-indigo-100'
                    : 'border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/10 hover:text-white',
                ].join(' ')}
                onClick={() => updateSetting('shape', value as VttGridShape)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <label className="grid gap-2 text-sm">
          <div className="flex justify-between gap-3">
            <span className="text-zinc-200">Tamanho</span>
            <span className="text-zinc-400">{settings.size}px</span>
          </div>
          <input
            type="range"
            min={gridSizeLimits.min}
            max={gridSizeLimits.max}
            value={settings.size}
            className="accent-indigo-500"
            onChange={(event) => updateSetting('size', Number(event.target.value))}
          />
        </label>

        {settings.shape === 'square' ? (
          <label className="grid gap-2 text-sm">
            <div className="flex justify-between gap-3">
              <span className="text-zinc-200">Metros por celula</span>
              <span className="text-zinc-400">{settings.metersPerCell}m</span>
            </div>
            <input
              type="range"
              min={0}
              max={metersPerCellAllowedValues.length - 1}
              value={metersPerCellIndex}
              className="accent-indigo-500"
              onChange={(event) => updateSetting('metersPerCell', metersPerCellAllowedValues[Number(event.target.value)])}
            />
          </label>
        ) : null}

        <label className="flex items-center justify-between gap-3 text-sm">
          <span className="flex items-center gap-2 text-zinc-200">
            <Palette className="h-4 w-4 text-zinc-500" />
            {settings.shape === 'square' ? 'Cor do tracejado' : 'Cor da pintura'}
          </span>
          <input
            type="color"
            value={settings.shape === 'square' ? settings.squareMeasurementColor : settings.hexMeasurementColor}
            className="h-9 w-14 rounded border border-white/10 bg-transparent p-1"
            onChange={(event) =>
              updateSetting(settings.shape === 'square' ? 'squareMeasurementColor' : 'hexMeasurementColor', event.target.value)
            }
          />
        </label>

        <label className="grid gap-2 text-sm">
          <div className="flex justify-between gap-3">
            <span className="text-zinc-200">Espessura</span>
            <span className="text-zinc-400">{settings.lineWidth}px</span>
          </div>
          <input
            type="range"
            min={gridLineWidthLimits.min}
            max={gridLineWidthLimits.max}
            value={settings.lineWidth}
            className="accent-indigo-500"
            onChange={(event) => updateSetting('lineWidth', Number(event.target.value))}
          />
        </label>

        <label className="flex items-center justify-between gap-3 text-sm">
          <span className="flex items-center gap-2 text-zinc-200">
            <Palette className="h-4 w-4 text-zinc-500" />
            Cor
          </span>
          <input
            type="color"
            value={settings.color}
            className="h-9 w-14 rounded border border-white/10 bg-transparent p-1"
            onChange={(event) => updateSetting('color', event.target.value)}
          />
        </label>
      </div>
    </div>
  )
}

type CampaignOverviewPageProps = {
  gridSettings: VttGridSettings
  gridSettingsOpen: boolean
  canConfigureGrid: boolean
  sessionState: 'ACTIVE' | 'PAUSED' | null
  myCharacter: {
    id: string
    name: string
    avatarUrl: string | null
    role: 'MASTER' | 'PLAYER'
    status: 'ACTIVE' | 'PENDING'
  } | null
  onGridSettingsChange: (settings: VttGridSettings, options?: { clearSceneTokens?: boolean; realtime?: boolean; sceneId?: string }) => void
  onGridSettingsOpenChange: (open: boolean) => void
}

type VttPlayerToken = {
  id: string
  characterId: string
  name: string
  avatarUrl: string | null
  ownerUserId: string
  ownerName: string
  role: 'PLAYER' | 'NPC'
  hidden: boolean
  position: {
    x: number
    y: number
  }
}

type VttTokenChangedPayload = {
  campaignId: string
  token: VttPlayerToken
}

type VttTokensSnapshotPayload = {
  campaignId: string
  tokens: VttPlayerToken[]
  sessionState?: 'ACTIVE' | 'PAUSED' | null
}

type VttTokenRemovedPayload = {
  campaignId: string
  characterId: string
}

type VttSceneEditingPayload = {
  campaignId: string
  sceneId?: string
  message?: string
}

type VttTokenState = {
  campaignId: string | null
  tokens: VttPlayerToken[]
}

type VttTableScene = {
  id: string
  name: string
  imageUrl: string | null
  fileName: string | null
  assetId: string | null
  width: number
  height: number
  grid: VttGridSettings
  tokens: VttPlayerToken[]
}

function sceneResponseToPreparedScene(scene: CampaignSceneResponse, index: number): PreparedScene {
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
    order: scene.order,
    error: null,
  }
}

function preparedSceneToTableScene(scene: PreparedScene, dimensions: VttGridBounds): VttTableScene {
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
  }
}

function isStructuralGridChange(current: VttGridSettings, next: VttGridSettings) {
  return current.shape !== next.shape || current.size !== next.size
}

function sceneImageDimensionKey(scene: Pick<VttTableScene, 'id' | 'imageUrl'>) {
  return `${scene.id}:${scene.imageUrl ?? ''}`
}

type CampaignSceneResponse = {
  id: string
  campaignId: string
  name: string
  order: number
  assetId: string | null
  backgroundUrl: string | null
  backgroundCacheKey: string | null
  grid: unknown
  tokens: VttPlayerToken[]
  createdAt: string
  updatedAt: string
}

type VttSceneChangedPayload = {
  campaignId: string
  scene: VttTableScene | null
}

type VttGridBounds = {
  width: number
  height: number
}

function ScenePreparationModal({
  scenes,
  saving,
  deletingSceneId,
  error,
  successMessage,
  skippedFiles,
  onUpload,
  onSave,
  onDelete,
  onClose,
}: {
  scenes: PreparedScene[]
  saving: boolean
  deletingSceneId: string | null
  error: string | null
  successMessage: string | null
  skippedFiles: string[]
  onUpload: (sceneId: string, file: File) => void
  onSave: () => void
  onDelete: (sceneId: string) => void
  onClose: () => void
}) {
  const canSave = scenes.some((scene) => scene.file && !scene.assetId)

  return (
    <div className="pointer-events-auto fixed inset-0 z-50 grid place-items-center bg-black/55 p-6 backdrop-blur-sm">
      <div className="flex max-h-[min(720px,calc(100vh-48px))] w-[min(980px,calc(100vw-32px))] flex-col rounded-lg border border-white/10 bg-[#101116]/95 text-white shadow-2xl">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
          <div className="flex min-w-0 items-center gap-2">
            <ImagePlus className="h-5 w-5 text-indigo-300" />
            <h2 className="truncate text-base font-semibold">Preparar cena</h2>
          </div>
          <button
            type="button"
            title="Fechar"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="min-h-0 overflow-auto p-5">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
            {scenes.map((scene) => (
              <div key={scene.id} className="grid gap-2">
                <label
                  className={[
                    'group grid aspect-[4/3] grid-rows-[auto_minmax(0,1fr)] overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition',
                    scene.assetId ? 'cursor-default' : 'cursor-pointer hover:border-indigo-300/50 hover:bg-white/[0.07]',
                  ].join(' ')}
                >
                  <span className="border-b border-white/10 px-3 py-2 text-sm font-semibold text-zinc-100">{scene.name}</span>
                  <span className="relative grid min-h-0 place-items-center overflow-hidden">
                    {scene.imageUrl ? (
                      <>
                        <img src={scene.imageUrl} alt="" className="h-full w-full object-cover" />
                        <span className="absolute inset-x-0 bottom-0 truncate bg-black/60 px-3 py-2 text-xs font-semibold text-zinc-200 opacity-0 transition group-hover:opacity-100">
                          {scene.fileName}
                        </span>
                        {scene.assetId ? (
                          <span className="absolute right-2 top-2 rounded-full border border-emerald-300/30 bg-emerald-500/20 px-2 py-1 text-[10px] font-bold uppercase text-emerald-100">
                            Salva
                          </span>
                        ) : null}
                      </>
                    ) : (
                      <span className="grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-black/35 text-zinc-200 transition group-hover:border-indigo-300/60 group-hover:text-white">
                        <Plus className="h-7 w-7" />
                      </span>
                    )}
                  </span>
                  <input
                    type="file"
                    accept={sceneImageMimeTypes.join(',')}
                    disabled={Boolean(scene.assetId)}
                    className="sr-only"
                    onChange={(event) => {
                      const file = event.target.files?.[0]
                      event.currentTarget.value = ''
                      if (!file) return
                      onUpload(scene.id, file)
                    }}
                  />
                  {scene.error ? <span className="px-3 pb-2 text-xs font-semibold text-red-200">{scene.error}</span> : null}
                </label>
                {scene.imageUrl ? (
                  <Button
                    type="button"
                    variant={scene.assetId ? 'danger' : 'primary'}
                    disabled={saving || deletingSceneId === scene.id}
                    className={[
                      'h-8 px-3 text-xs',
                      scene.assetId ? '' : 'bg-blue-600 text-white hover:bg-blue-700',
                    ].join(' ')}
                    onClick={() => onDelete(scene.id)}
                  >
                    {deletingSceneId === scene.id ? 'Deletando...' : scene.assetId ? 'Deletar' : 'Remover'}
                  </Button>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-3 border-t border-white/10 px-5 py-4">
          <div className="min-w-0">
            {successMessage ? <div className="text-sm font-semibold text-emerald-200">{successMessage}</div> : null}
            {skippedFiles.length ? (
              <div className="mt-1 text-xs font-semibold text-amber-200">
                Nao enviados: {skippedFiles.join(', ')}
              </div>
            ) : null}
            {error ? <div className="mt-1 text-sm font-semibold text-red-200">{error}</div> : null}
          </div>
          <Button type="button" disabled={!canSave || saving} className="h-9 px-4" onClick={onSave}>
            {saving ? 'Salvando...' : 'Salvar'}
          </Button>
        </div>
      </div>
    </div>
  )
}

function SceneSidebarScenes({
  scenes,
  activeSceneId,
  showExpandButton,
  onSelectScene,
  onExpand,
}: {
  scenes: PreparedScene[]
  activeSceneId: string | null
  showExpandButton: boolean
  onSelectScene: (sceneId: string) => void
  onExpand: () => void
}) {
  const sceneThumbnails = scenes.filter(isSelectablePreparedScene)

  return (
    <div className="flex min-h-[160px] flex-[1_1_0%] overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
      {showExpandButton ? (
        <button
          type="button"
          title="Expandir cenas"
          aria-label="Expandir cenas"
          className="grid w-12 shrink-0 place-items-center border-r border-white/10 text-purple-400 transition hover:bg-white/10 hover:text-purple-300"
          onClick={onExpand}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      ) : null}
      <div className="min-w-0 flex-1 overflow-y-auto p-3">
        {sceneThumbnails.length ? (
          <div className="grid gap-2">
            {sceneThumbnails.map((scene) => {
              const selected = scene.id === activeSceneId

              return (
                <button
                  key={scene.id}
                  type="button"
                  title={scene.fileName ?? scene.name}
                  className={[
                    'w-full truncate rounded-md border px-3 py-2 text-left text-sm font-semibold transition',
                    selected
                      ? 'border-indigo-300 bg-indigo-500/20 text-white'
                      : 'border-white/10 bg-white/[0.03] text-zinc-300 hover:border-indigo-300/50 hover:bg-white/[0.07] hover:text-white',
                  ].join(' ')}
                  onClick={() => onSelectScene(scene.id)}
                >
                  {scene.name}
                </button>
              )
            })}
          </div>
        ) : (
          <div className="text-xs text-zinc-500">Nenhuma cena preparada.</div>
        )}
      </div>
    </div>
  )
}

function SceneDock({
  scenes,
  activeSceneId,
  onSelectScene,
  onPrepareScene,
  onCollapsedChange,
}: {
  scenes: PreparedScene[]
  activeSceneId: string | null
  onSelectScene: (sceneId: string) => void
  onPrepareScene: () => void
  onCollapsedChange: (collapsed: boolean) => void
}) {
  const sceneThumbnails = scenes.filter(isSelectablePreparedScene)
  const activeScene = sceneThumbnails.find((scene) => scene.id === activeSceneId)

  return (
    <div className="pointer-events-auto absolute inset-x-6 bottom-6 z-30 overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur">
      <div className="flex min-h-[104px] items-stretch">
        <div className="flex min-w-0 flex-1 flex-wrap items-end justify-between gap-3 px-3 py-3">
          <div className="min-w-0">
            <div className="mb-2">
              <div className="truncate text-sm font-semibold text-white">{activeScene ? activeScene.name : 'Cena sem mapa carregado'}</div>
            </div>
            {sceneThumbnails.length ? (
              <div className="flex max-w-[calc(100vw-360px)] flex-wrap gap-2 max-xl:max-w-full">
                {sceneThumbnails.map((scene) => {
                  const selected = scene.id === activeSceneId

                  return (
                    <button
                      key={scene.id}
                      type="button"
                      title={scene.fileName ?? scene.name}
                      className={[
                        'group relative h-16 w-28 overflow-hidden rounded-md border bg-white/[0.04] text-left shadow-lg transition',
                        selected
                          ? 'border-indigo-300 ring-2 ring-indigo-400/50'
                          : 'border-white/10 hover:border-indigo-300/60 hover:bg-white/[0.08]',
                      ].join(' ')}
                      onClick={() => onSelectScene(scene.id)}
                    >
                      {scene.imageUrl ? <img src={scene.imageUrl} alt="" className="h-full w-full object-cover" /> : null}
                      <span className="absolute inset-x-0 bottom-0 truncate bg-black/70 px-2 py-1 text-xs font-semibold text-white">
                        {scene.name}
                      </span>
                    </button>
                  )
                })}
              </div>
            ) : (
              <div className="text-xs text-zinc-400">Grid pronto para mapas, tokens e medidas.</div>
            )}
          </div>
          <Button variant="ghost" className="h-9 gap-2 px-3" onClick={onPrepareScene}>
            <Plus className="h-4 w-4" />
            Preparar cena
          </Button>
        </div>
        <button
          type="button"
          title="Recolher cenas"
          aria-label="Recolher cenas"
          className="grid w-12 shrink-0 place-items-center border-l border-white/10 text-purple-400 transition hover:bg-white/10 hover:text-purple-300"
          onClick={() => onCollapsedChange(true)}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

type VttPanOffset = {
  x: number
  y: number
}

type VttMeasurementPoint = {
  x: number
  y: number
}

type VttMeasurement =
  | {
      shape: 'square'
      start: VttMeasurementPoint
      end: VttMeasurementPoint
      color: string
    }
  | {
      shape: 'hex'
      points: VttMeasurementPoint[]
      color: string
    }

type VttMeasurementChangedPayload = {
  campaignId: string
  measurement: VttMeasurement | null
}

type VttTokenCandidate = {
  characterId: string
  name: string
  avatarUrl: string | null
  role: 'PLAYER' | 'NPC'
  ownerUserId: string
  ownerName: string
}

type VttTokenContextMenu = {
  token: VttPlayerToken
  x: number
  y: number
}

const hexRowStepUnits = Math.sqrt(3) / 2

function getTokenSize(gridSettings: VttGridSettings) {
  return gridSettings.size
}

function scaleGridSettings(settings: VttGridSettings, zoomPercent: number): VttGridSettings {
  const scale = zoomPercent / 100

  return {
    ...settings,
    size: settings.size * scale,
    lineWidth: Math.max(1, settings.lineWidth * scale),
  }
}

function getDefaultBoardPixelSize(gridSize: number) {
  return {
    width: boardGridLimits.columns * gridSize,
    height: boardGridLimits.rows * gridSize,
  }
}

function getBoardPixelSize(gridSize: number, zoomPercent: number, scene: VttTableScene | null) {
  if (!scene) return getDefaultBoardPixelSize(gridSize)

  const scale = zoomPercent / 100
  return {
    width: scene.width * scale,
    height: scene.height * scale,
  }
}

function clampPanOffset(offset: VttPanOffset, viewport: VttGridBounds, board: VttGridBounds) {
  if (!viewport.width || !viewport.height || !board.width || !board.height) return offset
  const centeredX = (viewport.width - board.width) / 2
  const centeredY = (viewport.height - board.height) / 2
  const minX = viewport.width >= board.width ? centeredX : viewport.width - board.width
  const maxX = viewport.width >= board.width ? centeredX : 0
  const minY = viewport.height >= board.height ? centeredY : viewport.height - board.height
  const maxY = viewport.height >= board.height ? centeredY : 0

  return {
    x: clampNumber(offset.x, minX, maxX),
    y: clampNumber(offset.y, minY, maxY),
  }
}

function getCenteredPanOffset(viewport: VttGridBounds, board: VttGridBounds) {
  if (!viewport.width || !viewport.height || !board.width || !board.height) return { x: 0, y: 0 }

  return clampPanOffset(
    {
      x: (viewport.width - board.width) / 2,
      y: (viewport.height - board.height) / 2,
    },
    viewport,
    board,
  )
}

function clampNumber(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) return min
  return Math.min(Math.max(value, min), Math.max(min, max))
}

function clampTokenGridPosition(position: VttPlayerToken['position'], bounds: VttGridBounds, gridSize: number) {
  const maxX = bounds.width / gridSize - 0.5
  const maxY = bounds.height / gridSize - 0.5

  return {
    x: clampNumber(position.x, 0.5, maxX),
    y: clampNumber(position.y, 0.5, maxY),
  }
}

function snapSquareTokenPosition(position: VttPlayerToken['position']) {
  return {
    x: Math.floor(position.x) + 0.5,
    y: Math.floor(position.y) + 0.5,
  }
}

function isTokenCenterVisible(center: VttPlayerToken['position'], bounds: VttGridBounds, gridSize: number) {
  const pixelCenter = {
    x: center.x * gridSize,
    y: center.y * gridSize,
  }

  return (
    pixelCenter.x >= gridSize / 2 &&
    pixelCenter.y >= gridSize / 2 &&
    pixelCenter.x <= bounds.width - gridSize / 2 &&
    pixelCenter.y <= bounds.height - gridSize / 2
  )
}

function snapHexTokenPosition(position: VttPlayerToken['position'], bounds?: VttGridBounds, gridSize?: number) {
  const rowEstimate = Math.round(position.y / hexRowStepUnits)
  let closest = { x: 0.5, y: hexRowStepUnits }
  let closestDistance = Number.POSITIVE_INFINITY

  for (let row = Math.max(0, rowEstimate - 3); row <= rowEstimate + 3; row += 1) {
    const rowOffset = row % 2 === 0 ? 0 : 0.5
    const colEstimate = Math.round(position.x - rowOffset)

    for (let col = Math.max(0, colEstimate - 3); col <= colEstimate + 3; col += 1) {
      const candidate = {
        x: col + rowOffset,
        y: row * hexRowStepUnits,
      }

      if (bounds && gridSize && !isTokenCenterVisible(candidate, bounds, gridSize)) continue

      const distance = (candidate.x - position.x) ** 2 + (candidate.y - position.y) ** 2
      if (distance >= closestDistance) continue

      closest = candidate
      closestDistance = distance
    }
  }

  return closest
}

function snapTokenGridPosition(
  position: VttPlayerToken['position'],
  gridShape: VttGridShape,
  bounds?: VttGridBounds,
  gridSize?: number,
) {
  if (gridShape === 'hex') return snapHexTokenPosition(position, bounds, gridSize)
  return snapSquareTokenPosition(position)
}

function normalizeTokenPosition(
  position: VttPlayerToken['position'],
  gridShape: VttGridShape,
  bounds?: VttGridBounds,
  gridSize?: number,
) {
  if (bounds && gridSize) return snapTokenGridPosition(clampTokenGridPosition(position, bounds, gridSize), gridShape, bounds, gridSize)

  return {
    x: Math.max(0, Number.isFinite(position.x) ? position.x : 0),
    y: Math.max(0, Number.isFinite(position.y) ? position.y : 0),
  }
}

function normalizeTableToken(token: VttPlayerToken, gridShape: VttGridShape) {
  return {
    ...token,
    ownerUserId: token.ownerUserId ?? '',
    ownerName: token.ownerName ?? token.name,
    role: token.role ?? 'PLAYER',
    hidden: Boolean(token.hidden),
    position: normalizeTokenPosition(token.position, gridShape),
  }
}

function tokenPixelPosition(token: VttPlayerToken, gridSize: number) {
  return {
    x: token.position.x * gridSize - gridSize / 2,
    y: token.position.y * gridSize - gridSize / 2,
  }
}

function tokenGridPositionFromPixelCenter(
  position: VttPlayerToken['position'],
  bounds: VttGridBounds,
  gridSize: number,
  gridShape: VttGridShape,
) {
  return normalizeTokenPosition(
    {
      x: position.x / gridSize,
      y: position.y / gridSize,
    },
    gridShape,
    bounds,
    gridSize,
  )
}

function clampMeasurementPoint(point: VttMeasurementPoint, bounds: VttGridBounds) {
  return {
    x: clampNumber(point.x, 0, bounds.width),
    y: clampNumber(point.y, 0, bounds.height),
  }
}

function formatMeters(value: number) {
  const precision = value < 10 ? 1 : 0
  return `${value.toFixed(precision).replace('.', ',')} m`
}

function measurementLabel(measurement: VttMeasurement, metersPerCell: number) {
  if (measurement.shape === 'hex') {
    const steps = Math.max(0, measurement.points.length - 1)
    return `${steps} ${steps === 1 ? 'passo' : 'passos'}`
  }

  const distanceInGridUnits = Math.hypot(measurement.end.x - measurement.start.x, measurement.end.y - measurement.start.y)
  return formatMeters(distanceInGridUnits * metersPerCell)
}

function measurementLabelPoint(measurement: VttMeasurement) {
  if (measurement.shape === 'hex') {
    return measurement.points[measurement.points.length - 1] ?? { x: 0, y: 0 }
  }

  return {
    x: (measurement.start.x + measurement.end.x) / 2,
    y: (measurement.start.y + measurement.end.y) / 2,
  }
}

function areMeasurementPointsEqual(a: VttMeasurementPoint, b: VttMeasurementPoint) {
  return Math.abs(a.x - b.x) < 0.5 && Math.abs(a.y - b.y) < 0.5
}

function measurementPointToPixels(point: VttMeasurementPoint, gridSize: number) {
  return {
    x: point.x * gridSize,
    y: point.y * gridSize,
  }
}

function hexPolygonPoints(center: VttMeasurementPoint, gridSize: number) {
  const pixelCenter = measurementPointToPixels(center, gridSize)
  const radius = gridSize / Math.sqrt(3)
  const halfWidth = gridSize / 2
  const halfRadius = radius / 2

  return [
    { x: pixelCenter.x, y: pixelCenter.y - radius },
    { x: pixelCenter.x + halfWidth, y: pixelCenter.y - halfRadius },
    { x: pixelCenter.x + halfWidth, y: pixelCenter.y + halfRadius },
    { x: pixelCenter.x, y: pixelCenter.y + radius },
    { x: pixelCenter.x - halfWidth, y: pixelCenter.y + halfRadius },
    { x: pixelCenter.x - halfWidth, y: pixelCenter.y - halfRadius },
  ]
    .map((point) => `${point.x},${point.y}`)
    .join(' ')
}

function VttMeasurementOverlay({
  measurement,
  gridSize,
  metersPerCell,
}: {
  measurement: VttMeasurement | null
  gridSize: number
  metersPerCell: number
}) {
  if (!measurement) return null

  const labelPoint = measurementPointToPixels(measurementLabelPoint(measurement), gridSize)
  const label = measurementLabel(measurement, metersPerCell)
  const color = measurement.color

  return (
    <>
      <svg className="pointer-events-none absolute inset-0 z-[7] h-full w-full overflow-visible">
        {measurement.shape === 'square' ? (
          <>
            <line
              x1={measurementPointToPixels(measurement.start, gridSize).x}
              y1={measurementPointToPixels(measurement.start, gridSize).y}
              x2={measurementPointToPixels(measurement.end, gridSize).x}
              y2={measurementPointToPixels(measurement.end, gridSize).y}
              stroke={color}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8 6"
            />
            {[measurement.start, measurement.end].map((point, index) => (
              <circle
                key={index}
                cx={measurementPointToPixels(point, gridSize).x}
                cy={measurementPointToPixels(point, gridSize).y}
                r="5"
                fill={color}
                stroke="#111827"
                strokeWidth="2"
              />
            ))}
          </>
        ) : (
          <>
            {measurement.points.map((point, index) => (
              <polygon
                key={`${point.x}-${point.y}-${index}`}
                points={hexPolygonPoints(point, gridSize)}
                fill={color}
                fillOpacity="0.45"
                stroke={color}
                strokeOpacity="0.9"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            ))}
          </>
        )}
      </svg>
      <div
        className="pointer-events-none absolute z-[9] rounded-md border border-orange-300/40 bg-black/75 px-2 py-1 text-xs font-semibold text-orange-100 shadow-lg"
        style={{ left: labelPoint.x, top: labelPoint.y, transform: 'translate(-50%, -140%)' }}
      >
        {label}
      </div>
    </>
  )
}

function PlayerToken({
  token,
  tokenSize,
  gridShape,
  gridAreaRef,
  canDrag,
  isMasterView,
  onMove,
  onContextMenu,
}: {
  token: VttPlayerToken
  tokenSize: number
  gridShape: VttGridShape
  gridAreaRef: React.RefObject<HTMLDivElement | null>
  canDrag: boolean
  isMasterView: boolean
  onMove: (position: VttPlayerToken['position']) => void
  onContextMenu: (token: VttPlayerToken, position: { x: number; y: number }) => void
}) {
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, tokenX: 0, tokenY: 0 })
  const [dragging, setDragging] = useState(false)
  const initial = token.name.trim().charAt(0).toUpperCase() || '?'
  const position = tokenPixelPosition(token, tokenSize)

  useEffect(() => {
    function onPointerMove(event: PointerEvent) {
      if (!dragging) return

      const bounds = gridAreaRef.current?.getBoundingClientRect()
      if (!bounds) return
      const gridBounds = { width: bounds.width, height: bounds.height }

      const nextPosition = {
        x: dragStartRef.current.tokenX + event.clientX - dragStartRef.current.pointerX,
        y: dragStartRef.current.tokenY + event.clientY - dragStartRef.current.pointerY,
      }

      const tokenCenter = {
        x: nextPosition.x + tokenSize / 2,
        y: nextPosition.y + tokenSize / 2,
      }

      onMove(tokenGridPositionFromPixelCenter(tokenCenter, gridBounds, tokenSize, gridShape))
    }

    function onPointerUp() {
      setDragging(false)
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [dragging, gridAreaRef, gridShape, onMove, tokenSize])

  function startDrag(event: React.PointerEvent<HTMLButtonElement>) {
    if (!canDrag) return

    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    dragStartRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      tokenX: position.x,
      tokenY: position.y,
    }
    setDragging(true)
  }

  function openContextMenu(event: React.MouseEvent<HTMLButtonElement>) {
    if (!isMasterView) return

    event.preventDefault()
    onContextMenu(token, { x: event.clientX, y: event.clientY })
  }

  return (
    <button
      type="button"
      title={`Token de ${token.name}`}
      className={[
        'absolute z-[5] grid place-items-center overflow-hidden rounded-full border-2 shadow-2xl outline-none transition',
        dragging
          ? 'cursor-grabbing border-indigo-200 ring-4 ring-indigo-400/35'
          : canDrag
            ? 'cursor-grab border-indigo-300/80 ring-2 ring-black/50 hover:ring-indigo-300/40'
            : isMasterView
              ? 'cursor-context-menu border-zinc-200/70 ring-2 ring-black/50 hover:ring-indigo-300/40'
              : 'cursor-default border-zinc-200/70 ring-2 ring-black/50',
        token.hidden && isMasterView ? 'opacity-35 saturate-50' : '',
      ].join(' ')}
      style={{
        left: position.x,
        top: position.y,
        width: tokenSize,
        height: tokenSize,
      }}
      onPointerDown={startDrag}
      onContextMenu={openContextMenu}
    >
      {token.avatarUrl ? (
        <img src={token.avatarUrl} alt="" className="h-full w-full object-cover" draggable={false} />
      ) : (
        <span className="grid h-full w-full place-items-center bg-indigo-600 text-lg font-bold text-white">{initial}</span>
      )}
    </button>
  )
}

export function CampaignOverviewPage({
  gridSettings,
  gridSettingsOpen,
  canConfigureGrid,
  sessionState,
  myCharacter,
  onGridSettingsChange,
  onGridSettingsOpenChange,
}: CampaignOverviewPageProps) {
  const { campaignId } = useParams()
  const { campaigns, socket, connectRealtime } = useSession()
  const boardViewportRef = useRef<HTMLDivElement | null>(null)
  const gridAreaRef = useRef<HTMLDivElement | null>(null)
  const measuringRef = useRef(false)
  const measurementRef = useRef<VttMeasurement | null>(null)
  const panningRef = useRef<{ pointerId: number; x: number; y: number } | null>(null)
  const previousCampaignOnlineRef = useRef<{ campaignId: string | null; online: boolean }>({ campaignId: null, online: false })
  const [tokenState, setTokenState] = useState<VttTokenState>({ campaignId: null, tokens: [] })
  const [tokenCandidates, setTokenCandidates] = useState<VttTokenCandidate[]>([])
  const [tokenContextMenu, setTokenContextMenu] = useState<VttTokenContextMenu | null>(null)
  const [gridBounds, setGridBounds] = useState<VttGridBounds>({ width: 0, height: 0 })
  const [viewportBounds, setViewportBounds] = useState<VttGridBounds>({ width: 0, height: 0 })
  const [panOffset, setPanOffset] = useState<VttPanOffset>({ x: 0, y: 0 })
  const [isPanning, setIsPanning] = useState(false)
  const [activeTool, setActiveTool] = useState<VttToolId | null>('select')
  const [measurement, setMeasurement] = useState<VttMeasurement | null>(null)
  const [diceClearSignal, setDiceClearSignal] = useState(0)
  const [zoomPercent, setZoomPercent] = useState(100)
  const [sceneDockCollapsed, setSceneDockCollapsed] = useState(false)
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(false)
  const [scenePreparationOpen, setScenePreparationOpen] = useState(false)
  const [preparedScenes, setPreparedScenes] = useState<PreparedScene[]>([createPreparedScene(1)])
  const [activeScene, setActiveScene] = useState<VttTableScene | null>(null)
  const [sceneSaveError, setSceneSaveError] = useState<string | null>(null)
  const [sceneSuccessMessage, setSceneSuccessMessage] = useState<string | null>(null)
  const [sceneSkippedFiles, setSceneSkippedFiles] = useState<string[]>([])
  const [sceneSaving, setSceneSaving] = useState(false)
  const [sceneDeletingId, setSceneDeletingId] = useState<string | null>(null)
  const [sceneAssetsLoadedCampaignId, setSceneAssetsLoadedCampaignId] = useState<string | null>(null)
  const preparedScenesRef = useRef(preparedScenes)
  const sceneImageDimensionsRef = useRef(new Map<string, VttGridBounds>())
  const onGridSettingsChangeRef = useRef(onGridSettingsChange)
  const measurementGridKey = `${gridSettings.shape}:${gridSettings.size}:${gridSettings.metersPerCell}`
  const measurementGridKeyRef = useRef(measurementGridKey)

  const campaign = campaigns.find((item) => item.id === campaignId)
  const isMaster = campaign?.myRole === 'MASTER'
  const sessionActive = Boolean(campaign?.isOnline && sessionState !== 'PAUSED')
  const masterCanUseVtt = Boolean(isMaster)
  const playerCanUseVtt = Boolean(!isMaster && sessionActive)
  const realtimeVttEnabled = Boolean(sessionActive || masterCanUseVtt)
  const canRollDice = Boolean(
    campaignId &&
      campaign?.myStatus === 'ACTIVE' &&
      myCharacter?.id &&
      socket &&
      (campaign.myRole === 'MASTER' || playerCanUseVtt),
  )
  const activeZoomPercent = clampNumber(zoomPercent, zoomLimits.min, zoomLimits.max)
  const zoomedGridSettings = scaleGridSettings(gridSettings, activeZoomPercent)
  const tokenSize = getTokenSize(zoomedGridSettings)
  const boardPixelSize = getBoardPixelSize(tokenSize, activeZoomPercent, activeScene)
  const clampedPanOffset = clampPanOffset(panOffset, viewportBounds, boardPixelSize)
  const visibleToolButtons = toolButtons.filter((tool) => {
    if (tool.id === 'grid' || tool.id === 'tokens') return canConfigureGrid
    return true
  })
  const playerTokens = tokenState.campaignId === campaignId ? tokenState.tokens : []
  const visibleTokens = isMaster ? playerTokens : playerTokens.filter((token) => !token.hidden)
  const positionedCharacterIds = new Set<string>()
  preparedScenes.forEach((scene) => {
    scene.tokens.forEach((token) => positionedCharacterIds.add(token.characterId))
  })
  playerTokens.forEach((token) => positionedCharacterIds.add(token.characterId))
  const availableTokenCandidates = tokenCandidates.filter(
    (candidate) => !positionedCharacterIds.has(candidate.characterId),
  )

  useEffect(() => {
    const element = gridAreaRef.current
    if (!element) return

    const updateBounds = () => {
      const bounds = element.getBoundingClientRect()
      setGridBounds({ width: bounds.width, height: bounds.height })
    }
    const animationFrame = window.requestAnimationFrame(updateBounds)
    const observer = new ResizeObserver(updateBounds)
    observer.observe(element)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const element = boardViewportRef.current
    if (!element) return

    const updateBounds = () => {
      const bounds = element.getBoundingClientRect()
      setViewportBounds({ width: bounds.width, height: bounds.height })
    }
    const animationFrame = window.requestAnimationFrame(updateBounds)
    const observer = new ResizeObserver(updateBounds)
    observer.observe(element)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!campaignId) return
    if (campaign?.myRole !== 'MASTER') return
    if (campaign.myStatus !== 'ACTIVE') return
    if (socket) return

    connectRealtime()
  }, [campaign?.myRole, campaign?.myStatus, campaignId, connectRealtime, socket])

  useEffect(() => {
    if (!activeScene) return
    setPanOffset(getCenteredPanOffset(viewportBounds, boardPixelSize))
  }, [activeScene?.id, activeZoomPercent, boardPixelSize.height, boardPixelSize.width, viewportBounds.height, viewportBounds.width])

  useEffect(() => {
    onGridSettingsChangeRef.current = onGridSettingsChange
  }, [onGridSettingsChange])

  useEffect(() => {
    if (!campaignId || !isMaster || activeTool !== 'tokens') return

    let cancelled = false
    api<VttTokenCandidate[]>(`/api/campaigns/${campaignId}/token-candidates`)
      .then((items) => {
        if (!cancelled) setTokenCandidates(items)
      })
      .catch(() => {
        if (!cancelled) setTokenCandidates([])
      })

    return () => {
      cancelled = true
    }
  }, [activeTool, campaignId, isMaster])

  useEffect(() => {
    const online = Boolean(campaign?.isOnline)
    const previous = previousCampaignOnlineRef.current

    if (previous.campaignId !== (campaignId ?? null)) {
      previousCampaignOnlineRef.current = { campaignId: campaignId ?? null, online }
      return
    }

    if (previous.online && !online) {
      setDiceClearSignal((current) => current + 1)
    }

    previousCampaignOnlineRef.current = { campaignId: campaignId ?? null, online }
  }, [campaign?.isOnline, campaignId])

  useEffect(() => {
    if (!socket || !campaignId) return
    const currentCampaignId = campaignId

    function applySceneSnapshot(scene: VttTableScene | null) {
      if (!scene) {
        setActiveScene(null)
        setTokenState({ campaignId: currentCampaignId, tokens: [] })
        if (!isMaster) onGridSettingsChangeRef.current(defaultGridSettings)
        return
      }

      const sceneKey = sceneImageDimensionKey(scene)
      setActiveScene((current) => {
        const cachedDimensions = sceneImageDimensionsRef.current.get(sceneKey)
        const currentDimensions =
          current && sceneImageDimensionKey(current) === sceneKey ? { width: current.width, height: current.height } : null
        const dimensions = cachedDimensions ?? currentDimensions
        return dimensions ? { ...scene, width: dimensions.width, height: dimensions.height } : scene
      })

      const sceneGrid = normalizeGridSettings(scene.grid)
      onGridSettingsChangeRef.current(sceneGrid, { realtime: false, sceneId: scene.id })
      const sceneTokens = scene.tokens.map((token) => normalizeTableToken(token, sceneGrid.shape))
      setTokenState({
        campaignId: currentCampaignId,
        tokens: sceneTokens,
      })
      if (isMaster) {
        setPreparedScenes((current) =>
          current.map((preparedScene) =>
            preparedScene.id === scene.id ? { ...preparedScene, grid: sceneGrid, tokens: sceneTokens } : preparedScene,
          ),
        )
      }
    }

    function onTokenChanged(payload: VttTokenChangedPayload) {
      if (payload.campaignId !== campaignId) return

      setTokenState((current) => {
        const token = normalizeTableToken(payload.token, gridSettings.shape)
        const currentTokens = current.campaignId === campaignId ? current.tokens : []
        const index = currentTokens.findIndex((item) => item.characterId === token.characterId)
        if (index === -1) return { campaignId, tokens: [...currentTokens, token] }

        const next = [...currentTokens]
        next[index] = token
        return { campaignId, tokens: next }
      })
      setPreparedScenes((current) =>
        current.map((scene) => {
          if (scene.id !== activeScene?.id) return scene
          const index = scene.tokens.findIndex((item) => item.characterId === payload.token.characterId)
          const tokens = index === -1 ? [...scene.tokens, payload.token] : scene.tokens.map((item) => (item.characterId === payload.token.characterId ? payload.token : item))
          return { ...scene, tokens }
        }),
      )
    }

    function onTokensSnapshot(payload: VttTokensSnapshotPayload) {
      if (payload.campaignId !== campaignId) return
      if (isMaster) return
      setTokenState({
        campaignId,
        tokens: payload.tokens.map((token) => normalizeTableToken(token, gridSettings.shape)),
      })
    }

    function onTokenRemoved(payload: VttTokenRemovedPayload) {
      if (payload.campaignId !== campaignId) return
      setTokenState((current) => {
        if (current.campaignId !== campaignId) return current
        return {
          campaignId,
          tokens: current.tokens.filter((token) => token.characterId !== payload.characterId),
        }
      })
      setPreparedScenes((current) =>
        current.map((scene) =>
          scene.id === activeScene?.id ? { ...scene, tokens: scene.tokens.filter((token) => token.characterId !== payload.characterId) } : scene,
        ),
      )
    }

    function onMeasurementChanged(payload: VttMeasurementChangedPayload) {
      if (payload.campaignId !== campaignId) return
      measurementRef.current = payload.measurement
      setMeasurement(payload.measurement)
    }

    function onSceneChanged(payload: VttSceneChangedPayload) {
      if (payload.campaignId !== campaignId) return
      applySceneSnapshot(payload.scene)
    }

    function onMeasurementSnapshot(payload: VttMeasurementChangedPayload) {
      if (payload.campaignId !== campaignId) return
      if (isMaster) return
      measurementRef.current = payload.measurement
      setMeasurement(payload.measurement)
    }

    function onSceneSnapshot(payload: VttSceneChangedPayload) {
      if (payload.campaignId !== campaignId) return
      applySceneSnapshot(payload.scene)
    }

    function onSceneEditing(payload: VttSceneEditingPayload) {
      if (payload.campaignId !== campaignId) return
      if (isMaster) return
      setActiveScene(null)
      setTokenState({ campaignId, tokens: [] })
      alert(payload.message ?? 'A cena esta sendo editada pelo mestre; sua visao do mapa foi removida ate o token ser reposicionado.')
    }

    socket.on('vtt:token:changed', onTokenChanged)
    socket.on('vtt:tokens:snapshot', onTokensSnapshot)
    socket.on('vtt:token:removed', onTokenRemoved)
    socket.on('vtt:measurement:changed', onMeasurementChanged)
    socket.on('vtt:measurement:snapshot', onMeasurementSnapshot)
    socket.on('vtt:scene:changed', onSceneChanged)
    socket.on('vtt:scene:snapshot', onSceneSnapshot)
    socket.on('vtt:scene:editing', onSceneEditing)

    if (!isMaster) {
      socket.emit('vtt:tokens:request', { campaignId })
      socket.emit('vtt:measurement:request', { campaignId })
      socket.emit('vtt:scene:request', { campaignId })
    }

    return () => {
      socket.off('vtt:token:changed', onTokenChanged)
      socket.off('vtt:tokens:snapshot', onTokensSnapshot)
      socket.off('vtt:token:removed', onTokenRemoved)
      socket.off('vtt:measurement:changed', onMeasurementChanged)
      socket.off('vtt:measurement:snapshot', onMeasurementSnapshot)
      socket.off('vtt:scene:changed', onSceneChanged)
      socket.off('vtt:scene:snapshot', onSceneSnapshot)
      socket.off('vtt:scene:editing', onSceneEditing)
    }
  }, [socket, campaignId, gridSettings.shape, isMaster, activeScene?.id])

  useEffect(() => {
    if (measurementGridKeyRef.current === measurementGridKey) return
    measurementGridKeyRef.current = measurementGridKey
    measuringRef.current = false
    measurementRef.current = null
    setMeasurement(null)
    if (campaignId && socket) socket.emit('vtt:measurement:update', { campaignId, measurement: null })
  }, [campaignId, measurementGridKey, socket])

  useEffect(() => {
    preparedScenesRef.current = preparedScenes
  }, [preparedScenes])

  useEffect(() => {
    return () => {
      preparedScenesRef.current.forEach((scene) => {
        revokeSceneImageUrl(scene)
      })
    }
  }, [])

  useEffect(() => {
    if (!campaignId || !isMaster) return
    if (sceneAssetsLoadedCampaignId === campaignId) return

    let cancelled = false
    setSceneSaveError(null)
    setSceneSuccessMessage(null)
    setSceneSkippedFiles([])

    api<CampaignSceneResponse[]>(`/api/campaigns/${encodeURIComponent(campaignId)}/scenes`)
      .then((scenes) => {
        if (cancelled) return

        setPreparedScenes((current) => {
          current.forEach(revokeSceneImageUrl)
          return normalizePreparedSceneList(scenes.map(sceneResponseToPreparedScene))
        })
        setSceneAssetsLoadedCampaignId(campaignId)
      })
      .catch((err) => {
        if (!cancelled && scenePreparationOpen) setSceneSaveError(err instanceof Error ? err.message : 'Nao foi possivel carregar cenas.')
      })

    return () => {
      cancelled = true
    }
  }, [campaignId, isMaster, sceneAssetsLoadedCampaignId, scenePreparationOpen])

  useEffect(() => {
    if (!isMaster || !activeScene) return
    if (preparedScenes.some((scene) => scene.id === activeScene.id && scene.imageUrl)) return
    setActiveScene(null)
    if (campaignId && socket && masterCanUseVtt) socket.emit('vtt:scene:select', { campaignId, scene: null })
  }, [activeScene, campaignId, isMaster, masterCanUseVtt, preparedScenes, socket])

  function publishSceneSelection(scene: VttTableScene | null) {
    if (!campaignId || !socket || !masterCanUseVtt) return
    socket.emit('vtt:scene:select', { campaignId, scene })
  }

  function handleGridSettingsChange(settings: VttGridSettings) {
    const shouldClearSceneTokens = Boolean(
      campaignId && isMaster && activeScene && playerTokens.length > 0 && isStructuralGridChange(gridSettings, settings),
    )

    if (shouldClearSceneTokens) {
      const confirmed = window.confirm(
        'Esta cena possui tokens posicionados. Alterar o tamanho ou o formato do grid removera os tokens desta cena, e os jogadores perderao a visao do mapa ate o mestre reposicionar seus tokens. Continuar?',
      )
      if (!confirmed) return
    }

    onGridSettingsChange(settings, { clearSceneTokens: shouldClearSceneTokens, sceneId: activeScene?.id })
    if (!campaignId || !isMaster || !activeScene) return

    setPreparedScenes((current) =>
      current.map((scene) =>
        scene.id === activeScene.id ? { ...scene, grid: settings, tokens: shouldClearSceneTokens ? [] : scene.tokens } : scene,
      ),
    )
    setActiveScene((current) => (current ? { ...current, grid: settings, tokens: shouldClearSceneTokens ? [] : current.tokens } : current))
    if (shouldClearSceneTokens) setTokenState({ campaignId, tokens: [] })
    if (!campaign?.isOnline) {
      api<CampaignSceneResponse>(`/api/campaigns/${encodeURIComponent(campaignId)}/scenes/${encodeURIComponent(activeScene.id)}`, {
        method: 'PATCH',
        body: JSON.stringify({ grid: settings, clearSceneTokens: shouldClearSceneTokens }),
      }).catch(() => {})
    }
  }

  async function selectPreparedScene(sceneId: string) {
    if (!isMaster) return

    const scene = preparedScenes.find((item) => item.id === sceneId)
    if (!scene?.imageUrl || !scene.assetId) return

    try {
      const dimensions = await readImageDimensions(scene.imageUrl)
      const nextScene = preparedSceneToTableScene(scene, dimensions)
      sceneImageDimensionsRef.current.set(sceneImageDimensionKey(nextScene), dimensions)

      setActiveScene(nextScene)
      setTokenState({ campaignId: campaignId ?? null, tokens: scene.tokens.map((token) => normalizeTableToken(token, scene.grid.shape)) })
      onGridSettingsChange(scene.grid, { realtime: false, sceneId: scene.id })
      publishSceneSelection(nextScene)
    } catch (err) {
      setSceneSaveError(err instanceof Error ? err.message : 'Nao foi possivel selecionar a cena.')
    }
  }

  function movePlayerToken(token: VttPlayerToken, position: VttPlayerToken['position']) {
    if (!campaignId || !socket) return
    const isOwnerMove = sessionActive && myCharacter?.id === token.characterId && myCharacter.role === 'PLAYER'
    const isMasterPausedMove = sessionState === 'PAUSED' && isMaster
    if (!isOwnerMove && !isMasterPausedMove) return

    const nextPosition = normalizeTokenPosition(position, gridSettings.shape, gridBounds, tokenSize)
    setTokenState((current) => {
      if (current.campaignId !== campaignId) return current
      return {
        campaignId,
        tokens: current.tokens.map((item) => (item.characterId === token.characterId ? { ...item, position: nextPosition } : item)),
      }
    })
    socket.emit('vtt:token:move', { campaignId, characterId: token.characterId, position: nextPosition })
  }

  function publishMeasurement(nextMeasurement: VttMeasurement | null) {
    if (!realtimeVttEnabled) return
    measurementRef.current = nextMeasurement
    setMeasurement(nextMeasurement)

    if (!campaignId || !socket) return
    socket.emit('vtt:measurement:update', { campaignId, measurement: nextMeasurement })
  }

  function getMeasurementPoint(event: React.PointerEvent<HTMLElement>) {
    const bounds = gridAreaRef.current?.getBoundingClientRect()
    if (!bounds) return null

    return clampMeasurementPoint(
      {
        x: (event.clientX - bounds.left) / tokenSize,
        y: (event.clientY - bounds.top) / tokenSize,
      },
      { width: bounds.width / tokenSize, height: bounds.height / tokenSize },
    )
  }

  function snapHexMeasurementPoint(point: VttMeasurementPoint) {
    const bounds = gridAreaRef.current?.getBoundingClientRect()
    if (!bounds) return point

    return tokenGridPositionFromPixelCenter(
      {
        x: point.x * tokenSize,
        y: point.y * tokenSize,
      },
      { width: bounds.width, height: bounds.height },
      tokenSize,
      'hex',
    )
  }

  function nextHexMeasurementPoints(points: VttMeasurementPoint[], nextPoint: VttMeasurementPoint) {
    const existingIndex = points.findIndex((point) => areMeasurementPointsEqual(point, nextPoint))
    if (existingIndex >= 0) return points.slice(0, existingIndex + 1)
    return [...points, nextPoint]
  }

  function startMeasurement(event: React.PointerEvent<HTMLDivElement>) {
    const point = getMeasurementPoint(event)
    if (!point) return

    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    measuringRef.current = true

    if (gridSettings.shape === 'hex') {
      publishMeasurement({ shape: 'hex', points: [snapHexMeasurementPoint(point)], color: gridSettings.hexMeasurementColor })
      return
    }

    publishMeasurement({ shape: 'square', start: point, end: point, color: gridSettings.squareMeasurementColor })
  }

  function updateMeasurement(event: React.PointerEvent<HTMLDivElement>) {
    if (!measuringRef.current) return

    const point = getMeasurementPoint(event)
    if (!point) return

    if (gridSettings.shape === 'hex') {
      const nextPoint = snapHexMeasurementPoint(point)
      const current = measurementRef.current
      const points = current?.shape === 'hex' ? current.points : []
      const lastPoint = points[points.length - 1]
      if (lastPoint && areMeasurementPointsEqual(lastPoint, nextPoint)) return

      publishMeasurement({ shape: 'hex', points: nextHexMeasurementPoints(points, nextPoint), color: gridSettings.hexMeasurementColor })
      return
    }

    const current = measurementRef.current
    publishMeasurement(
      current?.shape === 'square'
        ? { ...current, end: point, color: gridSettings.squareMeasurementColor }
        : { shape: 'square', start: point, end: point, color: gridSettings.squareMeasurementColor },
    )
  }

  function finishMeasurement() {
    measuringRef.current = false
  }

  function dragTokenCandidate(event: React.DragEvent<HTMLButtonElement>, candidate: VttTokenCandidate) {
    event.dataTransfer.setData('application/x-questhub-character-id', candidate.characterId)
    event.dataTransfer.effectAllowed = 'copy'
  }

  function tokenDropPosition(event: React.DragEvent<HTMLElement>) {
    const bounds = gridAreaRef.current?.getBoundingClientRect()
    if (!bounds) return null

    return normalizeTokenPosition(
      {
        x: (event.clientX - bounds.left) / tokenSize,
        y: (event.clientY - bounds.top) / tokenSize,
      },
      gridSettings.shape,
      { width: bounds.width, height: bounds.height },
      tokenSize,
    )
  }

  function dropTokenCandidate(event: React.DragEvent<HTMLElement>) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return

    const characterId = event.dataTransfer.getData('application/x-questhub-character-id')
    if (!characterId) return

    const position = tokenDropPosition(event)
    if (!position) return

    event.preventDefault()
    socket.emit('vtt:token:place', { campaignId, characterId, position })
  }

  function removeToken(token: VttPlayerToken) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return

    socket.emit('vtt:token:remove', { campaignId, characterId: token.characterId })
    setTokenContextMenu(null)
  }

  function toggleTokenVisibility(token: VttPlayerToken) {
    if (!campaignId || !socket || !isMaster || !masterCanUseVtt) return

    socket.emit('vtt:token:visibility', { campaignId, characterId: token.characterId })
    setTokenContextMenu(null)
  }

  function changeZoom(direction: -1 | 1) {
    setZoomPercent((current) => {
      return clampNumber(current + direction * zoomLimits.step, zoomLimits.min, zoomLimits.max)
    })
  }

  function startBoardPan(event: React.PointerEvent<HTMLDivElement>) {
    if (activeTool !== 'move' || event.button !== 0) return
    if (event.target !== event.currentTarget) return

    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    panningRef.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY }
    setIsPanning(true)
  }

  function updateBoardPan(event: React.PointerEvent<HTMLDivElement>) {
    const currentPan = panningRef.current
    if (!currentPan || currentPan.pointerId !== event.pointerId) return

    const deltaX = event.clientX - currentPan.x
    const deltaY = event.clientY - currentPan.y
    panningRef.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY }

    setPanOffset((current) => {
      const safeCurrent = clampPanOffset(current, viewportBounds, boardPixelSize)
      return clampPanOffset({ x: safeCurrent.x + deltaX, y: safeCurrent.y + deltaY }, viewportBounds, boardPixelSize)
    })
  }

  function finishBoardPan(event: React.PointerEvent<HTMLDivElement>) {
    if (panningRef.current?.pointerId !== event.pointerId) return

    panningRef.current = null
    setIsPanning(false)
  }

  async function uploadSceneImage(sceneId: string, file: File) {
    const validationError = validateSceneImage(file)
    setSceneSaveError(null)
    setSceneSuccessMessage(null)
    setSceneSkippedFiles([])

    const hasLocalDuplicate = preparedScenes.some((scene) => scene.id !== sceneId && filenameEquals(scene.fileName, file.name))
    if (hasLocalDuplicate) {
      const message = `${file.name} ja esta carregado nesta campanha.`
      window.alert(message)
      setPreparedScenes((current) => current.map((scene) => (scene.id === sceneId ? { ...scene, error: message } : scene)))
      return
    }

    if (campaignId) {
      try {
        const exists = await api<AssetExistsResponse>(
          `/api/assets/exists?campaignId=${encodeURIComponent(campaignId)}&filename=${encodeURIComponent(file.name)}&mimeType=${encodeURIComponent(file.type)}`,
        )
        if (exists.exists) {
          const message = `${file.name} ja esta carregado nesta campanha.`
          window.alert(message)
          setPreparedScenes((current) => current.map((scene) => (scene.id === sceneId ? { ...scene, error: message } : scene)))
          return
        }
      } catch (err) {
        setSceneSaveError(err instanceof Error ? err.message : 'Nao foi possivel validar o arquivo.')
        return
      }
    }

    setPreparedScenes((current) => {
      const sceneIndex = current.findIndex((scene) => scene.id === sceneId)
      if (sceneIndex === -1) return current

      const currentScene = current[sceneIndex]
      const nextScenes = [...current]

      if (validationError) {
        nextScenes[sceneIndex] = { ...currentScene, error: validationError }
        return nextScenes
      }

      revokeSceneImageUrl(currentScene)

      nextScenes[sceneIndex] = {
        ...currentScene,
        imageUrl: URL.createObjectURL(file),
        fileName: file.name,
        file,
        assetId: null,
        storagePath: null,
        error: null,
      }

      const hasEmptySceneAfterCurrent = nextScenes.slice(sceneIndex + 1).some((scene) => !scene.imageUrl)
      if (!hasEmptySceneAfterCurrent) {
        const nextSceneNumber = nextScenes.length + 1
        nextScenes.push(createPreparedScene(nextSceneNumber))
      }

      return nextScenes
    })
  }

  async function savePreparedScenes() {
    if (!campaignId || !isMaster || sceneSaving) return

    const pendingScenes = preparedScenes.filter((scene) => scene.file && !scene.assetId)
    if (!pendingScenes.length) return

    setSceneSaving(true)
    setSceneSaveError(null)
    setSceneSuccessMessage(null)
    setSceneSkippedFiles([])
    const skippedFiles: string[] = []
    const uploadedFiles: string[] = []

    try {
      for (const scene of pendingScenes) {
        if (!scene.file) continue

        const exists = await api<AssetExistsResponse>(
          `/api/assets/exists?campaignId=${encodeURIComponent(campaignId)}&filename=${encodeURIComponent(scene.file.name)}&mimeType=${encodeURIComponent(scene.file.type)}`,
        )

        if (exists.exists && exists.asset) {
          skippedFiles.push(scene.file.name)
          setPreparedScenes((current) =>
            current.map((item) =>
              item.id === scene.id
                ? {
                    ...item,
                    assetId: exists.asset?.id ?? null,
                    storagePath: exists.asset?.storagePath ?? null,
                    file: null,
                    error: null,
                  }
                : item,
            ),
          )
          continue
        }

        const formData = new FormData()
        formData.append('file', scene.file)

        const asset = await apiForm<AssetUploadResponse>(`/api/assets?campaignId=${encodeURIComponent(campaignId)}`, formData)
        const persistedScene = await api<CampaignSceneResponse>(`/api/campaigns/${encodeURIComponent(campaignId)}/scenes`, {
          method: 'POST',
          body: JSON.stringify({
            name: scene.name,
            order: scene.order,
            assetId: asset.id,
            backgroundUrl: asset.signedUrl,
            backgroundCacheKey: asset.storagePath,
            grid: scene.grid,
          }),
        })
        uploadedFiles.push(scene.file.name)
        setPreparedScenes((current) =>
          current.map((item) =>
            item.id === scene.id
              ? {
                  ...sceneResponseToPreparedScene(persistedScene, persistedScene.order - 1),
                  fileName: scene.file?.name ?? persistedScene.name,
                  file: null,
                  error: null,
                }
              : item,
          ),
        )
      }

      setSceneSkippedFiles(skippedFiles)
      if (uploadedFiles.length === 1) setSceneSuccessMessage(`${uploadedFiles[0]} enviado com sucesso.`)
      if (uploadedFiles.length > 1) setSceneSuccessMessage(`${uploadedFiles.length} arquivos enviados com sucesso.`)
      if (!uploadedFiles.length && skippedFiles.length) setSceneSuccessMessage(null)
    } catch (err) {
      setSceneSaveError(err instanceof Error ? err.message : 'Nao foi possivel salvar as cenas.')
    } finally {
      setSceneSaving(false)
    }
  }

  async function deletePreparedScene(sceneId: string) {
    if (sceneDeletingId || sceneSaving) return
    if (!campaignId) return

    const targetScene = preparedScenes.find((scene) => scene.id === sceneId)
    if (!targetScene) return
    if (targetScene.assetId) {
      const confirmed = window.confirm(`Deletar ${targetScene.fileName ?? targetScene.name}? Esta acao remove o asset e o arquivo no Firebase.`)
      if (!confirmed) return
    }

    setSceneDeletingId(sceneId)
    setSceneSaveError(null)
    setSceneSuccessMessage(null)
    setSceneSkippedFiles([])

    try {
      if (targetScene.assetId) {
        await api<{ ok: true }>(
          `/api/campaigns/${encodeURIComponent(campaignId ?? '')}/scenes/${encodeURIComponent(targetScene.id)}?force=true`,
          { method: 'DELETE' },
        )
        await api<{ ok: true }>(`/api/assets/${encodeURIComponent(targetScene.assetId)}?force=true`, { method: 'DELETE' })
      }

      setPreparedScenes((current) => {
        const sceneToDelete = current.find((scene) => scene.id === sceneId)
        if (sceneToDelete) revokeSceneImageUrl(sceneToDelete)
        return normalizePreparedSceneList(current.filter((scene) => scene.id !== sceneId))
      })
      setSceneSuccessMessage(`${targetScene.fileName ?? targetScene.name} deletado com sucesso.`)
    } catch (err) {
      setSceneSaveError(err instanceof Error ? err.message : 'Nao foi possivel deletar a cena.')
    } finally {
      setSceneDeletingId(null)
    }
  }

  return (
    <div
      className={[
        'relative grid h-full min-h-0 bg-[#08090c] text-white max-xl:grid-cols-1',
        rightPanelCollapsed ? 'grid-cols-[minmax(0,1fr)_72px]' : 'grid-cols-[minmax(0,1fr)_320px]',
      ].join(' ')}
    >
      <section
        className="relative min-h-0 overflow-hidden border-r border-white/10 bg-[#0b0d12]"
        onClick={() => setTokenContextMenu(null)}
      >
        <div ref={boardViewportRef} className="absolute inset-0 overflow-hidden">
          <div
            ref={gridAreaRef}
            className={[
              'relative overflow-hidden bg-[#0b0d12] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]',
              activeTool === 'move' ? (isPanning ? 'cursor-grabbing' : 'cursor-grab') : '',
            ].join(' ')}
            style={{
              width: boardPixelSize.width,
              height: boardPixelSize.height,
              transform: `translate(${clampedPanOffset.x}px, ${clampedPanOffset.y}px)`,
            }}
            onDragOver={(event) => {
              if (!isMaster || !masterCanUseVtt) return
              if (!event.dataTransfer.types.includes('application/x-questhub-character-id')) return
              event.preventDefault()
              event.dataTransfer.dropEffect = 'copy'
            }}
            onDrop={dropTokenCandidate}
            onPointerDown={startBoardPan}
            onPointerMove={updateBoardPan}
            onPointerUp={finishBoardPan}
            onPointerCancel={finishBoardPan}
          >
            {activeScene?.imageUrl ? (
              <img
                src={activeScene.imageUrl}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain"
                draggable={false}
                onLoad={(event) => {
                  const { naturalWidth, naturalHeight } = event.currentTarget
                  if (!naturalWidth || !naturalHeight) return
                  const sceneKey = sceneImageDimensionKey(activeScene)
                  sceneImageDimensionsRef.current.set(sceneKey, { width: naturalWidth, height: naturalHeight })
                  setActiveScene((current) => {
                    if (!current || sceneImageDimensionKey(current) !== sceneKey) return current
                    if (current.width === naturalWidth && current.height === naturalHeight) return current
                    return { ...current, width: naturalWidth, height: naturalHeight }
                  })
                }}
              />
            ) : (
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(99,102,241,0.10),transparent_36%),linear-gradient(180deg,rgba(8,9,12,0)_0%,rgba(8,9,12,0.72)_100%)]" />
            )}
            <VttGridOverlay settings={zoomedGridSettings} />
            {visibleTokens.map((token) => (
              <PlayerToken
                key={token.id}
                token={token}
                tokenSize={tokenSize}
                gridShape={gridSettings.shape}
                gridAreaRef={gridAreaRef}
                canDrag={
                  (sessionActive && myCharacter?.id === token.characterId && myCharacter.role === 'PLAYER') ||
                  (sessionState === 'PAUSED' && Boolean(isMaster))
                }
                isMasterView={Boolean(isMaster)}
                onMove={(position) => movePlayerToken(token, position)}
                onContextMenu={(contextToken, position) => setTokenContextMenu({ token: contextToken, ...position })}
              />
            ))}
            <VttMeasurementOverlay measurement={measurement} gridSize={tokenSize} metersPerCell={gridSettings.metersPerCell} />
            {activeTool === 'measure' && realtimeVttEnabled ? (
              <div
                className="absolute inset-0 z-[8] cursor-crosshair"
                onPointerDown={startMeasurement}
                onPointerMove={updateMeasurement}
                onPointerUp={finishMeasurement}
                onPointerCancel={finishMeasurement}
              />
            ) : null}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 flex min-h-[560px] flex-col">
          <div className="relative flex-1">
            <div className="pointer-events-auto absolute left-24 top-5 z-30 flex rounded-lg border border-white/10 bg-black/45 p-1 shadow-2xl backdrop-blur">
              {visibleToolButtons.map((tool) => {
                const Icon = tool.icon
                const active = tool.id === 'grid' ? gridSettingsOpen : activeTool === tool.id
                const disabled = sessionState === 'PAUSED' && !isMaster && tool.id !== 'select'

                return (
                  <button
                    key={tool.label}
                    type="button"
                    title={tool.label}
                    disabled={disabled}
                    className={[
                      'flex h-10 w-10 items-center justify-center rounded-md transition disabled:cursor-not-allowed disabled:opacity-45',
                      active ? 'bg-indigo-600 text-white' : 'text-zinc-300 hover:bg-white/10 hover:text-white',
                    ].join(' ')}
                    onClick={() => {
                      if (disabled) return
                      if (tool.id === 'grid') {
                        onGridSettingsOpenChange(!gridSettingsOpen)
                        if (!gridSettingsOpen) setActiveTool(null)
                        return
                      }

                      onGridSettingsOpenChange(false)
                      measuringRef.current = false
                      setActiveTool((current) => (current === tool.id ? null : tool.id))
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                )
              })}
            </div>

            {campaignId ? (
              <VttDiceControls
                campaignId={campaignId}
                character={myCharacter}
                socket={socket}
                enabled={canRollDice}
                open={activeTool === 'dice'}
                clearSignal={diceClearSignal}
                onClose={() => setActiveTool(null)}
                className="pointer-events-none absolute inset-0 z-20"
              />
            ) : null}

            {gridSettingsOpen && canConfigureGrid ? (
              <VttGridSettingsModal
                settings={gridSettings}
                onChange={handleGridSettingsChange}
                onClose={() => onGridSettingsOpenChange(false)}
              />
            ) : null}

            {activeTool === 'tokens' && isMaster ? (
              <div className="pointer-events-auto absolute left-24 top-20 z-30 w-[min(360px,calc(100vw-128px))] rounded-lg border border-white/10 bg-black/65 p-3 text-white shadow-2xl backdrop-blur">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2 text-xs font-semibold uppercase text-zinc-400">
                    <CircleUserRound className="h-4 w-4 text-indigo-300" />
                    Tokens
                  </div>
                  <button
                    type="button"
                    title="Fechar tokens"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setActiveTool(null)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {sessionState === 'PAUSED' ? (
                  <div className="mb-3 rounded-md border border-amber-300/30 bg-amber-400/10 px-3 py-2 text-xs font-semibold text-amber-100">
                    Sessao pausada. Players estao bloqueados; o Mestre ainda pode gerenciar tokens.
                  </div>
                ) : null}

                <div className="grid max-h-[360px] gap-2 overflow-auto pr-1">
                  {!availableTokenCandidates.length ? (
                    <div className="rounded-md border border-dashed border-white/10 px-3 py-6 text-center text-sm text-zinc-500">
                      Nenhum token disponivel.
                    </div>
                  ) : null}
                  {availableTokenCandidates.map((candidate) => (
                    <button
                      key={candidate.characterId}
                      type="button"
                      draggable={masterCanUseVtt}
                      disabled={!masterCanUseVtt}
                      onDragStart={(event) => dragTokenCandidate(event, candidate)}
                      className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-left transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full bg-indigo-600 text-sm font-bold text-white">
                        {candidate.avatarUrl ? <img src={candidate.avatarUrl} alt="" className="h-full w-full object-cover" /> : candidate.name.charAt(0).toUpperCase()}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-white">{candidate.name}</span>
                        <span className="block truncate text-[11px] uppercase text-zinc-500">
                          {candidate.role === 'NPC' ? 'NPC' : candidate.ownerName}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {tokenContextMenu && isMaster ? (
              <div
                className="pointer-events-auto fixed z-50 w-56 rounded-lg border border-white/10 bg-[#111217]/95 p-2 text-white shadow-2xl backdrop-blur"
                style={{ left: tokenContextMenu.x, top: tokenContextMenu.y }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="border-b border-white/10 px-2 pb-2">
                  <div className="truncate text-sm font-semibold">{tokenContextMenu.token.name}</div>
                  <div className="truncate text-xs text-zinc-500">Dono: {tokenContextMenu.token.ownerName}</div>
                </div>
                <button
                  type="button"
                  disabled={!masterCanUseVtt}
                  className="mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => toggleTokenVisibility(tokenContextMenu.token)}
                >
                  {tokenContextMenu.token.hidden ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  {tokenContextMenu.token.hidden ? 'Tornar visivel' : 'Tornar invisivel'}
                </button>
                <button
                  type="button"
                  disabled={!masterCanUseVtt}
                  className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-red-200 transition hover:bg-red-500/10 hover:text-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => removeToken(tokenContextMenu.token)}
                >
                  <Trash2 className="h-4 w-4" />
                  Remover
                </button>
              </div>
            ) : null}

            <div className="pointer-events-auto absolute right-5 top-5 z-30 flex rounded-lg border border-white/10 bg-black/45 p-1 shadow-2xl backdrop-blur">
              <button
                type="button"
                title="Diminuir zoom"
                disabled={activeZoomPercent <= zoomLimits.min}
                className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-45"
                onClick={() => changeZoom(-1)}
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <div className="flex h-10 min-w-16 items-center justify-center px-3 text-xs font-semibold text-zinc-200">{activeZoomPercent}%</div>
              <button
                type="button"
                title="Aumentar zoom"
                disabled={activeZoomPercent >= zoomLimits.max}
                className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-45"
                onClick={() => changeZoom(1)}
              >
                <ZoomIn className="h-4 w-4" />
              </button>
            </div>

            {isMaster && !sceneDockCollapsed ? (
              <SceneDock
                scenes={preparedScenes}
                activeSceneId={activeScene?.id ?? null}
                onSelectScene={selectPreparedScene}
                onPrepareScene={() => setScenePreparationOpen(true)}
                onCollapsedChange={setSceneDockCollapsed}
              />
            ) : null}

            {scenePreparationOpen && isMaster ? (
              <ScenePreparationModal
                scenes={preparedScenes}
                saving={sceneSaving}
                deletingSceneId={sceneDeletingId}
                error={sceneSaveError}
                successMessage={sceneSuccessMessage}
                skippedFiles={sceneSkippedFiles}
                onUpload={uploadSceneImage}
                onSave={savePreparedScenes}
                onDelete={deletePreparedScene}
                onClose={() => setScenePreparationOpen(false)}
              />
            ) : null}
          </div>
        </div>
      </section>

      <aside
        className={[
          'min-h-0 overflow-hidden border-l border-white/10 bg-[#101116] transition-[width] max-xl:border-l-0 max-xl:border-t',
          rightPanelCollapsed
            ? 'p-2 max-xl:absolute max-xl:inset-y-0 max-xl:right-0 max-xl:z-40 max-xl:w-[56px] max-xl:border-l max-xl:border-t-0 max-xl:bg-[#101116]/95 max-xl:shadow-2xl max-xl:backdrop-blur'
            : 'p-5',
        ].join(' ')}
      >
        <div className={rightPanelCollapsed ? 'flex h-full min-h-0 flex-col items-center gap-3' : 'hidden'}>
          <button
            type="button"
            title="Expandir painel lateral"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-200 transition hover:bg-white/10 hover:text-white"
            onClick={() => setRightPanelCollapsed(false)}
          >
            <PanelRightOpen className="h-4 w-4" />
          </button>
          <div className="grid gap-2">
            <div
              title="Jogadores"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-400"
            >
              <Users className="h-4 w-4" />
            </div>
            <div
              title="Sessao"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-[10px] font-bold uppercase text-zinc-300"
            >
              {sessionState === 'PAUSED' ? 'P' : campaign?.isOnline ? 'ON' : 'OFF'}
            </div>
            <div
              title="Chat"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-indigo-200"
            >
              <MessageCircle className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className={rightPanelCollapsed ? 'hidden h-full min-h-0 flex-col gap-4' : 'flex h-full min-h-0 flex-col gap-4'}>
          <button
            type="button"
            title="Recolher painel lateral"
            className="ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:bg-white/10 hover:text-white"
            onClick={() => setRightPanelCollapsed(true)}
          >
            <PanelRightClose className="h-4 w-4" />
          </button>
          <div className="min-h-0 flex-[4_1_0%]">
            {campaignId ? (
              <CampaignChat
                campaignId={campaignId}
                characterId={campaign?.myCharacterId}
                enabled={Boolean(campaign?.isOnline && campaign?.myStatus === 'ACTIVE')}
                className="h-full min-h-0"
              />
            ) : null}
          </div>

          {isMaster ? (
            <SceneSidebarScenes
              scenes={preparedScenes}
              activeSceneId={activeScene?.id ?? null}
              showExpandButton={sceneDockCollapsed}
              onSelectScene={selectPreparedScene}
              onExpand={() => setSceneDockCollapsed(false)}
            />
          ) : null}
        </div>
      </aside>
    </div>
  )
}
